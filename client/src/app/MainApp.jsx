import React from 'react';

import TableSection from 'containers/TableSection';
import FormSection from 'containers/FormSection';
import FormComponent from 'components/Form';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          <FormComponent />
        </main>
      </div>
    );
  }
}
