const defaultState = { loading: false, info: null, errors: null };

export default function inforeducer(state = defaultState, action) {
  switch (action.type) {

    case LOAD_INFO_REQUESTED:
      return { loading: true };

    case LOAD_INFO_OK:
      return { loading: false, info: action.info, errors: null };

    case LOAD_INFO_FAIL:
      return { loading: false, info: null, errors: action.errors };

    default:
      return state;
  }
}