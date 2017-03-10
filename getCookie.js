/**
 * getCookie
 * @Date: 2017-03-10
 * @author: sipeng
 * @site: http://www.sipeng.net
 */
function getCookie(){
	var coookies = document.cookie.split(';');
	var $cookie = {};

	coookies.forEach(function(cook){
		$cookie[cook.split('=')[0]] = cook.split('=')[1]
	});

	return $cookie;
};

