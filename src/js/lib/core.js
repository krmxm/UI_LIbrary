// (() => {
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         console.log(obj);
//         return obj;
//     };

//     window.$ = $; // появляется глобальная функция
// })();

const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if(!selector) {
        return this; // {}
    }

    if(selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;
// мы в прототип объекта, который будет возвращаться, мы записываем прототип
// нашей главной функции
// теперь на объекте, который будет создаваться при помощью функции $
// мы можем использовать любые методы, которые внутри прототипа главной фунции &

window.$ = $;

export default $;