# Show Commerce Server

Show Commerce is an innovative e-commerce platform that empowers users to create and order customized printed products. Whether you're looking for personalized apparel, unique accessories, or customized promotional items, our platform provides you with a seamless experience to bring your creative ideas to life.

# [Client Side](https://show-commerce-client.vercel.app/): https://show-commerce-client.vercel.app/

## Scripts

Here are the available scripts for managing and running your server-side project:

- **start/prod**: Start the production server.
- **build**: Build the project, removing the `./dist` directory and compiling TypeScript code.
- **dev**: Start the development server with automatic code reloading using Nodemon.
- **lint:check**: Check for code style and linting issues using ESLint.
- **lint:fix**: Automatically fix code style and linting issues using ESLint.
- **prettier:check**: Check code formatting with Prettier.
- **prettier:fix**: Automatically format code using Prettier.
- **prepare**: Install Husky for Git hooks.
- **up**: Execute an upgrade script (if available).

## Packages

The following packages are used in your server-side project:

- **cors**: Middleware for handling Cross-Origin Resource Sharing (CORS).
- **dotenv**: Load environment variables from a `.env` file.
- **express**: Web framework for building server-side applications.
- **express-rate-limit**: Rate limiting middleware for Express.
- **helmet**: Middleware for enhancing security by setting various HTTP headers.
- **hpp**: Middleware for protecting against HTTP Parameter Pollution attacks.

### Development Packages

These packages are used for development and code quality:

- **eslint**: A tool for identifying and fixing problems in JavaScript and TypeScript code.
- **eslint-config-prettier**: ESLint configuration that disables conflicting Prettier rules.
- **eslint-config-standard-with-typescript**: ESLint configuration for TypeScript with StandardJS rules.
- **eslint-plugin-import**: ESLint plugin for linting import statements.
- **eslint-plugin-n**: ESLint plugin for detecting the correct usage of `then` with Promises.
- **eslint-plugin-prettier**: ESLint plugin for Prettier integration.
- **eslint-plugin-promise**: ESLint plugin for enforcing best practices with JavaScript Promises.
- **husky**: Git hooks made easy to ensure code quality.
- **morgan**: HTTP request logger middleware for Node.js.
- **nodemon**: Development tool for restarting the server on code changes.
- **prettier**: Code formatter to enforce consistent code style.
- **typescript**: TypeScript compiler for statically typed JavaScript.

## Folder Structure

```sh
.
├── .eslintignore         # Files and directories to ignore by ESLint.
├── .gitignore            # Files and directories to ignore by Git.
├── package.json          # Project configuration and dependencies.
├── README.md             # Project's README file for documentation.
├── upgrade.sh            # Script for project upgrades.
├── .eslintrc.json        # ESLint configuration for code linting rules.
├── .husky                # Husky configuration directory.
├── .prettierignore       # Files and directories to ignore by Prettier.
├── src                   # Source code directory.
│   ├── app.ts            # Main application entry point.
│   ├── controllers       # Controllers for handling routes and logic.
│   ├── errors            # Custom error handling logic.
│   ├── routes            # API routes and route handlers.
│   ├── types             # TypeScript type definitions.
│   └── utils             # Utility functions or helper modules.
├── dist                  # Compiled TypeScript code directory (generated).
├── node_modules          # Node.js dependencies (installed via package.json).
├── .prettierrc.json      # Prettier code formatter configuration.
├── tsconfig.json         # TypeScript configuration file.
└── yarn.lock             # Yarn lockfile, used for package version control.
```
