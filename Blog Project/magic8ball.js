var magicAnswer = ["Very doubtful", "Outlook not so good", "My sources say no", "Not a chance", "Don’t count on it", 'Ask again later', "Ask Flo", "I'm not sure", "Signs point to yes", "Oh for sure", "Most likely", " Without a doub", "100%"]

var question = document.getElementById ("question");
var answer = document.getElementById ("answer-magic-8");
var magicEightBall = document.getElementById ("magic-8-ball")

function magic8answer(){
question.innerText ("click", function magic8answer(){
display.innerText = "";
var num = Math.floor(Math.random() * Math.floor(magicAnswer.length));
display.innerText = magicAnswer[num];

}