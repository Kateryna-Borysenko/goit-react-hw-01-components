(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3dzvr",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statList:"Statistics_statList__3BR2u",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt"}},function(e,a,t){e.exports={item:"FriendListItem_item__1JfCM",avatar:"FriendListItem_avatar__39YKi",name:"FriendListItem_name__3Mkg3",isOnline:"FriendListItem_isOnline__Fa-lM",notOnline:"FriendListItem_notOnline__1_aw1"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1k0Uk",type:"TransactionHistory_type__2Q5st"}},,function(e,a,t){e.exports={friendList:"FriendList_friendList__1lQQU"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(5),c=t.n(n),i=t(8),s=t.n(i),r=(t(17),t(1)),l=t.n(r),d=t(0),o=function(e){var a=e.username,t=e.tag,n=e.location,c=e.avatar,i=e.stats,s=i.followers,r=i.views,o=i.likes;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:c,alt:"user avatar",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:a}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",t]}),Object(d.jsx)("p",{className:l.a.location,children:n})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:s})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:r})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:o})]})]})]},t)},b=t(2),p=t.n(b),m=function(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{className:p.a.statistics,children:[a&&Object(d.jsx)("h2",{className:p.a.title,children:a}),Object(d.jsx)("ul",{className:p.a.statList,children:t.map((function(e){return Object(d.jsxs)("li",{style:{backgroundColor:"".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))},className:p.a.item,children:[Object(d.jsx)("span",{className:p.a.label,children:e.label}),Object(d.jsxs)("span",{className:p.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},u=t(3),j=t.n(u),f=function(e){var a=e.avatar,t=e.name,n=e.isOnline;e.id;return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsx)("span",{className:n?j.a.isOnline:j.a.notOnline,children:n}),Object(d.jsx)("img",{className:j.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:j.a.name,children:t})]})},y=t(9),O=t.n(y),_=function(e){var a=e.friends;return Object(d.jsx)("ul",{className:O.a.friendList,children:a.map((function(e){return Object(d.jsx)(f,{name:e.name,avatar:e.avatar,isOnline:e.isOnline},e.id)}))})},h=t(7),x=t.n(h),v=function(e){var a=e.items;return Object(d.jsxs)("table",{className:x.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:x.a.type,children:e.type.slice(0,1).toUpperCase()+e.type.slice(1)}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})},g=t(4),N=t(10),w=t(11),L=t(12),P=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{username:g.username,tag:g.tag,location:g.location,avatar:g.avatar,stats:g.stats}),Object(d.jsx)(m,{title:"Upload stats",stats:N}),Object(d.jsx)(_,{friends:w}),Object(d.jsx)(v,{items:L})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3a082f8d.chunk.js.map