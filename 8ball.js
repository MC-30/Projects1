const readLine = require('readline-sync');

let answerList = ['Yes', 'No', 'maybe', 'It is certain', 'It is decidedly so','Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes',
'Most likely', 'Outlook good', 'Outlook good','Signs point to yes','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again',
'Don’t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'];

let randomNum = Math.floor(Math.random() *answerList.length);
let randomAnswer = answerList[randomNum];


let answer = readLine.question
('Welcome to Magic 8ball! Type in your question and your fortune will be determined. Are you ready? (Yes, No):');
console.log(answer);
if (answer == "Yes"){
    let answer = readLine.question('Type your question:');
console.log(randomAnswer);
}

