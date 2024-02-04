class Department {
  // name: string;
  // private employees: string[] = [];
  // constructor(n: string) {
  //   this.name = n;
  // }
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

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();

console.log(accounting);

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };

// accountingCopy.describe();
