(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(5),i=r.n(a),o=(r(11),r(12),r(4)),s=r.n(o),u=r(6),l=r(2),d={openMeteo:"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}6&current_weather=true",accuWeather:"https://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=".concat("Lhzgh3ZPKhVWOrPgp0s7UWAXfDrXqlym")},j={Berlin:[52.5235,13.4115],Paris:[48.8567,2.351],London:[51.5002,-.1262],Madrid:[40.4167,-3.7033],Amsterdam:[52.3738,4.891],Tokyo:[35.6785,139.6823],Moscow:[55.7558,37.6176],Singapore:[1,103.85],Stockholm:[59.3328,18.0645],Bogota:[4.6473,-74.0962]},p=r(0),h=function(e,t){return function(){var r=Object(n.useState)([]),c=Object(l.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)(""),h=Object(l.a)(o,2),b=h[0],f=h[1],O=function(){var e=Object(u.a)(s.a.mark((function e(){var r,n,c,a,o,u,p,h,b,f,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("openMeteo"!==t){e.next=10;break}for(n in r=[],j)c=Object(l.a)(j[n],2),a=c[0],o=c[1],u=fetch(d[t].replace("{latitude}",a.toString()).replace("{longitude}",o.toString())).then((function(e){return e.json()})),r.push(u);return e.next=5,Promise.all(r);case 5:p=e.sent,h=p.map((function(e){return{city:Object.keys(j).find((function(t){return j[t][0].toFixed(1)===e.latitude.toFixed(1)}))||"",temperature:e.current_weather.temperature}})),i(h),e.next=18;break;case 10:return e.next=12,fetch(d[t]+"");case 12:return b=e.sent,e.next=15,b.json();case 15:f=e.sent,O=f.filter((function(e){return Object.keys(j).includes(e.LocalizedName)})).map((function(e){return{city:e.LocalizedName,temperature:e.Temperature.Metric.Value}})),i(O);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O().then().catch().finally()}),[]),Object(p.jsxs)("table",{className:0===a.length?"wrapper__table blurred alignedTop":b?"wrapper__table alignedTop":"wrapper__table",children:[Object(p.jsx)("caption",{children:t}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:3,children:Object(p.jsx)("input",{type:"search",value:b,placeholder:"Filter...",onChange:function(e){return f(e.target.value)}})})}),Object(p.jsx)(e,{data:a.sort((function(e,t){return e.city.localeCompare(t.city)})).filter((function(e){return e.city.toLowerCase().startsWith(b.toLowerCase())}))})]})]})}},b=h((function(e){return Object(p.jsx)(p.Fragment,{children:e.data.map((function(e,t){var r=e.city,n=e.temperature;return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[t+1,"."]}),Object(p.jsx)("td",{children:r}),Object(p.jsxs)("td",{children:[n," C\xb0"]})]},r)}))})}),"accuWeather"),f=h((function(e){return Object(p.jsx)(p.Fragment,{children:e.data.map((function(e,t){var r=e.city,n=e.temperature;return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[t+1,"."]}),Object(p.jsx)("td",{children:r}),Object(p.jsxs)("td",{children:[n," C\xb0"]})]},r)}))})}),"openMeteo");var O=function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("p",{children:"\u0412\u044b\u0432\u043e\u0434 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u043c\u0438\u0440\u0430 \u0434\u0432\u0443\u043c\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 Weather API (\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c HOC)."}),Object(p.jsx)(f,{}),Object(p.jsx)(b,{})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.11914602.chunk.js.map