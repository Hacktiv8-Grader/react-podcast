import Axios from 'axios';

import {
  REQ_LIST_PODCAST,
  LIST_PODCAST_SUCCESS,
  LIST_PODCAST_FAILURE
} from '../ActionTypes';

const getListPodcast = () => async (dispatch) => {
  dispatch({ type: REQ_LIST_PODCAST });

  try {
    const { data } = await Axios.get('https://json-server-heroku-zjqcjtotyv.now.sh/podcasts');
    
    dispatch({
      type: LIST_PODCAST_SUCCESS,
      data
    });
  } catch ({ response }) {
    dispatch({
      type: LIST_PODCAST_FAILURE,
      errType: 'catch',
      errMessage: response
    });
  }
};

export { getListPodcast };
