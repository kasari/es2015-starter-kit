import Person from './person';

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    writeName() {
      document.write(`My name is ${this.name}.`);
    }
}

var friend = new Friend('hi');

friend.writeName();
