# JWT Auth Backend API

A simple Node.js backend API demonstrating **JWT-based authentication** with **role-based access control** using **Express**, **MongoDB**, **bcrypt**, and **JSON Web Tokens (JWT)**.  

---

## Features

- User registration and login
- Password hashing with **bcrypt**
- JWT authentication
- Role-based access control (`admin`, `manager`, `user`)
- Protected API routes

---

## Requirements

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- Git

---

## Dependencies
- express – Web framework
- bcryptjs – Password hashing
- jsonwebtoken – JWT creation and verification
- mongoose – MongoDB ODM
- dotenv – Environment variable management

---

## Environment Variables
PORT – Port on which the server will run (default 5000)
MONGO_URI – Your MongoDB connection string
JWT_SECRET – Secret key used to sign JWT tokens (keep this private!)

---

## API Endpoints
- Public Routes
 - POST /register – Register a new user
 - POST /login – Login and receive JWT token
 
- Protected Routes
 - GET /admin – Only admin can access
 - GET /manager – admin and manager can access
 - GET /user – admin, manager, and user can access

Note: All protected routes require the Authorization: Bearer <JWT> header.
