'use strict';

/**
 * food router
 */

module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'POST',
      path: '/food/eat', 
      handler: 'food.eat',
    },
  ]
}
