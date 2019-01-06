var button1 = getElementById("btn1");
var button2 = getElementById("btn2");

button1.addEventListener("click",function(){
	var random = Math.floor(Math.random()*5);
	if(random==0){
		var soundr = new Howl({
             src : ['sounds/66.mp3']
		}).play();

	}
})
