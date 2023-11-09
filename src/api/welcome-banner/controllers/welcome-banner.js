'use strict';

/**
 * welcome-banner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcome-banner.welcome-banner');
