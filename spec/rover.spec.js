const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
it("constructor sets position and default values for mode and generatorWatts", function() {
  let rover = new Rover(4);
  expect(rover.position).toEqual(4);
  expect(rover.mode).toEqual("NORMAL");
  expect(rover.generatorWatts).toEqual(110);
});

// test 8
 it("response returned by receiveMessage contains the name of the message", function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    
let response = rover.receiveMessage(message).message;
console.log("test 8:" + response);
expect(response).toEqual(message.name);

  });
  // test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(4);
    let response = rover.receiveMessage(message).results.length;
    expect(response).toEqual(2);
 
  });
  //test 10
  it("responds correctly to the status check command", function(){
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message("commandCheck", commands);
    let rover = new Rover(4);
    let expected = {completed: true, roverStatus: 
      {mode: "NORMAL", 
       generatorWatts: 110, 
       position: 4}}
    let response = rover.receiveMessage(message).results[0];
      expect(response).toEqual(expected);
  });
  //test 11
  it("responds correctly to the mode change command", function() {
    let commands = [new Command('MODE_CHANGE')];
    let message = new Message("commandCheck", commands);
    let rover = new Rover(4);
    let response = rover.receiveMessage(message);
     expect(rover.mode).toEqual("NORMAL");
     expect(response.results[0].completed).toEqual(true);
  })
  //test 12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [new Command('MODE_CHANGE','LOW_POWER'), new Command('MOVE', 4)];
    let message = new Message("commandCheck", commands);
    let rover = new Rover(4);
    let response = rover.receiveMessage(message);
    expect(rover.mode).toEqual('LOW_POWER');
    expect(response.results[0].completed).toEqual(true);
    expect(rover.position).toEqual(4);
    expect(rover.results.response[1]).toEqual(false);
  })
  //test 13
  it()

});
