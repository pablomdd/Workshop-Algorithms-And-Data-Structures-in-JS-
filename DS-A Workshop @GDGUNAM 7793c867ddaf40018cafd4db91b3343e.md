# DS-A Workshop @GDGUNAM

Created By: Pablo Domínguez Durán
Last Edited: Oct 24, 2020 5:05 PM

# Introducción

En este taller conocerás algunas estructuras de datos nativas de JS (ES6+) y varias otras ADTs.

También veremos una introducción a los algoritmos de ordenamiento, búsqueda, recursividad, y notación Big(O). 

**Disclaimer 1**: Este taller es educativo y las implementaciones no suponen estar listas para producción. Mejor, busca librerías hechas para eso.

**Disclaimer 2**: No serás un experto al final del taller. Más bien, tendrás herramientas para iniciarte.

## ¿Por qué aprender DS-As?

Buena parte de las personas que entran cada día a la industria del desarrollo de software vienen de cambiar carreras o son self taught. Su primer y único lenguaje ha sido JS moderno y probablemente no hayan tenido una formación tradicional, secuencial o "rigurosa" como alguien en una carrera de computación.

En general, las DSAs suponen una parte fundamental e introductoria de la computación y se dan por sentadas hoy en día debido a que muchas son nativas en lenguajes modernos. ¿Por qué aprenderlas entonces?

- Te vuelven mejor programador
- Te ayudan a conocer tu lenguaje a fondo
- Es lo que quieren las FAAANGs (?)
- Se usan en la vida real (?)

## Libros

DSAs en JS

- JavaScript Data Structures and Algorithms: An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals - Sammie Bae  - Appres

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled.png)

- Learning JavaScript Data Structures and Algorithms - Loiane Grones - Packt

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%201.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%201.png)

- Data Structures & Algorithms with Javascript - Michael McMillan - O'Reilly

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%202.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%202.png)

## ¿Qué son exactamente las Estructuras de Datos y Algoritmos?

Una **estructura de datos** es una organización de datos de forma que puedan ser accesados y modificados en una manera particular.

Un **algoritmo** es una secuencia de instrucciones finitas que llevan a cabo una serie de procesos para dar respuesta a determinados problemas.

# JS Overview

## Tipos de datos en JS

**Datos primitivos**

- [Undefined](https://developer.mozilla.org/es/docs/Glossary/undefined): `typeof instance === "undefined"`
- [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean): `typeof instance === "boolean"`
- [Number](https://developer.mozilla.org/es/docs/Glossary/Numero): `typeof instance === "number"`
- [String](https://developer.mozilla.org/es/docs/Glossary/String): `typeof instance === "string"`
- [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt): `typeof instance === "bigint"`
- [Symbol](https://developer.mozilla.org/es/docs/Glossary/Symbol): `typeof instance === "symbol"`

**Estructuras Nativas**

- Arrays
- Sets
- Objects
- Maps

*Ver más*: [https://v8docs.nodesource.com/node-0.8/annotated.html](https://v8docs.nodesource.com/node-0.8/annotated.html)

**Abstractas**

- Stacks
- Queues
- Linked Lists
- Trees
- Graphs

### Overview

Se asume que estás familiarizado con:

- Entornos de ejecucción de JS (Node.JS)
- Características populares de ES6
- Variables: `const, let, var`
- Variable Scope

```jsx
var myVariable = 'global';
myOtherVariable = 'global';
function myFunction(){
 var myVariable = 'local';
 return myVariable;
}
function myOtherFunction(){
 myOtherVariable = 'local';
 return myOtherVariable;
}
console.log(myVariable); //{1}
console.log(myFunction()); //{2}
console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
```

- Operadores aritméticos, de asignación, comparación, lógicos y bitwise

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%203.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%203.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%204.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%204.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%205.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%205.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%206.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%206.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%207.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%207.png)

- Thuthy y falsy

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%208.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%208.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%209.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%209.png)

- Estructuras de control
    - If, If else, Switch
    - While, for
- Funciones
- OOP in JS

```jsx
function Comunidad(nombre, organizadores, eventos){
 this.nombre= nombre;
 this.organizadores= organizadores;
 this.eventos = eventos;

	
 }
Book.prototype.printName = () => console.log(this.name);

const gdgUnam = new Comunidad("GDG UNAM", ["Hector", "Mau"], ["Noches de GDG UNAM", "DevFest"])
```

```jsx
class Comunidad{
constructor (nombre, organizadores, eventos){
 this.nombre= nombre;
 this.organizadores= organizadores;
 this.eventos = eventos;

	
}
	printName = () => console.log(this.name);
}

const gdgUnam = new Comunidad("GDG UNAM", ["Hector", "Mau"], ["Noches de GDG UNAM", "DevFest"])
```

```jsx
class Comunidad{
constructor (nombre, organizadores, eventos){
 this.nombre= nombre;
 this.organizadores= organizadores;
 this.eventos = eventos;

	
}
	printName = () => console.log(this.name);
}

const gdgUnam = new Comunidad("GDG UNAM", ["Hector", "Mau"], ["Noches de GDG UNAM", "DevFest"])
```

# Complejidad (Big O)

Pensemos acerca de la data que vamos a procesar. Pensemos cómo lo haremos. Pensemos en el mejor de los casos, en el peor y en el caso promedio.

La notación Big O se usa para clasificar los algoritmos de acuerdo con cómo crecen sus requisitos de espacio o tiempo de ejecución a medida que aumenta el tamaño de entrada.

Ver más en: [https://www.bigocheatsheet.com/](https://www.bigocheatsheet.com/)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2010.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2010.png)

[Untitled](https://www.notion.so/e7d6b7c4f55a47bf96ca0449182dc030)

# Estructuras de  Datos

## Complejidad de algunas DS

[Untitled](https://www.notion.so/19a2207db4b94b65a3f062e3e31656ff)

# Repaso

## Array

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2011.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2011.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2012.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2012.png)

- Insertion
    - por index
    - `push`
- Delection
    - `pop`
    - `shift`
- Access
    - por index
- Iteration
    - `for`, `while`
    - `for in`
    - `for of`
    - `forEach`
- Helpers
    - `slice`
    - `splice`
    - `concat`
    - `length`
    - Spread Operator`...`
- Functional Methods
    - `map`
    - `filter`
    - `reduce`

## Objects

- Herencia prototipal

```jsx
function ExampleClass(){
	this.name = "JavaScript";
	this.sayName = function(){
	console.log(this.name);
 }
}

//new object
let example1 = new ExampleClass();
example1.sayName(); //"JavaScript"
```

## Stack

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2013.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2013.png)

## Queue

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2014.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2014.png)

## Linked List

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2015.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2015.png)

```jsx
function LinkedList() {

 let Node = function(element){ // {1}
	 this.element = element;
	 this.next = null;
 };

	 let length = 0; // {2}
	 let head = null; // {3}
	 this.append = function(element){};
	 this.insert = function(position, element){};
	 this.removeAt = function(position){};
	 this.remove = function(element){};
	 this.indexOf = function(element){};
	 this.isEmpty = function() {};
	 this.size = function() {};
	 this.toString = function(){};
	 this.print = function(){};
}
```

# Sets

Un **Set** (conjunto) es una colección de elementos o desordenados y consta de elementos únicos, lo que significa que no se pueden repetir.

**Ejemplo**

```jsx
let set = new Set();

set.add(1);

console.log(set.values()); //outputs @Iterator
console.log(set.has(1)); //outputs true
console.log(set.size); //outputs 1

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
```

- **Unión**

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2016.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2016.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2017.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2017.png)

```jsx
let unionAb = new Set(); //{1}
for (let x of setA) unionAb.add(x); 
for (let x of setB) unionAb.add(x); 
```

- **Intersección**

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2018.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2018.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2019.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2019.png)

```jsx
let intersection = function(setA, setB){
 let intersectionSet = new Set();
 for (let x of setA){
	 if (setB.has(x)){
		 intersectionSet.add(x);
	 }
 }

 return intersectionSet;
};
let intersectionAB = intersection(setA, setB);
```

- **Diferencia**

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2020.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2020.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2021.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2021.png)

```jsx
let difference = function(setA, setB){
 let differenceSet = new Set();
 for (let x of setA){
	 if (!setB.has(x)){ 
		 differenceSet.add(x);
	 }
 }
 return differenceSet;
};
let differenceAB = difference(setA, setB);
```

## Referencia

[https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set)

# Diccionarios y Hash Tables

## Introducción

Los Sets, Dictionaries (diccionarios), y Hashes almacenan valores únicos. En un Set nos interesa en valor mismo como elemento primario. En un **Diccionario** o **Mapa**, almacenamos valores en pares como `[llave, valor]`.

Un **diccionario** o **mapa**, es usado para almacenar colecciones de elementos de pares `[llave, valor]`. 

Implementaciones en ES6+:

- `Map`
- `WeakMap`
- `WeakSet`

Un objeto realmente no es un hashmap: [https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent](https://stackoverflow.com/questions/368280/javascript-hashmap-equivalent)
Por qué no usar Objetos como Hash Maps
[https://medium.com/better-programming/stop-using-objects-as-hash-maps-in-javascript-9a272e85f6a8](https://medium.com/better-programming/stop-using-objects-as-hash-maps-in-javascript-9a272e85f6a8)

# Implementación de un Diccionario

Métodos

- `set(key, value)`
- `delete(key)`
- `has(key)`
- `get(key)`
- `clear()`
- `size()`
- `keys()`
- `values()`

**Código**

Esta implementación está basada en el `Map` de ES6

```jsx
function Dictionary(){
 var items = {};

	this.has = function(key){
	 return key in items;
	};

	this.set = function(key, value){
	 items[key] = value; 
	};

	this.delete = function(key){
	 if (this.has(key)){
		 delete items[key];
		 return true;
	 }
	 return false;
	};
	this.get = function(key) {
	 return this.has(key) ? items[key] : undefined;
	};

	this.values = function(){
	 var values = [];
	 for (var k in items) { 
		 if (this.has(k)) {
			 values.push(items[k]); 
		 }
	 }
	 return values;
	};

	this.keys = function(){
	 return Object.keys(items);
	};
	
	this.getItems = function(){
	 return items;
	}
}

// Usage
let dictionary = new Dictionary();
dictionary.set('Héctor', 'hector@gdgunam.com');
dictionary.set('Mau', 'mau@gdgunam.com');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Mau'));

dictionary.delete('Héctor');
```

## Ver más sobre `Map`

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared)

[https://v8docs.nodesource.com/node-0.8/db/d85/classv8_1_1_object.html](https://v8docs.nodesource.com/node-0.8/db/d85/classv8_1_1_object.html)

## Hash Tables

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2022.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2022.png)

Una tabla hash es una estructura de datos de tamaño fijo en la que el tamaño se define al principio. Esto explica cómo funcionan las tablas hash al centrarse en el hash, el método de generar una clave única.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2023.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2023.png)

En pocas palabras, una tabla hash es análoga a una matriz cuyo índice se calcula con una función (función de hash) para identificar un espacio en la memoria de forma única.

Características de un 'hasheo'

- Determinísta: Llaves iguales producen hashes iguales.
- Eficiente: Deben ser O(1) de tiempo.
- Distribución Uniforme: Uso uniforme del array.

**¿Por qué un hash table?** La magia está en inserción y búsqueda en O(1).

### Ejemplo de hasheo:

- Por números primos. P.ej. : Usar módulo 11 como nuestra función hash.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2024.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2024.png)

```jsx
{key:7, value: "hi"}
{key:24, value: "hello"}
{key:42, value: "sunny"}
{key:34, value: "weather"}

Prime number: 11
S
7 % 11 = 7
24 % 11 = 2
42 % 11 = 9
34 % 11 = 1
```

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2025.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2025.png)

**¿Colisiones?**

```jsx
Modulus: 11
 4 % 11 = 4
 7 % 11 = 7
 9 % 11 = 9
 15 % 11 = 4
```

Se pueden ver colisiones con 15 y 4 dando la misma clave; el manejo de esta colisión se encuentra más adelante en este capítulo. Lo importante aquí es que el módulo por números primos es la mejor distribución para un tamaño fijo. 

- **Probing (sondeo)**

Para evitar las colisiones que se producen, la técnica de hashing por sondeo busca el siguiente índice disponible en la matriz.

Algunos tipos de probing:

- Linear Probing

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2026.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2026.png)

La principal desventaja del sondeo lineal es que crea fácilmente clústeres, que son malos porque crean más datos para iterar.

- Quadratic Probing

El sondeo cuadrático es una buena técnica para abordar el problema del clúster. El sondeo cuadrático usa cuadrados perfectos en lugar de incrementar en 1 cada vez, y esto ayuda a distribuir uniformemente entre los índices disponibles

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2027.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2027.png)

- Double Hashing

Otra excelente manera de distribuir uniformemente las claves es tener una segunda función de hash que calcula el resultado del original.

Encuentra una implemetación de una hash table con probin lineal en el repositorio.

# Trees

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2028.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2028.png)

Una estructura de datos de **árbol general** se compone de nodos con nodos secundarios. El primer nodo superior se llama nodo raíz. Entre los tipos de árboles encontramos árboles binarios, árboles de búsqueda binaria (binary trees) y árboles de búsqueda binaria autoequilibrados (self-balancing binary trees).

## Implementación más simple

```jsx
function TreeNode(value) {
	this.value = value;
	this.children = [];
}
```

TODO: Altura, leaft node, etc.

## Binary Tree

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2029.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2029.png)

Un árbol binario es una árbol que solo tiene dos nodos hijos.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2030.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2030.png)

**Implementación**

```jsx
function BinaryTreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree() {
	this._root = null;
}
```

## Tree Traversal (Recorridos)

El recorrido a través de una matriz es simple: accedes al árbol usando el índice e incrementas el índice hasta que el índice alcanza el límite de tamaño. 

Con los árboles, se **deben seguir los punteros izquierdo y derecho para pasar por todos los elementos del árbol**. 

Hay varias formas de hacerlo, por supuesto; Las técnicas de recorrido más populares son el recorrido de preorden, el recorrido de postorder, el recorrido en orden y el recorrido por orden de nivel.

### Pre-order Traversal

Pre-order traversal visita los nodos en el siguiente orden: raíz (el nodo actual), izquierda, derecha.

Resultado: `[42, 41, 10, 40, 50, 45, 75]`

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2031.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2031.png)

### In-Order Traverasal

In-order traversal visita los nodos en el siguiente orden: izquierda, raíz (nodo actual), derecha.

Resultado:`[10, 41, 40, 42, 45, 50, 75]`

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2032.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2032.png)

### Post-Order Traversal

Post-order traversal visita los nodos en el siguiente orden: izquierda, derecha, raíz (el nodo actual)

Resultado:`[10, 40, 41, 45, 75, 50, 42]`.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2033.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2033.png)

### Level-Order Traversal

Visita cada nivel de nodo por nivel en lugar de profundizar en la izquierda o la derecha. También conocido como búsqueda en amplitud (Breadth First Search BFS).

Resultado:`[42, 41, 50, 10, 40, 45, 75]`.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2034.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2034.png)

### Resumen

Si se sabe que se necesita explorar las raíces antes de inspeccionar las hojas, elije el pre-order traversal porque encontrarás todas las raíces antes que todas las hojas.
Si sabe que se necesita explorar todas las hojas antes que cualquier nodo, elija post-order traversal porque no se pierde tiempo inspeccionando raíces cuando busca hojas.
Si se sabe que el árbol tiene una secuencia inherente en los nodos y desea aplanar el árbol en su secuencia original, entonces debe usar un in-order traversal.

**Time Complexity**: O(n)
La complejidad del tiempo de cualquiera de estos recorridos es la misma porque cada recorrido requiere que se visiten todos los nodos.

## Algunos problemas

Maximum depth of a Binary Tree

[https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Check if three is mirror from other

[https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)

Lowest Common Ancestor of a Binary Tree

[https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

Find All Distance Nth Nodes From Root

[https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)

## Siguientes pasos con Trees

- Binary Search Tree
- AVL
- Self Balancing Tree

# Otros ADTs

- Heaps

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2035.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2035.png)

- Tries

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2036.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2036.png)

- Graphs

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2037.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2037.png)

# Algorithms

**Búsqueda y Ordenamiento**

Búsqueda se refiere a los elementos de la estructura de datos para recuperar algunos datos. Ordenamiento se refiere a poner en orden los elementos de la estructura de datos. 

# Search

### Linear Search

Una búsqueda lineal funciona al pasar por cada elemento del arreglo un índice tras otro secuencialmente.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2038.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2038.png)

```jsx
function linearSearch(array,n){
 for(var i=0; i<array.length; i++) {
	 if (array[i]==n) {
		return true;
		}
	}
	return false;
}
```

### Binary Search

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2039.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2039.png)

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2040.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2040.png)

La búsqueda binaria es un algoritmo de búsqueda que funciona con datos ordenados. 

A diferencia de la búsqueda lineal, en la que se verifican todos los elementos de la matriz, las búsquedas binarias pueden verificar el valor medio para ver si el valor deseado es mayor o menor que él. Si el valor deseado es menor, este algoritmo puede buscar en las partes más pequeñas, o puede buscar en las partes más grandes si el valor deseado es mayor.

```jsx
function binarySearch(array, n) {
  var lowIndex = 0,
    highIndex = array1.length - 1;

  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4], 4)); 
console.log(binarySearch([1, 2, 3, 4], 5));
```

## Ordenamiento

### Compendio de complejidades de ordenamiento

[Untitled](https://www.notion.so/03a12793c9a34aceb1187921b684f39a)

### Bubble Sort

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2041.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2041.png)

El Ordenamiento Burbuja es el algoritmo de clasificación más simple. Simplemente itera sobre toda la matriz e intercambia elementos si uno es más grande que el otro.

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2042.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2042.png)

**Implementación**

```jsx
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]
```

### Mergesort

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2043.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2043.png)

Mergesort funciona dividiendo la matriz en submatrices hasta que cada matriz tenga un elemento. Luego, cada subarreglo se concatena (fusiona) en un orden ordenado.

```jsx
function merge(leftA, rightA) {
  var results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  // add remaining to resultant array
  return [...results, ...leftRemains, ...rightRemains];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array; // Base case: array is now sorted since it's just 1 element
  }

  var midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

```

# ~~Recursión~~ Recursividad

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2044.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2044.png)

En matemáticas, lingüística y arte, la recursividad se refiere a la ocurrencia de una cosa definida en términos de sí misma. En informática, una función recursiva es una función que se llama a sí misma.

Las funciones recursivas suelen ser elegantes y resuelven problemas complejos mediante el método de "divide y vencerás".

### Cómo hacer recursividad

Cuando las funciones recursivas se implementan incorrectamente, causa problemas fatales porque el programa se atasca y no termina. Las llamadas recursivas infinitas dan como resultado un desbordamiento de pila.
El desbordamiento de la pila se produce cuando el número máximo de pilas de llamadas del programa supera la cantidad limitada de espacio de direcciones (memoria).

1. **Base Case (Caso Base)**

En recursividad, debe haber un caso base (también denominado caso de terminación). Debido a que los métodos recursivos se llaman a sí mismos, nunca se detendrán a menos que se alcance este caso base.
El desbordamiento de pila (**stack-overflow**) de la recursividad es probablemente el resultado de no tener un caso base adecuado. En el caso base, no hay llamadas de función recursivas.

```jsx
function countDownToZero(n) {
  // base case. Stop at 0
  if (n < 0) {
    return; // stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1); // count down 1
  }
}
countDownToZero(12);
```

**2. Método Divide y Vencerás (Divide And Conquer)**

En informática, el método de divide y vencerás es cuando un problema se resuelve resolviendo todos sus componentes más pequeños.

### **Ejemplo Clásico: Fibonacci**

`1, 1, 2, 3, 5, 8, 13, 21 …`

**Método Iterativo**

```jsx
function getNthFibo(n) {
  if (n <= 1) return n;
  var sum = 0,
    last = 1,
    lastlast = 0;

  for (var i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
}
```

**Método con recursividad**

```jsx
function getNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
}
```

¿Qué está mal con esta implementación?

¿Es mejor que la iterativa?

**Explicación**:

**Base case**: El caso base de la secuencia de Fibonacci es que el primer elemento es 1.
**Divide and conquer**: Por definición de la secuencia de Fibonacci, el número N de Fibonacci es la suma de los números de Fibonacci (n-1) y (n-2). Sin embargo, esta implementación tiene una complejidad temporal de O (2 ^ n).

### Serie de Fibonacci en Cola de Recursividad

Una función recursiva de cola es una función recursiva en la que la llamada recursiva es la última cosa ejecutada en la función.

```jsx
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastlast + last);
}
```

**Time Complexity: O(n)**
A lo más, esta función se ejecuta n veces porque se reduce en n-1 cada vez con una sola llamada recursiva.
**Space Complexity: O(n)** 

La complejidad del espacio también es O (n) debido a la llamada de pila utilizada para esta función.

### El CallStack

Cuando una función recursiva se llama a sí misma, ocupa memoria, y esto es realmente importante en el análisis de la complejidad del espacio Big-O.

```jsx
function printNRecursive(n) {
  console.log(n);
  if (n > 1) {
    printNRecursive(n - 1);
  }
}
printNRecursive(10);
```

![DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2045.png](DS-A%20Workshop%20@GDGUNAM%207793c867ddaf40018cafd4db91b3343e/Untitled%2045.png)

- **¿Cuál es el máximo límite del Call Stack?**

    # **Mozilla Firefox**

    - 3.6: 3000
    - 4.0: 9015
    - 19: 52458
    - 42: 281810

    # **Google Chrome**

    - 14: 26177
    - 15: 26168
    - 47: 20878
    - 51: 41753

    # **Safari**

    - 4: 52426
    - 5: 65534
    - 9: 63444

### Problemas de recursividad

PRINT ALL PERMUTATIONS OF AN ARRAY

[https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)

```jsx
var permute = function(nums) {
     const result = [], temp = [];

    findPermutations(temp, nums, result);
    return result;
};

const findPermutations = (temp, nums, result) => {
    // Base Case
    if(!nums.length){
        // We have a solution
        result.push([...temp])
        return;
    }

    // Pick different numbers from nums & make recursive call
    for(let i = 0; i < nums.length; i++){
        const newElem = nums[i];
        // Add to picked numbers
        temp.push(newElem);
        // Update numbers left in nums & make recursive call
        nums.splice(i , 1);
        findPermutations(temp, nums, result);
        // reset temp
        temp.pop();
        nums.splice(i , 0, newElem);
    }
}
```

WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME

[https://leetcode.com/problems/valid-palindrome/](https://leetcode.com/problems/valid-palindrome/)

# Siguientes Pasos

## Consejos

- Ponte una meta en tiempo y temas
- Practica todos los días
- Ingresa a una competencia: Google HashNode o KickStart, Leetcode Monthly Challenge.

## Explora implementaciones

[https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

[https://github.com/loiane/javascript-datastructures-algorithms](https://github.com/loiane/javascript-datastructures-algorithms)

## Practicar y aprender

Recomendaciones

- InterviewBit (contenido)
- [geeksforgeeks.org](http://geeksforgeeks.org/) (contenido)
- Leetcode (contenido y plataforma)
- HackerRank (plataforma)

Otros

- Exercism
- KhanAcademy
- MIT OCW
- Coursera, EdX

Otros libros 

- Skiena
- Cormen
- Sedgewick

Otro cursos

### Entrevistas

- Los anteriores
- InterviewCake (1 semana de prueba + 3 semanas gratis por GitHub Dev. Students Pack)
- Prampt (agenda entrevistas)