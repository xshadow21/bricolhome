(function(){!function(i,t,n){"use strict";return i.fn.slidea.pagination=function(){this.settings={enabled:!1,position:"bottom","class":"slidea-pagination-light",items:function(i){return function(i){return'<div class="slidea-pagination-item"></div>'}}(this)},this.initialize=function(){var t,n,a,e;if(1!==this.slides_length){for(e="slidea-pagination-"+this.settings.pagination.position,t="",t+='<div class="slidea-pagination '+e+" "+this.settings.pagination["class"]+'">',n=0;n<this.slides_length;)t+=this.settings.pagination.items.call(this,n),n++;switch(t+="</div>",a=i(t),this.settings.pagination.position){case"before":this.element.before(a);break;case"after":this.element.after(a);break;default:this.element.prepend(a)}this.pagination=i(".slidea-pagination-item",a),this.pagination.each(function(t){return function(n,a){var e;e=i(a),e.on("click",function(){t.pagination.filter(".active").removeClass("active"),e.addClass("active"),t.slide(n)})}}(this))}},this.slide=function(i,t){this.pagination.filter(".active").removeClass("active"),this.pagination.eq(t).addClass("active")}},i.slidea.register_module("pagination",i.fn.slidea.pagination)}(window.jQuery,window,document)}).call(this);