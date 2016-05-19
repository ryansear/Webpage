var why = "Because";

document.write(why);
document.write(doStuff("<br>Nice ", "Job ", "JS"));

function doStuff(write, cool, thing){
return write + cool + thing;
}

function writeForm(){
	return "<form  action:"MAILTO:rvsearcy1@gmail.com" method = "post"
enctype="text/plain">
Name:<br>
<input type="text" name = "name" ><br>
Email:<br>
<input type="text" name = "email" ><br>
Comment:<br>
<input type = "text" name = "comment" size="50"><br><br>
<input type = "submit" value="Send">
</form>"
}