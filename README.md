# Overstep Landing Page

A responsive landing page for Overstep, an adaptive-practice learning app, built with Jekyll for GitHub Pages.

## Features

- Responsive design for mobile, tablet, and desktop
- Seven anchored sections: Hero, Features, How-It-Works, Testimonials, Team, Updates, and Contact
- Blog section with Jekyll integration
- Contact form using Formspree
- SEO optimized with meta tags and sitemap.xml

## Project Structure

```
├── _layouts/
│   └── default.html       # Main layout template
├── _posts/                # Blog posts 
├── assets/
│   ├── css/
│   │   ├── colors.css     # Color variables
│   │   └── main.css       # Main styles
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Images and assets
├── _config.yml            # Jekyll configuration
├── index.md               # Main landing page
└── sitemap.xml            # XML sitemap for SEO
```

## Setup and Development

### Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler
- Jekyll

### Installation

1. Clone the repository:
```
git clone https://github.com/your-username/overstep-landing.git
cd overstep-landing
```

2. Install dependencies:
```
bundle install
```

3. Start the development server:
```
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser to see the site.

## Deployment

This site is configured to deploy to GitHub Pages. Simply push your changes to your GitHub repository, and GitHub Pages will automatically build and deploy your site.

### Manual Deployment

To build the site manually:

```
bundle exec jekyll build
```

The built site will be in the `_site` directory, which you can deploy to any static hosting provider.

## Customization

- Update site information in `_config.yml`
- Edit color schemes in `assets/css/colors.css`
- Modify content in `index.md`
- Add blog posts in `_posts/` directory

## Contact Form

The contact form uses Formspree. To set it up:

1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update the form action in the index.md file with your endpoint

## License

This project is licensed under the MIT License - see the LICENSE file for details.