class Employee {
    constructor(firstName, lastName, isWorking) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.isWorking = isWorking;
    }
    
    startWork() {
        this.isWorking = true;
    }
    
    introduce(){
        return `${this.firstName} ${this.lastName}`;
    }
  }
  
  class Developer extends Employee{
      constructor(firstName, lastName, isWorking, language) {
      super(firstName, lastName, isWorking);
      this.language = language;
    }
    
    getLang() {
        return this.language;
    }
    
    introduce(){
        return `Hello, ${this.firstName} ${this.lastName}. You are ${this.language} developer`;
    }
  }
  
  class Manager extends Employee{
      constructor(firstName, lastName, isWorking, role) {
      super(firstName, lastName, isWorking);
      this.role = role;
    }
    
    getRole() {
        return this.role;
    }
    
    introduce(){
        return `Hello, ${this.firstName} ${this.lastName}. You are ${this.language} Manager`;
    }
    
    interview(){
        return console.log('You are an interviewer!');
    }
    
    startWork() {
        super.startWork();
        this.interview();
    }
  }
  
  const jsDev = new Developer('John', 'Maxwell', true, 'JavaScript');
  const PM = new Manager('Thomas', 'Doe', true, 'Project');