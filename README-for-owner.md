Owner's Guide to Git & Deployment
This document serves as a reference for handling key Git workflows and deployment procedures for this project.

1. Deploying Code to GitHub
To push your local changes to the GitHub repository, follow the standard three-step process. It's always a good practice to check the status of your files first.

Check Status:

Bash

git status
Stage, Commit, & Push:

Bash

git add .
git commit -m "Your descriptive commit message"
git push origin main
git add . stages all new, modified, and deleted files.

git commit -m "..." creates a new commit with a message summarizing your changes.

git push origin main sends the new commit to the main branch on GitHub.

2. Fixing Case-Sensitivity Issues
Because Git on Windows can sometimes ignore file name capitalization changes (like searchbar.scss vs. SearchBar.scss), the remote build on GitHub can fail. To fix this, you must force Git to see it as a new file.

Step 1: Untrack the old file
This command removes the file from Git's index without deleting it from your local machine.

Bash

git rm --cached src/components/pages/SearchBar/searchBar.scss
Step 2: Add the correctly-cased file
Now, add the file with the correct capitalization. Git will treat this as a new file.

Bash

git add src/components/pages/SearchBar/SearchBar.scss
Step 3: Commit and Push
Commit this change and push it to GitHub to resolve the build error.

Bash

git commit -m "Fix: Resolved case-sensitivity issue with searchBar.scss"
git push origin main
3. Deploying Code Corrections to Firebase
This project uses an automated deployment workflow via GitHub Actions. You typically do not need to manually deploy.

How it Works:

You push a commit to the main branch on GitHub.

This push automatically triggers the GitHub Action workflow.

The workflow builds the project and, if the build is successful, it automatically deploys the code to Firebase Hosting.

For a Manual Deploy (if needed):
If you want to bypass GitHub Actions and deploy a local build directly, you can use the Firebase CLI from your terminal.

Bash

npm run build
firebase deploy --only hosting