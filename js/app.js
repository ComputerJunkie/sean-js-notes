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


// const mainHeading = document.querySelector('#main-heading');
// const htmlTextToAdd = '<h2>Windows 10</h2>';
// mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);


// const mainHeading = document.querySelector('h1');
// mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';


// first, select the h1 and assign it to a variable
const mainHeading = document.querySelector('h1');

// now attach the variable to nextElementSibling.setAttribute and somehow try to memorize all of this
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// now that you've created an ID, use it to access the element and make a style change and somehow memorize this line in addition to the previous line. I guess this will all eventually burn itself into my brain. 😜
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
