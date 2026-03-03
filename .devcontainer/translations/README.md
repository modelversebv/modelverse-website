# Translations Codespace Guide

Welcome to the **Translations Codespace**! This Codespace is set up specifically for editing the website text across languages. No coding knowledge required.

## What You Can Edit Here

All website text lives in two files:

- en/translation.json - English
- nl/translation.json - Dutch

You will not edit these files directly. Instead you will use the i18n Ally panel, a visual editor that shows every text field as a simple labelled form.

## How to Edit Translations

### 1. Open the i18n Ally Panel
Look for the flag icon in the left sidebar of VS Code and click it. You will see every text key on the website listed with their English and Dutch values side by side.

### 2. Edit a Value
Click the pencil icon next to any value to edit it. Make your change and press Enter to save. The file updates automatically.

### 3. Find What You Need
Use the search bar at the top of the i18n Ally panel to search by keyword. For example, searching "hero" will show all hero section texts across the site.

### 4. Missing Translations
Any key that has not been translated to Dutch yet will be highlighted in red. These are easy to spot and fix.

## Previewing Your Changes

1. Open the Task Runner at the bottom of the Explorer sidebar.
2. Click Preview Changes to start the local website.
3. A browser tab will open with the live site. Changes update in real time.
4. Click Stop Preview when you are done.

## Pushing Your Changes

When you are happy with your edits:

1. Open the Task Runner.
2. Click Push Changes.
3. Enter a commit message when prompted, for example:
   - (update): Updated Dutch hero section text
   - (fix): Fixed typo in navbar translation
4. Your changes are pushed to your branch.
5. Go to GitHub and open a Pull Request targeting the dev branch.

After creating your Pull Request, you can safely delete your Codespace to free up resources.

---

| Task            | Purpose                              |
| --------------- | ------------------------------------ |
| Preview Changes | See your edits live in the browser   |
| Stop Preview    | Stop the local server                |
| Push Changes    | Commit and push your changes         |

Happy translating!
