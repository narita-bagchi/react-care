import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import CCharityCard from './components/CCharityCard';
import * as initActions from './actions/AInitialize';

import './styles/fa-heartbeat.scss';

class App extends Component {

  componentDidMount() {
    this.props.actions.initApp();
  }

  // depending on array index is a anti pattern - TODO move to utils
  generateKey (pre) {
    return `${ pre }_${ new Date().getTime() }`;
  }

  render() {
    const self = this;
    const cards = this.props.charities.map(function(item, i) {
      return (
        <CCharityCard key={ self.generateKey(item.name) } charityInfo={item} />
      );
    });

    return (
      <div style={{ margin: '10vh 10vw'}}>
        <Row><Col md={12} style={{textAlign: 'center'}}><h1>I Care Project</h1></Col></Row>
        <Row>
          {cards}
        </Row>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    charities: state.charities
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(initActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
