# Introduction to command line

- Prompt
  In the context of the command line, a prompt refers to the text or symbol displayed by the command-line interface (CLI) to indicate that it is ready to accept user input. It usually includes information like the current user, hostname, and working directory, followed by a special character (e.g., $, >, #).

- Command Line

what we write after a prompt in a terminal is a command line the name is command line because we are giving command to machine to do some task

- Terminal
  The terminal is the whole application that you run to give command to the comuter or machine

- Gooey | GUI
  Everything outside the terminal is GUI

- pwd -- tells us what is current directory

- touch create new files in linux and in windows it is New-Items

- echo is like console.log in terminal to access a variable we write $ sign before the variable name

- for i in {1..50}; do touch "index$i.html"; done

- mv command we can rename file we can move files

- cat command is used to display content inside a file

- rm command is used to delete file

- rm -rf command is used to remove directory

simple events emmiter

```const EventEmmiter = require('events');

class emitter extends EventEmmiter {}

const myEmitter = new emitter();

myEmitter.on('event', () => {
    console.log('event emitted');
});

myEmitter.emit('event');


```

- EventEmmiter does not do anything asynchronously instead the on method jus put function in the object and when we emit these by using emit then it simply run these functions

- .once method make the function to run one time no matter how many time we emit the event

buffer enable node to deal with zero and ones

-- character set - letter and symbols (characters) that a writing system uses,
and a representation of assigning different numbers to thoes characters
-- A system of assigning sequence of bytes (just some zeros and ones) to a character
-- the most common one is is utf-8 , defined by the unicode standard therfore its character have the same numbers as the unicode

-- Unicode:
a standard for represnting and encoding characters in most of the writing system worldwide.
it is just a standard

-- ASCII:
it define 128 characters, lower and upper case a-z , number from 0-9, some punctuations and some control character like DEL (delete)

ASCII is just a subset of Unicode

-- Encoder:
something meaningfull to us human into computer language

Decoder opposite to Encoder

-- Buffer:
It's a container in memory
In node js each elements of buffer contain 8 bits

In Node, Buffer is used to store and manage binary data. Pure JavaScript is great with Unicode-encoded strings, but it does not handle binary data very well. It is not problematic when we perform an operation on data at the browser level but at the time of dealing with TCP stream and performing a read-write operation on the file system is required to deal with pure binary data.

To satisfy this need Node.js uses Buffer to handle the binary data

```https://www.geeksforgeeks.org/what-is-buffer-in-node-js/


```

to divide a number to its half in binary is just remove the least significant digit and then move other value their

like here 11110 for 30 in decimal ===> 1111 for 15
