'use strict';
// 文档地址：https://open.imoulife.com/book/zh/http/device/manage/query/summary.html
/**
 * deviceOnline：获取设备在线状态
 * @name 获取设备在线状态
 * @param {String} deviceId 设备序列号
 * @returns {Object} {channels: [], deviceId:"", onLine: "1"}
 */
exports.deviceOnline = async function (deviceId) {
  const accessToken = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceOnline';
  return this.request(url, params);
};
/**
 * unBindDeviceInfo：未绑定设备信息获取
 * @name 未绑定设备信息获取
 * @param {String} deviceId 设备序列号
 * @param {String} deviceCodeModel 设备二维码型号，扫描设备二维码可以获取
 * @param {String} deviceModelName 设备序列号
 * @param {String} deviceId 设备市场型号
 * @param {String} ncCode 设备配网能力，扫描设备二维码可以获取
 * @returns {Object} data
 */
exports.unBindDeviceInfo = async function (deviceId, deviceCodeModel, deviceModelName, ncCode) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId,
    deviceCodeModel,
    deviceModelName,
    ncCode
  };
  var url = 'https://openapi.lechange.cn/openapi/unBindDeviceInfo';
  return this.request(url, params);
};
/**
 * 查询设备绑定情况
 * checkDeviceBindOrNot
 * @param {String} deviceId 
 * @returns 
 */
exports.checkDeviceBindOrNot = async function (deviceId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/checkDeviceBindOrNot';
  return this.request(url, params);
};

/**
 * bindDeviceChannelInfo：单个设备通道的详细信息获取
 * @param {String} deviceId 
 * @param {String} channelId 
 * @returns 
 */
exports.bindDeviceChannelInfo = async function (deviceId, channelId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId,
    channelId
  };
  var url = 'https://openapi.lechange.cn/openapi/bindDeviceChannelInfo';
  return this.request(url, params);
};

/**
 * deviceVersionList：获取设备版本和可升级信息
 * @param {String} deviceIds 设备序列号。可批量查询，设备序列号之间用逗号分隔，最多支持20个设备查询
 * @returns 
 */
exports.deviceVersionList = async function (deviceIds) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceIds
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceVersionList';
  return this.request(url, params);
};

/**
 * deviceOpenList：分页获取开放平台添加设备的通道基本信息
 * 注意：查询乐橙App绑定的设备需要通过deviceBaseList接口获取 。
 * @param {Long} bindId 数字取值范围为：[-1,N]，-1表示第一次从头开始查询;上次查询最后一个设备Id
 * @param {Integer} limit 最大为128	;条数
 * @param {String} type bind：查询绑定的设备；share：查询分享的设备；bindAndShare：查询绑定和分享的设备;绑定类型
 * @param {Boolean} needApInfo true：需要；false：不需要;是否需要配件列表信息
 * @returns 
 */
exports.deviceOpenList = async function (bindId, limit, type, needApInfo) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    bindId, limit, type, needApInfo
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceOpenList';
  return this.request(url, params);
};
/**
 * queryOpenDeviceChannelInfo：获取开放平台添加设备的通道基本信息
 * 注意：查询乐橙App绑定的设备需要通过queryBaseDeviceChannelInfo接口获取 。
 * @param {String} deviceIds 设备序列号列表;多个设备以英文逗号分隔，例如："xxxxx,xxxxx,xxxxx"，最多支持10个设备
 * @returns 
 */
exports.queryOpenDeviceChannelInfo = async function (deviceIds) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceIds
  };
  var url = 'https://openapi.lechange.cn/openapi/queryOpenDeviceChannelInfo';
  return this.request(url, params);
};
/**
 * deviceOpenDetailList：批量获取设备的详细信息
 * 注意：查询乐橙App绑定的设备需要通过deviceBaseDetailList接口获取 。。
 * @param {Object} deviceList deviceId, channelList, apList 设备序列号列表，最大支持8个设备查询; 通道号列表; 配件Id列表
 * @returns 
 */
exports.deviceOpenDetailList = async function (deviceList) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceList
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceOpenDetailList';
  return this.request(url, params);
};
/**
 * deviceBaseList：分页获取乐橙app添加或分享的设备通道基本信息
 * @returns 
 */
exports.deviceBaseList = async function (bindId, limit, type, needApInfo) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    bindId, limit, type, needApInfo
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceBaseList';
  return this.request(url, params);
};
/**
 * queryBaseDeviceChannelInfo：获取乐橙app添加或分享设备的通道基本信息
 * @returns 
 */
exports.queryBaseDeviceChannelInfo = async function (deviceIds) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceIds
  };
  var url = 'https://openapi.lechange.cn/openapi/queryBaseDeviceChannelInfo';
  return this.request(url, params);
};
/**
 * deviceBaseDetailList：批量获取乐橙app添加或分享的设备详细信息
 * @returns 
 */
exports.deviceBaseDetailList = async function (deviceList) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceList
  };
  var url = 'https://openapi.lechange.cn/openapi/deviceBaseDetailList';
  return this.request(url, params);
};
/**
 * upgradeProcessDevice：获取设备升级状态和进度
 * @returns 
 */
exports.upgradeProcessDevice = async function (deviceId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/upgradeProcessDevice';
  return this.request(url, params);
};
/**
 * listDeviceAbility：批量获取多个设备、通道以及配件的能力集
 * @returns 
 */
exports.listDeviceAbility = async function (deviceList) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceList
  };
  var url = 'https://openapi.lechange.cn/openapi/listDeviceAbility';
  return this.request(url, params);
};

