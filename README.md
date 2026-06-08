# pruebasIA
Pruebas de estudio IA
Modificación 2

## Ejecución

El punto de entrada principal es `src/main.js`. Recibe una función y una cadena de texto como argumentos.

```
node src/main.js <función> <cadena>
```

### Funciones disponibles

| Función | Descripción |
|---|---|
| `reverseString` | Invierte los caracteres de la cadena |
| `reverseWords` | Invierte el orden de las palabras |

### Ejemplos

```bash
node src/main.js reverseString "Hola mundo"
# Salida: odnum aloH

node src/main.js reverseWords "Hola mundo cruel"
# Salida: cruel mundo Hola
```

Si no se proporcionan argumentos, el programa muestra la ayuda con las funciones disponibles y ejemplos de uso.
