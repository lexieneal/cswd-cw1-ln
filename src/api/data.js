// I hosted the express application with the API on heroku so 
// that I could use the URL for accessing the data

const dataSource = {
    baseURL: 'https://cswd-cw1-api-ln.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application.json'
    }
  }
  
  export default dataSource