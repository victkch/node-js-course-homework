import {
  projectManager1,
  businessAnalyst1,
  businessAnalyst2,
  frontEndDeveloper1,
  frontEndDeveloper2,
  backEndDeveloper1,
  backEndDeveloper2,
  backEndDeveloper3,
  qa1,
  qa2,
} from "./task1";

class Task {
  name: string;
  whoCreated: any;
  whoGets: any;
  status: string;
  constructor(name: string, whoCreated: any, whoGets: any, status: string) {
    this.name = name;
    this.whoCreated = whoCreated;
    this.whoGets = whoGets;
    this.status = status;
  }
  setNewWorkers(whoCreated: any, whoGets: any, status: string) {
    this.whoCreated = whoCreated;
    this.whoGets = whoGets;
    this.status = status;
  }
  changeTaskStatus(whoChanges: any, status: string): void {
    if (whoChanges === this.whoGets) {
      this.status = status;
    } else console.log("You cannot change this task's status.");
  }
}
console.log("Task 1:");
const task1: Task = new Task("First Task", projectManager1, businessAnalyst1, "To do");
console.log(task1.status);
task1.changeTaskStatus(businessAnalyst1, "In process");
console.log(task1.status);
task1.setNewWorkers(businessAnalyst1, frontEndDeveloper2, "To do");
console.log(task1.status);
task1.changeTaskStatus(frontEndDeveloper2, "In process");
console.log(task1.status);
task1.setNewWorkers(frontEndDeveloper2, qa1, "To do");
console.log(task1.status);
task1.changeTaskStatus(qa1, "In process");
console.log(task1.status);
task1.changeTaskStatus(qa1, "QA");
console.log(task1.status);
task1.changeTaskStatus(qa1, "Done");
console.log(task1.status);
