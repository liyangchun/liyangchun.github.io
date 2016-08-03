$(function() {

    $('.showCloth .txt2 .txt2Bot ul li').click(function() {
        var bigpic = $(this).find('img').attr('bigPic')
        $('.big img').attr('src', bigpic);
    })






    if (GetQueryString("A")) {
        if (GetQueryString("index") >= 0) {
            $('.custom .content .tabList ul.ul_change li:eq(' + GetQueryString("index") + ') a').tab('show');

            Sh4(GetQueryString("index"));
        }
    }

    $('.menu_change .yy ul li ').click(function(e) {
        e.preventDefault();
        var i = $(this).index();
        $('.custom .content .tabList ul.ul_change li:eq(' + i + ') a').tab('show');

    })

    $('.tabtransform ul li ').click(function(e) {
        e.preventDefault();
        var i = $(this).index();
        window.location.href = 'custom.html?A=a&index=' + i + '';
    })

});



function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function Sh4(sh4) {
    switch (sh4) {
        case "0":
            $("#sh4").html("CUSTOM SUIT");
            break;
        case "1":
            $("#sh4").html("CUSTOM SHIRTS");
            break;
        case "2":
            $("#sh4").html("CUSTOM VEST");
            break;
        case "3":
            $("#sh4").html("CUSTOM TROUSERS");
            break;
        case "4":
            $("#sh4").html("CUSTOM COAT");
            break;
        case "5":
            $("#sh4").html("CUSTOM SWEATER");
            break;
        case "6":
            $("#sh4").html("CUSTOM ACCESSORISE");
            break;
        default:
            break;
    }
}

// 这样调用：














