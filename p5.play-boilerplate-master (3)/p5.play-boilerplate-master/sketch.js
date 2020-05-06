var rainGroup,r1,r2,r3,r4,r5,r6,r7,r8,r9
function preload(){
r1 = loadImage("1.png");
r2 = loadImage("2.png");
r3 = loadImage("3.png");
r4 = loadImage("4.png");
r5 = loadImage("5.png");
r6 = loadImage("6.png");
r7 = loadImage("7.png");
r8 = loadImage("8.png");
r9 = loadImage("9.png");
}
function setup(){
  rainGroup = new Group();
}
function draw(){
  createCanvas(800,600)
  background(0)
  spawnRain1();
  spawnRain2();
  spawnRain3();
  spawnRain4();
  spawnRain5();
  spawnRain6();
  spawnRain7();
  spawnRain8();
  spawnRain9();
  spawnRain10();
  drawSprites();
}
function spawnRain1() {
  if(frameCount % 60 === 0) {
    var r = createSprite(width/3,0,10,40);
    r.velocityY = 8;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.05;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain2() {
  if(frameCount % 60 === 0) {
    var r = createSprite(width/5,0,10,40);
    r.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.03;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain3() {
  if(frameCount % 60 === 0) {
    var r = createSprite(width/9,0,10,40);
    r.velocityY = 9;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.07;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain4() {
  if(frameCount % 60 === 0) {
    var r = createSprite(width/2,0,10,40);
    r.velocityY = 4;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.02;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain5() {
  if(frameCount % 60 === 0) {
    var r = createSprite(width/6,0,10,40);
    r.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.05;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain6() {
  if(frameCount % 60 === 0) {
    var r = createSprite(500,0,10,40);
    r.velocityY = 8;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.05;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain7() {
  if(frameCount % 60 === 0) {
    var r = createSprite(600,0,10,40);
    r.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.03;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain8() {
  if(frameCount % 60 === 0) {
    var r = createSprite(750,0,10,40);
    r.velocityY = 9;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.07;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain9() {
  if(frameCount % 60 === 0) {
    var r = createSprite(650,0,10,40);
    r.velocityY = 4;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.02;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}
function spawnRain10() {
  if(frameCount % 60 === 0) {
    var r = createSprite(550,0,10,40);
    r.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,9));
    switch(rand) {
      case 1: r.addImage(r1);
                   break;
      case 2: r.addImage(r2);
                   break;
      case 3: r.addImage(r3);
                   break;
      case 4: r.addImage(r4);
                   break;
      case 5: r.addImage(r5);
                   break;
      case 6: r.addImage(r6);
                   break;
      case 7: r.addImage(r7);
                   break;
      case 8: r.addImage(r8);
                   break;
      case 9: r.addImage(r9);
                   break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    r.scale = 0.05;
    r.lifetime = 300;
    //add each obstacle to the group
   // rainGroup.add(r);
  }
}