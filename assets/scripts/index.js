let constrain = 500;

let containerOne = document.querySelector(".main");
let elementOne = document.querySelector(".image_1");

let containerTwo = document.querySelector(".main.right");
let elementTwo = document.querySelector(".image_2");

let containerThree = document.querySelector(".main.three");
let elementThree = document.querySelector(".image_3");

let containerFour = document.querySelector(".main.four");
let elementFour = document.querySelector(".image_4");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
+ "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

containerOne.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([elementOne]);

  window.requestAnimationFrame(function(){
    transformElement(elementOne, position);
  });
};

containerTwo.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([elementTwo]);
  
    window.requestAnimationFrame(function(){
      transformElement(elementTwo, position);
    });
};

containerThree.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([elementThree]);

  window.requestAnimationFrame(function(){
    transformElement(elementThree, position);
  });
};

containerFour.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([elementFour]);

  window.requestAnimationFrame(function(){
    transformElement(elementFour, position);
  });
};