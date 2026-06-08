const { reverseString, reverseWords } = require('./reverseString');

const [,, func, ...args] = process.argv;
const input = args.join(' ');

if (!func || !input) {
    console.log('Uso: node main.js <función> <cadena>');
    console.log('  Funciones disponibles:');
    console.log('    reverseString  — invierte los caracteres de una cadena');
    console.log('    reverseWords   — invierte el orden de las palabras');
    console.log('');
    console.log('  Ejemplos:');
    console.log('    node main.js reverseString "Hola mundo"');
    console.log('    node main.js reverseWords "Hola mundo cruel"');
    process.exit(1);
}

const functions = { reverseString, reverseWords };

if (!functions[func]) {
    console.error(`Función desconocida: "${func}"`);
    console.error(`Funciones disponibles: ${Object.keys(functions).join(', ')}`);
    process.exit(1);
}

console.log(functions[func](input));
