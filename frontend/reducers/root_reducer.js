import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import ProjectReducer from './project_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  errors: ErrorReducer,
  project: ProjectReducer
});

export default rootReducer;
