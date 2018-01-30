function grade(num){
	if (num<38){
		return num;
	} else if (num>=38){
		var a = Math.floor(num / 5);
		if (Math.floor(num % 5) == 3||Math.floor(num % 5) == 4){
			
			
				return (a+1) * 5;
			
		
	
	}else{
			return num;
		}
		}
	
}


document.write(grade(73));
document.write("<br/>");
document.write(grade(67));
document.write("<br/>");
document.write(grade(38));
document.write("<br/>");
document.write(grade(33));