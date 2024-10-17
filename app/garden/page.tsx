"use client";
import { useEffect, useRef, useState } from 'react';
import TransitionLink from '@/components/TransitionLink';
import * as THREE from 'three';
import { init, animate, updateVisualization, onWindowResize, onMouseMove } from './gardenScene';

export default function Garden() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const [itemNumber, setItemNumber] = useState(null);
  const [label, setLabel] = useState('');
  const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
  const [minimizedPanels, setMinimizedPanels] = useState({
    featuredConfigs: false,
    gardenComposition: false,
    recentSeeds: false,
  });

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

  const toggleMinimized = (panelName: keyof typeof minimizedPanels) => {
    setMinimizedPanels(prev => ({
      ...prev,
      [panelName]: !prev[panelName]
    }));
  };

  return (
    <>
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
          <div className="cover"></div>
          <div id="number-ui">
            <div className="number-ui-inner">
              <label htmlFor="itemNumberInput">Garden ID#:</label>
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
          </div>
          <div id="instruction" className="hide">Click + drag</div>
        </div>
        <div className="ui-panel-container">
          <div className={`featured-configs ui-panel ${minimizedPanels.featuredConfigs ? 'minimized' : ''}`}>
            <div className="config-list-label list-label" onClick={() => toggleMinimized('featuredConfigs')}>
              <div>Popular Configs</div>
            </div>
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
        </div>
        <div className="ui-panel-container">
          <div className={`garden-composition ui-panel ${minimizedPanels.gardenComposition ? 'minimized' : ''}`}>
            <div className="attunement-list-label list-label" onClick={() => toggleMinimized('gardenComposition')}>
              <div>attunements</div>
            </div>
            <ul role="list" className="list">
              <li><span className="attunement"></span> Creation: <span className="composition-count">0</span>
              </li>
              <li>
                <span className="attunement destruction"></span> Destruction: <span className="composition-count">0</span>
              </li>
              <li><span className="attunement perception"> </span> Perception: <span className="composition-count">0</span>
              </li>
              <li>
                <span className="attunement protection"></span> Protection: <span className="composition-count">0</span>
              </li>
              <li><span className="attunement passion"> </span> Passion: <span className="composition-count">0</span>
              </li>
              <li>
                <span className="attunement fortune"></span> Fortune: <span className="composition-count">0</span>
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
        </div>
        <div className="ui-panel-container">
          <div className={`recent-seeds ui-panel ${minimizedPanels.recentSeeds ? 'minimized' : ''}`}>
            <div className="recent-seeds-list-label list-label" onClick={() => toggleMinimized('recentSeeds')}>
              <div>Recently Set</div>
            </div>
            <ul role="list" className="ui-list disable-scrollbars">
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed999.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed7615014902.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed2203320320000.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed1239187122883187151293600392.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed85418030059554038646478733380.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed99035203142830599563062018304.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <li>
                <div className="recent-seeds-item"><img src="/seeds/seed973175613425012973423561801761.png" alt="seed-1" loading="lazy"/></div>
              </li>
              <a href="https://docs.seed.gallery/the-garden" target="_blank" className="ui-button small w-button">more</a>
            </ul>
          </div>
        </div>
      </div>
      <TransitionLink href='/' className="garden-button ui-element">
        <div onClick={(e) => e.stopPropagation()}>
          <svg data-name="icon-spiral" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.96 105.96">
            <path className="cls-1" d="M83.35 92.75c22.48-19.86 22.39-52.41 3.25-71.55-18.49-18.49-47.33-19.81-66.85-.29-17.77 17.77-17.77 45.21-.76 62.22 16.17 16.17 41.7 16.85 57.87.68 15.25-15.25 15.19-39.05.48-53.76s-34.67-14.77-49.44 0c-12.18 12.18-12.18 32.9 0 45.08 12.1 12.1 29.54 10.61 40.63-.48a25.84 25.84 0 0 0 0-36.54c-9.18-9.18-23.73-8.84-32.91.34-8.35 8.35-8.21 21.08.14 29.44 7.36 7.36 18.64 7.17 25.96-.16a15.83 15.83 0 0 0 .03-22.36c-4.83-4.83-13.69-4.51-18.43.23s-4.81 10.98-.72 15.07c3.28 3.28 8.51 3.75 12.28-.02a6.05 6.05 0 0 0 .7-8.2c-1.34-1.57-4.07-2.11-5.76-.44"/>
          </svg>
        </div>
      </TransitionLink>
    </>
  );
}
