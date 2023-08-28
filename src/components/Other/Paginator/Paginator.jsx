import styles from "../../Pages/Users/Users/Users.module.css";
import React from "react";

const Paginator = ({totalCount, pageSize, currentPage, onPageChanged}) => {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];

  if (currentPage <= 5) {
    for (let i= 1; i <= currentPage + 11; i++) {
      pages.push(i);
    }
  } else if (currentPage + 5 >= pagesCount) {
    for (let i= currentPage - 7; i <= pagesCount; i++) {
      pages.push(i);
    }
  } else {
    for (let i=currentPage - 5; i <= currentPage + 5; i++) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.paginationWrapper}>
      <span onClick={() => {onPageChanged(1)}}>В начало</span>
      {pages.map(pageNumber => <span className={currentPage === pageNumber && styles.selectedPage} onClick={() => {onPageChanged(pageNumber)}}>{pageNumber}</span>)}
      <span onClick={() => {onPageChanged(pagesCount)}}>В конец</span>
    </div>
  );
}

export default Paginator;