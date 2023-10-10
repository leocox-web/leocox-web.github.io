$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

      createPlatform(1,350,175,200)
      createPlatform(176,300,5,10)
      createPlatform(400,200,5,100)
      createPlatform(360,50,50,300)
      createPlatform(250,550,50,5)
      createPlatform(400,450,500,50)
      createPlatform(900,400,100,50)
      createPlatform(360,300,300,50)
      createPlatform(1200,700,800,5)
      createPlatform(171,290,10,100)
      createPlatform(2,250,10,1000)
      createPlatform(171,200,10,400)
      createPlatform(1,50,10,1000)
      createPlatform(10,50,350,10)
      createPlatform(900,600,115,5)
      createPlatform(780,640,60,5)
      createPlatform(720,600,5,500)
      createPlatform(630,660,60,5)
      createPlatform(480,680,60,5)
      createPlatform(580,640,5,500)
      createPlatform(580,500,5,45)
      createPlatform(180,550,225,5)
      createPlatform(400,500,5,50)
      createPlatform(720,500,5,5)
      createPlatform(390,700,2,2)
      createPlatform(300,655,2,2)
      createPlatform(171,707,50,2)
      createPlatform(30,670,75,2)
      createPlatform(1200,300,5,100)
      createPlatform(1000,300,10,100)
      createPlatform(900,200,10,100)
      createPlatform(800,200,10,100)
      createPlatform(650,200,10,100)
      createPlatform(500,100,1,200)
      createPlatform(502,200,1,10)
      createPlatform(400,0,100,100)
      createPlatform(600,85,380,1)
      createPlatform(1100,100,100,1)
      createPlatform(1050,170,3,3)
      createPlatform(1200,100,1,450)
      createPlatform(1390,0,1,700)
      createPlatform(1100,690,10,10)
      createPlatform(900,499,300,1)
      createPlatform(600,300,100,10)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

      createCollectable('database',860,400,10,0)
      createCollectable('database',45,630,10,0)
      createCollectable('database',800,0,10,0)
      createCollectable('database',1280,370,0,0)


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

      createCannon ("left",850,10,400,400 )
      createCannon ("left",430,1020,20,20)
      createCannon ("bottom",450,2150,20,20)
      createCannon ("left",370,1500,50,50)
      createCannon ("bottom",600,2100,20,20)
      createCannon ("bottom",750,2050,20,20)
      createCannon ("bottom",1150,700,20,20)
      createCannon ("bottom",1300,700,20,20)
      createCannon ("top",800,60000,10000,10000)


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
