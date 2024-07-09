class Helper {
  static buildQueryString(baseUrl, params, arrayParamName, arrayParams) {
    let queryString = `${baseUrl}?`;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
      }
    }

    if (arrayParams && Array.isArray(arrayParams)) {
      arrayParams.forEach(param => {
        queryString += `${encodeURIComponent(arrayParamName)}=${encodeURIComponent(param)}&`;
      });
    }

    // Remove the trailing '&' or '?' if no params were added
    queryString = queryString.slice(0, -1);
    
    return queryString;
  }
}

module.exports = Helper;
