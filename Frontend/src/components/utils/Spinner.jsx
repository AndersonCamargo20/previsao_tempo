import React from 'react';
import { Spinner } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return <div className="text-center  py-5">
        <Spinner color="primary" />
      </div>
  }
}
