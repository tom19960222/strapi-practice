"use strict";

/**
 * food controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const foodWhiteList = ["apple", "banana", "peach"];

module.exports = createCoreController("api::food.food", ({ strapi }) => ({
  async create(ctx) {
    const body = ctx.request.body.data;
    console.log("body", body);
    if (!foodWhiteList.includes(body?.name)) {
      ctx.response.body = {
        success: false,
        error: "It looks NOT like a kind of food.",
      };
      ctx.response.status = 403;
    }
    return super.create(ctx);
  },

  async eat(ctx) {
    const body = await this.sanitizeInput(ctx.request.body, ctx);
    ctx.response.status = 200;
    ctx.response.body = { success: true, data: body };
  },

  async getCustomFoods(ctx) {
    const results = await strapi
      .service("api::food.food")
      .getFoodStartedWithBanana();

    ctx.response.body = results;
  },
}));
