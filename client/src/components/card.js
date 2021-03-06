/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCard } from '../actions';
import SideNav from './sidenav';

class Card extends Component {
  componentDidMount() {
    this.props.getCard(this.props.match.params.id);
  }

  render() {
    const id = this.props.match.params.id;

    if (!this.props.card) {
      return <h2>Loading Card...</h2>;
    }
    return (
      <div>
        <SideNav />
        <div className="card">
          <h3>Details for {this.props.card.title}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card
  }
}

export default connect(mapStateToProps, { getCard })(Card);
