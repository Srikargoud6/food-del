# Tomato - A Food Delivery Application

Welcome to the **Food Delivery Application**! This project is designed to make ordering your favorite meals easy and convenient. With a user-friendly interface and a diverse menu, you can satisfy your cravings in just a few clicks.

## Live Demo

Check out the live application here: [Food Delivery Application](https://food-del-srikar.onrender.com/)

## Features

- **Browse Menu**: Explore a wide variety of dishes with detailed descriptions and images.
- **User Authentication**: Secure login and registration for personalized experiences.
- **Add to Cart**: Easily add your favorite dishes to the cart and manage your orders.
- **Order Management**: Track your orders and enjoy quick delivery.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Payment Integration**: Stripe (optional)
- **Environment Variables**: dotenv
- **Version Control**: Git

## Getting Started

### Prerequisites

Before you start, make sure you have:

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas account

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/food-delivery-application.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd food-delivery-application
   ```

3. **Install dependencies for the frontend**:

   ```bash
   cd frontend
   npm install
   ```

4. **Install dependencies for the backend**:

   ```bash
   cd ../backend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Running the Application

1. **Start the backend server**:

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign Up / Log In**: Create a new account or log in with existing credentials.
- **Browse Menu**: View available food items and their details.
- **Add to Cart**: Select desired items and add them to your cart.
- **Checkout**: Review your cart and proceed to payment.
- **Order Tracking**: Monitor the status of your orders in real-time.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
