var mySong;
var radius=30;


function preload() {
    mySong = loadSound('assets/mariah.m4a');
    frameRate(15);
}


function setup() {
    
    createCanvas(windowWidth,windowHeight);
    background(0,0,20)
    // ..

    analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
    
    noStroke();
    
    mic = new p5.AudioIn();
    mic.start();


}


function draw() {
    
    
    
    var volumeMic = mic.getLevel();
    var newMax = 100;
    var volumeMax = map(volumeMic,0,1,0,newMax);
    
    background(volumeMax*10,volumeMax,20);
        
    if (mySong.isPlaying() == true) {
    var volume = analyzer.getLevel();

      

    for(var y=45; y<windowHeight; y = y+50){
    for (var x=45; x < windowWidth; x=x+50){
        n = random()*10;
    
        
       fill(200,200,160);
        ellipse(x,y, volume*10*n);
    }
      fill(100,0,0);
        rect(width/2-9,height/10*2-20,60,30);
    fill(255);
        text("PAUSE", width/2, height/10*2 );
    
            

    }
    
    } else {
                fill(100,0,0)
        rect(width/2-55,height/10*2-20,150,50)

        fill(255);
        text("PLAY & SING", width/2-20, height/10*2 );
        
        text("better with headphones", width/2-45, height/10*2+20 );


    };
    


}


function mousePressed() {
    if (mySong.isPlaying() == true) {
        mySong.pause();
        
    } else {
        mySong.play();
    }
}


