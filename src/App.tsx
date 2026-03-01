import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyles';
import theme from '../theme/theme';
import Nav from '../components/layout/nav/Nav';
import Footer from '../components/layout/footer';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import FeesPage from './pages/FeesPage';
import ContactPage from './pages/ContactPage';
import LetterArchivePage from './pages/LetterArchivePage';
import PDFPage from './pages/PDFPage';

// Analytics
import { pageview } from '../utils/Analytics';

const SITEWRAPPER = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

function App() {
  // Track page views for analytics
  React.useEffect(() => {
    const trackPageView = () => {
      pageview(window.location);
    };
    
    // Track initial page load
    trackPageView();
    
    // Track route changes
    window.addEventListener('popstate', trackPageView);
    
    return () => {
      window.removeEventListener('popstate', trackPageView);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <SITEWRAPPER>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/letter-archive" element={<LetterArchivePage />} />
          <Route path="/pdf/:pdfId" element={<PDFPage />} />
        </Routes>
      </SITEWRAPPER>
      <Footer />
    </ThemeProvider>
  );
}

export default App;