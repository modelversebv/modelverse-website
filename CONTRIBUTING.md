# Contributing Guide

To ensure a smooth and consistent development process, please follow the guidelines below.

## Available Guides

- [Blog Updates](#blog-updates)
- [Development](#development)

## Blog Updates

To make adding blog posts easy, we have a simple process you can do entirely in GitHub.

### Step 1: Create a Branch

1. Go to the repository on GitHub.
2. Under the repository name, next to the current branch name (i.e. **main**), click on **`Branches`**.
3. In the top right corner, click **`New Branch`**.
4. Type the **name of your new branch** using the following convention:

   `blog/<blog-post-name>`

5. From the **Source** dropdown, select the **`dev`** branch.
6. Create the new branch by pressing **`Create new branch`**.
7. Once the branch is created you can go to it by selecting it in the **`Active branches`** section.

### Step 2: Open a Codespace

1. Click the **Code** button (green) at the top right.
2. Select the **Codespaces** tab.
3. Click **Create codespace**.

Your Codespace will open in the browser and will **start directly in the `src/articles` folder**, so you only see the blog content. **This may take a while!**

### Step 3: Start Editing

- Copy your `.mdx` file from your computer and paste it into the current opened folder.
- Use the **provided functionality** in the Codespace to:
  - **Preview Changes** (start the server and see how the blog looks)
  - **Stop Preview** (stop the server)
  - **Push Changes** (push your changes to your branch once you are happy with how it looks)
- More details will be provided once in the **Codespace** to access these functions.

### Step 4: Create a Pull Request

Once you are done with your changes:

1. Go back to GitHub.
2. You'll see a prompt to **Compare & pull request** for your branch — if not, click **`Contribute`** under the green **`Code`** button and select **`Open pull request`**.
3. In the top left corner, select **`dev`** as the base branch.
4. Fill in the details:
   - **Title:** e.g. `(feat): Added new blog post about AI`
   - **Description:** Explain the blog content briefly.
   - **Assign:** Assign the correct people to review your work and add the correct labels and projects.
5. Once finished, click **Create pull request**.

### Step 5: Close Codespace

Once your PR is created, you can safely stop or close the Codespace. Go back to where you opened it, click the `...` on the right side of the Codespace, and select **Delete**.

## Development

### Github Workflows & Contribution Guidelines

#### 1. Environment Setup

To maintain code quality, consistency, and proper functionality across the project, please ensure your development environment is correctly configured:

- **Code Editor:** We highly recommend **Visual Studio Code (VSCode)**.
- **Required Extensions (for VSCode):**
  - **Prettier Code Formatter** (set as your default formatter)
  - **Tailwind CSS IntelliSense**
  - **ESLint**
- **Alternative Editors:** You may use any other code editor, provided you can achieve equivalent functionality for code formatting and linting.

#### 2. Local Repository Setup

1. **Clone the Repository:**

   ```bash
   git clone -b dev git@github.com:modelversebv/modelverse-website.git
   cd modelverse-website
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`. English is at `/`, Dutch at `/nl/`.

#### 3. Branching Strategy

For all development tasks (new features, fixes, updates), create a new branch off the target parent branch (usually `dev`).

- **Branch Naming Convention:**
  - **`feature/my-new-feature`** — new functionality
  - **`update/my-new-update`** — updates or modifications
  - **`fix/my-new-fix`** — bug fixes
  - **`blog/blog-name`** — new blog posts or blog updates

#### 4. Commit Messages

Maintain clear, concise, and conventional commit messages.

- **Format:** `(type): Brief explanation of the change`
- **Keywords:**
  - **`(feat)`** — a new feature
  - **`(fix)`** — a bug fix
  - **`(update)`** — an update or modification

#### 5. Creating a Pull Request (PR)

Before opening a PR, ensure all code changes are complete and the build passes locally (`npm run build`).

Once ready, push your branch and open a Pull Request on GitHub.

- **Target Branch:** Set the **parent branch** as the target.
- **Title Convention:** Use the same convention as commit messages (e.g. `(feat): Add support for dark mode`).
- **Description:** Clearly describe the changes, motivation, and any relevant context. Link to issues if applicable.
- **Labels:** Apply appropriate labels (e.g. `feature`, `bug`, `enhancement`).
- **Reviewer:** Assign an appropriate reviewer.
- **Assignee:** Assign the PR to all relevant parties.

#### 6. Review and Merging

A designated reviewer will check the PR. **Merging is contingent upon:**

- **Passing Checks:** The automated GitHub Actions workflow must build successfully.
- **Code Review:** The reviewer must approve the code quality, functionality, and adherence to standards.

Once approved, the code will be merged into the parent branch.

### Automated Workflows

The repository uses GitHub Actions to automate quality assurance and deployment.

| Workflow Name                    | Trigger                       | Action Performed                                                                                                                                               |
| -------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verify build**                 | On **Pull Request**           | Runs `npm run build` to ensure the build succeeds before merging.                                                                                              |
| **Build & Deploy to Dev**        | On **Push** to `dev` branch   | 1. **Build:** Creates optimized static build.<br>2. **Deploy:** Deploys the `dist/` directory to the Firebase Hosting **Beta** channel for review.             |
| **Build & Deploy to Test**       | On **Push** to `test` branch  | 1. **Build:** Creates optimized static build.<br>2. **Deploy:** Deploys the `dist/` directory to the Firebase Hosting **Charlie** channel for testing.          |
| **Build & Deploy to Production** | On **Push** to `main` branch  | 1. **Build:** Creates optimized static build.<br>2. **Deploy:** Deploys the `dist/` directory to the Firebase Hosting **Live** channel (production).            |
