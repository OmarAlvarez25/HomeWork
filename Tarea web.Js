°Array.at()
//El at()método toma un valor entero y devuelve el elemento en ese índice,
//lo que permite números enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último elemento de la matriz.
	const array1 = [5, 12, 8, 130, 44];

	let index = 2;
	
	console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
	// Expected output: "Using an index of 2 the item returned is 8"
	
	index = -2;
	
	console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
	// Expected output: "Using an index of -2 item returned is 130"
concat()
//El concat()método se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.
	const array1 = ['a', 'b', 'c'];
	const array2 = ['d', 'e', 'f'];
	const array3 = array1.concat(array2);

	console.log(array3);
	// Expected output: Array ["a", "b", "c", "d", "e", "f"]

°contructor: Array()
	new Array(element0, element1, /* … ,*/ elementN)
	new Array(arrayLength)
	
	Array(element0, element1, /* … ,*/ elementN)
	Array(arrayLength)

°copyWithin()
//El copyWithin()método copia superficialmente parte de una matriz a otra ubicación en la misma matriz y la devuelve sin modificar su longitud.
	const array1 = ['a', 'b', 'c', 'd', 'e'];

	// Copy to index 0 the element at index 3
	console.log(array1.copyWithin(0, 3, 4));
	// Expected output: Array ["d", "b", "c", "d", "e"]
	
	// Copy to index 1 all elements from index 3 to the end
	console.log(array1.copyWithin(1, 3));
	// Expected output: Array ["d", "d", "e", "d", "e"]
°Array.entries()
//El entries()método devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
	const array1 = ['a', 'b', 'c'];
	
	const iterator1 = array1.entries();
	
	console.log(iterator1.next().value);
	// Expected output: Array [0, "a"]
	
	console.log(iterator1.next().value);
	// Expected output: Array [1, "b"]
°Array.every()
//El every()método prueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.
	const isBelowThreshold = (currentValue) => currentValue < 40;

	const array1 = [1, 30, 39, 29, 10, 13];
	
	console.log(array1.every(isBelowThreshold));
	// Expected output: true
°Array.fill()
//El fill()método cambia todos los elementos de una matriz a un valor estático, desde un índice inicial (predeterminado 0) hasta un índice final (predeterminado array.length).
//Devuelve la matriz modificada.
	const array1 = [1, 2, 3, 4];

	// Fill with 0 from position 2 until position 4
	console.log(array1.fill(0, 2, 4));
	// Expected output: Array [1, 2, 0, 0]

	// Fill with 5 from position 1
	console.log(array1.fill(5, 1));
	// Expected output: Array [1, 5, 5, 5]
	
	console.log(array1.fill(6));
	// Expected output: Array [6, 6, 6, 6]
°Array.filter()
//El filter()método crea una copia superficial de una parte de una matriz dada, 
//filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.
	const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

	const result = words.filter(word => word.length > 6);
	
	console.log(result);
	// Expected output: Array ["exuberant", "destruction", "present"]
°Array.find()
//El find()método devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada.
//Si ningún valor satisface la función de prueba, undefinedse devuelve.
	const array1 = [5, 12, 8, 130, 44];

	const found = array1.find(element => element > 10);
	
	console.log(found);
	// Expected output: 12
°Array.findIndex()
//El findIndex()método devuelve el índice del primer elemento de una matriz que satisface la función de prueba proporcionada.
// Si ningún elemento satisface la función de prueba, se devuelve -1.
	const array1 = [5, 12, 8, 130, 44];

	const isLargeNumber = (element) => element > 13;
	
	console.log(array1.findIndex(isLargeNumber));
	// Expected output: 3
°Array.findLast()
//El findLast()método itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada.
// Si ningún elemento satisface la función de prueba, undefinedse devuelve.
	const array1 = [5, 12, 50, 130, 44];
	
	const found = array1.findLast((element) => element > 45);
	
	console.log(found);
	// Expected output: 130
°Array.findLastIndex()
//El findLastIndex()método itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada.
//Si ningún elemento satisface la función de prueba, se devuelve -1.
	const array1 = [5, 12, 50, 130, 44];

	const isLargeNumber = (element) => element > 45;
	
	console.log(array1.findLastIndex(isLargeNumber));
	// Expected output: 3
	// Index of element with value: 130
°Array.flat()
//El flat()método crea una nueva matriz con todos los elementos de la submatriz concatenados recursivamente hasta la profundidad especificada.
	const arr1 = [0, 1, 2, [3, 4]];
		
	console.log(arr1.flat());
	// Expected output: Array [0, 1, 2, 3, 4]
	
	const arr2 = [0, 1, 2, [[[3, 4]]]];
	
	console.log(arr2.flat(2));
	// Expected output: Array [0, 1, 2, Array [3, 4]]
°Array.flatMap()
//El flatMap()método devuelve una nueva matriz formada al aplicar una función de devolución de llamada determinada a cada elemento de la matriz y luego aplanar el resultado en un nivel. 
//Es idéntico a map()seguido de a flat()de profundidad 1 ( arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por separado.	
	const arr1 = [1, 2, [3], [4, 5], 6, []];
	
	const flattened = arr1.flatMap(num => num);
	
	console.log(flattened);
	// Expected output: Array [1, 2, 3, 4, 5, 6]
°Array.forEach()
//El forEach()método ejecuta una función proporcionada una vez para cada elemento de la matriz.
	const array1 = ['a', 'b', 'c'];
	
	array1.forEach(element => console.log(element));
	
	// Expected output: "a"	
	// Expected output: "b"
	// Expected output: "c"
°Array.includes()
//El includes()método determina si una matriz incluye un determinado valor entre sus entradas, devolviendo trueo falsesegún corresponda.
	const array1 = [1, 2, 3];	

	console.log(array1.includes(2));
	// Expected output: true
	
	const pets = ['cat', 'dog', 'bat'];
	
	console.log(pets.includes('cat'));
	// Expected output: true
	
	console.log(pets.includes('at'));
	// Expected output: false
°Array.indexOf()
//El indexOf()método devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
	const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

	console.log(beasts.indexOf('bison'));
	// Expected output: 1
	
	// Start from index 2
	console.log(beasts.indexOf('bison', 2));
	// Expected output: 4
	
	console.log(beasts.indexOf('giraffe'));
	// Expected output: -1
°Array.join()
//El join()método crea y devuelve una nueva cadena concatenando todos los elementos en una matriz (o un objeto similar a una matriz ), 
//separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.
	const elements = ['Fire', 'Air', 'Water'];
	
	console.log(elements.join());
	// Expected output: "Fire,Air,Water"

	console.log(elements.join(''));
	// Expected output: "FireAirWater"

	console.log(elements.join('-'));
	// Expected output: "Fire-Air-Water"
°Array.keys()
//El keys()método devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice de la matriz.
	const array1 = ['a', 'b', 'c'];
	const iterator = array1.keys();
	
	for (const key of iterator) {
	  console.log(key);
	}
	
	// Expected output: 0
	// Expected output: 1
	// Expected output: 2
°Array.lastIndexOf()
//El lastIndexOf()método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz,
// o -1 si no está presente. La matriz se busca hacia atrás, comenzando en fromIndex.
	const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

	console.log(animals.lastIndexOf('Dodo'));
	// Expected output: 3

	console.log(animals.lastIndexOf('Tiger'));
	// Expected output: 1
°Array.map()
//El map()método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.
	const array1 = [1, 4, 9, 16];

	// Pass a function to map
	const map1 = array1.map(x => x * 2);

	console.log(map1);
	// Expected output: Array [2, 8, 18, 32]
°Array.pop()	
//El pop()método elimina el último elemento de una matriz y devuelve ese elemento. Este método cambia la longitud de la matriz.
	const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

	console.log(plants.pop());
	// Expected output: "tomato"

	console.log(plants);
	// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
	
	plants.pop();
	
	console.log(plants);
	// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
°Array.push()
//El push()método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.
	const animals = ['pigs', 'goats', 'sheep'];

	const count = animals.push('cows');
	console.log(count);
	// Expected output: 4
	console.log(animals);
	// Expected output: Array ["pigs", "goats", "sheep", "cows"]
	
	animals.push('chickens', 'cats', 'dogs');
	console.log(animals);
	// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
°Array.reduce()
//El reduce()método ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada elemento de la matriz, en orden,
// pasando el valor de retorno del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un valor único.

//La primera vez que se ejecuta la devolución de llamada no hay "valor de retorno del cálculo anterior". Si se proporciona, se puede utilizar un valor inicial en su lugar. 
//De lo contrario, el elemento de la matriz en el índice 0 se usa como valor inicial y la iteración comienza desde el siguiente elemento (índice 1 en lugar del índice 0).

//Quizás el caso más fácil de entender reduce()es devolver la suma de todos los elementos en una matriz:
	const array1 = [1, 2, 3, 4];

	// 0 + 1 + 2 + 3 + 4
	const initialValue = 0;
	const sumWithInitial = array1.reduce(
	  (accumulator, currentValue) => accumulator + currentValue,
	  initialValue
	);
	
	console.log(sumWithInitial);
	// Expected output: 10
°Array.reduceRight()
//El reduceRight()método aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor.
	const array1 = [[0, 1], [2, 3], [4, 5]];
	
	const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
	
	console.log(result);
	// Expected output: Array [4, 5, 2, 3, 0, 1]
°Array.reverse()
//El reverse()método invierte una matriz en su lugar y devuelve la referencia a la misma matriz, 
//el primer elemento de la matriz ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, 
//el orden de los elementos en el arreglo estará girado hacia la dirección opuesta a la establecida anteriormente.
	const array1 = ['one', 'two', 'three'];
	console.log('array1:', array1);
	// Expected output: "array1:" Array ["one", "two", "three"]
	
	const reversed = array1.reverse();
	console.log('reversed:', reversed);
	// Expected output: "reversed:" Array ["three", "two", "one"]
	
	// Careful: reverse is destructive -- it changes the original array.
	console.log('array1:', array1);
	// Expected output: "array1:" Array ["three", "two", "one"]
°Array.shift()
//El shift()método elimina el primer elemento de una matriz y devuelve ese elemento eliminado. Este método cambia la longitud de la matriz.
	const array1 = [1, 2, 3];

	const firstElement = array1.shift();	

	console.log(array1);
	// Expected output: Array [2, 3]
	
	console.log(firstElement);
	// Expected output: 1
°Array.slice()
//El slice()método devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionado
// desde starthasta end ( endno incluido) donde starty endrepresenta el índice de elementos en esa matriz. La matriz original no se modificará.
	const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
	
	console.log(animals.slice(2));
	// Expected output: Array ["camel", "duck", "elephant"]
	
	console.log(animals.slice(2, 4));
	// Expected output: Array ["camel", "duck"]
	
	console.log(animals.slice(1, 5));
	// Expected output: Array ["bison", "camel", "duck", "elephant"]
	
	console.log(animals.slice(-2));
	// Expected output: Array ["duck", "elephant"]
	
	console.log(animals.slice(2, -1));
	// Expected output: Array ["camel", "duck"]
	
	console.log(animals.slice());
	// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
°Array.some()
//El some()método prueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada. 
//Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve verdadero; de lo contrario, devuelve falso. No modifica la matriz.
	const array = [1, 2, 3, 4, 5];

	// Checks whether an element is even
	const even = (element) => element % 2 === 0;
	
	console.log(array.some(even));
	// Expected output: true
°Array.sort()
//El sort()método ordena los elementos de una matriz en su lugar y devuelve la referencia a la misma matriz, ahora ordenada. 
//El orden de clasificación predeterminado es ascendente, basado en convertir los elementos en cadenas y luego comparar sus secuencias de valores de unidades de código UTF-16.

//La complejidad de tiempo y espacio del tipo no se puede garantizar ya que depende de la implementación.

	const months = ['March', 'Jan', 'Feb', 'Dec'];
	months.sort();
	console.log(months);
	// Expected output: Array ["Dec", "Feb", "Jan", "March"]
	
	const array1 = [1, 30, 4, 21, 100000];
	array1.sort();
	console.log(array1);
	// Expected output: Array [1, 100000, 21, 30, 4]
°Array.splice()
//El splice()método cambia el contenido de una matriz eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar . 
//Para acceder a parte de una matriz sin modificarla, consulte slice().
	const months = ['Jan', 'March', 'April', 'June'];
	months.splice(1, 0, 'Feb');
	// Inserts at index 1
	console.log(months);
	// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
	
	months.splice(4, 1, 'May');
	// Replaces 1 element at index 4
	console.log(months);
	// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
°Array.toLocaleString()
//El toLocaleString()método devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas usando sus toLocaleStringmétodos
// y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma ",").
	const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
	const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
	
	console.log(localeString);
	// Expected output: "1,a,12/21/1997, 2:12:00 PM",
	// This assumes "en" locale and UTC timezone - your results may vary
°Array.toString()
//El toString()método devuelve una cadena que representa la matriz especificada y sus elementos.
	const array1 = [1, 2, 'a', '1a'];
	
	console.log(array1.toString());
	// Expected output: "1,2,a,1a"
°Array.unshift()
//El unshift()método agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
	const array1 = [1, 2, 3];

	console.log(array1.unshift(4, 5));
	// Expected output: 5
	
	console.log(array1);
	// Expected output: Array [4, 5, 1, 2, 3]
°Array.values()
//El values()método devuelve un nuevo objeto iterador de matriz que itera el valor de cada índice de la matriz.
	const array1 = ['a', 'b', 'c'];
	const iterator = array1.values();

	for (const value of iterator) {
	  console.log(value);
	}
	
	// Expected output: "a"
	// Expected output: "b"
	// Expected output: "c"
