# JavaScript and DOM Manipulation
https://knwright.github.io/JavaScript_DOM_Manipulation/

## Purpose

To write code that will create a table dynamically based upon a provided dataset, (static/js/data.js). It also needs to allow users to filter the table data for specific values. This was performed using only use pure JavaScript, HTML, and CSS, and D3.js.

### Automatic Table and Date Search

* A basic table was created using index.html.

* Using the UFO dataset provided in the form of an array of JavaScript objects, code was written that appends a table to the web page and then adds new rows of data for each UFO sighting.

  * There are columns for `date/time`, `city`, `state`, `country`, `shape`, `duration`, and `comment`.

* JavaScript code was then written using a date form in the HTML document that will listen for events and search through the `date/time` column to find rows that match user input.
