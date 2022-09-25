const getApiData = async (apiEndpoint) => {
    return fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {return data});
  };

  export {
    getApiData,
  }