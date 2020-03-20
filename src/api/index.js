

// /* 
// 与 后 台 交 互 模 块 
// */

// import ajax from './ajax'
// /** 
// * 获 取 地 址 信 息 ( 根 据 经 纬 度 串 ) */
// export const reqAddress = geohash => ajax('/api/position/' + geohash)
// /** 
// * 获 取 msite页 面 食 品 分 类 列 表
// */
// export const reqCategorys = () => ajax('/api/index_category')
// /** 
// * 获 取 msite商 铺 列 表 ( 根 据 经 纬 度 )
// */
// export const reqShops = ({
//   latitude,
//   longitude
// }) => ajax('/api/shops', {
//   latitude,
//   longitude
// })
// /** * 账 号 密 码 登 录 */
// export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
//   name,
//   pwd,
//   captcha
// }, 'POST')
// /** * 获 取 短 信 验 证 码 */
// export const reqSendCode = phone => ajax('/api/sendcode', {
//   phone
// })
// /** * 手 机 号 验 证 码 登 录 */
// export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {
//   phone,
//   code
// }, 'POST')
// /** * 获 取 用 户 信 息 ( 根 据 会 话 ) */
// export const reqUser = () => ajax('/api/userinfo')
// /**
// *请 求 登 出 
// */
// export const reqLogout = () => ajax('/api/logout')

/**
 * 包含n个接口请求函数的模块
 * 函数的返回值：promise对象
 */

import ajax from "./ajax";
 //1、根据经纬度获取位置详情
 export const reqAddress = (geohash) => ajax('/position/${geohash}')
 //2、获取食品分类列表
 export const reqFoodTypes = () => ajax('/index_category')
 //3、根据经纬度获取商铺列表
 export const reqShops = ({longitude, latitude}) => ajax('/shops',{longitude, latitude})
 //4、根据经纬度和关键字搜索商铺列表
 //5、获取一次性验证码
 //6、用户名密码登录
 //7、发送短信验证码
 //8、手机号验证码登陆
 //9、根据话语获取用户信息
 //10、用户登出

