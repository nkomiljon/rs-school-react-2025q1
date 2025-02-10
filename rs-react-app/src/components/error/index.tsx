import { Component } from 'react';

export class Error extends Component {
  componentDidMount(): void {
    throw new Error('This is a test error!');
  }

  render() {
    return (
      <div>
        <h1>Something went wrong.</h1>
      </div>
    );
  }
}
