// import type { RequestEvent, Handle } from '@sveltejs/kit';
export const handle = (({ event, resolve }) => {
  console.log(event)
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', "en")
  });
});// satisfies Handle;