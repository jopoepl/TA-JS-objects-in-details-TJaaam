// //Using function to create object

// function createProject (name, id, noOfProjects) {
//     let project = {};
//     project.name = name;
//     project.id = id;
//     project.projectsnumber = noOfProjects;
//     project.getProjects = function() {
//         return project.projectsnumber;
//     }
//     project.changeName = function(newName){
//         project.name = newName;
//         return project.name;
//     }
//     project.incrementProject = function(newNo = 1){
//         project.projectsnumber = project.projectsnumber + newNo;
//         return project.projectsnumber;
//     }
//     project.decrementProject = function(newNo = -1){
//         project.projectsnumber = project.projectsnumber + newNo;
//         return project.projectsnumber;
//     }
//     return project;
// }

// let projectOne = createProject("Altcampus", 1, 10)

// console.log(projectOne.name)
// console.log(projectOne.id)
// console.log(projectOne.getProjects())
// console.log(projectOne.changeName("Altspace"))
// console.log(projectOne.incrementProject(2))


// Prototypal Pattern

// function createProject(name, id, noOfProjects) {
//     let project = Object.create(createProject.prototype);
//     project.name = name;
//     project.id = id;
//     project.projectsnumber = noOfProjects;
//     return project;
// }

//  createProject.prototype = {
//     getProjects: function() {
//         return this.projectsnumber;
//     },
//     changeName: function(newName){
//         this.name = newName;
//         return this.name;
//     },
//     incrementProject:function(newNo = 1){
//         this.projectsnumber = this.projectsnumber + newNo;
//         return this.projectsnumber;
//     },
//     decrementProject: function(newNo = -1){
//         this.projectsnumber = this.projectsnumber + newNo;
//         return this.projectsnumber;
//     }
//  }

//  let projectOne = createProject("Altcampus", 1, 10)

// console.log(projectOne.name)
// console.log(projectOne.id)
// console.log(projectOne.getProjects())
// console.log(projectOne.changeName("Altspace"))
// console.log(projectOne.incrementProject(2))

// Psuedoclassical Way


// function CreateProject(name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.projectsnumber = noOfProjects;
// }

//  CreateProject.prototype = {
//     getProjects: function() {
//         return this.projectsnumber;
//     },
//     changeName: function(newName){
//         this.name = newName;
//         return this.name;
//     },
//     incrementProject:function(newNo = 1){
//         this.projectsnumber = this.projectsnumber + newNo;
//         return this.projectsnumber;
//     },
//     decrementProject: function(newNo = -1){
//         this.projectsnumber = this.projectsnumber + newNo;
//         return this.projectsnumber;
//     }
//  }

//  let projectOne = new CreateProject("Altcampus", 1, 10)

// console.log(projectOne.name)
// console.log(projectOne.id)
// console.log(projectOne.getProjects())
// console.log(projectOne.changeName("Altspace"))
// console.log(projectOne.incrementProject(2))


// Class Method

class CreateProject {
    constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.projectsnumber = noOfProjects;
    }
    getProjects() {
        return this.projectsnumber;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    incrementProject(newNo = 1){
        this.projectsnumber = this.projectsnumber + newNo;
        return this.projectsnumber;
    }
    decrementProject(newNo = 1){
        this.projectsnumber = this.projectsnumber - newNo;
        return this.projectsnumber;
    }
}


let projectOne = new CreateProject("Altcampus", 1, 10)

console.log(projectOne.name)
console.log(projectOne.id)
console.log(projectOne.getProjects())
console.log(projectOne.changeName("Altspace"))
console.log(projectOne.incrementProject(2))
console.log(projectOne.decrementProject(5))