class Message {
   constructor(name, commands) {
      this.name = "name";
        if (!name) {
        throw Error("name required.");
      }
      this.commands = [];
    }

}

module.exports = Message;