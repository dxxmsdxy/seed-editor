"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { init, animate, updateVisualization, onWindowResize, onMouseMove } from './gardenScene';

export default function Garden() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const [itemNumber, setItemNumber] = useState(null);
  const [label, setLabel] = useState('');
  const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!sceneContainerRef.current) return;

    const container = sceneContainerRef.current;
    const { scene, camera, renderer, controls } = init(container, setLabel);

    const handleResize = () => onWindowResize(container);
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event: MouseEvent) => onMouseMove(event, container, setLabel, setLabelPosition);
    container.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  const handleItemNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemNumber(parseInt(e.target.value));
  };

  const handleUpdateVisualization = () => {
    updateVisualization(itemNumber, setLabel);
  };

  return (
    <div className="garden-container"
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
        {label && (
          <div id="label" style={{
            position: 'absolute',
            left: `${labelPosition.x}px`,
            top: `${labelPosition.y}px`,
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px',
            borderRadius: '3px',
            pointerEvents: 'none',
          }}>
            {label}
          </div>
        )}
        <div id="number-ui">
          <label htmlFor="itemNumberInput">Garden Plot #:</label>
          <input
            type="text"
            pattern="[0-9]*"
            id="itemNumberInput"
            placeholder="1-9999"
            min="0"
            max="10000"
            value={itemNumber ? itemNumber : ''}
            onChange={handleItemNumberChange}
            onKeyDown={(e) => e.key === 'Enter' && handleUpdateVisualization()}
          />
          <button onClick={handleUpdateVisualization}>Check</button>
        </div>
        <div id="instruction" className="hide">Click + drag</div>
      </div>
      <div className="featured-configs">
        <div className="config-list-label"><div>Popular Configs</div></div>
        <ul role="list" className="ui-list">
          <li>
            <div className="config-item"><div className="config-text">.480000991299:4</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.310007131465:0</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.260000878264:9</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.000000000046:0</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.600043524044:2</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.940000100688:1</div><div className="add-config-button"></div></div>
          </li>
          <li>
            <div className="config-item"><div className="config-text">.000000611003:3</div><div className="add-config-button"></div></div>
          </li>
        </ul>
      </div>
      <div className="garden-composition">
        <div className="attunement-list-label"><div>attunements</div></div>
        <ul role="list" className="list">
          <li><span className="attunement"></span> Creation: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement destruction"></span> Detruction: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement protection"></span> Protection: <span className="composition-count">0</span>
          </li>
          <li><span className="attunement perception"> </span> Perception: <span className="composition-count">0</span>
          </li>
          <li><span className="attunement passion"> </span> Passion: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement passion"></span> Fortune: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement wisdom"></span> Wisdom: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement resilience"></span> Resilience: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement transformation"></span> Transformation: <span className="composition-count">0</span>
          </li>
          <li>
            <span className="attunement eternity"></span> Eternity: <span className="composition-count">0</span>
          </li>
        </ul>
      </div>
      <div className="recent-seeds">
        <div className="recent-seeds-list-label"><div>Recent Seeds</div></div>
        <ul role="list" className="ui-list">
          <li>
            <div className="recent-seeds-item"><img src="https://cdn.prod.website-files.com/64b75d781127b73bc77a3112/6700a401b83ab0f475f9835d_seed2203320320000.png" loading="lazy"/></div>
          </li>
          <li>
            <div className="recent-seeds-item"><img src="https://cdn.prod.website-files.com/64b75d781127b73bc77a3112/6700a4048320a06d98dfdd94_seed999.png" loading="lazy"/></div>
          </li>
          <li>
            <div className="recent-seeds-item"><img src="https://cdn.prod.website-files.com/64b75d781127b73bc77a3112/6700a403a24e056407bc67d9_seed85418030059554038646478733380.png" loading="lazy"/></div>
          </li>
        </ul>
        <a href="https://docs.seed.gallery/the-garden" target="_blank" className="ui-button small w-button">more</a>
      </div>
    </div>
  );
}
