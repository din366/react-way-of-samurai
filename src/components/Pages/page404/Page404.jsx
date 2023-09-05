import React from "react";
import styles from './page404.module.css';
import notFound from './../../Other/notFound.png';
import {Link} from "react-router-dom";


const Page404 = () => {
  return (
      <div className={styles.blockWrapper}>
        <img src={notFound} alt="not found" className={styles.image}/>
        <h1 className={styles.title}>Page is not found</h1>
        <Link to={'/'} className={styles.mainpageLink}>Go to main page</Link>
      </div>
  );
}

export default Page404;