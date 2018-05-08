export const PROJECT_SELECTED = 'PROJECT_SELECTED';

export function tabSelect(project) {
   return {
     type: PROJECT_SELECTED,
     payload: project
   }
}
