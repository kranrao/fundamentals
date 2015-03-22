var obj = {
  name: 'kiran',
  mtd: function(){
    console.log(this);
  }
}

///// this patterns /////

// global

console.log(this); // refers to the window object

// free function

var func = function(){
  console.log(this);
};

func() // refers to the window object

// call or apply

func.call(obj); // refers to the first argument in call or apply
func.apply(obj); // refers to the first argument in call or apply

// method innovation

obj.mtd() // refers to object on the left of the CALL TIME dot.  NOTE: New overides any left of the dot rules

// construction mode

var Car = function(name){
  this.name = name;  
}

var car = new Car('honda'); // refers to a new object created for that invocation

console.log(car.name);

