Bandage E-Commerce Project

A full-featured, responsive e-commerce web application built with React, Redux, and Tailwind CSS. The project covers the complete shopping flow — from browsing products and managing a cart to placing orders and viewing order history.

Live Demo: [https://e-commerce-project-gamma-five.vercel.app](https://e-commerce-project-gamma-five.vercel.app)

Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Getting Started](#getting-started)
- [Environment](#environment)
- [Known Issues & Notes](#known-issues--notes)
- [Future Work](#future-work)

Features

Authentication
- User registration with email verification
- Login with JWT token stored in localStorage (when "Remember Me" is checked)
- Auto-login on page refresh via `/verify` endpoint
- Protected routes — unauthenticated users are redirected to `/login`
- User dropdown menu in header showing name, order history link, and logout

Homepage
- Hero section with image carousel (2 slides)
- Editor's Pick category grid (Men, Women, Accessories, Kids)
- Bestseller Products — top 8 products by rating fetched from the API
- "Vita Classic Product" promotional section
- Featured blog posts section
- All product cards link to the product detail page

Shop
- Product listing with pagination (24 products per page)
- Filter by category (via URL params)
- Text search filter
- Client-side sorting (price ascending/descending, rating ascending/descending)
- Top 5 categories by rating shown as visual cards
- Product images fetched from the API

Product Detail
- Image carousel with thumbnail navigation
- Product name, rating stars, price, stock availability, description
- Add to Cart button
- Description / Additional Information / Reviews tab bar
- Bestseller products section at the bottom

Shopping Cart
- Add products to cart from the product detail page
- Cart dropdown in header showing items, quantities, and total
- Cart page with full item management:
  - Select/deselect individual items or all items
  - Increase/decrease item count
  - Remove items
  - Order summary box with products total, shipping cost, and free shipping discount
- "Sepeti Onayla" button navigates to the order page

Order Flow (2-step)
- Step 1 — Address: Fetch, add, edit, and delete delivery addresses via API
- Step 2 — Payment: Fetch, add, edit, and delete saved cards via API; CVV input for security
- Order summary sidebar shown on both steps
- "Ödeme Yap" places the order via `POST /order`
- Success screen shown after order is placed; cart is cleared

Previous Orders
- Lists all past orders fetched from `GET /order`
- Collapsible panels per order showing order date, total, card info
- Expanded panel shows a full product table with image, name, count, unit price, and line total

Responsive Design
- Mobile-first approach
- Hamburger menu on mobile with collapsible Shop submenu
- Desktop navigation with Shop dropdown showing Kadın / Erkek categories
- Layouts adapt at 1024px breakpoint

Tech Stack

| Category | Technology |
| Framework | React 18 |
| Routing | React Router DOM v5 |
| State Management | Redux (vanilla) + Redux Thunk |
| Styling | Tailwind CSS (arbitrary values) |
| HTTP Client | Axios |
| Forms | React Hook Form v7 |
| Icons | Lucide React |
| UI Components | Reactstrap (Bootstrap) |
| Notifications | React Toastify |
| Build Tool | Vite |
| Deployment | Vercel |

Project Structure

src/
├── actions/
│   ├── clientActions.js        # Auth: login, autoLogin, fetchRoles
│   ├── productActions.js       # fetchCategories, fetchProducts, fetchProductById
│   └── shoppingCartActions.js  # setCart, addToCart
├── reducers/
│   ├── clientReducer.js        # user, roles, theme, language
│   ├── productReducer.js       # categories, productList, selectedProduct, fetchStates
│   ├── shoppingCartReducer.js  # cart, payment, address
│   └── index.js                # combineReducers
├── store/
│   └── index.js                # Redux store with thunk + logger
├── pages/
│   ├── Hompeage.jsx            # Homepage with hero, categories, bestsellers
│   ├── ShopPage.jsx            # Product listing with filter/sort/pagination
│   ├── ProductPage.jsx         # Product detail with carousel and add-to-cart
│   ├── CartPage.jsx            # Cart management + order summary
│   ├── OrderPage.jsx           # 2-step checkout (address + payment)
│   ├── PreviousOrdersPage.jsx  # Order history with collapsible panels
│   ├── LoginPage.jsx           # Login form
│   ├── SignUpPage.jsx          # Registration form
│   ├── ContactPage.jsx         # Contact page
│   └── TeamPage.jsx            # About/Team page
├── layout/
│   ├── Header.jsx              # Responsive header with cart + user dropdowns
│   ├── TopBar.jsx              # Desktop-only top info bar
│   ├── Bottom.jsx              # Footer links + newsletter
│   ├── Footer.jsx              # Copyright footer
│   ├── FilterBar.jsx           # Shop page filter/sort controls
│   ├── Pagination.jsx          # Page number pagination
│   └── Clients.jsx             # Brand logos section
├── utils/
│   └── categoryHelpers.js      # getCategoryPath, genderMap
├── design/                     # Local image assets
├── App.jsx                     # Routes definition
├── App.css                     # Global styles (carousel buttons only)
├── index.css                   # Tailwind imports
└── main.jsx                    # React + Redux + Router entry point

Pages & Routes

| Route | Component | Auth Required |
| `/` | HomePage | No |
| `/shop` | ShopPage | No |
| `/shop/:gender/:categoryName/:categoryId` | ShopPage | No |
| `/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId` | ProductPage | No |
| `/cart` | CartPage | No |
| `/order` | OrderPage | ✅ Yes |
| `/orders` | PreviousOrdersPage | ✅ Yes |
| `/contact` | ContactPage | No |
| `/team` | TeamPage | No |
| `/signup` | SignUpPage | No |
| `/login` | LoginPage | No |

---

State Management

Redux store shape:

```js
{
  client: {
    user: {},           // logged-in user object with token
    roles: [],          // available roles from API
    theme: "",
    language: ""
  },
  product: {
    categories: [],         // all categories
    productList: [],        // current page product list
    total: 0,               // total product count for pagination
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",       // list fetch state
    selectedProduct: null,           // product detail
    productFetchState: "NOT_FETCHED" // detail fetch state
  },
  shoppingCart: {
    cart: [
      { count: 1, checked: true, product: { id, name, price, images, ... } }
    ],
    payment: {},
    address: {}
  }
}
```

API Integration

Base URL:`https://workintech-fe-ecommerce.onrender.com`

All authenticated requests include the JWT token in the `Authorization` header (no `Bearer` prefix — this is the API's format).

| Method | Endpoint | Auth | Description |
| GET | `/roles` | No | Fetch available roles |
| POST | `/signup` | No | Register new user |
| POST | `/login` | No | Login, returns token |
| GET | `/verify` | Yes | Verify token, returns renewed token |
| GET | `/categories` | No | Fetch all categories |
| GET | `/products` | No | Fetch products (supports `category`, `filter`, `limit`, `offset`) |
| GET | `/products/:id` | No | Fetch single product |
| GET | `/user/address` | Yes | Get saved addresses |
| POST | `/user/address` | Yes | Create address |
| PUT | `/user/address` | Yes | Update address |
| DELETE | `/user/address/:id` | Yes | Delete address |
| GET | `/user/card` | Yes | Get saved cards |
| POST | `/user/card` | Yes | Add card |
| PUT | `/user/card` | Yes | Update card |
| DELETE | `/user/card/:id` | Yes | Delete card |
| GET | `/order` | Yes | Get order history |
| POST | `/order` | Yes | Place new order |

Getting Started

Prerequisites
- Node.js 18+
- npm or yarn

Installation

```bash
# Clone the repository
git clone https://github.com/your-username/e-commerce-project.git
cd e-commerce-project

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

Build for Production

```bash
npm run build
```

Test Credentials

You can use these pre-verified accounts to test the application:

| Email | Password | Role |
| `customer@commerce.com` | `123456` | Customer |
| `store@commerce.com` | `123456` | Store |
| `admin@commerce.com` | `123456` | Admin |

You can also register your own account. After registration, check your email and click the activation link before logging in.

Environment

No `.env` file is required — the API base URL is hardcoded in `src/actions/clientActions.js`:

```js
export const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
});
```

To switch to a different backend, update this URL.

Known Issues & Notes

- Address/Card API with test accounts: The pre-provided test accounts (`customer@commerce.com` etc.) return `401 - User is not verified` from the `/user/address` and `/user/card` endpoints. This is a known limitation of the API. To use address and card features, register a new account and verify it via email.

- Token in localStorage: The token is only persisted to `localStorage` when the user checks "Remember Me" on login. Without it, the session ends on page refresh.

- Sorting is client-side: The API does not support server-side sorting. Sorting by price or rating is applied to the current page's results only, not the full dataset.

Future Work

- [ ] Build Java Spring Boot backend with PostgreSQL (Railway deployment)
  - Entities: User, Role, Store, Category, Product, Address, Card, Order
  - JWT authentication with email verification
  - All endpoints mirroring the current API
- [ ] Convert remaining `class` attributes to `className` across all page components
- [ ] Add wishlist functionality (HeartPlus icon in header)
- [ ] Add product reviews/comments section
- [ ] Implement discount code functionality on cart page
- [ ] Add order status tracking on previous orders page
- [ ] Mobile-optimize the order page forms

License

This project was built as a frontend capstone project. All product data and images are provided by the course API.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
