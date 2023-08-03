const onBudy = document.querySelector('body');

const onStart = onBudy.addEventListener('click', onClick);

function onClick(event) {
  if (
    event.target !== event.target.dataset('start') ||
    event.target.dataset('stop')
  ) {
    console.log(event.target);
    return;
  }
}
