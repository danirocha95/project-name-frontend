export async function fetchDogImages(limit = 3) {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/${limit}`);
    const data = await response.json();
    return data.message.map((url, index) => ({
      id: `dog-${index}`,
      name: `Cachorro ${index + 1}`,
      image: url
    }));
  } catch (err) {
    console.error('Erro ao buscar cães:', err);
    return [];
  }
}

export async function fetchCatImages(limit = 3) {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
    const data = await response.json();
    return data.map((item, index) => ({
      id: `cat-${index}`,
      name: `Gato ${index + 1}`,
      image: item.url
    }));
  } catch (err) {
    console.error('Erro ao buscar gatos:', err);
    return [];
  }
}
