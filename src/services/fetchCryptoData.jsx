const fetchCryptoData = async () => {
    const url = 'http://localhost:3000/getcoins';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export default fetchCryptoData;