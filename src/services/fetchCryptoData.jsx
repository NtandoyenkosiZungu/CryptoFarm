const fetchCryptoData = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h';
  
    const options = {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer CG-F8vXb1aFehKu75K9QbVJsC6h'  // <-- use Authorization instead
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export default fetchCryptoData;