
// 控制移动端布局
var = {max: 640, min: 320, px: 100};
$(window).on('resize', function () {
    var w = $(this).width();
    if (w < Rem.min) {
        w = Rem.min;
    } else if (w > Rem.max) {
        w = Rem.max;
    }
    $('html').css('font-size', Rem.px * w / Rem.max + 'px');