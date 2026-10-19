# Task 31: Responsive Personal Portfolio Website

## Project Overview

The Responsive Personal Portfolio Website is a professional website designed to showcase a developer's profile, skills, projects, education, experience, and contact information. The website uses a responsive layout to provide a smooth browsing experience across desktop, tablet, and mobile devices.

This project was developed as part of the **Veda Technology Web Development Internship**.

## Objectives

- Build a professional personal portfolio website.
- Understand semantic HTML5 structure.
- Design responsive layouts using CSS3.
- Implement interactive features using JavaScript.
- Create responsive navigation for mobile devices.
- Validate user input using JavaScript.
- Practise Git, GitHub, and project documentation.

## Technologies Used

- **HTML5** – Website structure and content.
- **CSS3** – Styling, layouts, animations, and responsiveness.
- **JavaScript** – Mobile navigation, form validation, and dynamic footer year.
- **Visual Studio Code** – Code editor.
- **Git and GitHub** – Version control and project hosting.

## Features

### 1. Home Section
Introduces the developer with a short profile, role, and navigation links.

### 2. About Section
Provides information about the developer's background, interests, and learning goals.

### 3. Skills Section
Displays technical skills related to frontend development, programming, tools, and AI and Data Science.

### 4. Projects Section
Showcases projects such as:
- Currency Converter
- Resume Website
- Temperature Converter

### 5. Education and Experience Section
Presents academic information and web development internship experience.

### 6. Contact Section
Includes a contact form with validation for the user's name, email address, and message.

### 7. Responsive Navigation
Provides a mobile-friendly menu that opens and closes using JavaScript.

### 8. Responsive Design
Uses CSS media queries, Flexbox, and CSS Grid to adapt the layout to different screen sizes.

## Project Structure

```text
Task31-Responsive-Personal-Portfolio-Website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.
5. Alternatively, use the Live Server extension in Visual Studio Code.
6. Test the navigation menu, project links, contact form, and responsive layout.

## Testing

The following tests should be performed before submission:

- Verify that all navigation links lead to the correct sections.
- Check the website on desktop, tablet, and mobile screen sizes.
- Confirm that the mobile navigation opens and closes correctly.
- Test the contact form using empty and invalid inputs.
- Confirm that valid form data displays the validation success message.
- Check all GitHub and LinkedIn links.
- Verify that the browser console has no JavaScript errors.
- Confirm that the deployed GitHub Pages website loads correctly.

## Limitations

The contact form currently performs client-side validation only. It does not send, store, or deliver messages. A backend or trusted form service is required to receive real submissions.

The project links can be updated to point to individual repositories or live demos as they become available.

## Future Enhancements

- Integrate a backend to process contact form submissions.
- Add a downloadable resume.
- Include additional projects and verified achievements.
- Add project-specific live demo links.
- Improve animations and interactive elements.
- Add a theme switcher for light and dark modes.

## Deployment

The project can be hosted using GitHub Pages.

1. Push the project files to the public internship repository.
2. Configure the repository's GitHub Pages deployment workflow to publish the portfolio folder.
3. Check the GitHub Actions workflow for a successful deployment.
4. Open the published URL and test the website before submission