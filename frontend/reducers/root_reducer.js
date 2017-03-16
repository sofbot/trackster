import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  errors: ErrorReducer
});

export default rootReducer;
