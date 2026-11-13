import About from "./about/About";
import ContactUs from "./contact-us/ContactUs";
import HowItWorks from "./how-it-works/HowItWorks";
import OurServices from "./our-services/OurServices";
import RowSectionOne from "./row-section-1/RowSectionOne";
import WhatWeDo from "./what-we-do/WhatWeDo";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <RowSectionOne />
      <About />
      <WhatWeDo />
      <HowItWorks />
      <OurServices />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
