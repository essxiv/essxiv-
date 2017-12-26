import React, { Component } from 'react';
import { connect } from 'react-redux';


class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        // console.log('ComponentWillMount(): Loading')
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();')
    }

    componentDidMount() {
        // console.log('ComponentDidMount(): Loading')
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();')
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();')
    }

    render() {
        return (
            <div className="circles-loading-container">
                <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>      
                    <div></div>              
                </div>

                <div className="circles-credits">
                    <div className="circles-credits-text">s essxiv project</div>
                </div>
            </div>
        )
    }
}

export default Landing;
