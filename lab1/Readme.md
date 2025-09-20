# Web Systems Lab 1: Portfolio Website - Data Pulse

## Team Information
**Team Name:** Digital pulse  
**Team Slogan:** "Building Digital Solutions That Last"  
**Team Members:**
- Eric Gutierrez - gutiee2 - gutiee2@rpi.edu
- Kaaviya Kannan - kannak - kannak@rpi.edu  
- Pablo Semidey - semidp - semidp@rpi.edu
- Jason Zheng - zhengj12 - zhengj12@rpi.edu
- Temitayo Oladeji - oladet - oladet@rpi.edu

## Repository Links
- **Group Repository:** https://github.com/otemitayo1212/Lab-1

## Work Log

### Initial Setup (Day 1)
- Created GitHub repository structure
- Discussed team roles and responsibilities
- Researched portfolio design inspiration
- Set up basic HTML file structure with proper naming conventions

### Group Portfolio Development (Day 2)
- Designed team branding with "Data Pulse" name and professional slogan
- Created index.html with team information and navigation
- Added project mockups for E-Commerce Platform, Task Management App, and Weather Dashboard
- Implemented responsive CSS Grid layout for project showcase
- Added team member photos and basic information cards

### Individual Portfolio Pages (Day 3)
- Each member created their individual portfolio page (rcsid.html format)
- Added required sections: contact info, education, work experience, skills
- Implemented professional styling consistent with group design
- Ensured all personal information was properly formatted

### Microformats Implementation (Day 4)
- Researched hCard microformat specifications on microformats.org
- Added hCard classes to all team member contact information
- Implemented vcard, fn, email, tel, adr, and org classes
- Added hidden organizational information for semantic markup
- Tested microformat structure for proper implementation

### Final Testing and Validation (Day 5)
- Validated all HTML files using W3C HTML validator
- Validated CSS using W3C CSS validator
- Tested responsive design on multiple screen sizes
- Verified all internal links work correctly
- Confirmed GitHub Pages deployment functionality

## Technical Implementation

### File Structure
```
lab1/
├── index.html              # Group portfolio homepage
├── resources/
│   ├── styles/
│   │   └── style.css       # Main stylesheet
│   ├── scripts/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # All images and photos
│       ├── team-logo.jpg
│       ├── eric-headshot.jpg
│       ├── kaaviya_headshot.jpeg
│       ├── pablo-headshot.jpg
│       ├── jason.jpg
│       ├── Temi-headshot.jpg
│       └── project mockups/
├── profiles/
│   ├── gutiee2.html        # Eric's portfolio
│   ├── kannak.html         # Kaaviya's portfolio
│   ├── semidp.html         # Pablo's portfolio
│   ├── zhengj12.html       # Jason's portfolio
│   └── oladet.html         # Temitayo's portfolio
└── README.md               # This documentation
```

### Technologies Used
- **HTML5:** Semantic markup with proper document structure
- **CSS3:** Grid layout, Flexbox, gradients, transitions, responsive design
- **Microformats:** hCard implementation for contact information
- **JavaScript:** Basic interactivity (script.js included)

### Design Features
- Professional gradient color scheme (purple/blue theme)
- Responsive CSS Grid for team members and projects
- Hover effects and smooth transitions
- Clean, modern typography using Arial font family
- Mobile-first responsive design approach

## Problem-Solving Documentation

### Major Challenges
1. **hCard Implementation**
   - **Issue:** Understanding proper microformat structure
   - **Solution:** Studied microformats.org documentation and examples
   - **Result:** Correctly implemented vcard classes with proper nesting

2. **Image Sizing and Consistency**
   - **Issue:** Team member photos were different sizes and aspect ratios
   - **Solution:** Used CSS object-fit: cover and consistent container sizes
   - **Result:** Professional, uniform appearance across all member cards

3. **Responsive Layout**
   - **Issue:** Grid layout breaking on mobile devices
   - **Solution:** Used CSS Grid with auto-fit and minmax functions
   - **Result:** Smooth responsive behavior across all screen sizes

## Validation Results
- ✅ **HTML Validation:** All pages pass W3C HTML validator
- ✅ **CSS Validation:** Stylesheet passes W3C CSS validator  
- ✅ **Cross-browser Testing:** Confirmed compatibility in Chrome and Firefox
- ✅ **Responsive Design:** Tested on multiple screen sizes
- ✅ **hCard Validation:** Microformat structure verified

## Citations and Sources

### Design Inspiration
- Dribbble portfolio designs - Layout and color scheme inspiration
- Behance web portfolios - Team page structure reference
- Modern web design trends - Gradient and card-based layouts

### Technical Resources
- **MDN Web Docs** (https://developer.mozilla.org) - CSS Grid and HTML5 reference
- **W3Schools** (https://www.w3schools.com) - CSS styling tutorials
- **Microformats.org** (http://microformats.org/wiki/hcard) - hCard specification and examples
- **CSS-Tricks** (https://css-tricks.com) - CSS Grid guides and responsive design

### Validation Tools
- **W3C HTML Validator** (https://validator.w3.org/) - HTML markup validation
- **W3C CSS Validator** (https://jigsaw.w3.org/css-validator/) - CSS validation
- **GitHub Pages** - Website hosting platform

### Image Resources
- Team member personal photos - Individual headshots
- Project mockups - Created using design tools and screenshots
- Team logo - Custom designed for project branding

## Individual Contributions
- **Eric Gutierrez:** Frontend development, CSS styling, responsive design
- **Kaaviya Kannan:** UI/UX design, visual elements, image optimization  
- **Pablo Semidey:** Backend structure, file organization, validation testing
- **Jason Zheng:** HTML structure, navigation implementation, content organization
- **Temitayo Oladeji:** Microformats research, hCard implementation, documentation

## Project Reflection
This project provided hands-on experience with fundamental web technologies. Key learning outcomes include understanding semantic HTML structure, implementing responsive CSS layouts, and working with web standards like microformats. The collaborative nature helped us learn version control and team coordination in web development.

The hCard microformat implementation was particularly educational, introducing us to the concept of semantic web and structured data that can be parsed by other applications.

## Future Improvements
- Add JavaScript interactivity for project filtering
- Implement contact form functionality
- Add animation libraries for enhanced user experience
- Include accessibility features (ARIA labels, keyboard navigation)
- Add dark mode toggle option

---

**Course:** Web Systems  
**Instructor:** Prof. Munasinghe  
**Due Date:** September 19, 2025  
**Submission:** LMS by 11:59 PM ET
