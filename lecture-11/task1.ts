interface Person {
  firstName: string;
  lastName: string;
  occupation: string;
  action(): void;
}
class ProjectManager implements Person {
  firstName: string;
  lastName: string;
  occupation: string;
  constructor(firstName: string, lastName: string, occupation: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }
  action(): void {
    console.log(`Project manager - ${this.firstName} ${this.lastName} - leads a team through the project life cycle by planning and tracking a project plan.`);
  }
  setTaskForBA(worker: BusinessAnalyst): void {
    console.log(`${this.firstName} ${this.lastName} tells to ${worker.firstName} ${worker.lastName} to research potential business opportunities to determine whether they're financially practical choices.`);
  }
  setTaskForFED(worker: FrontEndDeveloper): void {
    console.log(`${this.firstName} ${this.lastName} tells to ${worker.firstName} ${worker.lastName} to ensure that website visitors can easily interact with the page.`);
  }
  setTaskForBED(worker: BackEndDeveloper): void {
    console.log(`${this.firstName} ${this.lastName} tells to ${worker.firstName} ${worker.lastName} to write code that forms the backbone of a website or app.`);
  }
  setTaskForQA(worker: BackEndDeveloper): void {
    console.log(`${this.firstName} ${this.lastName} tells to ${worker.firstName} ${worker.lastName} to create and execute processes to ensure teams produce quality deliverables.`);
  }
}
class BusinessAnalyst implements Person {
  firstName: string;
  lastName: string;
  occupation: string;
  constructor(firstName: string, lastName: string, occupation: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }
  action(): void {
    console.log(`Business analyst - ${this.firstName} ${this.lastName} - is responsible for enhancing the quality of IT products and services, and analyzing data to inform business decisions.`);
  }
}
class FrontEndDeveloper implements Person {
  firstName: string;
  lastName: string;
  occupation: string;
  constructor(firstName: string, lastName: string, occupation: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }
  action(): void {
    console.log(`Front-end developer - ${this.firstName} ${this.lastName} - is responsible for developing new user-facing features and determining the structure and design of web pages.`);
  }
}
class BackEndDeveloper implements Person {
  firstName: string;
  lastName: string;
  occupation: string;
  constructor(firstName: string, lastName: string, occupation: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }
  action(): void {
    console.log(`Back-end developer - ${this.firstName} ${this.lastName} - is responsible for creating and maintaining technology at the back end of a website.`);
  }
}
class QA implements Person {
  firstName: string;
  lastName: string;
  occupation: string;
  constructor(firstName: string, lastName: string, occupation: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }
  action(): void {
    console.log(`QA - ${this.firstName} ${this.lastName} - is responsible for monitoring and proposing measures to correct or improve final products.`);
  }
}

const projectManager1: ProjectManager = new ProjectManager("Derek", "Grey", "Project Manager");
const businessAnalyst1: BusinessAnalyst = new BusinessAnalyst("Meredith", "Shepherd", "Business Analyst");
const businessAnalyst2: BusinessAnalyst = new BusinessAnalyst("Cristina", "Sloan", "Business Analyst");
const frontEndDeveloper1: FrontEndDeveloper = new FrontEndDeveloper("Mark", "Yang", "Front-End Developer");
const frontEndDeveloper2: FrontEndDeveloper = new FrontEndDeveloper("Addison", "Karev", "Front-End Developer");
const backEndDeveloper1: BackEndDeveloper = new BackEndDeveloper("Alex", "Wilson", "Back-End Developer");
const backEndDeveloper2: BackEndDeveloper = new BackEndDeveloper("George", "Stevens", "Back-End Developer");
const backEndDeveloper3: BackEndDeveloper = new BackEndDeveloper("Isobel", "Weber", "Back-End Developer");
const qa1: QA = new QA("April", "Avery", "QA");
const qa2: QA = new QA("Jackson", "Kepner", "QA");

console.log("Project team:");
projectManager1.action();
businessAnalyst1.action();
businessAnalyst2.action();
frontEndDeveloper1.action();
frontEndDeveloper2.action();
backEndDeveloper1.action();
backEndDeveloper2.action();
backEndDeveloper3.action();
qa1.action();
qa2.action();

console.log("Tasks for a team:");
projectManager1.setTaskForBA(businessAnalyst1);
projectManager1.setTaskForBA(businessAnalyst2);
projectManager1.setTaskForFED(frontEndDeveloper1);
projectManager1.setTaskForFED(frontEndDeveloper2);
projectManager1.setTaskForBED(backEndDeveloper1);
projectManager1.setTaskForBED(backEndDeveloper2);
projectManager1.setTaskForBED(backEndDeveloper3);
projectManager1.setTaskForQA(qa1);
projectManager1.setTaskForQA(qa2);

export {
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
};