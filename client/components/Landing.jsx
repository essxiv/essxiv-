import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { putChangeStatus } from '../../redux/reducers';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        console.log('ComponentWillMount(): Landing')
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount();')
    }

    componentDidMount() {
        // fetch('/users')
        // .then((response) => {
        //     console.log('Data from /users: ', response);
        //     response.json()
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        console.log('ComponentDidMount(): Landing')
    }

    componentWillReceiveProps() {
        console.log('ComponentReceivedProps();')
    }

    componentWillUpdate() {
        console.log('ComponentWillMount();')
    }

    render() {
        return (
            <div id="Landing">

                <div className="container-fluid">
                    <div className="row no-padding">

                        <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                            <div id="Home-Basic"> </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 no-padding">
                            <div className="row no-padding">
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div id="Home-Highlights-Top"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div id="Home-Highlights-Top"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div id="Home-Highlights-Bottom"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                    <div id="Home-Highlights-Bottom"> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 no-padding">
                            <div id="Home-Menu"></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    console.log('Map State: ', state);
    return {
        reducer: state.reducer
    }
}
 function mapDispatch(dispatch) {
     console.log('Map Dispatch: ', dispatch);
     return {
        putChangeStatus: (task, bool) => { dispatch(putChangeStatus(task, bool)) }
     }
 }

export default withRouter(connect(mapState, mapDispatch)(Landing));
