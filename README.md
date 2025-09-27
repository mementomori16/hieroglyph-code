## 📄 Professional Resume
[View my Full Stack Developer Resume here](./RESUME.md)
Hieroglyph Code - Custom Software Solutions
A modern and interactive web application built to showcase custom software solutions. This project features a portfolio of products, client testimonials, and a custom photo gallery, all powered by a professional and automated development workflow.

Live Application 🌐
Explore the live application and see the features in action:

hieroglyphcode.ch

Key Features ✨
Fully Responsive Design: The application is designed to be fully scalable and cross-device compatible, adapting seamlessly to all desktop screens, mobiles, and tablets, including rare or custom screen sizes.

View Gallery Component: An advanced, custom-built gallery that allows users to zoom in and out, view image titles, navigate between images, and browse via thumbnails.

Dynamic Product Display: Product cards on the main page link to individual product pages. Each product page features a dedicated information container as well as sections for similar and related products.

Custom Carousels: The application includes dynamic carousel components for both the homepage, which showcases products, and a dedicated client testimonials section. The testimonials carousel features client images, names, professions, and a read more button for extended content.

Functional Contact Page: A dedicated page with a fully functional contact form to facilitate client communication.

Architecture 🏛️
The application uses a hybrid architecture to manage and display its content.

Data Source: All product and text-based information is stored in a structured, local .ts file. This allows for quick and efficient access to data without a full backend database.

API Usage: The application makes API calls to a separate, external server to retrieve image assets. It uses direct links to dynamically fetch and display product images within the carousels, galleries, and product cards. This approach separates data from assets, creating a lightweight and efficient front-end.

Dynamic Rendering: The app's logic dynamically combines the local product data with the API-fetched image links to render the complete user interface.

Technology Stack 🛠️
The application is built using a modern and efficient technology stack.

Front-End: React for building a dynamic user interface.

Back-End: Node.js for server-side logic and handling development tasks.

Languages & Data: TypeScript for type safety and improved code quality, and JSON for structured data exchange.

Styling: SCSS for scalable and maintainable styling.

Build Tool: Vite for a lightning-fast development experience and optimized production builds.

Deployment: Firebase Hosting for reliable and secure hosting, with an automated GitHub Actions CI/CD pipeline for instant deployments on every push to the main branch.

Getting Started Locally 💻
To run the project on your local machine, follow these steps:

Clone the repository:

Bash

git clone https://github.com/mementomori16/hieroglyph-code.git
Navigate to the project directory:

Bash

cd hieroglyph-code
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
The application will be available at http://localhost:5173.