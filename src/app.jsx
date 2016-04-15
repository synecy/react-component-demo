import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Greeting from "./components/greeting";

require('./stylesheets/main.scss');

axios.get('http://localhost:9001/v1/demo/data')
.then(function (response) {
  ReactDOM.render(
    <Greeting resp="World" customers={response.data.response.customers} />,
    document.querySelector('.greeting-component')
  );
})
.catch(function (response) {
  ReactDOM.render(
    <Greeting resp="API Error" customers="0" />,
    document.querySelector('.greeting-component')
  );
});
