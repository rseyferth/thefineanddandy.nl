import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { showsFetchData } from '../actions/shows.es6';

import Menu from './Menu.es6';
import Shows from './Shows.es6';
import NextShow from './NextShow.es6';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageScrollClass: ''
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    this.setState({
      imageScrollClass: event.srcElement.documentElement.scrollTop === 0 ? '' : 'page-scrolled'
    });
  };


  componentDidMount() {
    this.props.fetchData('../data/shows.json');
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (!this.props.shows) {
      return <p>waiting</p>;
    }

    return (
      <div className={ this.state.imageScrollClass }>
        <a name="home" />
        <div>
          <Menu />
        </div>
        <div className={'main-image'}>
          <NextShow store={this.props.store}/>
        </div>

        <a name="video" />
        <section className="videos">
          <h2>VIDEO</h2>
          <div className="media-item">
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/q45xG15j9k0?origin=https://thefineanddandy.nl"  allowFullScreen="true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div className="media-item">
            <div className="video">
              <iframe src="https://player.vimeo.com/video/250957021" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
            </div>
          </div>
        </section>

        <a name="audio" />
        <section className="audio">
          <h2>AUDIO</h2>
          <div className="media-item">
            <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559318299&color=%23a5d3b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className="media-item">
            <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559318293&color=%23a5d3b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className="media-item">
            <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559318290&color=%23a5d3b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className="media-item">
            <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559318275&color=%23a5d3b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className="media-item">
            <iframe scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559318263&color=%23a5d3b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </section>

        <a name="shows" />
        <section className="shows">
          <h2>SHOWS</h2>
          <Shows store={this.props.store} />
        </section>

        <a name="about" />
        <section className="about">
          <h2>ABOUT</h2>
          <div class="info-item">
            The Fine and Dandy is een band die je gezien moet hebben. Deze Amsterdammers maken puntgave liedjes met een kop en een staart, die je eigenlijk meteen mee wil zingen. Denk: The Kinks maar dan anno nu, in het bezit van een vrolijke fuck-you-mentaliteit. Het nu eens ruige, dan weer gevoelige showmanship van zanger Erik Seyferth en zijn mannen pakt je direct in en laat je niet meer los. Met nummers over melkpakken, echte mannen, lange vrouwen en natuurlijk de liefde!
          </div>
        </section>

        <a name="contact" />
        <section className="contact">
          <h2>CONTACT</h2>
          <div>Contact us at <a href="mailto:dandy@thefineanddandy.nl">dandy@thefineanddandy.nl</a></div>
          <div className="social-icons">
            <a href="http://www.facebook.com/thefineanddandy" target="_blank">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIPSURBVGhD7ZnLSwJRGMWl/ojqj9GpVtEDZgTtvWghVKsWQcuQWkUPCAqEoNBdrcqZygKF3mEPMip30SIqjKDIIiJvc/VzpPwEnSHvTNwDv5V3jufMfSzm2ri4uLj+l1yuxUpBCrY5JCXgEJXNMuO3O5VW2/BwBcTRJ7u0VuMQ5aggKYQxh4JLroZYpYnOhDoLB4gpK/Z0zQxdTogZU9LLrFTRPYGZsYTuGYhXvARRCWNmTFEzQbzi5ZDkbdSMITQTxCtef12koz9CRiZPyfTcBfH54xp9Q7voeIqpirg9YXIceySF5AvE0ecopinS2Bkit/dJiIzLEkVm5y8hbmFZosjxWf6S+vpKkfOrJ3J0lkjjnThFn6WYpsjdwxvEz4nOEjYWwzRFnl8+IH5OQ6NRdCyGaYq8Jj8hfk6WKFLnXCXtvRGN5Ft+kbGZ2I8xTV0bqBeFWRF63Jaq0SkTbnY9RTyDO6gXxTJFUilCGtrXUS+KZYo8JN5RnyzMitQ6FdLcvaGBnVre8RPtd1oc88nCrMhvLHv8/oYXAXgRzMwIvAjAi2BmRuBFAF4EMzMCkyJ/8cnUaBF9n0xFxY+aGWApeE1WQjc/6BnYQsdi6PuIbcJrBUGSXRCveGWu3JS9fDNm6LvooYKrt33EtNzs1rcsV0EsnVLfglrGrZotwAVl2cj8p+w2fBnKxcXFZTLZbN9S86sn1aGunQAAAABJRU5ErkJggg==" />
            </a>
          </div>
        </section>
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

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(showsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);