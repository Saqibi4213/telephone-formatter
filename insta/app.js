const requestBtn = document.querySelector('.request-btn');

let isFriendRequested = false;

requestBtn.addEventListener('click', () => {
  if (isFriendRequested) {
    requestBtn.textContent = 'Send Friend Request';
    requestBtn.classList.remove('sent');
    isFriendRequested = false;
  } else {
    requestBtn.textContent = 'Request Sent';
    requestBtn.classList.add('sent');
    isFriendRequested = true;
  }
});