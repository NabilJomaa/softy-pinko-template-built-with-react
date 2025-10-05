
import React from "react";
import right from "@/assets/images/right-image.png";
import left from "@/assets/images/left-image.png";
import styles from "./page.module.css";
import MainNav from "../components/main-nav.jsx";
import Main from "@/components/main.jsx";
import Feature from "@/components/feature.jsx";
import Row from "@/components/row.jsx";
import WorkProcess from "@/components/work-process.jsx";
import Testimonials from "@/components/testimonials.jsx";
import Pricing from "@/components/pricing-tables.jsx";
import BlogEntries from "@/components/blog-entries.jsx";
import ContactUs from "@/components/contact-us.jsx";
import Footer from "@/components/footer.jsx";

export default function Home() {
  return (
    <div className={styles.everyContent}>
      <div className={styles.out}></div>
      <div className={styles.mainContainer}>
        <MainNav />
      </div>
      <Main
        header1="We provide the best strategy to grow up your business"
        pargraph="Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge"
      />
      <div className={styles.mainContainer}>
        <div className={styles.features}>
          <Feature
            h5="Modern Strategy"
            paragraph="Customize anything in this template to fit your website needs"
          />
          <Feature
            h5="Best Relationship"
            paragraph="Contact us immediately if you have a question in mind"
          />
          <Feature
            h5="Ultimate Marketing"
            paragraph="You just need to tell your friends about our free templates"
          />
        </div>

        <div id="about">
          <Row
            isFirst = {true}
            h2="Let us discuss about your project"
            paragraph="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
            image={left}
          />
          <div className={styles.hr}></div>
          <Row
            h2="We can help you to grow your business"
            paragraph="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
            image={right}
          />
        </div>
        <div id="work-process">
          <WorkProcess/>
        </div>
        <div id="testimonials">
          <Testimonials/>
        </div>
        <div id="pricing-tables">
          <Pricing/>
        </div>
        <div id="blog-entries">
          <BlogEntries/>
        </div>
        <div id="contact-us">
          <ContactUs/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
