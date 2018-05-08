var background = document.querySelector('.right');
var circle = document.querySelector('.circle');

var circleColor = document.querySelector('#circlecolor');
var backColor =  document.querySelector('#backcolor');
var circleImage = document.querySelector('#circleimage');
var backImage = document.querySelector('#backimage');
var circleRadius = document.querySelector('#radius');
var speed = document.querySelector('#range');



circleColor.addEventListener('change',function(){
    var circleColorValue = circleColor.value;
    circle.style.background = circleColorValue;
})

backColor.addEventListener('change',function(){
    var backColorValue = backColor.value;
    background.style.background = backColorValue;
})

speed.addEventListener('mousemove',function(){
    var speedValue = speed.value;
   circle.style.animationDuration = speedValue/10 + "s";
})
circleImage.addEventListener('change',function(){
    var circleImageValue = circleImage.value;
    circle.style.background= "url('"+circleImageValue+"')" ;
    circle.style.backgroundSize= 'cover';

})

backImage.addEventListener('change',function(){
    var backImageValue = backImage.value;
    background.style.background= "url('"+backImageValue+"')" ;
    background.style.backgroundSize= 'cover';

})

circleRadius.addEventListener('change',function(){
    var circleRadiusValue = circleRadius.value;
    circle.style.width = circleRadiusValue + 'px';
    circle.style.height = circleRadiusValue + 'px';
    circleRadius.value = '';

})