// ===========================================================
// ELEMENT CLASSES

// return a string of all classes (string being the key word)
// wuold be much nicer to return a list
// but I digress
// first select the class and assign it to a variable
// const mainHeading = document.querySelector('#main-heading');
//
// // then get a list of all the classes and store in a variable
// const listOfClasses = mainHeading.className;
//
// // convert the space separated classes into an array
// const arrayOfClasses = listOfClasses.split(' ');
//
// // display the array in the console
// console.log(arrayOfClasses);
//
// // replace existing classes with this new class
// mainHeading.className = "im-the-new-class";

// ===========================================================
// ELEMENT CLASSES
// use the .classList property instead for more gooder results

// example 1
// const mainHeading = document.querySelector('#main-heading');
// const listOfClasses = mainHeading.classList;
// console.log(listOfClasses);

// example 2
// const heading = document.querySelector('h1');
// heading.classList.contains('main-heading');
// heading.classList.add('ice-cream');

// ===========================================================
// APPEND A CHILD

// Append a Child to a Parent Element
// const newHeading = document.createElement('h1');
// newHeading.textContent = "New Heading!";
// const mainHeading = document.querySelector('h1');
// mainHeading.appendChild(newHeading);


// const newPara = document.createElement('p');
// const textOfParagraph = document.createTextNode('New paragraph...');
// myPara.appendChild(textOfParagraph);
// document.body.appendChild(newPara);


// const myPara = document.createElement('p');
// myPara.textContent = 'I am the text for the paragraph!';
// document.body.appendChild(myPara);

// ===========================================================
// INSERT ADJACENT HTML

// const mainHeading = document.querySelector('#main-heading');
// const htmlTextToAdd = '<h2>Windows 10</h2>';
// mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);


// const mainHeading = document.querySelector('h1');
// mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

// ===========================================================
// SELECT AND STYLE THINGS

// first, select the h1 and assign it to a variable
// const mainHeading = document.querySelector('h1');

// now attach the variable to nextElementSibling.setAttribute and somehow try to memorize all of this
// mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// now that you've created an ID, use it to access the element and make a style change and somehow memorize this line in addition to the previous line. I guess this will all eventually burn itself into my brain. 😜
// document.querySelector('#heading-sibling').style.backgroundColor = 'red';

// or just use this line instead
// mainHeading.nextElementSibling.style.backgroundColor = 'red';
