# 🌿 Paradise Nursery

A demo plant-shop web application for browsing houseplants and filling a shopping cart. "Paradise Nursery" is the shop name used in the app; its catalogue has 15 plants in three categories: air-purifying plants, aromatic herbs and flowering plants.

[![CI](https://github.com/konethegreat/e-plantShopping/actions/workflows/ci.yml/badge.svg)](https://github.com/konethegreat/e-plantShopping/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)

## About this repository

> **Learning project.** A front-end exercise: a small plant-shop storefront built with React, Redux Toolkit and Vite. It is a demo, not a real shop: there is no backend, no accounts and no payments, and **Checkout only shows a "Coming Soon!" alert**.

| | |
| --- | --- |
| **Status** | Learning project kept as a working example. This is the **maintained copy** of the code (see "Relationship to Paradise-Nursery" below). |
| **Origin** | IBM Skills Network publishes a starter template with this repository's name, [ibm-developer-skills-network/e-plantShopping](https://github.com/ibm-developer-skills-network/e-plantShopping) (Apache-2.0). The repository name, the component names (`ProductList`, `CartItem`, `AboutUs`) and the Redux reducer names (`addItem`, `removeItem`, `updateQuantity`) match that template, so this repository appears to be a solution to that exercise. It is **not** a GitHub fork and its history does not contain the template's files; the file layout, plant data, styling and routing differ from the template. |
| **Authorship** | The 19 commits dated 17 May 2026 are authored by Kone Tshivhinda (`git log`). The later fixes, tests, CI workflow and documentation updates (October 2026) were prepared with Claude (Anthropic) and carry `Co-Authored-By` trailers. |
| **Checks** | `npm run lint`, `npm test` (24 tests: the Redux cart slice and the UI flows) and `npm run build` pass locally and in CI (badge above). |
| **Demo** | None hosted. GitHub Pages is not enabled for this repository. |

### Relationship to Paradise-Nursery

[konethegreat/Paradise-Nursery](https://github.com/konethegreat/Paradise-Nursery) contains the same application. Its 18 commits are all part of this repository's history, and at that point (`bff1ee5`) the two source trees were identical. This repository then renamed `src/redux/CartSlice.js` to `CartSlice.jsx` (no content change) and received the later work, so it is the version to use. Paradise-Nursery is kept for reference and gets documentation updates only.

---

## ✨ Features

### 🏠 Landing Page
- Full-screen hero with a background photo, a welcome message and a **Get Started** button that opens the plant catalogue

### 🌱 Plant Catalog
- Browse plants organized by category:
  - **Air Purifying**: Snake Plant, Spider Plant, Pothos, Peace Lily, Dracaena
  - **Aromatic**: Lavender, Rosemary, Mint, Basil, Thyme
  - **Flowering**: Anthurium, African Violet, Orchid, Begonia, Geranium
- Grid of plant cards that reflows to the available width, with hover effects
- Price shown for each plant
- **Add to Cart** button per plant; once a plant is in the cart its button shows "Added" and is disabled

### 🛒 Shopping Cart
- Add plants from the catalogue and remove them with **Delete**
- **+** / **-** buttons change the quantity; decreasing it to 0 removes the plant
- "Total Items" and "Total Amount" update as the cart changes
- Shows "Your cart is empty." when there is nothing in the cart
- The navigation bar shows a badge with the number of items in the cart; the cart lives in memory only and is lost when the page is reloaded
- **Continue Shopping** returns to the catalogue; **Checkout** only shows a "Coming Soon!" alert

### 📖 About Us Page
- A short page opened from the **About Us** link in the navigation bar: a welcome sentence and a one-sentence mission statement

### 🎨 Modern UI/UX
- Green colour scheme with a gradient navigation bar and gradient buttons
- CSS transitions and hover effects on cards and buttons, a fade-in on the landing page and a pulsing cart badge

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** 19 | UI framework |
| **Redux Toolkit** + React-Redux | State management (the cart) |
| **React Router** 7 | Client-side routing |
| **Vite** 8 | Build tool & dev server |
| **CSS3** | Plain CSS in `src/App.css` |
| **ESLint** | Linting |
| **Vitest** + Testing Library (jsdom) | Unit and UI tests |

---

## 📁 Project Structure

```
e-plantShopping/
├── .github/workflows/ci.yml        # CI: lint, test, build
├── public/                         # Static assets (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar with the cart badge
│   │   ├── ProductList.jsx         # Plant catalogue (/products)
│   │   ├── CartItem.jsx            # Shopping cart page (/cart)
│   │   ├── AboutUs.jsx             # About Us content (/about)
│   │   ├── LandingPage.jsx         # Not used: App.jsx renders its own landing page
│   │   └── Layout.jsx              # Not used by the router
│   ├── data/
│   │   └── plants.js               # Plant catalogue data (15 plants)
│   ├── redux/
│   │   ├── store.js                # Redux store configuration
│   │   ├── CartSlice.jsx           # Cart state, actions and selectors
│   │   └── CartSlice.test.js       # Unit tests for the cart slice
│   ├── test/setup.js               # Vitest setup (jest-dom matchers, cleanup)
│   ├── App.jsx                     # Routes and the landing page
│   ├── App.test.jsx                # UI tests: catalogue, cart, navigation
│   ├── App.css                     # Styles
│   ├── index.css                   # Empty
│   └── main.jsx                    # Entry point (Redux Provider)
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js                  # Vite and Vitest configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

---

## 📋 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 🎯 Key Features Implemented

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
✅ **State Management** - Redux Toolkit for efficient cart management  
✅ **Component Architecture** - Modular, reusable components  
✅ **Client-Side Routing** - Smooth navigation between pages  
✅ **Modern Styling** - CSS3 with gradients, animations, and transitions  
✅ **User Experience** - Intuitive interface with visual feedback  
✅ **Performance** - Optimized with Vite for fast builds  

---

## 🌳 Plant Categories

### Air Purifying Plants
Natural air cleaners that improve indoor air quality and create a healthier home environment.

### Aromatic Plants
Fragrant herbs and plants perfect for your kitchen, garden, or living space.

### Flowering Plants
Beautiful blooming plants that add color and elegance to any room.

---

## 🎨 Design Highlights

- **Color Palette**: Forest greens (#2d6a4f, #40916c, #52b788) with warm accents (#f4a261)
- **Typography**: Clean, modern fonts for excellent readability
- **Animations**: Smooth transitions and hover effects for enhanced interactivity
- **Layout**: Centered, spacious design with clear visual hierarchy

---

## 🔄 Redux State Management

The app uses Redux Toolkit to manage the shopping cart state:

- **Cart Slice**: Handles add/remove items, quantity management, and totals
- **Actions**: `addToCart`, `removeFromCart`, `incrementQuantity`, `decrementQuantity`
- **Selectors**: `selectCartItems`, `selectTotalQuantity`, `selectTotalCost`

---

## 📱 Navigation

- **Home** (`/`) - Landing page with company introduction
- **Plants** (`/products`) - Browse all plant categories
- **About Us** (`/about`) - Learn about Paradise Nursery
- **Cart** (`/cart`) - View and manage shopping cart

---

## 🚀 Future Enhancements

- User authentication & accounts
- Product reviews and ratings
- Search and filtering functionality
- Payment gateway integration
- Order tracking system
- User wishlist feature
- Plant care guides and tips
- Email notifications

---

## 💡 Tips for Development

1. **Hot Module Replacement (HMR)**: Changes are reflected instantly during development
2. **Redux DevTools**: Use Redux DevTools browser extension for state debugging
3. **Component Reusability**: Keep components small and focused on single responsibilities
4. **CSS Organization**: Styles are centralized in App.css for easy maintenance

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Support

For questions or issues, please reach out or create an issue in the repository.

---

**Made with 🌱 by the Paradise Nursery Team**

Bringing nature home since 2015.
