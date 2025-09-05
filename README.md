# Student Assist LMS 📚✨

## Note for Hackathon Judges 🚀

During the hackathon, our initial repository contained the early version of this project. However, due to backend and frontend hosting platform constraints, some features could not run as intended.  

This repository (**https://smartassign-document-bo2j.bolt.host/**) is a refined continuation of the same idea, with fully working features, improved UI, and better code structure.  

We decided to create a new repo: (**https://github.com/StephenNafula/smartassign-continued.git**) to present a clean, functional version for review while still staying true to our original hackathon concept.

➡️ **We kindly request that this updated repository be considered for review , as it represents the complete and functional version of our hackathon project.**


## Overview
Student Assist LMS is a lightweight web-based Learning Management System designed to help students **submit assignments easily**, while also addressing challenges like **slow devices, unstable internet, and lack of access to laptops**.  
It includes:
- 🔐 User authentication (Register & Login)  
- 📝 Assignment editor with rich text formatting (using Quill.js)  
- 💳 Payment integration (via Intasend) to unlock premium features  
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
- **Checkout** → Intasend payment gateway integration  

---

## Tech Stack
- **Backend**: Flask (Python)  
- **Frontend**: HTML5, CSS3, Bootstrap/Tailwind, JavaScript  
- **Editor**: Quill.js (rich text editor)  
- **Payments**: Intasend (test & live modes)  
- **Hosting**: To be deployed on Render: https://smartassign-jgaf.onrender.com

---


## Team

👤 **Stephen Mwaniki**  
- Role: Backend & Payment Integration (Flask + IntaSend)  
- Contributions: Authentication system, database setup, IntaSend payments integration, deployment setup.  

👤 **Immaculate Kamunya**  
- Role: Frontend & UI/UX  
- Contributions: Designed the rich text editor interface, styling with modern UI components, user flows.  

⚡ This project was built collaboratively in a *vibe coding* style, where we experimented, built, and refined the app step by step as a team.



## Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/StephenNafula/smartassign.git
   cd smartassign
