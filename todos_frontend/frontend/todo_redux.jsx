import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'


class Test extends React.Component {
  render() {
    return (
      <h1>
        Todos App
      </h1>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
