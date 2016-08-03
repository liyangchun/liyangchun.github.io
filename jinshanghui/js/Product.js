$(document).ready(function() {
    GetProduct(49, "#c1", "1");
    GetProduct(50, "#c2", "2");
    GetProduct(51, "#c3", "3");
    GetProduct(48, "#c4", "4");
    GetProduct(52, "#c5", "5");
    GetProduct(53, "#c6", "6");
    GetProduct(54, "#c7", "7");
});


function GetHtml(data,r) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += "<li>";
        html += "<a href=\"customDetails.html?r="+r+"&id=" + data[i].Guid + "\"><img src=\"" + data[i].Detail + "\"/></a>";
        html += "<p>" + data[i].Name + "</p>";
        html += "</li>";
    }
    return html;
}

function GetProduct(type, obj,r) {
    $.ajax({
        type: "post",
        url: "ashx/ProductCatetoryList.ashx",
        data: "action=1&cid=" + type,
        success: function(data) {
            if (data != "") {
                var sHtml = GetHtml(eval(data),r);
                $(obj).html(sHtml);
            } else {

            }
        }
    })
}