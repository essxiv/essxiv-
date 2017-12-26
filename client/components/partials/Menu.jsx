import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { putChangeStatus } from '../../../redux/reducers';
import Ionicon from 'react-ionicons';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        // console.log('ComponentWillMount(): menu')
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();')
    }

    componentDidMount() {

        // console.log('ComponentDidMount(): menu')
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();')
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();')
    }

    render() {
        return (
            <div className="col-lg-1 col-md-1 col-sm-1 no-padding">
                <a href="/reminisce/se" className="animsition-link"
                                        data-animsition-out-class="overlay-slide-out-top"
                                        data-animsition-out-duration="500">>
                    <div id="Home-Menu">
                        <div className="menu-title-container">
                            <div className="menu-text">Menu</div>
                        </div>
                    </div>
                </a>
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

export default withRouter(connect(mapState, mapDispatch)(Menu));
