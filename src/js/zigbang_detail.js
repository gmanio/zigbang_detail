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

        this.attachEvent();

        this.getDatas();
        this.initMap();
    },

    attachEvent: function () {
        document.getElementById('call_retailer').addEventListener('click', this.callRetailer.bind(this))
    },

    callRetailer: function (e) {
        var el = e.currentTarget;
        var number = el.getAttribute('data-number');

        location.href = "tel:" + number;
    },

    getDatas: function () {
        var requestData = document.getElementById('buildingList');
        var datas = JSON.parse(requestData.innerHTML).datas;
        var buildingInfo = datas[0].building;
        console.log(buildingInfo);
        var template = document.querySelector('template');

        template.model = {
            items: [
                {
                    name: 'aaaa',
                    address1: 'aaaa',
                    address2: 'aaaa',
                    address3: 'aaaa',
                    floor: 'aaaa',
                    rooms: 'aaaa',
                    established: 'aaaa'
                }
            ]
        };
        template.model.items.push({
            name: buildingInfo.name,
            address1: buildingInfo.address1,
            address2: buildingInfo.address2,
            address3: buildingInfo.address3,
            floor: buildingInfo.floor,
            rooms: buildingInfo.rooms,
            established: buildingInfo.established
        })
    },

    initMap: function () {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new daum.maps.LatLng(37.5513138, 126.9539775), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

        // 마커가 표시될 위치입니다
        var markerPosition = new daum.maps.LatLng(37.5513138, 126.9539775);

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }
}
