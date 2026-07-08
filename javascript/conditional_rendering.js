// const number = 5;
// let message;

// if(number % 2 == 0) {
//     message = "Even number";
// }else{
//     message = "Odd number";
// }

// console.log(message);

// using ternary operator
// const number = 2;

// const message = number % 2 == 0 ? 'Even number' : 'Odd number';

// console.log(message);

// const note = {
//     title: 'Meeting notes',
//     content: 'Discuss project roadmap',
//     timestamp: Date.now(),
//     isPinned: true
// }

// const noteText = 
// `
//     Title: ${note.title},
//     Status: ${note.isPinned ? 'Pinned' : 'Regular note'},
//     Last Edited: ${new Date(note.timestamp).toLocaleDateString()}
// `;

// console.log(noteText);

// short circuit rendering

// console.log(true && 'Hello');

const isLoggedIn = true;

// function showWelcome() {
//     return isLoggedIn && 'Welcome, user';
// }

const showWelcome = () => {
    return isLoggedIn && 'Welcome, user';
}

console.log(showWelcome());