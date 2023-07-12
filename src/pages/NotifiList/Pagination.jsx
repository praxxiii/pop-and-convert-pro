import { useState } from "react"

export default function Pagination({ currentPage, onPageClick, noOfItems, itemPerPage }) {

    const [pageNumber, setPageNumbers] = useState(currentPage)

    const handlePaginationClick = (item) => {
        setPageNumbers(item)
        typeof onPageClick === 'function' && onPageClick()
    }

    const length = Math.ceil(noOfItems / itemPerPage)

    const listPageNumbers = Array.from({ length }, (item, index) => {
        return <li key={index + 1} className={`page-item ${index +1 === pageNumber && 'active'}`}>
            <a className="page-link" onClick={()=>handlePaginationClick(index+1)}>
                {index + 1}
            </a>
        </li>
    })

    return <>
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${pageNumber - 1 || 'disabled'}`}>
                    <a className="page-link" onClick={()=>handlePaginationClick(pageNumber-1)}>Previous</a>
                </li>
                {listPageNumbers}
                <li className={`page-item ${pageNumber + 1 > length && 'disabled'}`}>
                    <a className="page-link" onClick={()=>handlePaginationClick(pageNumber+1)}>Next</a>
                </li>
            </ul>
        </nav>
    </>
}