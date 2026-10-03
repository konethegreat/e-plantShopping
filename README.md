# 🌿 Paradise Nursery

A beautiful, modern e-commerce web application for browsing and purchasing houseplants. Paradise Nursery brings nature indoors with a handpicked selection of air-purifying plants, aromatic herbs, and stunning flowers.

[![CI](https://github.com/konethegreat/e-plantShopping/actions/workflows/ci.yml/badge.svg)](https://github.com/konethegreat/e-plantShopping/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
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
- Eye-catching hero section with gradient background
- Compelling call-to-action buttons
- Easy navigation to explore plants and learn more about the company

### 🌱 Plant Catalog
- Browse plants organized by category:
  - **Air Purifying**: Snake Plant, Spider Plant, Pothos, Peace Lily, Dracaena
  - **Aromatic**: Lavender, Rosemary, Mint, Basil, Thyme
  - **Flowering**: Anthurium, African Violet, Orchid, Begonia, Geranium
- Responsive grid layout with smooth hover effects
- Detailed pricing information
- Add to cart functionality with duplicate prevention

### 🛒 Shopping Cart
- Add/remove items from cart
- Adjust quantities with increment/decrement buttons
- Real-time cart total and item count
- Empty cart messaging with helpful guidance
- Persistent cart badge in navigation

### 📖 About Us Page
- Company mission and values
- Historical background
- Benefits and highlights
- Professional design with organized sections

### 🎨 Modern UI/UX
- Beautiful gradient design with green color scheme
- Smooth animations and transitions
- Responsive design for all screen sizes
- Professional typography and spacing
- Interactive hover effects and visual feedback

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI framework |
| **Redux Toolkit** | State management |
| **React Router** | Client-side routing |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling with modern features |
| **ESLint** | Code quality |

---

## 📁 Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar
│   │   ├── Layout.jsx              # Page layout wrapper
│   │   ├── LandingPage.jsx         # Hero landing page
│   │   ├── ProductList.jsx         # Plant catalog
│   │   ├── CartItem.jsx            # Shopping cart page
│   │   └── AboutUs.jsx             # Company information
│   ├── data/
│   │   └── plants.js               # Plant catalog data
│   ├── redux/
│   │   ├── store.js                # Redux store configuration
│   │   └── CartSlice.js            # Cart state & actions
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Base styles
├── public/                         # Static assets
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
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
