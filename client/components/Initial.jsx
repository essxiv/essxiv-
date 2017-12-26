import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import { } from '../../redux/reducers';
import axios from 'axios';
import Loading from './partials/Loading';

class Initial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 600);

        // console.log('ComponentWillMount(): Initialize');
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();');
    }

    componentDidMount() {
        // console.log('ComponentWillMount(): Initialize');
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();');
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();');
    }


    render() {
        const loading = this.state.loading;

        if (loading) {
            return (
                <Loading />
            );
        } else {
            return (
                <div id="Initial">
                    <div id="container-fluid no-padding">
                        <div className="row no-padding">
                            <div className="col-lg-12 col-md-12 col-sm-12 no-padding">
    
                                <div className="top animated bounceInLeft">
                                    <div className="row no-padding">
                                        <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                            <div id="title">We Always Have a Choice...</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                            <div className="life-container">
                                                <a href="/reminisce/se" className="animsition-link"
                                                    data-animsition-out-class="overlay-slide-out-top"
                                                    data-animsition-out-duration="500"> 
                                                     <div className="life-box">
    
                                                    </div>     
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="enter">
                                    <div className="spinner">
                                        <div className="ball ball-1"></div>
                                        <div className="ball ball-2"></div>
                                        <div className="ball ball-3"></div>
                                        <div className="ball ball-4"></div>
                                    </div>
                                </div>
    
                                <div id="bottom" className="animated bounceInRight">
                                    <div className="row no-padding">
                                        <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                            <div className="bars-container">
                                                <div className="bars">
                                                    <span className="bars-text">S</span>
                                                </div>
                                                <div className="bars">
                                                    <span className="bars-text">Y</span>
                                                </div>
                                                <div className="bars">
                                                    <span className="bars-text">N</span>
                                                </div>
                                                <div className="bars">
                                                    <span className="bars-text">X</span>
                                                </div>
                                                <div className="bars">
                                                    <span className="bars-text">I</span>
                                                </div>
                                                <div className="bars">
                                                    <span className="bars-text">C</span>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6 col-md-6 col-sm-6 no-paddding">
    
                                            <div id="title">No Matter How Far We Fall...</div>
                                            <div id="credits">a essxiv _.project</div>
                                        </div>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapState(state) {
    // console.log('Redux States: ', state);
    return {
        reducer: state.reducer
    }
}
 function mapDispatch(dispatch) {
    //  console.log(dispatch);
     return {
        // putChangeStatus: (task, bool) => {dispatch(putChangeStatus(task, bool))}
     }
 }

export default withRouter(connect(mapState, mapDispatch)(Initial));
