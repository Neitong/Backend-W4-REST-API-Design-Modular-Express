# Backend REST API Design with Modular Express

This repository contains two Express.js REST API examples demonstrating modular architecture and best practices.

## Project Structure

```
StartCode/
├── EX-1/                 
│   ├── controllers/  
│   │   ├── userControllers.js    
│   ├── middleware/    
│   │   ├── logger.js
│   ├── models/       
│   │   ├── userModels.js
│   ├── routes/   
│   │   ├── userRoutes.js   
│   ├── package.json     
│   └── server.js        
│
└── EX-2/                 
    ├── controllers/
    │   ├── articleController.js
    │   ├── categoryController.js
    │   ├── journalistController.js
    ├── middleware/  
    │   ├── errorHandling.js
    │   ├── logger.js
    │   ├── validateId.js    
    ├── models/    
    │   ├── data.js      
    ├── routes/   
    │   ├── articleRoute.js
    │   ├── categoryRoute.js
    │   ├── journalistRoute.js      
    ├── package.json     
    └── server.js

```

## Examples

### EX-1: User Management API

A basic CRUD API for managing users with the following endpoints:

- GET `/users` - Get all users
- GET `/users/:id` - Get user by ID
- POST `/users` - Create new user
- PUT `/users/:id` - Update user
- DELETE `/users/:id` - Delete user

### EX-2: News Management API

A more complex API managing articles, journalists, and categories:

- Articles:
  - GET `/articles`
  - GET `/articles/:id`
  - POST `/articles`
  - PUT `/articles/:id`
  - DELETE `/articles/:id`

- Categories:
  - GET `/categories`
  - GET `/categories/:id`
  - POST `/categories`
  - PUT `/categories/:id`
  - DELETE `/categories/:id`
  - GET `/categories/:id/articles`

- Journalists:
  - GET `/journalists`
  - GET `/journalists/:id`
  - POST `/journalists`
  - PUT `/journalists/:id`
  - DELETE `/journalists/:id`
  - GET `/journalists/:id/articles`

## Installation

1. Clone the repository
2. Navigate to either example directory:
```sh
cd StartCode/EX-1
# or
cd StartCode/EX-2
```
3. Install dependencies:
```sh
npm install
```
4. Start the server:
```sh
node server.js
```

The server will start on `http://localhost:4000`

## Features

- Modular Express.js architecture
- RESTful API design
- Middleware implementation
- Error handling
- Request logging
- ID validation
- In-memory data storage
- ES Modules support