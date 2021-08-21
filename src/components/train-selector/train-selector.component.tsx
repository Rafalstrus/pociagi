import './train-selector.styles.css';

import { connect, useSelector } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

function TrainSelector() {
  return (
    <div>
      <p>Train Selector</p>
      <input></input>
      <button
      onClick={()=>{

      }}></button>
    </div>
  );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrainSelector);
