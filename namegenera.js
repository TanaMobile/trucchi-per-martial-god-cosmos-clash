// nameGenerator.js
// Crea nomi casuali combinando prefissi e suffissi tecnologici o creativi

const NameGenerator = (() => {
  const prefixes = [
    'Cyber', 'Neo', 'Quantum', 'Auto', 'Smart',
    'Hyper', 'Nano', 'Meta', 'Alpha', 'Dark'
  ];

  const suffixes = [
    'Sync', 'Core', 'Node', 'Verse', 'OS',
    'Logic', 'Box', 'Sphere', 'Ware', 'Flow'
  ];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function generate(count = 1) {
    const results = [];
    for (let i = 0; i < count; i++) {
      const name = randomItem(prefixes) + randomItem(suffixes);
      results.push(name);
    }
    return count === 1 ? results[0] : results;
  }

  return {
    generate
  };
})();

// Esempi:
// console.log(NameGenerator.generate());        // es: "MetaNode"
// console.log(NameGenerator.generate(3));       // es: [ 'QuantumFlow', 'NeoWare', 'CyberSync' ]

export default NameGenerator;
