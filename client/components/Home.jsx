import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from '../../redux/reducer';
import Header from './Header';

class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        getAllTasks();
    }

    render() {
        return (
            <div>
                <div id="body">
                    <Header />
                </div>
            </div>
        )
    }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = { getAllTasks, postNewTask };

export default connect(mapState, mapDispatch)(Home);
