const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;
let dinosaur4;
let dinosaur5;
  beforeEach(function () {
    dinosaur1 = new Dinosaur("T-Rex", "Carnivore", 350)
    dinosaur2 = new Dinosaur("Brachiosaurus", "Herbivore", 200)
    dinosaur3 = new Dinosaur("Raptor", "Carnivore", 125)
    dinosaur4 = new Dinosaur("T-Rex", "Carnivore", 250)
    dinosaur5 = new Dinosaur("Oviraptor", "Omnivore", 70)
    park = new Park("Jurassic Park", 50, [dinosaur1, dinosaur2])
  });

  it('should have a name', function(){
    const result = park.name;
    assert.strictEqual(result, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const result = park.ticketPrice;
    assert.strictEqual(result, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const result = park.dinosaurs;
    assert.deepStrictEqual(result, [dinosaur1, dinosaur2])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur3)
    const result = park.dinosaurs;
    assert.deepStrictEqual(result, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur2)
    const result = park.dinosaurs;
    assert.deepStrictEqual(result, [dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const result = park.mostAttractiveDinosaur();
    assert.strictEqual(result, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur4)
    const result = park.findBySpecies("T-Rex")
    assert.deepStrictEqual(result, [dinosaur1, dinosaur4])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const result = park.totalVisitors()
    assert.strictEqual(result, 550)
  });

  it('should be able to calculate the total number of visitors per year', function(){{}
    const result = (park.totalVisitors() * 365)
    assert.strictEqual(result, 200750)
  });

  it('should be able to calculate total revenue for one year', function(){
    const result = park.totalVisitors() * (365 * park.ticketPrice)
    assert.strictEqual(result, 10037500)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur4)
    park.removeSpecies("T-Rex")
    assert.deepStrictEqual(park.dinosaurs, [dinosaur2])
  });

  it('should have a record number of the diet types', function(){
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    result = park.dietTypes()
    assert.deepStrictEqual(result, {Carnivore: 3, Herbivore: 1, Omnivore: 1})
  });
  
});
