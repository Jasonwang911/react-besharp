/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrlHost: 域名地址
 * imgUrl: 图片所在域名地址
 * 各环境对应路径，应用于：
 *		api配置、vuex配置
 *
 *---------------------------------------
 *	！！！！切换环境需注意事项！！！！  *
 *		1、切换IP						*
 *		2、切换阿里云cdn				*
 *		3、切换腾讯统计					*
 *---------------------------------------
 */

// 生产环境
// let baseUrlHost = 'https://finsuit.udomedia.com.cn';
// 测试223环境(主干)
let baseUrlHost = 'https://finsuitdev.udomedia.com.cn';
// 上线打包路径
// let baseUrlHost = document.location.protocol + '//' + document.location.hostname;



// 测试阿里图片地址
let imgUrl = 'https://finsuit-test.oss-cn-beijing.aliyuncs.com/';
// 生产图片地址
// let imgUrl = 'https://finsuit.oss-cn-beijing.aliyuncs.com/';

/*
 *  腾讯统计 环境切换  
 */

function statistics() {
	// 腾讯统计 测试库
	var _mtac = {};
	(function() {
		var mta = document.createElement("script");
		mta.src = "https://pingjs.qq.com/h5/stats.js?v2.0.4";
		mta.setAttribute("name", "MTAH5");
		mta.setAttribute("sid", "500558975");
		mta.setAttribute("cid", "500558982");
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(mta, s);
	})();

	// 腾讯统计 生产库
	// var _mtac = {
	// 	"senseQuery": 1
	// };
	// (function() {
	// 	var mta = document.createElement("script");
	// 	mta.src = "https://pingjs.qq.com/h5/stats.js?v2.0.4";
	// 	mta.setAttribute("name", "MTAH5");
	// 	mta.setAttribute("sid", "500560064");
	// 	mta.setAttribute("cid", "500560066");
	// 	var s = document.getElementsByTagName("script")[0];
	// 	s.parentNode.insertBefore(mta, s);
	// })();
}



// if (process.env.NODE_ENV == 'development') {

// }else if(process.env.NODE_ENV == 'production'){

// }

export {
	baseUrlHost,
	imgUrl
}

export default {
	statistics
}