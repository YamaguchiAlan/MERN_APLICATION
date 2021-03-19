import React, { Component } from 'react';
import {checkWindowSize} from '../../onResize'
import {scrollFunc} from '../../onScroll'

const withLoader = (WrappedComponent) => (
    class withLoaderComponent extends Component{
        render(){
            switch (this.props.requestState) {
                case "Success":
                    return <WrappedComponent {...this.props}/>

                case "inProcess":
                    return <div className={`back-loader ${this.props.selectHiglight && "mt-5"}`} id="back-body">
                                <div className="loader"></div>
                           </div>

                case "Failed":
                    return this.props.articleLoader ?
                        <div className="article-failed d-flex justify-content-center align-items-center" id="back-body">
                            <h2>It seems that the article doesn't exist</h2>
                        </div>
                    :
                        <div className="d-flex align-items-center justify-content-center" id="back-body">
                            <h2>Sorry, we couldn't find any {this.props.filter ? this.props.filter : "Article"}</h2>
                        </div>

                default:
                    return <div className={`back-loader ${this.props.selectHiglight && "mt-5"}`} id="back-body">
                                <div className="loader"></div>
                            </div>
            }
        }

        componentDidMount(){
            checkWindowSize()

        }

        componentDidUpdate(){
            checkWindowSize()
            scrollFunc()
        }
    }
)

export default withLoader;