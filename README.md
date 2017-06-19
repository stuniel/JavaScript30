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
