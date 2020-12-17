import React from 'react-bootstrap';


class Form extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }
  ReactDOM.render(<Form />, document.getElementById('root'));