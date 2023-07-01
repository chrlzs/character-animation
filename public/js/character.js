class Character {
    constructor() {
      this.position = { x: 0, y: 0 };
      this.direction = null;
      this.isAnimating = false;
      this.spriteSheet = new Image();
      this.spriteSheet.src = '../img/character.png';
      this.frameIndex = 0;
      this.animationFrames = 4;
      this.frameWidth = 16; 
      this.frameHeight = 24;
  
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
  
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
  
      this.animateCharacter();
    }
  
    handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          this.direction = 'up';
          this.isAnimating = true;
          break;
        case 'ArrowDown':
          this.direction = 'down';
          this.isAnimating = true;
          break;
        case 'ArrowLeft':
          this.direction = 'left';
          this.isAnimating = true;
          break;
        case 'ArrowRight':
          this.direction = 'right';
          this.isAnimating = true;
          break;
      }
    }
  
    handleKeyUp(event) {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        this.direction = null;
        this.isAnimating = false;
      }
    }
  
    animateCharacter() {
      setInterval(() => {
        if (this.isAnimating) {
          this.frameIndex = (this.frameIndex + 1) % this.animationFrames;
        }
      }, 200);
  
      const canvas = document.createElement('canvas');
      canvas.width = this.frameWidth;
      canvas.height = this.frameHeight;
      document.body.appendChild(canvas);
  
      const context = canvas.getContext('2d');
      setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (this.direction && this.isAnimating) {
          let frameY = 0; // Y coordinate for the sprite sheet frames
          switch (this.direction) {
            case 'up':
              frameY = this.frameHeight * 3;
              break;
            case 'down':
              frameY = this.frameHeight * 0;
              break;
            case 'left':
              frameY = this.frameHeight * 2;
              break;
            case 'right':
              frameY = this.frameHeight * 1;
              break;
          }
          context.drawImage(
            this.spriteSheet,
            this.frameIndex * this.frameWidth,
            frameY,
            this.frameWidth,
            this.frameHeight,
            0,
            0,
            this.frameWidth,
            this.frameHeight
          );
        } else {
          // Render the first frame of the character when not animating
          context.drawImage(
            this.spriteSheet,
            0,
            0,
            this.frameWidth,
            this.frameHeight,
            0,
            0,
            this.frameWidth,
            this.frameHeight
          );
        }
      }, 1000 / 60);
    }
  }

export default Character;
