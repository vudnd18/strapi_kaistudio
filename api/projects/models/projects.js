"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const helper = require("../../../lib/helper");

module.exports = {
  /**
   * Triggered before user creation.
   */

  lifecycles: {
    beforeCreate: async (model) => {
      console.log(model);
      if (model.name) {``
        model.slug = helper.convertSlug(model.name);
      }
    },
    beforeUpdate: async (params, model) => {
      if (model.name) {
        model.slug = helper.convertSlug(model.name);
      }
    },
  },
};
