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
          HiFiber is designed for both the experienced engineer looking for a robust debugging tool, as well as the onboarding engineer surveying the lay of the land of their company's codebase. 
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="featuresToCome">
          <strong>Features to come</strong>
          
            <li>Error handling to display components that are unnecessarily re-rendering and causing slowdown in performace. This will serve as an invaluable debugging tool.</li>
            <li>Measure performance metrics - including Fiber node duration, re-render time/count, and various other useful Fiber properties.</li>
        </div>
      </div>
    </div>
  )
}

export default DemoText;

// chrome dev tool that serves to map out and visualize the architecture of a React application. It does this by tracking components (via the React fiber tree) as they load and update on the browser. Developers can quickly identify components that unnecessarily re-render and cause slowdown in performance, making it easy to debug and optimize code.

// Working with pages built in React 16+, it will also measure performance metrics - including Fiber node duration, re-render time/count, and various other useful Fiber properties.

// Our aim is twofold; HiFiber is designed not only for the onboarding frontend engineer surveying the lay of the land of their company’s codebase – but is also developed with the more experienced frontend engineer in mind.