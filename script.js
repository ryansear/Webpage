var why = "Because";

document.write(why);
document.write(doStuff("<br>Nice ", "Job ", "JS"));
var numbs;

function doStuff(write, cool, thing){
return write + cool + thing;
}

function InputNum(){
	var nums = prompt("Please enter numbers seperated by commas");
	var nums1=nums.split(',');
	for(var i = 0; i<nums1.length; i++){
		numbs.push(nums1[i].parseInt);
	}
	return true;
}

function Mean(){
	for(var i = 0; i<numbs.length; i++){
		var added += numbs[i];
	}
	var mean = added/numbs.length;
alert(mean);
}

function Mode(){

}

function Median(){
numbs.sort();
alert(numbs[numbs.length/2]);
return true;
}
