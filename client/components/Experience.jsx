import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import axios from 'axios';

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
        console.log('GET STATE INFO:  ', this.state.info);
        return (
            <div>
                <div>{this.state.info}</div>
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
