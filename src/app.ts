class Department {
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);
const it = new ITDepartment("d2", ["Max"]);


accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.addReport("Something went wrong...");
accounting.printReports();

it.addEmployee("Manu");
it.addEmployee("Max");

accounting.describe();
accounting.printEmployeeInformation();

it.describe();
it.printEmployeeInformation();

console.log(accounting);
console.log(it);
