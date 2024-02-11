# Portfolio Website

This is a portfolio website showcasing Jenaide Sibolie's projects, skills, and contact information.

## Technologies Used

- **Next.js**: Next.js is a React framework that allows for server-side rendering, static site generation, and other powerful features.
- **TypeScript**: TypeScript is a superset of JavaScript that adds static typing and other features to help catch errors and improve code quality.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by providing pre-defined utility classes.
- **Framer Motion**: Framer Motion is a library for creating animations in React applications. It provides a simple API for creating fluid animations and transitions.
- **EmailJS**: EmailJS is a service that allows you to send emails directly from your JavaScript code without needing to set up your own email server.

## Features

- **Projects Section**: Showcase your projects with descriptions, images, and links to live demos or GitHub repositories.
- **Skills Section**: Highlight your skills and expertise with icons or descriptions.
- **Contact Form**: Allow visitors to contact you directly through a contact form. Emails are sent using EmailJS.
- **Animations**: Add dynamic animations to your website to enhance user experience and make it more engaging.

## Setup

1. **Clone the Repository**: Clone this repository to your local machine.


2. **Install Dependencies**: Install project dependencies using npm or yarn.
or
3. **Set Up Environment Variables**: Create a `.env` file at the root of the project and add the required environment variables for EmailJS.

4. **Start Development Server**: Start the Next.js development server.
or

5. **View the Website**: Open your web browser and navigate to `http://localhost:3000` to view the website.

## Deployment

This website can be deployed to various hosting platforms, including Vercel, Netlify, and others. Refer to the documentation of your chosen hosting platform for deployment instructions.

## Credits

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

## License

This project is licensed under the [MIT License](LICENSE).

---

## Additional Components

### Transition Component

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
 initial: {
     x: "100%",
     width: "100%",
 },
 animate: {
     x: "0%",
     width: "0%",
 },
 exit: {
     x: ["0%", "100%"],
     width: ["0%", "100%"],
 }
};

const Transition = () => {
 return (
     <>
         <motion.div className='fixed top-0 bottom-0 right-full h-screen z-30 bg-slate-500'
             variants={transitionVariants}
             initial="initial"
             animate="animate"
             transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}
         ></motion.div>
         <motion.div className='fixed top-0 bottom-0 right-full h-screen z-20 bg-slate-700'
             variants={transitionVariants}
             initial="initial"
             animate="animate"
             transition={{ delay: 0.5, duration: 0.9, ease: 'easeInOut' }}
         ></motion.div>
     </>
 );
};


export default Transition;
```

## Other Components
Include additional components like HireMe, MainContent, NavBar, Socials, About, Contact, Skills, and Work in separate files.

// HireMe.tsx
// MainContent.tsx
// NavBar.tsx
// Socials.tsx
// About.tsx
// Contact.tsx
// Skills.tsx
// Work.tsx

Feel free to modify and customize the provided code according to your project requirements.
# Run development server
npm run dev

# Build for production
npm run build

# Deploy to hosting platform
# Refer to the deployment documentation of your chosen platform

