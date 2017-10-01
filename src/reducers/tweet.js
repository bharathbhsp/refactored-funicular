import { SET_TWEET_DATA } from '../constants';

export default function tweet(state = {}, action) {
  switch (action.type) {
    case SET_TWEET_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.tweet,
      };
    default:
      return state;
  }
}
