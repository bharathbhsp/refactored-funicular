/* eslint-disable import/prefer-default-export */

import { SET_TWEET_DATA } from '../constants';

export function setTweetData({ name, tweet }) {
  return {
    type: SET_TWEET_DATA,
    payload: {
      name,
      tweet,
    },
  };
}
