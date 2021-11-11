# Venable Park Investment Council Inc. Website 📈

**Table of Contents**
- [Intro](#Hello!)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Challenges](#challenges)
- [Possible Improvements](#possible-improvements)

## Hello!
This website was a freelance project I took on for Venable Park Investment Council. The project has multiple dynamic components managed by Sanity (CMS).

_It is important to note the site is currently version one of two. Due to time constraints certain things were forgone to ensure a timely release of the site. Within 2 months the next major version will be released which will address the 'Possible Improvements' listed below._

## Tech Stack
- [Next JS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Sanity](https://www.sanity.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started
Click [here](https://www.venablepark.com/) to visit the site!

To run it locally, clone the repository, run "npm install" within the cloned directory, and lastly call "npm run dev" to deploy the development server. By default it should be live on http://localhost:3000/.

## Challenges
The site's most challenging component was the newsletter archive. The client uploads the newsletters in PDF format to the hosted CMS. Then I render the first page as a thumbnail for the archive page. 

The archive features search by date (yyyy); however, I have implemented the ability for search by keywords and sort by age. This functionality still requires polishing and will be released in the next patch of the site.

## Possible Improvements
- The "About" pages design was heavily influenced by the client and should be re-worked to more effectively display the required information (Coming in the next patch).
- Animations to improve user-experience (Coming in the next patch).
- Better API for data fetching from Sanity (Coming in the next patch).
- Improved accessiblity (Coming in the next patch).
- Improved search functionality for the newsletter archive. 