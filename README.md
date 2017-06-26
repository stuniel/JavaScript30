# JavaScript30
30 Day Vanilla JS Challenge

First of all I would like to thank Wes Bos for creating and sharing this amazing course with the community. I would like to use this readme file as a notebook and point out all the things that I learned from these exercises.

<h2>01 - JavaScript Drum Kit</h2>

1. <b>Adding class using JavaScript</b>
</br></br>
In JavaScript we are able to add a class to an element using <code>\*.classList.add()</code> method. We are also able to remove the class with <code>\*.classList.remove()</code> method and toggle(switch) with <code>\*.classList.toggle()</code> method.</br>
<i>Example:</i></br>
This code will add a class of active to a "key" element.</br>
<code>key.classList.add('active');</code></br>
</br></br>
2. <b>KeyCode</b>
</br></br>
Every key has a keyCode that is a number representing the key. It can be accessed with a <code>\*.keyCode</code> method. E.g. "A" key has a keycode of 65 and "Space bar" has a keycode of 32. Here is a usefull website that returns the keycode when the key is pressed: http://keycode.info/.
</br></br>
3. <b>Data attributes</b>
</br></br>
Data attributes allow to store extra informations on html elements. The syntax is easy - <code>data-\*</code>, where <code>\*</code> represents any word. It was created to prevent from creating random attribute names</br>
<i>Example:</i></br>
"data-key" will allow to access this section.</br>
`<div data-key="65" class="key"><div>`</br>
<code>const key = document.querySelector(&#96;audio[data-key="${e.keyCode}"]&#96;);</code>
</br></br>
4. <b>CSS Transition</b>
</br></br>
Transitions allow to change property values smoothly over specified period of time.
<i>Example:</i></br>
This will transition all property values over 1 second:</br>
<code>transition:all 1s;</code></br>
This will transition width property value over 0.5 second:</br>
<code>transition:width 0.5s;</code>
</br></br>
5. <b>Transitionend event</b>
</br></br>
There is a "transitionend" event that is fired when a CSS transition has completed.</br>
<i>Example:</i></br>
The `removeTransition` function will run when the transiotion ends.</br>
<code>key.addEvenetListener('transitionend', removeTransition);</code>
</br></br>

<h2>14 - Object and Arrays - Reference vs Copy</h2>

1. <b>Strings, Numbers and Booleans</b>
</br></br>
Variables can have a value assigned form another value:</br>
<code>let dog = 'Max';</code></br>
<code>let cat = dog;</code></br>
Dog and cat will be `'Max'`. If we change the dog to `'Rex'` the cat will remain `'Max'`. Strings, numbers and booleans will create a copy of itself which will not be affected when the original one changes.
</br></br>
2. <b>Arrays</b>
</br></br>
Arrays on other hand will create a reference which will change when the original one changes.It works the other way as well. </br>
<code>const dogs = ['Max', 'Rex', 'Tex', 'Lex'];</code></br>
<code>const cats = dogs;</code></br>
<code>cats[1] = 'Miau';</code></br>
Dogs will equal <code>dogs = ['Max', 'Miau', 'Tex', 'Lex'];</code>.</br>
We can create a copy of an array by using `*.slice()` method, `[].concat(*)`, `Array.from(*)` or ES6 feature called spread `[...*]`, where `*` represents an array name.
</br></br>
2. <b>Objects</b>
</br></br>
The same thing happen for objects. We can create a copy by using `Object.assign({}, *)`. The thing to keep in mind is that this is 1 level deep so if we have a nested object it will not be affectd by this.
</br></br>

<h2>15 - LocalStorage and Event Delegation</h2>

1. <b>Form - Prevent Default</b>
</br></br>
Form has a <code>.preventDefault()</code> method that prevents the page from reloading when the form is submitted.</br>
<i>Example:</i></br>
<code>function addItem(e) {e.preventDefault();}</code>
</br></br>
2. <b>Form - Reset</b>
</br></br>
Form has also a <code>.reset()</code> method that erases the typed input.</br>
<i>Example:</i></br>
<code>function addItem(e) {this.reset();}</code>
</br></br>
3. <b>Local Storage</b>
</br></br>
Local Storage is an object in a web browser which can store data and when the browser is closed or reloaded this data is still there. It is useful if we want to store some data on client side.</br>
Local storage has some methods. One of them is `.setItem()`.</br>
<i>Example:</i></br>
We need to stringify the object `'items'`, because local storage keeps strings as values.</br>
<code>localStorage.setItem('items', JSON.stringify('items'));</code></br>
Another is `.getItem()`.</br>
<i>Example:</i></br>
<code>localStorage.getItem('items', JSON.parse('items'));</code></br>
Another is `.removeItem()`.</br>
<i>Example:</i></br>
<code>localStorage.removeItem('items', JSON.parse('items'));</code>
</br></br>
4. <b>Event Delegation</b>
</br></br>
Event delegation is a way of responding to events through a single common parent rather than each child. When the children are being added the event listener may not be able to reach them, because the didn't exist when the event was created. Instead we can ask a parent to tell all its children to act when the event listener is acticated.</br>
<i>Example:</i></br>
We have a list with items that appear on click. Instead of listening to each of the children we can listen to the `<ul>` element.
</br></br>

<h2>17 - Sorting Band Names Without Articles</h2>

1. <b>Sort Method - Comparing Functions</b>
</br></br>
Sort is an array method which takes 2 arguments - current element and the next one. It compares them and puts the one that passes the statement before the onether. We are also able to compare functions with these elements as arguments:</br>
<i>Example:</i></br>
<code>array.sort( function(a, b) => strip(a) < strip(b) ? -1 : 1</code>
</br></br>

<h2>21 - Follow Along Links</h2>

1. <b>getBoundingCLientRect()</b>
</br></br>
getBoundingCLientRect() method returns all the information about where on the page an element is and what are its width and height.</br>
<i>Example:</i></br>
<code>function highlightLinks() {</code></br>
<code>const linkCoordinates = this.getBoundingCLientRect();</code></br>
<code>return linkCoordinates;</code></br>
<code>}</code>
</br></br>

<h2>22 - Speech Synthesis</h2>

1. <b>Find Method</b>
</br></br>
The <code>*.find()</code> method returns the first element in the array that matches the function.</br>
<i>Example:</i></br>
<code>function setVoice(e) {</code></br>
<code>msg.voice = voices.find(voice => voice.name === this.value);</code></br>
<code>}</code>
</br></br>

