var Shape = function (){

	this.width = 100;
	this.height = 100;
	this.radius = 50;
	this.speed = 5;
	this.x = 0;
	this.y = -100;

	this.x = Math.floor(0 + Math.random()*(game.width-this.width-0));

	this.type = Math.floor(1 + Math.random()*(3-1));
	this.color = Math.floor(0 + Math.random()*(3-0));

	this.colors = ["#80FF72", "#FFF07C", "#7EE8FA"];

}

Shape.prototype.draw = function(ctx){

	ctx.fillStyle = this.colors[this.color];

	if (this.type == "1"){
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	else if (this.type == "2"){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fill();
	}	
}

Shape.prototype.move = function(){
	this.y += this.speed;
}

Shape.prototype.isOutside = function(){
	return this.y > game.height+100;
}