import { combineReducers } from 'redux';
import ActiveTab from './reducer_active_tab';
import Projects from './reducer_projects';

const rootReducer = combineReducers({
  projects: Projects,
  activeTab: ActiveTab
});

export default rootReducer;
