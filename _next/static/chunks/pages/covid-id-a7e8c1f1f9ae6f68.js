(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{9406:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/covid-id",function(){return a(931)}])},931:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return g},default:function(){return y}});var n=a(5893),i=a(9008),r=a(7294),s=a(9009),l=a(1584),o=a(4195),u=a(3023),c=a(5358),h=a(4888),m=a(4141),d=a(8870);function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(e){var t=e.text,a=e.value,i=e.color,r=e.increase;return(0,n.jsxs)("div",{className:"bg-".concat(i,"-400 ring-2 ring-").concat(i,"-500 rounded-lg px-3 py-2 w-40 h-3/6 mx-2 mt-3"),children:[(0,n.jsx)("h3",{className:"text-gray-800 text-lg font-bold",children:t}),(0,n.jsx)("h5",{className:"text-xl text-gray-700 font-semibold inline",children:a}),(0,n.jsxs)("span",{className:"text-gray-600 font-medium",children:[" (",r<0?"":"+",r,")"]})]})}function f(e){var t=e.chartData,a=e.key1,i=e.key2,j=(0,r.useState)({}),f=j[0],g=j[1];return(0,n.jsx)("div",{children:(0,n.jsx)(s.h,{className:"mx-auto mt-12",width:"75%",height:300,children:(0,n.jsxs)(l.w,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[(0,n.jsx)(o.q,{strokeDasharray:"3 3"}),(0,n.jsx)(u.K,{stroke:"gray",dataKey:"time"}),(0,n.jsx)(c.B,{stroke:"gray"}),(0,n.jsx)(h.u,{}),(0,n.jsx)(m.D,{onClick:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){x(e,t,a[t])}))}return e}({},f);t[e.dataKey]=!f[e.dataKey],g(t)}}),(0,n.jsx)(d.x,{hide:f[a],type:"monotone",dataKey:a,stroke:"#8884d8"}),(0,n.jsx)(d.x,{hide:f[i],type:"monotone",dataKey:i,stroke:"#82ca9d"})]})})})}var g=!0;function y(e){var t=e.covidjson,a=t.update.total,r=t.update.penambahan,s=[];return t.update.harian.forEach((function(e){s.push({time:new Date(e.key).toLocaleDateString("id-ID"),Meninggal:e.jumlah_meninggal.value,Sembuh:e.jumlah_sembuh.value,Kasus:e.jumlah_positif.value,Positif:e.jumlah_dirawat.value,"Total Meninggal":e.jumlah_meninggal_kum.value,"Total Sembuh":e.jumlah_sembuh_kum.value,"Total Kasus":e.jumlah_positif_kum.value,"Total Positif":e.jumlah_dirawat_kum.value})})),(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Covid-19 Indonesia Statistics"}),(0,n.jsx)("meta",{name:"description",content:"Hello :)"}),(0,n.jsx)("link",{rel:"icon",href:"/covidid-favicon.png"})]}),(0,n.jsxs)("div",{className:"px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12",children:[(0,n.jsx)("h1",{className:"text-gray-300 font-semibold text-center text-5xl mb-6",children:"Statistik COVID-19 Indonesia"}),(0,n.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,n.jsx)(j,{text:"Kasus",value:a.jumlah_positif,increase:r.jumlah_positif,color:"yellow"}),(0,n.jsx)(j,{text:"Positif",value:a.jumlah_dirawat,increase:r.jumlah_dirawat,color:"red"}),(0,n.jsx)(j,{text:"Sembuh",value:a.jumlah_sembuh,increase:r.jumlah_sembuh,color:"green"}),(0,n.jsx)(j,{text:"Meninggal",value:a.jumlah_meninggal,increase:r.jumlah_meninggal,color:"red"})]}),(0,n.jsx)(f,{chartData:s,key1:"Kasus",key2:"Total Kasus"}),(0,n.jsx)(f,{chartData:s,key1:"Positif",key2:"Total Positif"}),(0,n.jsx)(f,{chartData:s,key1:"Sembuh",key2:"Total Sembuh"}),(0,n.jsx)(f,{chartData:s,key1:"Meninggal",key2:"Total Meninggal"})]})]})}}},function(e){e.O(0,[774,115,888,179],(function(){return t=9406,e(e.s=t);var t}));var t=e.O();_N_E=t}]);