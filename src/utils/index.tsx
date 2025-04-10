const ScrollToSection = (sectionId: string) => {
    const nextSection = document.querySelector(sectionId);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

export default ScrollToSection;