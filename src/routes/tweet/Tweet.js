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
import s from './Tweet.css';

class Tweet extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tweet: '',
    };
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
        </div>

        <form method="post">
          <label className={s.lead}>Tweet Now</label>
          <div className={s.formGroup}>
            <input type="text" className={s.input} placeholder="name" />
          </div>
          <div className={s.formGroup}>
            <textarea
              type="textArea"
              className={s.inputmultiline}
              placeholder="tweet here"
              cols="22"
            />
          </div>
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
              Tweet!!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Tweet);
