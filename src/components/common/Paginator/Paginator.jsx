import React from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, onPageChange, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages = [...pages, i];
    return <div> 
                {pages.map(page => 
                <span onClick = {() => {onPageChange(page)}} className = {currentPage === page && s.selectedPage}>  {page}  </span>)
                }
            </div>
};

export default Paginator;