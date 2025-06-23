# Easy Resume - Professional Resume Builder

[Easy Resume](https://easyresume-eight.vercel.app/)

Easy Resume is a modern, user-friendly web application designed to help users create, customize, and download professional-looking resumes with ease. Built with React and Vite, this project provides a seamless experience for crafting job-winning resumes, offering multiple templates and a real-time preview.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contact](#contact)

---

## About The Project

Finding a job can be challenging, and a well-crafted resume is the first step toward success. Easy Resume was built to simplify this process. It provides an intuitive interface where users can input their information once and see it instantly reflected across multiple, professionally designed templates. The goal is to empower users to create a high-quality, personalized resume that they can download as a pixel-perfect PDF, ready for job applications.

---

## Key Features

* **Multiple Professional Templates**: Choose from 5 unique, modern resume templates (Modern, Minimalist Sidebar, Creative, Executive, and Traditional).
* **Intuitive Editor**: A clean and simple form-based editor allows for easy input of personal information, summary, work experience, education, skills, and even custom sections.
* **Real-Time Preview**: As you type in the editor, see your resume update instantly in the selected template.
* **Dark Mode**: A sleek, eye-friendly dark mode for comfortable use in any lighting condition.
* **Responsive Design**: The application is fully responsive and works beautifully on desktops, tablets, and mobile phones.
* **High-Quality PDF Export**: Download your final resume as a high-resolution, print-ready A4 PDF with clickable links for your email, LinkedIn, and portfolio.
* **Image Cropper**: Upload and crop your profile picture for the perfect fit.
* **Local Storage Persistence**: Your resume data is automatically saved in your browser's local storage, so you can pick up where you left off.

---

## Tech Stack

This project is built with a modern front-end stack, focusing on performance and a great developer experience.

* **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: A next-generation front-end tooling that provides a faster and leaner development experience.
* **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
* **[React Router](https://reactrouter.com/)**: For client-side routing and navigation between pages.
* **[html2pdf.js](https://github.com/eKoopmans/html2pdf.js)**: A powerful library used for generating high-quality, multi-page PDFs directly from HTML content.
* **[Lucide React](https://lucide.dev/)**: A beautiful and consistent icon library.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.
* **npm**
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/shadowsilence94/resumemaker.git resumemaker
    ```
2.  **Navigate to the project directory**
    ```sh
    cd resumemaker
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```
    Your application will be running at `http://localhost:5173`.

---

## Project Structure

The project follows a standard Vite + React structure, organized for clarity and scalability.


/
|-- public/

|-- src/

|   |-- assets/

|   |-- components/

|   |   |-- common/

|   |   |-- forms/

|   |   |-- layout/

|   |   |-- ui/

|   |-- context/

|   |-- features/

|   |   |-- resume/

|   |       |-- templates/ (Tpl1.jsx, Tpl1.module.css, etc.)

|   |-- hooks/

|   |-- pages/

|   |-- utils/

|   |-- App.jsx

|   |-- main.jsx

|   |-- index.css

|-- .eslintrc.cjs

|-- .gitignore

|-- index.html

|-- package.json

|-- postcss.config.js

|-- tailwind.config.js

|-- README.md


---

## Contact

Htut Ko Ko - [@htutkoko](https://www.linkedin.com/in/htut-ko-ko-805770202/) - htutkoko1994@gmail.com

Project Link: [github](https://github.com/shadowsilence94/resumemaker)
