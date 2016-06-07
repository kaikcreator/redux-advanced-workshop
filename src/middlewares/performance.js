export default store => next => action => {
  const start = performance.now();
  const result = next(action);
  const end = performance.now();
  console.log(`%c PERFORMANCE: Action with type ${action.type} took ${(end-start).toFixed(2)} milliseconds`,  'background: #222; color: #bada55');

  return result;
}