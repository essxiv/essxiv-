import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { putChangeStatus } from '../../redux/reducers';
import Ionicon from 'react-ionicons';

import Menu from './partials/Menu';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        // console.log('ComponentWillMount(): Landing')
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();')
    }

    componentDidMount() {

        // console.log('ComponentDidMount(): Landing')
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();')
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();')
    }

    render() {
        return (
            <div id="Landing">

                <div className="container-fluid">
                    <div className="row no-padding">

                        <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                            <div id="Home-Bullets">
                                <div className="row no-padding">

                                    <a href="/" className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-2 no-padding">
                                            <Ionicon className="icon" icon="ios-color-filter-outline" fontSize="35px" color="white"/>
                                        </div>      
                                    </a>

                                    <a href="/reminisce/se/experience" className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-2 no-padding">
                                            <Ionicon className="icon" icon="ios-flame-outline" fontSize="35px" color="white"/>
                                        </div>          
                                    </a>

                                    <a href="/reminisce/se/experience" 
                                        className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-2 no-padding">
                                            <Ionicon className="icon" icon="ios-git-branch" fontSize="35px" color="white"/>
                                        </div>
                                    </a>

                                    <a href="/reminisce/se/experience" 
                                        className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-2 no-padding">
                                            <Ionicon className="icon" icon="ios-infinite-outline" fontSize="35px" color="white"/>
                                        </div>
                                    </a>

                                    <a href="/reminisce/se/experience" className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-2 no-padding">
                                            <Ionicon className="icon" icon="ios-lock-outline" fontSize="35px" color="white"/>
                                        </div>
                                    </a>

                                    <a href="/reminisce/se/experience" className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">
                                        <div className="col-lg-2 col-md-2 col-sm-1 no-padding">
                                            <Ionicon className="icon" icon="ios-pin-outline" fontSize="35px" color="white"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                        
                            <div id="Home-Basic">
                                <div className="row no-padding">
                                    <div className="col-lg-12 col-md-12 col-sm-12 no-padding">
                                        <div className="reminisce-title">Build Things That Matter</div>
                                        <div className="reminisce-desc-container">
                                            <div className="reminisce-description">Critical Thinker</div>
                                            <div className="reminisce-description">Software Engineer</div>
                                        </div>  
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 no-padding">
                            <div className="row no-padding">
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div className="Home-Highlights-Top">
                                        <div className="four-square-container">
                                            <span className="four-square-text">knowledge</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div className="Home-Highlights-Top">
                                        <div className="four-square-container">
                                            <span className="four-square-text">experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div className="Home-Highlights-Bottom">
                                        <div className="four-square-container">
                                            <span className="four-square-text">precision</span>
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div className="Home-Highlights-Bottom">
                                        <div className="four-square-container">
                                            <span className="four-square-text">technologies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    // console.log('Map State: ', state);
    return {
        reducer: state.reducer
    }
}
 function mapDispatch(dispatch) {
    //  console.log('Map Dispatch: ', dispatch);
     return {
        putChangeStatus: (task, bool) => { dispatch(putChangeStatus(task, bool)) }
     }
 }

export default withRouter(connect(mapState, mapDispatch)(Landing));
