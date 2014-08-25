'use strict';

angular.module('gk.product')
  .factory('ProductFactory', function() {

    // product source
    var products = [{
      id: 1,
      name: 'Product 1',
      price: 10,
      category: 'Category1',
      photos: ['1','2'],
      live: true,
      description: "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!!"
    },
    {
      id: 2,
      name: 'Product 2',
      price: 10,
      category: 'Category2',
      photos: ['1','2'],
      live: true,
      description: "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!!"
    }];

    return {
      getAllProducts: function() {

        return products;

      },
      getProduct: function(id) {

        for (var i = 0, len = products.length; i < len; i++) {
            if (products[i].id == id)
              return products[i];
        }

        return null;

      }
    };
  });

