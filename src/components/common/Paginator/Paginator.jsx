import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, onPageChange, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages = [...pages, i];

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return <div className = {s.paginator}> 
                {portionNumber > 1 && <button onClick = {() => {setPortionNumber(portionNumber - 1)}}>Назад</button>}
                {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <span className = {cn({[s.selectedPage]: currentPage === page}, s.pageNumber)}
                                onClick = {
                                    () => {onPageChange(page)}
                                } 
                                key = {page}>{page}
                            </span>
                    }
                )}
                {portionNumber < portionCount && <button onClick = {() => {setPortionNumber(portionNumber + 1)}}>Вперед</button>}
            </div>
};

export default Paginator;