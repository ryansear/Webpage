document.write(doStuff());
function doStuff(write, cool, thing){
return write + cool + thing;
}

function InputNum(){
	var nums = prompt("Please enter numbers seperated by commas");
	var numbs = nums.split(',');
	var added = 0;
	var modes=[];
	for(var i = 0; i<numbs.length; i++){
		numbs[i] = parseInt(numbs[i]);
		added += numbs[i];
		if(modes[numbs[i]]==null){
    		modes[numbs[i]]=0;
    	}
    	modes[numbs[i]]++;
	}
	numbs.sort();
	if(numbs.length%2==0){
    var med= (numbs[numbs.length/2]+numbs[numbs.length/2-1])/2
  	}
  	else{
    var med= numbs[(numbs.length-1)/2]
  	}
	var biggest=0;
  if(modes[0]==null){
    modes[0]=0;
  }
  for(var i=0; i<modes.length;i++){
    if(modes[i]>modes[biggest]){
      biggest=i;
    }
  }
  var mean = added/numbs.length;
  var body = document.getElementById("output")
  body.innerHTML=body.innerHTML+"<br><br>"+nums+"<br>Mean:"+mean+"<br>Median:"+med+"<br>Mode:"+biggest;
}