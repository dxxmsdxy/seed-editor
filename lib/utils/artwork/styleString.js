export const styleString = `
<style type="text/css">
.seedartwork *:not(text){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-moz-user-select:-moz-none;-webkit-user-select:none;-ms-user-select:none;user-select:none;transform-origin:50%}
.seedartwork{animation:none;animation-play-state:initial;overflow:hidden;box-sizing:border-box;background:#efefef;transition:background 0.7s linear;font-family:monospace;font-size:36px;letter-spacing:6px;font-weight:600;container-type:size}
.seedartwork:focus{outline:none;border:none}
.seedartwork.js{overflow:visible;background:none}

.seedartwork .backdrop{fill:#efefef;transform:scale(2,1)}
.seedartwork .bkg{fill:#fff;filter:drop-shadow(3px 5px 10px rgb(0 0 0/.1))}
.seedartwork .art{clip-path:url(#artClip)}
.seedartwork .art,.seedartwork .outline,.seedartwork .outline-square{fill:#fff;stroke:#000;stroke-width:7;stroke-linejoin:round;stroke-linecap:round;stroke-miterlimit:10}
.seedartwork .outline,.seedartwork .outline-square{fill:none;pointer-events:none}
.seedartwork .square{display:none}
.seedartwork .hid{opacity:0;stroke:none;fill:#00000000}
.seedartwork .wrap{transform:translate3d(0,0,0)}
.seedartwork .art g.on{transition:opacity 0.6s ease-in-out}
/*.seedartwork .wrap,.seedartwork .bkg,.seedartwork .backdrop,.seedartwork .outline,.seedartwork text,.seedartwork .art g .fx,.seedartwork .art g.on,.seedartwork .art #ornate-frame{transition:opacity 0.5s linear,filter 0.5s ease-in-out,mix-blend-mode 0.5s linear,fill 0.5s linear,stroke 0.5s linear}*/
.seedartwork .art > g{display:none;pointer-events:none;opacity:0}
.seedartwork .art > g.on{display:block;opacity:1;pointer-events:auto}
.seedartwork a{text-decoration:none;letter-spacing:2.5px;cursor:pointer}
.seedartwork #signature{display:block;transform:translate(-250px,0px);transition:opacity 1s linear 0.25s}
.seedartwork.prime #signature{transform: translate(-91px,131px)scale(0.8)}
.seedartwork #signature path{pointer-events:none;cursor:pointer;opacity:0}
.seedartwork #signature .outline{stroke-width:6;display:block;transition:opacity 1s linear 0.25s}
.seedartwork.pauseColor{animation-play-state:paused!important}
.seedartwork.pauseSpin .art > g.on{animation-play-state:paused!important}
.seedartwork.pauseDepth g.on .fx{animation-play-state:paused!important}
.seedartwork #char,.seedartwork g.pattern,.seedartwork g.orientation{display:block;opacity:0;pointer-events:none;transition:opacity 0.7s linear 0.1s}
.seedartwork #signature path{opacity:0;pointer-events:none}
.seedartwork.shift #signature path{pointer-events:auto}
.seedartwork.shift #signature,.seedartwork.shift #signature .outline{opacity:1}
.seedartwork.ctrl.alt #char,.seedartwork.ctrl.alt g.pattern,.seedartwork.ctrl.alt g.orientation{display:block;opacity:1;pointer-events:auto}
.seedartwork.ctrl.alt .art g.on{opacity:0.1}
.seedartwork .char{font-size:690px;fill:#000;stroke-width:7;paint-order:fill;filter:blur(1.15px)}
.seedartwork #char-big{font-size:900px;stroke:none}
.seedartwork #char-small{font-size:120px;stroke:none}
.seedartwork .art g.on .fx *{transform:translate3d(0,0,0)}
.seedartwork g.pattern,.seedartwork g.orientation path{stroke-width:7;stroke-linejoin:round}
.seedartwork g.pattern path.on{fill:#000}
.seedartwork #layercount{font-size:60px}
.seedartwork #ornate-frame{display:block;opacity:0;pointer-events:none;fill:#fff;transition:opacity 0.7s linear}
.seedartwork.prime #ornate-frame{opacity:1;pointer-events:auto}

@container(max-aspect-ratio:13.4/18){.seedartwork .wrap{transform:scale(0.92);background:#fff}.seedartwork .backdrop{transform:scale(1,2)}}
@container(max-height:720px){.seedartwork.reveal:has(g.on) .art g.on .fx *{animation:none;filter:blur(0.3px)}}
@container(min-aspect-ratio:13.4/18){.seedartwork .wrap{transform:translate3d(0,0,0)}.seedartwork{background:#fff}.seedartwork .backdrop{display:none}.seedartwork .bkg{transform:scale(1.2)}}
@container(min-aspect-ratio:13.6/18){.seedartwork .wrap{transform:scale(0.91)}.seedartwork{background:#efefef}.seedartwork .backdrop{display:block}.seedartwork .bkg{transform:scale(1)}}
@container(min-aspect-ratio:16.1/9){
  .seedartwork .outline,.seedartwork .bkg:not(.square){display:none}
  .seedartwork .outline.square,.seedartwork .bkg.square{display:block}
  .seedartwork #frame-left{transform:translate(-240px,0px)}
  .seedartwork #frame-right{transform:translate(240px,0px)}
  .seedartwork .art{clip-path:url(#artClipSquare)}
  .seedartwork #signature{transform:translate(0,0)}
  .seedartwork.prime #signature{transform: translate(150px,132px)scale(0.8)}
}

@keyframes colorCycle{from{filter:contrast(95%)saturate(95%)hue-rotate(0deg)}to{filter:contrast(95%)saturate(95%)hue-rotate(360deg);stroke-dashoffset:1000}}
@keyframes colorCycleClone{from{filter:contrast(95%)saturate(95%)hue-rotate(0deg)}to{filter:contrast(95%)saturate(95%)hue-rotate(360deg);stroke-dashoffset:1000}}
@keyframes colorCycleClone2{from{filter:contrast(95%)saturate(95%)hue-rotate(0deg)}to{filter:contrast(95%)saturate(95%)hue-rotate(360deg);stroke-dashoffset:1000}}
@keyframes colorShift{from{filter:contrast(95%)saturate(100%)hue-rotate(0deg)}50%{filter:contrast(95%)saturate(95%)hue-rotate(80deg)}to{filter:contrast(95%)saturate(100%)hue-rotate(0deg)}}
@keyframes pulseCycle{from{filter:blur(0.3px)contrast(108%)saturate(108%)}50%{filter:blur(0.3px)contrast(96%)saturate(96%)}to{filter:blur(0.3px)contrast(108%)saturate(108%)}}

.seedartwork.invert{transform:rotate(180deg);transform-origin:50%}
.seedartwork.flip{transform:scaleX(-1);transform-origin:50%}
.seedartwork.invert.flip{transform:scaleX(-1)rotate(180deg);transform-origin:50%}
/*.seedartwork .prime .art{transform-origin:50%;transform:rotate(180deg)}*/
.seedartwork.invert .wrap,.seedartwork.invert .backdrop{filter:hue-rotate(270deg)}
.seedartwork.flip .wrap,.seedartwork.flip .backdrop{filter:hue-rotate(180deg)invert(1)}
.seedartwork.invert.flip .wrap,.seedartwork.invert.flip .backdrop{filter:hue-rotate(270deg)invert(1)}
.seedartwork.reveal:has(g.on) .art g.on .fx *{animation:pulseCycle 6.75s linear 0s infinite forwards}
.seedartwork:has(g.on){animation:colorCycle 3.1s linear infinite forwards 0s}
.seedartwork:has(g.on){animation:colorCycleClone 3.1s linear infinite forwards 0s}
.seedartwork.colorRestart:has(g.on){animation:colorCycleClone2 3.1s linear infinite forwards 0s}
.seedartwork.reveal:has(g.on) .art g.on .fx{mix-blend-mode:normal}
.seedartwork.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx *{animation-duration:5.12s}
.seedartwork.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx *{animation-duration:4.86s}
.seedartwork.reveal:has(g.on) .art g.on:nth-last-of-type(4n) .fx *{animation-duration:7.25s}
.seedartwork.reveal:has(g.on) .art g.on:nth-child(3 of .on) .fx *{animation-duration:3.16s}

/* CREATION */
.seedartwork.creation.reveal:has(g.on) .bkg{fill:#fffbf6}
.seedartwork.creation.reveal:has(g.on) #ornate-frame{fill:#fffbf6;stroke:#1d3254}
.seedartwork.creation g.pattern path,.seedartwork.creation g.orientation path{fill:#FFF;stroke:#000}
.seedartwork.creation g.pattern path.on{fill:#000}
.seedartwork.creation.reveal:has(g.on) .art g.on .fx{fill:#bfe3e0}
.seedartwork.creation.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx,.seedartwork.reveal:has(g.on) text.char{fill:#f0ffdf;stroke:#1d3254;animation-duration:3.12s}
.seedartwork.creation.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx{fill:#fdece4;stroke:#1d3254;animation-duration:2.86s}
.seedartwork.creation.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#e0edc5;stroke:#1d3254;animation-duration:4.25s}
.seedartwork.creation.reveal:has(g.on) .art g.on:nth-child(6 of .on) .fx{fill:#daf5f3;stroke:#1d3254;animation-duration:2.86s}
.seedartwork.creation.reveal:has(g.on) .art g.on,.seedartwork.reveal:has(g.on) .outline,.seedartwork.reveal g.pattern:has(.on) path,.seedartwork.reveal:has(.on) g.orientation path{stroke:#1d3254}
.seedartwork.creation.reveal g.pattern path.on{fill:#1d3254}
.seedartwork.creation.reveal:has(g.on) #seednumber,.seedartwork.creation.reveal:has(g.on) #layercount{fill:#1d3254;filter:blur(0.5px)drop-shadow(1px 2px 5px #ffd2d277)}
.seedartwork.creation.reveal:has(g.on) #signature path{stroke:#bd9797c9}

/* DESTRUCTION */
.seedartwork.destruction{background:#832130}
.seedartwork.destruction #ornate-frame{fill:#ff0040;stroke:#000}
.seedartwork.destruction.reveal:has(g.on) #ornate-frame{fill:#ff1953;stroke:#3b1235}
.seedartwork.destruction.invert .wrap,.seedartwork.destruction.invert .backdrop{filter:hue-rotate(258deg)saturate(0.85)}
.seedartwork.destruction.invert.flip .wrap,.seedartwork.destruction.invert.flip .backdrop{filter:hue-rotate(258deg)saturate(0.85)invert(1)}
.seedartwork.destruction .backdrop{fill:#832130}
.seedartwork.destruction .bkg,.seedartwork.destruction .art,.seedartwork.destruction g.pattern path,.seedartwork.destruction g.orientation path{fill:#ff0040}
.seedartwork.destruction .art,.seedartwork.destruction .outline,.seedartwork.destruction g.pattern path,.seedartwork.destruction g.orientation path{stroke:#000}
.seedartwork.destruction g.pattern path.on{fill:#000}
.seedartwork.destruction text{fill:#000}
.seedartwork.destruction.reveal:has(g.on){animation-duration:5.11s}
.seedartwork.destruction.reveal:has(g.on) .bkg,.seedartwork.destruction.reveal g.pattern path,.seedartwork.destruction.reveal g.orientation path{fill:#f5568d}
.seedartwork.destruction.reveal:has(g.on) .art g.on .fx{fill:#ffa2a2;stroke:#310707;animation-duration:1.15s}
.seedartwork.destruction.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#ff1953;stroke:#f93680;animation-duration:0.89s}
.seedartwork.destruction.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx,.seedartwork.destruction.reveal:has(g.on) .char{fill:#3b1235;stroke:#ffa2a2;animation-duration:4.15s}
.seedartwork.destruction.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#6f2046;stroke:#c51155;animation-duration:2.81s}
.seedartwork.destruction.reveal:has(g.on) .art g.on .fx,.seedartwork.destruction.reveal:has(g.on) .outline,.seedartwork.destruction.reveal g.pattern path,.seedartwork.destruction.reveal g.orientation path{stroke:#3b1235}
.seedartwork.destruction.reveal g.pattern path.on{fill:#3b1235}
.seedartwork.destruction.reveal:has(g.on) #seednumber,.seedartwork.destruction.reveal:has(g.on) #layercount{fill:#331519;filter:blur(0.5px)drop-shadow(1px 2px 5px #ff7bc777)}
.seedartwork.destruction.reveal:has(g.on) #signature path{stroke:#ffb6b6c9;filter:drop-shadow(1px 1px 3px #3d1b38c9)}

/* PERCEPTION */
.seedartwork.perception{background:#2c6d58}
.seedartwork.perception #ornate-frame{fill:#168360;stroke:#FFF}
.seedartwork.perception.reveal:has(g.on) #ornate-frame{fill:#13231a;stroke:#15ad42}
.seedartwork.perception.invert .wrap,.seedartwork.perception.invert .backdrop{filter:hue-rotate(140deg)}
.seedartwork.perception.invert.flip .wrap,.seedartwork.perception.invert.flip .backdrop{filter:invert(1)saturate(0.8)}
.seedartwork.perception .backdrop{fill:#1d4d36}
.seedartwork.perception .bkg,.seedartwork.perception .art,.seedartwork.perception g.pattern path,.seedartwork.perception g.orientation path{fill:#168360}
.seedartwork.perception .art,.seedartwork.perception .outline,.seedartwork.perception g.pattern path,.seedartwork.perception g.orientation path{stroke:#fff}
.seedartwork.perception g.pattern path.on{fill:#fff}
.seedartwork.perception text,.seedartwork.perception .char{fill:#fff;stroke:#FFFFFF00}
.seedartwork.perception.reveal:has(g.on){animation-duration:6.8s}
.seedartwork.perception.reveal:has(g.on) .bkg,.seedartwork.perception.reveal g.pattern path,.seedartwork.perception.reveal g.orientation path{fill:#13231a}
.seedartwork.perception.reveal:has(g.on) .art g.on .fx{fill:#13250ef2;stroke:#15ad42;animation-duration:2.51s}
.seedartwork.perception.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#0c8556;stroke:#15ad42;animation-duration:2.94s}
.seedartwork.perception.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx,.seedartwork.perception.reveal:has(g.on) .char{fill:#174b28;stroke:#22e55c;animation-duration:5.83s}
.seedartwork.perception.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#04ff64;stroke:#19d751;animation-duration:2.15s;filter:blur(1.25px)drop-shadow(0px 1px 18px #04ff6466);animation:none;mix-blend-mode:screen}
.seedartwork.perception.reveal:has(g.on) .art g.on .fx,.seedartwork.perception.reveal:has(g.on) .outline,.seedartwork.perception.reveal g.pattern path{stroke:#126f2e}
.seedartwork.perception.reveal g.pattern path,.seedartwork.perception.reveal g.orientation path{stroke:#22e55c}
.seedartwork.perception.reveal g.pattern path.on{fill:#22e55c}
.seedartwork.perception.reveal:has(g.on) #seednumber,.seedartwork.perception.reveal:has(g.on) #layercount{fill:#2fff04;filter:blur(0.5px)drop-shadow(1px 2px 5px #19d75147)}
.seedartwork.perception.reveal:has(g.on) #signature path{stroke:#2fff04c9;filter:drop-shadow(1px 3px 5px #0e100fc9)}

/* PROTECTION */
.seedartwork.protection{background:#2d34ff}
.seedartwork.protection #ornate-frame{fill:#2205FF;stroke:#FFF}
.seedartwork.protection.reveal:has(g.on) #ornate-frame{fill:#a2ebff;stroke:#1e0caa}
.seedartwork.protection.invert .wrap,.seedartwork.protection.invert .backdrop{filter:hue-rotate(175deg)saturate(0.55)}
.seedartwork.protection.invert.flip .wrap,.seedartwork.protection.invert.flip .backdrop{filter:saturate(0.55)invert(1)}
.seedartwork.protection .backdrop{fill:#332aff}
.seedartwork.protection .bkg,.seedartwork.protection .art,.seedartwork.protection g.pattern path,.seedartwork.protection g.orientation path{fill:#2205FF}
.seedartwork.protection .art,.seedartwork.protection .outline,.seedartwork.protection g.pattern path,.seedartwork.protection g.orientation path{stroke:#FFF}
.seedartwork.protection g.pattern path.on{fill:#fff}
.seedartwork.protection text,.seedartwork.protection .char{fill:#fff;stroke:#FFFFFF00}
.seedartwork.protection.reveal:has(g.on){animation-duration:8.55s}
.seedartwork.protection.reveal:has(g.on) .bkg,.seedartwork.protection.reveal g.pattern path,.seedartwork.protection.reveal g.orientation path{fill:#96bdf1}
.seedartwork.protection.reveal:has(g.on) .art g.on .fx{fill:#b3daff;stroke:#1e0caa;animation-duration:5.55s}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(even of .on) .fx,.seedartwork.protection.reveal:has(g.on) .char{fill:#a2ebff;stroke:#4889e7;animation-duration:2.37s}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-child(even of .on) > .fx *{animation:colorShift 2.95s linear 0s infinite forwards}
.seedartwork.protection.reveal.pauseColor g.on:nth-child(even of .on) .fx *{animation-play-state:paused!important}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(3n of .on) .fx{fill:#dbebffee;stroke:#3635e1;animation-duration:4.23s}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(4n of .on) .fx{fill:#6083dfe6;stroke:#eef7ff;animation-duration:3.59s}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(5n of .on) .fx{fill:#88c5ff;stroke:#6197f5}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(6n of .on) .fx{stroke:#dbebff;animation-duration:4.23s;mix-blend-mode:hard-light}
.seedartwork.protection.reveal:has(g.on) .art g.on:nth-last-child(9n of .on) .fx{fill:#dbebff;mix-blend-mode:normal}
.seedartwork.protection.reveal:has(g.on) .outline,.seedartwork.protection.reveal g.pattern path,.seedartwork.protection.reveal g.orientation path{stroke:#1e0caa}
.seedartwork.protection.reveal g.pattern path.on{fill:#1e0caa}
.seedartwork.protection.reveal:has(g.on) #seednumber,.seedartwork.protection.reveal:has(g.on) #layercount{fill:#1e0caa;filter:blur(0.5px)}
.seedartwork.protection.reveal:has(g.on) #signature path{stroke:#1e0caac9;filter:drop-shadow(1px 3px 5px #c2d0ebc9)}

/* PASSION */
.seedartwork.passion{background:#c73dbb}
.seedartwork.passion #ornate-frame{fill:#e13cd0;stroke:#FFF}
.seedartwork.passion.reveal:has(g.on) #ornate-frame{fill:#6083df;stroke:#263da5}
.seedartwork.passion.invert .wrap,.seedartwork.passion.invert .backdrop{filter:hue-rotate(300deg)saturate(0.75)}
.seedartwork.passion.invert.flip .wrap,.seedartwork.passion.invert.flip .backdrop{filter:hue-rotate(300deg)saturate(0.75)invert(1)}
.seedartwork.passion .backdrop{fill:#c73dbb}
.seedartwork.passion .bkg,.seedartwork.passion .art,.seedartwork.passion g.pattern path,.seedartwork.passion g.orientation path{fill:#e13cd0}
.seedartwork.passion .art,.seedartwork.passion .outline,.seedartwork.passion g.pattern path,.seedartwork.passion g.orientation path{stroke:#FFF}
.seedartwork.passion g.pattern path.on{fill:#fff}
.seedartwork.passion text,.seedartwork.passion .char{fill:#fff;stroke:#FFFFFF00}
.seedartwork.passion.reveal:has(g.on){animation-duration:8.82s}
.seedartwork.passion.reveal:has(g.on) .bkg,.seedartwork.passion.reveal g.pattern path,.seedartwork.passion.reveal g.orientation path{fill:#ff5bee}
.seedartwork.passion.reveal:has(g.on) .art g.on .fx{fill:#9c4cdd9e;animation-duration:0.8s;stroke:#e9b68c}
.seedartwork.passion.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#6083dfd1;stroke:#296bc9;animation-duration:6.55s}
.seedartwork.passion.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx,.seedartwork.passion.reveal:has(g.on) .char{fill:#ff73f0e6;stroke:#263da5}
.seedartwork.passion.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#50489794;stroke:#4ad1dd;animation-duration:3.83s}
.seedartwork.passion.reveal:has(g.on) .art g.on:nth-child(3n of .on) > .fx *{animation:colorCycle 9.13s linear 0s infinite forwards}
.seedartwork.passion.reveal:has(g.on) .art g.on:nth-child(4n of .on) > .fx *{animation:colorCycle 2.95s linear 0s infinite forwards}
.seedartwork.pauseColor.passion.reveal g.on:nth-child(4n of .on) .fx *,.seedartwork.pauseColor.passion.reveal g.on:nth-child(3n of .on) .fx *{animation-play-state:paused!important}
.seedartwork.passion.reveal:has(g.on) .outline,.seedartwork.passion.reveal g.pattern path,.seedartwork.passion.reveal g.orientation path{stroke:#263da5}
.seedartwork.passion.reveal g.pattern path.on,.seedartwork.passion.reveal:has(g.on) #layercount{fill:#263da5}
.seedartwork.passion.reveal:has(g.on) #seednumber{fill:#4ad1dd;filter:blur(0.5px)}
.seedartwork.passion.reveal:has(g.on) #signature path{stroke:#4ad1ddc9;filter:drop-shadow(1px 3px 5px #e168ae5c)}

/* FORTUNE */
.seedartwork.fortune{background:#f3c91e}
.seedartwork.fortune #ornate-frame{fill:#ffdc38;stroke:#000}
.seedartwork.fortune.reveal:has(g.on) #ornate-frame{fill:#b17c21;stroke:#e9cf3f}
.seedartwork.fortune.invert .wrap,.seedartwork.fortune.invert .backdrop{filter:hue-rotate(60deg)saturate(0.55)}
.seedartwork.fortune.invert.flip .wrap,.seedartwork.fortune.invert.flip .backdrop{filter:hue-rotate(60deg)saturate(0.55)invert(1)}
.seedartwork.fortune .backdrop{fill:#f3c91e}
.seedartwork.fortune .bkg,.seedartwork.fortune .art,.seedartwork.fortune g.pattern path,.seedartwork.fortune g.orientation path{fill:#ffdc38}
.seedartwork.fortune .art,.seedartwork.fortune .outline,.seedartwork.fortune g.pattern path,.seedartwork.fortune g.orientation path{stroke:#000}
.seedartwork.fortune g.pattern path.on{fill:#000}
.seedartwork.fortune text{fill:#000;stroke:#FFFFFF00}
.seedartwork.fortune.reveal:has(g.on){animation-duration:11.6s}
.seedartwork.fortune.reveal:has(g.on) .bkg,.seedartwork.fortune.reveal g.pattern path,.seedartwork.fortune g.orientation.reveal{fill:#cfa722}
.seedartwork.fortune.reveal:has(g.on) .art g.on .fx{fill:#775e16}
.seedartwork.fortune.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx{fill:#34451a;stroke:#198f02}
.seedartwork.fortune.reveal:has(g.on) .art g.on:nth-child(3n of .on) > .fx *{animation:colorCycle 8.6s linear 0s infinite forwards}
.seedartwork.fortune.reveal.pauseColor g.on:nth-child(3n of .on) .fx *{animation-play-state:paused!important}
.seedartwork.fortune.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#ad7d2a;stroke:#3e2d01}
.seedartwork.fortune.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#f5e126;stroke:#c9a52d;filter: drop-shadow(0px 0px 10px #c7952699)}
.seedartwork.fortune.reveal:has(g.on) .art g.on .fx,.seedartwork.fortune.reveal:has(g.on) .outline,.seedartwork.fortune.reveal g.pattern path{stroke:#f5e126}
.seedartwork.fortune.reveal g.orientation path,.seedartwork.fortune.reveal:has(g.on) .char{fill:#f5e126;stroke:#c9a52d}
.seedartwork.fortune.reveal:has(g.on) #layercount{fill:#c9a52d}
.seedartwork.fortune.reveal g.pattern path.on{fill:#f5e126}
.seedartwork.fortune.reveal:has(g.on) #seednumber{fill:#ffe804;filter:blur(0.5px)}
.seedartwork.fortune.reveal:has(g.on) #signature path{stroke:#ffe804;filter:drop-shadow(1px 3px 5px #37320259)}

/* WISDOM */
.seedartwork.wisdom{background:#31225b}
.seedartwork.wisdom #ornate-frame{fill:#46258d;stroke:#FFF}
.seedartwork.wisdom.reveal:has(g.on) #ornate-frame{fill:#3a2f79;stroke:#77afff}
.seedartwork.wisdom.invert .wrap,.seedartwork.wisdom.invert .backdrop{filter:hue-rotate(80deg)saturate(0.8)}
.seedartwork.wisdom.invert.flip .wrap,.seedartwork.wisdom.invert.flip .backdrop{filter:hue-rotate(80deg)saturate(0.8)invert(1)}
.seedartwork.wisdom .backdrop{fill:#31225b}
.seedartwork.wisdom .bkg,.seedartwork.wisdom .art,.seedartwork.wisdom g.pattern path,.seedartwork.wisdom g.orientation path{fill:#46258d}
.seedartwork.wisdom .art,.seedartwork.wisdom .outline,.seedartwork.wisdom g.pattern path,.seedartwork.wisdom g.orientation path{stroke:#FFFFFF}
.seedartwork.wisdom g.pattern path.on{fill:#fff}
.seedartwork.wisdom text,.seedartwork.wisdom .char{fill:#FFFFFF;stroke:#FFFFFF00}
.seedartwork.wisdom.reveal:has(g.on){animation-duration:13.3s}
.seedartwork.wisdom.reveal:has(g.on) .bkg,.seedartwork.wisdom.reveal g.pattern path,.seedartwork.wisdom.reveal g.orientation path{fill:#6450c5}
.seedartwork.wisdom.reveal:has(g.on) .art g.on .fx{fill:#5b54a9ee}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#30235b;stroke:#4e5da1}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx{fill:#2a2659dd;stroke:#7c65df}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#082341f9;stroke:#1e4679}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(5n of .on) .fx{fill:#08234100;stroke:#71daff}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(5n of .on) > .fx *{animation:colorCycle 10.73s linear 0s infinite forwards}
.seedartwork.pauseColor.wisdom.reveal g.on:nth-child(5n of .on) .fx *{animation-play-state:paused!important}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-child(7n of .on) .fx{fill:#1a173bdd;stroke:#8279e5}
.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(1 of .on) .fx,.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(7 of .on) .fx,.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(13 of .on) .fx,.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(21 of .on) .fx,.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(29 of .on) .fx,.seedartwork.wisdom.reveal:has(g.on) .art g.on:nth-last-child(39 of .on) .fx{fill:#77aaf1c2;stroke:#71daff}
.seedartwork.wisdom.reveal:has(g.on) .art g.on .fx,.seedartwork.wisdom.reveal:has(g.on) .outline,.seedartwork.wisdom.reveal g.pattern path,.seedartwork.wisdom.reveal g.orientation path{stroke:#77afff}
.seedartwork.wisdom.reveal:has(g.on) .char{fill:#082341f9;stroke:#71daff}
.seedartwork.wisdom.reveal g.pattern path.on{fill:#77afff}
.seedartwork.wisdom.reveal:has(g.on) #seednumber,.seedartwork.wisdom.reveal:has(g.on) #layercount{fill:#77afff;filter:blur(0.5px)}
.seedartwork.wisdom.reveal:has(g.on) #signature path{stroke:#71daffc9;filter:drop-shadow(1px 3px 5px #0823419c)}

/* TRANSFORMATION */
.seedartwork.transformation{background:#2689a1}
.seedartwork.transformation #ornate-frame{fill:#2da7c5;stroke:#FFF}
.seedartwork.transformation.reveal:has(g.on) #ornate-frame{fill:#FFF;stroke:#014746}
.seedartwork.transformation.invert .wrap,.seedartwork.transformation.invert .backdrop{filter:hue-rotate(220deg)}
.seedartwork.transformation.invert.flip .wrap,.seedartwork.transformation.invert.flip .backdrop{filter:hue-rotate(220deg)invert(1)}
.seedartwork.transformation .backdrop{fill:#2689a1}
.seedartwork.transformation .bkg,.seedartwork.transformation .art,.seedartwork.transformation g.pattern path,.seedartwork.transformation g.orientation path{fill:#2da7c5}
.seedartwork.transformation .art,.seedartwork.transformation .outline,.seedartwork.transformation g.pattern path,.seedartwork.transformation g.orientation path{stroke:#FFFFFF}
.seedartwork.transformation g.pattern path.on{fill:#fff}
.seedartwork.transformation text,.seedartwork.transformation .char{fill:#FFFFFF;stroke:#FFFFFF00}
.seedartwork.transformation.reveal:has(g.on){animation-duration:7.1s}
.seedartwork.transformation.reveal:has(g.on) .bkg,.seedartwork.transformation.reveal g.pattern path,.seedartwork.transformation.reveal g.orientation path{fill:#0fe3e9}
.seedartwork.transformation.reveal:has(g.on) .art g.on .fx{fill:#35cbc8}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx,.seedartwork.transformation.reveal:has(g.on) .char{fill:#ffffffe6;stroke:#014746}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(even of .on) > .fx *{animation:colorCycle 4.44s linear 0s infinite forwards}
.seedartwork.pauseColor.transformation.reveal g.on:nth-child(even of .on) .fx *{animation-play-state:paused!important}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx{fill:#109aa500;stroke:#04453e}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#13a4af;stroke:#2fc9c8}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(5n of .on) .fx{fill:#088b88a1;stroke:#57f3f2}
.seedartwork.transformation.reveal:has(g.on) .art g.on:nth-child(6n of .on) .fx{fill:#109aa5;stroke:#04453e;mix-blend-mode: luminosity}
.seedartwork.transformation.reveal:has(g.on) .art g.on .fx,.seedartwork.transformation.reveal:has(g.on) .outline,.seedartwork.transformation.reveal g.pattern path,.seedartwork.transformation.reveal g.orientation path{stroke:#014746}
.seedartwork.transformation.reveal g.pattern path.on{fill:#014746}
.seedartwork.transformation.reveal:has(g.on) #seednumber,.seedartwork.transformation.reveal:has(g.on) #layercount{fill:#04453e;filter:blur(0.5px)}
.seedartwork.transformation.reveal:has(g.on) #signature path{stroke:#04453e;filter:drop-shadow(1px 3px 5px #57f3f244);mix-blend-mode:exclusion}

/* RESILIENCE */
.seedartwork.resilience{background:#989ba1}
.seedartwork.resilience #ornate-frame{fill:#acafb7;stroke:#000}
.seedartwork.resilience.reveal:has(g.on) #ornate-frame{fill:#d1d5f3;stroke:#78788b}
.seedartwork.resilience .backdrop{fill:#909399}
.seedartwork.resilience .bkg,.seedartwork.resilience .art,.seedartwork.resilience g.pattern path,.seedartwork.resilience g.orientation path{fill:#acafb7}
.seedartwork.resilience.invert .wrap,.seedartwork.resilience.invert .backdrop{filter:hue-rotate(140deg)}
.seedartwork.resilience.invert.flip .wrap,.seedartwork.resilience.invert.flip .backdrop{filter:invert(1)}
.seedartwork.resilience .art,.seedartwork.resilience .outline,.seedartwork.resilience g.pattern path,.seedartwork.resilience g.orientation path{stroke:#000000}
.seedartwork.resilience g.pattern path.on{fill:#000}
.seedartwork.resilience text{fill:#000000;stroke:#FFFFFF00}
.seedartwork.resilience.reveal:has(g.on){animation-duration:30s}
.seedartwork.resilience.reveal:has(g.on) .bkg,.seedartwork.resilience.reveal g.pattern path,.seedartwork.resilience.reveal g.orientation path{fill:#b6b6bf}
.seedartwork.resilience.reveal:has(g.on) .art g.on:nth-last-child(1n of .on) .fx{fill:#d6d3edcc;stroke:#eff2f7;animation-duration:5.25s}
.seedartwork.resilience.reveal:has(g.on) .art g.on:nth-last-child(even of .on) .fx{fill:#9da0a7;stroke:#828591;animation-duration:8.91s;filter:drop-shadow(0px 1px 18px #ceccd556)}
.seedartwork.resilience.reveal:has(g.on) .art g.on:nth-last-child(3n of .on) .fx{fill:#d1d5f3;stroke:#9191a1;animation-duration:5.18s}
.seedartwork.resilience.reveal:has(g.on) .char{fill:#a8aab9;stroke:#78788b}
.seedartwork.resilience.reveal:has(g.on) .art g.on:nth-last-child(4n of .on) .fx{fill:#b8bac9ed;stroke:#7d7d9b;animation-duration:13.73s;filter:drop-shadow(0px 1px 18px #7d7d9b56)}
.seedartwork.resilience.reveal:has(g.on) .outline,.seedartwork.resilience.reveal g.pattern path,.seedartwork.resilience.reveal g.orientation path{stroke:#78788b}
.seedartwork.resilience.reveal g.pattern path.on{fill:#78788b}
.seedartwork.resilience.reveal:has(g.on) #seednumber,.seedartwork.resilience.reveal:has(g.on) #layercount{fill:#78788b;filter:blur(0.5px)}
.seedartwork.resilience.reveal:has(g.on) #signature path{stroke:#78788b}

/* ETERNITY */
.seedartwork.eternity{background:#121212}
.seedartwork.eternity #ornate-frame{fill:#000;stroke:#fff}
.seedartwork.eternity.reveal:has(g.on) #ornate-frame{fill:#140a26;stroke:#7a5ffb}
.seedartwork.eternity.invert .wrap{filter:hue-rotate(270deg)}
.seedartwork.eternity.invert.flip .wrap,.seedartwork.eternity.invert.flip .backdrop{filter:hue-rotate(270deg)invert(1)}
.seedartwork.eternity .backdrop{fill:#121212}
.seedartwork.eternity .bkg,.seedartwork.eternity .art,.seedartwork.eternity g.pattern path,.seedartwork.eternity g.orientation path{fill:#000000}
.seedartwork.eternity .art,.seedartwork.eternity .outline,.seedartwork.eternity g.pattern path,.seedartwork.eternity g.orientation path{stroke:#FFFFFF}
.seedartwork.eternity g.pattern path.on{fill:#fff}
.seedartwork.eternity text,.seedartwork.eternity .char{fill:#FFFFFF;stroke:#FFFFFF00}
.seedartwork.eternity.reveal:has(g.on){animation-duration:21.6s}
.seedartwork.eternity.reveal:has(g.on) .bkg,.seedartwork.eternity.reveal g.pattern path,.seedartwork.eternity.reveal g.orientation path{fill:#0a0a0b}
.seedartwork.eternity.reveal:has(g.on) .art g.on .fx{fill:#140f1ae3;animation-duration:9.33s}
.seedartwork.eternity.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#140a26f7;stroke:#5643ad;animation-duration:14.91s}
.seedartwork.eternity.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx{fill:#000000;stroke:#482ec5;animation-duration:11.8s}
.seedartwork.eternity.reveal:has(g.on) .art g.on:nth-child(3n of .on) > .fx *{animation:colorShift 12.61s linear 0s infinite forwards}
.seedartwork.pauseColor.eternity.reveal g.on:nth-child(3n of .on) .fx *{animation-play-state:paused!important}
.seedartwork.eternity.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#090812cc;stroke:#2a1c67;animation-duration:10.8s}
.seedartwork.eternity.reveal:has(g.on) .art g.on .fx,.seedartwork.eternity.reveal:has(g.on) .outline,.seedartwork.eternity.reveal g.pattern path,.seedartwork.eternity.reveal g.orientation path{stroke:#7a5ffb}
.seedartwork.eternity.reveal g.pattern path.on{fill:#7a5ffb}
.seedartwork.eternity.reveal:has(g.on) .char{fill:#000000;stroke:#7a5ffb}
.seedartwork.eternity.reveal:has(g.on) #seednumber,.seedartwork.eternity.reveal:has(g.on) #layercount{fill:#7a5ffb;filter:blur(0.5px)drop-shadow(1px 2px 5px #11111277)}
.seedartwork.eternity.reveal:has(g.on) #signature path{stroke:#7a5ffbe9;filter:drop-shadow(1px 3px 5px #0a0a0b)}
.seedartwork.depth.eternity:not(.reveal) .art g.on{filter:contrast(0.85)}

/* DISCOVERY */
.seedartwork.discovery{background:#c5baa8}
.seedartwork.discovery #ornate-frame{fill:#e9dfc5;stroke:#593f2a}
.seedartwork.discovery.reveal:has(g.on) #ornate-frame{fill:#d9c6a0;stroke:#85744e}
.seedartwork.discovery.invert .wrap,.seedartwork.discovery.invert .backdrop{filter:hue-rotate(210deg)}
.seedartwork.discovery.invert.flip .wrap,.seedartwork.discovery.invert.flip .backdrop{filter:hue-rotate(210deg)invert(1)}
.seedartwork.discovery .backdrop{fill:#c5baa8}
.seedartwork.discovery .bkg{fill:#e9dfc5}
.seedartwork.discovery .art,.seedartwork.discovery g.pattern path{fill:#f3dc9f}
.seedartwork.discovery .art g.on:nth-child(even of .on){fill:#ffd57f}
.seedartwork.discovery g.pattern path,.seedartwork.discovery g.orientation path{stroke:#000}
.seedartwork.discovery .art,.seedartwork.discovery .outline,.seedartwork.discovery.reveal g.pattern path,.seedartwork.discovery.reveal g.orientation path{stroke:#593f2a}
.seedartwork.discovery g.pattern path.on{fill:#000}
.seedartwork.discovery text{fill:#000000;stroke:#FFFFFF00}
.seedartwork.discovery #seednumber{fill:#85744e;stroke:#FFFFFF00}
.seedartwork.discovery.reveal:has(g.on){animation-duration:30s}
.seedartwork.discovery.reveal:has(g.on) .bkg,.seedartwork.discovery.reveal g.pattern path,.seedartwork.discovery.reveal g.orientation path{fill:#e9dfbe}
.seedartwork.discovery.reveal:has(g.on) .art g.on .fx{fill:#ffd57f;stroke:#a37e48;animation-duration:5.25s}
.seedartwork.discovery.reveal:has(g.on) .art g.on:nth-child(even of .on) .fx{fill:#d9c6a0;stroke:#9d7146;animation-duration:8.91s;filter:blur(1.15px)drop-shadow(0px 1px 18px #d9c6a066)}
.seedartwork.discovery.reveal:has(g.on) .art g.on:nth-child(3n of .on) .fx,.seedartwork.discovery.reveal:has(g.on) .char{fill:#ddc697;stroke:#85744e;animation-duration:5.18s;mix-blend-mode:multiply}
.seedartwork.discovery.reveal:has(g.on) .art g.on:nth-child(4n of .on) .fx{fill:#bfa392f0;stroke:#814b60;animation-duration:13.73s;filter:blur(1.15px)}
.seedartwork.discovery.reveal:has(g.on) .art g.on .fx{stroke:#574935}
.seedartwork.discovery.reveal:has(g.on) .outline,.seedartwork.discovery.reveal g.pattern path,.seedartwork.discovery.reveal g.orientation path{stroke:#85744e}
.seedartwork.discovery.reveal g.pattern path.on{fill:#85744e}
.seedartwork.discovery.reveal:has(g.on) #seednumber,.seedartwork.discovery.reveal:has(g.on) #layercount{fill:#814b60;filter:blur(0.5px)drop-shadow(1px 2px 5px #f3dc9f5a)}
.seedartwork.discovery.reveal:has(g.on) #signature path{stroke:#814b60;filter:drop-shadow(1px 2px 4px #f3dc9fa9)}

/* PROTOTYPE */
.seedartwork.prototype:not(.reveal) .bkg,.seedartwork.prototype.reveal g.pattern path,.seedartwork.prototype g.orientation path{fill:#f5f5f5ee;mix-blend-mode:soft-light}
.seedartwork.prototype .art,.seedartwork.prototype g.pattern path,.seedartwork.prototype g.orientation path{fill:#FFFFFF00}
.seedartwork.prototype .art,.seedartwork.prototype .outline,.seedartwork.prototype g.pattern path{stroke:#00000088}
.seedartwork.prototype g.pattern path.on{fill:#000}
.seedartwork.prototype text{fill:#000000;stroke:#FFFFFF00}
.seedartwork.prototype:has(g.on) text.char,.seedartwork.prototype.reveal:has(g.on) text.char{fill:#FFFFFF;stroke:#000000}

/* PLANT TYPE */

/* MECHANICAL TYPE */

/* BUBBLE TYPE */

/* PSYCHIC TYPE */

/* CRYSTAL TYPE */

/* MECHANICAL TYPE */


.seedartwork:active .art g.on{animation:preRotate 2.2s ease-in-out forwards}
@keyframes preRotate{from{transform:rotate(0deg)}80%{transform:rotate(-4deg)}to{transform:rotate(0deg)}}

@keyframes rotateClockwise{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes rotateCounter{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}
.seedartwork.spin .art g.on{animation:rotateClockwise 300s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(odd of .on){animation:rotateClockwise 300s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(even of .on){animation:rotateCounter 300s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(3n of .on){animation:rotateCounter 150s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(3n-1 of .on){animation:rotateClockwise 200s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(4n of .on){animation:rotateClockwise 150s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(4n+1 of .on){animation:rotateCounter 200s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(5n of .on){animation:rotateClockwise 120s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(5n+6 of .on){animation:rotateClockwise 240s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(6n of .on){animation:rotateCounter 240s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(7n of .on){animation:rotateCounter 400s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(8n of .on){animation:rotateClockwise 100s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(8n-3 of .on){animation:rotateClockwise 120s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(9n of .on){animation:rotateCounter 100s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(10n of .on){animation:rotateClockwise 150s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(10n+1 of .on){animation:rotateCounter 240s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(11n of .on){animation:rotateClockwise 120s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(12n of .on){animation:rotateClockwise 240s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(12n-5 of .on){animation:rotateCounter 100s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(13n of .on){animation:rotateCounter 120s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(14n of .on){animation:rotateClockwise 200s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(18n of .on){animation:rotateCounter 75s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(18n-3 of .on){animation:rotateClockwise 100s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(19n of .on){animation:rotateClockwise 75s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(20n of .on){animation:rotateClockwise 400s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(10n+19 of .on){animation:rotateClockwise 600s linear infinite}
.seedartwork.spin .art g.on:nth-last-child(10n-3 of .on){animation:rotateCounter 200s linear infinite}

@keyframes float1{from{transform:translate(0,0)rotate(0deg)}30%{transform:translate(5px,6px)rotate(-0.3deg)}50%{transform:translate(0,-5px)rotate(0.1deg)}70%{transform:translate(8px,0px)rotate(0.2deg)}to{transform:translate(0,0)rotate(0deg)}}
@keyframes float2{from{transform:translate(0,0)rotate(0deg)}20%{transform:translate(-3px,7px)rotate(0.2deg)}45%{transform:translate(0,4px)rotate(-0.1deg)}75%{transform:translate(5px,0px)rotate(-0.2deg)}to{transform:translate(0,0)rotate(0deg)}}
.seedartwork.float .art g.on{animation:float1 300s ease-in-out infinite}

.seedartwork.float .art > g:nth-of-type(odd){animation-duration:60s}
.seedartwork.float .art > g:nth-of-type(even){animation-duration:60s}
.seedartwork.float .art > g:nth-of-type(3n){animation-duration:30s}
.seedartwork.float .art > g:nth-of-type(3n-1){animation-duration:60s;animation-name:float2}
.seedartwork.float .art > g:nth-of-type(4n){animation-duration:30s}
.seedartwork.float .art > g:nth-of-type(4n+1){animation-duration:40s}
.seedartwork.float .art > g:nth-of-type(5n){animation-duration:24s}
.seedartwork.float .art > g:nth-of-type(5n+6){animation-duration:30s;animation-name:float2}
.seedartwork.float .art > g:nth-of-type(6n+1){animation-duration:30s}
.seedartwork.float .art > g:nth-of-type(7n){animation-duration:20s}
.seedartwork.float .art > g:nth-of-type(9n){animation-duration:20s;animation-name:float2}
.seedartwork.float .art > g:nth-of-type(10n){animation-duration:30s}
.seedartwork.float .art > g:nth-of-type(10n+1){animation-duration:40s}
.seedartwork.float .art > g:nth-of-type(11n){animation-duration:15s;animation-name:float2}
.seedartwork.float .art > g:nth-of-type(12n){animation-duration:40s}
.seedartwork.float .art > g:nth-of-type(13n){animation-duration:20s}
.seedartwork.float .art > g:nth-of-type(14n){animation-duration:20s}
.seedartwork.float .art > g:nth-of-type(19n){animation-duration:15s;animation-name:float2}
.seedartwork.float .art > g:nth-of-type(20n){animation-duration:24s}
.seedartwork.float .art > g:nth-of-type(10n+19){animation-duration:60s}

.seedartwork.depth:not(.reveal) .bkg{filter:drop-shadow(3px 5px 10px rgb(0 0 0/.1))brightness(0.7)}
.seedartwork.depth:has(g.on):not(.reveal) .art g.on,.seedartwork.depth:has(g.on):not(.reveal) #ornate-frame{filter:drop-shadow(0px 4px 15px rgb(0 0 0/.5))}
.seedartwork.depth.reveal:has(g.on) .outline,.seedartwork.depth.reveal:has(g.on) text{filter:blur(1.4px)}
@keyframes focusDrift{from{filter:blur(1.15px)}26%{filter:blur(1.15px)}34%{filter:blur(2.2px)}70%{filter:blur(17px)}89%{filter:blur(36px)}to{filter:blur(1.15px)}}

.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(1n of .on) .fx,.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-9 of .on) .fx{filter:none;animation:focusDrift 42s linear infinite;animation-duration:0s;filter:none;animation-delay:-15s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-8 of .on) .fx{filter:none;animation-delay:-2s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-7 of .on) .fx{filter:none;animation-delay:-4s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-6 of .on) .fx{filter:none;animation-delay:-6s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-5 of .on) .fx{filter:none;animation-delay:-8s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-4 of .on) .fx{filter:none;animation-delay:-10s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-3 of .on) .fx{filter:none;animation-delay:-12s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-2 of .on) .fx{filter:none;animation-delay:-14s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-1 of .on) .fx{filter:none;animation-delay:-16s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n of .on) .fx{filter:none;animation-delay:-18s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+1 of .on) .fx{filter:none;animation-delay:-20s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+2 of .on) .fx{filter:none;animation-delay:-22s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+3 of .on) .fx{filter:none;animation-delay:-24s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+4 of .on) .fx{filter:none;animation-delay:-26s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+5 of .on) .fx{filter:none;animation-delay:-28s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+6 of .on) .fx{filter:none;animation-delay:-30s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+7 of .on) .fx{filter:none;animation-delay:-32s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+8 of .on) .fx{filter:none;animation-delay:-34s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+9 of .on) .fx{filter:none;animation-delay:-36s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+9 of .on) .fx{filter:none;animation-delay:-38s;animation-duration:42s}
.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n+10 of .on) .fx{filter:none;animation-delay:-40s;animation-duration:42s}

.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(1n of .on) .fx,.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-9 of .on) .fx{filter:none;animation:focusDrift 42s linear infinite;animation-duration:38s;filter:none;animation-delay:-10s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-8 of .on) .fx{filter:none;animation-delay:-12s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-7 of .on) .fx{filter:none;animation-delay:-14s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-6 of .on) .fx{filter:none;animation-delay:-16s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-5 of .on) .fx{filter:none;animation-delay:-18s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-4 of .on) .fx{filter:none;animation-delay:-20s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-3 of .on) .fx{filter:none;animation-delay:-22s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-2 of .on) .fx{filter:none;animation-delay:-24s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n-1 of .on) .fx{filter:none;animation-delay:-26s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n of .on) .fx{filter:none;animation-delay:-28s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n+1 of .on) .fx{filter:none;animation-delay:-30s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n+2 of .on) .fx{filter:none;animation-delay:-32s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n+3 of .on) .fx{filter:none;animation-delay:-34s;animation-duration:38s}
.seedartwork.depth.superdeep.reveal:has(g.on) .art g.on:nth-last-child(10n+4 of .on) .fx{filter:none;animation-delay:-36s;animation-duration:38s}

.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(1n of .on) .fx,.seedartwork.depth.reveal:has(g.on) .art g.on:nth-last-child(10n-9 of .on) .fx{filter:none;animation:focusDrift 42s linear infinite;animation-duration:35s;filter:none;animation-delay:-5s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-8 of .on) .fx{filter:none;animation-delay:-8s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-7 of .on) .fx{filter:none;animation-delay:-11s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-6 of .on) .fx{filter:none;animation-delay:-14s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-5 of .on) .fx{filter:none;animation-delay:-17s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-4 of .on) .fx{filter:none;animation-delay:-20s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-3 of .on) .fx{filter:none;animation-delay:-23s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-2 of .on) .fx{filter:none;animation-delay:-26s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n-1 of .on) .fx{filter:none;animation-delay:-29s;animation-duration:35s}
.seedartwork.depth.deep.reveal:has(g.on) .art g.on:nth-last-child(10n of .on) .fx{filter:none;animation-delay:-32s;animation-duration:35s}

.seedartwork.depth.shallow.reveal:has(g.on) .art g.on:nth-last-child(1n of .on) .fx,.seedartwork.depth.shallow.reveal:has(g.on) .art g.on:nth-last-child(10n-9 of .on) .fx{filter:none;animation:focusDrift 42s linear infinite;animation-duration:42s;filter:none;animation-delay:0s}
.seedartwork.depth.shallow.reveal:has(g.on) .art g.on:nth-last-child(10n-8 of .on) .fx{filter:none;animation-delay:-14s;animation-duration:42s}
.seedartwork.depth.shallow.reveal:has(g.on) .art g.on:nth-last-child(10n-7 of .on) .fx{filter:none;animation-delay:-28s;animation-duration:42s}
.seedartwork.depth.shallow.reveal:has(g.on) .art g.on:nth-last-child(10n-6 of .on) .fx{filter:none;animation-delay:-42s;animation-duration:42s}
</style>
    `;
