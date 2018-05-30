import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterTable from './components/FilterTable';

export default class DataDictionary extends Component {
  static displayName = 'DataDictionary';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <FilterTable />
      </div>
    );
  }
}

const styles = {

}
