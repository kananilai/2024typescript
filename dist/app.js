"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.reports = reports;
    }
    addReport(text) {
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
