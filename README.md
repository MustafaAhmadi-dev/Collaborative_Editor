<div align="center">
  <br />
  <h3 align="center">A Collaborative LiveDocs</h3>

   <div align="center">
     A feature-rich, easy-to-use collaborative editor built with Next.js, Liveblocks, and Tailwind CSS. It offers real-time editing, document management, and more, making it a great choice for collaborative document creation.
    </div>


  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

</div>

* [Introduction](#introduction)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Installation](#installation)
* [Links](#links)

## Introduction

LiveDocs is a clone of Google Docs, built with the following technologies:

* **Next.js:** Handles the user interface and server-side rendering.
* **Liveblocks:** Enables real-time collaboration features.
* **Tailwind CSS:** Provides utility-first CSS classes for rapid styling.

This project offers a collaborative editing experience, allowing multiple users to work on the same document simultaneously and see changes in real-time.

## Tech Stack

* Next.js
* TypeScript
* Liveblocks
* Lexical Editor
* ShadCN 
* Tailwind CSS

## Features

LiveDocs provides a comprehensive set of features for collaborative editing:

* **Authentication:** Secure sign-in/out and session management through GitHub authentication with NextAuth.
* **Collaborative Text Editor:** Multiple users can edit the same document simultaneously, with real-time updates displayed to everyone.
* **Documents Management:**
    * **Create Documents:** Users can create new documents that are automatically saved and listed.
    * **Delete Documents:** Users can delete documents they own.
    * **Share Documents:** Share documents with others via email or link, granting view or edit permissions.
    * **List Documents:** View all documents owned or shared with the user, with search and sorting options.
* **Comments:** Add inline and general comments for discussions, with threading capabilities.
* **Active Collaborators:** Real-time display of active collaborators on the text editor.
* **Notifications:** Users are notified of document shares, new comments, and collaborator activity.
* **Responsive Design:** The application adapts seamlessly across various devices.

**Set Up Environment Variables**

The following content is needed in the `.env` file in the root of the project:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

You can obtain Clerk & LiveBlocks credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

## Links

* **Next.js Documentation:** https://nextjs.org/learn - Learn about Next.js features and API.
* **Liveblocks Starter Guide:** https://liveblocks.io/technology/collaborative-nextjs-application
* **Live demo:** https://liveblocks.io/technology/collaborative-nextjs-application
