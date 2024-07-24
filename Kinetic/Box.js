class Box{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.isLetter = false;
        this.angle = 0;
        this.depth = 0;
    }

    display(){
        stroke(255, 50);
        strokeWeight(1);
        noFill();
        //let x = map(mouseX, 0, width, 0 ,360);
        if (this.isLetter){
            stroke("cyan");
            strokeWeight(2);
            fill(0,0,0);
            this.angle += 2;
            this.depth += 2 * cos(this.angle);
        }
        else{
            this.angle -= 2;
        }
        let z = map(mouseX, 0, width, 0 ,100);
        push();
        translate(this.x, this.y, this.depth);
        rotateY(this.angle);
        //rotateZ(x);
        rotateX(this.angle);
        rotateZ(this.depth);
        box(size * 2/3);
        pop();
    }
}