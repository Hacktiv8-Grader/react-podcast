import {
  REQ_LIST_PODCAST,
  LIST_PODCAST_SUCCESS,
  LIST_PODCAST_FAILURE
} from '../ActionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  errMessage: null
};

const listPodcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ_LIST_PODCAST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LIST_PODCAST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    }
    case LIST_PODCAST_FAILURE: {
      return {
        ...state,
        isError: true,
        errMessage: action.errMessage
      }
    }
    default: {
      return state;
    }
  }
};

export { listPodcastReducer };
