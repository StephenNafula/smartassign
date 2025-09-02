# Student Assist LMS 📚✨

## Overview
Student Assist LMS is a lightweight web-based Learning Management System designed to help students **submit assignments easily**, while also addressing challenges like **slow devices, unstable internet, and lack of access to laptops**.  
It includes:
- 🔐 User authentication (Register & Login)  
- 📝 Assignment editor with rich text formatting (using Quill.js)  
- 💳 Payment integration (via Flutterwave) to unlock premium features  
- 🎨 Modern, responsive UI  

---

## Problem it Solves
Many students face issues when completing assignments due to:
- Unstable internet connections  
- Limited access to fast laptops  
- Difficulty formatting assignments quickly  

This LMS provides a **web-accessible platform** where students can log in, write assignments in a rich editor, and submit seamlessly. Premium users can unlock advanced features through secure online payments.  

---

## Features
- **Authentication** → Register/Login system with Flask sessions  
- **Dashboard** → Simple and intuitive with navigation to assignments  
- **Rich Text Editor** → Bold, italics, headings, bullet points, etc.  
- **Payment Plans** → Different tiers (Free, Standard, Premium)  
- **Checkout** → Flutterwave payment gateway integration  

---

## Tech Stack
- **Backend**: Flask (Python)  
- **Frontend**: HTML5, CSS3, Bootstrap/Tailwind, JavaScript  
- **Editor**: Quill.js (rich text editor)  
- **Payments**: Flutterwave (test & live modes)  
- **Hosting**: To be deployed on [Heroku/Render] (future step)  

---

## Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/student-assist-lms.git
   cd student-assist-lms
