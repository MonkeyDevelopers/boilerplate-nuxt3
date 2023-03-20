export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = `https://rickandmortyapi.com/api/character?page=${parseInt(
    body.page
  )}`;
  const response: { results: any[] } = await $fetch(url, {
    method: "GET",
  });
  return response.results;
});
