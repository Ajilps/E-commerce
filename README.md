# E-Commerce Application

A full-featured e-commerce web application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication** – Register, login, OTP verification, Google/Facebook OAuth, and password reset via email
- **Product Management** – Browse products by category and brand, with search and filtering
- **Shopping Cart & Wishlist** – Add items to cart or save for later
- **Checkout & Payments** – Razorpay integration for online payments, plus wallet support
- **Order Management** – Place orders, track status, request returns, and download invoices
- **Coupons & Discounts** – Apply coupon codes at checkout
- **Admin Panel** – Manage products, categories, brands, orders, customers, coupons, and sales reports
- **Image Uploads** – Cloudinary-based image storage for product images
- **Sales Reports** – Exportable reports in PDF and Excel formats

## Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Runtime    | Node.js                           |
| Framework  | Express.js                        |
| Database   | MongoDB with Mongoose             |
| Templating | EJS                               |
| Auth       | express-session, JWT, Passport.js |
| Payments   | Razorpay                          |
| Email      | Nodemailer                        |
| Storage    | Cloudinary, Multer                |
| PDF/Excel  | PDFKit, ExcelJS                   |

## Getting Started

### Prerequisites


- Node.js (20) recommended  
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd E-commerce-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── controllers/        # Route handler logic (user & admin)
├── models/             # Mongoose data models
├── routes/             # Express route definitions
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
├── middlewares/        # Auth and pagination middleware
├── utils/              # Helper utilities
├── db/                 # Database connection
├── app.js              # Express app setup
└── index.js            # Entry point
```

## License

ISC
