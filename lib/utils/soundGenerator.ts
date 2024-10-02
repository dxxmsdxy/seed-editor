// soundGenerator.ts

// Global settings
const globalSettings = {
  masterVolume: 0.5, // Increased master volume for a richer sound

  // Define global effects configurations
  effectsOrder: ['panning', 'reverb', 'delay', 'chorus', 'distortion', 'compression'],

  effects: {
    panning: {
      enable: true,
      pan: 0.0, // -1 (left) to 1 (right)
      spread: 1.0, // 0.0 (no spread) to 2.0 (maximum spread)
    },
    reverb: {
      enable: true,
      impulseResponseURL: '@/public/sound/S1R1_MS.wav',
      wetLevel: 0.7,
    },
    delay: {
      enable: true,
      delayTime: 0.3, // Seconds
      feedback: 0.4, // 0.0 to 1.0
      wetLevel: 0.5, // 0.0 to 1.0
    },
    chorus: {
      enable: true,
      rate: 1.5, // Hz
      depth: 0.0045, // Seconds
      feedback: 0.25, // 0.0 to 1.0
      wetLevel: 0.6,
    },
    distortion: {
      enable: true,
      amount: 50,
    },
    compression: {
      enable: true,
      threshold: -30, // Adjusted threshold for better dynamics
      knee: 25, // in dB
      ratio: 10, // Compression ratio
      attack: 0.005, // in seconds
      release: 0.3, // in seconds
    },
  },
  layering: {
    maxOscillators: 10, // Maximum number of oscillators
    oscillatorSpacing: 100, // Frequency spacing in cents between oscillators
  },
  spatial: {
    spread: 1.0, // Stereo spread factor
  },
  frequencyGain: {
    scale: -0.05, // Decibels per Hz, adjust to taste
  },
};

const sonicStyles = {
  '0': {
    volume: 0.4,
    waveform: 'sine',
    filterType: 'lowpass',
    filterFrequency: 800,
    filterQ: 1,
    modulationDepth: 5,
    modulationRate: 0.1,
    modulationType: 'sine',
    maxOscillators: 6,
    keySignature: 'C', // Key of C major
    scaleType: 'major',
    detuneRange: 10, // Detune range in cents
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '1': {
    volume: 0.4,
    waveform: 'triangle',
    filterType: 'bandpass',
    filterFrequency: 1000,
    filterQ: 5,
    modulationDepth: 4,
    modulationRate: 0.08,
    modulationType: 'triangle',
    maxOscillators: 5,
    keySignature: 'A',
    scaleType: 'minor',
    detuneRange: 15,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '2': {
    volume: 0.4,
    waveform: 'sine',
    filterType: 'highpass',
    filterFrequency: 600,
    filterQ: 0.7,
    modulationDepth: 6,
    modulationRate: 0.12,
    modulationType: 'sine',
    maxOscillators: 4,
    keySignature: 'G',
    scaleType: 'major',
    detuneRange: 8,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '3': {
    volume: 0.4,
    waveform: 'sawtooth',
    filterType: 'lowpass',
    filterFrequency: 500,
    filterQ: 1.5,
    modulationDepth: 3,
    modulationRate: 0.07,
    modulationType: 'sawtooth',
    maxOscillators: 3,
    keySignature: 'D',
    scaleType: 'minor',
    detuneRange: 20,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '4': {
    volume: 0.4,
    waveform: 'triangle',
    filterType: 'notch',
    filterFrequency: 1200,
    filterQ: 1,
    modulationDepth: 5,
    modulationRate: 0.09,
    modulationType: 'triangle',
    maxOscillators: 6,
    keySignature: 'E',
    scaleType: 'major',
    detuneRange: 12,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '5': {
    volume: 0.4,
    waveform: 'sine',
    filterType: 'lowpass',
    filterFrequency: 700,
    filterQ: 0.8,
    modulationDepth: 4,
    modulationRate: 0.11,
    modulationType: 'sine',
    maxOscillators: 5,
    keySignature: 'F',
    scaleType: 'minor',
    detuneRange: 10,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '6': {
    volume: 0.3,
    waveform: 'square',
    filterType: 'allpass',
    filterFrequency: 900,
    filterQ: 0.5,
    modulationDepth: 6,
    modulationRate: 0.06,
    modulationType: 'square',
    maxOscillators: 4,
    keySignature: 'B',
    scaleType: 'major',
    detuneRange: 18,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '7': {
    volume: 0.4,
    waveform: 'triangle',
    filterType: 'bandpass',
    filterFrequency: 1100,
    filterQ: 2,
    modulationDepth: 5,
    modulationRate: 0.1,
    modulationType: 'triangle',
    maxOscillators: 5,
    keySignature: 'A',
    scaleType: 'minor',
    detuneRange: 15,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '8': {
    volume: 0.4,
    waveform: 'sine',
    filterType: 'lowpass',
    filterFrequency: 850,
    filterQ: 0.9,
    modulationDepth: 7,
    modulationRate: 0.08,
    modulationType: 'sine',
    maxOscillators: 6,
    keySignature: 'C',
    scaleType: 'minor',
    detuneRange: 10,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
  '9': {
    volume: 0.4,
    waveform: 'triangle',
    filterType: 'highpass',
    filterFrequency: 950,
    filterQ: 1.2,
    modulationDepth: 4,
    modulationRate: 0.12,
    modulationType: 'triangle',
    maxOscillators: 5,
    keySignature: 'G',
    scaleType: 'major',
    detuneRange: 14,
    spatialSpread: 1.0,
    frequencyGainScale: -0.05,
  },
};

// Scales for major and minor keys
const scales = {
  major: {
    C: [0, 2, 4, 5, 7, 9, 11],
    G: [7, 9, 11, 0, 2, 4, 6],
    D: [2, 4, 6, 7, 9, 11, 1],
    E: [4, 6, 8, 9, 11, 1, 3],
    F: [5, 7, 9, 10, 0, 2, 4],
    B: [11, 1, 3, 4, 6, 8, 10],
  },
  minor: {
    A: [9, 11, 0, 2, 4, 5, 7],
    E: [4, 6, 7, 9, 11, 0, 2],
    D: [2, 4, 5, 7, 9, 10, 0],
    F: [5, 7, 8, 10, 0, 1, 3],
    G: [7, 9, 10, 0, 2, 3, 5],
    C: [0, 2, 3, 5, 7, 8, 10],
  },
};

let audioCtx: AudioContext | null = null;
let masterGainNode: GainNode | null = null;
let isAudioInitialized = false;
let isPlaying = false;
let fadeDuration = 1.5; // 1 second fade in/out

// Variables for the current sound
let currentGainNode: GainNode | null = null;
let currentOscillators: OscillatorNode[] = [];
let currentLfoNodes: { lfo: OscillatorNode; lfoGain: GainNode }[] = [];
let currentFilterNode: BiquadFilterNode | null = null;
let currentStyle: typeof sonicStyles['0'] | null = null;
let currentPanners: StereoPannerNode[] = [];
let currentFrequencyGainNodes: GainNode[] = [];

// Array to manage previous sounds
let previousSounds: Array<{
  gainNode: GainNode;
  oscillators: OscillatorNode[];
  lfoNodes: { lfo: OscillatorNode; lfoGain: GainNode }[];
  filterNode: BiquadFilterNode;
}> = [];

// Effects nodes
const effectsNodes: {
  [key: string]: any;
} = {};

// Modulation values
let currentModValues = {
  color: '0', // Default to '0'
  spin: '0',
  depth: '0',
  tint: '0',
  tintPercent: '0',
};

/**
 * Function to update globalSettings effects parameters
 */
const updateEffectSettings = (effectName: string, value: number) => {
  // Implement this function to update the corresponding effect parameter
  // This could involve calling specific functions or directly modifying globalSettings
  // For example:
  switch(effectName) {
    case 'reverbWetLevel':
      updateReverbWetLevel(value);
      break;
    case 'delayTime':
      updateDelayTime(value);
      break;
    case 'delayFeedback':
      updateDelayFeedback(value);
      break;
    case 'delayWetLevel':
      updateDelayWetLevel(value);
      break;
    case 'chorusWetLevel':
      updateChorusWetLevel(value);
      break;
    case 'distortionAmount':
      updateDistortionAmount(value);
      break;
    case 'compressionThreshold':
      updateCompressionThreshold(value);
      break;
    case 'compressionKnee':
      updateCompressionKnee(value);
      break;
    case 'compressionRatio':
      updateCompressionRatio(value);
      break;
    case 'compressionAttack':
      updateCompressionAttack(value);
      break;
    case 'compressionRelease':
      updateCompressionRelease(value);
      break;
    default:
      break;
  }
};

// Tempo variable (in beats per minute)
let tempo = 10; // Default tempo

/**
 * Set the tempo for the sound generation.
 * @param {number} newTempo - The new tempo in BPM.
 */
function setTempo(newTempo: number) {
  tempo = newTempo;
}

/**
 * Initialize Audio Context and Master Gain Node
 */
function initializeAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  if (!masterGainNode) {
    masterGainNode = audioCtx.createGain();
    masterGainNode.gain.setValueAtTime(globalSettings.masterVolume, audioCtx.currentTime);
    masterGainNode.connect(audioCtx.destination);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

/**
 * Initialize Global Effects
 */
function initEffects() {
  globalSettings.effectsOrder.forEach(effectName => {
    switch (effectName) {
      case 'panning':
        initPanning();
        break;
      case 'reverb':
        initReverb();
        break;
      case 'delay':
        initDelay(); // Initialize Delay
        break;
      case 'chorus':
        initChorus();
        break;
      case 'distortion':
        initDistortion();
        break;
      case 'compression':
        initCompression();
        break;
      default:
        console.warn(`Effect ${effectName} is not recognized`);
    }
  });
}

/**
 * Initialize Delay Effect
 */
function initDelay() {
  const delaySettings = globalSettings.effects.delay;
  if (delaySettings.enable && !effectsNodes.delay) {
    const delayNode = audioCtx!.createDelay();
    delayNode.delayTime.value = delaySettings.delayTime;

    const feedbackGain = audioCtx!.createGain();
    feedbackGain.gain.value = delaySettings.feedback;

    const wetGainNode = audioCtx!.createGain();
    wetGainNode.gain.setValueAtTime(delaySettings.wetLevel, audioCtx!.currentTime);

    // Connect delay feedback loop
    delayNode.connect(feedbackGain);
    feedbackGain.connect(delayNode);

    // Connect delay to wet gain
    delayNode.connect(wetGainNode);

    effectsNodes.delay = {
      delayNode,
      feedbackGain,
      wetGainNode,
    };
    console.log('Delay initialized:', effectsNodes.delay);
  }
}

/**
 * Initialize Panning Effect
 */
function initPanning() {
  const panningSettings = globalSettings.effects.panning;
  if (panningSettings.enable && !effectsNodes.panning) {
    const pannerNode = audioCtx!.createStereoPanner();
    pannerNode.pan.setValueAtTime(panningSettings.pan, audioCtx!.currentTime);
    effectsNodes.panning = pannerNode;
  }
}

/**
 * Initialize Reverb Effect
 */
function initReverb() {
  const reverbSettings = globalSettings.effects.reverb;
  if (reverbSettings.enable && !effectsNodes.reverb) {
    const convolverNode = audioCtx!.createConvolver();
    effectsNodes.reverb = convolverNode;

    // Load impulse response from public directory
    loadImpulseResponse(reverbSettings.impulseResponseURL, convolverNode);

    // Create wet and dry gain nodes for wet/dry mix
    const wetGainNode = audioCtx!.createGain();
    const dryGainNode = audioCtx!.createGain();

    wetGainNode.gain.setValueAtTime(reverbSettings.wetLevel, audioCtx!.currentTime);
    dryGainNode.gain.setValueAtTime(1 - reverbSettings.wetLevel, audioCtx!.currentTime);

    effectsNodes.reverbWetGain = wetGainNode;
    effectsNodes.reverbDryGain = dryGainNode;
  }
}

/**
 * Load Impulse Response
 * @param {string} url - URL or path to the impulse response file.
 * @param {ConvolverNode} convolverNode - The ConvolverNode to load the IR into.
 */
function loadImpulseResponse(url: string, convolverNode: ConvolverNode) {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioCtx!.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      convolverNode.buffer = audioBuffer;
    })
    .catch(err => console.error('Error loading impulse response:', err));
}

/**
 * Initialize Chorus Effect
 */
function initChorus() {
  const chorusSettings = globalSettings.effects.chorus;
  if (chorusSettings.enable && !effectsNodes.chorus) {
    const delayNode = audioCtx!.createDelay();
    delayNode.delayTime.value = chorusSettings.depth;

    const feedbackGain = audioCtx!.createGain();
    feedbackGain.gain.value = chorusSettings.feedback;

    // Connect delay feedback loop
    delayNode.connect(feedbackGain);
    feedbackGain.connect(delayNode);

    const lfo = audioCtx!.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = chorusSettings.rate;

    const lfoGain = audioCtx!.createGain();
    lfoGain.gain.value = chorusSettings.depth;

    lfo.connect(lfoGain);
    lfoGain.connect(delayNode.delayTime);
    lfo.start();

    const wetGainNode = audioCtx!.createGain();
    wetGainNode.gain.setValueAtTime(chorusSettings.wetLevel, audioCtx!.currentTime);

    // Connect delay to wet gain
    delayNode.connect(wetGainNode);

    effectsNodes.chorus = {
      delayNode,
      feedbackGain,
      lfo,
      lfoGain,
      wetGainNode,
    };
    console.log('Chorus initialized:', effectsNodes.chorus);
  }
}

/**
 * Initialize Distortion Effect
 */
function initDistortion() {
  const distortionSettings = globalSettings.effects.distortion;
  if (distortionSettings.enable && !effectsNodes.distortion) {
    const distortionNode = audioCtx!.createWaveShaper();
    distortionNode.curve = makeDistortionCurve(distortionSettings.amount);
    distortionNode.oversample = '4x';
    effectsNodes.distortion = distortionNode;
  }
}

function makeDistortionCurve(amount: number): Float32Array {
  const k = typeof amount === 'number' ? amount : 50;
  const nSamples = 44100;
  const curve = new Float32Array(nSamples);
  const deg = Math.PI / 180;
  for (let i = 0; i < nSamples; ++i) {
    const x = (i * 2) / nSamples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

/**
 * Initialize Compression Effect
 */
function initCompression() {
  const compressionSettings = globalSettings.effects.compression;
  if (compressionSettings.enable && !effectsNodes.compression) {
    const compressorNode = audioCtx!.createDynamicsCompressor();
    compressorNode.threshold.setValueAtTime(compressionSettings.threshold, audioCtx!.currentTime);
    compressorNode.knee.setValueAtTime(compressionSettings.knee, audioCtx!.currentTime);
    compressorNode.ratio.setValueAtTime(compressionSettings.ratio, audioCtx!.currentTime);
    compressorNode.attack.setValueAtTime(compressionSettings.attack, audioCtx!.currentTime);
    compressorNode.release.setValueAtTime(compressionSettings.release, audioCtx!.currentTime);
    effectsNodes.compression = compressorNode;
  }
}

/**
 * Connect Effects Chain
 */
function connectEffectsChain(inputNode: AudioNode) {
  let currentNode = inputNode;

  globalSettings.effectsOrder.forEach(effectName => {
    const effectNode = effectsNodes[effectName];

    if (effectNode) {
      console.log(`Connecting effect: ${effectName}`);
      if (effectName === 'reverb') {
        // Reverb connections
        const { reverbWetGain, reverbDryGain } = effectsNodes;

        if (!reverbWetGain || !reverbDryGain) {
          console.error('Reverb wet or dry gain nodes are not initialized.');
          return;
        }

        currentNode.connect(effectNode); // Input to convolver
        effectNode.connect(reverbWetGain); // Convolver output to wet gain
        currentNode.connect(reverbDryGain); // Direct connection to dry gain

        // Merge wet and dry gains
        const merger = audioCtx!.createGain();
        reverbWetGain.connect(merger);
        reverbDryGain.connect(merger);

        currentNode = merger; // Set currentNode to the merger
      } else if (effectName === 'chorus') {
        // Chorus connections
        const { wetGainNode } = effectsNodes.chorus;

        if (!wetGainNode) {
          console.error('Chorus wet gain node is not initialized.');
          return;
        }

        currentNode.connect(wetGainNode);
        currentNode = wetGainNode;
      } else {
        if (!(effectNode instanceof AudioNode)) {
          console.error(`Effect node for ${effectName} is not a valid AudioNode.`);
          return;
        }
        currentNode.connect(effectNode);
        currentNode = effectNode;
      }
    } else {
      console.warn(`Effect node for ${effectName} is not found.`);
    }
  });

  // Finally, connect to masterGainNode
  if (masterGainNode) {
    currentNode.connect(masterGainNode!);
    console.log('Connected the final node to masterGainNode.');
  } else {
    console.error('masterGainNode is not initialized.');
  }
}


/**
 * Apply Modulations
 */
function applyModulations() {
  // Modulate filter cutoff frequency based on modValues.color
  if (currentFilterNode) {
    const colorValue = parseInt(currentModValues.color, 10) || 0;
    const multiplier = 1.0 + (colorValue / 99) * 1.0; // Multiplier from 1.0 to 2.0
    const baseFrequency = currentStyle!.filterFrequency;
    const newFrequency = baseFrequency * multiplier;
    currentFilterNode.frequency.setValueAtTime(newFrequency, audioCtx!.currentTime);
  }

  // Modulate panning based on modValues.spin
  if (effectsNodes.panning) {
    const spinValue = parseInt(currentModValues.spin, 10) || 0;
    const panValue = (spinValue / 99) * 2.0 - 1.0; // -1.0 to 1.0
    effectsNodes.panning.pan.setValueAtTime(panValue, audioCtx!.currentTime);
  }

  // Modulate modulation depth of LFOs based on modValues.depth
  if (currentLfoNodes && currentLfoNodes.length > 0) {
    const depthValue = parseInt(currentModValues.depth, 10) || 0;
    const depthMultiplier = 1.0 + (depthValue / 99) * 1.0; // 1.0 to 2.0

    currentLfoNodes.forEach(({ lfoGain }) => {
      const baseModulationDepth = currentStyle!.modulationDepth;
      const newModulationDepth = baseModulationDepth * depthMultiplier;
      lfoGain.gain.setValueAtTime(newModulationDepth, audioCtx!.currentTime);
    });
  }

  // Modulate reverb wet level based on modValues.tint
  if (effectsNodes.reverb && effectsNodes.reverbWetGain && effectsNodes.reverbDryGain) {
    const tintValue = parseInt(currentModValues.tint, 10) || 0;
    const wetLevel = tintValue / 99;
    const dryLevel = 1 - wetLevel;

    effectsNodes.reverbWetGain.gain.setValueAtTime(wetLevel, audioCtx!.currentTime);
    effectsNodes.reverbDryGain.gain.setValueAtTime(dryLevel, audioCtx!.currentTime);
  }

  // Modulate chorus depth based on modValues.tintPercent
  if (effectsNodes.chorus && effectsNodes.chorus.lfoGain) {
    const tintPercentValue = parseInt(currentModValues.tintPercent, 10) || 0;
    const maxDepth = 0.005; // Maximum chorus depth in seconds
    const chorusDepth = (tintPercentValue / 99) * maxDepth;

    effectsNodes.chorus.lfoGain.gain.setValueAtTime(chorusDepth, audioCtx!.currentTime);
  }
}

/**
 * Set Modulation Values
 * @param {Object} modValues - Object containing modulation values
 */
function modulateSound(modValues: {
  color: string;
  spin: string;
  depth: string;
  tint: string;
  tintPercent: string;
}) {
  currentModValues = modValues;
  applyModulations();
}

/**
 * Select the sonic style based on the most frequent numeral in the seed.
 * @param {string} seed - The seed string (decimal integer).
 * @returns {Object} - The selected sonic style configuration.
 */
function selectSonicStyle(seed: string) {
  const seedStr = seed.toString();
  const numeralFrequencies: { [key: string]: number } = {};
  
  // Initialize counts for digits 0-9
  for (let i = 0; i <= 9; i++) {
    numeralFrequencies[i.toString()] = 0;
  }
  
  // Count each digit in the seed
  for (const char of seedStr) {
    if (char >= '0' && char <= '9') {
      numeralFrequencies[char]++;
    }
  }
  
  // Determine the most frequent digit
  let maxCount = -1;
  let mostFrequentDigit = '0';
  for (let i = 0; i <= 9; i++) {
    const digit = i.toString();
    if (numeralFrequencies[digit] > maxCount) {
      maxCount = numeralFrequencies[digit];
      mostFrequentDigit = digit;
    } else if (
      numeralFrequencies[digit] === maxCount &&
      digit > mostFrequentDigit
    ) {
      mostFrequentDigit = digit;
    }
  }
  
  // Retrieve the sonic style
  const selectedStyle = sonicStyles[mostFrequentDigit];
  
  // Fallback to a default style if undefined
  if (!selectedStyle) {
    console.warn(`Sonic style for digit '${mostFrequentDigit}' not found. Falling back to default style.`);
    return sonicStyles['0']; // Assuming '0' is your default style
  }
  
  return selectedStyle;
}

/**
 * Convert seed string to an array of bits.
 * @param {string} seed - The seed string (decimal integer).
 * @returns {number[]} - Array of bits (0s and 1s).
 */
function seedToBits(seed: string): number[] {
  let seedInt = parseInt(seed, 10);
  if (isNaN(seedInt)) {
    seedInt = 0;
  }
  // Convert the decimal seed to a binary string and pad it to 100 bits
  let binaryString = seedInt.toString(2).padStart(100, '0');
  // Now convert binary string to array of bits
  return binaryString.split('').map((bit) => parseInt(bit, 10));
}

/**
 * Generate frequencies for the oscillators using the key signature and scale.
 * Seeds with more bits turned on will generate more notes, forming chords.
 * @param {number[]} bits - Bits to generate frequencies.
 * @param {number} numOscillators - Number of oscillators to generate.
 * @returns {number[]} - Array of frequencies in Hz.
 */
function generateFrequencies(bits: number[], numOscillators: number): number[] {
  const frequencies: number[] = [];
  const { keySignature, scaleType } = currentStyle!;
  const scaleNotes = scales[scaleType][keySignature];
  const totalBits = bits.length;

  // Define chord intervals based on the scale
  const chordProgressions = {
    major: [0, 4, 7], // Root, Major Third, Perfect Fifth
    minor: [0, 3, 7], // Root, Minor Third, Perfect Fifth
  };

  const intervals = chordProgressions[scaleType as keyof typeof chordProgressions];

  for (let i = 0; i < numOscillators; i++) {
    // Select a base note from the scale
    const scaleIndex = Math.floor(mapBitsToRange(bits.slice(i * 3, i * 3 + 3), 0, scaleNotes.length - 1));
    const baseNote = scaleNotes[scaleIndex];

    // Build chord based on intervals
    const chordNotes = intervals.map(interval => baseNote + interval);

    chordNotes.forEach(note => {
      // Map bits to select an octave
      const octaveBits = bits.slice(i * 4, i * 4 + 3); // 3 bits for octave
      const octave = Math.floor(mapBitsToRange(octaveBits, 3, 5)); // Octaves 3 to 5

      // Calculate MIDI note number
      const midiNote = note + 12 * octave;
      const frequency = midiToFrequency(midiNote);
      frequencies.push(frequency);
    });
  }

  return frequencies;
}

/**
 * Generate detune amounts for the oscillators.
 * @param {number[]} bits - Bits to generate detune amounts.
 * @param {number} numOscillators - Number of oscillators.
 * @returns {number[]} - Array of detune amounts in cents.
 */
function generateDetunes(bits: number[], numOscillators: number): number[] {
  const detunes: number[] = [];
  const totalBits = bits.length;
  const detuneRange = currentStyle!.detuneRange;

  for (let i = 0; i < numOscillators; i++) {
    const bitSliceSize = Math.floor(totalBits / numOscillators);
    const startIdx = i * bitSliceSize;
    const endIdx = startIdx + bitSliceSize;
    const bitSlice = bits.slice(startIdx, endIdx);

    const detune = mapBitsToRange(bitSlice, -detuneRange, detuneRange);
    detunes.push(detune);
  }
  return detunes;
}

function updateOscillatorsAndLFOs(seed) {
  const bits = seedToBits(seed);
  const numOscillators = Math.min(
    Math.max(Math.floor(bits.filter(bit => bit === 1).length / 10), 1),
    currentStyle.maxOscillators
  );

  const baseFrequencies = generateFrequencies(bits, numOscillators);
  const detuneAmounts = generateDetunes(bits, numOscillators);
  const lfoRates = generateLfoRates(bits, numOscillators);

  // Update existing oscillators or create new ones
  for (let i = 0; i < numOscillators; i++) {
    if (i < currentOscillators.length) {
      // Update existing oscillator
      currentOscillators[i].frequency.setValueAtTime(
        baseFrequencies[i],
        audioCtx.currentTime
      );
      currentOscillators[i].detune.setValueAtTime(
        detuneAmounts[i],
        audioCtx.currentTime
      );

      // Update existing LFO
      currentLfoNodes[i].lfo.frequency.setValueAtTime(
        lfoRates[i],
        audioCtx.currentTime
      );
      currentLfoNodes[i].lfoGain.gain.setValueAtTime(
        currentStyle.modulationDepth,
        audioCtx.currentTime
      );
    } else {
      // Create new oscillator and LFO
      const oscillator = audioCtx.createOscillator();
      oscillator.type = currentStyle.waveform;
      oscillator.frequency.setValueAtTime(
        baseFrequencies[i],
        audioCtx.currentTime
      );
      oscillator.detune.setValueAtTime(
        detuneAmounts[i] + (i * 2),
        audioCtx.currentTime
      );

      const lfo = audioCtx.createOscillator();
      lfo.type = currentStyle.modulationType;
      lfo.frequency.setValueAtTime(lfoRates[i], audioCtx.currentTime);

      const lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(currentStyle.modulationDepth, audioCtx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);

      oscillator.connect(currentFilterNode);

      oscillator.start();
      lfo.start();

      currentOscillators.push(oscillator);
      currentLfoNodes.push({ lfo, lfoGain });
    }
  }

  // Remove excess oscillators if needed
  while (currentOscillators.length > numOscillators) {
    const osc = currentOscillators.pop();
    const lfoObj = currentLfoNodes.pop();
    if (osc) {
      osc.stop();
      osc.disconnect();
    }
    if (lfoObj) {
      lfoObj.lfo.stop();
      lfoObj.lfo.disconnect();
      lfoObj.lfoGain.disconnect();
    }
  }
}

/**
 * Generate modulation rates for the LFOs, influenced by tempo.
 * @param {number[]} bits - Bits to generate LFO rates.
 * @param {number} numOscillators - Number of oscillators.
 * @returns {number[]} - Array of LFO rates in Hz.
 */
function generateLfoRates(bits: number[], numOscillators: number): number[] {
  const lfoRates: number[] = [];
  const beatDuration = 60 / tempo; // Duration of a beat in seconds
  const totalBits = bits.length;

  for (let i = 0; i < numOscillators; i++) {
    const bitSliceSize = Math.floor(totalBits / numOscillators);
    const startIdx = i * bitSliceSize;
    const endIdx = startIdx + bitSliceSize;
    const bitSlice = bits.slice(startIdx, endIdx);

    // Modulation rates are fractions of the beat duration
    const minRate = 1 / (8 * beatDuration); // Slower modulation
    const maxRate = 1 / (2 * beatDuration); // Faster modulation
    const rate = mapBitsToRange(bitSlice, minRate, maxRate);
    lfoRates.push(rate);
  }
  return lfoRates;
}

/**
 * Map bits to a value within a specified range.
 * @param {number[]} bits - Bits to map.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} - Mapped value.
 */
function mapBitsToRange(bits: number[], min: number, max: number): number {
  if (bits.length === 0) {
    return min;
  }
  const intVal = bitsToInt(bits);
  const maxInt = Math.pow(2, bits.length) - 1;
  if (maxInt === 0) {
    return min;
  }
  const ratio = intVal / maxInt;
  return min + ratio * (max - min);
}

/**
 * Convert bits to an integer.
 * @param {number[]} bits - Array of bits.
 * @returns {number} - The integer representation.
 */
function bitsToInt(bits: number[]): number {
  return bits.reduce((acc, bit, idx) => acc + bit * Math.pow(2, bits.length - idx - 1), 0);
}

/**
 * Convert MIDI note number to frequency in Hz.
 * @param {number} note - MIDI note number.
 * @returns {number} - Frequency in Hz.
 */
function midiToFrequency(note: number): number {
  return 440 * Math.pow(2, (note - 69) / 12);
}

/**
 * Initialize Effects and Connect Audio Chain
 */
function initSound(seed: string) {
  // Initialize Audio Context and Master Gain Node
  initializeAudioContext();

  // Select sonic style based on most frequent numeral
  currentStyle = selectSonicStyle(seed);

  if (!currentStyle) {
    console.error('Failed to select a valid sonic style. Aborting sound initialization.');
    return;
  }

  // Create a gain node for the current sound
  currentGainNode = audioCtx!.createGain();
  currentGainNode.gain.setValueAtTime(currentStyle.volume, audioCtx!.currentTime);

  // Apply initial volume
  if (isPlaying) {
    currentGainNode.gain.setValueAtTime(0, audioCtx!.currentTime);
    currentGainNode.gain.linearRampToValueAtTime(
      currentStyle.volume,
      audioCtx!.currentTime + fadeDuration
    );
  } else {
    currentGainNode.gain.setValueAtTime(0, audioCtx!.currentTime);
  }

  // Create a filter node for shaping the sound
  currentFilterNode = audioCtx!.createBiquadFilter();
  currentFilterNode.type = currentStyle.filterType;
  currentFilterNode.frequency.setValueAtTime(
    currentStyle.filterFrequency,
    audioCtx!.currentTime
  );
  currentFilterNode.Q.setValueAtTime(currentStyle.filterQ, audioCtx!.currentTime);

  // Connect currentGainNode to currentFilterNode
  currentGainNode.connect(currentFilterNode);

  // Initialize global effects
  initEffects();

  // Connect the effects chain starting from currentFilterNode
  connectEffectsChain(currentFilterNode);

  // Generate and start the ambient sound
  generateAmbientSound(seed);

  // Apply initial modulations
  applyModulations();
}

/**
 * Start Audio Function (modified to initialize effects and connect chain)
 */
function startAudio(seed: string) {
  if (!seed || isNaN(parseInt(seed, 10))) {
    console.error('Invalid seed provided to startAudio');
    return;
  }

  initializeAudioContext();
  initEffects();

  if (isAudioInitialized) {
    if (isPlaying) {
      // Crossfade to new seed only if currently playing
      crossfadeToNewSeed(seed);
    } else {
      // Update the existing sound with the new seed without starting playback
      updateSound(seed);
    }
  } else {
    // Initialize new sound
    initSound(seed);
  }

  isAudioInitialized = true;
}

/**
 * Crossfade from the current sound to the new sound generated by the new seed.
 * @param {string} newSeed - The new seed string (decimal integer).
 */
function crossfadeToNewSeed(newSeed: string) {
  if (!currentGainNode || !currentFilterNode) return;

  // Store the current sound
  const fadingSound = {
    gainNode: currentGainNode,
    oscillators: [...currentOscillators],
    lfoNodes: [...currentLfoNodes],
    filterNode: currentFilterNode,
  };
  previousSounds.push(fadingSound);

  // Fade out the old sound
  fadingSound.gainNode.gain.cancelScheduledValues(audioCtx!.currentTime);
  fadingSound.gainNode.gain.setValueAtTime(
    fadingSound.gainNode.gain.value,
    audioCtx!.currentTime
  );
  fadingSound.gainNode.gain.linearRampToValueAtTime(
    0,
    audioCtx!.currentTime + fadeDuration
  );

  // Schedule to stop the old sound after fadeDuration
  setTimeout(() => {
    stopSound(fadingSound);
  }, fadeDuration * 1500);

  // Initialize the new sound
  initSound(newSeed);

  if (isPlaying) {
    // Fade in the new sound
    currentGainNode!.gain.setValueAtTime(0, audioCtx!.currentTime);
    currentGainNode!.gain.linearRampToValueAtTime(
      currentStyle!.volume,
      audioCtx!.currentTime + fadeDuration
    );
  } else {
    // If not playing, set gain to zero
    currentGainNode!.gain.setValueAtTime(0, audioCtx!.currentTime);
  }
}

/**
 * Generate ambient sound based on the seed.
 * @param {string} seed - The seed string (decimal integer).
 */
function generateAmbientSound(seed: string) {
  // Clear existing oscillators, LFOs, panners, and frequency gains for the current sound
  currentOscillators = [];
  currentLfoNodes = [];
  currentPanners = [];
  currentFrequencyGainNodes = [];

  // Map seed to ambient sound parameters
  const bits = seedToBits(seed);

  // Count active bits
  const activeBits = bits.filter((bit) => bit === 1).length;

  // Determine number of oscillators based on active bits and maxOscillators
  const numOscillators = Math.min(
    Math.max(Math.floor(activeBits / 10), 1), // At least 1 oscillator
    globalSettings.layering.maxOscillators
  );

  // Use bits to generate frequencies for oscillators
  const baseFrequencies = generateFrequencies(bits, numOscillators);
  const detuneAmounts = generateDetunes(bits, numOscillators);
  const lfoRates = generateLfoRates(bits, numOscillators);

  // Create oscillators with panning and frequency-based gain
  for (let i = 0; i < numOscillators; i++) {
    const freq = baseFrequencies[i];
    const detune = detuneAmounts[i];
    const lfoRate = lfoRates[i];

    const oscillator = audioCtx!.createOscillator();
    oscillator.type = currentStyle!.waveform;
    oscillator.frequency.setValueAtTime(freq, audioCtx!.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx!.currentTime);

    // Create an LFO to modulate the oscillator's frequency
    const lfo = audioCtx!.createOscillator();
    lfo.type = currentStyle!.modulationType;
    lfo.frequency.setValueAtTime(lfoRate, audioCtx!.currentTime);

    const lfoGain = audioCtx!.createGain();
    lfoGain.gain.setValueAtTime(currentStyle!.modulationDepth, audioCtx!.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);

    // Create a StereoPannerNode for spatialization
    const panner = audioCtx!.createStereoPanner();
    const panValue = mapBitsToRange(bits.slice(i * 2, i * 2 + 2), -globalSettings.spatial.spread, globalSettings.spatial.spread);
    panner.pan.setValueAtTime(panValue, audioCtx!.currentTime);
    currentPanners.push(panner);

    // Create a GainNode for frequency-based gain scaling
    const freqGain = audioCtx!.createGain();
    const frequencyScale = currentStyle!.frequencyGainScale || globalSettings.frequencyGain.scale;
    const gainValue = frequencyScale * freq; // Example: linear scaling, adjust as needed
    freqGain.gain.setValueAtTime(gainValue, audioCtx!.currentTime);
    currentFrequencyGainNodes.push(freqGain);

    // Connect oscillator through panner and frequency gain to currentGainNode
    oscillator.connect(panner);
    panner.connect(freqGain);
    freqGain.connect(currentGainNode!);

    oscillator.start();
    lfo.start();

    currentOscillators.push(oscillator);
    currentLfoNodes.push({ lfo, lfoGain });
  }
}

/**
 * Stop a sound and clean up its resources.
 * @param {Object} sound - The sound object containing nodes to stop.
 */
function stopSound(sound: {
  gainNode: GainNode;
  oscillators: OscillatorNode[];
  lfoNodes: { lfo: OscillatorNode; lfoGain: GainNode }[];
  filterNode: BiquadFilterNode;
}) {
  if (sound.oscillators && sound.oscillators.length > 0) {
    sound.oscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // Ignore errors if the oscillator is already stopped
      }
    });
    sound.oscillators = [];
  }
  if (sound.lfoNodes && sound.lfoNodes.length > 0) {
    sound.lfoNodes.forEach(({ lfo, lfoGain }) => {
      try {
        lfo.stop();
        lfo.disconnect();
        lfoGain.disconnect();
      } catch (e) {
        // Ignore errors if the LFO is already stopped
      }
    });
    sound.lfoNodes = [];
  }
  if (sound.gainNode) {
    sound.gainNode.disconnect();
    sound.gainNode = null;
  }
  if (sound.filterNode) {
    sound.filterNode.disconnect();
    sound.filterNode = null;
  }
  // Remove the sound from the previousSounds array
  const index = previousSounds.indexOf(sound);
  if (index !== -1) {
    previousSounds.splice(index, 1);
  }
}

/**
 * Play the audio with fade-in effect.
 */
function playAudio() {
  if (!isAudioInitialized) {
    console.error('Audio not initialized. Call startAudio(seed) first.');
    return;
  }
  if (isPlaying) {
    return;
  }

  if (audioCtx!.state === 'suspended') {
    audioCtx!.resume();
  }

  if (currentGainNode) {
    currentGainNode.gain.cancelScheduledValues(audioCtx!.currentTime);
    currentGainNode.gain.setValueAtTime(
      currentGainNode.gain.value,
      audioCtx!.currentTime
    );
    currentGainNode.gain.linearRampToValueAtTime(
      currentStyle!.volume,
      audioCtx!.currentTime + fadeDuration
    );
  }

  isPlaying = true;
}

/**
 * Pause the audio with fade-out effect.
 */
function pauseAudio() {
  if (!isPlaying) return;

  if (currentGainNode) {
    currentGainNode.gain.cancelScheduledValues(audioCtx!.currentTime);
    currentGainNode.gain.setValueAtTime(
      currentGainNode.gain.value,
      audioCtx!.currentTime
    );
    currentGainNode.gain.linearRampToValueAtTime(
      0,
      audioCtx!.currentTime + fadeDuration
    );
  }

  // After fade-out, suspend the audio context
  setTimeout(() => {
    if (audioCtx!.state === 'running') {
      audioCtx!.suspend();
    }
    isPlaying = false;
  }, fadeDuration * 1500);
}

/**
 * Stop all audio and reset the state.
 */
function stopAudio() {
  // Fade out the current sound
  if (currentGainNode) {
    currentGainNode.gain.cancelScheduledValues(audioCtx!.currentTime);
    currentGainNode.gain.setValueAtTime(currentGainNode.gain.value, audioCtx!.currentTime);
    currentGainNode.gain.linearRampToValueAtTime(0, audioCtx!.currentTime + fadeDuration);
  }

  // Fade out all previous sounds
  previousSounds.forEach((sound) => {
    if (sound.gainNode) {
      sound.gainNode.gain.cancelScheduledValues(audioCtx!.currentTime);
      sound.gainNode.gain.setValueAtTime(sound.gainNode.gain.value, audioCtx!.currentTime);
      sound.gainNode.gain.linearRampToValueAtTime(0, audioCtx!.currentTime + fadeDuration);
    }
  });

  setTimeout(() => {
    // Stop current sound
    stopCurrentSound();

    // Stop all previous sounds
    previousSounds.forEach((sound) => {
      stopSound(sound);
    });
    previousSounds = [];

    if (audioCtx && audioCtx.state === 'running') {
      audioCtx.suspend();
    }
    isPlaying = false;
    isAudioInitialized = false;
  }, fadeDuration * 1500);
}

/**
 * Stop the current sound and reset the state.
 */
function stopCurrentSound() {
  if (currentOscillators && currentOscillators.length > 0) {
    currentOscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {
        // Ignore errors if the oscillator is already stopped
      }
    });
    currentOscillators = [];
  }
  if (currentLfoNodes && currentLfoNodes.length > 0) {
    currentLfoNodes.forEach(({ lfo, lfoGain }) => {
      try {
        lfo.stop();
        lfo.disconnect();
        lfoGain.disconnect();
      } catch (e) {
        // Ignore errors if the LFO is already stopped
      }
    });
    currentLfoNodes = [];
  }
  if (currentGainNode) {
    currentGainNode.disconnect();
    currentGainNode = null;
  }
  if (currentFilterNode) {
    currentFilterNode.disconnect();
    currentFilterNode = null;
  }
  isAudioInitialized = false;
}

/**
 * Check if audio is playing
 */
function isAudioPlaying(): boolean {
  return audioCtx !== null && audioCtx.state === 'running';
}

/**
 * Update Sound Function (remains mostly unchanged)
 */
function updateSound(seed: string) {
  if (!currentStyle || !currentFilterNode) {
    console.error('Audio is not initialized properly. Cannot update sound.');
    return;
  }

  // Update the sonic style
  currentStyle = selectSonicStyle(seed);

  if (!currentStyle) {
    console.error('Failed to select a valid sonic style during sound update.');
    return;
  }

  // Update filter parameters
  currentFilterNode.type = currentStyle.filterType;
  currentFilterNode.frequency.setValueAtTime(
    currentStyle.filterFrequency,
    audioCtx!.currentTime
  );
  currentFilterNode.Q.setValueAtTime(currentStyle.filterQ, audioCtx!.currentTime);

  // Update oscillators and LFOs
  updateOscillatorsAndLFOs(seed);
}


/**
 * Crossfade from the current sound to the new sound generated by the new seed.
 * (No changes needed; already corrected)
 */

/**
 * Set Modulation Values Function
 * (Already implemented above)
 */

/**
 * Exported Functions
 */
export {
  startAudio,
  playAudio,
  pauseAudio,
  stopAudio,
  setTempo,
  modulateSound,
  isAudioPlaying,
};
