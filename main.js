function preload() {
	mario_gameover = loadSound("gameover.wav");
		mario_jump = loadSound("jump.wav");
		mario_coin = loadSound("coin.wav");
		mario_kick = loadSound("kick.wav");
		mario_die = loadSound("mariodie.wav");
			world_start = loadSound("world_start.wav");
		setSprites();
		MarioAnimation();
	}
	Chat
	
	function setup() {
		canvas = createCanvas(1240,336);
		
		instializeInSetup(mario);
			canvas.parent('lienzo');
	
			video = createCapture(VIDEO);
		video.size(800,400);
	
		video.parent('camara_en_consola');
	
		poseNet = ml5.poseNet(video, modelLoaded);
		poseNet.on('pose', gotPoses);
	
	}
	function modelLoaded() {
		console.log('¡Modelo cargado!');
	  }
	
	  function gotPoses(results)
	  {
		  console.log(results);
		if(results.length > 0)
		{
		  console.log(results);
		  noseX = results[0].pose.nose.x;
		  noseY = results[0].pose.nose.y;
		}
	  }
	   
	
	function draw() {
		game();
	}