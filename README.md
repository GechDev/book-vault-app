# Weekend Challenge: The Personal Book Vault 📚

## Overview
This weekend, you will build **The Personal Book Vault**, a mini-application that allows users to manage a personal collection of books. This project is designed to test your ability to integrate **Zustand** for global state, **TanStack Router** for navigation, and **React Hooks** for local logic—**without** the complexity of external API calls.

---

## 🛠 Tech Stack
* **Framework:** React (Vite + TypeScript)
* **Routing:** TanStack Router
* **State Management:** Zustand
* **Styling:** Tailwind CSS
* **Data:** A local JSON file or constant array of books.

---

## 🎯 Functional Requirements

### 1. Navigation (TanStack Router)
Implement a file-based router with the following structure:
* **`/` (Home):** A dashboard displaying your reading statistics (e.g., "You have 5 books in your vault, 2 are marked as Read").
* **`/browse`:** A page to view a pre-defined list of available books and add them to your vault.
* **`/vault`:** A list of all books you have saved, with options to remove them or toggle their "Read" status.

### 2. Global State (Zustand)
Create a centralized store to manage your collection. Your store should include:
* `vault`: An array of book objects (Title, Author, CoverImage, ID, isRead).
* `addToVault(book)`: Adds a book from the browse list to your personal vault.
* `removeFromVault(id)`: Removes a book from the vault.
* `toggleRead(id)`: Flips the `isRead` status of a specific book.

### 3. Data Persistence
Use the Zustand **persist middleware** so that your vault remains intact even after a page refresh.

---

## 💡 Pro-Tips
* **Zustand Selectors:** Use selectors like `const vault = useBookStore((s) => s.vault)` to ensure components only re-render when necessary.
* **Derived State:** Don't store "totalReadCount" in the state. Instead, calculate it on the fly in your component or via a getter in the store to keep your state "source of truth" clean.
* **Empty States:** Make sure the `/vault` page looks good even when no books have been added yet.

---

## 📖 Recommended Resources
* **Zustand Persist:** [Persisting Store Data](https://docs.pmnd.rs/zustand/integrations/persisting-store-data)
* **TanStack Router:** [File-based Routing Guide](https://tanstack.com/router/v1/docs/guide/file-based-routing)
* **TypeScript:** [Object Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

> **Submission:** Push your code to a GitHub repository. Then create a sandbox to spin up and see your project easily on [CodeSandbox](https://codesandbox.io)
