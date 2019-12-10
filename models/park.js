const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  for( var i = 0; i < this.dinosaurs.length; i++){
    if ( this.dinosaurs[i] == dinosaur) {
      this.dinosaurs.splice(i, 1);
      break
    };
  };
};

Park.prototype.mostAttractiveDinosaur = function () {
  let mostAttractiveDinosaur = this.dinosaurs[0]
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay) {
      mostAttractiveDinosaur = dinosaur
    };
  };
  return mostAttractiveDinosaur
};

Park.prototype.findBySpecies = function (species) {
  let dinosaurArray = []
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species == species) {
      dinosaurArray.push(dinosaur)
    };
  };
  return dinosaurArray
};

Park.prototype.totalVisitors = function () {
  let totalVisitors = 0
  for (dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay
  };
  return totalVisitors
};

Park.prototype.removeSpecies = function (species) {
  for( var i = 0; i < this.dinosaurs.length; i++){
    if ( this.dinosaurs[i].species == species) {
      this.dinosaurs.splice(i, 1);
    };
  };
};

Park.prototype.dietTypes = function () {
  let dietTypes = {Carnivore: 0, Herbivore: 0, Omnivore: 0}
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.diet == "Carnivore") {
      dietTypes.Carnivore += 1
    }
    else if (dinosaur.diet == "Herbivore") {
      dietTypes.Herbivore += 1
    }
    else {
      dietTypes.Omnivore += 1
    };
  };
  return dietTypes
};

module.exports = Park;
