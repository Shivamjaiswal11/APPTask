import axios from 'axios';
import { useEffect } from 'react';
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
useEffect(() => {
const Data =  config
console.log(Data)
}, [])


var config = {
  method: 'get',
  url: 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/allEvents?Authorization=786785e9-1b74-430a-80d9-aae49678954f',
  headers: { 
    'Authorization': 'Bearer 786785e9-1b74-430a-80d9-aae49678954f', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});