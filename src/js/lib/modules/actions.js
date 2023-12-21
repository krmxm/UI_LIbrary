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

// получение элемента по номеру

$.prototype.eq = function(i) { 
    // console.log(this);
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

// получение номера элмента

$.prototype.index = function () {
    const parent = this[0].parentNode; // получили родителя искомого элемента
    const childs = [...parent.children]; // получаем всех потомков, но получаем html коллекцию (псевдомассив), поэтому мы помещаем в квадратные скобки и используем спред оператор

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
    // по синтаксису метода мы должны передать callback функцию с кретерием отбора
};

// получение элемента среди определённых

$.prototype.find = function(selector) {
    let numberOfItems = 0; // колическтво элементов, которые подошли по этому селектору
    let counter = 0; // количество записанных элементов в обновлённый this 

    const copyObj = Object.assign({}, this); // поверхностная копия объекта this

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector); // это массив, состоящий из html элементов из объекта подходящих по селектору
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems]; // 3 элемента из 5 подходят, 3 элмент имеет порядковый номер 2
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0;
    let length = this.length;

    for(let i = 0; i < this.length; i++) {
        if(!this[i].closest(selector)) {
            continue;
        } else {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }
    this.length = counter;

    // this.length = length;

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter]; // 3 элемента из 5 подходят, 3 элмент имеет порядковый номер 2
    }

    return this;
};

$.prototype.siblings = function() {
    let numberOfItems = 0; // колическтво элементов, которые подошли по этому селектору
    let counter = 0; // количество записанных элементов в обновлённый this 

    const copyObj = Object.assign({}, this); // поверхностная копия объекта this

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children; // это массив, состоящий из html элементов из объекта подходящих по селектору

        for (let j = 0; j < arr.length; j++) {
            if(copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems]; // 3 элемента из 5 подходят, 3 элмент имеет порядковый номер 2
    }

    return this;
};