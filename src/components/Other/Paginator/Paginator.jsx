import styles from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalCount, pageSize, currentPage, onPageChanged, paginationWrapperFirstForCss}) => {
  console.log(paginationWrapperFirstForCss)

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];

    if (pagesCount <= 12) { // if few pages ( <= 12 )
      for (let i= 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 6 && pagesCount >= 12) {
      for (let i= 1; i <= 12; i++) { // started pages
        pages.push(i);
      }
    } else if (currentPage + 6 >= pagesCount) { // latest pages
      for (let i= pagesCount - 12; i <= pagesCount; i++) {
        pages.push(i);
      }
    } else {
      for (let i= currentPage - 6; i <= currentPage + 6; i++) { // medium pages
        pages.push(i);
      }
    }

  return (
    <div className={`${styles.paginationWrapper} ${paginationWrapperFirstForCss ? styles.paginationWrapperFirst : ''}`}>
      {currentPage !== 1 ? <span className={styles.firstPageButton} onClick={() => {onPageChanged(1)}}>В начало</span> : ''}

      {pages.map(pageNumber => <span className={currentPage === pageNumber && styles.selectedPage} onClick={() => {onPageChanged(pageNumber)}}>{pageNumber}</span>)}

      {currentPage !== pagesCount ? <span className={styles.lastPageButton} onClick={() => {onPageChanged(pagesCount)}}>В конец</span> : ""}

    </div>
  );
}

export default Paginator;