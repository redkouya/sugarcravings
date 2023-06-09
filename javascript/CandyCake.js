class CandyCake {
  constructor(positionX, speedLevel) {
    this.w = 60;
    this.h = 53;
    if (positionX >= canvas.width) {
      this.x = positionX - this.w;
    } else if (positionX <= this.w) {
      this.x = this.w;
    } else {
      this.x = positionX;
    }

    this.y = 0 - this.h;
    this.img = new Image();
    this.img.src = "images/sugar/cake.png";
    this.speedFall = 5 + speedLevel;
    this.score = 50;
    this.hungryBar = 10;
    this.restHungryBar = 30;
  }

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  move = () => {
    this.y += this.speedFall;
  };
}
