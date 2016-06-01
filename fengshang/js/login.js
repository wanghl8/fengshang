;$(function(){
	loadHtml("common/footer.html","footer");
});
var validator;
    $(document).ready(function () {
        $.validator.setDefaults({
            debug: true
        });

        validator = $("#loginForm").validate({
            rules: {
                username: {
                    required: true, //必填项
                    mobile : 11,
                    /*email:true*/
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 10,
                    rangelength:[6,10]
                }/*,
                "confirm-password": {
                    equalTo: "#password"
                }*/
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
                    minlength: "密码最小为6位",
                    maxlength: "密码最大为16位"
                }/*,
                "confirm-password": {
                    equalTo: "两次输入的密码不一致"
                }*/
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });
        //验证手机号
        $.validator.addMethod("mobile", function(value, element, params){
            var mobile = /^[1][3578]\d{9}$/;
            return this.optional(element) || (mobile.test(value));  //判断是否指定了required
        }, $.validator.format("请填写正确的{0}位手机号~")); //取到规则里写的值

       /* $("#login_btn").click(function () {
            alert($("#loginForm").valid() ? "填写正确" : "填写错误");
            location.href = "index.html";
        });*/
        /*获取cookie信息*/
       var login = $.cookie("register");
       var login_x = JSON.parse(login);
       $("#login_btn").click(function(){
       		var login_name=$("#username").val();
       		var login_word=$("#password").val();
       		if(login_name==login_x.user_name && login_word==login_x.pass_word){
       			alert("登陆成功");
       			$.cookie("islogin","ture", {expires:7,path:'/'})
       			location.href = "index.html";
       		}		
       })
    });

