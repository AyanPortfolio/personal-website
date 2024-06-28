class Paddle {
    constructor(x, y, l, w, c) {
        this.x= x;
        this.y = y;
        this.l = l;
        this.w = w;
        this.c =c;
        this.vy = 0;

    }

    draw(ctx) {
        ctx.fillStyle = this.c
        ctx.strokeStyle = "black"
        ctx.fillRect(this.x, this.y, this.w, this.l)
        ctx.strokeRect(this.x, this.y, this.w, this.l)
    }



    move() {
        let newY = this.y + this.vy;
        if (newY < 0) return;
        if (newY + paddleLength > boardHeight) return;

        this.y = newY;
    }
    
    moveCPU(ball) {
 if (ball.y < this.y)
    this.vy = -3
else if (ball.y > this.y + this.l)
    this.vy = 3
else {
this.vy = 0
}

    
        this.move();
    }
    
}
