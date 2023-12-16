import $ from "../core";

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) { 
    console.log(this);
    const swap = this[i]; // вытаскиваем элемент из большого объекта
    const objLength = Object.keys(this).length; // мы превращаем объект в массив, который формируется из свойств объекта, включая свойство length и другие свойства внутри core.js
    
    // this.lenght - количество элементов, которые мы нашли на странице, но оно не отображает реальное количество свойств внутри объекта(которые может быть записано в core.js, this.length - свойсвто объекта)
    

    for (let i = 0; i < objLength; i++) { // выяснив сколько свойств у объекта, мы удаляем каждый и оставлям пустой объект this
        delete this[i];
    }

    this[0] = swap; // приписывает первому элементу объекта объект, который вытащили
    this.length = 1; // обновляем свойство length

    return this;
};