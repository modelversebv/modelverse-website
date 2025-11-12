#!/bin/bash
set -e

# Navigate to repo root in case task runs from /src/blogs
cd "$(git rev-parse --show-toplevel)"

# Add all changes
git add .

# Ask for a commit message
echo "Enter a short commit message:"
read commit_message

# Commit and push to the current branch
git commit -m "$commit_message"
git push

echo "✅ Changes committed and pushed!"
