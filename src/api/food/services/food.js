'use strict';

/**
 * food service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food.food', (({strapi}) => ({
  async getFoodStartedWithBanana() {
    const {results} = await super.find({ filters: { name: { $contains: "banana" } } });
    return results.map(r => r.name);
  },
})));
