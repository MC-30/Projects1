const readLine = require('readline-sync');

let answerList = ['Yes', 'No', 'maybe', 'It is certain', 'It is decidedly so','Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes',
'Most likely', 'Outlook good', 'Outlook good','Signs point to yes','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again',
];

let randomNum = Math.floor(Math.random() *answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);

