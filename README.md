# Personal Portfolio - Server

This repository contains the backend server code for my personal portfolio website. Its primary function is to handle the logic for the contact form, ensuring that messages from visitors are securely processed and delivered to my email address.

<div align="center">

[![Live Server](https://img.shields.io/badge/Live_Server-Online-blueviolet?style=for-the-badge)](https://nazmulxdev-portfolio-server.vercel.app/)
[![Client Repo](https://img.shields.io/badge/Client_Repo-GitHub-333?style=for-the-badge&logo=github)](https://github.com/nazmulxdev/nazmulxdev-portfolio-client)

</div>

---

### **Server Overview**

This is a lightweight server built with Node.js and Express. It provides a single, secure API endpoint to receive data from the portfolio's contact form. It then uses Nodemailer to send this data as a formatted email, allowing me to receive inquiries directly in my inbox.

---

### **Key Features**

✅ **Contact Form Handler:** Securely processes data submitted from the client-side contact form.
✅ **Email Delivery:** Uses Nodemailer to automatically send submitted messages to a specified email address.
✅ **Secure Configuration:** All sensitive data (like email credentials) is managed securely using environment variables.
✅ **CORS Enabled:** Configured with CORS to only accept requests from the deployed portfolio website, preventing unauthorized use.

---

### **API Endpoint**

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/send-email` | Receives contact form data (name, email, message) and sends it as an email. |

---

### **Technologies & Dependencies**

This server is built with the following technologies and packages:

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Nodemailer-2A7D6F?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" />
</p>

-   `cors`
-   `dotenv`
-   `express`
-   `nodemailer`

---

### **Getting Started Locally**

Follow these steps to run the server on your local machine:

**1. Clone the repository:**
```bash
git clone [https://github.com/nazmulxdev/nazmulxdev-portfolio-server.git](https://github.com/nazmulxdev/nazmulxdev-portfolio-server.git)
```

**2. Navigate to the project directory:**
```bash
cd nazmulxdev-portfolio-server
```

**3. Install NPM packages:**
```bash
npm install
```

**4. Set up environment variables:**
Create a file named `.env` in the root directory and add your email credentials. This is required for Nodemailer to send emails.
```.env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
```
*(Note: For Gmail, you will need to generate an "App Password". Do not use your regular password.)*

**5. Run the server:**
```bash
npm start
```
The server will start, typically on `http://localhost:5000`.

---
