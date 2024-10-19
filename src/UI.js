import $ from 'jquery';
import './css/styles.css';
import { waiting } from './weather.js';
import { trimed } from './weather.js';


$(document).ready(function () {
    $('#location').on("input", function () {
        let location = $('#location').val();
        waiting(trimed(location));
    });
    $('.search').click(function () {
        let location = $('#location').val();
        waiting(trimed(location));
    });
});