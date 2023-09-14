

async function fetchData(api) {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData('https://pokeapi.co/api/v2/pokemon/');

fetchData('https://pokeapi.co/api/v2/pokemon/1');