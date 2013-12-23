window.matchMedia=window.matchMedia||function(a){"use strict";var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(document);var navigation=responsiveNav("#site-nav",{animate:!0,transition:400,label:"<i class='icon-reorder'></i> Menu",insert:"before",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}});$(function(){$("article").fitVids()});


// function loadMap() {
//   var map_url = $('#map-canvas').data('map-url');
//   var map = new google.maps.Map(document.getElementById('map-canvas'));
//   var kmz = new google.maps.KmlLayer(map_url);
//   kmz.setMap(map);
// }

// $(document).ready(function() {
//   google.maps.event.addDomListener(window, 'load', loadMap);
// });