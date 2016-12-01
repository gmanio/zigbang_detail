/**
 * Created on 2016-11-30.
 * @author: Gman Park
 */

// namespace
var zigbang = zigbang || {};

/**
 * detail component
 */
zigbang.detail = function () {
    this.$init.apply(this, arguments);
}

zigbang.detail.prototype = {
    $init: function () {
        // var zigbangImageSlider = new zigbangImageSlider('.img_roomDetail');

        this.getDatas();
    },

    getDatas: function(){
        var json = document.getElementById('item');
        var datas = JSON.parse(json.innerHTML).datas;
        console.log(datas[0].building);
    }
}
