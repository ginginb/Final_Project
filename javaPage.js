
            function send1() {
                var questions = document.getElementsByName("question1");
               
				if (questions[0].checked == true) {
                    
					var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg1').innerHTML = msg; return false;
                
				} else if (questions[1].checked == true) {
                    var msg = '<span style="color:green;">Correct!</span><br /><br />';
                    document.getElementById('msg1').innerHTML = msg; return false;
					
				} else if (questions[2].checked == true) {
                   var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg1').innerHTML = msg; return false;
					
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
                    
					var msg = '<span style="color:green;">Correct!</span><br /><br />';
                    document.getElementById('msg2').innerHTML = msg; return false;
                
				} else if (questions[1].checked == true) {
                    var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg2').innerHTML = msg; return false;
					
				} else if (questions[2].checked == true) {
                   var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg2').innerHTML = msg; return false;
					
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
                    
					var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg3').innerHTML = msg; return false;
                
				} else if (questions[1].checked == true) {
                    var msg = '<span style="color:red;">Incorrect!</span><br /><br />';
                    document.getElementById('msg3').innerHTML = msg; return false;
					
				} else if (questions[2].checked == true) {
                   var msg = '<span style="color:green;">Correct!</span><br /><br />';
                    document.getElementById('msg3').innerHTML = msg; return false;
					
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
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			