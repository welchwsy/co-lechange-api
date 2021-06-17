'use strict';
const { postJSON } = require('./util');
/**
 * 设置报警回调地址 setMessageCallback
 * @name 设置报警回调地址;
 * @param {String} status "on","off" 是否订阅消息
 * @param {String} callbackUrl 消息回调URL status为on时，必填;status为off时，可为空;	开发者接收设备消息的地址，需要可以被外网访问
 * @param {String} callbackFlag alarm：设备告警消息推送；deviceStatus：设备上下线消息推送；numberstat：设备客流数据消息推送；faceAnalysis：设备人脸智能消息推送	;回调类型标识，回调类型可选填以上的其中一个或者多个（中间用逗号分隔）。status为on时，必填；status为off时，可为空。
 * @param {String} basePush "1"：推送；"2"：不推送	;标示开发者账号下关联的乐橙APP设备消息是否推送
 * @returns 
 */
exports.setMessageCallback = async function (status = 'on', callbackUrl = '', callbackFlag = '', basePush = '2') {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    callbackFlag,
    basePush,
    callbackUrl,
    token: accessToken,
    status
  };
  var url = 'https://openapi.lechange.cn/openapi/setMessageCallback';
  return this.request(url, postJSON(params));
};

exports.getMessageCallback = async function () {
  const { accessToken } = await this.ensureAccessToken();
  const params = {
    token: accessToken
  };
  var url = 'https://openapi.lechange.cn/openapi/getMessageCallback';
  return this.request(url, postJSON(params));
};

