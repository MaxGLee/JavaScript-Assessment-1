//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var eight = Number(string8)
alert(num10 + eight +one);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function byThrees(){
for(var i = 20; i <= 100; i++) {
	if (i % 3 == 0)	console.log(i);
    }	
}
byThrees();

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var median = scores.length
for (var i = 0, sum = 0; i < scores.length; sum += scores[i++]); 
console.log(sum/median);