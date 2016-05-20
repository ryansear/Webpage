var why = "Because";

document.write(why);
document.write(doStuff("<br>Nice ", "Job ", "JS"));
var n1;
var n2;
var n3;
var numbs;

function doStuff(write, cool, thing){
return write + cool + thing;
}

function InputNum(){
	var nums = prompt("Please enter 3 numbers seperated by commas");
	var num1 = nums.substring(0, nums.indexOf(","));
	var num2 = nums.substring(nums.indexOf(",")+1, nums.indexOf(",", nums.indexOf(",")+1));
	var num3 = nums.substring(nums.indexOf(",", nums.indexOf(",")+1));
	numbs = nums1;
	n1 = nums1[0].parseInt;
	n2 = nums1[1].parseInt;
	n3 = nums1[2].parseInt;
	return true;
}

function Parsing(parser){
	
	return var numb = [num1, num2, num3];
}

function Mean(){
return (n1+n2+n3)/3;
}

function Mode(){
if(n1==n2){
	return n1;
}
if(n2==n3){
	return n2;
}
else{ return "None"};
}

function Median(){
numbs.sort();
return numbs[1];
}
