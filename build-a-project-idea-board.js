const projectStatus = {PENDING:{description:"Pending Execution"},
SUCCESS:{description:"Executed Successfully"},
FAILURE:{description:"Execution Failed"}
};

class ProjectIdea {
  constructor(title, description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
};


class ProjectIdeaBoard{
  constructor(title){
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea){
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea){
    this.ideas.splice(this.ideas.indexOf(projectIdea),1)
  }

  count(){
    return this.ideas.length;
  }

  formatToString(){
    let outString = `${this.title} has ${this.count()} idea(s)\n`
    this.ideas.forEach((idea) => 
    outString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`)
    return outString;
  }
}

const projectIdea = new ProjectIdea("testtile", "testdescr");
const projectIdea2 = new ProjectIdea("testidea2", "testdescr2");
const projectIdea3 = new ProjectIdea("testidea3", "testdescr3");
console.log(projectIdea3.status)

const testBoard = new ProjectIdeaBoard("Empty Board")
testBoard.pin(projectIdea)
testBoard.pin(projectIdea2)
testBoard.pin(projectIdea3)
testBoard.unpin(projectIdea2)
// console.log(testBoard.title);
console.log(testBoard.formatToString());

