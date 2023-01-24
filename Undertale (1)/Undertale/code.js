var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f95ff14-d823-4b33-8e97-45030974014f","83910e0c-e6d0-4508-ae58-33006c0edb6b","d659dd91-e47f-431f-acbd-060bad419939","46304568-a51f-46c5-836c-141fd34177d4","c93686cf-37c4-4987-ac03-be42d1d796a4","6731d6aa-5589-4c46-9780-0c943890bb9e","be277599-4780-4ffc-80cf-cb7d22c9ac50"],"propsByKey":{"2f95ff14-d823-4b33-8e97-45030974014f":{"name":"fight button.png_1","sourceUrl":null,"frameSize":{"x":90,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"tf0xCnaAJMQ0YGGacedfMKP9ZsHAyvFn","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":50},"rootRelativePath":"assets/2f95ff14-d823-4b33-8e97-45030974014f.png"},"83910e0c-e6d0-4508-ae58-33006c0edb6b":{"name":"fight.button.pressed","sourceUrl":null,"frameSize":{"x":90,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"tp1aKxdSQElsxDkVAoZ4MZq8XBvWGtXV","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":50},"rootRelativePath":"assets/83910e0c-e6d0-4508-ae58-33006c0edb6b.png"},"d659dd91-e47f-431f-acbd-060bad419939":{"name":"act.png","sourceUrl":null,"frameSize":{"x":90,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"KQi.wKMPpTwS4FbXjVBE9B0lSI5oGyV1","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":50},"rootRelativePath":"assets/d659dd91-e47f-431f-acbd-060bad419939.png"},"46304568-a51f-46c5-836c-141fd34177d4":{"name":"corazon.jpg_1","sourceUrl":null,"frameSize":{"x":30,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"J7Ytgk1ud6.FjNpj2meebf6LnFUdT8ui","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":17},"rootRelativePath":"assets/46304568-a51f-46c5-836c-141fd34177d4.png"},"c93686cf-37c4-4987-ac03-be42d1d796a4":{"name":"huesos.png_1","sourceUrl":null,"frameSize":{"x":30,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"_o9fwh8wH9T3Ikd2VfPVVnIU893a05o6","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/c93686cf-37c4-4987-ac03-be42d1d796a4.png"},"6731d6aa-5589-4c46-9780-0c943890bb9e":{"name":"huesos.png_2","sourceUrl":null,"frameSize":{"x":60,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"qq40XX2asb2owOcPJMBZqJE4K4ZTBdNF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":30},"rootRelativePath":"assets/6731d6aa-5589-4c46-9780-0c943890bb9e.png"},"be277599-4780-4ffc-80cf-cb7d22c9ac50":{"name":"Sans_undertale.jpg_1","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"iOVIJVQ5bDVXFseMd6lJY05v7iKuRvOV","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/be277599-4780-4ffc-80cf-cb7d22c9ac50.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//este juego es de escapar de una bestia.




var fight = createSprite(45,360,80,40);
var act = createSprite(145,360,80,40);
var javier = createSprite(200,200,30,15);
var orillas = createSprite(80,188,8,200);
var orillas2 = createSprite(205,286,253,8);
var orillas3 = createSprite(328,188,8,200);
var orillas4 = createSprite(205,90,250,8);
var gamestate = "serve";
var play = "play";
var play = "play2";
var attack = "attack";
var end = "end";
var end2 = "end2";
var hueso1 = createSprite(120,-55,30,60);
var hueso2 = createSprite(200,-55,30,60);
var hueso3 = createSprite(280,-55,30,60);
var hueso4 = createSprite(-50,145,60,30);
var hueso5 = createSprite(-50,258,60,30);
var hueso6 = createSprite(-50,200,60,30);
var vidadelacriatura = 10;
var barra = createSprite(200,800,700,30);
var barra2 = createSprite(800,200,30,700);
var criatura = createSprite(300,40,50,70);
var win = 0;
playSound("assets/WhatsApp-Audio-2023-01-18-at-3.45.19-PM.mp3");







function draw() {
background("black");
fight.setAnimation("fight button.png_1");
act.setAnimation("act.png");

    
    



  if(gamestate == "serve")
  {

    textSize(17);
    stroke("blue");
    text("Presiona espacio para continuar, E para atacar",40,320);

  
  if (keyDown("space")){
    hueso1.velocityY = 9;
    hueso2.velocityY = 7;
    hueso3.velocityY = 8;
    
    gamestate = "play";
  }
  
}

  if (hueso1.isTouching(barra)|| hueso2.isTouching(barra)|| hueso3.isTouching(barra))
      {
        hueso1.setVelocity(0,0);
        hueso2.setVelocity(0,0);
        hueso3.setVelocity(0,0);
        
        
        gamestate = "attack";
      }
      
  if (gamestate == "attack"){
  textSize(17);
  stroke("green");
  text("VAMOS ATACA!",40,45);
    if (keyWentDown("E")){
  fight.setAnimation("fight.button.pressed");
  vidadelacriatura = vidadelacriatura -5;
    hueso1.y = -55;
        hueso2.y = -55;
        hueso3.y = -55;
        
     gamestate = "play2"; 
    }
    
  }
  if (gamestate == "play2"){
    hueso4.velocityX = 8;
    hueso5.velocityX = 7;
    hueso6.velocityX = 9;
    
    if (hueso4.isTouching(barra2)|| hueso5.isTouching(barra2)|| hueso6.isTouching(barra2))
      {
        hueso4.setVelocity(0,0);
        hueso5.setVelocity(0,0);
        hueso6.setVelocity(0,0);
        
        
        
        gamestate = "attack";
      }
  }
  if (vidadelacriatura == 0)
  {
    gamestate = "end";
  }
  if (javier.isTouching(hueso1) || javier.isTouching(hueso2) || javier.isTouching(hueso3) || javier.isTouching(hueso4) || javier.isTouching(hueso5) || javier.isTouching(hueso6))
  {
    hueso1.setVelocity(0,0);
    hueso2.setVelocity(0,0);
    hueso3.setVelocity(0,0);
    hueso4.setVelocity(0,0);
    hueso5.setVelocity(0,0);
    hueso6.setVelocity(0,0);
    gamestate = "end2";
    stopSound("assets/WhatsApp-Audio-2023-01-18-at-3.45.19-PM.mp3");
  }
  if (gamestate == "end"){
    textSize(19);
    stroke("blue");
    text("HAS GANADO",100,60);
    hueso1.setVelocity(0,0);
    hueso2.setVelocity(0,0);
    hueso3.setVelocity(0,0);
    
    stopSound("assets/WhatsApp-Audio-2023-01-18-at-3.45.19-PM.mp3");
    win = win+1;
  }
  if (gamestate == "end2"){
    textSize(19);
    stroke("red");
    text("NO TE RINDAS!",100,60);
    win = win+1;
    
  }

if  (keyDown("W")) {
    javier.y=javier.y-10;
  }
if (keyDown("S")) {
  javier.y=javier.y+10;
}
if (keyDown("A")) {
  javier.x=javier.x-10;
}
if (keyDown("D")) {
  javier.x=javier.x+10;
}


textSize(19);
stroke("red");
text("Vida de criatura : "+vidadelacriatura,25,25);
javier.setAnimation("corazon.jpg_1");
orillas.shapeColor = ("white");
orillas4.shapeColor = ("white");
orillas3.shapeColor = ("white");
orillas2.shapeColor = ("white");
javier.bounceOff(orillas);
javier.bounceOff(orillas2);
javier.bounceOff(orillas3);
javier.bounceOff(orillas4);
hueso1.setAnimation("huesos.png_1");
hueso2.setAnimation("huesos.png_1");
hueso3.setAnimation("huesos.png_1");
hueso4.setAnimation("huesos.png_2");
hueso5.setAnimation("huesos.png_2");
hueso6.setAnimation("huesos.png_2");
criatura.setAnimation("Sans_undertale.jpg_1");

if (win == 1){
      playSound("assets/WhatsApp-Audio-2023-01-18-at-3.49.15-PM.mp3",false);
    }

  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
