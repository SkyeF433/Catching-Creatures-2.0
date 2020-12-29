class Enemy{

        constructor(x,y){
        
        var options={
            restituition:0.3,
            friction:1.0,
            density:1.0,
            isStatic:false
        }
        
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height=100;
        this.image = loadImage("Images/ivy.png");
        World.add(world,this.body);
        this.visibility=255;
        }
        
        display(){
//console.log("speed"+this.body.speed);
        if(this.body.speed<5){
        var angle = this.body.angle;
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility-=5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,100,100);
            pop();
        }
        
        
        
    }       

    score()
    {
        if(this.visibility<0 && this.visibility>-1005)
        {
            gamescore++;
            console.log(gamescore);
        }
    }
        
}       
        
        
        
        
        
        
        
 