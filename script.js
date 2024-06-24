'use strict';
//! ClassList and Event Delegation
// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'rwerwe', 'www'));
// console.log(btns[0].classList.remove('rwerwe'));
// console.log(btns[0].classList.toggle('www'));
// console.log(btns[0].className);

// if (btns[0].classList.contains('red')) {
//     console.log('we have');
// } else {
//     console.log('we DO NOT have');
// }

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red'); //! same function above
// });


//todo How to add event listner for all btns once
// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == "BUTTON") {
//         console.log('You did it!');
//     }
// });

// const addBtn = document.createElement('button'); // it will here in new button as well
// addBtn.classList.add('red');
// wrapper.append(addBtn);

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.matches("button.red")) {
//         console.log('You did it!'); // it will here in new button as well
//     } else {
//         console.log('it does not have class name red')
//     }
// });