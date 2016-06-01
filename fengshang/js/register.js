;$(function(){
	/*页面加载*/
	loadHtml("common/footer.html","footer");
});
/*校验*/
var validator;
$(document).ready(function () {
    $.validator.setDefaults({
        debug: true
    });

    validator = $("#demoForm").validate({
        rules: {
            username: {
                required: true, //必填项
                mobile : 11
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 10,
                rangelength:[6,10]
            },
            "confirm-password": {
                equalTo: "#password"
            },
             email: {
                required: true,
                email: true
             }
        },
        messages: {
            username: {
                required: "必须填写用户名",
                minlength: "用户名最小为2位",
                maxlength: "用户名最大为10位",
                rangelength: "用户名应该在2-10位",
                remote: "用户名不存在"
            },
            password: {
                required: "必须填写密码",
                minlength: "密码最小为2位",
                maxlength: "密码最大为16位"
            },
            "confirm-password": {
				equalTo: "两次输入的密码不一致"
            },
            email: {
                required: "请输入电子邮件",
                email: "请检查电子邮件的格式"
            }
        },
        submitHandler: function (form) {
            console.log($(form).serialize());
        }
    });
    //验证手机号
    $.validator.addMethod("mobile", function(value, element, params){
        var mobile = /^[1][3578]\d{9}$/;
        return this.optional(element) || (mobile.test(value));  //判断是否指定了required
    }, $.validator.format("请填写正确的{0}位手机号~")); //取到规则里写的值；
    
	/*点击注册储存信息*/
	$("#lijizhuce").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		var regist={
			"user_name":username,
			"pass_word":password
		}
		$.cookie("register", JSON.stringify(regist), {expires:7,path:'/'})
			alert("注册成功");
			location.href = "login.html";			
	});
});

