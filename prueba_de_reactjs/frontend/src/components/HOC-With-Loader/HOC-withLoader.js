import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Loader.css'

const withLoader = (WrappedComponent, propName, coverName) => (
    class withLoaderComponent extends Component{
        render(){
            return this.props[propName].length > 0 ? 
                <WrappedComponent {...this.props}/>
                : 
                <div className="back"> 
                    <div className={coverName}><div className="loader"></div> </div>  
                </div>
        }
    }
)

export default withLoader;