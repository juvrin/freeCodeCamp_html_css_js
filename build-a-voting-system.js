const poll = new Map();

const addOption = (option) => {
  if(!option) return "Option cannot be empty"
  if(!poll.has(option)){
    poll.set(option, new Set());
    return `Option ${option} added to the poll.`
  } else if (poll.has(option)){
    return `Option ${option} already exists.`
  }
};

console.log(addOption("ajskld"));
console.log(addOption("ajskld"));