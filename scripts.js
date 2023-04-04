let elem = document.querySelector('.container');
// var store_1=elem.style.color;
elem.addEventListener('mouseover',changecolor);
elem.addEventListener('mouseout',function(){
    // document.querySelector('.container').style.color = store_1;
    document.querySelector('.container').style.boxShadow = "0.625rem 0.625rem 0.625rem 0.625rem #0bc4b1";
    // document.querySelector('.container').style.border= 'none';
});
console.log('hello');
function changecolor() {
    // console.log('hello1');
    // document.querySelector('.container').style.color = 'red';
    elem.style.boxShadow = '0 0 0.725rem #0bc4b1';
    // elem.style.border = '2px solid #0bc4b1';


}



(function() {
    // Init
    var outer = document.getElementById("outer"),
      container = document.getElementById("container");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(outer);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      container.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / container.offsetHeight / 2).toFixed(2),
        (mouse.x / container.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      container.style.transform = style;
      container.style.webkitTransform = style;
      container.style.mozTransform = style;
      container.style.msTransform = style;
      container.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    outer.onmouseenter = onMouseEnterHandler;
    outer.onmouseleave = onMouseLeaveHandler;
    outer.onmousemove = onMouseMoveHandler;
  })();