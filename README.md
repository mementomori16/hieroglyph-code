# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
Deployment Instructions for this React Application- Hieroglyph Code

This guide outlines two methods for deploying your web application to Firebase Hosting: a direct manual approach using the Firebase CLI and an automated approach using GitHub Actions for continuous integration and deployment (CI/CD).

🛠️ Prerequisites
Before you begin, ensure you have the following installed and set up:

Node.js & npm: Download and install from the official website.

Firebase Account: Create an account and a project on the Firebase Console.

GitHub Account & Repository: Your project code should be in a GitHub repository.

Method 1: Manual Deployment to Firebase
This method is ideal for one-off deployments or for testing changes locally.

Step 1: Install Firebase CLI
Open your terminal or command prompt and install the Firebase command-line tools globally.

npm install -g firebase-tools


Step 2: Log In to Firebase
Use your Google account to authenticate the CLI.

firebase login


This will open a browser window to complete the login process.

Step 3: Initialize Firebase Hosting
Navigate to the root directory of your project and initialize Firebase Hosting.

firebase init hosting


Follow the prompts:

Which Firebase features do you want to set up for this directory? Select Hosting: Configure files for Firebase Hosting and set up GitHub Action deploys.

Select a default Firebase project for this directory: Choose the project you created on the Firebase Console.

What do you want to use as your public directory? Type dist and press Enter. This is the folder that contains your compiled application files.

Configure as a single-page app (rewrite all URLs to /index.html)? Type Y and press Enter.

Set up automatic builds and deploys with GitHub? Type N for this manual method.

This will create a firebase.json and .firebaserc file in your project.

Step 4: Build Your Application
Before deploying, you must build your application to create the production-ready dist folder.

npm run build


Step 5: Deploy to Firebase
Now, deploy your built application to Firebase Hosting.

firebase deploy --only hosting


After the deployment is complete, the terminal will provide a "Hosting URL" where your live website is available.

Method 2: Automated Deployment via GitHub Actions
This method automates the entire deployment process. Once configured, your site will be automatically deployed to Firebase every time you push a commit to the main branch.

Step 1: Generate a Firebase Deploy Token
In your terminal, generate a deployment token for GitHub to use.

firebase login:ci


A browser window will open. Log in and you will be provided with a long, unique token. Copy this token immediately and do not share it.

Step 2: Add the Token to GitHub Secrets
Go to your GitHub repository.

Click on the Settings tab.

In the left sidebar, navigate to Secrets and variables > Actions.

Click New repository secret.

For the Name, use FIREBASE_SERVICE_ACCOUNT_TOKEN.

For the Secret, paste the token you copied in the previous step.

Click Add secret.

Step 3: Configure the GitHub Actions Workflow
In your project's root directory, create a folder named .github and a subfolder named workflows.

Inside the workflows folder, create a new YAML file named firebase-hosting.yml.

Copy and paste the following code into the firebase-hosting.yml file.

name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build the app
        run: npm run build

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_TOKEN }}'
          projectId: 'YOUR_FIREBASE_PROJECT_ID'
          channelId: 'live'
          entryPoint: ''


Important: Replace YOUR_FIREBASE_PROJECT_ID with your actual Firebase project ID. You can find this ID on your Firebase Console.

Step 4: Push to GitHub
Commit and push your new workflow file to the main branch of your GitHub repository.

git add .github/workflows/firebase-hosting.yml
git commit -m "feat: Add GitHub Actions for Firebase deployment"
git push origin main


GitHub Actions will automatically detect the new file and start the deployment process. You can monitor the progress in the Actions tab of your GitHub repository.

By following these steps, you can successfully deploy your application to Firebase and choose the deployment workflow that best suits your needs.

Fast deploy in firebase:

npm run build

firebase deploy --only hosting/firebase deploy

