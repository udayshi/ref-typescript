# Setting Up and Configuring TypeScript

This guide will walk you through setting up and configuring TypeScript for your project.

---
## Quick Install
### Prerequisites
Ensure you have install docker with docker compose and git.

### Clone from github
```git
git clone git@github.com:udayshi/ref-typescript.git
cd ref-typescript
source env_alias
ts_build
docker-compose up -d
npm i
```





## Prerequisites
Ensure you have the following installed:
- **Node.js**: Download and install it from [Node.js Official Website](https://nodejs.org/).
- **npm**: Comes with Node.js. Verify installation using:
  ```bash
  node --version
  npm --version
  ```

---

## Steps to Set Up TypeScript

### 1. Install TypeScript
You can install TypeScript globally or locally:

#### Global Installation
```bash
npm install -g typescript
```

Verify the installation:
```bash
tsc --version
```

#### Local Installation (Preferred for Projects)
```bash
npm install typescript --save-dev
```

---

### 2. Initialize the Project
Run the following command to create a `package.json` file:
```bash
npm init -y
```

---

### 3. Create a `tsconfig.json` File
The `tsconfig.json` file contains the configuration for the TypeScript compiler.

#### Automatically Generate `tsconfig.json`
Run:
```bash
tsc --init
```

This will create a basic `tsconfig.json` file.

---

### 4. Configure `tsconfig.json`
Here’s an example configuration with common settings:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

Key settings:
- `target`: Specifies the JavaScript version to output.
- `module`: Sets the module system (e.g., CommonJS, ES6).
- `outDir`: Directory for compiled files.
- `rootDir`: Directory containing source files.
- `strict`: Enables strict type-checking.

---

### 5. Create a Source Directory
Create a folder for your TypeScript files:
```bash
mkdir src
```

Inside the `src` folder, create a sample TypeScript file (`index.ts`):
```typescript
// src/index.ts
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
```

---

### 6. Compile TypeScript
Run the TypeScript compiler (`tsc`) to generate JavaScript files:
```bash
tsc
```

The compiled files will appear in the `dist` folder (as specified in `tsconfig.json`).

---

### 7. Run the Compiled JavaScript
Use Node.js to execute the compiled JavaScript file:
```bash
node dist/index.js
```

---

### 8. Add Build Scripts to `package.json`
Add the following scripts to automate the build process:
```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Now you can run:
```bash
npm run build    # Compile TypeScript files
npm start        # Run the application
```

---

## Optional Tools

### ESLint (Linting)
To ensure consistent code quality, install ESLint with TypeScript support:
```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### Prettier (Code Formatting)
Install Prettier to format your code:
```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

---

## Example Project Structure
After setup, your project structure should look like this:
```
my-typescript-project/
├── dist/                // Compiled JavaScript files
├── node_modules/        // Dependencies
├── src/                 // TypeScript source files
│   └── index.ts
├── tsconfig.json        // TypeScript configuration
├── package.json         // Project metadata and scripts
└── package-lock.json    // Dependency lock file
```

---

## Additional Steps for Frameworks
If you're using TypeScript with a framework, install the appropriate type definitions:
- **Node.js**: `npm install @types/node --save-dev`
- **React**: `npm install @types/react --save-dev`
- **Express**: `npm install @types/express --save-dev`

---

## Getting Help
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

You’re all set to start using TypeScript in your project! 🎉 Happy coding! 🚀
