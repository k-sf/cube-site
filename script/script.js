(function(){
	var menu = document.getElementById("menu")
	menu.addEventListener('click',Event, false);
})();
function Event(e){
	var cube = document.getElementById('cubepage');
	switch(e.target.id)
	{
		case 'button1': cube.style.transform = 'rotateX(0deg)'; break
		case 'button2': cube.style.transform = 'rotateY(90deg)'; break
		case 'button3': cube.style.transform = 'rotateY(-90deg)'; break
		case 'button4': cube.style.transform = 'rotateX(90deg)'; break
		case 'button5': cube.style.transform = 'rotateX(-90deg)'; break
		case 'button6': cube.style.transform = 'rotateX(180deg)'; break 
	}
}

