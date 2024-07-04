class Block{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 50;
    }
    display(){
        noFill();
        stroke(this.c);
        push();
        //translate the origin point to the middle of the canvas
        translate(this.x,this.y);
        rotate(this.angle);
        if (this.angle >= 0 && this.angle < 45){
            this.drawRect();
        }
        else{
            this.drawX();
        }
        pop();
    }

    move(){
        let distance;
        //only check the distance when the mouse is moving
        if (pmouseX - mouseX !== 0 || pmouseY - mouseY !== 0){
        //calculate distance between 2 points 
        distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance < distMouse){
            this.angle += 2;
            this.c = 255;
        } 
        }

        if (this.angle > 0 && this.angle < 90){
            this.angle += 2;
            if(this.c > 50){
                this.c -= 5;
            }
        }
        else{
            this.angle = 0;
            this.c = 50;
        }
    }

    drawX(){
        let margin = -size/2;
        line(margin + offSet/2,margin + offSet/2,margin + size - offSet/2, margin + size - offSet/2);
        line(margin + size - offSet/2,margin + offSet/2,margin + offSet/2, margin + size - offSet/2);
        
    }
    
    drawRect(){
        //x, y , width, height
        rect(0,0,size - offSet, size - offSet);
    }
}