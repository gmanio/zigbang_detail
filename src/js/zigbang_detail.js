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
        this.cachedElement();
        this.attachEvent();

        this.getDatas();
        this.initMap();
    },

    cachedElement: function () {
        this.template = document.querySelector('template');
        this.template.model = {items: []};
    },

    attachEvent: function () {
        this.startSlider();

        document.getElementById('call_retailer').addEventListener('click', this.callRetailer.bind(this))
    },

    startSlider: function () {
        this.currentImageSlide = 0;

        this.slideInterval = setInterval(this.nextImage.bind(this), 2000);
    },

    stopSlider: function () {
        clearInterval(this.slideInterval);
    },

    nextImage: function () {
        var slides = document.querySelectorAll('.slide');

        slides[this.currentImageSlide].className = 'slide';
        this.currentImageSlide = (this.currentImageSlide + 1) % slides.length;
        slides[this.currentImageSlide].className = 'slide show';
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

        this.template.model.items.push(buildingInfo);
    },

    initMap: function () {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new daum.maps.LatLng(37.5513138, 126.9539775), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다
        var markerPosition = new daum.maps.LatLng(37.5513138, 126.9539775);

        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    }
}
