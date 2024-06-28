class Ball {
    constructor(x, y, vx, vy, r, c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    move() {
        
        this.x += this.vx
        this.y += this.vy
    }

    bounceWall() {
        // TOP WALL
        if (this.y - this.r < 0) {
            this.vy = Math.abs(this.vy);
        }

        // BOTTOM WALL
        if (this.y + this.r > boardHeight) {
            this.vy = -1 * Math.abs(this.vy);

    
        }
    }

    bouncePaddleL(paddle) {
        if (this.x - this.r > paddleWidth + paddle.x) return false;
        if (this.x - this.r < 0) return true;
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx < 0) {
            this.vx = Math.abs(this.vx);
            this.increaseSpeed();
        }
        
        return false;
        
       
    }

    bouncePaddleR(paddle) {
        if (this.x + this.r < paddle.x) return false;
        if (this.x + this.r > paddle.x + paddle.w) return true;
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx > 0) {
            this.vx = -1* Math.abs(this.vx);
            this.increaseSpeed();
        }
        
        return false;
      
    }

    increaseSpeed() {
        if (ball.vx >= 0){
     ball.vx = ball.vx + 1
     ball.r = ball.r+5
}   else {
        ball.vx = ball.vx - 1
        ball.vy = ball.vy-0.5
        ball.r = ball.r + 5
    if (ball.r >= 37.5)
        ball.r = ball.r-5

     }
    }
}