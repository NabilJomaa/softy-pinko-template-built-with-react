import SectionText from "./section-text.jsx";
import Blog from "./blog.jsx";
import styles from "./blog-entries.module.css";

import blog1 from "../assets/images/blog-item-01.png"
import blog2 from "../assets/images/blog-item-02.png"
import blog3 from "../assets/images/blog-item-03.png"

function BlogEntries() {
    return (
        <div className={styles.blogEntries}>
            <SectionText
            h2="Blog Entries"
            paragraph="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
            />
            <div className={styles.blogs}>
                <Blog image={blog1} h3="Vivamus ac vehicula dui" parg="Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue." />
                <Blog image={blog2} h3="Phasellus convallis augue" parg="Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis." />
                <Blog image={blog3} h3="Vivamus ac vehicula dui" parg="Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu." />
            </div>
        </div>
    );
}

export default BlogEntries;
