 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';
	var newSentence = sentence.replace(/ i /g, " I ");
	console.log(newSentence);
//Nice use of REGEX to solve these problems good googling. However what happens if your sentence changes to the following.

var sentence = "i bought a pair of shoes when i went to the mall";


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';
var count = (jsHistory.match(/a/g)).length;
var count2 =(jsHistory.match(/A/g)).length;
	console.log(count + count2);

//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';
var newText = text.replace(/scream/g, "SCREAM");
	console.log(newText);
