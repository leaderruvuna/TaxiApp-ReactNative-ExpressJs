/*
 * Will dynamically create reducers
 * enforcing a unique way to describe reducers
 */
export default createReducer = (initialState, handlers) => {
   return (reducer = (state = initialState, action) => {
      if (handlers.hasOwnProperty(action.type)) {
         return handlers[action.type](state, action);
      } else {
         return state;
      }
   });
};
