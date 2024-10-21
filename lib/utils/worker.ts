export function createPrimeWorker() {
    const workerCode = `
      onmessage = function(e) {
        const num = BigInt(e.data);
        // Miller-Rabin implementation
        // ...
        postMessage(result);
      };
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));
    return worker;
}