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
  // window.store = store;
  window.store = store;
  ReactDOM.render(<Root/>, document.getElementById('content'));
});
