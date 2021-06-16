'use strict';

const API = require('../');
const expect = require('expect.js');
const config = require('./config');

describe('api_account', function () {
  describe('setMessageCallback', function () {
    var api = new API(config.appid, config.appsecret);
    api.ensureAccessToken = async () => ({accessToken: 'accessToken'});
    it('should ok', async function () {
      var data = await api.setMessageCallback('on', 'https://welch.hn3.mofasuidao.cn/test/lechang_cb', 'deviceStatus', '2');
      expect(data).to.only.have.keys('code', 'msg');
    });
    it('should ok', async function () {
      var data = await api.getMessageCallback();
      expect(data).to.only.have.keys('callbackFlag', 'callbackUrl', 'status');
    });

  });
});
