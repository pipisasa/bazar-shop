(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"S+LZ":function(e,t,i){"use strict";var o=i("wx14"),n=i("Ff2n"),a=i("q1tI"),l=i.n(a),r=i("bC0J"),c=i("40+L"),s=i.n(c),d=i("PDTj"),p=i("vOnD"),m=l.a.createElement,f=p.e.li.withConfig({displayName:"MultiCarousel__SingleItem",componentId:"sc-1l8qqrp-0"})(["border:1px solid ",";border-radius:6px;margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ",";}"],Object(r.a)("colors.borderColor","#f1f1f1"),Object(r.a)("colors.primary","#009E7F")),u={desktop:{breakpoint:{max:3e3,min:1024},items:1},mobile:{breakpoint:{max:464,min:0},items:1},tablet:{breakpoint:{max:1024,min:200},items:1}};t.a=function(e){var t=e.items,i=void 0===t?[]:t,a=e.deviceType,r=a.mobile,c=a.tablet,p=(a.desktop,e.title),g=Object(n.a)(e,["items","deviceType","title"]),h=i.slice(0,6).map((function(e,t){return m(d.a,{media:!0,url:e.url?e.url:e.image,key:t,alt:p,style:{minWidth:"auto",height:"auto",position:"relative",margin:"auto"},className:"product-image"})})),x=i.map((function(e,t){return m(d.a,{url:e.url?e.url:e.image,key:t,media:!0,alt:p,style:{width:"100%",height:"100%",position:"relative"}})})),w="desktop";return r&&(w="mobile"),c&&(w="tablet"),m(s.a,Object(o.a)({showDots:!0,ssr:!0,infinite:!0,slidesToSlide:1,containerClass:"carousel-with-custom-dots",responsive:u,deviceType:w,autoPlay:!1,arrows:!1,customDot:m((function(e){var t=e.index,i=e.onClick,o=e.active,n=e.carouselState;n.currentSlide,n.deviceType;return m(f,{"data-index":t,key:t,onClick:function(){return i()},className:"custom-dot ".concat(o&&"custom-dot--active")},l.a.Children.toArray(x)[t])}),null)},g),h)}},eFaF:function(e,t,i){"use strict";var o=i("q1tI"),n=i.n(o),a=n.a.createElement,l=function(e){var t=e.children,i=e.more,l=e.less,r=e.character,c=Object(o.useState)(!1),s=c[0],d=c[1],p=function(e){e.preventDefault(),d(!s)};return t?a(n.a.Fragment,null,t&&t.length<r||s?t:t.substring(0,r),t&&t.length>r&&!s&&a(n.a.Fragment,null,a("br",null),a("span",null,a("a",{href:"#",onClick:p,style:{color:"#009e7f",fontWeight:700}},i))),t&&t.length>r&&s&&a(n.a.Fragment,null,a("br",null),a("span",null,a("a",{href:"#",onClick:p,style:{color:"#009e7f",fontWeight:700}},l)))):null};l.defaultProps={character:150,more:"Read more",less:"less"},t.a=l},q8M2:function(e,t,i){"use strict";i.r(t);var o=i("KQm4"),n=i("q1tI"),a=i.n(n),l=i("nOHt"),r=i.n(l),c=i("Bo8V"),s=i("89Ff"),d=i("vOnD"),p=i("bC0J"),m=d.e.div.withConfig({displayName:"QuickViewstyle__QuickViewWrapper",componentId:"sc-28ycgw-0"})(["max-width:1020px;"]),f=d.e.div.withConfig({displayName:"QuickViewstyle__ProductDetailsWrapper",componentId:"sc-28ycgw-1"})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;min-height:100%;border-radius:6px;overflow:hidden;box-sizing:border-box;box-shadow:0 10px 40px rgba(0,0,0,0.16);*{box-sizing:border-box;}"]),u=d.e.div.withConfig({displayName:"QuickViewstyle__ProductPreview",componentId:"sc-28ycgw-2"})(["flex:0 0 50%;max-width:50%;padding:30px 60px;display:flex;align-items:center;justify-content:center;position:relative;@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 47px 40px 30px;order:0;}img{width:100%;@media (max-width:767px){min-width:auto !important;}}"]),g=(d.e.span.withConfig({displayName:"QuickViewstyle__SaleTag",componentId:"sc-28ycgw-3"})(["font-size:12px;font-weight:700;color:#ffffff;background-color:",";padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:40px;right:30px;"],Object(p.a)("colors.yellow","#FBB979")),d.e.span.withConfig({displayName:"QuickViewstyle__DiscountPercent",componentId:"sc-28ycgw-4"})(["font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:#ffffff;line-height:24px;background-color:",";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:30px;right:30px;border-radius:12px;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px);"],Object(p.a)("fontSizes.1","13"),Object(p.a)("fontWeights.6","700"),Object(p.a)("colors.yellow","#FBB979"))),h=d.e.div.withConfig({displayName:"QuickViewstyle__ProductInfoWrapper",componentId:"sc-28ycgw-5"})(["flex:0 0 50%;max-width:50%;border-left:1px solid ",";@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:10px 0 30px;order:1;}"],Object(p.a)("colors.lightMediumColor","#f3f3f3")),x=d.e.div.withConfig({displayName:"QuickViewstyle__ProductInfo",componentId:"sc-28ycgw-6"})(["padding:50px;@media (max-width:767px){padding:0px 30px 30px 30px;}"]),w=d.e.div.withConfig({displayName:"QuickViewstyle__ProductTitlePriceWrapper",componentId:"sc-28ycgw-7"})(["width:100%;display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:10px;"]),y=d.e.h1.withConfig({displayName:"QuickViewstyle__ProductTitle",componentId:"sc-28ycgw-8"})(["font-family:'Poppins',sans-serif;font-size:","px;font-weight:",";color:",";line-height:1.5;display:flex;@media (max-width:767px){word-break:break-word;}"],Object(p.a)("fontSizes.4","21"),Object(p.a)("fontWeights.6","700"),Object(p.a)("colors.darkBold","#0D1136")),b=d.e.div.withConfig({displayName:"QuickViewstyle__ProductPriceWrapper",componentId:"sc-28ycgw-9"})(["display:flex;align-items:center;flex-shrink:0;margin-left:25px;line-height:31px;@media (max-width:767px){margin-left:15px;}"]),k=d.e.div.withConfig({displayName:"QuickViewstyle__ProductPrice",componentId:"sc-28ycgw-10"})(["font-family:'Lato',sans-serif;font-size:16px;font-weight:",";color:",";"],Object(p.a)("fontWeights.6","700"),Object(p.a)("colors.primary","#009E7F")),v=d.e.span.withConfig({displayName:"QuickViewstyle__SalePrice",componentId:"sc-28ycgw-11"})(["font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:",";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:10px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:",";position:absolute;top:50%;left:0;}"],Object(p.a)("fontSizes.1","13"),Object(p.a)("fontWeights.3","400"),Object(p.a)("colors.yellow","#FBB979"),Object(p.a)("colors.yellow","#FBB979")),C=d.e.div.withConfig({displayName:"QuickViewstyle__ProductWeight",componentId:"sc-28ycgw-12"})(["font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:",";"],Object(p.a)("fontSizes.1","13"),Object(p.a)("fontWeights.3","400"),Object(p.a)("colors.darkRegular","#77798c")),_=d.e.p.withConfig({displayName:"QuickViewstyle__ProductDescription",componentId:"sc-28ycgw-13"})(["font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:",";line-height:2;margin-top:30px;"],Object(p.a)("fontSizes.2","15"),Object(p.a)("fontWeights.3","400"),Object(p.a)("colors.darkMedium","#424561")),j=d.e.div.withConfig({displayName:"QuickViewstyle__ProductCartBtn",componentId:"sc-28ycgw-14"})(["margin-top:60px;@media (max-width:767px){margin-top:40px;}.reusecore__button{font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:",";height:36px;border-radius:4rem;.btn-icon{margin-right:5px;}&:hover{color:#fff;background-color:",";border-color:",";}}"],Object(p.a)("fontSizes.2","15"),Object(p.a)("fontWeights.6","700"),Object(p.a)("colors.primary","#009E7F"),Object(p.a)("colors.primary","#009E7F"),Object(p.a)("colors.primary","#009E7F")),O=d.e.div.withConfig({displayName:"QuickViewstyle__ProductCartWrapper",componentId:"sc-28ycgw-15"})(["display:flex;flex-direction:column;"]),I=d.e.div.withConfig({displayName:"QuickViewstyle__ProductMeta",componentId:"sc-28ycgw-16"})(["margin-top:30px;"]),P=d.e.div.withConfig({displayName:"QuickViewstyle__MetaSingle",componentId:"sc-28ycgw-17"})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}"]),N=d.e.span.withConfig({displayName:"QuickViewstyle__MetaItem",componentId:"sc-28ycgw-18"})(["font-family:'Lato',sans-serif;font-size:","px;font-weight:",";color:",";margin-right:10px;margin-bottom:10px;background-color:",";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"],Object(p.a)("fontSizes.1","13"),Object(p.a)("fontWeights.6","700"),Object(p.a)("colors.darkBold","#0D1136"),Object(p.a)("colors.lightColor","#f7f7f7")),F=d.e.button.withConfig({displayName:"QuickViewstyle__ModalClose",componentId:"sc-28ycgw-19"})(["position:fixed;top:20px;right:15px;padding:10px 15px;z-index:1;cursor:pointer;display:block;color:rgba(0,0,0,0.5);background:transparent;border:0;outline:none;display:inline-block;svg{width:12px;height:12px;}@media (max-width:767px){top:5px;right:0;}"]),Q=i("5kK8"),V=i("yBv+"),z=i("eFaF"),W=i("S+LZ"),S=i("dq9M"),B=i("4WSj"),T=i("gHRq"),D=a.a.createElement;t.default=function(e){var t=e.modalProps,i=e.deviceType,n=e.onModalClose,l=Object(B.b)(),d=l.addItem,p=l.removeItem,L=l.isInCart,q=l.getItem,M=t.id,E=t.Type,J=t.title,R=t.unit,H=t.price,K=t.discountInPercent,Z=t.salePrice,A=t.description,G=t.images,U=t.image,X=t.category,Y=[].concat(Object(o.a)(G),[{image:U}]),$=Object(S.b)().isRtl,ee=function(e){e.stopPropagation(),d(t)};function te(e){r.a.push({pathname:"/".concat(E.toLowerCase()),query:{category:e}}).then((function(){return window.scrollTo(0,0)})),Object(c.b)()}return D(a.a.Fragment,null,D(F,{onClick:n},D(V.CloseIcon,null)),D(m,null,D(f,{className:"product-card",dir:"ltr"},!$&&D(u,null,D(W.a,{items:Y,deviceType:i}),!!K&&D(a.a.Fragment,null,D(g,null,K,"%"))),D(h,{dir:$?"rtl":"ltr"},D(x,null,D(w,null,D(y,null,J),D(b,null,K?D(v,null,Q.a,H):"",D(k,null,Q.a,Z||H))),D(C,null,R),D(_,null,D(z.a,{character:600},A)),D(O,null,D(j,null,L(M)?D(T.a,{value:q(M).quantity,onDecrement:function(e){e.stopPropagation(),p(t)},onIncrement:ee}):D(s.a,{title:"Cart",intlButtonId:"addCartButton",iconPosition:"left",colors:"primary",size:"small",variant:"outlined",className:"cart-button",icon:D(V.CartIcon,null),onClick:ee}))),D(I,null,D(P,null,X&&D(a.a.Fragment,null,D(N,{onClick:function(){return te(X.slug)},key:X.id},X.title),X.parent&&D(N,{onClick:function(){return te(X.parent.slug)},key:X.parent.id},X.parent.title)))))),$&&D(u,null,D(W.a,{items:Y,deviceType:i}),!!K&&D(a.a.Fragment,null,D(g,null,K,"%"))))))}}}]);