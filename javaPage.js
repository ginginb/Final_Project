/* JavaScript 6th Edition
   Final Project
   Authors: Ginny Brinkerhoff Fay, John Gray, Hunter Foulkes
   Date: 11/19/2019

   Filename: javaPage.js
*/
var incorrect = '<span style="color:red;">Incorrect!</span><br /><br />';
var correct = '<span style="color:green;">Correct!</span><br /><br />';

function send1() {
  var questions = document.getElementsByName("question1");
  if (questions[0].checked == true) {
    document.getElementById('msg1').innerHTML = incorrect; return false;
  } else if (questions[1].checked == true) {
    document.getElementById('msg1').innerHTML = correct; return false;
  } else if (questions[2].checked == true) {
    document.getElementById('msg1').innerHTML = incorrect; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}

function reset_msg() {
  document.getElementById('msg1').innerHTML = '';
}

//------------------------------------------------------------------------------------------------------------//

function send2() {
  var questions = document.getElementsByName("question2");
  if (questions[0].checked == true) {
    document.getElementById('msg2').innerHTML = correct; return false;
  } else if (questions[1].checked == true) {
    document.getElementById('msg2').innerHTML = incorrect; return false;
  } else if (questions[2].checked == true) {
    document.getElementById('msg2').innerHTML = incorrect; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}

function reset_msg() {
  document.getElementById('msg2').innerHTML = '';
}

//------------------------------------------------------------------------------------------------------------//

function send3() {
  var questions = document.getElementsByName("question3");
  if (questions[0].checked == true) {
    document.getElementById('msg3').innerHTML = incorrect; return false;
  } else if (questions[1].checked == true) {
    document.getElementById('msg3').innerHTML = incorrect; return false;
  } else if (questions[2].checked == true) {
    document.getElementById('msg3').innerHTML = correct; return false;
  } else {
    // no checked
    alert("You must select an answer");
    return false;
  }
  return true;
}

function reset_msg() {
  document.getElementById('msg3').innerHTML = '';
}
