// React withouth JSX

class App extends React.Component {
  render() {
    return React.createElement(
      'main',
      null,
      React.createElement('h1', null, 'Darth Vader'),
      React.createElement(
        'p',
        null,
        React.createElement('img', {
          src: 'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
          alt: 'Darth Vader',
          id: 'pp',
        }),
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'span',
          {
            class: 'red',
          },
          'Darth Vader',
        ),
        ' was a legendary ',
        React.createElement(
          'span',
          {
            class: 'blue',
          },
          'Jedi',
        ),
        ' master who led the ',
        React.createElement(
          'span',
          {
            class: 'red',
          },
          'Galactic Empire',
        ),
        ' in the Clone Wars, and served as the ',
        React.createElement(
          'span',
          {
            class: 'red',
          },
          'Emperor',
        ),
        "'s hand in the Battle of Yavin. During the Clone Wars, he was the first to be chosen as the ",
        React.createElement(
          'span',
          {
            class: 'blue',
          },
          'Jedi',
        ),
        'master. He was also the first to be chosen as the Jedi master in the Clone Wars and the first to be chosen as the ',
        React.createElement(
          'span',
          {
            class: 'blue',
          },
          'Jedi',
        ),
        ' master in the Jedi Trials.',
      ),
    );
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root'),
);
