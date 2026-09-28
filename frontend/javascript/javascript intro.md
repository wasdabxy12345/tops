**javascript intro**



it is a high level OOPS programming language

it is an interpretive language i.e., it executes code line by line

used on both sides - front and back end

frameworks:

&#x09;angular (library - react js)

&#x09;react js

&#x09;node js



it is event based eg. onclick, on key up



it uses object which are like key-value pairs in java or dictionaries in python







framework vs library: framework is part of a library







**user input and functions**



functions: block of code that we can run again and again



there are 2 type of functions:

1. inbuild (eg. console.log, document.write, len)
2. user-defined



4 types of functions:

1. function without parameter and without return type -> default function
2. function without parameter and with return type
3. function with parameter and without return type
4. function with parameter and with return type



2 steps:

1. definition
2. call -> access







**arrays**

it is a collection of similar data types in single variable



index always starting from zero



arr.push(10,11) -> adds 10 and 11 to the end of array

arr.pop() -> removes the last element from the array



**forEach loop**

it is used to loop through arrays and objects



eg.

numbers = \[1,2,3,4,5];

numbers.forEach(

|for loop|forEach loop|
|-|-|
|it is one of the original ways of iterating over an array|it is a newer way with lesser code to iterate over an array|
|it is faster in performance|it is slower than the traditional loop in performance|
|the break statement can be user to come out from the loop|the break statement cannot be used because of the callback function|
|the parameters are the iterator, counter, and incrementor|the paramenters are the iterator, index of item, and array to iterate|









**dsa**



when we usually code, our only focus is only on output, but in many industries, it is crucial to make the code as efficient as possible while maintaining the same output. that's why we use dsa.



complexity: how complex is it to run a code

2 types:

&#x09;1. time complexity: time taken by code to run (no. of loops)

&#x09;2. space complexity: amount of storage taken by code (no. of variables)



there are 3 types of codes:

&#x09;1. best: omega

&#x09;2. avg: alpha

&#x09;3. worst: big 'O' notation



time complexity: if a code requires 'n' no. of loops, its time complexity is O(N)

space complexity: if a code requires 'n' no. of variables, its space complexity is O(N)



always priotize time complexity over space complexity



**check out space and time complexity log table**









**OOPS (Object Oriented Programming)**



5 concepts:

1. class-object
2. inheritance
3. polymorphism
4. encapsulation
5. abstraction



access specifiers

method - function

function - independently

method - obj permission



1. **class-object**



class syntax: class \[class\_name] {}

object syntax: \[object\_name] = new \[class\_name()]



**2. inheritance**



when 1 class derived the properties into another class it is called inheritance



5 types:

1. single:	a -> b
2. multilevel:	a -> b -> c
3. multiple	not supported
4. hierarchy:	a -> b, a -> c
5. hybrid	not supported



**3. polymorphism**



poly - many

morphism - forms

polymorphism - many forms



multiple work - single name

method - diff

method - same - overload - 1 - work - multiple - overload - output -



2 types:

1. method overloading - not supported
2. method overriding - supported



**4. encapsulation**



data binding into a single entity it is called encapsulation



capsule -



* pointer : that stores the address of another variable



this pointer



\-----------------------------------------------------------------------



**arrow function**



function syntax: const myfun = () => {}



\----------------------------------------------------------------------



**API**: Application Programming Interface



multiple types:

1. 3rd party api: website - software - 3rd party - api; eg. flipkart - payment - gpay, ppay, razorpay - key - website - integrate - js - api key
2. 1st party api: apis created by us. eg. for communicating between different frameworks



json -> object

object -> json



transferred using HTTP. it has following crud methods:

1. get - fetch
2. put - create
3. push - update
4. delete - delete
5. patch - partial update (less used as push supports this functionality)



\-----------------------------------------------------------------------------



**constructor**



it is special method that call when object is created



3 types:

1. default
2. parametrize
3. copy?



eg.

class My {

&#x09;constructor() {

&#x09;	console.log('constructor called automatically when its class's object is created')

&#x09;}

}



obj = new My()



\---------------------------------------------------------------------------------



tasks:

&#x09;make hover table using bootstrap

&#x09;make grid system using row-col

&#x09;form with validation

&#x09;layout with cards



\--------------------------------------------------------------------------------



### ES6



set date functions:

a. set date/time:

1. setDate()
2. setFullYear()
3. setMonth() + 1
4. setHours()
5. setMinutes()
6. setSeconds()



date format functions:

1. toLocaleDateString(): formats date to local format \[28/09/2026]
2. toLocaleTimeString(): formats time to local format \[09:12:13 AM]
3. toLocaleString(): format both to local format \[28 Aug 2028]
4. toDateString():
5. \[iso]



dialog box:

1. alert(): shows an alert box with an 'ok' button. used to show that a particular task is done.
2. confirm(): shows an 'ok' and a 'cancel' button and returns a Boolean. used as a confirmation for a task.
3. prompt(): same as confirm() but with a text box. used to get input from user.



\-------------------------

**dom manipulation**

1. getElementsByName(): returns all elements having the given name value
2. getElementsByTagName(): returns all elements having the given tag name (eg. 'h1', 'p', etc)
3. getElementsByClassName(): returns all elements having the given class name (eg. 'btn')
4. document.forms\["myform"]\["ufn"].value



querySelector('p') // only selects 1st p tag

querySelector('#example') // only selects 1st example class

querySelector('.example') // only selects 1st example id

querySelectorAll('p') // selects all p tags



\------------------------------

**object creation methods**

1. by object literal: var \[obj\_name] = {\[key1]: \[value], \[key2]: \[value2], ...}
2. by creating instance of object directly (using new keyword): var \[obj\_name] = new object(); \[obj\_name].\[key1] = \[value1]; ...
3. by using an object constructor (using new keyword): function \[funame](\[key1], ...) { this.\[locVar1] = \[key1]; ...} var obj1 = new \[funName](val1, ...);



accessing each key: for (\[locVar] in \[objName]) console.log(locVar)



accessing each





\-------------------------------

**web services:** used to exchange data between different techs



JSON.parse(\[jsonVar]); // convert json to obj

JSON.stringify(\[objVar]); // convert obj to json



get data from api:

fetch('\[url]')

&#x09;.then((res) => res.json())

&#x09;.then((obj) => {

&#x09;			console.log(obj);

&#x09;			for(data of obj) document.write(`ID: ${data.id}, Title: ${data.title} <br>`);

&#x09;		}

&#x09;	);



\-----------------------------------------------------------

### reactJS

it is a JS library used for building reusable UI components.



instead of manipulating the browser's DOM directly, react creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.



It can be used to build single-page apps.



it enables us to create reusable UI components



\------------

**steps**

install nodejs and npm

confirm installation by checking their versions

install create-react-app: 'npm -g install create-react-app'

open destination folder in vs code

create new project: 'create-react-app *project-name*'

install es7+ ext. by dsznajder and html to jsx by riaz lascar

run 'npm install' to get back node\_modules



\------------

**folder structure**

1. node\_modules/: contains 3rd party dependencies.
2. public/index.html: main file that browser reads. public/ contains all files browser accesses such as media files.
3. src/index.js: main js file that index.html calls. src/ contains all components.
4. package.json: contains info about all dependencies and stuff
5. package-lock.json: auto generated files containing info about the exact versions of dependencies



\-----------

in a react project:

&#x09;html and css code in header of index.html

&#x09;js code inside body at the end of index.html

&#x09;assets in public folder



props:

&#x09;func: component

&#x09;parameters: props

&#x09;to use props' values in class, use this.props.\[props\_name]

