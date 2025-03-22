# NestJS REST API

A starter scalable REST API built with NestJS, TypeScript, and PostgreSQL.

## Features

- 🚀 NestJS framework
- 📝 TypeScript for type safety
- 🔐 JWT Authentication
- 📊 PostgreSQL with TypeORM
- 📚 Swagger API documentation
- ✅ Request validation with class-validator
- 🔄 Environment configuration
- 🛡️ Security best practices

## Prerequisites

- Node.js (v16 or higher)
- pnpm
- PostgreSQL

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nestjs-api.git
cd nestjs-api

# Install dependencies
pnpm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=nestjs
JWT_SECRET=your_jwt_secret_key
```

## Running the app

```bash
# development
pnpm run start:dev

# production mode
pnpm run build
pnpm run start:prod
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:3000/api/docs
```

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Users

- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

## Testing with Postman

1. **Create a User**
   - Method: POST
   - URL: `http://localhost:3000/api/users`
   - Body:

     ```json
     {
       "email": "user@example.com",
       "name": "Example User",
       "password": "password123"
     }
     ```

2. **Login**
   - Method: POST
   - URL: `http://localhost:3000/api/auth/login`
   - Body:

     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```

   - Save the returned JWT token

3. **Access Protected Routes**
   - Add Authorization header: `Bearer <your_jwt_token>`
   - Example: GET `http://localhost:3000/api/auth/profile`

## Project Structure

```
src/
├── common/              # Common utilities, filters, guards, etc.
├── config/              # Configuration files
├── modules/             # Feature modules
│   ├── auth/            # Authentication module
│   │   ├── dto/         # Data Transfer Objects
│   │   ├── guards/      # Auth guards
│   │   ├── strategies/  # Passport strategies
│   │   ├── decorators/  # Custom decorators
│   ├── users/           # Users module
│   │   ├── dto/         # Data Transfer Objects
│   │   ├── entities/    # TypeORM entities
├── app.module.ts        # Main application module
├── app.controller.ts    # Main application controller
├── app.service.ts       # Main application service
├── main.ts              # Application entry point
```

## Security Measures

- Password hashing with bcrypt
- JWT token authentication
- Request validation
- CORS protection
- Rate limiting (configurable)

## Development

### Creating a New Module

```bash
mkdir -p src/modules/your-module/{dto,entities}
touch src/modules/your-module/your-module.controller.ts
touch src/modules/your-module/your-module.service.ts
touch src/modules/your-module/your-module.module.ts
```

### Adding New Entity

1. Create entity file in `src/modules/your-module/entities/your-entity.entity.ts`
2. Add entity to TypeORM module imports in related module

## License

This project is licensed under the MIT License - see the LICENSE file for details.
