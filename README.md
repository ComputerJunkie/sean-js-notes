# JUST A BUNCH OF NOTES AND THINGS
So as I've been going through the Git and JavaScript lessons, I've been doing a ton of note-taking. I'm writing all my notes in markdown and including them with some HTML, CSS and JS files so I can practice things with Chrome Dev Tools as they come up. If there is anything you find useful here, by all means feel free to fork, clone, star, watch, copy, paste, look at or simply disregard completely. I'm sure these notes won't make much sense to anyone reading them. But maybe there is a bit of code or something here that you might find useful. Anyway, back to the note-taking...

Also, my Git and Linux command notes are in the **notes** folder.


# JavaScript and the DOM
1. Lesson 1 - The Document Object Model
2. Lesson 2 - Creating Content with JavaScript
3. Lesson 3 - Working with Browser Events
4. Lesson 4 - Peformance

# The DOM
Steps that happen...
1. HTML is received
2. HTML tags are converted to tokens
3. Tokens are converted to nodes
4. Nodes are converted to the DOM

Browser parses HTML in a process called tokenization (one character at a time). Tokens are:
* DOCTYPE
* start tag
* end tag
* comment
* character
* end-of-file

# W3C DOM Specifications
* Core Specification
* Events Specification
* Style Specification
* Validation Specification
* Load and Save Specification

### Select a DOM element by it's ID
* It is called on the Document object.
* it returns a single item.

`document.getElementById('main-header');`

Notice how I don't put the `#` in front of the ID tag. It's because it expects the string `main-header` not `#main-header`

* `getElementsByClassName()`
* `getElementsByTagName()`
* `document.getElementsByTagName('p');`

## Node and node (comparing this to a blueprint)

### Interface (the blueprint

Inteface = list of properties and methods that are inherited

* interface = blueprint
* properties = data
* methods = functionality

* Node = Class
  * properties (data
      * color of building
      * number of windows
      * number of doors
  * methods (functionality)
    * alarm system
    * sprinkler system

### Objects that are built from the Node
* node = object

### Practice
`const bodyEl = document.body`
`bodyEl.baseURI`

## The querySelector Method
* `.querySelector()`
* `document.querySelector('#header');` _find and return the element with an ID of "header"_
* `document.querySelector('.header');` _find and return the element with a class of "header"_
* `document.querySelector('header')` _find and return the first <header> element_


Write the `.querySelectorAll()` code to find the first paragraph element that also has a class of: `callout`
`document.querySelector('p.callout');`

Write the `.querySelectorAll()` code to find all paragraph elements that are descendents of elements that have the class: `articles`
`document.querySelectorAll('.articles p')`


### Practice
Select the first element with class `card`
`document.querySelector('.card');`

Assign a variable to it.
`const nanodegreeCard = document.querySelector('.card');`

An Element's Inner HTML (which is a property on an element)
* Every element inherits properties and methods from the Element Interface.
* Every element has an `.innerHTML` property.
* This property represents the markup of the element's content.
* Use this property to get an element's HTML content.
* Set an element's HTML content.

Query the DOM for the first element with the class of `.card` and save it to a variable.
`const card = document.querySelector('.card')`

Now call `.innerHTML` on `card`. It will return the HTML code as a `DOMString`
`card.innerHTML`

Now checkout it's `.textContent`. The `.textContent` property only displays the text of the element.
`card.textContent`
`card.textContent = "Replace the text with other text"`

Or change the inner HTML...
`card.innerHTML = '<a href="#">Hello this is a link</a>'`

Let's change some text on the page. First, select the element and then set it as a variable.
`const heading = $0`
`heading` _to check the html_
`heading.textContent = "Sean Was Here!";` _now change the text_
Or better yet...
`heading.innerHTML = "Sean <em>Was</em> Here!";` _same but with html code in it_

Let's say you hid some of the text using CSS with `display: none;`. Now let's see the difference between these two...
Note: `.textContent` is the preferred to use.
* `card.textContent` _shows all the text, regardless of the CSS_
* `card.innerText` _displays the text as it would be seen visually_


By the way, the `.createElement()` method is a method on the document object. Create a new paragraph element...
`document.createElement('p');`

Create a new span element in a variable...
`const container = document.createElement('span');`
Then give it some text...
`container.textContent = ', right now!';`

That won't actually add anything to the page though. So do this instead...
`const newSpan = document.createElement('span');` _create new span_
`newSpan.textContent = "Right Now!";` _add text_
`const mainHeading = document.querySelector('h1');` _select the first, main heading of the page_
`mainHeading.appendChild(newSpan);` _add the span as the last child element of the main heading_

* creates a paragraph element
* creates a text node
* appends the text node to the paragraph
* appends the paragraph to the tag
```
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
```

Or...
```
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);
```

And what does this do?
The `.appendChild()` method will move an element from its current position to the new position.
```
const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);
```
By default, `.appendChild` method will add element as last child of parent element. Use `.insertAdjacentHTML()` to place the HTML at a specific location.

Here's how we'd call ***.insertAdjacentHTML();***
`element.insertAdjacentHTML(position, text);`
```
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```

Note:

> * `<!-- beforebegin -->` _before the element itself_
> * `<p>`
> *   `<!-- afterbegin -->` _just inside element as first child_
> *   `Existing text/HTML content`
> *   `<!-- beforeend -->` _just inside element after it's last child_
> * `</p>`
> * `<!-- afterend -->` _after the element itself_

## Removing a Child Element with `.removeChild()`

First select the `h1` element and assign it to a variable.
`const mainHeading = document.querySelector('h1');`
Then use the ``.parentElement()`` to move focus to the child element.
`mainHeading.parentElement.removeChild(mainHeading);`
The element uses itself to remove itself from it's parent.



## More examples
Replace an image on the page with a different image.
```
const pageImage = document.getElementById('page-image');
pageImage.src="img/Z.jpg";
```

## And another example
Append a child element to an existing element.
First, create a new element and assign it to a variable...
* `const newHeading = document.createElement('h1');`

Now add text to the new element...
* `newHeading.textContent = "New Heading!";`

Now select the element that will be the parent...
* `const mainHeading = document.querySelector('h1');`

And finally, append the child to the parent element...
* `mainHeading.appendChild(newHeading);`


# Style Page Content
## Rules of CSS Specificity
1. Least specific: Rules in a stylesheet
2. Rules in a <style> tag
3. Rules in a tag's style attribute

Specificity:
* Close style rule is to element, the more specific.
* ID is more specific than class.

```
const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'yellow';
```
Set multiple styles at once...
```
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```

* `const heading = $0` // select an h1
* `heading.style.color = 'orange';` // change it's color to orange
* `heading.style.fontSize = '2em';` // bump up the font size

## Now let's talk about setting an element's attributes

_first, select the h1 and assign it to a variable_
* `const mainHeading = document.querySelector('h1');`

_now attach the variable to nextElementSibling.setAttribute and somehow try to memorize all of this_
* `mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');`

_now that you've created an ID, use it to access the element and make a style change and somehow memorize this line in addition to the previous line. I guess this will all eventually burn itself into my brain. 😜_
* `document.querySelector('#heading-sibling').style.backgroundColor = 'red';`

_or skip the last two lines of code and just use this line instead_
* `mainHeading.nextElementSibling.style.backgroundColor = 'red';`

# Accessing an element's classes

First, let's first use `.className`
* Returns a string of all classes (**string** being the key word).
* Would be much nicer to return a list but I digress...

_first select the class and assign it to a variable_
* `const mainHeading = document.querySelector('#main-heading');`

_then get a list of all the classes and store in a variable_
* `const listOfClasses = mainHeading.className;`

_convert the space separated classes into an array_
* `const arrayOfClasses = listOfClasses.split(' ');`

_display the array in the console_
* `console.log(arrayOfClasses);`

_replace existing classes with this new class_
* `mainHeading.className = "im-the-new-class";`

Next lets use the `.classList` property instead for more gooder results. We do the same thing by first selecting, assigning to a variable and then assigning the list to a variable and then displaying the results in the console. Same thing but less work.
* `const mainHeading = document.querySelector('#main-heading');`
* `const listOfClasses = mainHeading.classList;`
* `console.log(listOfClasses);`

Also, `.classList` has a bunch of it's own properties...
* .add() _add a class to the list_
* .remove() _remove a class from the list_
* .toggle() _add if not there, remove if there_
* .containts() _returns boolean_

You can also add an class...
* `const mainHeading = document.querySelector('h1');` _select_
* `mainHeading.classList.contains('ank-student');` _verify class exists_
* `mainHeading.classList.add('ice-cream');` _add class_
* `mainHeading.classList.add('ice-cream');` _remove_
* `mainHeading.classList.toggle('ice-cream');` _toggle_
