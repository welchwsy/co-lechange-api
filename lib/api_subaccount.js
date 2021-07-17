'use strict';

exports.createSubAccount = async function (account) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    account,
    token: accessToken
  };
  var url = 'https://openapi.lechange.cn/openapi/createSubAccount';
  return this.request(url, params);
};

exports.deleteSubAccount = async function (openid) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid
  };
  var url = 'https://openapi.lechange.cn/openapi/deleteSubAccount';
  return this.request(url, params);
};

exports.listSubAccount = async function (pageNo = 1, pageSize = 5) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    pageNo,
    pageSize
  };
  var url = 'https://openapi.lechange.cn/openapi/listSubAccount';
  return this.request(url, params);
};

exports.subAccountToken = async function (openid) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid
  };
  var url = 'https://openapi.lechange.cn/openapi/subAccountToken';
  return this.request(url, params);
};

exports.addPolicy = async function (openid, policy) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid, policy
  };
  var url = 'https://openapi.lechange.cn/openapi/addPolicy';
  return this.request(url, params);
};

exports.clearPolicy = async function (openid) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid
  };
  var url = 'https://openapi.lechange.cn/openapi/clearPolicy';
  return this.request(url, params);
};

exports.queryDevicePermission = async function (openid, deviceId, channelId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid, deviceId, channelId
  };
  var url = 'https://openapi.lechange.cn/openapi/queryDevicePermission';
  return this.request(url, params);
};

exports.deleteDevicePermission = async function (openid, deviceId, channelId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid, deviceId, channelId
  };
  var url = 'https://openapi.lechange.cn/openapi/deleteDevicePermission';
  return this.request(url, params);
};

exports.listSubAccountDevice = async function (openid, pageNo = 1, pageSize = 5) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken,
    openid, pageNo, pageSize
  };
  var url = 'https://openapi.lechange.cn/openapi/listSubAccountDevice';
  return this.request(url, params);
};

