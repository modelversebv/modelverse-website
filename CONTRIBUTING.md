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
6. Create the new branch by pressing **`Create new branch`**

7. Once the branch is created you can go to the branch by selecting the correct branch in the **`Active branches`** section.

### Step 2: Open a Codespace

1. Click the **Code** button (green) at the top right.
2. Select the **Codespaces** tab.
3. Click **Create codespace**

Your Codespace will open in the browser and will **start directly in the `src/blogs` folder**, so you only see the blog content. **This may take a while!**

### Step 3: Start Editing

- You can copy the `.mdx` file from your computer and paste it into the current opened folder.
- Use the **provided functionality** in the Codespace to:
  - **Preview Changes** (start the server and see how the blog looks)
  - **Stop Preview:** (stop the server)
  - **Push Changes:** (push your changes to your branch once you are happy with how it looks)
- More details will be provided once in the **codespace** to access these functions.

### Step 4: Create a Pull Request

Once you are done with your changes.

1. Go back to GitHub.
2. You’ll see a prompt to **Compare & pull request** for your branch if not click on **`contribute`** under the green **`Code`** button in the top right corner and select **`Open pull request`** .
3. In the top left corner under the **`Open a pull request`** section, select **`dev`** as the base branch.
4. Fill in the details:
   - **Title:** i.e `(feat): Added new blog post about AI`.
   - **Description:** Explain the blog content briefly.
   - **Assign:** On the left side of the screen asign the correct people to review your work and add the correct labels and projects.
5. Once finished, click **Create pull request**.

### Step 5: Close Codespace

Once your PR is created, you can safely stop or close the Codespace. Go back go to where you opened the **Codespace** and click the `...` on the right side of the codespace and select **Delete`**

## Development

### Github Workflows & Contribution Guidelines

#### 1\. Environment Setup

To maintain code quality, consistency, and proper functionality across the project, please ensure your development environment is correctly configured:

- **Code Editor:** We highly recommend **Visual Studio Code (VSCode)**.
- **Required Extensions (for VSCode):**
  - **Playwright Test for VSCode** (For running and debugging tests)
  - **Prettier Code formatter** (Set as your default formatter)
  - **Tailwind CSS IntelliSense**
- **Alternative Editors:** You may use any other code editor, provided you can achieve the equivalent functionality for code formatting, linting, and integrated testing.

#### 2\. Local Repository Setup

1. **Clone the Repository:** Clone the primary **`dev`** branch to your local machine or the parent branch your work will be added on:

   ```bash
   git clone -b dev git@github.com:modelversebv/modelverse-website.git
   cd modelverse-website
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

#### 3\. Branching Strategy

For all development tasks (new features, fixes, updates), you must create a new branch off the target parent branch (usually `dev`).

- **Branch Naming Convention:** Use a prefix that describes the type of work:
  - **`feature/my-new-feature`** (for new functionalities)
  - **`update/my-new-update`** (for updated code)
  - **`fix/login-bug-patch`** (for bug fixes)
  - **`chore/dependency-updates`** (for non-code changes like documentation or config)

#### 4\. Commit Messages

Maintain clear, concise, and conventional commit messages. This helps in generating changelogs and understanding the project history.

- **Format:** `(type): Brief explanation of the change`
- **Keywords (Type):**
  - **`(feat)`:** A new feature.
  - **`(fix)`:** A bug fix.
  - **`(update)`:** An update or modification to existing functionality.
  - **`(chore)`:** Non-code changes.
  - **`(docs)`:** Documentation-only changes.
  - **`(style)`:** Changes that do not affect the meaning of the code (whitespace, formatting, etc.).

#### 5\. Creating a Pull Request (PR)

Before setting up a PR, ensure:

1. All code changes are complete.
2. Appropriate new tests have been written for your feature/fix.
3. All tests are passing (`npx playwright test`).

Once ready, push your branch and open a Pull Request on GitHub.

- **Target Branch:** Set the **parent branch** as the target.
- **Title Convention:** Use the same convention as your commit messages for the PR title: (i.e. `(feat): Add support for dark mode`).
- **Description:** Clearly describe the changes, motivation, and any relevant context. Link to issues if applicable.
- **Labels:** Apply appropriate labels (e.g., `feature`, `bug`, `enhancement`).
- **Reviewer:** Assign an appropriate reviewer.
- **Assignee:** Assign the PR to all relevant parties.

#### 6\. Review and Merging

A designated reviewer will check the PR. **Merging is contingent upon:**

- **Passing Checks:** The automated GitHub Actions workflows for **Test** and **Build** must pass successfully.
- **Code Review:** The reviewer must approve the code quality, functionality, and adherence to standards.

Once approved, the code will be merged into the parent branch.

### Automated Workflows

The repository uses GitHub Actions to automate quality assurance and deployment processes.

| Workflow Name                    | Trigger                      | Action Performed                                                                                                                                                 |
| -------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Run tests & Verify build**     | On **Pull Request**          | 1. **Runs Tests:** Executes Playwright tests and generates a report. <br>2. **Build:** Runs `npm run build` to ensure build succeeds before merging code.        |
| **Build & Deploy to Dev**        | On **Push** to `dev` branch  | 1. **Build:** Creates optimized static build.<br>2. **Deploy:** Deploys the contents of the `dist/` directory to the Firebase Hosting Beta channel for review.   |
| **Build & Deploy to Production** | On **Push** to `main` branch | 1. **Build:** Creates optimized static build.<br>2. **Deploy:** Deploys the contents of the `dist/` directory to the Firebase Hosting Live channel (production). |
