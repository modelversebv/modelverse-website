#!/bin/bash
set -e

# Navigate to repo root in case task runs from /src/blogs
cd "$(git rev-parse --show-toplevel)"

# Add all changes
git add src/blogs

# Checking for changes
if git diff-index --quiet HEAD --; then
  echo "No changes to commit."
  exit 0
fi

# Getting the commit message and commiting changes
commit_message="$1"
git commit -m "$commit_message"

# Get current branch
branch=$(git rev-parse --abbrev-ref HEAD)

# Push
git push --set-upstream origin "$branch"

echo "Changes pushed successfuly!"
