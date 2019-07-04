var createBicyclePrototye = (function() {
  return {
    speed: 0,
    applyBreak: function(value) {
      return parseInt(this.speed - value);
    },
    speedUp: function(value) {
      return parseInt(this.speed + value);
    }
  };
})();

var createMountainBikeProtoype = function(protoParam) {
  var newObj = Object.create(protoParam);
  newObj.gear = 1;
  newObj.setGear = function(gearValue) {
    newObj.gear = gearValue;
  };

  return newObj;
};

var start = function() {
  var bicyclePrototype = Object.create(createBicyclePrototye);
  var mountainBikePrototype = Object.create(
    createMountainBikeProtoype(bicyclePrototype)
  );

  console.log(bicyclePrototype.speed);
  console.log(bicyclePrototype.speedUp(20));

  mountainBikePrototype.setGear(5);
  console.log(mountainBikePrototype.gear);
};

start();
