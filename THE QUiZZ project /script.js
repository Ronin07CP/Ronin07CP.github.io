    //function of the start quiz button
    var startQuiz =  function(){
        document.getElementById("quiz").style.display = "contents";
        document.getElementById("button").style.display = "none";
      }
  
      document.getElementById("button").addEventListener("click", startQuiz);
  
      var grade = function (){
        var ans = ["-6", "22/7" , "4" , "4/3" , "-1/3" , "15/2" , "-9/2" , "-5/3" , "6" , "-1/2"];
        var userAns = [];
  
        //Input graber
        for(var i = 1; i <= ans.length; i++){
          var userInput = document.getElementById('q' + i).value;
          userAns.push(userInput);
        }
        //score calculator
        var score = 0;
        for(var i = 0; i < ans.length; i++){
          if(userAns[i] === ans[i]){
            score++;
          }
  
        } 
        //grade calculator
        var percentage = (score / ans.length) * 100;
        var grade = '';
        
        if (percentage >= 90) {
          grade = '(A) ' + percentage + "%" + 'Great';
        } else if (percentage >= 80) {
          grade = '(B) ' + percentage + "%" +' Good';
        } else if (percentage >= 70) {
          grade = '(C) ' + percentage + "%" + ' Work on it';
        } else if (percentage >= 60) {
          grade = '(D) ' + percentage + "%" + ' Not Good';
        } else {
          grade = '(F) ' + percentage + "%" + "  Bruh. You Failed  " ;
        }
        var gradeDisplay = "Your Grade : " + grade;
        document.getElementById("body2").style.display = "none";
        document.getElementById("grade").style.display = "flex"
        document.getElementById("grade").textContent = gradeDisplay;
      }
      document.getElementById("submit").addEventListener("click", grade);
  