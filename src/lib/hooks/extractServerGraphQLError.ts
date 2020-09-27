export const extractServerError = (err: any) => {
  const errorObject = err.graphQLErrors[0].extensions.exception.errors;
  if (!errorObject) return;
  return [Object.keys(errorObject)[0], Object.values(errorObject)[0]];
};
