import React from 'react';
// CHOOSE SOMETHING ONE
// import SimpleFormExample from 'components/SimpleFormExample';
import TodoExample from 'components/TodoExample';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          {/* <SimpleFormExample /> */}
          <TodoExample />
        </main>
      </div>
    );
  }
}
