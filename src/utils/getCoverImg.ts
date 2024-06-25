export async function getCoverImg(coverId: String) {
  const response = await fetch(
    `https://cms.samespace.com/assets/${coverId}`
  ).then((response) => response.url);

  return response;
}
