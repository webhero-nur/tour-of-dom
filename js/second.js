console.log('second.js');

// 1. where
const secondList = document.getElementById('second-list');
// 2. what
const li = document.createElement('li');
li.innerText = 'My dynamic item';

// 3. add
secondList.appendChild(li);