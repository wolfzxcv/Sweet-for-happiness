(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(0),l=n.n(a),c=n(17),o=n(3),i=n.n(o),d=n(7),u=n(16),m=n(14);function p(){var e=Object(r.a)(["\n  color: green;\n"]);return p=function(){return e},e}function s(){var e=Object(r.a)(["\n  height: 60px;\n  &:hover {\n    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"]);return s=function(){return e},e}function x(){var e=Object(r.a)(["\n  div {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    background-color: ",";\n  }\n"]);return x=function(){return e},e}var E=Object(d.default)(u.Flex)(x(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.orange}),f=Object(d.default)(u.Button)(s(),function(e){return e.theme.colors.greenWhite},function(e){return e.theme.colors.green}),h=Object(d.default)(u.Text)(p());t.default=function(e){var t=e.match,n=Object(a.useContext)(m.a),r=n.orderDetail,o=n.setOrderDetail,d=n.confirmPayment;Object(a.useEffect)(function(){p()},[]);var p=function(){i.a.get("".concat("https://vue-course-api.hexschool.io","/api/").concat("sweetshop","/order/").concat(t.params.id)).then(function(e){o(e.data),console.log("getOrederDetail ",e.data)})},s=new Date(1e3*r.order.create_at);return l.a.createElement(u.Box,{my:3},l.a.createElement(u.Flex,{justifyContent:"center",alignItems:"center",flexDirection:"column"},l.a.createElement(u.Card,{width:["95vw","390px"]},l.a.createElement(u.Heading,{bg:"greenWhite",my:1},l.a.createElement(u.Flex,{justifyContent:"center"},"Order")),l.a.createElement(E,{flexDirection:"column"},l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Create at"),l.a.createElement(u.Text,null,s.toLocaleString())),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Status"),l.a.createElement(h,null,!0===r.order.is_paid?"paid":"need to pay")),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Total"),l.a.createElement(u.Text,null,"kr ".concat(r.order.total)))),l.a.createElement(u.Heading,{bg:"greenWhite",my:1},l.a.createElement(u.Flex,{justifyContent:"center"},"Recipient")),l.a.createElement(E,{flexDirection:"column"},l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Name"),l.a.createElement(u.Text,null,r.order.user.name)),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Email"),l.a.createElement(u.Text,null,r.order.user.email)),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Tel"),l.a.createElement(u.Text,null,r.order.user.tel)),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Address"),l.a.createElement(u.Text,null,r.order.user.address)),l.a.createElement("div",null,l.a.createElement(u.Text,{width:"100px",pl:2},"Message"),l.a.createElement(u.Text,null,r.order.message)))),l.a.createElement(f,{onClick:function(){d(r.order.id),p()},disabled:!0===r.order.is_paid,width:["97vw","390px"],bg:"green",fontSize:"26px"},!0===r.order.is_paid?"Payment Completed":"Confirm Payment"),r.order.is_paid&&l.a.createElement(c.b,{to:"/Sweet-for-happiness/"},l.a.createElement(f,{width:["97vw","390px"],bg:"green",fontSize:"26px",my:5},"Back to Main Page"))))}}}]);
//# sourceMappingURL=15.b4137fa4.chunk.js.map