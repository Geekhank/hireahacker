import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /#services)
    if (location.hash) {
      // Remove the # symbol
      const sectionId = location.hash.substring(1);
      
      // Wait a bit for the page to render
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);
};
