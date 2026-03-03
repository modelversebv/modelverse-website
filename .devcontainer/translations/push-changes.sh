#!/bin/bash
set -e

# Navigate to repo root
cd "$(git rev-parse --show-toplevel)"

# Add only translation files
git add src/i18n/locales

# Check for changes
if git diff-index --quiet HEAD --; then
  echo "No translation changes to commit."
  exit 0
fi

# Get commit message and commit
commit_message="$1"
git commit -m "$commit_message"

# Get current branch and push
branch=$(git rev-parse --abbrev-ref HEAD)
git push --set-upstream origin "$branch"

echo "Translation changes pushed successfully!"
