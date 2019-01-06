var letters = "abcdefghijklmnopqrstuvwxyz";
letters = letters.split("");
var numbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten" ];
//numbers = numbers.split("");
var numData = {
	zero: sound = new Howl({
  src : ['sounds/0.mp3']
}),
	one: sound = new Howl({
  src : ['sounds/1.mp3']
}),
	two: sound = new Howl({
  src : ['sounds/2.mp3']
}),
	three: sound = new Howl({
  src : ['sounds/3.mp3']
}),
	four: sound = new Howl({
  src : ['sounds/4.mp3']
}),
	five: sound = new Howl({
  src : ['sounds/5.mp3']
}),
	six: sound = new Howl({
  src : ['sounds/6.mp3']
}),
	seven: sound = new Howl({
  src : ['sounds/7.mp3']
}),
	eight: sound = new Howl({
  src : ['sounds/8.mp3']
}),
	nine: sound = new Howl({
  src : ['sounds/9.mp3']
})
}
var keyData = {
	a: sound = new Howl({
  src : ['sounds/a.mp3']
}),
	b: sound = new Howl({
  src : ['sounds/b.mp3']
}),
	c: sound = new Howl({
  src : ['sounds/c.mp3']
}),
d: sound = new Howl({
  src : ['sounds/d.mp3']
}),
e: sound = new Howl({
  src : ['sounds/e.mp3']
}),
f: sound = new Howl({
  src : ['sounds/f.mp3']
}),
g: sound = new Howl({
  src : ['sounds/g.mp3']
}),
h: sound = new Howl({
  src : ['sounds/h.mp3']
}),
i: sound = new Howl({
  src : ['sounds/i.mp3']
}),
j: sound = new Howl({
  src : ['sounds/j.mp3']
}),
k: sound = new Howl({
  src : ['sounds/k.mp3']
}),
l: sound = new Howl({
  src : ['sounds/l.mp3']
}),
m: sound = new Howl({
  src : ['sounds/m.mp3']
}),
n: sound = new Howl({
  src : ['sounds/n.mp3']
}),
o: sound = new Howl({
  src : ['sounds/o.mp3']
}),
p: sound = new Howl({
  src : ['sounds/p.mp3']
}),
q: sound = new Howl({
  src : ['sounds/q.mp3']
}),
r: sound = new Howl({
  src : ['sounds/r.mp3']
}),
s: sound = new Howl({
  src : ['sounds/s.mp3']
}),
t: sound = new Howl({
  src : ['sounds/t.mp3']
}),
u: sound = new Howl({
  src : ['sounds/u.mp3']
}),
v: sound = new Howl({
  src : ['sounds/v.mp3']
}),
w: sound = new Howl({
  src : ['sounds/w.mp3']
}),
x: sound = new Howl({
  src : ['sounds/x.mp3']
}),
y: sound = new Howl({
  src : ['sounds/y.mp3']
}),
z: sound = new Howl({
  src : ['sounds/z.mp3']
})


}

var heading=document.querySelector("h1");

$(window).keydown(function(e){
	//if($.isNumeric(e.which)){
		key=e.which;
if (key >= 48 && key <= 57) {
	     key1= e.which-48;
	    
	     key1 = numbers[key1];
         
    numData[key1].play();
    $("#imageBox").html("<img id=\"display\" src=images/" + key1+ ".jpg>");
   }
	else if (key >= 65 && key <= 90||key >= 97 && key<= 122)
	{
    key = e.which - 65; //makes a-z = 1-27
   
    key = letters[key];
    keyData[key].play();
    $("#imageBox").html("<img id=\"display\" src=images/" + key+ ".jpg>");
   }
});


    