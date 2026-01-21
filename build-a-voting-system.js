const poll = new Map();

const addOption = (option) => {
  if(!option) return "Option cannot be empty."
  if(!poll.has(option)){
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
  } else if (poll.has(option)){
    return `Option "${option}" already exists.`
  }
};

const vote = (option, voterId) => {
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`
  }
    if(poll.get(option).has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }else{
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`
  } 
}

const displayResults = () => {
  let outString = "Poll Results:\n"
  poll.forEach((val,key) => {
    outString += `${key}: ${val.size} votes\n`});
  let output = outString.substring(0, outString.length - 1);
  return output;
}


addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey","121");
vote("Morocco","120");
vote("Turkey","123");
console.log(displayResults());


