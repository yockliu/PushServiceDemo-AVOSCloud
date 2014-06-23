// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});

AV.Cloud.define("pushAVOS", function(request, response) {
	AV.Push.send({
		data: {
			alert: "AVOS message"
		}
	});
});
