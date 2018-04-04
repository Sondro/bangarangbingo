/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCards } from '../actions';
import SideNav from './sidenav';


class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    const authUser = JSON.parse(localStorage.getItem('user'));
    this.setState({'user': authUser});
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="cards">
          <h3>USER CARD PAGE</h3>
          <ul className='cardsList'>
            { this.props.cards.map((card, i) => {
              if (card.author === this.state.user._id) {
                return (
                  <Link className="cardLinks" to={`/Cards/${card._id}`} key={card._id+i}>{card.title}</Link>
                )
              }
            })}
          </ul>
          <Link to="/Card">Link to SINGLE Card Create/Edit</Link>
        </div>
        <p>{this.state.user._id}</p>
        <p>{this.state.user.username}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps, { getCards })(Cards);
