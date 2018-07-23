'use strict';

/* global , cuid */

const Item = (function() {
  function validateName(name) {
    if (name === '') {
      throw new TypeError('Name does not exist');
    }
  }
  
  function create(name) {
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  }
  return {
    validateName,
    create,
  };
}());




