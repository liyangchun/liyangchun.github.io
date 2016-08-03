jQuery(document).ready(function($) {
	$('input[type=submit]').click(function () {
        var eleform = $(this).parents('form');
        validateForm(eleform);
    })
    function validateForm(eleform) {
    var validator = eleform.validate({
        debug: true,
        rules: {
            "phone": {
                required: true,
                isMobile:true
            },
            "username": {
                required: true,
            },
             "mcontent": {
                required: true
            }
        },
        messages: {
            "phone": {
                required: "手机号必填",
                isMobile: '手机格式不正确'
            },
            "username": {
                required: "用户名必填",
            },
             "mcontent": {
                required: "内容必填",
            }    
        },
        submitHandler: function () {
            uploadAndSubmit();
        },
    })
}

function uploadAndSubmit() {
    var formElement = document.getElementById("bodyForm");
    var newformElement = new FormData(formElement);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "ashx/Message.ashx", true);
    xhr.send(newformElement);
    xhr.onreadystatechange = function () {
      	if (this.readyState == 4) {
		alert("提交成功");
     		window.location.reload();
		}
        }
    }

});