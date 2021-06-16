'use strict';

const API = require('../');
const expect = require('expect.js');
const config = require('./config');

describe('api_account', function () {
  describe('setMessageCallback', function () {
    var api = new API(config.appid, config.appsecret);
    it('should ok', async function () {
      var data = await api.setDeviceSnap('3E067CCPAA00951');
      console.log('data', data)
      expect(data).to.only.have.keys('url');
    });
    // it('should ok', async function () {
    //   var data = await api.setDeviceSnapEnhanced('3E067CCPAA00951');
    //   expect(data).to.only.have.keys('callbackFlag', 'callbackUrl', 'status');
    // });

  });
});
