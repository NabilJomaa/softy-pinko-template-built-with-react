'use client'
import styles from "./link.module.css";
function Links(props) {

    
    return (
        <div style={{display:(props.status&&props.larg)?'flex':''}} className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work-process">Work Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing-tables">Pricing Tables</a>
            <a href="#blog-entries">Blog Entries</a>
            <a href="#contact-us">Contact Us</a>
        </div>
    )
}

export default Links;