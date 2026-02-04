const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timestamp){
  const now = new Date();
  const parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*$/.exec(timestamp);
  console.log(parts.slice(1).map((p) => parseInt(p, 10)));
}


let test = "2024-05-20T14:30:00"
timeAgo(test)

// let n = testTimestamp.match(regex);
// // console.log(n)

// function parseDate(input) {
//   const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
//   if (!parts) {
//     return null;
//   }
//   return parts.slice(1).map((p) => parseInt(p, 10));
// }

// parseDate("2019-01-01"); // [2019, 1, 1]
// parseDate("2019-06-19"); // [2019, 6, 19]
