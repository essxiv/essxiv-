import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import Landing from './Landing';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Component Will Mount(): Home')
    }

    componentDidMount() {
        console.log('Component Did Mount(): Home')
    }

    render() {
        return (
            <div>
                <div id="body">
                    <video muted id="background-video" loop autoPlay>
                        <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/2/3M2A4295.mp4.mp4" type="video/mp4" />
                        <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/2/3M2A4295.mp4.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <Landing />
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

export default withRouter(connect(mapState, mapDispatch)(Home)) ;
