import Image from "next/image";
import styles from "./blog.module.css";

function Blog(props) {
    return (
        <div className={styles.blog}>
            <div className={styles.image}>
                <Image
                    src={props.image}
                    alt="blog image"
                    priority
                />
            </div>
            <div className={styles.blogContent}>
                <h3>{props.h3}</h3>
                <p>{props.parg}</p>
                <a href="#blog-entries"><button>READ MORE</button></a>
            </div>
        </div>
    );
}

export default Blog;