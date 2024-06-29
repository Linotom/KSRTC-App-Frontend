import React from 'react'
import Header from './Header'

const DeleteBus = () => {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBus