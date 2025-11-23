class Bank {
  name = "Global Bank";
  #passcode = "1234"; // private field

  #log() {
    console.log(`name in log ${this.name}`);
    console.log(`name in log ${this.#passcode}`);
  }
  deposit() {
    console.log(`inside the deposit: ${this.name}`);
    console.log(`inside the deposit: ${this.#passcode}`);
  }

  static staticMethod() {
    console.log(`inside the `);
    console.log(`inside the `);
  }

  get getval() {
    console.log(`inside the get:${this.name}`);
    console.log(`inside the get:${this.#passcode}`);
  }

  set setval(a) {
    this.#passcode = a;
    console.log(`after set val:${this.#passcode}`);
  }
}

const minibank = new Bank();
console.log(minibank);
