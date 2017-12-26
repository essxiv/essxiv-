import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import axios from 'axios';

import Menu from './partials/Menu';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: '',
            hasValue: Boolean,
            timeStamp: ''
        };
    }

    getInfo() {
        return axios.get('/information')
        .then((res) => {
            console.log('Payload: ', res.data);
            this.setState({
                info: res.data.payload.info,
                hasValue: res.data.payload.hasValue,
                timeStamp: res.data.payload.timeStamp
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    componentWillMount() {
        this.getInfo();
        console.log('ComponentWillMount(): Experience');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount();');
    }

    componentDidMount() {
        console.log('ComponentWillMount(): Experience');
    }

    componentWillReceiveProps() {
        console.log('ComponentReceivedProps();');
    }

    componentWillUpdate() {
        console.log('ComponentWillMount();');
    }

    render() {
        console.log(this.state);

        return (
            <div id="Experience" className="animsition-overlay">
                <div className="experience-container">
                    <div className="container-fluid no-padding">
                        <div className="row no-padding">

                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="experience-main-container">
    
                                    <div className="experience-main-sidenote rotate">Information</div>
                                
                                    <div className="experience-main-title">Revolution</div>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-3 no-padding">
                                <div className="experience-bars-container">
                                    <div className="experience-section-container">
                                        <span className="experience-section-title"></span>
                                    </div>
                                    <div className="experience-bar">
                                        <div className="experience-bar-title">
                                            <span className="experience-hr-expand"></span>
                                        information</div>
                                    </div>
                                    <div className="experience-bar">
                                        <div className="experience-bar-title">
                                            <span className="experience-hr-expand"></span>
                                            precision
                                        </div>
                                    </div>
                                    <div className="experience-bar">
                                        <div className="experience-bar-title">
                                            <span className="experience-hr-expand"></span>
                                            services
                                        </div>
                                    </div>
                                    <div className="experience-bar">
                                        <div className="experience-bar-title">
                                            <span className="experience-hr-expand"></span>
                                            dedication
                                        </div>
                                    </div>
                                    <div className="experience-bar">
                                        <div className="experience-bar-title">
                                            <span className="experience-hr-expand"></span>
                                            contact
                                        </div>
                                    </div>
                                </div>                            
                            </div>

                            <Menu />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    console.log('Redux States: ', state);
    return {
        reducer: state.reducer
    }
}
 function mapDispatch(dispatch) {
     console.log(dispatch);
     return {
        // putChangeStatus: (task, bool) => {dispatch(putChangeStatus(task, bool))}
     }
 }

export default withRouter(connect(mapState, mapDispatch)(Experience));
