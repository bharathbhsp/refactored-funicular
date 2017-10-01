/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import s from './Tweet.css';
import { setTweetData } from '../../actions/tweet';

class Tweet extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    setTweetData: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tweet: '',
    };
  }

  onTweetChange(e) {
    this.setState({ tweet: e.target.value });
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  submitTweet() {
    window.console.log(`name ${this.state.name}`);
    window.console.log(`tweet ${this.state.tweet}`);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
        </div>

        <form>
          <label className={s.lead}>Tweet Now</label>
          <div className={s.formGroup}>
            <input
              type="text"
              className={s.input}
              placeholder="name"
              onChange={e => this.nameChange(e)}
            />
          </div>
          <div className={s.formGroup}>
            <textarea
              type="textArea"
              className={s.inputmultiline}
              placeholder="tweet here"
              cols="22"
              onChange={e => this.onTweetChange(e)}
            />
          </div>
          <div className={s.formGroup}>
            <button
              className={s.button}
              type="submit"
              onClick={e => {
                this.props.setTweetData({
                  name: this.state.name,
                  tweet: this.state.tweet,
                });
                e.preventDefault();
              }}
            >
              Tweet!!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// export default withStyles(s)(Tweet);
const mapState = state => ({
  name: state.name,
  tweet: state.tweet,
});

export const mapDispatch = dispatch => ({
  setTweetData: value => dispatch(setTweetData(value)),
});

export default connect(mapState, mapDispatch)(withStyles(s)(Tweet));
