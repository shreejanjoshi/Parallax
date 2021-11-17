const canvas = document.getElementById('mainCanvas');

// new var context will take info from canvas and call getContext build in methode
//getContext can only be call in variable that holds reference to canvas element
//when pass argument 2d it will create an instance of built in canvas 2d api object that contain all properties and drawing methods
const context = canvas.getContext('2d');

//make sure it have correct scaling because if I don't it will set canvas width and height it will default to 300x150 px
const canvasWidth = canvas.width = 800;
const canvasHeight = canvas.height = 700;

// game speed
let gameSpeed = 3;

//this is built in image class constructor it simply creates an image element
//image constructor have same functionality as the document.createElement("img");
//this simply creating html image elemeny and saving it in this variable

//6th fast
const backgroundDistantClouds5 = new Image();
backgroundDistantClouds5.src = "img/10_distant_clouds.png";

//5th fast
const backgroundHugeClouds = new Image();
backgroundHugeClouds.src = "img/07_huge_clouds.png";

//4th fast and same speed
const backgroundHill2 = new Image();
backgroundHill2.src = "img/06_hill2.png";
const backgroundDistantClouds2 = new Image();
backgroundDistantClouds2.src = "img/09_distant_clouds1.png";

//3rd fast
const backgroundDistantTrees = new Image();
backgroundDistantTrees.src = "img/03_distant_trees.png";
const backgroundBushes = new Image();
backgroundBushes.src = "img/04_bushes.png";

//2nd fast
const backgroundHill1 = new Image();
backgroundHill1.src = "img/05_hill1.png";

//1st fast and same speeds
const backgroundClouds = new Image();
backgroundClouds.src = "img/08_clouds.png";
const backgroundTreesAndBushes = new Image();
backgroundTreesAndBushes.src = "img/02_trees and bushes.png";
const backgroundGround = new Image();
backgroundGround.src = "img/01_ground.png";

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 800;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundDistantClouds5, 0.07);
const layer2 = new Layer(backgroundHugeClouds, 0.08);
const layer3 = new Layer(backgroundHill2, 0.09);
const layer4 = new Layer(backgroundDistantClouds2, 0.09);
const layer5 = new Layer(backgroundBushes, 0.1);
const layer6 = new Layer(backgroundHill1, 0.2);
const layer7 = new Layer(backgroundDistantTrees, 0.2);
const layer8 = new Layer(backgroundClouds, 0.4);
const layer9 = new Layer(backgroundTreesAndBushes, 0.4);
const layer10 = new Layer(backgroundGround, 0.4);



//this will contain all the code to loop
function animate() {
    // context.drawImage(backgroundDistantClouds5, x, 0) this methode will take image and it will draw it on canvas
    // 1st argument is the image backgroundDistantClouds5
    // 0, 0 is codinate from top left corner

    // context.clearRect(0, 0, canvasWidth, canvasHeight); without this we will also see old img and it will overlap each other so to remove that we us this
    //it is build in method it expect 4 arguments to determine what part of canvas I want to delete
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    layer1.update();
    layer1.draw();
    layer2.update();
    layer2.draw();
    layer3.update();
    layer3.draw();
    layer4.update();
    layer4.draw();
    layer5.update();
    layer5.draw();
    layer6.update();
    layer6.draw();
    layer7.update();
    layer7.draw();
    layer8.update();
    layer8.draw();
    layer9.update();
    layer9.draw();
    layer10.update();
    layer10.draw();

    // builtin animation function and pass animate 
    requestAnimationFrame(animate);
};
//This way animate will run over and over creating animation loop
animate();


