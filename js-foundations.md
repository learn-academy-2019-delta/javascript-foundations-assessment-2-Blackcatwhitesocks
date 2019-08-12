# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### From memory, answer the following:

1. What's the difference between =, ==, and === in JavaScript?

= assigns, == equals not strict, === strict equal 

2. What is the difference between an array's index and length?

Index shows the position of the element in the array; the length is the number of elements in the array.

3. What is a function's declaration, argument, and call?

Function declaration is the description of the function behavior; the argument is the value that is being passed into the function; Function call is the execution of the function.


4. What are the three main steps in saving work to github?

Git add, git commint, git push 

5. What is an object?

JavaScript objects are containers for named values called properties or methods.

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.



1b. Test the function. Explain why the function returned what it did.

  Your answer:Error message because nothing is passing through the function.

  Researched answer:Returned Undefined.


2. What is JSON? How does it relate to javascript objects?

  Your answer:  JSON is a mechanism of storage inside IPA

  Researched answer: JSON (JavaScript Object Notation) is a lightweight data-interchange format. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.


3. What does CRUD stand for?

  Your answer: Create, read, update, delete.

  Researched answer:CRUD is a backronym that describes all of the functions that can be done to data that is being stored within a database or application. As previously stated, these functions include Create, Retrieve, Update and Delete. Without all four of these functions, an application is not complete and will not function properly.



4. What is a higher-order function?

  Your answer: It's a function that can take another function as an argument. 

  Researched answer:Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.


5. Stretch: What is a closure, what is it good for and how do you recognize one?

  Your answer: Shows where function ends and which variables are local to that particular function.

  Researched answer:A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical enviroment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.


6. Stretch: What is an API?

  Your answer: Application programming interface
  

  Researched answer: The API is not the database or even the server, it is the code that governs the access point(s) for the server.
  


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?



2. What was your favorite topic this week?



3. What was your "A-ha!" moment this week?
