const canvas = document.getElementById('mainCanvas');

// new var context will take info from canvas and call getContext build in methode
//getContext can only be call in variable that holds reference to canvas element
//when pass argument 2d it will create an instance of built in canvas 2d api object that contain all properties and drawing methods
const context = canvas.getContext('2d');

//make sure it have correct scaling because if I don't it will set canvas width and height it will default to 300x150 px
const canvasWidth = canvas.width = 100;
const canvasHeight = canvas.height = 100;

// game speed
let gameSpeed = 5;

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
backgroundDistantClouds2.src = "09_distant_clouds1.png";

//3rd fast
const backgroundDistantTrees = new Image();
backgroundDistantTrees.src = "03_distant_trees.png";
const backgroundBushes = new Image();
backgroundBushes.src = "04_bushes.png";

//2nd fast
const backgroundDistantClouds = new Image();
backgroundDistantClouds.src = "img/10_distant_clouds.png";

//1st fast and same speeds
const backgroundClouds = new Image();
backgroundClouds.src = "08_clouds.png";
const backgroundTreesAndBushes = new Image();
backgroundTreesAndBushes.src = "img/02_trees and bushes.png";
const backgroundGround = new Image();
backgroundGround.src = "img/01_ground.png";



