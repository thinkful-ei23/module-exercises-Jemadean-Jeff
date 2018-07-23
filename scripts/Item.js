'use strict';

const Item = (function() {
  return {};
}());

const validateName = (function(name) {
  if ('Item.name' in Item === false) {
    console.error('Name does not exist');
  }
});

const create = function(name) {
  return {
    id: cuid(),
    name: 'name',
    checked: false
  };
  validateName(name), create(name);
}


