var shootingDelay = 5;
function loop(){
    context.clearRect ( 0, 0 , cnv.width , cnv.height );
    if(keys.right.pressed) player.x +=speed;
    if(keys.left.pressed) player.x -=speed;
    if(keys.up.pressed) player.y -=speed;
    if(keys.down.pressed) player.y +=speed;
    for(var x =0 ; x< player.bullets.length;x++){
        player.bullets[x].update();
        //console.log(player.bullets[x]);
    }
    if(keys.shoot.pressed && shootingDelay==0){
        var bullet = new Bullet(player.x,player.y);
        player.bullets.push(bullet);
        shootingDelay=5;
    }
    if(keys.shoot.pressed)shootingDelay-=1;
    //console.log(player.bullets.length);
	player.draw();
}