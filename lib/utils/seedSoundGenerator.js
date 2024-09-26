// soundGenerator.js

// Configuration for sonic styles
const sonicStyles = {
  0: {
    volume: 0.5,
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
  },
  1: {
    volume: 0.45,
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
  },
  // ... Define other sonic styles (2-9) similarly
  2: {
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
  },
  3: {
    volume: 0.5,
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
  },
  4: {
    volume: 0.55,
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
  },
  5: {
    volume: 0.35,
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
  },
  6: {
    volume: 0.6,
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
  },
  7: {
    volume: 0.5,
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
  },
  8: {
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
  },
  9: {
    volume: 0.55,
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
  },
};

// Define scales for major and minor keys
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

let audioCtx = null;
let isInitialized = false;
let isPlaying = false;
let fadeDuration = 2; // 2 seconds fade in/out

// Variables for the current sound
let currentGainNode = null;
let currentOscillators = [];
let currentLfoNodes = [];
let currentFilterNode = null;
let currentStyle = null;

// Array to manage previous sounds (for multiple crossfades)
let previousSounds = [];

// Tempo variable (in beats per minute)
let tempo = 60; // Default tempo

/**
 * Set the tempo for the sound generation.
 * @param {number} newTempo - The new tempo in BPM.
 */
function setTempo(newTempo) {
  tempo = newTempo;
}

/**
 * Initialize the audio context if not already initialized.
 */
function initializeAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

/**
 * Start or initialize audio with the given seed.
 * @param {string} seed - The seed string (decimal integer).
 */
function startAudio(seed) {
  if (!seed || isNaN(parseInt(seed, 10))) {
    console.error('Invalid seed provided to startAudio');
    return;
  }

  initializeAudioContext();

  // If already initialized and playing, crossfade to new seed
  if (isInitialized && isPlaying) {
    crossfadeToNewSeed(seed);
  } else {
    // Initialize new sound but don't start playing
    initSound(seed);
  }

  isInitialized = true;
}

/**
 * Crossfade from the current sound to the new sound generated by the new seed.
 * @param {string} newSeed - The new seed string (decimal integer).
 */
function crossfadeToNewSeed(newSeed) {
  if (isPlaying) {
    // Store the current sound in previousSounds array
    const fadingSound = {
      gainNode: currentGainNode,
      oscillators: [...currentOscillators],
      lfoNodes: [...currentLfoNodes],
      filterNode: currentFilterNode,
      style: currentStyle,
    };
    previousSounds.push(fadingSound);

    // Start fade-out of the previous sound
    fadingSound.gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
    fadingSound.gainNode.gain.setValueAtTime(fadingSound.gainNode.gain.value, audioCtx.currentTime);
    fadingSound.gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeDuration);

    // Schedule stopping of the previous sound
    setTimeout(() => {
      stopSound(fadingSound);
    }, fadeDuration * 1000);
  } else {
    // If not playing, immediately stop the previous sound
    stopCurrentSound();
  }

  // Initialize and start the new sound
  initSound(newSeed);

  if (isPlaying) {
    // Start fade-in of the new sound
    currentGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    currentGainNode.gain.linearRampToValueAtTime(
      currentStyle.volume,
      audioCtx.currentTime + fadeDuration
    );
  }
}

/**
 * Initialize the sound based on the seed.
 * @param {string} seed - The seed string (decimal integer).
 */
function initSound(seed) {
  // Create a gain node for the current sound
  currentGainNode = audioCtx.createGain();
  currentGainNode.connect(audioCtx.destination);

  // Select sonic style based on most frequent numeral
  currentStyle = selectSonicStyle(seed);

  // Apply initial volume
  currentGainNode.gain.setValueAtTime(isPlaying ? 0 : 0, audioCtx.currentTime);

  // Create a filter node for shaping the sound
  currentFilterNode = audioCtx.createBiquadFilter();
  currentFilterNode.type = currentStyle.filterType;
  currentFilterNode.frequency.setValueAtTime(currentStyle.filterFrequency, audioCtx.currentTime);
  currentFilterNode.Q.setValueAtTime(currentStyle.filterQ, audioCtx.currentTime);
  currentFilterNode.connect(currentGainNode);

  // Generate and start the ambient sound
  generateAmbientSound(seed);
}

/**
 * Generate ambient sound based on the seed.
 * @param {string} seed - The seed string (decimal integer).
 */
function generateAmbientSound(seed) {
  // Clear existing oscillators and LFOs for the current sound
  currentOscillators = [];
  currentLfoNodes = [];

  // Map seed to ambient sound parameters
  const bits = seedToBits(seed);

  // Count active bits
  const activeBits = bits.filter((bit) => bit === 1).length;

  // Determine number of oscillators based on active bits and maxOscillators
  const numOscillators = Math.min(
    Math.max(Math.floor(activeBits / 10), 1), // At least 1 oscillator
    currentStyle.maxOscillators
  );

  // Use bits to generate frequencies for oscillators
  const baseFrequencies = generateFrequencies(bits, numOscillators);
  const detuneAmounts = generateDetunes(bits, numOscillators);

  // Use bits to set modulation rates
  const lfoRates = generateLfoRates(bits, numOscillators);

  // Create oscillators
  for (let i = 0; i < numOscillators; i++) {
    const freq = baseFrequencies[i];
    const detune = detuneAmounts[i];
    const lfoRate = lfoRates[i];

    const oscillator = audioCtx.createOscillator();
    oscillator.type = currentStyle.waveform;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx.currentTime);

    // Create an LFO to modulate the oscillator's frequency
    const lfo = audioCtx.createOscillator();
    lfo.type = currentStyle.modulationType;
    lfo.frequency.setValueAtTime(lfoRate, audioCtx.currentTime);

    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(currentStyle.modulationDepth, audioCtx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);

    oscillator.connect(currentFilterNode);

    oscillator.start();
    lfo.start();

    currentOscillators.push(oscillator);
    currentLfoNodes.push(lfo);
  }
}

/**
 * Generate frequencies for the oscillators using the key signature and scale.
 * Bits towards the beginning of the bit array correspond to lower frequencies,
 * and bits towards the end correspond to higher frequencies.
 * @param {number[]} bits - Bits to generate frequencies.
 * @param {number} numOscillators - Number of oscillators to generate.
 * @returns {number[]} - Array of frequencies in Hz.
 */
function generateFrequencies(bits, numOscillators) {
  const frequencies = [];
  const { keySignature, scaleType } = currentStyle;
  const scaleNotes = scales[scaleType][keySignature];
  const totalBits = bits.length;

  for (let i = 0; i < numOscillators; i++) {
    // Map bits to select a note from the scale
    // Bits towards the beginning for lower notes, end for higher notes
    const bitSliceSize = Math.floor(totalBits / numOscillators);
    const startIdx = i * bitSliceSize;
    const endIdx = startIdx + bitSliceSize;
    const bitSlice = bits.slice(startIdx, endIdx);

    const scaleIndex = Math.floor(mapBitsToRange(bitSlice, 0, scaleNotes.length - 1));
    const noteInScale = scaleNotes[scaleIndex];

    // Map bits to select an octave
    const octaveBits = bits.slice(startIdx, startIdx + 3); // 3 bits for octave
    const octave = Math.floor(mapBitsToRange(octaveBits, 3, 5)); // Octaves 3 to 5

    // Calculate MIDI note number
    const midiNote = noteInScale + 12 * octave;
    const frequency = midiToFrequency(midiNote);
    frequencies.push(frequency);
  }

  return frequencies;
}

/**
 * Generate detune amounts for the oscillators.
 * @param {number[]} bits - Bits to generate detune amounts.
 * @param {number} numOscillators - Number of oscillators.
 * @returns {number[]} - Array of detune amounts in cents.
 */
function generateDetunes(bits, numOscillators) {
  const detunes = [];
  const totalBits = bits.length;
  const detuneRange = currentStyle.detuneRange;

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

/**
 * Generate modulation rates for the LFOs, influenced by tempo.
 * @param {number[]} bits - Bits to generate LFO rates.
 * @param {number} numOscillators - Number of oscillators.
 * @returns {number[]} - Array of LFO rates in Hz.
 */
function generateLfoRates(bits, numOscillators) {
  const lfoRates = [];
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
function mapBitsToRange(bits, min, max) {
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
function bitsToInt(bits) {
  return bits.reduce((acc, bit, idx) => acc + bit * Math.pow(2, bits.length - idx - 1), 0);
}

/**
 * Convert MIDI note number to frequency in Hz.
 * @param {number} note - MIDI note number.
 * @returns {number} - Frequency in Hz.
 */
function midiToFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

/**
 * Play the audio with fade-in effect.
 */
function playAudio() {
  if (!isInitialized) {
    console.error('Audio not initialized. Call startAudio(seed) first.');
    return;
  }
  if (isPlaying) {
    return;
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  currentGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
  currentGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  currentGainNode.gain.linearRampToValueAtTime(
    currentStyle.volume,
    audioCtx.currentTime + fadeDuration
  );

  isPlaying = true;
}

/**
 * Pause the audio with fade-out effect.
 */
function pauseAudio() {
  if (!isPlaying) {
    return;
  }

  // Fade out the current sound
  currentGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
  currentGainNode.gain.setValueAtTime(currentGainNode.gain.value, audioCtx.currentTime);
  currentGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeDuration);

  // After fade-out, suspend the audio context
  setTimeout(() => {
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    }
    isPlaying = false;
    // Do not stop or disconnect nodes here
  }, fadeDuration * 1000);
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
    currentLfoNodes.forEach((lfo) => {
      try {
        lfo.stop();
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
  isInitialized = false;
}

/**
 * Stop a specific sound and clean up its resources.
 * @param {Object} sound - The sound object containing nodes to stop.
 */
function stopSound(sound) {
  if (sound.oscillators && sound.oscillators.length > 0) {
    sound.oscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {
        // Ignore errors if the oscillator is already stopped
      }
    });
    sound.oscillators = [];
  }
  if (sound.lfoNodes && sound.lfoNodes.length > 0) {
    sound.lfoNodes.forEach((lfo) => {
      try {
        lfo.stop();
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
 * Stop all audio and reset the state.
 */
function stopAudio() {
  // Fade out the current sound
  if (currentGainNode) {
    currentGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
    currentGainNode.gain.setValueAtTime(currentGainNode.gain.value, audioCtx.currentTime);
    currentGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeDuration);
  }

  // Fade out all previous sounds
  previousSounds.forEach((sound) => {
    if (sound.gainNode) {
      sound.gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
      sound.gainNode.gain.setValueAtTime(sound.gainNode.gain.value, audioCtx.currentTime);
      sound.gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeDuration);
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
    isInitialized = false;
  }, fadeDuration * 1000);
}

/**
 * Convert seed string to an array of bits.
 * @param {string} seed - The seed string (decimal integer).
 * @returns {number[]} - Array of bits (0s and 1s).
 */
function seedToBits(seed) {
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
 * Select the sonic style based on the most frequent numeral in the seed.
 * @param {string} seed - The seed string (decimal integer).
 * @returns {Object} - The selected sonic style configuration.
 */
function selectSonicStyle(seed) {
  const digitCounts = {};
  const seedStr = seed.toString();

  // Initialize counts
  for (let i = 0; i <= 9; i++) {
    digitCounts[i] = 0;
  }

  // Count occurrences of each digit
  for (const char of seedStr) {
    if (char >= '0' && char <= '9') {
      digitCounts[char]++;
    }
  }

  // Find the most frequent digit
  let maxCount = -1;
  let mostFrequentDigit = '0';
  for (let i = 0; i <= 9; i++) {
    if (digitCounts[i] > maxCount) {
      maxCount = digitCounts[i];
      mostFrequentDigit = i.toString();
    }
  }

  // Select the style
  return sonicStyles[mostFrequentDigit];
}

/**
 * Exported functions: startAudio, playAudio, pauseAudio, stopAudio, setTempo
 */
export { startAudio, playAudio, pauseAudio, stopAudio, setTempo };
