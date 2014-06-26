// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});

var Push = require('./BaiduPush');
var opt = {
	ak : "hFSfD5dCAbDHnIbANtcuSkt1",
	sk : "6Veralrj7apiRBthfo1NW5NjUdNAapM6",
}
var baiduClient = new Push(opt);
function baiduPushMessage() {
	var opt = {
		push_type: 1,
		messages: JSON.stringify(["hello, push0"]),
		msg_keys: JSON.stringify(["key0"]),
	}
	baiduClient.pushMsg(opt, function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);
	});
}

AV.Cloud.define("pushAVOS", function(request, response) {
	AV.Push.send({
		data      : {
			alert : "AVOS Alert"
		}
	});

	AV.Push.send({
		data                    : {
			alert               : "AVOS content-available",
			"content-available" : 1,
		}
	});

	baiduPushMessage();
});
