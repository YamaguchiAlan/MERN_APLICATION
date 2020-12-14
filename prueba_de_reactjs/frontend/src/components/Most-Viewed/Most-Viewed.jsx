import React from 'react'
import { Link } from 'react-router-dom'
import './Most-Viewed.css'

const MostViewed = () => (
    <div className="card bg-dark text-white most-viewed">
        <div className="card-header text-center most-viewed-header">
            <h3>Lo más visto</h3>
        </div>
        <div className="card-body most-viewed-body">
            <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card most-viewed-card border-0">
                    <img src="/img/Dishonored-2.jpg" alt="most-viewed" className="card-img most-viewed-img"/>

                    <div className="card-img-overlay d-flex align-items-end">
                        <Link to="/" className="card-text most-viewed-title">
                                Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios
                        </Link>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card most-viewed-card border-0">
                        <img src="/img/articulos.jpg" alt="most-viewed" className="card-img most-viewed-img"/>

                        <div className="card-img-overlay d-flex align-items-end">
                            <Link to="/" className="card-text most-viewed-title">
                                Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card most-viewed-card border-0">
                        <img src="/img/Dishonored-2.jpg" alt="most-viewed" className="card-img most-viewed-img"/>

                        <div className="card-img-overlay d-flex align-items-end">
                            <Link to="/" className="card-text most-viewed-title">
                                Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card most-viewed-card border-0">
                        <img src="/img/articulos.jpg" alt="most-viewed" className="card-img most-viewed-img"/>

                        <div className="card-img-overlay d-flex align-items-end">
                            <Link to="/" className="card-text most-viewed-title">
                                Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MostViewed