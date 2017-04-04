const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');

const list_title = React.createElement('h1', {}, 'My favorite ice cream flavors');
const chocolate = React.createElement('li', { className: 'brown' }, 'Chocolate')
const vanilla = React.createElement('li', { className: 'white' }, 'Vanilla')
const banana = React.createElement('li', { className: 'yellow' }, 'Banana')
const list_ice_creams = React.createElement('ul', {}, [ chocolate, vanilla, banana ]);
const list = React.createElement('div', {}, [list_title,list_ice_creams]);

const container = React.createElement('div', {}, [title, paragraph, list]);


ReactDOM.render(
  container,
  document.getElementById('main')
);
