import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/CartSlice'
import plants from './data/plants'
import App from './App'

// App owns its BrowserRouter, so the starting page is chosen through the History API.
// Each test gets a fresh store so cart state never leaks between tests.
function renderAt(path) {
  window.history.pushState({}, '', path)
  const store = configureStore({ reducer: { cart: cartReducer } })
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  return store
}

const plantCard = (name) => screen.getByRole('heading', { name, level: 3 }).closest('.plant-card')
const cartRow = (name) => screen.getByRole('heading', { name, level: 3 }).closest('.cart-item')
const headerCartLink = () => screen.getByRole('link', { name: /^Cart/ })
const addToCart = (name) =>
  fireEvent.click(within(plantCard(name)).getByRole('button', { name: 'Add to Cart' }))

afterEach(() => {
  vi.restoreAllMocks()
})

describe('landing page and navigation', () => {
  it('leads from the landing page to the plant catalogue', async () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: 'Welcome to Paradise Nursery' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Get Started' }))

    expect(await screen.findByRole('heading', { name: 'Our Plants' })).toBeInTheDocument()
  })

  it('opens the About Us page from the navigation bar', async () => {
    renderAt('/products')

    fireEvent.click(screen.getByRole('link', { name: 'About Us' }))

    expect(
      await screen.findByText(/your online destination for high-quality houseplants/),
    ).toBeInTheDocument()
    // The shared navigation bar is still rendered on that page.
    expect(screen.getByRole('link', { name: 'Plants' })).toBeInTheDocument()
  })
})

describe('plant catalogue', () => {
  it('lists every plant with its price under its category', () => {
    renderAt('/products')

    for (const category of new Set(plants.map((plant) => plant.category))) {
      expect(screen.getByRole('heading', { name: category, level: 2 })).toBeInTheDocument()
    }
    for (const plant of plants) {
      expect(within(plantCard(plant.name)).getByText(`$${plant.price.toFixed(2)}`)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: 'Add to Cart' })).toHaveLength(plants.length)
  })

  it('disables the button of an added plant and shows the cart count in the header', () => {
    const store = renderAt('/products')

    addToCart('Snake Plant')

    const card = plantCard('Snake Plant')
    expect(within(card).getByRole('button', { name: 'Added' })).toBeDisabled()
    expect(headerCartLink().querySelector('.cart-badge')).toHaveTextContent('1')
    expect(store.getState().cart.items).toEqual([
      expect.objectContaining({ name: 'Snake Plant', quantity: 1 }),
    ])
  })
})

describe('shopping cart page', () => {
  it('shows an empty cart message and a zero total', () => {
    renderAt('/cart')

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
    expect(screen.getByText('Total Items: 0')).toBeInTheDocument()
    expect(screen.getByText('Total Amount: $0.00')).toBeInTheDocument()
  })

  it('lists added plants with their totals', async () => {
    renderAt('/products')
    addToCart('Snake Plant') // $15.99
    addToCart('Spider Plant') // $12.50

    fireEvent.click(headerCartLink())

    expect(await screen.findByRole('heading', { name: 'Shopping Cart' })).toBeInTheDocument()
    expect(screen.getByText('Total Items: 2')).toBeInTheDocument()
    expect(screen.getByText('Total Amount: $28.49')).toBeInTheDocument()
    expect(within(cartRow('Snake Plant')).getByText('Unit Price: $15.99')).toBeInTheDocument()
  })

  it('increases and decreases quantities and updates every total', async () => {
    renderAt('/products')
    addToCart('Snake Plant') // $15.99
    addToCart('Spider Plant') // $12.50
    fireEvent.click(headerCartLink())
    await screen.findByRole('heading', { name: 'Shopping Cart' })

    fireEvent.click(within(cartRow('Snake Plant')).getByRole('button', { name: '+' }))

    expect(within(cartRow('Snake Plant')).getByText('Subtotal: $31.98')).toBeInTheDocument()
    expect(screen.getByText('Total Items: 3')).toBeInTheDocument()
    expect(screen.getByText('Total Amount: $44.48')).toBeInTheDocument()

    fireEvent.click(within(cartRow('Snake Plant')).getByRole('button', { name: '-' }))

    expect(within(cartRow('Snake Plant')).getByText('Subtotal: $15.99')).toBeInTheDocument()
    expect(screen.getByText('Total Amount: $28.49')).toBeInTheDocument()
  })

  it('removes a plant when its quantity is decreased to zero', async () => {
    renderAt('/products')
    addToCart('Spider Plant')
    fireEvent.click(headerCartLink())
    await screen.findByRole('heading', { name: 'Shopping Cart' })

    fireEvent.click(within(cartRow('Spider Plant')).getByRole('button', { name: '-' }))

    expect(screen.queryByRole('heading', { name: 'Spider Plant' })).not.toBeInTheDocument()
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('deletes a plant with the Delete button', async () => {
    renderAt('/products')
    addToCart('Snake Plant')
    addToCart('Spider Plant')
    fireEvent.click(headerCartLink())
    await screen.findByRole('heading', { name: 'Shopping Cart' })

    fireEvent.click(within(cartRow('Snake Plant')).getByRole('button', { name: 'Delete' }))

    expect(screen.queryByRole('heading', { name: 'Snake Plant' })).not.toBeInTheDocument()
    expect(screen.getByText('Total Items: 1')).toBeInTheDocument()
    expect(screen.getByText('Total Amount: $12.50')).toBeInTheDocument()
  })

  it('returns to the catalogue with Continue Shopping and keeps the cart', async () => {
    renderAt('/products')
    addToCart('Snake Plant')
    fireEvent.click(headerCartLink())
    await screen.findByRole('heading', { name: 'Shopping Cart' })

    fireEvent.click(screen.getByRole('button', { name: 'Continue Shopping' }))

    expect(await screen.findByRole('heading', { name: 'Our Plants' })).toBeInTheDocument()
    expect(within(plantCard('Snake Plant')).getByRole('button', { name: 'Added' })).toBeDisabled()
  })

  it('treats Checkout as a placeholder that only shows an alert', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    renderAt('/cart')

    fireEvent.click(screen.getByRole('button', { name: 'Checkout' }))

    expect(alertSpy).toHaveBeenCalledWith('Coming Soon!')
  })
})
