var Player = function(_radius,canvas){
	this.radius = _radius;
	this.x=canvas.width/2;
	this.y= canvas.height-this.radius;
	this.bullets= [];
	this.draw = function(){
		context.beginPath();
			context.fillStyle  = 'black';
			context.arc(this.x,this.y,this.radius,0,Math.PI * 2);
			context.fill();
		context.closePath();
	}
};

var Bullet = function(x,y){
	this.speed = 15;
	this.radius = 5;
	this.color = "red";
	this.x = x;
	this.y = y;
	this.draw = function(){
		context.beginPath();
			context.fillStyle  = this.color;
			context.arc(this.x,this.y,this.radius,0,Math.PI * 2);
			context.fill();
		context.closePath();
	};

	this.progress = 90;
	this.trajectory=new Trajectory(3,2,1);

	this.update = function(){
		if(this.y<0) {
			var index = player.bullets.indexOf(this);
			player.bullets.splice(index, 1);
		}
		this.y -= this.speed/5; //normal linear speed
		//this.y -= this.trajectory.getAt(this.progress)/10;
		//this.x += this.progress*10;
		this.x += Math.sin(this.progress)*5;
		this.progress+=0.1;
		this.draw();
	};
};

var Enemy = function(){
	this.trajectory = new Trajectory();
};


var Trajectory = function(a,b,c){
	//ax^2+bx+c
	this.a = a;
	this.b = b;
	this.c = c;

	this.getAt = function(x){
		return a*x*x  +b*x  +c;
	};
};