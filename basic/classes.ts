abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("IT department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    //必ず値を返す
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();

const it = new ITDepartment("d2", ["Max"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.mostRecentReport = "most recent report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.printReports();

it.addEmployee("Manu");
it.addEmployee("Max");

accounting.describe();
// accounting.printEmployeeInformation();

it.describe();
it.printEmployeeInformation();

// console.log(accounting);
// console.log(it);

class AgedPerson {
  constructor(public name: string, public age: number) {}
}

const person1 = new AgedPerson("Max", 30);

class AgedPerson2 extends AgedPerson {
  constructor(name: string, age: number, private department: string) {
    super(name, 40);
    this.department = department;
  }
}

const person2 = new AgedPerson2("Max", 30, "IT");
console.log(person2);
