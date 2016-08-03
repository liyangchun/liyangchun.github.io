document.write(' <header class="header">');
document.write('<div class="logo">');
document.write('<img src="images/logo.jpg"/>');
//document.write('<div class="search">');
//document.write('<div class="fl"><input type="text" placeholder="search"/></div>');
//document.write('<div class="fr"><img src="images/search.png"/></div>');
//document.write('</div>');
document.write('</div>');
document.write('</header>');
document.write('<nav class="nav2">');
document.write('<div class="top">');
document.write('<ul class="menu">');
document.write('<li id="li1" class="yy chang3">');
document.write('<a href="custom.html" class="tablink arwlink hh">定制分类<span class="bgWhite"></span></a>');
document.write('<ul>');
document.write('<li><a href="custom.html?A=a&index=0">男士西服</a></li>');
document.write('<li><a href="custom.html?A=a&index=1">男士衬衫</a></li>');
document.write('<li><a href="custom.html?A=a&index=2">男士马甲</a></li>');
document.write('<li><a href="custom.html?A=a&index=3">男士西裤</a></li>');
document.write('<li><a href="custom.html?A=a&index=4">男士大衣</a></li>');
document.write('<li><a href="custom.html?A=a&index=5">羊绒衫</a></li>');
document.write('<li><a href="custom.html?A=a&index=6">配饰</a></li>');
document.write('</ul>');
document.write('</li>');
document.write('<li id="li2"><a href="index.html">首页</a></li> ');
document.write('<li id="li3" class="yy chang3">');
document.write('<a href="BrandIntroduction.html" class="tablink arwlink hh">品牌介绍<span class="bgWhite"></span></a>');
document.write('<ul>');
document.write('<li><a href="culture.html">定制文化</a></li>');
document.write('<li><a href="fabric.html">面料介绍</a></li>');
document.write('</ul>');
document.write('</li> ');
document.write('<li id="li4"><a href="itemFanric.html">团体定制</a></li>');
document.write('<li id="li5"><a href="measurebody.html">在线预约量体</a></li>');
document.write('<li id="li6"><a href="cooperation.html">战略合作招商</a></li>');
document.write('<li><a href="http://www.kimangelo.com">金▪安杰罗商城</a></li>');
document.write('</ul>');
document.write('</div>');
document.write('</nav>');


$(function() {

    var wurl = window.location.href;
    if (wurl.indexOf('index.html') > -1) {
        $('#li2').attr("class", "active");
    } else if (wurl.indexOf('custom') > -1) {
        $('#li1').addClass("active");
    } else if (wurl.indexOf('culture') > -1 || wurl.indexOf('fabric') > -1 || wurl.indexOf('BrandIntroduction') > -1 ) {
        $('#li3').addClass("active");
    } else if (wurl.indexOf('itemFanric') > -1) {
        $('#li4').attr("class", "active");
    } else if (wurl.indexOf('measurebody') > -1) {
        $('#li5').attr("class", "active");
    } else if (wurl.indexOf('cooperation') > -1) {
        $('#li6').attr("class", "active");
    }
})