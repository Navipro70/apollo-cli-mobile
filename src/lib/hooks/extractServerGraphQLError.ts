export const extractServerError = (err: any): [string, string] => {
  const errorObject = err.graphQLErrors[0].extensions.exception.errors
  if (!errorObject) ['', '']
  return [Object.keys(errorObject)[0], Object.values(errorObject)[0] as string]
}
