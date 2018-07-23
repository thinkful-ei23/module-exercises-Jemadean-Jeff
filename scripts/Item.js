'use strict';
const validateName = (function(name) {
  if ('Item.name' in Item === false) {
    console.error('Name does not exist');
  }
});



const Item = (function() {
  return {};
}(validateName(name), create(name)));



const create = (function(name) {
  return {
    id: cuid(),
    name: 'name',
    checked: false
  };
});


