# Blogs Codespace Guide

Welcome to the **Blogs Codespace**! This Codespace is optimized for adding or editing blog posts in the repository. Here you will find tips and instructions to get started quickly.

## Location of Blog Content

All blog posts live in this folder:

You can add new `.mdx` files here or edit existing ones. Changes made in this folder only affect the blog content until merged into the `dev` branch.

## Available Tasks

We provide pre-configured tasks to make previewing and pushing changes easy. These tasks are available in **VSCode** inside the Codespace.

### Finding the Tasks

1. Open the **Explorer** in VSCode (left-hand sidebar) (usually already opened).
2. At the bottom, click **Task Runner**.
3. You will see a list of tasks:

- **Preview Changes** – starts a local server to see how your blog post will look.
- **Stop Preview** – stops the local server.
- **Push Changes** – commits and pushes your changes to your branch.

## How to Use the Tasks

1. **Preview Changes**
   - Click the task to start the local preview server. Should open up a tab in your browser with the Website
   - Changes are updated automatically, meaning that you do not need to stop and restart the server every time you make a change to the blog post.

2. **Stop Preview**
   - Click this task to stop the server once you’re done reviewing your changes.

3. **Push Changes**
   - Click this task when your blog post is ready.
   - This will push your changes to your GitHub branch.
   - Enter a meaningful commit message when prompted following the conventions:
     `(feat): Added <blog-post-name>`

     If you will have more commit messages before opening a pull request, you will need to follow the conventions for those commits too:
     - `(fix): Short description of the fix` for fixing issues
     - `(update): Short description of the update` for updates

## Tips for a Smooth Workflow

- Preview your changes before pushing to ensure everything looks correct.
- After creating a Pull Request, you can safely **delete your Codespace** to free up resources.

---

## Quick Recap

| Task            | Purpose                                   |
| --------------- | ----------------------------------------- |
| Preview Changes | See your blog post locally in the browser |
| Stop Preview    | Stop the local server                     |
| Push Changes    | Commit & push changes to your branch      |

Now you’re ready to start editing blogs! Happy writing! ✨
