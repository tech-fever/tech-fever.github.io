HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},Fluid.events={registerNavbarEvent:function(){var e,o=jQuery("#navbar");0!==o.length&&(e=jQuery("#navbar .dropdown-menu"),0<o.offset().top&&(o.removeClass("navbar-dark"),e.removeClass("navbar-dark")),Fluid.utils.listenScroll(function(){o[50<o.offset().top?"addClass":"removeClass"]("top-nav-collapse"),e[50<o.offset().top?"addClass":"removeClass"]("dropdown-collapse"),0<o.offset().top?o.removeClass("navbar-dark"):o.addClass("navbar-dark"),e.removeClass("navbar-dark")}),jQuery("#navbar-toggler-btn").on("click",function(){jQuery(".animated-icon").toggleClass("open"),jQuery("#navbar").toggleClass("navbar-col-show")}))},registerParallaxEvent:function(){var r,n=jQuery('#banner[parallax="true"]');0!==n.length&&0!==(r=jQuery("#board")).length&&Fluid.utils.listenScroll(function(){var e=jQuery(window).scrollTop()/5,o=96+parseInt(r.css("margin-top"),10),o=(n.css({transform:"translate3d(0,"+(e=o<e?o:e)+"px,0)"}),jQuery(".side-col"));o&&o.css({"padding-top":e+"px"})})},registerScrollDownArrowEvent:function(){var e=jQuery(".scroll-down-bar");0!==e.length&&e.on("click",function(){Fluid.utils.scrollToElement("#board",-jQuery("#navbar").height())})},registerScrollTopArrowEvent:function(){var o,r,n,e,t,a=jQuery("#scroll-top-button");0!==a.length&&0!==(o=jQuery("#board")).length&&(n=r=!1,(e=function(){var e=o[0].getClientRects()[0].right,e=document.body.offsetWidth-e;r=50<=e,a.css({bottom:r&&n?"20px":"-60px",right:e-64+"px"})})(),jQuery(window).resize(e),t=o.offset().top,Fluid.utils.listenScroll(function(){var e=document.body.scrollTop+document.documentElement.scrollTop;n=t<=e,a.css({bottom:r&&n?"20px":"-60px"})}),a.on("click",function(){jQuery("body,html").animate({scrollTop:0,easing:"swing"})}))},registerImageLoadedEvent:function(){if("NProgress"in window){var e,o=document.getElementById("banner"),o=(o&&(o=o.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/(['"])/g,""),(e=new Image).onload=function(){window.NProgress&&window.NProgress.inc(.2)},e.src=o,e.complete&&e.onload()),jQuery("main img:not([lazyload])")),r=o.length;for(const e of o){const n=e.onload;e.onload=function(){n&&n(),window.NProgress&&window.NProgress.inc(.5/r)},e.complete&&e.onload()}}},registerRefreshCallback:function(e){Array.isArray(Fluid.events._refreshCallbacks)||(Fluid.events._refreshCallbacks=[]),Fluid.events._refreshCallbacks.push(e)},refresh:function(){if(Array.isArray(Fluid.events._refreshCallbacks))for(var e of Fluid.events._refreshCallbacks)e instanceof Function&&e()},billboard:function(){"console"in window&&console.log(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\`\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|           Powered by Hexo x Fluid            |
|         GitHub: https://git.io/JqpVD         |
|                                              |
------------------------------------------------
    `)}};