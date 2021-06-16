'use strict';

const API = require('./lib/api_common');

API.mixin(require('./lib/api_account'));
API.mixin(require('./lib/api_device_operate'));

module.exports = API;
