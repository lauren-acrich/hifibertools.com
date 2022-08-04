import React from 'react';
import gif from '../images/demoLoopCropFinal.gif';
import DemoText from './DemoText';

const Body = () => {

  return (
    <>
      <div className="body">
        <div className="demoContainer">
          <img className="demoGIF" src={gif} alt="demo" />
        </div>
        <DemoText />
      </div>
    </>
  )
}

export default Body;
