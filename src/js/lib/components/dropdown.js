import $ from '../core';

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        console.log(id);
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300); // сравнения 
        });
    }
};

$('.dropdown-toggle').dropdown();