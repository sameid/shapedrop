var Shape = function (){

	this.width = 100;
	this.height = 100;
	this.speed = 10;
	this.x = 0;
	this.y = -100;

	this.x = Math.floor(0 + Math.random()*(game.width-this.width-0));


	this.colors = ["#80FF72", "#FFF07C", "#7EE8FA"];
	this.color = this.colors[Math.floor(0 + Math.random()*(3-0))]


}

Shape.prototype.draw = function(ctx){

	ctx.fillStyle = this.color

	// ctx.rotate(20*Math.PI/180);

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
	ctx.fillRect(this.x,this.y,this.width,this.height);
	
}

Shape.prototype.move = function(){
	this.y += this.speed;
}

Shape.prototype.isOutside = function(){
	return this.y > game.height*0.80+100;
}