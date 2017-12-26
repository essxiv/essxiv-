import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import ReactPlayer from 'react-player';
import Landing from './Landing';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            video: [
                // 'https://d1235ca2z646oc.cloudfront.net/videos/processed/2/3M2A4295.mp4.mp4', 'https://d1235ca2z646oc.cloudfront.net/videos/processed/33/StockholmBigcitynight-HD-1.mp4.mp4', 'https://d1235ca2z646oc.cloudfront.net/videos/processed/2/MVI_0449-1.mp4.mp4'
            ]
        }
    }

    componentWillMount() {
        // console.log('Component Will Mount(): Home')
    }

    componentDidMount() {
        // console.log('Component Did Mount(): Home')
    }

    setIndex() {
        // console.log('setIndex.state: ', this.state.index);

        let currentIndex = this.state.index;

        if (this.state.index === this.state.video.length - 1) {
            return 0;
        } else { 
            return this.setState({
                index: currentIndex
            })
        }

    }

    setInterval(i) {
        setInterval(function(i) {
        }, 5000);
    }

    loopVideo() {
        let video = this.state.video;
        let videosLength = video.length;        

        for (var i = 0; i < videosLength; i++) {
            // console.log('weird: ', this.state.video[i])
            return (
                <video id="background-video" muted loop autoPlay>
                    <source src={video[i]} type="video/mp4" />
                    <source src={video[i]} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            )
        }
    }

    render() {

        return (
            <div>
                <div id="body" className="animsition-overlay">

                {/* {
                    this.loopVideo()
                } */}

                {/* <video muted id="background-video" loop autoPlay>
                    <source src="../styles/vid/background-vid.mp4" type="video/mp4" />
                    <source src="../styles/vid/background-vid.mp4"  type="video/ogg" />
                </video> */}

                    {/* <ReactPlayer playing
                        id="background-video"
                        url={this.state.video[this.state.index]} 
                        onEnded={() => {

                            this.setIndex()

                            console.log('onEnd Index: ', this.state.index);

                        }} 
                        // onEnd={() => this.setState({ index: this.setIndex() })}
                    /> */}

                    <Landing />
                </div>
            </div>
        )
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

export default withRouter(connect(mapState, mapDispatch)(Home)) ;
