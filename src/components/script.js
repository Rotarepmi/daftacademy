import '../scss/styles.scss';

export default function() {
  const div = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello World!';
  div.appendChild(h1);
};