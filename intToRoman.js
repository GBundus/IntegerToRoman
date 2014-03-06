//Produced by Gregory Bundus

function intToRomanNum(x){
	x=parseInt(x);
	outStr='';
	counter=0;
	while(x>=1000){
		outStr+='M';
		x-=1000;
	}
	if(x>=900){
		outStr+='CM';
		x-=900;
	}
	while(x>=500){
		outStr+='D';
		x-=500;
	}
	if (x>=400){
		outStr+='CD';
		x-=400;
		}
	
	while(x>=100){
		outStr+='C';
		x-=100;
		}
	if (x>=90){
		outStr+='XC';
		x-=90;
	}
	
	while(x>=50){
		outStr+='L';
		x-=50;
		}
	if (x>=40){
		outStr+='XL';
		x-=40;
		}
	while(x>=10){
		outStr+='X';
		x-=10;
		}
	if (x==9){
		outStr+='IX';
		x=0;
		}
	while(x>=5){
		outStr+='V';
		x-=5;
		}
	if (x==4){
		outStr+='IV'
		x=0;
	}
	while(x>=1){
		x-=1;
		outStr+='I';
		}


	document.getElementById('outbox').innerHTML=outStr;
}



