import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { showsFetchData } from '../actions/shows.es6';
import moment from 'moment';

class Shows extends React.Component {
  render() {
    return (
      <div className='shows-table'>
        <div className="show-row show-head">
          <div>Date</div>
          <div>Event</div>
          <div>Location</div>
        </div>
        {this.props.shows.map((item) => (
          <div className="show-row" key={item.title}>
            <div>{moment(item.date).format('dddd, MMMM D')}</div>
            <div>{item.title}</div>
            <div>{item.location}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      shows: state.shows,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    };
};

export default connect(mapStateToProps)(Shows);