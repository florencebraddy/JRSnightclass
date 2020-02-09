var magicAnswer = ["Very doubtful",
"Outlook not so good",
"My sources say no",
"Not a chance", 
"Don’t count on it", 
"Ask again later", 
"Ask Flo", 
"I'm not sure", 
"Signs point to yes", 
"Oh for sure!",
"Most likely",
"Without a doubt", 
"100%"];



window.onload = function() {
    var numberEight = document.getElementById("number-8");
    var answer = document.getElementById("show-answer"); 
    var magicEightBall = document.getElementById("magic-8-ball");
    var question = document.getElementById("question");
    
    magicEightBall.addEventListener("click", function() {
      if (question.value.length > 1) {
        numberEight.innerText = "";
        var num = Math.floor(Math.random() * Math.floor(magicAnswer.length));
        answer.innerText = magicAnswer [num];
      }
    });
 };