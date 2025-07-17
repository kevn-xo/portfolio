
# Kevin Anand Raj - Personal Portfolio Website

A modern, clean, and responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive and mobile-friendly
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Modern UI**: Clean design with professional styling
- **Interactive Elements**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with toast notifications

## Sections

1. **Hero Section**: Introduction with name, title, and call-to-action buttons
2. **About Me**: Personal information, education, and experience
3. **Projects**: Showcase of featured projects with technology tags
4. **Skills**: Technical skills organized by categories
5. **Contact**: Contact form and social media links
6. **Footer**: Copyright and additional information

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React icons
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   └── Index.tsx       # Main portfolio page
├── index.css           # Global styles and Tailwind setup
├── main.tsx           # Application entry point
└── App.tsx            # Root component with routing
```

## Customization

### Personal Information
Update the following in `src/pages/Index.tsx`:
- Name and title in the hero section
- Bio and description text
- Contact information and social links
- Project details and links

### Projects
Modify the `projects` array to add/edit your projects:
```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com"
  },
  // Add more projects...
];
```

### Skills
Update the `skills` object to reflect your technical skills:
```typescript
const skills = {
  "Programming Languages": ["Language1", "Language2"],
  "Web Development": ["Framework1", "Framework2"],
  // Add more categories...
};
```

### Styling
- Colors can be customized in `src/index.css` using CSS custom properties
- Component styling uses Tailwind CSS classes
- Dark mode colors are defined in the `.dark` CSS class

### Contact Form
The contact form currently shows a success toast message. To make it functional:
1. Set up a backend endpoint or service (e.g., Formspree, Netlify Forms)
2. Update the `handleContactSubmit` function to send data to your endpoint

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment

The site can be deployed on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Kevin Anand Raj
- Email: kevin@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using React and Tailwind CSS
