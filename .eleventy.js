// Import filters
const dateFilter = require("./src/filters/date-filter.js");

module.exports = function(config) {
  // Filters
  config.setPugOptions({
    filters: {
      dateFilter: dateFilter
    }
  });

  config.addPassthroughCopy("src/assets");

  config.addPassthroughCopy({ "src/vendors/prism": "/vendors" });
};
