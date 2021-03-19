import React from 'react'
import {Link} from 'react-router-dom'

const PageSelector = ({pagination, url}) => {
    return(
        <nav aria-label="Main page">
            <ul className="pagination pagination-lg justify-content-center page-selector">
                {
                    pagination.page > 3 &&
                        <li className="page-item">
                            <Link to={`${url}?page=${pagination.prevPage}`} className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                }
                {
                    pagination.page % 3 === 0 ?
                        <>
                            <li className="page-item">
                                <Link to={`${url}?page=${pagination.page - 2}`} className="page-link" id="first">{pagination.page - 2}</Link>
                            </li>
                            <li className="page-item">
                                <Link to={`${url}?page=${pagination.page - 1}`} className="page-link" id="second">{pagination.page - 1}</Link>
                            </li>
                            <li className="page-item active">
                                <Link to={`${url}?page=${pagination.page}`} className="page-link" id="third">{pagination.page }</Link>
                            </li>
                            {
                                pagination.page + 1 <= pagination.totalPages &&
                                    <li className="page-item">
                                        <Link to={`${url}?page=${pagination.nextPage}`} className="page-link"  aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                            }
                        </>

                    : (pagination.page + 1) % 3 === 0 ?
                        <>
                            <li className="page-item">
                                <Link to={`${url}?page=${pagination.page - 1}`} className="page-link" id="first">{pagination.page - 1}</Link>
                            </li>
                            <li className="page-item active">
                                <Link to={`${url}?page=${pagination.page}`} className="page-link" id="second">{pagination.page}</Link>
                            </li>
                            {
                                pagination.page + 1 <= pagination.totalPages &&
                                    <>
                                    <li className="page-item">
                                        <Link to={`${url}?page=${pagination.page + 1}`} className="page-link" id="third">{pagination.page + 1 }</Link>
                                    </li>
                                    {
                                        pagination.page + 2 <= pagination.totalPages &&
                                            <li className="page-item">
                                                <Link to={`${url}?page=${pagination.nextPage}`} className="page-link" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </Link>
                                            </li>
                                    }
                                    </>
                            }
                        </>

                    :
                        <>
                        {
                            pagination.page ?
                                <li className="page-item active">
                                    <Link to={`${url}?page=${pagination.page}`} className="page-link" id="first">{pagination.page}</Link>
                                </li>
                            :
                                <li className="page-item active">
                                    <Link to={`${url}?page=1`} className="page-link" id="first">1</Link>
                                </li>
                        }
                        {
                            pagination.page + 1 <= pagination.totalPages &&
                                <li className="page-item">
                                    <Link to={`${url}?page=${pagination.page + 1}`} className="page-link" id="second">{pagination.page + 1 }</Link>
                                </li>
                        }
                                                {
                            pagination.page + 2 <= pagination.totalPages &&
                                <>
                                <li className="page-item">
                                    <Link to={`${url}?page=${pagination.page + 2}`} className="page-link" id="third">{pagination.page + 2 }</Link>
                                </li>
                                {
                                    pagination.page + 3 <= pagination.totalPages &&
                                        <li className="page-item">
                                            <Link to={`${url}?page=${pagination.nextPage}`} className="page-link" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </Link>
                                        </li>
                                }
                                </>
                        }
                        </>
                }
            </ul>
        </nav>
    )
}

export default PageSelector