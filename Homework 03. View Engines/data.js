"use strict";
var phones = [
    {name: 'IphoneTelephone', price: 19.98},
    {name: 'Swatchsung', price: 54.45}
];
var tablets = [
    {name: 'TabI', price: 800},
    {name: 'Pen 8.0', price: 1200}
];
var clothes = [
    {name: 'shirt', price: 19.95},
    {name: 'pants', price: 200}
];
var navigation = [
    {text: 'HomePage', href:'/'},
    {text: 'Phones', href:'/phones'},
    {text: 'Tablets', href:'/tablets'},
    {text: 'Clothes', href:'/clothes'}
];

module.exports = {
    phones: phones,
    tablets: tablets,
    clothes: clothes,
    navigation: navigation
};