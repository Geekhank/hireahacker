// utils/scrollToSection.ts

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const navbarHeight = 88; // Adjust this to match your navbar height (8.8rem = 88px)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};