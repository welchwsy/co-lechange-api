'use strict';

/**
 * 将设备当前画面截图，返回图片路径地址;支持抓图频率1次/3s。
 * @name 设备抓图
 * @param {String} deviceId 设备序列号
 * @param {String} channelId 通道号
 * @returns {String} url 抓图访问地址
 */
exports.setDeviceSnap = async function (deviceId, channelId = '0') {
  const accessToken = await this.ensureAccessToken();
  const params = {
    channelId,
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/setDeviceSnap';
  return this.request(url, params);
};
/**
 * 将设备当前画面截图，返回图片路径地址; 支持抓图频率1次/每秒。
 * 若设备性能较好（每秒都可以处理并返回抓图图片），则建议开发者调用setDeviceSnapEnhanced接口；
 * 若设备性能较差（主要针对2017年前上市的设备），则建议开发者调用setDeviceSnap接口进行设备抓图。
 * @name 设备抓图
 * @param {String} deviceId 设备序列号
 * @param {String} channelId 通道号
 * @returns {String} url 抓图访问地址
 */
exports.setDeviceSnapEnhanced = async function (deviceId, channelId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId,
    channelId
  };
  var url = 'https://openapi.lechange.cn/openapi/setDeviceSnapEnhanced';
  return this.request(url, params);
};
/**
 * 校准设备UTC时间
 * @param {String} deviceId 
 * @returns 
 */
exports.calibrationDeviceTime = async function (deviceId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/calibrationDeviceTime';
  return this.request(url, params);
};

/**
 * 校准设备UTC时间
 * @param {String} deviceId 
 * @returns 
 */
exports.getDeviceTime = async function (deviceId) {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken.accessToken,
    deviceId
  };
  var url = 'https://openapi.lechange.cn/openapi/getDeviceTime';
  return this.request(url, params);
};

