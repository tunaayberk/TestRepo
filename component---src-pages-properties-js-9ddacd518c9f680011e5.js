(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7++0":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("ioFf"),a("V+eJ");var l,r,o=a("q1tI"),n=a("MyaD"),c=a("zSVi"),s=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(l||(l={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function m(e){var t=function(t){return o.createElement(c.a.Consumer,null,(function(a){Object(n.f)(a);var l=t.value,r=t.children,o=s(t,["value","children"]),c="string"==typeof l?new Date(l||0):l;return r("formatDate"===e?a.formatDateToParts(c,o):a.formatTimeToParts(c,o))}))};return t.displayName=r[e],t}function p(e){var t=function(t){return o.createElement(c.a.Consumer,null,(function(a){Object(n.f)(a);var l=t.value,r=t.children,c=s(t,["value","children"]),m=a[e](l,c);if("function"==typeof r)return r(m);var p=a.textComponent||o.Fragment;return o.createElement(p,null,m)}))};return t.displayName=l[e],t}p("formatDate"),p("formatTime");var i=p("formatNumber");p("formatList"),p("formatDisplayName"),m("formatDate"),m("formatTime")},Wl69:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),o=a("Bl7J"),n=a("vrFN"),c=(a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1"),a("ZRkP")),s=a("/MKj"),m=a("Wbzz"),p=a("7++0"),i=a("vpQ9"),u=function(e){var t=e.title,a=e.slug,l=e.PropertyBasics,o=e.PropertyImages,n=e.PropertyAgent,c=e.PropertyLocations;return r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement("div",{className:"property-listing property-1"},r.a.createElement("div",{className:"listing-img-wrapper"},r.a.createElement(m.Link,{to:"/property/"+a},r.a.createElement("img",{src:""+o.mainimage.sourceUrl,className:"img-fluid mx-auto",alt:""})),r.a.createElement("div",{className:"listing-like-top"},r.a.createElement("i",{className:"ti-heart"})),r.a.createElement("div",{className:"listing-rating"},r.a.createElement("i",{className:"ti-star filled"}),r.a.createElement("i",{className:"ti-star filled"}),r.a.createElement("i",{className:"ti-star filled"}),r.a.createElement("i",{className:"ti-star filled"}),r.a.createElement("i",{className:"ti-star"})),r.a.createElement("span",{className:"property-type"},"For ",l.status)),r.a.createElement("div",{className:"listing-content"},r.a.createElement("div",{className:"listing-detail-wrapper"},r.a.createElement("div",{className:"listing-short-detail"},r.a.createElement("h4",{className:"listing-name"},r.a.createElement(m.Link,{to:"/property/"+a},t)),r.a.createElement("span",{className:"listing-location"},r.a.createElement("i",{className:"ti-location-pin"}),c.fieldGroupName)),r.a.createElement("div",{className:"list-author"},r.a.createElement(m.Link,{to:"/property/"+a},r.a.createElement("img",{src:n.agent.length>0?""+n.agent[0].featuredImage.mediaItemUrl:i.a+"/img/users/default.jpg",className:"img-fluid img-circle avater-30",alt:""})))),r.a.createElement("div",{className:"listing-features-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Bed:"),l.bedrooms),r.a.createElement("li",null,r.a.createElement("strong",null,"Bath:"),l.bathrooms),r.a.createElement("li",null,r.a.createElement("strong",null,"Sqft:"),l.sqft))),r.a.createElement("div",{className:"listing-footer-wrapper"},r.a.createElement("div",{className:"listing-price"},r.a.createElement("h4",{className:"list-pr"},r.a.createElement(p.a,{value:l.price,style:"currency",currency:"CAD"}))),r.a.createElement("div",{className:"listing-detail-btn"},r.a.createElement(m.Link,{to:"/property/"+a,className:"more-btn"},"More Info"))))))},g=function(e){var t=e.count,a=e.perPage,o=e.handlePagination,n=e.pageNumber,c=Object(l.useState)([]),s=c[0],m=c[1];return Object(l.useEffect)((function(){for(var e=[],l=1;l<=t/a;l++)e.push(l);t>a*e[e.length-1]&&e.push(e[e.length-1]+1),m([].concat(e))}),[]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},r.a.createElement("ul",{className:"pagination p-center"},1!==n&&r.a.createElement("li",{className:"page-item"},r.a.createElement("span",{className:"page-link",style:{cursor:"pointer"},"aria-label":"Previous",onClick:function(){return o("previous")}},r.a.createElement("span",{className:"ti-arrow-left"}),r.a.createElement("span",{className:"sr-only"},"Previous"))),s.map((function(e,t){return r.a.createElement("li",{key:t,className:t+1===n?"page-item active":"page-item"},r.a.createElement("span",{onClick:function(){return o(t+1)},className:"page-link",style:{cursor:"pointer"}},t+1))})),s.length>n&&r.a.createElement("li",{className:"page-item"},r.a.createElement("span",{onClick:function(){return o("next")},className:"page-link",style:{cursor:"pointer"},"aria-label":"Next"},r.a.createElement("span",{className:"ti-arrow-right"}),r.a.createElement("span",{className:"sr-only"},"Next"))))))},d=a("oe5f"),h=a("jzc1"),E=function(e){return{type:d.a,payload:e}},f=function(e,t,a){return void 0===a&&(a=!0),function(l){fetch(Object(h.b)(e,t)).then((function(e){return e.json()})).then((function(t){"success"===t.status&&l(function(e,t){return{type:d.f,payload:{pageNumber:e,data:t}}}(e,t.data.data))})),a&&fetch(h.a).then((function(e){return e.json()})).then((function(e){var t;"success"===e.status&&l((t=e.count,{type:d.e,payload:t}))}))}},y=function(){var e=Object(s.c)(),t=c.data;console.error("DATADATA",t);var a=Object(l.useState)(4),o=a[0],n=(a[1],t.wordpress.properties.nodes),m=Object(s.d)((function(e){return e.propertyListReducer.pageNumber}),s.b),p=Object(s.d)((function(e){return e.propertyListReducer.numberOfProperties}),s.b);Object(l.useEffect)((function(){n[m].length<1&&e(f(m,o))}),[]);return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-sm-12 list-layout"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement("div",{className:"filter-fl"},r.a.createElement("h4",null,"Total Property Find is:"," ",r.a.createElement("span",{className:"theme-cl"},p)),r.a.createElement("div",{className:"btn-group custom-drop"},r.a.createElement("button",{type:"button",className:"btn btn-order-by-filt","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Short By",r.a.createElement("i",{className:"ti-angle-down"})),r.a.createElement("div",{className:"dropdown-menu pull-right animated flipInX"},r.a.createElement("a",{href:"#"},"Latest"),r.a.createElement("a",{href:"#"},"Most View"),r.a.createElement("a",{href:"#"},"Most Popular"))))),n.map((function(e,t){return r.a.createElement(u,Object.assign({key:t},e))}))),p>0&&r.a.createElement(g,{count:p,perPage:o,handlePagination:function(t){"next"===t?Object.keys(n).includes(String(m+1))?e(E(m+1)):e(f(m+1,o,!1)):"previous"===t?Object.keys(n).includes(String(m-1))?e(E(m-1)):e(f(m-1,o,!1)):Object.keys(n).includes(String(t))?e(E(t)):e(f(t,o,!1))},pageNumber:m})))))},N=function(){var e=Object(l.useState)(!1),t=e[0],a=e[1];return r.a.createElement("div",{className:"search-header-banner"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"full-search-2 transparent"},r.a.createElement("div",{className:"hero-search"},r.a.createElement("h1",null,"Search Your Dream")),r.a.createElement("div",{className:"hero-search-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Neighborhood"}),r.a.createElement("i",{className:"ti-search"})))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("select",{id:"cities",className:"form-control"},r.a.createElement("option",{value:""}," "),r.a.createElement("option",{value:"1"},"Los Angeles, CA"),r.a.createElement("option",{value:"2"},"New York City, NY"),r.a.createElement("option",{value:"3"},"Chicago, IL"),r.a.createElement("option",{value:"4"},"Houston, TX"),r.a.createElement("option",{value:"5"},"Philadelphia, PA"),r.a.createElement("option",{value:"6"},"San Antonio, TX"),r.a.createElement("option",{value:"7"},"San Jose, CA")),r.a.createElement("i",{className:"ti-briefcase"})))),r.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Minimum"}),r.a.createElement("i",{className:"ti-money"})))),r.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Maximum"}),r.a.createElement("i",{className:"ti-money"}))))),r.a.createElement("div",{className:t?"collapse show":"collapse",id:"advance-search","aria-expanded":"false",role:"banner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("select",{id:"ptypes",className:"form-control"},r.a.createElement("option",{value:""}," "),r.a.createElement("option",{value:"1"},"Any Type"),r.a.createElement("option",{value:"2"},"For Rental"),r.a.createElement("option",{value:"3"},"For Sale")),r.a.createElement("i",{className:"ti-briefcase"})))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("select",{id:"bedrooms",className:"form-control"},r.a.createElement("option",{value:""}," "),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("i",{className:"fas fa-bed"})))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-with-icon"},r.a.createElement("select",{id:"bathrooms",className:"form-control"},r.a.createElement("option",{value:""}," "),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("i",{className:"fas fa-bath"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},r.a.createElement("h4",null,"Amenities & Features"),r.a.createElement("ul",{className:"no-ul-list third-row"},r.a.createElement("li",null,r.a.createElement("input",{id:"a-1",className:"checkbox-custom",name:"a-1",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-1",className:"checkbox-custom-label"},"Air Condition")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-2",className:"checkbox-custom",name:"a-2",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-2",className:"checkbox-custom-label"},"Bedding")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-3",className:"checkbox-custom",name:"a-3",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-3",className:"checkbox-custom-label"},"Heating")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-4",className:"checkbox-custom",name:"a-4",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-4",className:"checkbox-custom-label"},"Internet")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-5",className:"checkbox-custom",name:"a-5",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-5",className:"checkbox-custom-label"},"Microwave")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-6",className:"checkbox-custom",name:"a-6",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-6",className:"checkbox-custom-label"},"Smoking Allow")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-7",className:"checkbox-custom",name:"a-7",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-7",className:"checkbox-custom-label"},"Terrace")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-8",className:"checkbox-custom",name:"a-8",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-8",className:"checkbox-custom-label"},"Balcony")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-9",className:"checkbox-custom",name:"a-9",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-9",className:"checkbox-custom-label"},"Icon")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-10",className:"checkbox-custom",name:"a-10",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-10",className:"checkbox-custom-label"},"Wi-Fi")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-11",className:"checkbox-custom",name:"a-11",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-11",className:"checkbox-custom-label"},"Beach")),r.a.createElement("li",null,r.a.createElement("input",{id:"a-12",className:"checkbox-custom",name:"a-12",type:"checkbox"}),r.a.createElement("label",{htmlFor:"a-12",className:"checkbox-custom-label"},"Parking")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group",id:"module"},r.a.createElement("a",{role:"button",onClick:function(){a(!t)},className:t?"":"collapsed","aria-expanded":"false","aria-controls":"advance-search"}))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("a",{href:"#",className:"btn reset-btn-outline"},"Search Reset")))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("a",{href:"#",className:"btn search-btn-outline"},"Search Result"))))))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(y,null))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(n.a,{title:"Properties"}),r.a.createElement(b,null))}},ZRkP:function(e){e.exports=JSON.parse('{"data":{"wordpress":{"properties":{"nodes":[{"PropertyOptions":{"homefeatured":true},"title":"Luxury Home In Manhattan","slug":"luxury-home-in-manhattan","PropertyBasics":{"status":"sale","price":60000000,"bedrooms":7,"bathrooms":5},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzM=","Agent":{"name":"Tuna Ayberk Ozmen"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/tuna.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":true},"title":"Resort Valley Ocs","slug":"resort-valley-ocs","PropertyBasics":{"status":"sale","price":675000,"bedrooms":2,"bathrooms":1},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzM=","Agent":{"name":"Tuna Ayberk Ozmen"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/tuna.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":true},"title":"Commercial Space San Francisco","slug":"commercial-space-san-francisco","PropertyBasics":{"status":"sale","price":3000000,"bedrooms":2,"bathrooms":3},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzE=","Agent":{"name":"Ayse Rehber"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/ayse.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":true},"title":"Office Space Toronto","slug":"office-space-toronto","PropertyBasics":{"status":"rent","price":3580,"bedrooms":null,"bathrooms":1},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzE=","Agent":{"name":"Ayse Rehber"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/ayse.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":true},"title":"Apartment To Buy Queens","slug":"apartment-to-buy-queens","PropertyBasics":{"status":"sale","price":2200000,"bedrooms":4,"bathrooms":2},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzE=","Agent":{"name":"Ayse Rehber"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/ayse.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":true},"title":"Energy Certificate For EU","slug":"energy-certificate-for-eu","PropertyBasics":{"status":"rent","price":2400,"bedrooms":2,"bathrooms":2},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzM=","Agent":{"name":"Tuna Ayberk Ozmen"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/tuna.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}},{"PropertyOptions":{"homefeatured":null},"title":"New Clue Apartment","slug":"new-clue-apartment","PropertyBasics":{"status":"rent","price":3575,"bedrooms":2,"bathrooms":2},"PropertyImages":{"mainimage":{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/energy-eu.jpg","altText":""},"gallery":[{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/flat-manhattan.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/resort-p1.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/queens.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/ny.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/new-clue-apartment.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/manhattan-office.jpg","altText":""},{"sourceUrl":"http://gastro.local/wp-content/uploads/2020/04/luxury-chicago.jpg","altText":""}]},"PropertyAgent":{"agent":[{"__typename":"WORDPRESS_Agent","id":"YWdlbnQ6NzM=","Agent":{"name":"Tuna Ayberk Ozmen"},"featuredImage":{"mediaItemUrl":"http://gastro.local/wp-content/uploads/2020/04/tuna.jpg"}}]},"PropertyLocations":{"fieldGroupName":"PropertyLocations"}}]}}}}')},vpQ9:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l=""}}]);
//# sourceMappingURL=component---src-pages-properties-js-9ddacd518c9f680011e5.js.map