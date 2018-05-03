export const PROJECT_SELECTED = 'PROJECT_SELECTED';

export default function(state=null, action) {
  switch(action.type) {
    case PROJECT_SELECTED:
      return action.payload;
  }
  return state;
}
