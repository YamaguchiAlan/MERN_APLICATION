import React, { Component } from 'react';

const withLoader = (WrappedComponent, coverName) => (
    class withLoaderComponent extends Component{
        render(){
            switch (this.props.requestState) {
                case "Sucess":
                    return <WrappedComponent {...this.props}/>

                case "inProcess":
                    return <div className="back">
                                <div className={coverName}><div className="loader"></div> </div>
                           </div>

                case "Failed":
                    return <div id="back-body">fail</div>
                default:
                    return <div id="back-body">fail</div>
            }
        }
    }
)

export default withLoader;