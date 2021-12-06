function setup() {
  createCanvas(400, 400);
}
var xEnglish = 99;
var yEnglish = 34;
var xHawaiian = -200;
var yHawaiian = 84;
var xSpanish = 400;
var ySpanish = 134;
var xIcelandic = -200;
var yIcelandic = 184;
var xFrench = 400;
var yFrench = 234;
var xDutch = -200;
var yDutch = 284; 
var xItalian = 400;
var yItalian = 334;
var xGerman = -300;
var yGerman = 384;

function draw() {
    background(204, 185, 178);
    noStroke();
    
    //floor
    fill(212, 202, 163);
    rect(-3, 341, 427, 105);
    
    //windows
    fill(158, 225, 242);
    rect(245, 100, 120, 120);
    fill(141, 172, 184);
    rect(302, 100, 5, 120);
    rect(361, 100, 5, 120);
    rect(245, 100, 5, 120);
    rect(246, 160, 120, 5);
    rect(246, 219, 120, 5);
    rect(246, 97, 120, 5);
    
    //snow
    fill(240, 247, 250);
    ellipse(265, 118, 8, 8);
    ellipse(330, 138, 8, 8);
    ellipse(275, 181, 8, 8);
    ellipse(325, 200, 8, 8);
    ellipse(287, 147, 8, 8);
    ellipse(347, 118, 8, 8);
    
    //presents
    fill(210, 236, 245);
    rect(210, 250, 124, 99);
    fill(255, 0, 0);
    rect(295, 250, 8, 100);
    rect(202, 287, 136, 8);
    rect(178, 286, 82, 64);
    rect(340, 251, 50, 40);
    fill(242, 218, 65);
    rect(178, 317, 81, 8);
    rect(214, 284, 8, 70);
    rect(244, 310, 73, 40);
    fill(42, 194, 8);
    rect(324, 290, 85, 61);
    rect(278, 309, 6, 43);
    ellipse(281, 310, 30, 6);
    ellipse(281, 312, 6, 30);
    fill(255, 255, 255);
    rect(360, 290, 9, 61);
    ellipse(364, 252, 6, 34);
    ellipse(370, 251, 19, 6);
    ellipse(358, 251, 19, 6);
    
    //Christmas tree 
    fill(128, 110, 72);
    rect(49, 292, 50, 50);
    fill(97, 163, 72);
    triangle(73, 43, 2, 124, 151, 124);
    triangle(74, 59, -14, 183, 167, 183);
    triangle(77, 117, -30, 234, 179, 234);
    triangle(77, 159, -57, 316, 201, 316);
    fill(248, 255, 153);
    ellipse(73, 48, 58, 8);
    ellipse(73, 48, 8, 58);
    
    //ornaments
    fill(245, 10, 10);
    ellipse(115, 164, 20, 20);
    ellipse(47, 99, 20, 20);
    ellipse(84, 222, 20, 20);
    ellipse(6, 296, 20, 20);
    fill(251, 255, 0);
    ellipse(47, 166, 18, 18);
    ellipse(142, 279, 18, 18);
    ellipse(24, 249, 18, 18);
    fill(218, 228, 237);
    ellipse(95, 118, 20, 20);
    ellipse(72, 285, 20, 20);
    
    //Multilingual Merry Christmas
    textSize(28);
    fill(207, 16, 48);
    text("Merry Christmas!", xEnglish, yEnglish); 
    fill(0, 0, 0);
    text("¡Feliz Navidad!", xSpanish, ySpanish);
    text("Joyeux Noël!", xFrench, yFrench);
    text("Buon Natale!", xItalian, yItalian);
    text("Mele Kalikimaka!", xHawaiian, yHawaiian);
    text("Gle∂ileg Jól!", xIcelandic, yIcelandic);
    text("Vrolijk Kerstfeest!", xDutch, yDutch);
    text("Frohe Weihnachten!", xGerman, yGerman);
  
  //Animations
  xHawaiian += 1;
  xSpanish += -1;
  xIcelandic += 1;
  xFrench += -1;
  xDutch += 1;
  xItalian += -1;
  xGerman += 1;
};