import React from 'react';
import { connect } from 'react-redux';
import { putChangeStatus, deleteTask } from '../../redux/reducer';

const Task = (props) => {
  return (
      <div>
          <div id="header">asfHeader..</div>
      </div>
  );
};

const mapDispatch = {putChangeStatus, deleteTask};
export default connect(null, mapDispatch)(Task);
