import React, { useState } from 'react'

const Pagination = ({ pages, hasPrev, hasNext, cb }) => {
    const [activePage, setActivePage] = useState(1)

    const changePage = e => {
        const _active = +e.target.getAttribute('data-page')
        setActivePage(_active)

        cb(_active)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${!hasPrev && 'disabled'}`}>
                    {
                        hasPrev ? 
                            <span className="page-link" onClick={changePage} data-page={activePage - 1}>Previous</span> :
                                <span className="page-link">Previous</span>
                    }
                </li>
                {
                    Array(pages).fill(0).map((_, index) => (
                        <li key={index} className={`page-item ${index+1===activePage && 'active'}`}>
                            <span className="page-link" onClick={changePage} data-page={index+1}>{index + 1}</span>
                        </li>
                    ))
                }
                <li className={`page-item ${!hasNext && 'disabled'}`}>
                    {
                        hasNext ? 
                            <span className="page-link" onClick={changePage} data-page={activePage + 1}>Next</span> :
                                <span className="page-link">Next</span>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
