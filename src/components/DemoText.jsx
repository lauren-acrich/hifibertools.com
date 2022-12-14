import React from 'react';

function DemoText() {
  return (
    <div className="textContainer">
      <div className="demoText">
        <h1>Features</h1>
        <div>
          Our tool accesses the components of your React16+ application via the React fiber tree and maps out a hierarchical structure of component relationships. 
        </div>
        <br />
        <div>
          Developers are able to quickly identify components that unnecessarily re-render and cause slowdown in performace, serving as an invaluable debugging tool. 
        </div>
        <br />
        <div>
          The modal popup contains useful Fiber node properties such as component type, line number in codebase, and parent node. 
        </div>
        <br />
        <div>
          HiFiber is designed for both the experienced engineer looking for a robust debugging tool, as well as the onboarding engineer surveying the lay of the land of their company's codebase. 
        </div>
        <br />
        <br />
        
        <div className="featuresToCome">
          <strong>Features to come</strong>
            <li>Live error handling to display Fiber nodes that are unintentionally re-rendering</li>
            <li>Measure performance metrics - including Fiber node duration, re-render time/count, and various other useful properties.</li>
        </div>
      </div>
    </div>
  )
}

export default DemoText;