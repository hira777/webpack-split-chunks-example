import $ from 'jquery';
import velocity from 'velocity-animate';
import moduleA from './modules/moduleA';

const text = 'app';
const $body = $('body');

$body.html(text);
velocity($body, 'fadeOut', {
  duration: 1000
});
moduleA();