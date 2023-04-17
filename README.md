# This is a list to which items can be added and whose color can change on click.

## Project Description

This was an exercise I made to learn more about javascript. The idea was taken from a book which described this project without giving any code (JavaScript from Jon Duckett). I decided to write it and added a javascript functionnality that enables the user to add list items (however, those items disappear when you refresh the page). 

One of the thing I struggled with was using the forEach function on what I thought was an array created using document.getElementsByTagName('li'). In fact, 
getElementsByTagName creates an HTML collection and not an array so I had to transform this collection in an array with the Array.from() method before using it. 
I could have found another solution to using forEach but I wanted to understand why it didn't work as I intended.



