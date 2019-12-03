	/* JavaScript 6th Edition
   Final Project
   Authors: Ginny Brinkerhoff Fay, John Gray, Hunter Foulkes
   Date: 11/19/2019

   Filename: javaPage.js
*/
var incorrect = "Incorrect!";
var correct = "Correct!";

var msg1 = 'Question 1: ';
var msg2 = 'Question 2: ';
var msg3 = 'Question 3: ';

//function is called when Submit is clicked and calls the function for each question
function send() {
	send1();
	send2();
	send3();
	write();
}

//funtion checks the answers for question 1
function send1() {
  var questions = document.getElementsByName("question1");
  if (questions[0].checked == true) {
    msg1 += incorrect; return false; 
  } else if (questions[1].checked == true) {
    msg1 += correct; return false;
  } else if (questions[2].checked == true) {
    msg1 += incorrect; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}


//------------------------------------------------------------------------------------------------------------//

//function checks the answers for question 2
function send2() {
  var questions = document.getElementsByName("question2");
  if (questions[0].checked == true) {
    msg2 += correct; return false;
  } else if (questions[1].checked == true) {
    msg2 += incorrect; return false;
  } else if (questions[2].checked == true) {
    msg2 += incorrect; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}


//------------------------------------------------------------------------------------------------------------//

//function checks the answers for question 3
function send3() {
  var questions = document.getElementsByName("question3");
  if (questions[0].checked == true) {
    msg3 += incorrect; return false;
  } else if (questions[1].checked == true) {
    msg3 += incorrect; return false;
  } else if (questions[2].checked == true) {
    msg3 += correct; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}

//function writes the results to a new window
function write() {
	var myWindow = window.open("", "MsgWindow", "width=400, height=400");
	myWindow.document.write(msg1 + "<br>"); 
	myWindow.document.write(msg2 + "<br>");
	myWindow.document.write(msg3 + "<br>");
}

//event listener for the submit button to start running all of the functions
var submitButton = document.getElementById("submit"); 
submitButton.addEventListener("click", send, false);

