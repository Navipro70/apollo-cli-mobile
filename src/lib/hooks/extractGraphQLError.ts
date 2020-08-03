export const extractGraphQLError = (error: any) => {
  return error?.message.split("GraphQL error: ")[1];
};
