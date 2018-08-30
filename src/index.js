window.$ = window.jQuery = require("jquery");

import Welcome from'./ES6';
import './styles/app.css';

new Welcome('Using ES-6 imports');
$('.forJquery').html('Using common lib (jQuery)');

