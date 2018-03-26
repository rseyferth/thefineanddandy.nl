import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { showsFetchData } from '../actions/shows.es6';
import _ from 'underscore';
import moment from 'moment';

class NextShow extends React.Component {
  render() {
    let nextShow = this.getNextShowFromShows(this.props.shows);

    if (!nextShow) {
      return null;
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
    if (shows.length === 1) return _.first(shows);

    return _.first(
      _.sortBy(
        _.filter(shows, (show) => {
          return moment(show.date) >= moment();
        }),
      'date')
    );
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

