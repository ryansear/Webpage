var why = "Because";

document.write(why);
document.write(doStuff("<br>Nice ", "Job ", "JS"));
var numbs = [];

function doStuff(write, cool, thing){
return write + cool + thing;
}

function InputNum(){
	var nums = prompt("Please enter numbers seperated by commas");
	var nums1= nums.split(",");
	for(var i = 0; i<nums1.length; i++){
		var n = parseInt(nums1[i]);
		numbs.push(n);
	}
	return true;
}

function Mean(){
	var added;
	for(var i = 0; i<numbs.length; i++){
		added += numbs[i];
	}
	var mean = (added/numbs.length);
window.alert(mean);
return true;
}

function Median(){
numbs.sort();
window.alert(numbs[numbs.length/2]);
return true;
}

function Mode(){
	var num3 = [];
	var times = [];
	for(var i = 0; i<numbs.length; i++){
		if(numbs.indexOf(numbs[i]) = -1){
			num3.push(numbs[i]);
			times.push(1);
		}
		else{
			times[num3.indexOf(numbs[i])] += 1;
		}

	}
	var highest = 0;
	for(var i = 0; i<times.length; i++){
		if(times[i]>times[highest]){
			highest = i;
		}
	}
	window.alert(num3[highest]);
	return true;
}