import $ from "../core";

$.prototype.setAttr = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(attributeName) == value) {
            continue;
        }
        
        this[i].setAttribute(attributeName, value);
    }

    return this;
};

$.prototype.removeAttr = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(attributeName) == value) {
            continue;
        }
        
        this[i].removeAttribute(attributeName, value);
    }

    return this;
};

$.prototype.toggleAttr = function(attributeName, value = '') {
    for (let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }
        
    }

    return this;
};

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].hasAttribute(attributeName)) {
            continue;
        }

        return this[i].getAttribute(attributeName);
    }

    // return null;

};