function Recycle(x, y, width, height, player, ctx) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.player = player;
	this.base_image = new Image();
	this.base_image.src = 'com/recycle/recycle.png';
	this.base_image.onload = function() {
		console.log(ctx);
		ctx.drawImage(this.base_image, this.x, this.y,
			this.width, this.height);
	}.bind(this)
	this.radius = 30;
}

Recycle.prototype.drawToContext = function(ctx) {
	ctx.drawImage(this.base_image, this.x, this.y,
		this.width, this.height);
}
Recycle.prototype.hitTest = function(hitX, hitY) {
	this.shapeX = this.x + 30;
	this.shapeY = this.y + 30;
	var dx = this.shapeX - hitX;
	var dy = this.shapeY - hitY;
	return (dx * dx + dy * dy < this.radius * this.radius)
}