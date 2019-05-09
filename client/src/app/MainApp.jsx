import React from 'react';

import TableSection from 'containers/TableSection';
import FormSection from 'containers/FormSection';
import SimpleFormExample from 'components/SimpleFormExample';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          <SimpleFormExample />
        </main>
      </div>
    );
  }
}
