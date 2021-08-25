export const getGifs = async (category) => {
  const limit = 5;
  const API_KEY = 'FfF1yANFCo0iZPnN22Lf4YEqRpbFyLE9';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      titulo: title,
      url: images.downsized_medium.url,
    };
  });
  return gifs;
};
