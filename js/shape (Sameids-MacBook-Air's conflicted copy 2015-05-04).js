var randomInt = function(min, max){
	return Math.floor(min + Math.random()*(max-min));
}

var Shape = function (){

	this.width = 100;
	this.height = 100;
	this.speed = 10;
	this.x = 0;
	this.y = -100;

	var min = game.width* 0.2;
	var max = game.width* 0.8;

	this.push = randomInt(min,max);


	this.colors = ["#80FF72", "#FFF07C", "#7EE8FA"];
	this.color = this.colors[Math.floor(0 + Math.random()*(3-0))]

	 this.horizontalStretch = randomInt(100, 300);


}


Shape.prototype.draw = function(ctx){

	ctx.fillStyle = this.color

	// ctx.rotate(20*Math.PI/180);

    ctx.shadowColor = 'black';
    // ctx.shadowBlur = 5;
    // ctx.shadowOffsetX = 0;
    // ctx.shadowOffsetY = 0;
	ctx.fillRect(this.x,this.y,this.width,this.height);
	
}

Shape.prototype.move = function(){
	this.y += this.speed;

	// var verticleStretch = Math.floor(0 + Math.random())
	this.x = (Math.sin(this.y/this.horizontalStretch) * 100) + this.push;
}

Shape.prototype.isOutside = function(){
	return this.y > game.height*0.80+100;
}