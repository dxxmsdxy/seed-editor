'use client';
import { useEffect, useRef } from 'react';

// Import the garden scene code
//import { init, animate, updateVisualization } from './gardenScene';

export default function Garden() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);

  

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="garden">
        <div id="scene-container" ref={sceneContainerRef}></div>
        <div id="label"></div>
        <div id="number-ui">
          <label htmlFor="itemNumberInput">Garden Plot #:</label>
          <input
            type="text"
            pattern="[0-9]*"
            id="itemNumberInput"
            placeholder="1-10000"
            min="0"
            max="10000"
            onKeyDown={(e) => e.key === 'Enter' && updateVisualization()}
          />
          <button>Check</button>
        </div>
        <div id="instruction" className="hide">Click + drag</div>
      </div>
      <div className="garden-composition">
        <ul role="list" className="list">
          <li className="w-clearfix"><span className="attunement"> </span> Creation: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement destruction"> </span> Detruction: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement protection"> </span> Protection: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement perception"> </span> Perception: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement passion"> </span> Passion: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement passion"> </span> Fortune: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement wisdom"> </span> Wisdom: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement resilience"> </span> Resilience: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement transformation"> </span> Transformation: <span className="composition-count">0</span></li>
          <li className="w-clearfix"><span className="attunement eternity"> </span> Eternity: <span className="composition-count">0</span></li>
        </ul>
        <a href="https://docs.seed.gallery/the-garden" target="_blank" className="ui-button small w-button">📔 Learn more</a>
      </div>
    </div>
  );
}
