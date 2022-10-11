import { handler as server } from './.output/server/index.mjs'

const handler = async (event, context) => {
  const result = await server(event);
  
  return result;
}

export { handler }
