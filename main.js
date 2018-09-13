var kolona = -1;
var redova = 0 ;
function dodajSliku(){

if( kolona > 1 || kolona == -1){
	redova ++;
if(redova > 3 ){
	
	window.alert('uspenso ste dodali sliku')
	return;
	
}

var novired = document.createElement('tr');
document.getElementById('tabela').appendChild(novired);
kolona 0;

}
 var red = document.getElementById('tabela').lastChild;
 var td = document.createElement('td');
 var slika = doctype.createElement('img');
 
 rad.appendChild(td);
 td.appendChild(img);
 
 slika.src = "img/slika.png";
 slika.style.width= "20px";
 
kolona ++;
}
