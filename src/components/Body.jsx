import React from 'react';
import gif from '../images/demoLoopCrop.gif';
import DemoText from './DemoText';

const Body = () => {

  return (
    <>
      <div className="body">
        <div className="demoContainer">
          <img src={gif} alt="demo" />
        </div>
        <DemoText />
      </div>
    </>
  )
}

export default Body;
