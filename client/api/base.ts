const baseUrl = "http://localhost:3000/api"

export const JSONResponse = (response: any) => {
    if (response.ok) {
      return response.json();
    }
  
    const json = response.json();
    return json.then((err: any) => {
      throw err;
    });
  };

  export const performRequest = (apiEndpoint: string, params?: any) => {
    return fetch(baseUrl + apiEndpoint, params).then(JSONResponse)
  }