import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { showsFetchData } from '../actions/shows.es6';
import _ from 'underscore';
import moment from 'moment';

class NextShow extends React.Component {
  render() {
    let nextShow = this.getNextShowFromShows(this.props.shows);
    let promo = {
      title: 'NEW EP: CHICKEN IN THE LORD',
      descriptions: [
        'Available soon on all music streaming services',
        'Release @ Cinetol: 12 Jan 2019 - 20:30'
      ]
    };

    if (promo) {
      return(
        <div className="next-show">
          <h2>{ promo.title }</h2>
          {promo.descriptions.map((description) => (
            <div><span>{description}</span></div>
          ))}
        </div>
      )
    }

    if (!nextShow) {
      return(
        <div className="next-show">
          <h2>COMING SOON</h2>
          <span>Newly recorded songs</span>
        </div>
      )
    }

    return (
      <div className="next-show">
        <h2>NEXT SHOW</h2>
        <span className="date">{ moment(nextShow.date).format('D MMM') }{nextShow.time ? ', ' : ''}{ nextShow.time }</span>
        <span className="venue">{ nextShow.title }</span>
        <span className="location"> {nextShow.location }</span>
      </div>
    )
  }

  getNextShowFromShows(shows) {
    if (shows.length < 1) { return false; }

    let futureShow = _.first(
      _.sortBy(
        _.filter(shows, (show) => {
          let test = moment(show.date) >= moment();
          return moment(show.date) >= moment();
        }),
      'date')
    );

    if (!futureShow) return false;
    return futureShow;
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

export default connect(mapStateToProps)(NextShow);

