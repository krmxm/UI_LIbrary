import './lib/lib';

$('.active').on('click', sayHello);

function sayHello() {
    console.log('Hello');
}

console.log($('button').html('Hello'));