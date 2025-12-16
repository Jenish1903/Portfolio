# Portfolio Website

A modern, responsive personal portfolio website built with React.js, showcasing professional experience, skills, projects, and contact information for Jenish Radadiya, a MERN Stack Developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with dark theme and smooth animations
- **Interactive Elements**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with backend integration for sending emails
- **Project Showcase**: Display of featured projects with technology stacks and links
- **Skills Section**: Visual representation of technical expertise with icons
- **Experience Timeline**: Professional experience displayed in an interactive timeline
- **Education History**: Academic background and qualifications
- **Services Offered**: Overview of development services provided

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling functionality

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation & Setup

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd ../Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
Frontend/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── assets/
│   ├── components/ (if separated)
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md

Backend/
├── controllers/
│   └── contactController.js
├── routes/
│   └── contactRoutes.js
├── server.js
├── package.json
├── .env
└── .gitignore
```

## 🎯 Usage

1. **Development**: Run `npm run dev` in the Frontend directory to start the development server
2. **Production**: Run `npm run build` to create an optimized production build
3. **Backend**: Ensure the backend server is running for contact form functionality

The website will be available at `http://localhost:5173` (Vite default) and backend at `http://localhost:5000` (configurable).

## 📧 Contact Form Integration

The contact form sends emails using Nodemailer. Make sure to:
- Set up a Gmail account with App Passwords
- Configure environment variables in the Backend `.env` file
- Ensure CORS is properly configured for frontend-backend communication

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Jenish Radadiya**
- Email: radadiyajenish32@gmail.com
- Phone: +91 97275 15301
- Location: Ahmedabad, Gujarat
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub Profile](https://github.com/Jenish1903)

---

⭐ If you found this project helpful, please give it a star!
