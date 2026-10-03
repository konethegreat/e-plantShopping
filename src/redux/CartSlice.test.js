import { describe, expect, it } from 'vitest'
import reducer, {
  addItem,
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalCost,
} from './CartSlice'

// Synthetic catalogue entries: the slice only cares about id, price and quantity.
const fern = { id: 1, name: 'Test Fern', price: 12.5, category: 'Test', thumbnail: 'fern.jpg' }
const herb = { id: 2, name: 'Test Herb', price: 7.99, category: 'Test', thumbnail: 'herb.jpg' }

const empty = () => reducer(undefined, { type: 'unknown' })
const withBoth = () => reducer(reducer(empty(), addItem(fern)), addItem(herb))

describe('cart reducer', () => {
  it('starts with an empty cart', () => {
    expect(empty()).toEqual({ items: [] })
  })

  it('adds a new item with quantity 1 and keeps its catalogue fields', () => {
    const state = reducer(empty(), addItem(fern))
    expect(state.items).toEqual([{ ...fern, quantity: 1 }])
  })

  it('increments the quantity when the same item is added again', () => {
    const state = reducer(reducer(empty(), addItem(fern)), addItem(fern))
    expect(state.items).toHaveLength(1)
    expect(state.items[0].quantity).toBe(2)
  })

  it('removes only the item with the given id', () => {
    const state = reducer(withBoth(), removeItem(fern.id))
    expect(state.items.map((item) => item.id)).toEqual([herb.id])
  })

  it('ignores removal of an id that is not in the cart', () => {
    const before = withBoth()
    expect(reducer(before, removeItem(999))).toEqual(before)
  })

  it('sets the quantity to the requested value', () => {
    const state = reducer(withBoth(), updateQuantity({ id: herb.id, quantity: 4 }))
    expect(state.items.find((item) => item.id === herb.id).quantity).toBe(4)
    expect(state.items.find((item) => item.id === fern.id).quantity).toBe(1)
  })

  it.each([0, -1])('removes the item when the quantity is set to %i', (quantity) => {
    const state = reducer(withBoth(), updateQuantity({ id: fern.id, quantity }))
    expect(state.items.map((item) => item.id)).toEqual([herb.id])
  })

  it('ignores a quantity update for an id that is not in the cart', () => {
    const before = withBoth()
    expect(reducer(before, updateQuantity({ id: 999, quantity: 3 }))).toEqual(before)
  })
})

describe('cart selectors', () => {
  const rootState = (cart) => ({ cart })

  it('returns the items in the cart', () => {
    const cart = withBoth()
    expect(selectCartItems(rootState(cart))).toBe(cart.items)
  })

  it('sums the quantities of all items', () => {
    const cart = reducer(withBoth(), updateQuantity({ id: fern.id, quantity: 3 }))
    expect(selectTotalQuantity(rootState(cart))).toBe(4)
  })

  it('sums price x quantity over all items', () => {
    const cart = reducer(withBoth(), updateQuantity({ id: fern.id, quantity: 3 }))
    // 3 x 12.50 + 1 x 7.99
    expect(selectTotalCost(rootState(cart))).toBeCloseTo(45.49, 2)
  })

  it('reports zero for an empty cart', () => {
    expect(selectTotalQuantity(rootState(empty()))).toBe(0)
    expect(selectTotalCost(rootState(empty()))).toBe(0)
  })
})
