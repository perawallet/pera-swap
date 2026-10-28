import{a as e,c as t,d as n,f as r,g as i,h as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./index-DNuPomQa.js";var h=a(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.QRCodeStyling=r():n.QRCodeStyling=r()})(self,(function(){return(()=>{var e={192:(e,t)=>{var n,r,i=function(){var e=function(e,t){var n=e,r=o[t],i=null,a=0,c=null,g=[],_={},y=function(e,t){i=function(e){for(var t=Array(e),n=0;n<e;n+=1){t[n]=Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(a=4*n+17),b(0,0),b(a-7,0),b(0,a-7),S(),x(),w(e,t),n>=7&&C(e),c??=E(n,r,g),T(c,t)},b=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||a<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||a<=t+r||(i[e+n][t+r]=0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4)},x=function(){for(var e=8;e<a-8;e+=1)i[e][6]??(i[e][6]=e%2==0);for(var t=8;t<a-8;t+=1)i[6][t]??(i[6][t]=t%2==0)},S=function(){for(var e=s.getPatternPosition(n),t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var a=e[t],o=e[r];if(i[a][o]==null)for(var c=-2;c<=2;c+=1)for(var l=-2;l<=2;l+=1)i[a+c][o+l]=c==-2||c==2||l==-2||l==2||c==0&&l==0}},C=function(e){for(var t=s.getBCHTypeNumber(n),r=0;r<18;r+=1){var o=!e&&(t>>r&1)==1;i[Math.floor(r/3)][r%3+a-8-3]=o}for(r=0;r<18;r+=1)o=!e&&(t>>r&1)==1,i[r%3+a-8-3][Math.floor(r/3)]=o},w=function(e,t){for(var n=r<<3|t,o=s.getBCHTypeInfo(n),c=0;c<15;c+=1){var l=!e&&(o>>c&1)==1;c<6?i[c][8]=l:c<8?i[c+1][8]=l:i[a-15+c][8]=l}for(c=0;c<15;c+=1)l=!e&&(o>>c&1)==1,c<8?i[8][a-c-1]=l:c<9?i[8][15-c-1+1]=l:i[8][15-c-1]=l;i[a-8][8]=!e},T=function(e,t){for(var n=-1,r=a-1,o=7,c=0,l=s.getMaskFunction(t),u=a-1;u>0;u-=2)for(u==6&&--u;;){for(var d=0;d<2;d+=1)if(i[r][u-d]==null){var f=!1;c<e.length&&(f=(e[c]>>>o&1)==1),l(r,u-d)&&(f=!f),i[r][u-d]=f,--o==-1&&(c+=1,o=7)}if((r+=n)<0||a<=r){r-=n,n=-n;break}}},E=function(e,t,n){for(var r=u.getRSBlocks(e,t),i=d(),a=0;a<n.length;a+=1){var o=n[a];i.put(o.getMode(),4),i.put(o.getLength(),s.getLengthInBits(o.getMode(),e)),o.write(i)}var c=0;for(a=0;a<r.length;a+=1)c+=r[a].dataCount;if(i.getLengthInBits()>8*c)throw`code length overflow. (`+i.getLengthInBits()+`>`+8*c+`)`;for(i.getLengthInBits()+4<=8*c&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*c||(i.put(236,8),i.getLengthInBits()>=8*c));)i.put(17,8);return function(e,t){for(var n=0,r=0,i=0,a=Array(t.length),o=Array(t.length),c=0;c<t.length;c+=1){var u=t[c].dataCount,d=t[c].totalCount-u;r=Math.max(r,u),i=Math.max(i,d),a[c]=Array(u);for(var f=0;f<a[c].length;f+=1)a[c][f]=255&e.getBuffer()[f+n];n+=u;var p=s.getErrorCorrectPolynomial(d),m=l(a[c],p.getLength()-1).mod(p);for(o[c]=Array(p.getLength()-1),f=0;f<o[c].length;f+=1){var h=f+m.getLength()-o[c].length;o[c][f]=h>=0?m.getAt(h):0}}var g=0;for(f=0;f<t.length;f+=1)g+=t[f].totalCount;var _=Array(g),v=0;for(f=0;f<r;f+=1)for(c=0;c<t.length;c+=1)f<a[c].length&&(_[v]=a[c][f],v+=1);for(f=0;f<i;f+=1)for(c=0;c<t.length;c+=1)f<o[c].length&&(_[v]=o[c][f],v+=1);return _}(i,r)};_.addData=function(e,t){var n=null;switch(t||=`Byte`){case`Numeric`:n=f(e);break;case`Alphanumeric`:n=p(e);break;case`Byte`:n=m(e);break;case`Kanji`:n=h(e);break;default:throw`mode:`+t}g.push(n),c=null},_.isDark=function(e,t){if(e<0||a<=e||t<0||a<=t)throw e+`,`+t;return i[e][t]},_.getModuleCount=function(){return a},_.make=function(){if(n<1){for(var e=1;e<40;e++){for(var t=u.getRSBlocks(e,r),i=d(),a=0;a<g.length;a++){var o=g[a];i.put(o.getMode(),4),i.put(o.getLength(),s.getLengthInBits(o.getMode(),e)),o.write(i)}var c=0;for(a=0;a<t.length;a++)c+=t[a].dataCount;if(i.getLengthInBits()<=8*c)break}n=e}y(!1,function(){for(var e=0,t=0,n=0;n<8;n+=1){y(!0,n);var r=s.getLostPoint(_);(n==0||e>r)&&(e=r,t=n)}return t}())},_.createTableTag=function(e,t){e||=2;var n=``;n+=`<table style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: `+(t=t===void 0?4*e:t)+`px;`,n+=`">`,n+=`<tbody>`;for(var r=0;r<_.getModuleCount();r+=1){n+=`<tr>`;for(var i=0;i<_.getModuleCount();i+=1)n+=`<td style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: 0px;`,n+=` width: `+e+`px;`,n+=` height: `+e+`px;`,n+=` background-color: `,n+=_.isDark(r,i)?`#000000`:`#ffffff`,n+=`;`,n+=`"/>`;n+=`</tr>`}return(n+=`</tbody>`)+`</table>`},_.createSvgTag=function(e,t,n,r){var i={};typeof arguments[0]==`object`&&(e=(i=arguments[0]).cellSize,t=i.margin,n=i.alt,r=i.title),e||=2,t=t===void 0?4*e:t,(n=typeof n==`string`?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||`qrcode-description`:null,(r=typeof r==`string`?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||`qrcode-title`:null;var a,o,s,c,l=_.getModuleCount()*e+2*t,u=``;for(c=`l`+e+`,0 0,`+e+` -`+e+`,0 0,-`+e+`z `,u+=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg"`,u+=i.scalable?``:` width="`+l+`px" height="`+l+`px"`,u+=` viewBox="0 0 `+l+` `+l+`" `,u+=` preserveAspectRatio="xMinYMin meet"`,u+=r.text||n.text?` role="img" aria-labelledby="`+D([r.id,n.id].join(` `).trim())+`"`:``,u+=`>`,u+=r.text?`<title id="`+D(r.id)+`">`+D(r.text)+`</title>`:``,u+=n.text?`<description id="`+D(n.id)+`">`+D(n.text)+`</description>`:``,u+=`<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>`,u+=`<path d="`,o=0;o<_.getModuleCount();o+=1)for(s=o*e+t,a=0;a<_.getModuleCount();a+=1)_.isDark(o,a)&&(u+=`M`+(a*e+t)+`,`+s+c);return(u+=`" stroke="transparent" fill="black"/>`)+`</svg>`},_.createDataURL=function(e,t){e||=2,t=t===void 0?4*e:t;var n=_.getModuleCount()*e+2*t,r=t,i=n-t;return v(n,n,(function(t,n){if(r<=t&&t<i&&r<=n&&n<i){var a=Math.floor((t-r)/e),o=Math.floor((n-r)/e);return+!_.isDark(o,a)}return 1}))},_.createImgTag=function(e,t,n){e||=2,t=t===void 0?4*e:t;var r=_.getModuleCount()*e+2*t,i=``;return i+=`<img`,i+=` src="`,i+=_.createDataURL(e,t),i+=`"`,i+=` width="`,i+=r,i+=`"`,i+=` height="`,i+=r,i+=`"`,n&&(i+=` alt="`,i+=D(n),i+=`"`),i+`/>`};var D=function(e){for(var t=``,n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case`<`:t+=`&lt;`;break;case`>`:t+=`&gt;`;break;case`&`:t+=`&amp;`;break;case`"`:t+=`&quot;`;break;default:t+=r}}return t};return _.createASCII=function(e,t){if((e||=1)<2)return function(e){e=e===void 0?2:e;var t,n,r,i,a,o=1*_.getModuleCount()+2*e,s=e,c=o-e,l={"██":`█`,"█ ":`▀`," █":`▄`,"  ":` `},u={"██":`▀`,"█ ":`▀`," █":` `,"  ":` `},d=``;for(t=0;t<o;t+=2){for(r=Math.floor((t-s)/1),i=Math.floor((t+1-s)/1),n=0;n<o;n+=1)a=`█`,s<=n&&n<c&&s<=t&&t<c&&_.isDark(r,Math.floor((n-s)/1))&&(a=` `),s<=n&&n<c&&s<=t+1&&t+1<c&&_.isDark(i,Math.floor((n-s)/1))?a+=` `:a+=`█`,d+=e<1&&t+1>=c?u[a]:l[a];d+=`
`}return o%2&&e>0?d.substring(0,d.length-o-1)+Array(o+1).join(`▀`):d.substring(0,d.length-1)}(t);--e,t=t===void 0?2*e:t;var n,r,i,a,o=_.getModuleCount()*e+2*t,s=t,c=o-t,l=Array(e+1).join(`██`),u=Array(e+1).join(`  `),d=``,f=``;for(n=0;n<o;n+=1){for(i=Math.floor((n-s)/e),f=``,r=0;r<o;r+=1)a=1,s<=r&&r<c&&s<=n&&n<c&&_.isDark(i,Math.floor((r-s)/e))&&(a=0),f+=a?l:u;for(i=0;i<e;i+=1)d+=f+`
`}return d.substring(0,d.length-1)},_.renderTo2dContext=function(e,t){t||=2;for(var n=_.getModuleCount(),r=0;r<n;r++)for(var i=0;i<n;i++)e.fillStyle=_.isDark(r,i)?`black`:`white`,e.fillRect(r*t,i*t,t,t)},_};e.stringToBytes=(e.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}}).default,e.createStringToBytes=function(e,t){var n=function(){for(var n=_(e),r=function(){var e=n.read();if(e==-1)throw`eof`;return e},i=0,a={};;){var o=n.read();if(o==-1)break;var s=r(),c=r()<<8|r();a[String.fromCharCode(o<<8|s)]=c,i+=1}if(i!=t)throw i+` != `+t;return a}(),r=63;return function(e){for(var t=[],i=0;i<e.length;i+=1){var a=e.charCodeAt(i);if(a<128)t.push(a);else{var o=n[e.charAt(i)];typeof o==`number`?(255&o)==o?t.push(o):(t.push(o>>>8),t.push(255&o)):t.push(r)}}return t}};var t,n,r,i,a,o={L:1,M:0,Q:3,H:2},s=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,r=7973,a=function(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t},(i={}).getBCHTypeInfo=function(e){for(var t=e<<10;a(t)-a(n)>=0;)t^=n<<a(t)-a(n);return 21522^(e<<10|t)},i.getBCHTypeNumber=function(e){for(var t=e<<12;a(t)-a(r)>=0;)t^=r<<a(t)-a(r);return e<<12|t},i.getPatternPosition=function(e){return t[e-1]},i.getMaskFunction=function(e){switch(e){case 0:return function(e,t){return(e+t)%2==0};case 1:return function(e,t){return e%2==0};case 2:return function(e,t){return t%3==0};case 3:return function(e,t){return(e+t)%3==0};case 4:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case 5:return function(e,t){return e*t%2+e*t%3==0};case 6:return function(e,t){return(e*t%2+e*t%3)%2==0};case 7:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw`bad maskPattern:`+e}},i.getErrorCorrectPolynomial=function(e){for(var t=l([1],0),n=0;n<e;n+=1)t=t.multiply(l([1,c.gexp(n)],0));return t},i.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw`mode:`+e}else if(t<27)switch(e){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw`mode:`+e}else{if(!(t<41))throw`type:`+t;switch(e){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw`mode:`+e}}},i.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.isDark(r,i),s=-1;s<=1;s+=1)if(!(r+s<0||t<=r+s))for(var c=-1;c<=1;c+=1)i+c<0||t<=i+c||s==0&&c==0||o==e.isDark(r+s,i+c)&&(a+=1);a>5&&(n+=3+a-5)}for(r=0;r<t-1;r+=1)for(i=0;i<t-1;i+=1){var l=0;e.isDark(r,i)&&(l+=1),e.isDark(r+1,i)&&(l+=1),e.isDark(r,i+1)&&(l+=1),e.isDark(r+1,i+1)&&(l+=1),l!=0&&l!=4||(n+=3)}for(r=0;r<t;r+=1)for(i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i+=1)for(r=0;r<t-6;r+=1)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i+=1)for(r=0;r<t;r+=1)e.isDark(r,i)&&(u+=1);return n+Math.abs(100*u/t/t-50)/5*10},i),c=function(){for(var e=Array(256),t=Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;n<255;n+=1)t[e[n]]=n;return{glog:function(e){if(e<1)throw`glog(`+e+`)`;return t[e]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]}}}();function l(e,t){if(e.length===void 0)throw e.length+`/`+t;var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),r={getAt:function(e){return n[e]},getLength:function(){return n.length},multiply:function(e){for(var t=Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var i=0;i<e.getLength();i+=1)t[n+i]^=c.gexp(c.glog(r.getAt(n))+c.glog(e.getAt(i)));return l(t,0)},mod:function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=c.glog(r.getAt(0))-c.glog(e.getAt(0)),n=Array(r.getLength()),i=0;i<r.getLength();i+=1)n[i]=r.getAt(i);for(i=0;i<e.getLength();i+=1)n[i]^=c.gexp(c.glog(e.getAt(i))+t);return l(n,0).mod(e)}};return r}var u=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n};return{getRSBlocks:function(n,r){var i=function(t,n){switch(n){case o.L:return e[4*(t-1)+0];case o.M:return e[4*(t-1)+1];case o.Q:return e[4*(t-1)+2];case o.H:return e[4*(t-1)+3];default:return}}(n,r);if(i===void 0)throw`bad rs block @ typeNumber:`+n+`/errorCorrectionLevel:`+r;for(var a=i.length/3,s=[],c=0;c<a;c+=1)for(var l=i[3*c+0],u=i[3*c+1],d=i[3*c+2],f=0;f<l;f+=1)s.push(t(u,d));return s}}}(),d=function(){var e=[],t=0,n={getBuffer:function(){return e},getAt:function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(e,t){for(var r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return t},putBit:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n},f=function(e){var t=e,n={getMode:function(){return 1},getLength:function(e){return t.length},write:function(e){for(var n=t,i=0;i+2<n.length;)e.put(r(n.substring(i,i+3)),10),i+=3;i<n.length&&(n.length-i==1?e.put(r(n.substring(i,i+1)),4):n.length-i==2&&e.put(r(n.substring(i,i+2)),7))}},r=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+i(e.charAt(n));return t},i=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;throw`illegal char :`+e};return n},p=function(e){var t=e,n={getMode:function(){return 2},getLength:function(e){return t.length},write:function(e){for(var n=t,i=0;i+1<n.length;)e.put(45*r(n.charAt(i))+r(n.charAt(i+1)),11),i+=2;i<n.length&&e.put(r(n.charAt(i)),6)}},r=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;if(`A`<=e&&e<=`Z`)return e.charCodeAt(0)-65+10;switch(e){case` `:return 36;case`$`:return 37;case`%`:return 38;case`*`:return 39;case`+`:return 40;case`-`:return 41;case`.`:return 42;case`/`:return 43;case`:`:return 44;default:throw`illegal char :`+e}};return n},m=function(t){var n=e.stringToBytes(t);return{getMode:function(){return 4},getLength:function(e){return n.length},write:function(e){for(var t=0;t<n.length;t+=1)e.put(n[t],8)}}},h=function(t){var n=e.stringToBytesFuncs.SJIS;if(!n)throw`sjis not supported.`;(function(e,t){var r=n(`友`);if(r.length!=2||(r[0]<<8|r[1])!=38726)throw`sjis not supported.`})();var r=n(t);return{getMode:function(){return 8},getLength:function(e){return~~(r.length/2)},write:function(e){for(var t=r,n=0;n+1<t.length;){var i=(255&t[n])<<8|255&t[n+1];if(33088<=i&&i<=40956)i-=33088;else{if(!(57408<=i&&i<=60351))throw`illegal char at `+(n+1)+`/`+i;i-=49472}i=192*(i>>>8&255)+(255&i),e.put(i,13),n+=2}if(n<t.length)throw`illegal char at `+(n+1)}}},g=function(){var e=[],t={writeByte:function(t){e.push(255&t)},writeShort:function(e){t.writeByte(e),t.writeByte(e>>>8)},writeBytes:function(e,n,r){n||=0,r||=e.length;for(var i=0;i<r;i+=1)t.writeByte(e[i+n])},writeString:function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},toByteArray:function(){return e},toString:function(){var t=``;t+=`[`;for(var n=0;n<e.length;n+=1)n>0&&(t+=`,`),t+=e[n];return t+`]`}};return t},_=function(e){var t=e,n=0,r=0,i=0,a={read:function(){for(;i<8;){if(n>=t.length){if(i==0)return-1;throw`unexpected end of file./`+i}var e=t.charAt(n);if(n+=1,e==`=`)return i=0,-1;e.match(/^\s$/)||(r=r<<6|o(e.charCodeAt(0)),i+=6)}var a=r>>>i-8&255;return i-=8,a}},o=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw`c:`+e};return a},v=function(e,t,n){for(var r=function(e,t){var n=e,r=t,i=Array(e*t),a={setPixel:function(e,t,r){i[t*n+e]=r},write:function(e){e.writeString(`GIF87a`),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(`,`),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);var t=o(2);e.writeByte(2);for(var i=0;t.length-i>255;)e.writeByte(255),e.writeBytes(t,i,255),i+=255;e.writeByte(t.length-i),e.writeBytes(t,i,t.length-i),e.writeByte(0),e.writeString(`;`)}},o=function(e){for(var t=1<<e,n=1+(1<<e),r=e+1,a=s(),o=0;o<t;o+=1)a.add(String.fromCharCode(o));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(n));var c,l,u,d=g(),f=(c=d,l=0,u=0,{write:function(e,t){if(e>>>t)throw`length over`;for(;l+t>=8;)c.writeByte(255&(e<<l|u)),t-=8-l,e>>>=8-l,u=0,l=0;u|=e<<l,l+=t},flush:function(){l>0&&c.writeByte(u)}});f.write(t,r);var p=0,m=String.fromCharCode(i[p]);for(p+=1;p<i.length;){var h=String.fromCharCode(i[p]);p+=1,a.contains(m+h)?m+=h:(f.write(a.indexOf(m),r),a.size()<4095&&(a.size()==1<<r&&(r+=1),a.add(m+h)),m=h)}return f.write(a.indexOf(m),r),f.write(n,r),f.flush(),d.toByteArray()},s=function(){var e={},t=0,n={add:function(r){if(n.contains(r))throw`dup key:`+r;e[r]=t,t+=1},size:function(){return t},indexOf:function(t){return e[t]},contains:function(t){return e[t]!==void 0}};return n};return a}(e,t),i=0;i<t;i+=1)for(var a=0;a<e;a+=1)r.setPixel(a,i,n(a,i));var o=g();r.write(o);for(var s=function(){var e=0,t=0,n=0,r=``,i={},a=function(e){r+=String.fromCharCode(o(63&e))},o=function(e){if(!(e<0)){if(e<26)return 65+e;if(e<52)return e-26+97;if(e<62)return e-52+48;if(e==62)return 43;if(e==63)return 47}throw`n:`+e};return i.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)a(e>>>t-6),t-=6},i.flush=function(){if(t>0&&(a(e<<6-t),e=0,t=0),n%3!=0)for(var i=3-n%3,o=0;o<i;o+=1)r+=`=`},i.toString=function(){return r},i}(),c=o.toByteArray(),l=0;l<c.length;l+=1)s.writeByte(c[l]);return s.flush(),`data:image/gif;base64,`+s};return e}();i.stringToBytesFuncs[`UTF-8`]=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}(e)},(r=typeof(n=function(){return i})==`function`?n.apply(t,[]):n)===void 0||(e.exports=r)},676:(e,t,n)=>{n.d(t,{default:()=>N});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r},a=function(e){return!!e&&typeof e==`object`&&!Array.isArray(e)};function o(e){var t=[...arguments].slice(1);if(!t.length)return e;var n=t.shift();return n!==void 0&&a(e)&&a(n)?(e=r({},e),Object.keys(n).forEach((function(t){var r=e[t],i=n[t];Array.isArray(r)&&Array.isArray(i)?e[t]=i:a(r)&&a(i)?e[t]=o(Object.assign({},r),i):e[t]=i})),o.apply(void 0,i([e],t))):e}function s(e,t){var n=document.createElement(`a`);n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function c(e){return t=this,n=void 0,i=function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(t){return[2,new Promise((function(t){var n=new XMLHttpRequest;n.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n.response)},n.open(`GET`,e),n.responseType=`blob`,n.send()}))]}))},new((r=void 0)||(r=Promise))((function(e,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,s)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}let l={L:.07,M:.15,Q:.25,H:.3};var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};let d=function(){function e(e){var t=e.svg,n=e.type;this._svg=t,this._type=n}return e.prototype.draw=function(e,t,n,r){var i;switch(this._type){case`dots`:i=this._drawDot;break;case`classy`:i=this._drawClassy;break;case`classy-rounded`:i=this._drawClassyRounded;break;case`rounded`:i=this._drawRounded;break;case`extra-rounded`:i=this._drawExtraRounded;break;default:i=this._drawSquare}i.call(this,{x:e,y:t,size:n,getNeighbor:r})},e.prototype._rotateFigure=function(e){var t,n=e.x,r=e.y,i=e.size,a=e.rotation,o=a===void 0?0:a,s=n+i/2,c=r+i/2;(0,e.draw)(),(t=this._element)==null||t.setAttribute(`transform`,`rotate(`+180*o/Math.PI+`,`+s+`,`+c+`)`)},e.prototype._basicDot=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`),t._element.setAttribute(`cx`,String(r+n/2)),t._element.setAttribute(`cy`,String(i+n/2)),t._element.setAttribute(`r`,String(n/2))}}))},e.prototype._basicSquare=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`rect`),t._element.setAttribute(`x`,String(r)),t._element.setAttribute(`y`,String(i)),t._element.setAttribute(`width`,String(n)),t._element.setAttribute(`height`,String(n))}}))},e.prototype._basicSideRounded=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`d`,`M `+r+` `+i+`v `+n+`h `+n/2+`a `+n/2+` `+n/2+`, 0, 0, 0, 0 `+-n)}}))},e.prototype._basicCornerRounded=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`d`,`M `+r+` `+i+`v `+n+`h `+n+`v `+-n/2+`a `+n/2+` `+n/2+`, 0, 0, 0, `+-n/2+` `+-n/2)}}))},e.prototype._basicCornerExtraRounded=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`d`,`M `+r+` `+i+`v `+n+`h `+n+`a `+n+` `+n+`, 0, 0, 0, `+-n+` `+-n)}}))},e.prototype._basicCornersRounded=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(u(u({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`d`,`M `+r+` `+i+`v `+n/2+`a `+n/2+` `+n/2+`, 0, 0, 0, `+n/2+` `+n/2+`h `+n/2+`v `+-n/2+`a `+n/2+` `+n/2+`, 0, 0, 0, `+-n/2+` `+-n/2)}}))},e.prototype._drawDot=function(e){var t=e.x,n=e.y,r=e.size;this._basicDot({x:t,y:n,size:r,rotation:0})},e.prototype._drawSquare=function(e){var t=e.x,n=e.y,r=e.size;this._basicSquare({x:t,y:n,size:r,rotation:0})},e.prototype._drawRounded=function(e){var t=e.x,n=e.y,r=e.size,i=e.getNeighbor,a=i?+i(-1,0):0,o=i?+i(1,0):0,s=i?+i(0,-1):0,c=i?+i(0,1):0,l=a+o+s+c;if(l!==0){if(l>2||a&&o||s&&c)this._basicSquare({x:t,y:n,size:r,rotation:0});else{if(l===2){var u=0;a&&s?u=Math.PI/2:s&&o?u=Math.PI:o&&c&&(u=-Math.PI/2),this._basicCornerRounded({x:t,y:n,size:r,rotation:u});return}if(l===1)return u=0,s?u=Math.PI/2:o?u=Math.PI:c&&(u=-Math.PI/2),void this._basicSideRounded({x:t,y:n,size:r,rotation:u})}}else this._basicDot({x:t,y:n,size:r,rotation:0})},e.prototype._drawExtraRounded=function(e){var t=e.x,n=e.y,r=e.size,i=e.getNeighbor,a=i?+i(-1,0):0,o=i?+i(1,0):0,s=i?+i(0,-1):0,c=i?+i(0,1):0,l=a+o+s+c;if(l!==0){if(l>2||a&&o||s&&c)this._basicSquare({x:t,y:n,size:r,rotation:0});else{if(l===2){var u=0;a&&s?u=Math.PI/2:s&&o?u=Math.PI:o&&c&&(u=-Math.PI/2),this._basicCornerExtraRounded({x:t,y:n,size:r,rotation:u});return}if(l===1)return u=0,s?u=Math.PI/2:o?u=Math.PI:c&&(u=-Math.PI/2),void this._basicSideRounded({x:t,y:n,size:r,rotation:u})}}else this._basicDot({x:t,y:n,size:r,rotation:0})},e.prototype._drawClassy=function(e){var t=e.x,n=e.y,r=e.size,i=e.getNeighbor,a=i?+i(-1,0):0,o=i?+i(1,0):0,s=i?+i(0,-1):0,c=i?+i(0,1):0;a+o+s+c===0?this._basicCornersRounded({x:t,y:n,size:r,rotation:Math.PI/2}):a||s?o||c?this._basicSquare({x:t,y:n,size:r,rotation:0}):this._basicCornerRounded({x:t,y:n,size:r,rotation:Math.PI/2}):this._basicCornerRounded({x:t,y:n,size:r,rotation:-Math.PI/2})},e.prototype._drawClassyRounded=function(e){var t=e.x,n=e.y,r=e.size,i=e.getNeighbor,a=i?+i(-1,0):0,o=i?+i(1,0):0,s=i?+i(0,-1):0,c=i?+i(0,1):0;a+o+s+c===0?this._basicCornersRounded({x:t,y:n,size:r,rotation:Math.PI/2}):a||s?o||c?this._basicSquare({x:t,y:n,size:r,rotation:0}):this._basicCornerExtraRounded({x:t,y:n,size:r,rotation:Math.PI/2}):this._basicCornerExtraRounded({x:t,y:n,size:r,rotation:-Math.PI/2})},e}();var f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};let p=function(){function e(e){var t=e.svg,n=e.type;this._svg=t,this._type=n}return e.prototype.draw=function(e,t,n,r){var i;switch(this._type){case`square`:i=this._drawSquare;break;case`extra-rounded`:i=this._drawExtraRounded;break;default:i=this._drawDot}i.call(this,{x:e,y:t,size:n,rotation:r})},e.prototype._rotateFigure=function(e){var t,n=e.x,r=e.y,i=e.size,a=e.rotation,o=a===void 0?0:a,s=n+i/2,c=r+i/2;(0,e.draw)(),(t=this._element)==null||t.setAttribute(`transform`,`rotate(`+180*o/Math.PI+`,`+s+`,`+c+`)`)},e.prototype._basicDot=function(e){var t=this,n=e.size,r=e.x,i=e.y,a=n/7;this._rotateFigure(f(f({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`clip-rule`,`evenodd`),t._element.setAttribute(`d`,`M `+(r+n/2)+` `+i+`a `+n/2+` `+n/2+` 0 1 0 0.1 0zm 0 `+a+`a `+(n/2-a)+` `+(n/2-a)+` 0 1 1 -0.1 0Z`)}}))},e.prototype._basicSquare=function(e){var t=this,n=e.size,r=e.x,i=e.y,a=n/7;this._rotateFigure(f(f({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`clip-rule`,`evenodd`),t._element.setAttribute(`d`,`M `+r+` `+i+`v `+n+`h `+n+`v `+-n+`zM `+(r+a)+` `+(i+a)+`h `+(n-2*a)+`v `+(n-2*a)+`h `+(2*a-n)+`z`)}}))},e.prototype._basicExtraRounded=function(e){var t=this,n=e.size,r=e.x,i=e.y,a=n/7;this._rotateFigure(f(f({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),t._element.setAttribute(`clip-rule`,`evenodd`),t._element.setAttribute(`d`,`M `+r+` `+(i+2.5*a)+`v `+2*a+`a `+2.5*a+` `+2.5*a+`, 0, 0, 0, `+2.5*a+` `+2.5*a+`h `+2*a+`a `+2.5*a+` `+2.5*a+`, 0, 0, 0, `+2.5*a+` `+2.5*-a+`v `+-2*a+`a `+2.5*a+` `+2.5*a+`, 0, 0, 0, `+2.5*-a+` `+2.5*-a+`h `+-2*a+`a `+2.5*a+` `+2.5*a+`, 0, 0, 0, `+2.5*-a+` `+2.5*a+`M `+(r+2.5*a)+` `+(i+a)+`h `+2*a+`a `+1.5*a+` `+1.5*a+`, 0, 0, 1, `+1.5*a+` `+1.5*a+`v `+2*a+`a `+1.5*a+` `+1.5*a+`, 0, 0, 1, `+1.5*-a+` `+1.5*a+`h `+-2*a+`a `+1.5*a+` `+1.5*a+`, 0, 0, 1, `+1.5*-a+` `+1.5*-a+`v `+-2*a+`a `+1.5*a+` `+1.5*a+`, 0, 0, 1, `+1.5*a+` `+1.5*-a)}}))},e.prototype._drawDot=function(e){var t=e.x,n=e.y,r=e.size,i=e.rotation;this._basicDot({x:t,y:n,size:r,rotation:i})},e.prototype._drawSquare=function(e){var t=e.x,n=e.y,r=e.size,i=e.rotation;this._basicSquare({x:t,y:n,size:r,rotation:i})},e.prototype._drawExtraRounded=function(e){var t=e.x,n=e.y,r=e.size,i=e.rotation;this._basicExtraRounded({x:t,y:n,size:r,rotation:i})},e}();var m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};let h=function(){function e(e){var t=e.svg,n=e.type;this._svg=t,this._type=n}return e.prototype.draw=function(e,t,n,r){var i;switch(this._type){case`square`:i=this._drawSquare;break;default:i=this._drawDot}i.call(this,{x:e,y:t,size:n,rotation:r})},e.prototype._rotateFigure=function(e){var t,n=e.x,r=e.y,i=e.size,a=e.rotation,o=a===void 0?0:a,s=n+i/2,c=r+i/2;(0,e.draw)(),(t=this._element)==null||t.setAttribute(`transform`,`rotate(`+180*o/Math.PI+`,`+s+`,`+c+`)`)},e.prototype._basicDot=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(m(m({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`),t._element.setAttribute(`cx`,String(r+n/2)),t._element.setAttribute(`cy`,String(i+n/2)),t._element.setAttribute(`r`,String(n/2))}}))},e.prototype._basicSquare=function(e){var t=this,n=e.size,r=e.x,i=e.y;this._rotateFigure(m(m({},e),{draw:function(){t._element=document.createElementNS(`http://www.w3.org/2000/svg`,`rect`),t._element.setAttribute(`x`,String(r)),t._element.setAttribute(`y`,String(i)),t._element.setAttribute(`width`,String(n)),t._element.setAttribute(`height`,String(n))}}))},e.prototype._drawDot=function(e){var t=e.x,n=e.y,r=e.size,i=e.rotation;this._basicDot({x:t,y:n,size:r,rotation:i})},e.prototype._drawSquare=function(e){var t=e.x,n=e.y,r=e.size,i=e.rotation;this._basicSquare({x:t,y:n,size:r,rotation:i})},e}(),g=`circle`;var _=function(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},y=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],b=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];let x=function(){function e(e){this._element=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),this._element.setAttribute(`width`,String(e.width)),this._element.setAttribute(`height`,String(e.height)),this._defs=document.createElementNS(`http://www.w3.org/2000/svg`,`defs`),this._element.appendChild(this._defs),this._options=e}return Object.defineProperty(e.prototype,"width",{get:function(){return this._options.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._options.height},enumerable:!1,configurable:!0}),e.prototype.getElement=function(){return this._element},e.prototype.drawQR=function(e){return _(this,void 0,void 0,(function(){var t,n,r,i,a,o,s,c,u,d,f=this;return v(this,(function(p){switch(p.label){case 0:return t=e.getModuleCount(),n=Math.min(this._options.width,this._options.height)-2*this._options.margin,r=this._options.shape===g?n/Math.sqrt(2):n,i=Math.floor(r/t),a={hideXDots:0,hideYDots:0,width:0,height:0},this._qr=e,this._options.image?[4,this.loadImage()]:[3,2];case 1:if(p.sent(),!this._image)return[2];o=this._options,s=o.imageOptions,c=o.qrOptions,u=s.imageSize*l[c.errorCorrectionLevel],d=Math.floor(u*t*t),a=function(e){var t=e.originalHeight,n=e.originalWidth,r=e.maxHiddenDots,i=e.maxHiddenAxisDots,a=e.dotSize,o={x:0,y:0},s={x:0,y:0};if(t<=0||n<=0||r<=0||a<=0)return{height:0,width:0,hideYDots:0,hideXDots:0};var c=t/n;return o.x=Math.floor(Math.sqrt(r/c)),o.x<=0&&(o.x=1),i&&i<o.x&&(o.x=i),o.x%2==0&&o.x--,s.x=o.x*a,o.y=1+2*Math.ceil((o.x*c-1)/2),s.y=Math.round(s.x*c),(o.y*o.x>r||i&&i<o.y)&&(i&&i<o.y?(o.y=i,o.y%2==0&&o.x--):o.y-=2,s.y=o.y*a,o.x=1+2*Math.ceil((o.y/c-1)/2),s.x=Math.round(s.y/c)),{height:s.y,width:s.x,hideYDots:o.y,hideXDots:o.x}}({originalWidth:this._image.width,originalHeight:this._image.height,maxHiddenDots:d,maxHiddenAxisDots:t-14,dotSize:i}),p.label=2;case 2:return this.drawBackground(),this.drawDots((function(e,n){return!(f._options.imageOptions.hideBackgroundDots&&e>=(t-a.hideXDots)/2&&e<(t+a.hideXDots)/2&&n>=(t-a.hideYDots)/2&&n<(t+a.hideYDots)/2||y[e]?.[n]||y[e-t+7]?.[n]||y[e]?.[n-t+7]||b[e]?.[n]||b[e-t+7]?.[n]||b[e]?.[n-t+7])})),this.drawCorners(),this._options.image?[4,this.drawImage({width:a.width,height:a.height,count:t,dotSize:i})]:[3,4];case 3:p.sent(),p.label=4;case 4:return[2]}}))}))},e.prototype.drawBackground=function(){var e=this._element,t=this._options;if(e){var n=t.backgroundOptions?.gradient,r=t.backgroundOptions?.color;if((n||r)&&this._createColor({options:n,color:r,additionalRotation:0,x:0,y:0,height:t.height,width:t.width,name:`background-color`}),t.backgroundOptions?.round){var i=Math.min(t.width,t.height),a=document.createElementNS(`http://www.w3.org/2000/svg`,`rect`);this._backgroundClipPath=document.createElementNS(`http://www.w3.org/2000/svg`,`clipPath`),this._backgroundClipPath.setAttribute(`id`,`clip-path-background-color`),this._defs.appendChild(this._backgroundClipPath),a.setAttribute(`x`,String((t.width-i)/2)),a.setAttribute(`y`,String((t.height-i)/2)),a.setAttribute(`width`,String(i)),a.setAttribute(`height`,String(i)),a.setAttribute(`rx`,String(i/2*t.backgroundOptions.round)),this._backgroundClipPath.appendChild(a)}}},e.prototype.drawDots=function(e){var t=this;if(!this._qr)throw`QR code is not defined`;var n=this._options,r=this._qr.getModuleCount();if(r>n.width||r>n.height)throw`The canvas is too small.`;var i=Math.min(n.width,n.height)-2*n.margin,a=n.shape===g?i/Math.sqrt(2):i,o=Math.floor(a/r),s=Math.floor((n.width-r*o)/2),c=Math.floor((n.height-r*o)/2),l=new d({svg:this._element,type:n.dotsOptions.type});this._dotsClipPath=document.createElementNS(`http://www.w3.org/2000/svg`,`clipPath`),this._dotsClipPath.setAttribute(`id`,`clip-path-dot-color`),this._defs.appendChild(this._dotsClipPath),this._createColor({options:n.dotsOptions?.gradient,color:n.dotsOptions.color,additionalRotation:0,x:0,y:0,height:n.height,width:n.width,name:`dot-color`});for(var u=function(n){for(var i=function(i){return e&&!e(n,i)?`continue`:f._qr?.isDark(n,i)?(l.draw(s+n*o,c+i*o,o,(function(a,o){return!(n+a<0||i+o<0||n+a>=r||i+o>=r)&&!(e&&!e(n+a,i+o))&&!!t._qr&&t._qr.isDark(n+a,i+o)})),void(l._element&&f._dotsClipPath&&f._dotsClipPath.appendChild(l._element))):`continue`},a=0;a<r;a++)i(a)},f=this,p=0;p<r;p++)u(p);if(n.shape===g){var m=Math.floor((i/o-r)/2),h=r+2*m,_=s-m*o,v=c-m*o,y=[],b=Math.floor(h/2);for(p=0;p<h;p++){y[p]=[];for(var x=0;x<h;x++)p>=m-1&&p<=h-m&&x>=m-1&&x<=h-m||Math.sqrt((p-b)*(p-b)+(x-b)*(x-b))>b?y[p][x]=0:y[p][x]=+!!this._qr.isDark(x-2*m<0?x:x>=r?x-2*m:x-m,p-2*m<0?p:p>=r?p-2*m:p-m)}var S=function(e){for(var t=function(t){if(!y[e][t])return`continue`;l.draw(_+e*o,v+t*o,o,(function(n,r){return!!y[e+n]?.[t+r]})),l._element&&C._dotsClipPath&&C._dotsClipPath.appendChild(l._element)},n=0;n<h;n++)t(n)},C=this;for(p=0;p<h;p++)S(p)}},e.prototype.drawCorners=function(){var e=this;if(!this._qr)throw`QR code is not defined`;var t=this._element,n=this._options;if(!t)throw`Element code is not defined`;var r=this._qr.getModuleCount(),i=Math.min(n.width,n.height)-2*n.margin,a=n.shape===g?i/Math.sqrt(2):i,o=Math.floor(a/r),s=7*o,c=3*o,l=Math.floor((n.width-r*o)/2),u=Math.floor((n.height-r*o)/2);[[0,0,0],[1,0,Math.PI/2],[0,1,-Math.PI/2]].forEach((function(t){var i,a,f,m,g=t[0],_=t[1],v=t[2],x=l+g*o*(r-7),S=u+_*o*(r-7),C=e._dotsClipPath,w=e._dotsClipPath;if(((i=n.cornersSquareOptions)!=null&&i.gradient||(a=n.cornersSquareOptions)!=null&&a.color)&&((C=document.createElementNS(`http://www.w3.org/2000/svg`,`clipPath`)).setAttribute(`id`,`clip-path-corners-square-color-`+g+`-`+_),e._defs.appendChild(C),e._cornersSquareClipPath=e._cornersDotClipPath=w=C,e._createColor({options:n.cornersSquareOptions?.gradient,color:n.cornersSquareOptions?.color,additionalRotation:v,x,y:S,height:s,width:s,name:`corners-square-color-`+g+`-`+_})),n.cornersSquareOptions?.type){var T=new p({svg:e._element,type:n.cornersSquareOptions.type});T.draw(x,S,s,v),T._element&&C&&C.appendChild(T._element)}else for(var E=new d({svg:e._element,type:n.dotsOptions.type}),D=function(e){for(var t=function(t){if(!y[e]?.[t])return`continue`;E.draw(x+e*o,S+t*o,o,(function(n,r){return!!y[e+n]?.[t+r]})),E._element&&C&&C.appendChild(E._element)},n=0;n<y[e].length;n++)t(n)},O=0;O<y.length;O++)D(O);if(((f=n.cornersDotOptions)!=null&&f.gradient||(m=n.cornersDotOptions)!=null&&m.color)&&((w=document.createElementNS(`http://www.w3.org/2000/svg`,`clipPath`)).setAttribute(`id`,`clip-path-corners-dot-color-`+g+`-`+_),e._defs.appendChild(w),e._cornersDotClipPath=w,e._createColor({options:n.cornersDotOptions?.gradient,color:n.cornersDotOptions?.color,additionalRotation:v,x:x+2*o,y:S+2*o,height:c,width:c,name:`corners-dot-color-`+g+`-`+_})),n.cornersDotOptions?.type){var k=new h({svg:e._element,type:n.cornersDotOptions.type});k.draw(x+2*o,S+2*o,c,v),k._element&&w&&w.appendChild(k._element)}else{E=new d({svg:e._element,type:n.dotsOptions.type});var A=function(e){for(var t=function(t){if(!b[e]?.[t])return`continue`;E.draw(x+e*o,S+t*o,o,(function(n,r){return!!b[e+n]?.[t+r]})),E._element&&w&&w.appendChild(E._element)},n=0;n<b[e].length;n++)t(n)};for(O=0;O<b.length;O++)A(O)}}))},e.prototype.loadImage=function(){var e=this;return new Promise((function(t,n){var r=e._options,i=new Image;if(!r.image)return n(`Image is not defined`);typeof r.imageOptions.crossOrigin==`string`&&(i.crossOrigin=r.imageOptions.crossOrigin),e._image=i,i.onload=function(){t()},i.src=r.image}))},e.prototype.drawImage=function(e){var t=e.width,n=e.height,r=e.count,i=e.dotSize;return _(this,void 0,void 0,(function(){var e,a,o,s,l,u,d,f,p;return v(this,(function(m){switch(m.label){case 0:return e=this._options,a=Math.floor((e.width-r*i)/2),o=Math.floor((e.height-r*i)/2),s=a+e.imageOptions.margin+(r*i-t)/2,l=o+e.imageOptions.margin+(r*i-n)/2,u=t-2*e.imageOptions.margin,d=n-2*e.imageOptions.margin,(f=document.createElementNS(`http://www.w3.org/2000/svg`,`image`)).setAttribute(`x`,String(s)),f.setAttribute(`y`,String(l)),f.setAttribute(`width`,u+`px`),f.setAttribute(`height`,d+`px`),[4,c(e.image||``)];case 1:return p=m.sent(),f.setAttribute(`href`,p||``),this._element.appendChild(f),[2]}}))}))},e.prototype._createColor=function(e){var t=e.options,n=e.color,r=e.additionalRotation,i=e.x,a=e.y,o=e.height,s=e.width,c=e.name,l=s>o?s:o,u=document.createElementNS(`http://www.w3.org/2000/svg`,`rect`);if(u.setAttribute(`x`,String(i)),u.setAttribute(`y`,String(a)),u.setAttribute(`height`,String(o)),u.setAttribute(`width`,String(s)),u.setAttribute(`clip-path`,`url('#clip-path-`+c+`')`),t){var d;if(t.type===`radial`)(d=document.createElementNS(`http://www.w3.org/2000/svg`,`radialGradient`)).setAttribute(`id`,c),d.setAttribute(`gradientUnits`,`userSpaceOnUse`),d.setAttribute(`fx`,String(i+s/2)),d.setAttribute(`fy`,String(a+o/2)),d.setAttribute(`cx`,String(i+s/2)),d.setAttribute(`cy`,String(a+o/2)),d.setAttribute(`r`,String(l/2));else{var f=((t.rotation||0)+r)%(2*Math.PI),p=(f+2*Math.PI)%(2*Math.PI),m=i+s/2,h=a+o/2,g=i+s/2,_=a+o/2;p>=0&&p<=.25*Math.PI||p>1.75*Math.PI&&p<=2*Math.PI?(m-=s/2,h-=o/2*Math.tan(f),g+=s/2,_+=o/2*Math.tan(f)):p>.25*Math.PI&&p<=.75*Math.PI?(h-=o/2,m-=s/2/Math.tan(f),_+=o/2,g+=s/2/Math.tan(f)):p>.75*Math.PI&&p<=1.25*Math.PI?(m+=s/2,h+=o/2*Math.tan(f),g-=s/2,_-=o/2*Math.tan(f)):p>1.25*Math.PI&&p<=1.75*Math.PI&&(h+=o/2,m+=s/2/Math.tan(f),_-=o/2,g-=s/2/Math.tan(f)),(d=document.createElementNS(`http://www.w3.org/2000/svg`,`linearGradient`)).setAttribute(`id`,c),d.setAttribute(`gradientUnits`,`userSpaceOnUse`),d.setAttribute(`x1`,String(Math.round(m))),d.setAttribute(`y1`,String(Math.round(h))),d.setAttribute(`x2`,String(Math.round(g))),d.setAttribute(`y2`,String(Math.round(_)))}t.colorStops.forEach((function(e){var t=e.offset,n=e.color,r=document.createElementNS(`http://www.w3.org/2000/svg`,`stop`);r.setAttribute(`offset`,100*t+`%`),r.setAttribute(`stop-color`,n),d.appendChild(r)})),u.setAttribute(`fill`,`url('#`+c+`')`),this._defs.appendChild(d)}else n&&u.setAttribute(`fill`,n);this._element.appendChild(u)},e}(),S=`canvas`;for(var C={},w=0;w<=40;w++)C[w]=w;let T={type:S,shape:`square`,width:300,height:300,data:``,margin:0,qrOptions:{typeNumber:C[0],mode:void 0,errorCorrectionLevel:`Q`},imageOptions:{hideBackgroundDots:!0,imageSize:.4,crossOrigin:void 0,margin:0},dotsOptions:{type:`square`,color:`#000`},backgroundOptions:{round:0,color:`#fff`}};var E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function D(e){var t=E({},e);if(!t.colorStops||!t.colorStops.length)throw`Field 'colorStops' is required in gradient`;return t.rotation=t.rotation?Number(t.rotation):0,t.colorStops=t.colorStops.map((function(e){return E(E({},e),{offset:Number(e.offset)})})),t}function O(e){var t=E({},e);return t.width=Number(t.width),t.height=Number(t.height),t.margin=Number(t.margin),t.imageOptions=E(E({},t.imageOptions),{hideBackgroundDots:!!t.imageOptions.hideBackgroundDots,imageSize:Number(t.imageOptions.imageSize),margin:Number(t.imageOptions.margin)}),t.margin>Math.min(t.width,t.height)&&(t.margin=Math.min(t.width,t.height)),t.dotsOptions=E({},t.dotsOptions),t.dotsOptions.gradient&&(t.dotsOptions.gradient=D(t.dotsOptions.gradient)),t.cornersSquareOptions&&(t.cornersSquareOptions=E({},t.cornersSquareOptions),t.cornersSquareOptions.gradient&&(t.cornersSquareOptions.gradient=D(t.cornersSquareOptions.gradient))),t.cornersDotOptions&&(t.cornersDotOptions=E({},t.cornersDotOptions),t.cornersDotOptions.gradient&&(t.cornersDotOptions.gradient=D(t.cornersDotOptions.gradient))),t.backgroundOptions&&(t.backgroundOptions=E({},t.backgroundOptions),t.backgroundOptions.gradient&&(t.backgroundOptions.gradient=D(t.backgroundOptions.gradient))),t}var k=n(192),A=n.n(k),j=function(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},M=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};let N=function(){function e(e){this._options=e?O(o(T,e)):T,this.update()}return e._clearContainer=function(e){e&&(e.innerHTML=``)},e.prototype._setupSvg=function(){var e=this;if(this._qr){var t=new x(this._options);this._svg=t.getElement(),this._svgDrawingPromise=t.drawQR(this._qr).then((function(){var n;e._svg&&((n=e._extension)==null||n.call(e,t.getElement(),e._options))}))}},e.prototype._setupCanvas=function(){var e=this;this._qr&&(this._canvas=document.createElement(`canvas`),this._canvas.width=this._options.width,this._canvas.height=this._options.height,this._setupSvg(),this._canvasDrawingPromise=this._svgDrawingPromise?.then((function(){if(e._svg){var t=e._svg,n=new XMLSerializer().serializeToString(t),r=`data:image/svg+xml;base64,`+btoa(n),i=new Image;return new Promise((function(t){i.onload=function(){var n;(n=e._canvas?.getContext(`2d`))==null||n.drawImage(i,0,0),t()},i.src=r}))}})))},e.prototype._getElement=function(e){return e===void 0&&(e=`png`),j(this,void 0,void 0,(function(){return M(this,(function(t){switch(t.label){case 0:if(!this._qr)throw`QR code is empty`;return e.toLowerCase()===`svg`?(this._svg&&this._svgDrawingPromise||this._setupSvg(),[4,this._svgDrawingPromise]):[3,2];case 1:return t.sent(),[2,this._svg];case 2:return this._canvas&&this._canvasDrawingPromise||this._setupCanvas(),[4,this._canvasDrawingPromise];case 3:return t.sent(),[2,this._canvas]}}))}))},e.prototype.update=function(t){e._clearContainer(this._container),this._options=t?O(o(this._options,t)):this._options,this._options.data&&(this._qr=A()(this._options.qrOptions.typeNumber,this._options.qrOptions.errorCorrectionLevel),this._qr.addData(this._options.data,this._options.qrOptions.mode||function(e){switch(!0){case/^[0-9]*$/.test(e):return`Numeric`;case/^[0-9A-Z $%*+\-./:]*$/.test(e):return`Alphanumeric`;default:return`Byte`}}(this._options.data)),this._qr.make(),this._options.type===S?this._setupCanvas():this._setupSvg(),this.append(this._container))},e.prototype.append=function(e){if(e){if(typeof e.appendChild!=`function`)throw`Container should be a single DOM node`;this._options.type===S?this._canvas&&e.appendChild(this._canvas):this._svg&&e.appendChild(this._svg),this._container=e}},e.prototype.applyExtension=function(e){if(!e)throw`Extension function should be defined.`;this._extension=e,this.update()},e.prototype.deleteExtension=function(){this._extension=void 0,this.update()},e.prototype.getRawData=function(e){return e===void 0&&(e=`png`),j(this,void 0,void 0,(function(){var t,n,r;return M(this,(function(i){switch(i.label){case 0:if(!this._qr)throw`QR code is empty`;return[4,this._getElement(e)];case 1:return(t=i.sent())?e.toLowerCase()===`svg`?(n=new XMLSerializer,r=n.serializeToString(t),[2,new Blob([`<?xml version="1.0" standalone="no"?>\r
`+r],{type:`image/svg+xml`})]):[2,new Promise((function(n){return t.toBlob(n,`image/`+e,1)}))]:[2,null]}}))}))},e.prototype.download=function(e){return j(this,void 0,void 0,(function(){var t,n,r,i,a;return M(this,(function(o){switch(o.label){case 0:if(!this._qr)throw`QR code is empty`;return t=`png`,n=`qr`,typeof e==`string`?(t=e,console.warn(`Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument`)):typeof e==`object`&&e&&(e.name&&(n=e.name),e.extension&&(t=e.extension)),[4,this._getElement(t)];case 1:return(r=o.sent())&&(t.toLowerCase()===`svg`?(i=new XMLSerializer,a=`<?xml version="1.0" standalone="no"?>\r
`+(a=i.serializeToString(r)),s(`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(a),n+`.svg`)):s(r.toDataURL(`image/`+t),n+`.`+t)),[2]}}))}))},e}()}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(676)})().default}))})),g=a(((e,t)=>{typeof navigator<`u`&&function(e,n){typeof define==`function`&&define.amd?define(function(){return n(e)}):typeof t==`object`&&t.exports?t.exports=n(e):(e.lottie=n(e),e.bodymovin=e.lottie)}(window||{},function(e){var t=``,n=-999999,r=!1,i=!0,a=``,o,s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),c=Math.pow,l=Math.sqrt,u=Math.floor,d=Math.min,f={};(function(){var e=`abs.acos.acosh.asin.asinh.atan.atanh.atan2.ceil.cbrt.expm1.clz32.cos.cosh.exp.floor.fround.hypot.imul.log.log1p.log2.log10.max.min.pow.random.round.sign.sin.sinh.sqrt.tan.tanh.trunc.E.LN10.LN2.LOG10E.LOG2E.PI.SQRT1_2.SQRT2`.split(`.`),t,n=e.length;for(t=0;t<n;t+=1)f[e[t]]=Math[e[t]]})();function p(){return{}}f.random=Math.random,f.abs=function(e){if(typeof e==`object`&&e.length){var t=N(e.length),n,r=e.length;for(n=0;n<r;n+=1)t[n]=Math.abs(e[n]);return t}return Math.abs(e)};var m=150,h=Math.PI/180,g=.5519;function _(e,t,n,r){this.type=e,this.currentTime=t,this.totalTime=n,this.direction=r<0?-1:1}function v(e,t){this.type=e,this.direction=t<0?-1:1}function y(e,t,n,r){this.type=e,this.currentLoop=n,this.totalLoops=t,this.direction=r<0?-1:1}function b(e,t,n){this.type=e,this.firstFrame=t,this.totalFrames=n}function x(e,t){this.type=e,this.target=t}function S(e,t){this.type=`renderFrameError`,this.nativeError=e,this.currentTime=t}function C(e){this.type=`configError`,this.nativeError=e}var w=function(){var e=0;return function(){return e+=1,a+`__lottie_element_`+e}}();function T(e,t,n){var r,i,a,o=Math.floor(e*6),s=e*6-o,c=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t);switch(o%6){case 0:r=n,i=u,a=c;break;case 1:r=l,i=n,a=c;break;case 2:r=c,i=n,a=u;break;case 3:r=c,i=l,a=n;break;case 4:r=u,i=c,a=n;break;case 5:r=n,i=c,a=l}return[r,i,a]}function E(e,t,n){var r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o,s=r===0?0:a/r,c=r/255;switch(r){case i:o=0;break;case e:o=t-n+a*(t<n?6:0),o/=6*a;break;case t:o=n-e+a*2,o/=6*a;break;case n:o=e-t+a*4,o/=6*a}return[o,s,c]}function D(e,t){var n=E(e[0]*255,e[1]*255,e[2]*255);return n[1]+=t,n[1]>1?n[1]=1:n[1]<=0&&(n[1]=0),T(n[0],n[1],n[2])}function O(e,t){var n=E(e[0]*255,e[1]*255,e[2]*255);return n[2]+=t,n[2]>1?n[2]=1:n[2]<0&&(n[2]=0),T(n[0],n[1],n[2])}function k(e,t){var n=E(e[0]*255,e[1]*255,e[2]*255);return n[0]+=t/360,n[0]>1?--n[0]:n[0]<0&&(n[0]+=1),T(n[0],n[1],n[2])}var A=function(){for(var e=[],t=0,n;t<256;t+=1)n=t.toString(16),e[t]=n.length===1?`0`+n:n;return function(t,n,r){return t<0&&(t=0),n<0&&(n=0),r<0&&(r=0),`#`+e[t]+e[n]+e[r]}}();function j(){}j.prototype={triggerEvent:function(e,t){if(this._cbs[e])for(var n=this._cbs[e],r=0;r<n.length;r+=1)n[r](t)},addEventListener:function(e,t){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(t),function(){this.removeEventListener(e,t)}.bind(this)},removeEventListener:function(e,t){if(!t)this._cbs[e]=null;else if(this._cbs[e]){for(var n=0,r=this._cbs[e].length;n<r;)this._cbs[e][n]===t&&(this._cbs[e].splice(n,1),--n,--r),n+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var M=function(){function e(e,t){var n=0,r=[],i;switch(e){case`int16`:case`uint8c`:i=1;break;default:i=1.1}for(n=0;n<t;n+=1)r.push(i);return r}function t(t,n){return t===`float32`?new Float32Array(n):t===`int16`?new Int16Array(n):t===`uint8c`?new Uint8ClampedArray(n):e(t,n)}return typeof Uint8ClampedArray==`function`&&typeof Float32Array==`function`?t:e}();function N(e){return Array.apply(null,{length:e})}function P(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function F(e){return document.createElement(e)}function I(){}I.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,t=this.dynamicProperties.length;for(e=0;e<t;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var L=function(){var e={0:`source-over`,1:`multiply`,2:`screen`,3:`overlay`,4:`darken`,5:`lighten`,6:`color-dodge`,7:`color-burn`,8:`hard-light`,9:`soft-light`,10:`difference`,11:`exclusion`,12:`hue`,13:`saturation`,14:`color`,15:`luminosity`};return function(t){return e[t]||``}}(),ee={1:`butt`,2:`round`,3:`square`},te={1:`miter`,2:`round`,3:`bevel`},R=function(){var e=Math.cos,t=Math.sin,n=Math.tan,r=Math.round;function i(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(n){if(n===0)return this;var r=e(n),i=t(n);return this._t(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1)}function o(n){if(n===0)return this;var r=e(n),i=t(n);return this._t(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1)}function s(n){if(n===0)return this;var r=e(n),i=t(n);return this._t(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1)}function c(n){if(n===0)return this;var r=e(n),i=t(n);return this._t(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1)}function l(e,t){return this._t(1,t,e,1,0,0)}function u(e,t){return this.shear(n(e),n(t))}function d(r,i){var a=e(i),o=t(i);return this._t(a,o,0,0,-o,a,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(r),1,0,0,0,0,1,0,0,0,0,1)._t(a,-o,0,0,o,a,0,0,0,0,1,0,0,0,0,1)}function f(e,t,n){return!n&&n!==0&&(n=1),e===1&&t===1&&n===1?this:this._t(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1)}function p(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this.props[0]=e,this.props[1]=t,this.props[2]=n,this.props[3]=r,this.props[4]=i,this.props[5]=a,this.props[6]=o,this.props[7]=s,this.props[8]=c,this.props[9]=l,this.props[10]=u,this.props[11]=d,this.props[12]=f,this.props[13]=p,this.props[14]=m,this.props[15]=h,this}function m(e,t,n){return n||=0,e!==0||t!==0||n!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,e,t,n,1):this}function h(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=this.props;if(e===1&&t===0&&n===0&&r===0&&i===0&&a===1&&o===0&&s===0&&c===0&&l===0&&u===1&&d===0)return g[12]=g[12]*e+g[15]*f,g[13]=g[13]*a+g[15]*p,g[14]=g[14]*u+g[15]*m,g[15]*=h,this._identityCalculated=!1,this;var _=g[0],v=g[1],y=g[2],b=g[3],x=g[4],S=g[5],C=g[6],w=g[7],T=g[8],E=g[9],D=g[10],O=g[11],k=g[12],A=g[13],j=g[14],M=g[15];return g[0]=_*e+v*i+y*c+b*f,g[1]=_*t+v*a+y*l+b*p,g[2]=_*n+v*o+y*u+b*m,g[3]=_*r+v*s+y*d+b*h,g[4]=x*e+S*i+C*c+w*f,g[5]=x*t+S*a+C*l+w*p,g[6]=x*n+S*o+C*u+w*m,g[7]=x*r+S*s+C*d+w*h,g[8]=T*e+E*i+D*c+O*f,g[9]=T*t+E*a+D*l+O*p,g[10]=T*n+E*o+D*u+O*m,g[11]=T*r+E*s+D*d+O*h,g[12]=k*e+A*i+j*c+M*f,g[13]=k*t+A*a+j*l+M*p,g[14]=k*n+A*o+j*u+M*m,g[15]=k*r+A*s+j*d+M*h,this._identityCalculated=!1,this}function g(){return this._identityCalculated||=(this._identity=this.props[0]===1&&this.props[1]===0&&this.props[2]===0&&this.props[3]===0&&this.props[4]===0&&this.props[5]===1&&this.props[6]===0&&this.props[7]===0&&this.props[8]===0&&this.props[9]===0&&this.props[10]===1&&this.props[11]===0&&this.props[12]===0&&this.props[13]===0&&this.props[14]===0&&this.props[15]===1,!0),this._identity}function _(e){for(var t=0;t<16;){if(e.props[t]!==this.props[t])return!1;t+=1}return!0}function v(e){for(var t=0;t<16;t+=1)e.props[t]=this.props[t];return e}function y(e){for(var t=0;t<16;t+=1)this.props[t]=e[t]}function b(e,t,n){return{x:e*this.props[0]+t*this.props[4]+n*this.props[8]+this.props[12],y:e*this.props[1]+t*this.props[5]+n*this.props[9]+this.props[13],z:e*this.props[2]+t*this.props[6]+n*this.props[10]+this.props[14]}}function x(e,t,n){return e*this.props[0]+t*this.props[4]+n*this.props[8]+this.props[12]}function S(e,t,n){return e*this.props[1]+t*this.props[5]+n*this.props[9]+this.props[13]}function C(e,t,n){return e*this.props[2]+t*this.props[6]+n*this.props[10]+this.props[14]}function w(){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],t=this.props[5]/e,n=-this.props[1]/e,r=-this.props[4]/e,i=this.props[0]/e,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e,s=new R;return s.props[0]=t,s.props[1]=n,s.props[4]=r,s.props[5]=i,s.props[12]=a,s.props[13]=o,s}function T(e){return this.getInverseMatrix().applyToPointArray(e[0],e[1],e[2]||0)}function E(e){var t,n=e.length,r=[];for(t=0;t<n;t+=1)r[t]=T(e[t]);return r}function D(e,t,n){var r=M(`float32`,6);if(this.isIdentity())r[0]=e[0],r[1]=e[1],r[2]=t[0],r[3]=t[1],r[4]=n[0],r[5]=n[1];else{var i=this.props[0],a=this.props[1],o=this.props[4],s=this.props[5],c=this.props[12],l=this.props[13];r[0]=e[0]*i+e[1]*o+c,r[1]=e[0]*a+e[1]*s+l,r[2]=t[0]*i+t[1]*o+c,r[3]=t[0]*a+t[1]*s+l,r[4]=n[0]*i+n[1]*o+c,r[5]=n[0]*a+n[1]*s+l}return r}function O(e,t,n){return this.isIdentity()?[e,t,n]:[e*this.props[0]+t*this.props[4]+n*this.props[8]+this.props[12],e*this.props[1]+t*this.props[5]+n*this.props[9]+this.props[13],e*this.props[2]+t*this.props[6]+n*this.props[10]+this.props[14]]}function k(e,t){if(this.isIdentity())return e+`,`+t;var n=this.props;return Math.round((e*n[0]+t*n[4]+n[12])*100)/100+`,`+Math.round((e*n[1]+t*n[5]+n[13])*100)/100}function A(){for(var e=0,t=this.props,n=`matrix3d(`,i=1e4;e<16;)n+=r(t[e]*i)/i,n+=e===15?`)`:`,`,e+=1;return n}function j(e){var t=1e4;return e<1e-6&&e>0||e>-1e-6&&e<0?r(e*t)/t:e}function N(){var e=this.props,t=j(e[0]),n=j(e[1]),r=j(e[4]),i=j(e[5]),a=j(e[12]),o=j(e[13]);return`matrix(`+t+`,`+n+`,`+r+`,`+i+`,`+a+`,`+o+`)`}return function(){this.reset=i,this.rotate=a,this.rotateX=o,this.rotateY=s,this.rotateZ=c,this.skew=u,this.skewFromAxis=d,this.shear=l,this.scale=f,this.setTransform=p,this.translate=m,this.transform=h,this.applyToPoint=b,this.applyToX=x,this.applyToY=S,this.applyToZ=C,this.applyToPointArray=O,this.applyToTriplePoints=D,this.applyToPointStringified=k,this.toCSS=A,this.to2dCSS=N,this.clone=v,this.cloneFromProps=y,this.equals=_,this.inversePoints=E,this.inversePoint=T,this.getInverseMatrix=w,this._t=this.transform,this.isIdentity=g,this._identity=!0,this._identityCalculated=!1,this.props=M(`float32`,16),this.reset()}}();(function(e,t){var n=this,r=256,i=6,a=52,o=`random`,s=t.pow(r,i),c=t.pow(2,a),l=c*2,u=r-1,d;function f(n,a,u){var d=[];a=a===!0?{entropy:!0}:a||{};var f=g(h(a.entropy?[n,v(e)]:n===null?_():n,3),d),y=new p(d),b=function(){for(var e=y.g(i),t=s,n=0;e<c;)e=(e+n)*r,t*=r,n=y.g(1);for(;e>=l;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return y.g(4)|0},b.quick=function(){return y.g(4)/4294967296},b.double=b,g(v(y.S),e),(a.pass||u||function(e,n,r,i){return i&&(i.S&&m(i,y),e.state=function(){return m(y,{})}),r?(t[o]=e,n):e})(b,f,`global`in a?a.global:this==t,a.state)}t[`seed`+o]=f;function p(e){var t,n=e.length,i=this,a=0,o=i.i=i.j=0,s=i.S=[];for(n||(e=[n++]);a<r;)s[a]=a++;for(a=0;a<r;a++)s[a]=s[o=u&o+e[a%n]+(t=s[a])],s[o]=t;i.g=function(e){for(var t,n=0,a=i.i,o=i.j,s=i.S;e--;)t=s[a=u&a+1],n=n*r+s[u&(s[a]=s[o=u&o+t])+(s[o]=t)];return i.i=a,i.j=o,n}}function m(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function h(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(h(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function g(e,t){for(var n=e+``,r,i=0;i<n.length;)t[u&i]=u&(r^=t[u&i]*19)+n.charCodeAt(i++);return v(t)}function _(){try{if(d)return v(d.randomBytes(r));var t=new Uint8Array(r);return(n.crypto||n.msCrypto).getRandomValues(t),v(t)}catch{var i=n.navigator,a=i&&i.plugins;return[+new Date,n,a,n.screen,v(e)]}}function v(e){return String.fromCharCode.apply(0,e)}g(t.random(),e)})([],f);var z=function(){var e={};e.getBezierEasing=n;var t={};function n(e,n,r,i,a){var o=a||(`bez_`+e+`_`+n+`_`+r+`_`+i).replace(/\./g,`p`);if(t[o])return t[o];var s=new _([e,n,r,i]);return t[o]=s,s}var r=4,i=.001,a=1e-7,o=10,s=11,c=1/(s-1),l=typeof Float32Array==`function`;function u(e,t){return 1-3*t+3*e}function d(e,t){return 3*t-6*e}function f(e){return 3*e}function p(e,t,n){return((u(t,n)*e+d(t,n))*e+f(t))*e}function m(e,t,n){return 3*u(t,n)*e*e+2*d(t,n)*e+f(t)}function h(e,t,n,r,i){var s,c,l=0;do c=t+(n-t)/2,s=p(c,r,i)-e,s>0?n=c:t=c;while(Math.abs(s)>a&&++l<o);return c}function g(e,t,n,i){for(var a=0;a<r;++a){var o=m(t,n,i);if(o===0)return t;var s=p(t,n,i)-e;t-=s/o}return t}function _(e){this._p=e,this._mSampleValues=l?new Float32Array(s):Array(s),this._precomputed=!1,this.get=this.get.bind(this)}return _.prototype={get:function(e){var t=this._p[0],n=this._p[1],r=this._p[2],i=this._p[3];return this._precomputed||this._precompute(),t===n&&r===i?e:e===0?0:e===1?1:p(this._getTForX(e),n,i)},_precompute:function(){var e=this._p[0],t=this._p[1],n=this._p[2],r=this._p[3];this._precomputed=!0,(e!==t||n!==r)&&this._calcSampleValues()},_calcSampleValues:function(){for(var e=this._p[0],t=this._p[2],n=0;n<s;++n)this._mSampleValues[n]=p(n*c,e,t)},_getTForX:function(e){for(var t=this._p[0],n=this._p[2],r=this._mSampleValues,a=0,o=1,l=s-1;o!==l&&r[o]<=e;++o)a+=c;--o;var u=(e-r[o])/(r[o+1]-r[o]),d=a+u*c,f=m(d,t,n);return f>=i?g(e,d,t,n):f===0?d:h(e,a,a+c,t,n)}},e}();(function(){for(var t=0,n=[`ms`,`moz`,`webkit`,`o`],r=0;r<n.length&&!e.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+`RequestAnimationFrame`],e.cancelAnimationFrame=e[n[r]+`CancelAnimationFrame`]||e[n[r]+`CancelRequestAnimationFrame`];e.requestAnimationFrame||=function(e){var n=new Date().getTime(),r=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+r)},r);return t=n+r,i},e.cancelAnimationFrame||=function(e){clearTimeout(e)}})();function B(e,t){var n,r=e.length,i;for(n=0;n<r;n+=1)for(var a in i=e[n].prototype,i)Object.prototype.hasOwnProperty.call(i,a)&&(t.prototype[a]=i[a])}function ne(e){function t(){}return t.prototype=e,t}function re(){var e=Math;function t(e,t,n,r,i,a){var o=e*r+t*i+n*a-i*r-a*e-n*t;return o>-.001&&o<.001}function n(n,r,i,a,o,s,c,l,u){if(i===0&&s===0&&u===0)return t(n,r,a,o,c,l);var d=e.sqrt(e.pow(a-n,2)+e.pow(o-r,2)+e.pow(s-i,2)),f=e.sqrt(e.pow(c-n,2)+e.pow(l-r,2)+e.pow(u-i,2)),p=e.sqrt(e.pow(c-a,2)+e.pow(l-o,2)+e.pow(u-s,2)),m=d>f?d>p?d-f-p:p-f-d:p>f?p-f-d:f-d-p;return m>-1e-4&&m<1e-4}var r=function(){return function(e,t,n,r){var i=m,a,o,s,u,d,f=0,p,h=[],g=[],_=ke.newElement();for(s=n.length,a=0;a<i;a+=1){for(d=a/(i-1),p=0,o=0;o<s;o+=1)u=c(1-d,3)*e[o]+3*c(1-d,2)*d*n[o]+3*(1-d)*c(d,2)*r[o]+c(d,3)*t[o],h[o]=u,g[o]!==null&&(p+=c(h[o]-g[o],2)),g[o]=h[o];p&&(p=l(p),f+=p),_.percents[a]=d,_.lengths[a]=f}return _.addedLength=f,_}}();function i(e){var t=Oe.newElement(),n=e.c,i=e.v,a=e.o,o=e.i,s,c=e._length,l=t.lengths,u=0;for(s=0;s<c-1;s+=1)l[s]=r(i[s],i[s+1],a[s],o[s+1]),u+=l[s].addedLength;return n&&c&&(l[s]=r(i[s],i[0],a[s],o[0]),u+=l[s].addedLength),t.totalLength=u,t}function a(e){this.segmentLength=0,this.points=Array(e)}function o(e,t){this.partialLength=e,this.point=t}var s=function(){var e={};return function(n,r,i,s){var u=(n[0]+`_`+n[1]+`_`+r[0]+`_`+r[1]+`_`+i[0]+`_`+i[1]+`_`+s[0]+`_`+s[1]).replace(/\./g,`p`);if(!e[u]){var d=m,f,p,h,g,_,v=0,y,b,x=null;n.length===2&&(n[0]!==r[0]||n[1]!==r[1])&&t(n[0],n[1],r[0],r[1],n[0]+i[0],n[1]+i[1])&&t(n[0],n[1],r[0],r[1],r[0]+s[0],r[1]+s[1])&&(d=2);var S=new a(d);for(h=i.length,f=0;f<d;f+=1){for(b=N(h),_=f/(d-1),y=0,p=0;p<h;p+=1)g=c(1-_,3)*n[p]+3*c(1-_,2)*_*(n[p]+i[p])+3*(1-_)*c(_,2)*(r[p]+s[p])+c(_,3)*r[p],b[p]=g,x!==null&&(y+=c(b[p]-x[p],2));y=l(y),v+=y,S.points[f]=new o(y,b),x=b}S.segmentLength=v,e[u]=S}return e[u]}}();function d(e,t){var n=t.percents,r=t.lengths,i=n.length,a=u((i-1)*e),o=e*t.addedLength,s=0;if(a===i-1||a===0||o===r[a])return n[a];for(var c=r[a]>o?-1:1,l=!0;l;)if(r[a]<=o&&r[a+1]>o?(s=(o-r[a])/(r[a+1]-r[a]),l=!1):a+=c,a<0||a>=i-1){if(a===i-1)return n[a];l=!1}return n[a]+(n[a+1]-n[a])*s}function f(t,n,r,i,a,o){var s=d(a,o),c=1-s;return[e.round((c*c*c*t[0]+(s*c*c+c*s*c+c*c*s)*r[0]+(s*s*c+c*s*s+s*c*s)*i[0]+s*s*s*n[0])*1e3)/1e3,e.round((c*c*c*t[1]+(s*c*c+c*s*c+c*c*s)*r[1]+(s*s*c+c*s*s+s*c*s)*i[1]+s*s*s*n[1])*1e3)/1e3]}var p=M(`float32`,8);function h(t,n,r,i,a,o,s){a<0?a=0:a>1&&(a=1);var c=d(a,s);o=o>1?1:o;var l=d(o,s),u,f=t.length,m=1-c,h=1-l,g=m*m*m,_=c*m*m*3,v=c*c*m*3,y=c*c*c,b=m*m*h,x=c*m*h+m*c*h+m*m*l,S=c*c*h+m*c*l+c*m*l,C=c*c*l,w=m*h*h,T=c*h*h+m*l*h+m*h*l,E=c*l*h+m*l*l+c*h*l,D=c*l*l,O=h*h*h,k=l*h*h+h*l*h+h*h*l,A=l*l*h+h*l*l+l*h*l,j=l*l*l;for(u=0;u<f;u+=1)p[u*4]=e.round((g*t[u]+_*r[u]+v*i[u]+y*n[u])*1e3)/1e3,p[u*4+1]=e.round((b*t[u]+x*r[u]+S*i[u]+C*n[u])*1e3)/1e3,p[u*4+2]=e.round((w*t[u]+T*r[u]+E*i[u]+D*n[u])*1e3)/1e3,p[u*4+3]=e.round((O*t[u]+k*r[u]+A*i[u]+j*n[u])*1e3)/1e3;return p}return{getSegmentsLength:i,getNewSegment:h,getPointInSegment:f,buildBezierData:s,pointOnLine2D:t,pointOnLine3D:n}}var ie=re(),ae=function(){var t=1,n=[],i,a,o={onmessage:function(){},postMessage:function(e){i({data:e})}},s={postMessage:function(e){o.onmessage({data:e})}};function c(t){if(e.Worker&&e.Blob&&r){var n=new Blob([`var _workerSelf = self; self.onmessage = `,t.toString()],{type:`text/javascript`}),a=URL.createObjectURL(n);return new Worker(a)}return i=t,o}function l(){a||(a=c(function(e){function t(){function e(i,a){var o,s,c=i.length,l,u,f,p;for(s=0;s<c;s+=1)if(o=i[s],`ks`in o&&!o.completed){if(o.completed=!0,o.tt&&(i[s-1].td=o.tt),o.hasMask){var m=o.masksProperties;for(u=m.length,l=0;l<u;l+=1)if(m[l].pt.k.i)r(m[l].pt.k);else for(p=m[l].pt.k.length,f=0;f<p;f+=1)m[l].pt.k[f].s&&r(m[l].pt.k[f].s[0]),m[l].pt.k[f].e&&r(m[l].pt.k[f].e[0])}o.ty===0?(o.layers=t(o.refId,a),e(o.layers,a)):o.ty===4?n(o.shapes):o.ty===5&&d(o)}}function t(e,t){for(var n=0,r=t.length;n<r;){if(t[n].id===e)return t[n].layers.__used?JSON.parse(JSON.stringify(t[n].layers)):(t[n].layers.__used=!0,t[n].layers);n+=1}return null}function n(e){var t,i=e.length,a,o;for(t=i-1;t>=0;--t)if(e[t].ty===`sh`){if(e[t].ks.k.i)r(e[t].ks.k);else for(o=e[t].ks.k.length,a=0;a<o;a+=1)e[t].ks.k[a].s&&r(e[t].ks.k[a].s[0]),e[t].ks.k[a].e&&r(e[t].ks.k[a].e[0])}else e[t].ty===`gr`&&n(e[t].it)}function r(e){var t,n=e.i.length;for(t=0;t<n;t+=1)e.i[t][0]+=e.v[t][0],e.i[t][1]+=e.v[t][1],e.o[t][0]+=e.v[t][0],e.o[t][1]+=e.v[t][1]}function i(e,t){var n=t?t.split(`.`):[100,100,100];return e[0]>n[0]?!0:n[0]>e[0]?!1:e[1]>n[1]?!0:n[1]>e[1]?!1:e[2]>n[2]?!0:n[2]>e[2]?!1:null}var a=function(){var e=[4,4,14];function t(e){var t=e.t.d;e.t.d={k:[{s:t,t:0}]}}function n(e){var n,r=e.length;for(n=0;n<r;n+=1)e[n].ty===5&&t(e[n])}return function(t){if(i(e,t.v)&&(n(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&n(t.assets[r].layers)}}}(),o=function(){var e=[4,7,99];return function(t){if(t.chars&&!i(e,t.v)){var n,a=t.chars.length,o,s,c,l;for(n=0;n<a;n+=1)if(t.chars[n].data&&t.chars[n].data.shapes)for(l=t.chars[n].data.shapes[0].it,s=l.length,o=0;o<s;o+=1)c=l[o].ks.k,c.__converted||(r(l[o].ks.k),c.__converted=!0)}}}(),s=function(){var e=[5,7,15];function t(e){var t=e.t.p;typeof t.a==`number`&&(t.a={a:0,k:t.a}),typeof t.p==`number`&&(t.p={a:0,k:t.p}),typeof t.r==`number`&&(t.r={a:0,k:t.r})}function n(e){var n,r=e.length;for(n=0;n<r;n+=1)e[n].ty===5&&t(e[n])}return function(t){if(i(e,t.v)&&(n(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&n(t.assets[r].layers)}}}(),c=function(){var e=[4,1,9];function t(e){var n,r=e.length,i,a;for(n=0;n<r;n+=1)if(e[n].ty===`gr`)t(e[n].it);else if(e[n].ty===`fl`||e[n].ty===`st`){if(e[n].c.k&&e[n].c.k[0].i)for(a=e[n].c.k.length,i=0;i<a;i+=1)e[n].c.k[i].s&&(e[n].c.k[i].s[0]/=255,e[n].c.k[i].s[1]/=255,e[n].c.k[i].s[2]/=255,e[n].c.k[i].s[3]/=255),e[n].c.k[i].e&&(e[n].c.k[i].e[0]/=255,e[n].c.k[i].e[1]/=255,e[n].c.k[i].e[2]/=255,e[n].c.k[i].e[3]/=255);else e[n].c.k[0]/=255,e[n].c.k[1]/=255,e[n].c.k[2]/=255,e[n].c.k[3]/=255}}function n(e){var n,r=e.length;for(n=0;n<r;n+=1)e[n].ty===4&&t(e[n].shapes)}return function(t){if(i(e,t.v)&&(n(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&n(t.assets[r].layers)}}}(),l=function(){var e=[4,4,18];function t(e){var n,r=e.length,i,a;for(n=r-1;n>=0;--n)if(e[n].ty===`sh`){if(e[n].ks.k.i)e[n].ks.k.c=e[n].closed;else for(a=e[n].ks.k.length,i=0;i<a;i+=1)e[n].ks.k[i].s&&(e[n].ks.k[i].s[0].c=e[n].closed),e[n].ks.k[i].e&&(e[n].ks.k[i].e[0].c=e[n].closed)}else e[n].ty===`gr`&&t(e[n].it)}function n(e){var n,r,i=e.length,a,o,s,c;for(r=0;r<i;r+=1){if(n=e[r],n.hasMask){var l=n.masksProperties;for(o=l.length,a=0;a<o;a+=1)if(l[a].pt.k.i)l[a].pt.k.c=l[a].cl;else for(c=l[a].pt.k.length,s=0;s<c;s+=1)l[a].pt.k[s].s&&(l[a].pt.k[s].s[0].c=l[a].cl),l[a].pt.k[s].e&&(l[a].pt.k[s].e[0].c=l[a].cl)}n.ty===4&&t(n.shapes)}}return function(t){if(i(e,t.v)&&(n(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&n(t.assets[r].layers)}}}();function u(t){t.__complete||=(c(t),a(t),o(t),s(t),l(t),e(t.layers,t.assets),!0)}function d(e){e.t.a.length===0&&!(`m`in e.t.p)&&(e.singleShape=!0)}var f={};return f.completeData=u,f.checkColors=c,f.checkChars=o,f.checkPathProperties=s,f.checkShapes=l,f.completeLayers=e,f}if(s.dataManager||=t(),s.assetLoader||=function(){function e(e){var t=e.getResponseHeader(`content-type`);return t&&e.responseType===`json`&&t.indexOf(`json`)!==-1||e.response&&typeof e.response==`object`?e.response:e.response&&typeof e.response==`string`?JSON.parse(e.response):e.responseText?JSON.parse(e.responseText):null}function t(t,n,r,i){var a,o=new XMLHttpRequest;try{o.responseType=`json`}catch{}o.onreadystatechange=function(){if(o.readyState===4){if(o.status===200)a=e(o),r(a);else try{a=e(o),r(a)}catch(e){i&&i(e)}}};try{o.open(`GET`,t,!0)}catch{o.open(`GET`,n+`/`+t,!0)}o.send()}return{load:t}}(),e.data.type===`loadAnimation`)s.assetLoader.load(e.data.path,e.data.fullPath,function(t){s.dataManager.completeData(t),s.postMessage({id:e.data.id,payload:t,status:`success`})},function(){s.postMessage({id:e.data.id,status:`error`})});else if(e.data.type===`complete`){var n=e.data.animation;s.dataManager.completeData(n),s.postMessage({id:e.data.id,payload:n,status:`success`})}else e.data.type===`loadData`&&s.assetLoader.load(e.data.path,e.data.fullPath,function(t){s.postMessage({id:e.data.id,payload:t,status:`success`})},function(){s.postMessage({id:e.data.id,status:`error`})})}),a.onmessage=function(e){var t=e.data,r=t.id,i=n[r];n[r]=null,t.status===`success`?i.onComplete(t.payload):i.onError&&i.onError()})}function u(e,r){t+=1;var i=`processId_`+t;return n[i]={onComplete:e,onError:r},i}function d(t,n,r){l();var i=u(n,r);a.postMessage({type:`loadAnimation`,path:t,fullPath:e.location.origin+e.location.pathname,id:i})}function f(t,n,r){l();var i=u(n,r);a.postMessage({type:`loadData`,path:t,fullPath:e.location.origin+e.location.pathname,id:i})}function p(e,t,n){l();var r=u(t,n);a.postMessage({type:`complete`,animation:e,id:r})}return{loadAnimation:d,loadData:f,completeAnimation:p}}();function oe(e){for(var t=e.fStyle?e.fStyle.split(` `):[],n=`normal`,r=`normal`,i=t.length,a,o=0;o<i;o+=1)switch(a=t[o].toLowerCase(),a){case`italic`:r=`italic`;break;case`bold`:n=`700`;break;case`black`:n=`900`;break;case`medium`:n=`500`;break;case`regular`:case`normal`:n=`400`;break;case`light`:case`thin`:n=`200`}return{style:r,weight:e.fWeight||n}}var se=function(){var e={w:0,size:0,shapes:[]},t=[];t=t.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var n=[`d83cdffb`,`d83cdffc`,`d83cdffd`,`d83cdffe`,`d83cdfff`],r=[65039,8205];function i(e){var t=e.split(`,`),n,r=t.length,i=[];for(n=0;n<r;n+=1)t[n]!==`sans-serif`&&t[n]!==`monospace`&&i.push(t[n]);return i.join(`,`)}function a(e,t){var n=F(`span`);n.setAttribute(`aria-hidden`,!0),n.style.fontFamily=t;var r=F(`span`);r.innerText=`giItT1WQy@!-/#`,n.style.position=`absolute`,n.style.left=`-10000px`,n.style.top=`-10000px`,n.style.fontSize=`300px`,n.style.fontVariant=`normal`,n.style.fontStyle=`normal`,n.style.fontWeight=`normal`,n.style.letterSpacing=`0`,n.appendChild(r),document.body.appendChild(n);var a=r.offsetWidth;return r.style.fontFamily=i(e)+`, `+t,{node:r,w:a,parent:n}}function o(){var e,t=this.fonts.length,n,r,i=t;for(e=0;e<t;e+=1)this.fonts[e].loaded?--i:this.fonts[e].fOrigin===`n`||this.fonts[e].origin===0?this.fonts[e].loaded=!0:(n=this.fonts[e].monoCase.node,r=this.fonts[e].monoCase.w,n.offsetWidth===r?(n=this.fonts[e].sansCase.node,r=this.fonts[e].sansCase.w,n.offsetWidth!==r&&(--i,this.fonts[e].loaded=!0)):(--i,this.fonts[e].loaded=!0),this.fonts[e].loaded&&(this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));i!==0&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function s(e,t){var n=P(`text`);n.style.fontSize=`100px`;var r=oe(t);n.setAttribute(`font-family`,t.fFamily),n.setAttribute(`font-style`,r.style),n.setAttribute(`font-weight`,r.weight),n.textContent=`1`,t.fClass?(n.style.fontFamily=`inherit`,n.setAttribute(`class`,t.fClass)):n.style.fontFamily=t.fFamily,e.appendChild(n);var i=F(`canvas`).getContext(`2d`);return i.font=t.fWeight+` `+t.fStyle+` 100px `+t.fFamily,n}function c(e,t){if(!e)this.isLoaded=!0;else if(this.chars)this.isLoaded=!0,this.fonts=e.list;else{var n=e.list,r,i=n.length,o=i;for(r=0;r<i;r+=1){var c=!0,l,u;if(n[r].loaded=!1,n[r].monoCase=a(n[r].fFamily,`monospace`),n[r].sansCase=a(n[r].fFamily,`sans-serif`),!n[r].fPath)n[r].loaded=!0,--o;else if(n[r].fOrigin===`p`||n[r].origin===3){if(l=document.querySelectorAll(`style[f-forigin="p"][f-family="`+n[r].fFamily+`"], style[f-origin="3"][f-family="`+n[r].fFamily+`"]`),l.length>0&&(c=!1),c){var d=F(`style`);d.setAttribute(`f-forigin`,n[r].fOrigin),d.setAttribute(`f-origin`,n[r].origin),d.setAttribute(`f-family`,n[r].fFamily),d.type=`text/css`,d.innerText=`@font-face {font-family: `+n[r].fFamily+`; font-style: normal; src: url('`+n[r].fPath+`');}`,t.appendChild(d)}}else if(n[r].fOrigin===`g`||n[r].origin===1){for(l=document.querySelectorAll(`link[f-forigin="g"], link[f-origin="1"]`),u=0;u<l.length;u+=1)l[u].href.indexOf(n[r].fPath)!==-1&&(c=!1);if(c){var f=F(`link`);f.setAttribute(`f-forigin`,n[r].fOrigin),f.setAttribute(`f-origin`,n[r].origin),f.type=`text/css`,f.rel=`stylesheet`,f.href=n[r].fPath,document.body.appendChild(f)}}else if(n[r].fOrigin===`t`||n[r].origin===2){for(l=document.querySelectorAll(`script[f-forigin="t"], script[f-origin="2"]`),u=0;u<l.length;u+=1)n[r].fPath===l[u].src&&(c=!1);if(c){var p=F(`link`);p.setAttribute(`f-forigin`,n[r].fOrigin),p.setAttribute(`f-origin`,n[r].origin),p.setAttribute(`rel`,`stylesheet`),p.setAttribute(`href`,n[r].fPath),t.appendChild(p)}}n[r].helper=s(t,n[r]),n[r].cache={},this.fonts.push(n[r])}o===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}}function l(e){if(e){this.chars||=[];var t,n=e.length,r,i=this.chars.length,a;for(t=0;t<n;t+=1){for(r=0,a=!1;r<i;)this.chars[r].style===e[t].style&&this.chars[r].fFamily===e[t].fFamily&&this.chars[r].ch===e[t].ch&&(a=!0),r+=1;a||(this.chars.push(e[t]),i+=1)}}}function u(t,n,r){for(var i=0,a=this.chars.length;i<a;){if(this.chars[i].ch===t&&this.chars[i].style===n&&this.chars[i].fFamily===r)return this.chars[i];i+=1}return(typeof t==`string`&&t.charCodeAt(0)!==13||!t)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn(`Missing character from exported characters list: `,t,n,r)),e}function d(e,t,n){var r=this.getFontByName(t),i=e.charCodeAt(0);if(!r.cache[i+1]){var a=r.helper;if(e===` `){a.textContent=`|`+e+`|`;var o=a.getComputedTextLength();a.textContent=`||`;var s=a.getComputedTextLength();r.cache[i+1]=(o-s)/100}else a.textContent=e,r.cache[i+1]=a.getComputedTextLength()/100}return r.cache[i+1]*n}function f(e){for(var t=0,n=this.fonts.length;t<n;){if(this.fonts[t].fName===e)return this.fonts[t];t+=1}return this.fonts[0]}function p(e,t){var r=e.toString(16)+t.toString(16);return n.indexOf(r)!==-1}function m(e,t){return t?e===r[0]&&t===r[1]:e===r[1]}function h(e){return t.indexOf(e)!==-1}function g(){this.isLoaded=!0}var _=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};return _.isModifier=p,_.isZeroWidthJoiner=m,_.isCombinedCharacter=h,_.prototype={addChars:l,addFonts:c,getCharData:u,getFontByName:f,measureText:d,checkLoadedFonts:o,setIsLoaded:g},_}(),V=function(){var e=n,t=Math.abs;function r(e,t){var n=this.offsetTime,r;this.propType===`multidimensional`&&(r=M(`float32`,this.pv.length));for(var s=t.lastIndex,c=s,l=this.keyframes.length-1,u=!0,d,f,p;u;){if(d=this.keyframes[c],f=this.keyframes[c+1],c===l-1&&e>=f.t-n){d.h&&(d=f),s=0;break}if(f.t-n>e){s=c;break}c<l-1?c+=1:(s=0,u=!1)}p=this.keyframesMetadata[c]||{};var m,h,g,_,v,y,b=f.t-n,x=d.t-n,S;if(d.to){p.bezierData||(p.bezierData=ie.buildBezierData(d.s,f.s||d.e,d.to,d.ti));var C=p.bezierData;if(e>=b||e<x){var w=e>=b?C.points.length-1:0;for(h=C.points[w].point.length,m=0;m<h;m+=1)r[m]=C.points[w].point[m]}else{p.__fnct?y=p.__fnct:(y=z.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y,d.n).get,p.__fnct=y),g=y((e-x)/(b-x));var T=C.segmentLength*g,E,D=t.lastFrame<e&&t._lastKeyframeIndex===c?t._lastAddedLength:0;for(v=t.lastFrame<e&&t._lastKeyframeIndex===c?t._lastPoint:0,u=!0,_=C.points.length;u;){if(D+=C.points[v].partialLength,T===0||g===0||v===C.points.length-1){for(h=C.points[v].point.length,m=0;m<h;m+=1)r[m]=C.points[v].point[m];break}if(T>=D&&T<D+C.points[v+1].partialLength){for(E=(T-D)/C.points[v+1].partialLength,h=C.points[v].point.length,m=0;m<h;m+=1)r[m]=C.points[v].point[m]+(C.points[v+1].point[m]-C.points[v].point[m])*E;break}v<_-1?v+=1:u=!1}t._lastPoint=v,t._lastAddedLength=D-C.points[v].partialLength,t._lastKeyframeIndex=c}}else{var O,k,A,j,N;if(l=d.s.length,S=f.s||d.e,this.sh&&d.h!==1){if(e>=b)r[0]=S[0],r[1]=S[1],r[2]=S[2];else if(e<=x)r[0]=d.s[0],r[1]=d.s[1],r[2]=d.s[2];else{var P=o(d.s),F=o(S),I=(e-x)/(b-x);a(r,i(P,F,I))}}else for(c=0;c<l;c+=1)d.h!==1&&(e>=b?g=1:e<x?g=0:(d.o.x.constructor===Array?(p.__fnct||(p.__fnct=[]),p.__fnct[c]?y=p.__fnct[c]:(O=d.o.x[c]===void 0?d.o.x[0]:d.o.x[c],k=d.o.y[c]===void 0?d.o.y[0]:d.o.y[c],A=d.i.x[c]===void 0?d.i.x[0]:d.i.x[c],j=d.i.y[c]===void 0?d.i.y[0]:d.i.y[c],y=z.getBezierEasing(O,k,A,j).get,p.__fnct[c]=y)):p.__fnct?y=p.__fnct:(O=d.o.x,k=d.o.y,A=d.i.x,j=d.i.y,y=z.getBezierEasing(O,k,A,j).get,d.keyframeMetadata=y),g=y((e-x)/(b-x)))),S=f.s||d.e,N=d.h===1?d.s[c]:d.s[c]+(S[c]-d.s[c])*g,this.propType===`multidimensional`?r[c]=N:r=N}return t.lastIndex=s,r}function i(e,t,n){var r=[],i=e[0],a=e[1],o=e[2],s=e[3],c=t[0],l=t[1],u=t[2],d=t[3],f,p=i*c+a*l+o*u+s*d,m,h,g;return p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-n)*f)/m,g=Math.sin(n*f)/m):(h=1-n,g=n),r[0]=h*i+g*c,r[1]=h*a+g*l,r[2]=h*o+g*u,r[3]=h*s+g*d,r}function a(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=Math.atan2(2*r*a-2*n*i,1-2*r*r-2*i*i),s=Math.asin(2*n*r+2*i*a),c=Math.atan2(2*n*a-2*r*i,1-2*n*n-2*i*i);e[0]=o/h,e[1]=s/h,e[2]=c/h}function o(e){var t=e[0]*h,n=e[1]*h,r=e[2]*h,i=Math.cos(t/2),a=Math.cos(n/2),o=Math.cos(r/2),s=Math.sin(t/2),c=Math.sin(n/2),l=Math.sin(r/2),u=i*a*o-s*c*l;return[s*c*o+i*a*l,s*a*o+i*c*l,i*c*o-s*a*l,u]}function s(){var t=this.comp.renderedFrame-this.offsetTime,n=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==e&&(this._caching.lastFrame>=r&&t>=r||this._caching.lastFrame<n&&t<n))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(t,this._caching);this.pv=i}return this._caching.lastFrame=t,this.pv}function c(e){var n;if(this.propType===`unidimensional`)n=e*this.mult,t(this.v-n)>1e-5&&(this.v=n,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)n=e[r]*this.mult,t(this.v[r]-n)>1e-5&&(this.v[r]=n,this._mdf=!0),r+=1}function l(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length){if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=this._isFirstFrame;var e,t=this.effectsSequence.length,n=this.kf?this.pv:this.data.k;for(e=0;e<t;e+=1)n=this.effectsSequence[e](n);this.setVValue(n),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}}function u(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}function d(e,t,n,r){this.propType=`unidimensional`,this.mult=n||1,this.data=t,this.v=n?t.k*n:t.k,this.pv=t.k,this._mdf=!1,this.elem=e,this.container=r,this.comp=e.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=l,this.setVValue=c,this.addEffect=u}function f(e,t,n,r){this.propType=`multidimensional`,this.mult=n||1,this.data=t,this._mdf=!1,this.elem=e,this.container=r,this.comp=e.comp,this.k=!1,this.kf=!1,this.frameId=-1;var i,a=t.k.length;for(this.v=M(`float32`,a),this.pv=M(`float32`,a),this.vel=M(`float32`,a),i=0;i<a;i+=1)this.v[i]=t.k[i]*this.mult,this.pv[i]=t.k[i];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=l,this.setVValue=c,this.addEffect=u}function p(t,n,i,a){this.propType=`unidimensional`,this.keyframes=n.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:e,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=n,this.mult=i||1,this.elem=t,this.container=a,this.comp=t.comp,this.v=e,this.pv=e,this._isFirstFrame=!0,this.getValue=l,this.setVValue=c,this.interpolateValue=r,this.effectsSequence=[s.bind(this)],this.addEffect=u}function m(t,n,i,a){this.propType=`multidimensional`;var o,d=n.k.length,f,p,m,h;for(o=0;o<d-1;o+=1)n.k[o].to&&n.k[o].s&&n.k[o+1]&&n.k[o+1].s&&(f=n.k[o].s,p=n.k[o+1].s,m=n.k[o].to,h=n.k[o].ti,(f.length===2&&(f[0]!==p[0]||f[1]!==p[1])&&ie.pointOnLine2D(f[0],f[1],p[0],p[1],f[0]+m[0],f[1]+m[1])&&ie.pointOnLine2D(f[0],f[1],p[0],p[1],p[0]+h[0],p[1]+h[1])||f.length===3&&(f[0]!==p[0]||f[1]!==p[1]||f[2]!==p[2])&&ie.pointOnLine3D(f[0],f[1],f[2],p[0],p[1],p[2],f[0]+m[0],f[1]+m[1],f[2]+m[2])&&ie.pointOnLine3D(f[0],f[1],f[2],p[0],p[1],p[2],p[0]+h[0],p[1]+h[1],p[2]+h[2]))&&(n.k[o].to=null,n.k[o].ti=null),f[0]===p[0]&&f[1]===p[1]&&m[0]===0&&m[1]===0&&h[0]===0&&h[1]===0&&(f.length===2||f[2]===p[2]&&m[2]===0&&h[2]===0)&&(n.k[o].to=null,n.k[o].ti=null));this.effectsSequence=[s.bind(this)],this.data=n,this.keyframes=n.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=t,this.container=a,this.comp=t.comp,this.getValue=l,this.setVValue=c,this.interpolateValue=r,this.frameId=-1;var g=n.k[0].s.length;for(this.v=M(`float32`,g),this.pv=M(`float32`,g),o=0;o<g;o+=1)this.v[o]=e,this.pv[o]=e;this._caching={lastFrame:e,lastIndex:0,value:M(`float32`,g)},this.addEffect=u}function g(e,t,n,r,i){var a;if(!t.k.length)a=new d(e,t,r,i);else if(typeof t.k[0]==`number`)a=new f(e,t,r,i);else switch(n){case 0:a=new p(e,t,r,i);break;case 1:a=new m(e,t,r,i)}return a.effectsSequence.length&&i.addDynamicProperty(a),a}return{getProp:g}}(),ce=function(){var e=[0,0];function t(e){var t=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||t,this.a&&e.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&e.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&e.skewFromAxis(-this.sk.v,this.sa.v),this.r?e.rotate(-this.r.v):e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?e.translate(this.px.v,this.py.v,-this.pz.v):e.translate(this.px.v,this.py.v,0):e.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function n(t){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&=(this.precalculateMatrix(),!1),this.iterateDynamicProperties(),this._mdf||t){var n;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var r,i;if(n=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(r=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/n,0),i=this.p.getValueAtTime(this.p.keyframes[0].t/n,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(r=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/n,0),i=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/n,0)):(r=this.p.pv,i=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/n,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){r=[],i=[];var a=this.px,o=this.py;a._caching.lastFrame+a.offsetTime<=a.keyframes[0].t?(r[0]=a.getValueAtTime((a.keyframes[0].t+.01)/n,0),r[1]=o.getValueAtTime((o.keyframes[0].t+.01)/n,0),i[0]=a.getValueAtTime(a.keyframes[0].t/n,0),i[1]=o.getValueAtTime(o.keyframes[0].t/n,0)):a._caching.lastFrame+a.offsetTime>=a.keyframes[a.keyframes.length-1].t?(r[0]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/n,0),r[1]=o.getValueAtTime(o.keyframes[o.keyframes.length-1].t/n,0),i[0]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/n,0),i[1]=o.getValueAtTime((o.keyframes[o.keyframes.length-1].t-.01)/n,0)):(r=[a.pv,o.pv],i[0]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/n,a.offsetTime),i[1]=o.getValueAtTime((o._caching.lastFrame+o.offsetTime-.01)/n,o.offsetTime))}else i=e,r=i;this.v.rotate(-Math.atan2(r[1]-i[1],r[0]-i[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function r(){if(!this.a.k)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk){if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function i(){}function a(e){this._addDynamicProperty(e),this.elem.addDynamicProperty(e),this._isDirty=!0}function o(e,t,n){if(this.elem=e,this.frameId=-1,this.propType=`transform`,this.data=t,this.v=new R,this.pre=new R,this.appliedTransformations=0,this.initDynamicPropertyContainer(n||e),t.p&&t.p.s?(this.px=V.getProp(e,t.p.x,0,0,this),this.py=V.getProp(e,t.p.y,0,0,this),t.p.z&&(this.pz=V.getProp(e,t.p.z,0,0,this))):this.p=V.getProp(e,t.p||{k:[0,0,0]},1,0,this),t.rx){if(this.rx=V.getProp(e,t.rx,0,h,this),this.ry=V.getProp(e,t.ry,0,h,this),this.rz=V.getProp(e,t.rz,0,h,this),t.or.k[0].ti){var r,i=t.or.k.length;for(r=0;r<i;r+=1)t.or.k[r].to=null,t.or.k[r].ti=null}this.or=V.getProp(e,t.or,1,h,this),this.or.sh=!0}else this.r=V.getProp(e,t.r||{k:0},0,h,this);t.sk&&(this.sk=V.getProp(e,t.sk,0,h,this),this.sa=V.getProp(e,t.sa,0,h,this)),this.a=V.getProp(e,t.a||{k:[0,0,0]},1,0,this),this.s=V.getProp(e,t.s||{k:[100,100,100]},1,.01,this),this.o=t.o?V.getProp(e,t.o,0,.01,e):{_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}o.prototype={applyToMatrix:t,getValue:n,precalculateMatrix:r,autoOrient:i},B([I],o),o.prototype.addDynamicProperty=a,o.prototype._addDynamicProperty=I.prototype.addDynamicProperty;function s(e,t,n){return new o(e,t,n)}return{getTransformProperty:s}}();function H(){this.c=!1,this._length=0,this._maxLength=8,this.v=N(this._maxLength),this.o=N(this._maxLength),this.i=N(this._maxLength)}H.prototype.setPathData=function(e,t){this.c=e,this.setLength(t);for(var n=0;n<t;)this.v[n]=Te.newElement(),this.o[n]=Te.newElement(),this.i[n]=Te.newElement(),n+=1},H.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},H.prototype.doubleArrayLength=function(){this.v=this.v.concat(N(this._maxLength)),this.i=this.i.concat(N(this._maxLength)),this.o=this.o.concat(N(this._maxLength)),this._maxLength*=2},H.prototype.setXYAt=function(e,t,n,r,i){var a;switch(this._length=Math.max(this._length,r+1),this._length>=this._maxLength&&this.doubleArrayLength(),n){case`v`:a=this.v;break;case`i`:a=this.i;break;case`o`:a=this.o;break;default:a=[]}(!a[r]||a[r]&&!i)&&(a[r]=Te.newElement()),a[r][0]=e,a[r][1]=t},H.prototype.setTripleAt=function(e,t,n,r,i,a,o,s){this.setXYAt(e,t,`v`,o,s),this.setXYAt(n,r,`o`,o,s),this.setXYAt(i,a,`i`,o,s)},H.prototype.reverse=function(){var e=new H;e.setPathData(this.c,this._length);var t=this.v,n=this.o,r=this.i,i=0;this.c&&(e.setTripleAt(t[0][0],t[0][1],r[0][0],r[0][1],n[0][0],n[0][1],0,!1),i=1);for(var a=this._length-1,o=this._length,s=i;s<o;s+=1)e.setTripleAt(t[a][0],t[a][1],r[a][0],r[a][1],n[a][0],n[a][1],s,!1),--a;return e};var le=function(){var e=-999999;function t(e,t,n){var r=n.lastIndex,i,a,o,s,c,l,u,d,f,p=this.keyframes;if(e<p[0].t-this.offsetTime)i=p[0].s[0],o=!0,r=0;else if(e>=p[p.length-1].t-this.offsetTime)i=p[p.length-1].s?p[p.length-1].s[0]:p[p.length-2].e[0],o=!0;else{for(var m=r,h=p.length-1,g=!0,_,v,y;g&&(_=p[m],v=p[m+1],!(v.t-this.offsetTime>e));)m<h-1?m+=1:g=!1;if(y=this.keyframesMetadata[m]||{},o=_.h===1,r=m,!o){if(e>=v.t-this.offsetTime)d=1;else if(e<_.t-this.offsetTime)d=0;else{var b;y.__fnct?b=y.__fnct:(b=z.getBezierEasing(_.o.x,_.o.y,_.i.x,_.i.y).get,y.__fnct=b),d=b((e-(_.t-this.offsetTime))/(v.t-this.offsetTime-(_.t-this.offsetTime)))}a=v.s?v.s[0]:_.e[0]}i=_.s[0]}for(l=t._length,u=i.i[0].length,n.lastIndex=r,s=0;s<l;s+=1)for(c=0;c<u;c+=1)f=o?i.i[s][c]:i.i[s][c]+(a.i[s][c]-i.i[s][c])*d,t.i[s][c]=f,f=o?i.o[s][c]:i.o[s][c]+(a.o[s][c]-i.o[s][c])*d,t.o[s][c]=f,f=o?i.v[s][c]:i.v[s][c]+(a.v[s][c]-i.v[s][c])*d,t.v[s][c]=f}function n(){var t=this.comp.renderedFrame-this.offsetTime,n=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime,i=this._caching.lastFrame;return i!==e&&(i<n&&t<n||i>r&&t>r)||(this._caching.lastIndex=i<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}function r(){this.paths=this.localShapeCollection}function i(e,t){if(e._length!==t._length||e.c!==t.c)return!1;var n,r=e._length;for(n=0;n<r;n+=1)if(e.v[n][0]!==t.v[n][0]||e.v[n][1]!==t.v[n][1]||e.o[n][0]!==t.o[n][0]||e.o[n][1]!==t.o[n][1]||e.i[n][0]!==t.i[n][0]||e.i[n][1]!==t.i[n][1])return!1;return!0}function a(e){i(this.v,e)||(this.v=Ee.clone(e),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function o(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length)this._mdf=!1;else if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=!1;var e=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k,t,n=this.effectsSequence.length;for(t=0;t<n;t+=1)e=this.effectsSequence[t](e);this.setVValue(e),this.lock=!1,this.frameId=this.elem.globalData.frameId}}}function s(e,t,n){this.propType=`shape`,this.comp=e.comp,this.container=e,this.elem=e,this.data=t,this.k=!1,this.kf=!1,this._mdf=!1;var i=n===3?t.pt.k:t.ks.k;this.v=Ee.clone(i),this.pv=Ee.clone(this.v),this.localShapeCollection=De.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=r,this.effectsSequence=[]}function c(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}s.prototype.interpolateShape=t,s.prototype.getValue=o,s.prototype.setVValue=a,s.prototype.addEffect=c;function l(t,i,a){this.propType=`shape`,this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=a===3?i.pt.k:i.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var o=this.keyframes[0].s[0].i.length;this.v=Ee.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,o),this.pv=Ee.clone(this.v),this.localShapeCollection=De.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=r,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[n.bind(this)]}l.prototype.getValue=o,l.prototype.interpolateShape=t,l.prototype.setVValue=a,l.prototype.addEffect=c;var u=function(){var e=g;function t(e,t){this.v=Ee.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=De.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=t.d,this.elem=e,this.comp=e.comp,this.frameId=-1,this.initDynamicPropertyContainer(e),this.p=V.getProp(e,t.p,1,0,this),this.s=V.getProp(e,t.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return t.prototype={reset:r,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var t=this.p.v[0],n=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,a=this.d!==3,o=this.v;o.v[0][0]=t,o.v[0][1]=n-i,o.v[1][0]=a?t+r:t-r,o.v[1][1]=n,o.v[2][0]=t,o.v[2][1]=n+i,o.v[3][0]=a?t-r:t+r,o.v[3][1]=n,o.i[0][0]=a?t-r*e:t+r*e,o.i[0][1]=n-i,o.i[1][0]=a?t+r:t-r,o.i[1][1]=n-i*e,o.i[2][0]=a?t+r*e:t-r*e,o.i[2][1]=n+i,o.i[3][0]=a?t-r:t+r,o.i[3][1]=n+i*e,o.o[0][0]=a?t+r*e:t-r*e,o.o[0][1]=n-i,o.o[1][0]=a?t+r:t-r,o.o[1][1]=n+i*e,o.o[2][0]=a?t-r*e:t+r*e,o.o[2][1]=n+i,o.o[3][0]=a?t-r:t+r,o.o[3][1]=n-i*e}},B([I],t),t}(),f=function(){function e(e,t){this.v=Ee.newElement(),this.v.setPathData(!0,0),this.elem=e,this.comp=e.comp,this.data=t,this.frameId=-1,this.d=t.d,this.initDynamicPropertyContainer(e),t.sy===1?(this.ir=V.getProp(e,t.ir,0,0,this),this.is=V.getProp(e,t.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=V.getProp(e,t.pt,0,0,this),this.p=V.getProp(e,t.p,1,0,this),this.r=V.getProp(e,t.r,0,h,this),this.or=V.getProp(e,t.or,0,0,this),this.os=V.getProp(e,t.os,0,.01,this),this.localShapeCollection=De.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return e.prototype={reset:r,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var e=Math.floor(this.pt.v)*2,t=Math.PI*2/e,n=!0,r=this.or.v,i=this.ir.v,a=this.os.v,o=this.is.v,s=2*Math.PI*r/(e*2),c=2*Math.PI*i/(e*2),l,u,d,f,p=-Math.PI/2;p+=this.r.v;var m=this.data.d===3?-1:1;for(this.v._length=0,l=0;l<e;l+=1){u=n?r:i,d=n?a:o,f=n?s:c;var h=u*Math.cos(p),g=u*Math.sin(p),_=h===0&&g===0?0:g/Math.sqrt(h*h+g*g),v=h===0&&g===0?0:-h/Math.sqrt(h*h+g*g);h+=+this.p.v[0],g+=+this.p.v[1],this.v.setTripleAt(h,g,h-_*f*d*m,g-v*f*d*m,h+_*f*d*m,g+v*f*d*m,l,!0),n=!n,p+=t*m}},convertPolygonToPath:function(){var e=Math.floor(this.pt.v),t=Math.PI*2/e,n=this.or.v,r=this.os.v,i=2*Math.PI*n/(e*4),a,o=-Math.PI*.5,s=this.data.d===3?-1:1;for(o+=this.r.v,this.v._length=0,a=0;a<e;a+=1){var c=n*Math.cos(o),l=n*Math.sin(o),u=c===0&&l===0?0:l/Math.sqrt(c*c+l*l),d=c===0&&l===0?0:-c/Math.sqrt(c*c+l*l);c+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(c,l,c-u*i*r*s,l-d*i*r*s,c+u*i*r*s,l+d*i*r*s,a,!0),o+=t*s}this.paths.length=0,this.paths[0]=this.v}},B([I],e),e}(),p=function(){function e(e,t){this.v=Ee.newElement(),this.v.c=!0,this.localShapeCollection=De.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=e,this.comp=e.comp,this.frameId=-1,this.d=t.d,this.initDynamicPropertyContainer(e),this.p=V.getProp(e,t.p,1,0,this),this.s=V.getProp(e,t.s,1,0,this),this.r=V.getProp(e,t.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return e.prototype={convertRectToPath:function(){var e=this.p.v[0],t=this.p.v[1],n=this.s.v[0]/2,r=this.s.v[1]/2,i=d(n,r,this.r.v),a=i*(1-g);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(e+n,t-r+i,e+n,t-r+i,e+n,t-r+a,0,!0),this.v.setTripleAt(e+n,t+r-i,e+n,t+r-a,e+n,t+r-i,1,!0),i===0?(this.v.setTripleAt(e-n,t+r,e-n+a,t+r,e-n,t+r,2),this.v.setTripleAt(e-n,t-r,e-n,t-r+a,e-n,t-r,3)):(this.v.setTripleAt(e+n-i,t+r,e+n-i,t+r,e+n-a,t+r,2,!0),this.v.setTripleAt(e-n+i,t+r,e-n+a,t+r,e-n+i,t+r,3,!0),this.v.setTripleAt(e-n,t+r-i,e-n,t+r-i,e-n,t+r-a,4,!0),this.v.setTripleAt(e-n,t-r+i,e-n,t-r+a,e-n,t-r+i,5,!0),this.v.setTripleAt(e-n+i,t-r,e-n+i,t-r,e-n+a,t-r,6,!0),this.v.setTripleAt(e+n-i,t-r,e+n-a,t-r,e+n-i,t-r,7,!0))):(this.v.setTripleAt(e+n,t-r+i,e+n,t-r+a,e+n,t-r+i,0,!0),i===0?(this.v.setTripleAt(e-n,t-r,e-n+a,t-r,e-n,t-r,1,!0),this.v.setTripleAt(e-n,t+r,e-n,t+r-a,e-n,t+r,2,!0),this.v.setTripleAt(e+n,t+r,e+n-a,t+r,e+n,t+r,3,!0)):(this.v.setTripleAt(e+n-i,t-r,e+n-i,t-r,e+n-a,t-r,1,!0),this.v.setTripleAt(e-n+i,t-r,e-n+a,t-r,e-n+i,t-r,2,!0),this.v.setTripleAt(e-n,t-r+i,e-n,t-r+i,e-n,t-r+a,3,!0),this.v.setTripleAt(e-n,t+r-i,e-n,t+r-a,e-n,t+r-i,4,!0),this.v.setTripleAt(e-n+i,t+r,e-n+i,t+r,e-n+a,t+r,5,!0),this.v.setTripleAt(e+n-i,t+r,e+n-a,t+r,e+n-i,t+r,6,!0),this.v.setTripleAt(e+n,t+r-i,e+n,t+r-i,e+n,t+r-a,7,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:r},B([I],e),e}();function m(e,t,n){var r;return n===3||n===4?r=(n===3?t.pt:t.ks).k.length?new l(e,t,n):new s(e,t,n):n===5?r=new p(e,t):n===6?r=new u(e,t):n===7&&(r=new f(e,t)),r.k&&e.addDynamicProperty(r),r}function _(){return s}function v(){return l}var y={};return y.getShapeProp=m,y.getConstructorFunction=_,y.getKeyframedConstructorFunction=v,y}(),U=function(){var e={},t={};e.registerModifier=n,e.getModifier=r;function n(e,n){t[e]||(t[e]=n)}function r(e,n,r){return new t[e](n,r)}return e}();function W(){}W.prototype.initModifierProperties=function(){},W.prototype.addShapeToModifier=function(){},W.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var t={shape:e.sh,data:e,localShapeCollection:De.newShapeCollection()};this.shapes.push(t),this.addShapeToModifier(t),this._isAnimated&&e.setAsAnimated()}},W.prototype.init=function(e,t){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t),this.frameId=n,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},W.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},B([I],W);function G(){}B([W],G),G.prototype.initModifierProperties=function(e,t){this.s=V.getProp(e,t.s,0,.01,this),this.e=V.getProp(e,t.e,0,.01,this),this.o=V.getProp(e,t.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=t.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},G.prototype.addShapeToModifier=function(e){e.pathsData=[]},G.prototype.calculateShapeEdges=function(e,t,n,r,i){var a=[];t<=1?a.push({s:e,e:t}):e>=1?a.push({s:e-1,e:t-1}):(a.push({s:e,e:1}),a.push({s:0,e:t-1}));var o=[],s,c=a.length,l;for(s=0;s<c;s+=1)if(l=a[s],!(l.e*i<r||l.s*i>r+n)){var u=l.s*i<=r?0:(l.s*i-r)/n,d=l.e*i>=r+n?1:(l.e*i-r)/n;o.push([u,d])}return o.length||o.push([0,0]),o},G.prototype.releasePathsData=function(e){var t,n=e.length;for(t=0;t<n;t+=1)Oe.release(e[t]);return e.length=0,e},G.prototype.processShapes=function(e){var t,n;if(this._mdf||e){var r=this.o.v%360/360;if(r<0&&(r+=1),t=this.s.v>1?1+r:this.s.v<0?0+r:this.s.v+r,n=this.e.v>1?1+r:this.e.v<0?0+r:this.e.v+r,t>n){var i=t;t=n,n=i}t=Math.round(t*1e4)*1e-4,n=Math.round(n*1e4)*1e-4,this.sValue=t,this.eValue=n}else t=this.sValue,n=this.eValue;var a,o,s=this.shapes.length,c,l,u,d,f,p=0;if(n===t)for(o=0;o<s;o+=1)this.shapes[o].localShapeCollection.releaseShapes(),this.shapes[o].shape._mdf=!0,this.shapes[o].shape.paths=this.shapes[o].localShapeCollection,this._mdf&&(this.shapes[o].pathsData.length=0);else if(!(n===1&&t===0||n===0&&t===1)){var m=[],h,g;for(o=0;o<s;o+=1)if(h=this.shapes[o],!h.shape._mdf&&!this._mdf&&!e&&this.m!==2)h.shape.paths=h.localShapeCollection;else{if(a=h.shape.paths,l=a._length,f=0,!h.shape._mdf&&h.pathsData.length)f=h.totalShapeLength;else{for(u=this.releasePathsData(h.pathsData),c=0;c<l;c+=1)d=ie.getSegmentsLength(a.shapes[c]),u.push(d),f+=d.totalLength;h.totalShapeLength=f,h.pathsData=u}p+=f,h.shape._mdf=!0}var _=t,v=n,y=0,b;for(o=s-1;o>=0;--o)if(h=this.shapes[o],h.shape._mdf){for(g=h.localShapeCollection,g.releaseShapes(),this.m===2&&s>1?(b=this.calculateShapeEdges(t,n,h.totalShapeLength,y,p),y+=h.totalShapeLength):b=[[_,v]],l=b.length,c=0;c<l;c+=1){_=b[c][0],v=b[c][1],m.length=0,v<=1?m.push({s:h.totalShapeLength*_,e:h.totalShapeLength*v}):_>=1?m.push({s:h.totalShapeLength*(_-1),e:h.totalShapeLength*(v-1)}):(m.push({s:h.totalShapeLength*_,e:h.totalShapeLength}),m.push({s:0,e:h.totalShapeLength*(v-1)}));var x=this.addShapes(h,m[0]);if(m[0].s!==m[0].e){if(m.length>1){if(h.shape.paths.shapes[h.shape.paths._length-1].c){var S=x.pop();this.addPaths(x,g),x=this.addShapes(h,m[1],S)}else this.addPaths(x,g),x=this.addShapes(h,m[1])}this.addPaths(x,g)}}h.shape.paths=g}}else if(this._mdf)for(o=0;o<s;o+=1)this.shapes[o].pathsData.length=0,this.shapes[o].shape._mdf=!0},G.prototype.addPaths=function(e,t){var n,r=e.length;for(n=0;n<r;n+=1)t.addShape(e[n])},G.prototype.addSegment=function(e,t,n,r,i,a,o){i.setXYAt(t[0],t[1],`o`,a),i.setXYAt(n[0],n[1],`i`,a+1),o&&i.setXYAt(e[0],e[1],`v`,a),i.setXYAt(r[0],r[1],`v`,a+1)},G.prototype.addSegmentFromArray=function(e,t,n,r){t.setXYAt(e[1],e[5],`o`,n),t.setXYAt(e[2],e[6],`i`,n+1),r&&t.setXYAt(e[0],e[4],`v`,n),t.setXYAt(e[3],e[7],`v`,n+1)},G.prototype.addShapes=function(e,t,n){var r=e.pathsData,i=e.shape.paths.shapes,a,o=e.shape.paths._length,s,c,l=0,u,d,f,p,m=[],h,g=!0;for(n?(d=n._length,h=n._length):(n=Ee.newElement(),d=0,h=0),m.push(n),a=0;a<o;a+=1){for(f=r[a].lengths,n.c=i[a].c,c=i[a].c?f.length:f.length+1,s=1;s<c;s+=1)if(u=f[s-1],l+u.addedLength<t.s)l+=u.addedLength,n.c=!1;else if(l>t.e){n.c=!1;break}else t.s<=l&&t.e>=l+u.addedLength?(this.addSegment(i[a].v[s-1],i[a].o[s-1],i[a].i[s],i[a].v[s],n,d,g),g=!1):(p=ie.getNewSegment(i[a].v[s-1],i[a].v[s],i[a].o[s-1],i[a].i[s],(t.s-l)/u.addedLength,(t.e-l)/u.addedLength,f[s-1]),this.addSegmentFromArray(p,n,d,g),g=!1,n.c=!1),l+=u.addedLength,d+=1;if(i[a].c&&f.length){if(u=f[s-1],l<=t.e){var _=f[s-1].addedLength;t.s<=l&&t.e>=l+_?(this.addSegment(i[a].v[s-1],i[a].o[s-1],i[a].i[0],i[a].v[0],n,d,g),g=!1):(p=ie.getNewSegment(i[a].v[s-1],i[a].v[0],i[a].o[s-1],i[a].i[0],(t.s-l)/_,(t.e-l)/_,f[s-1]),this.addSegmentFromArray(p,n,d,g),g=!1,n.c=!1)}else n.c=!1;l+=u.addedLength,d+=1}if(n._length&&(n.setXYAt(n.v[h][0],n.v[h][1],`i`,h),n.setXYAt(n.v[n._length-1][0],n.v[n._length-1][1],`o`,n._length-1)),l>t.e)break;a<o-1&&(n=Ee.newElement(),g=!0,m.push(n),d=0)}return m},U.registerModifier(`tm`,G);function ue(){}B([W],ue),ue.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.rd=V.getProp(e,t.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},ue.prototype.processPath=function(e,t){var n=Ee.newElement();n.c=e.c;var r,i=e._length,a,o,s,c,l,u,d=0,f,p,m,h,_,v;for(r=0;r<i;r+=1)a=e.v[r],s=e.o[r],o=e.i[r],a[0]===s[0]&&a[1]===s[1]&&a[0]===o[0]&&a[1]===o[1]?(r===0||r===i-1)&&!e.c?(n.setTripleAt(a[0],a[1],s[0],s[1],o[0],o[1],d),d+=1):(c=r===0?e.v[i-1]:e.v[r-1],l=Math.sqrt((a[0]-c[0])**2+(a[1]-c[1])**2),u=l?Math.min(l/2,t)/l:0,_=a[0]+(c[0]-a[0])*u,f=_,v=a[1]-(a[1]-c[1])*u,p=v,m=f-(f-a[0])*g,h=p-(p-a[1])*g,n.setTripleAt(f,p,m,h,_,v,d),d+=1,c=r===i-1?e.v[0]:e.v[r+1],l=Math.sqrt((a[0]-c[0])**2+(a[1]-c[1])**2),u=l?Math.min(l/2,t)/l:0,m=a[0]+(c[0]-a[0])*u,f=m,h=a[1]+(c[1]-a[1])*u,p=h,_=f-(f-a[0])*g,v=p-(p-a[1])*g,n.setTripleAt(f,p,m,h,_,v,d),d+=1):(n.setTripleAt(e.v[r][0],e.v[r][1],e.o[r][0],e.o[r][1],e.i[r][0],e.i[r][1],d),d+=1);return n},ue.prototype.processShapes=function(e){var t,n,r=this.shapes.length,i,a,o=this.rd.v;if(o!==0){var s,c;for(n=0;n<r;n+=1){if(s=this.shapes[n],c=s.localShapeCollection,s.shape._mdf||this._mdf||e)for(c.releaseShapes(),s.shape._mdf=!0,t=s.shape.paths.shapes,a=s.shape.paths._length,i=0;i<a;i+=1)c.addShape(this.processPath(t[i],o));s.shape.paths=s.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},U.registerModifier(`rd`,ue);function de(){}B([W],de),de.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amount=V.getProp(e,t.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},de.prototype.processPath=function(e,t){var n=t/100,r=[0,0],i=e._length,a=0;for(a=0;a<i;a+=1)r[0]+=e.v[a][0],r[1]+=e.v[a][1];r[0]/=i,r[1]/=i;var o=Ee.newElement();o.c=e.c;var s,c,l,u,d,f;for(a=0;a<i;a+=1)s=e.v[a][0]+(r[0]-e.v[a][0])*n,c=e.v[a][1]+(r[1]-e.v[a][1])*n,l=e.o[a][0]+(r[0]-e.o[a][0])*-n,u=e.o[a][1]+(r[1]-e.o[a][1])*-n,d=e.i[a][0]+(r[0]-e.i[a][0])*-n,f=e.i[a][1]+(r[1]-e.i[a][1])*-n,o.setTripleAt(s,c,l,u,d,f,a);return o},de.prototype.processShapes=function(e){var t,n,r=this.shapes.length,i,a,o=this.amount.v;if(o!==0){var s,c;for(n=0;n<r;n+=1){if(s=this.shapes[n],c=s.localShapeCollection,s.shape._mdf||this._mdf||e)for(c.releaseShapes(),s.shape._mdf=!0,t=s.shape.paths.shapes,a=s.shape.paths._length,i=0;i<a;i+=1)c.addShape(this.processPath(t[i],o));s.shape.paths=s.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},U.registerModifier(`pb`,de);function K(){}B([W],K),K.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.c=V.getProp(e,t.c,0,null,this),this.o=V.getProp(e,t.o,0,null,this),this.tr=ce.getTransformProperty(e,t.tr,this),this.so=V.getProp(e,t.tr.so,0,.01,this),this.eo=V.getProp(e,t.tr.eo,0,.01,this),this.data=t,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new R,this.rMatrix=new R,this.sMatrix=new R,this.tMatrix=new R,this.matrix=new R},K.prototype.applyTransforms=function(e,t,n,r,i,a){var o=a?-1:1,s=r.s.v[0]+(1-r.s.v[0])*(1-i),c=r.s.v[1]+(1-r.s.v[1])*(1-i);e.translate(r.p.v[0]*o*i,r.p.v[1]*o*i,r.p.v[2]),t.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),t.rotate(-r.r.v*o*i),t.translate(r.a.v[0],r.a.v[1],r.a.v[2]),n.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),n.scale(a?1/s:s,a?1/c:c),n.translate(r.a.v[0],r.a.v[1],r.a.v[2])},K.prototype.init=function(e,t,n,r){for(this.elem=e,this.arr=t,this.pos=n,this.elemsData=r,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t[n]);n>0;)--n,this._elements.unshift(t[n]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},K.prototype.resetElements=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t]._processed=!1,e[t].ty===`gr`&&this.resetElements(e[t].it)},K.prototype.cloneElements=function(e){var t=JSON.parse(JSON.stringify(e));return this.resetElements(t),t},K.prototype.changeGroupRender=function(e,t){var n,r=e.length;for(n=0;n<r;n+=1)e[n]._render=t,e[n].ty===`gr`&&this.changeGroupRender(e[n].it,t)},K.prototype.processShapes=function(e){var t,n,r,i,a,o=!1;if(this._mdf||e){var s=Math.ceil(this.c.v);if(this._groups.length<s){for(;this._groups.length<s;){var c={it:this.cloneElements(this._elements),ty:`gr`};c.it.push({a:{a:0,ix:1,k:[0,0]},nm:`Transform`,o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:`tr`}),this.arr.splice(0,0,c),this._groups.splice(0,0,c),this._currentCopies+=1}this.elem.reloadShapes(),o=!0}a=0;var l;for(r=0;r<=this._groups.length-1;r+=1){if(l=a<s,this._groups[r]._render=l,this.changeGroupRender(this._groups[r].it,l),!l){var u=this.elemsData[r].it,d=u[u.length-1];d.transform.op.v===0?d.transform.op._mdf=!1:(d.transform.op._mdf=!0,d.transform.op.v=0)}a+=1}this._currentCopies=s;var f=this.o.v,p=f%1,m=f>0?Math.floor(f):Math.ceil(f),h=this.pMatrix.props,g=this.rMatrix.props,_=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v=0;if(f>0){for(;v<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),v+=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,p,!1),v+=p)}else if(f<0){for(;v>m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),--v;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-p,!0),v-=p)}r=this.data.m===1?0:this._currentCopies-1,i=this.data.m===1?1:-1,a=this._currentCopies;for(var y,b;a;){if(t=this.elemsData[r].it,n=t[t.length-1].transform.mProps.v.props,b=n.length,t[t.length-1].transform.mProps._mdf=!0,t[t.length-1].transform.op._mdf=!0,t[t.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(r/(this._currentCopies-1)),v!==0){for((r!==0&&i===1||r!==this._currentCopies-1&&i===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(_[0],_[1],_[2],_[3],_[4],_[5],_[6],_[7],_[8],_[9],_[10],_[11],_[12],_[13],_[14],_[15]),this.matrix.transform(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13],h[14],h[15]),y=0;y<b;y+=1)n[y]=this.matrix.props[y];this.matrix.reset()}else for(this.matrix.reset(),y=0;y<b;y+=1)n[y]=this.matrix.props[y];v+=1,--a,r+=i}}else for(a=this._currentCopies,r=0,i=1;a;)t=this.elemsData[r].it,n=t[t.length-1].transform.mProps.v.props,t[t.length-1].transform.mProps._mdf=!1,t[t.length-1].transform.op._mdf=!1,--a,r+=i;return o},K.prototype.addShape=function(){},U.registerModifier(`rp`,K);function fe(){this._length=0,this._maxLength=4,this.shapes=N(this._maxLength)}fe.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(N(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},fe.prototype.releaseShapes=function(){for(var e=0;e<this._length;e+=1)Ee.release(this.shapes[e]);this._length=0};function q(e,t,n,r){this.elem=e,this.frameId=-1,this.dataProps=N(t.length),this.renderer=n,this.k=!1,this.dashStr=``,this.dashArray=M(`float32`,t.length?t.length-1:0),this.dashoffset=M(`float32`,1),this.initDynamicPropertyContainer(r);var i,a=t.length||0,o;for(i=0;i<a;i+=1)o=V.getProp(e,t[i].v,0,0,this),this.k=o.k||this.k,this.dataProps[i]={n:t[i].n,p:o};this.k||this.getValue(!0),this._isAnimated=this.k}q.prototype.getValue=function(e){if((this.elem.globalData.frameId!==this.frameId||e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var t=0,n=this.dataProps.length;for(this.renderer===`svg`&&(this.dashStr=``),t=0;t<n;t+=1)this.dataProps[t].n===`o`?this.dashoffset[0]=this.dataProps[t].p.v:this.renderer===`svg`?this.dashStr+=` `+this.dataProps[t].p.v:this.dashArray[t]=this.dataProps[t].p.v}},B([I],q);function pe(e,t,n){this.data=t,this.c=M(`uint8c`,t.p*4);var r=t.k.k[0].s?t.k.k[0].s.length-t.p*4:t.k.k.length-t.p*4;this.o=M(`float32`,r),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=r,this.initDynamicPropertyContainer(n),this.prop=V.getProp(e,t.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}pe.prototype.comparePoints=function(e,t){for(var n=0,r=this.o.length/2,i;n<r;){if(i=Math.abs(e[n*4]-e[t*4+n*2]),i>.01)return!1;n+=1}return!0},pe.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,t=this.data.k.k.length;e<t;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},pe.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var t,n=this.data.p*4,r,i;for(t=0;t<n;t+=1)r=t%4==0?100:255,i=Math.round(this.prop.v[t]*r),this.c[t]!==i&&(this.c[t]=i,this._cmdf=!e);if(this.o.length)for(n=this.prop.v.length,t=this.data.p*4;t<n;t+=1)r=t%2==0?100:1,i=t%2==0?Math.round(this.prop.v[t]*100):this.prop.v[t],this.o[t-this.data.p*4]!==i&&(this.o[t-this.data.p*4]=i,this._omdf=!e);this._mdf=!e}},B([I],pe);var me=function(e,t,n,r){if(t===0)return``;var i=e.o,a=e.i,o=e.v,s,c=` M`+r.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<t;s+=1)c+=` C`+r.applyToPointStringified(i[s-1][0],i[s-1][1])+` `+r.applyToPointStringified(a[s][0],a[s][1])+` `+r.applyToPointStringified(o[s][0],o[s][1]);return n&&t&&(c+=` C`+r.applyToPointStringified(i[s-1][0],i[s-1][1])+` `+r.applyToPointStringified(a[0][0],a[0][1])+` `+r.applyToPointStringified(o[0][0],o[0][1]),c+=`z`),c},he=function(){function e(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(e){this.audios.push(e)},pause:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].pause()},resume:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].resume()},setRate:function(e){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].setRate(e)},createAudio:function(e){return this.audioFactory?this.audioFactory(e):Howl?new Howl({src:[e]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(e){this.audioFactory=e},setVolume:function(e){this._volume=e,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].volume(this._volume*+!this._isMuted)}},function(){return new e}}(),ge=function(){var e=function(){var e=F(`canvas`);e.width=1,e.height=1;var t=e.getContext(`2d`);return t.fillStyle=`rgba(0,0,0,0)`,t.fillRect(0,0,1,1),e}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function n(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(e,t,n){var r=``;if(e.e)r=e.p;else if(t){var i=e.p;i.indexOf(`images/`)!==-1&&(i=i.split(`/`)[1]),r=t+i}else r=n,r+=e.u?e.u:``,r+=e.p;return r}function i(e){var t=0,n=setInterval(function(){(e.getBBox().width||t>500)&&(this._imageLoaded(),clearInterval(n)),t+=1}.bind(this),50)}function a(t){var n=r(t,this.assetsPath,this.path),i=P(`image`);s?this.testImageLoaded(i):i.addEventListener(`load`,this._imageLoaded,!1),i.addEventListener(`error`,function(){a.img=e,this._imageLoaded()}.bind(this),!1),i.setAttributeNS(`http://www.w3.org/1999/xlink`,`href`,n),this._elementHelper.append?this._elementHelper.append(i):this._elementHelper.appendChild(i);var a={img:i,assetData:t};return a}function o(t){var n=r(t,this.assetsPath,this.path),i=F(`img`);i.crossOrigin=`anonymous`,i.addEventListener(`load`,this._imageLoaded,!1),i.addEventListener(`error`,function(){a.img=e,this._imageLoaded()}.bind(this),!1),i.src=n;var a={img:i,assetData:t};return a}function c(e){var t={assetData:e},n=r(e,this.assetsPath,this.path);return ae.loadData(n,function(e){t.img=e,this._footageLoaded()}.bind(this),function(){t.img={},this._footageLoaded()}.bind(this)),t}function l(e,t){this.imagesLoadedCb=t;var n,r=e.length;for(n=0;n<r;n+=1)e[n].layers||(!e[n].t||e[n].t===`seq`?(this.totalImages+=1,this.images.push(this._createImageData(e[n]))):e[n].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(e[n]))))}function u(e){this.path=e||``}function d(e){this.assetsPath=e||``}function f(e){for(var t=0,n=this.images.length;t<n;){if(this.images[t].assetData===e)return this.images[t].img;t+=1}return null}function p(){this.imagesLoadedCb=null,this.images.length=0}function m(){return this.totalImages===this.loadedAssets}function h(){return this.totalFootages===this.loadedFootagesCount}function g(e,t){e===`svg`?(this._elementHelper=t,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function _(){this._imageLoaded=t.bind(this),this._footageLoaded=n.bind(this),this.testImageLoaded=i.bind(this),this.createFootageData=c.bind(this),this.assetsPath=``,this.path=``,this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return _.prototype={loadAssets:l,setAssetsPath:d,setPath:u,loadedImages:m,loadedFootages:h,destroy:p,getAsset:f,createImgData:o,createImageData:a,imageLoaded:t,footageLoaded:n,setCacheType:g},_}(),_e=function(){var e={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),e}(),ve=function(){var e={};e.createFilter=t,e.createAlphaToLuminanceFilter=n;function t(e,t){var n=P(`filter`);return n.setAttribute(`id`,e),t!==!0&&(n.setAttribute(`filterUnits`,`objectBoundingBox`),n.setAttribute(`x`,`0%`),n.setAttribute(`y`,`0%`),n.setAttribute(`width`,`100%`),n.setAttribute(`height`,`100%`)),n}function n(){var e=P(`feColorMatrix`);return e.setAttribute(`type`,`matrix`),e.setAttribute(`color-interpolation-filters`,`sRGB`),e.setAttribute(`values`,`0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1`),e}return e}();function ye(e,t,n){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=t,this._elem=n,this._animatorsData=N(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(n)}ye.prototype.searchProperties=function(){var e,t=this._textData.a.length,n,r=V.getProp;for(e=0;e<t;e+=1)n=this._textData.a[e],this._animatorsData[e]=new be(this._elem,n,this);this._textData.p&&`m`in this._textData.p?(this._pathData={a:r(this._elem,this._textData.p.a,0,0,this),f:r(this._elem,this._textData.p.f,0,0,this),l:r(this._elem,this._textData.p.l,0,0,this),r:r(this._elem,this._textData.p.r,0,0,this),p:r(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=r(this._elem,this._textData.m.a,1,0,this)},ye.prototype.getMeasures=function(e,t){if(this.lettersChangedFlag=t,this._mdf||this._isFirstFrame||t||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var n=this._moreOptions.alignment.v,r=this._animatorsData,i=this._textData,a=this.mHelper,o=this._renderType,s=this.renderedLetters.length,c,l,u,d,f=e.l,p,m,h,g,_,v,y,b,x,S,C,w,T,E,A;if(this._hasMaskedPath){if(A=this._pathData.m,!this._pathData.n||this._pathData._mdf){var j=A.v;this._pathData.r.v&&(j=j.reverse()),p={tLength:0,segments:[]},d=j._length-1;var M;for(w=0,u=0;u<d;u+=1)M=ie.buildBezierData(j.v[u],j.v[u+1],[j.o[u][0]-j.v[u][0],j.o[u][1]-j.v[u][1]],[j.i[u+1][0]-j.v[u+1][0],j.i[u+1][1]-j.v[u+1][1]]),p.tLength+=M.segmentLength,p.segments.push(M),w+=M.segmentLength;u=d,A.v.c&&(M=ie.buildBezierData(j.v[u],j.v[0],[j.o[u][0]-j.v[u][0],j.o[u][1]-j.v[u][1]],[j.i[0][0]-j.v[0][0],j.i[0][1]-j.v[0][1]]),p.tLength+=M.segmentLength,p.segments.push(M),w+=M.segmentLength),this._pathData.pi=p}if(p=this._pathData.pi,m=this._pathData.f.v,y=0,v=1,g=0,_=!0,S=p.segments,m<0&&A.v.c)for(p.tLength<Math.abs(m)&&(m=-Math.abs(m)%p.tLength),y=S.length-1,x=S[y].points,v=x.length-1;m<0;)m+=x[v].partialLength,--v,v<0&&(--y,x=S[y].points,v=x.length-1);x=S[y].points,b=x[v-1],h=x[v],C=h.partialLength}d=f.length,c=0,l=0;var N=e.finalSize*1.2*.714,P=!0,F,I,L,ee=r.length,te,R,z=-1,B,ne,re,ae=m,oe=y,se=v,V=-1,ce,H,le,U,W,G,ue,de,K=``,fe=this.defaultPropsArray,q;if(e.j===2||e.j===1){var pe=0,me=0,he=e.j===2?-.5:-1,ge=0,_e=!0;for(u=0;u<d;u+=1)if(f[u].n){for(pe&&(pe+=me);ge<u;)f[ge].animatorJustifyOffset=pe,ge+=1;pe=0,_e=!0}else{for(L=0;L<ee;L+=1)F=r[L].a,F.t.propType&&(_e&&e.j===2&&(me+=F.t.v*he),I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),R.length?pe+=F.t.v*R[0]*he:pe+=F.t.v*R*he);_e=!1}for(pe&&(pe+=me);ge<u;)f[ge].animatorJustifyOffset=pe,ge+=1}for(u=0;u<d;u+=1){if(a.reset(),ce=1,f[u].n)c=0,l+=e.yOffset,l+=+!!P,m=ae,P=!1,this._hasMaskedPath&&(y=oe,v=se,x=S[y].points,b=x[v-1],h=x[v],C=h.partialLength,g=0),K=``,de=``,G=``,q=``,fe=this.defaultPropsArray;else{if(this._hasMaskedPath){if(V!==f[u].line){switch(e.j){case 1:m+=w-e.lineWidths[f[u].line];break;case 2:m+=(w-e.lineWidths[f[u].line])/2}V=f[u].line}z!==f[u].ind&&(f[z]&&(m+=f[z].extra),m+=f[u].an/2,z=f[u].ind),m+=n[0]*f[u].an*.005;var ve=0;for(L=0;L<ee;L+=1)F=r[L].a,F.p.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),R.length?ve+=F.p.v[0]*R[0]:ve+=F.p.v[0]*R),F.a.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),R.length?ve+=F.a.v[0]*R[0]:ve+=F.a.v[0]*R);for(_=!0,this._pathData.a.v&&(m=f[0].an*.5+(w-this._pathData.f.v-f[0].an*.5-f[f.length-1].an*.5)*z/(d-1),m+=this._pathData.f.v);_;)g+C>=m+ve||!x?(T=(m+ve-g)/h.partialLength,ne=b.point[0]+(h.point[0]-b.point[0])*T,re=b.point[1]+(h.point[1]-b.point[1])*T,a.translate(-n[0]*f[u].an*.005,-(n[1]*N)*.01),_=!1):x&&(g+=h.partialLength,v+=1,v>=x.length&&(v=0,y+=1,S[y]?x=S[y].points:A.v.c?(v=0,y=0,x=S[y].points):(g-=h.partialLength,x=null)),x&&(b=h,h=x[v],C=h.partialLength));B=f[u].an/2-f[u].add,a.translate(-B,0,0)}else B=f[u].an/2-f[u].add,a.translate(-B,0,0),a.translate(-n[0]*f[u].an*.005,-n[1]*N*.01,0);for(L=0;L<ee;L+=1)F=r[L].a,F.t.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),(c!==0||e.j!==0)&&(this._hasMaskedPath?R.length?m+=F.t.v*R[0]:m+=F.t.v*R:R.length?c+=F.t.v*R[0]:c+=F.t.v*R));for(e.strokeWidthAnim&&(le=e.sw||0),e.strokeColorAnim&&(H=e.sc?[e.sc[0],e.sc[1],e.sc[2]]:[0,0,0]),e.fillColorAnim&&e.fc&&(U=[e.fc[0],e.fc[1],e.fc[2]]),L=0;L<ee;L+=1)F=r[L].a,F.a.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),R.length?a.translate(-F.a.v[0]*R[0],-F.a.v[1]*R[1],F.a.v[2]*R[2]):a.translate(-F.a.v[0]*R,-F.a.v[1]*R,F.a.v[2]*R));for(L=0;L<ee;L+=1)F=r[L].a,F.s.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),R.length?a.scale(1+(F.s.v[0]-1)*R[0],1+(F.s.v[1]-1)*R[1],1):a.scale(1+(F.s.v[0]-1)*R,1+(F.s.v[1]-1)*R,1));for(L=0;L<ee;L+=1){if(F=r[L].a,I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),F.sk.propType&&(R.length?a.skewFromAxis(-F.sk.v*R[0],F.sa.v*R[1]):a.skewFromAxis(-F.sk.v*R,F.sa.v*R)),F.r.propType&&(R.length?a.rotateZ(-F.r.v*R[2]):a.rotateZ(-F.r.v*R)),F.ry.propType&&(R.length?a.rotateY(F.ry.v*R[1]):a.rotateY(F.ry.v*R)),F.rx.propType&&(R.length?a.rotateX(F.rx.v*R[0]):a.rotateX(F.rx.v*R)),F.o.propType&&(R.length?ce+=(F.o.v*R[0]-ce)*R[0]:ce+=(F.o.v*R-ce)*R),e.strokeWidthAnim&&F.sw.propType&&(R.length?le+=F.sw.v*R[0]:le+=F.sw.v*R),e.strokeColorAnim&&F.sc.propType)for(W=0;W<3;W+=1)R.length?H[W]+=(F.sc.v[W]-H[W])*R[0]:H[W]+=(F.sc.v[W]-H[W])*R;if(e.fillColorAnim&&e.fc){if(F.fc.propType)for(W=0;W<3;W+=1)R.length?U[W]+=(F.fc.v[W]-U[W])*R[0]:U[W]+=(F.fc.v[W]-U[W])*R;F.fh.propType&&(U=R.length?k(U,F.fh.v*R[0]):k(U,F.fh.v*R)),F.fs.propType&&(U=R.length?D(U,F.fs.v*R[0]):D(U,F.fs.v*R)),F.fb.propType&&(U=R.length?O(U,F.fb.v*R[0]):O(U,F.fb.v*R))}}for(L=0;L<ee;L+=1)F=r[L].a,F.p.propType&&(I=r[L].s,R=I.getMult(f[u].anIndexes[L],i.a[L].s.totalChars),this._hasMaskedPath?R.length?a.translate(0,F.p.v[1]*R[0],-F.p.v[2]*R[1]):a.translate(0,F.p.v[1]*R,-F.p.v[2]*R):R.length?a.translate(F.p.v[0]*R[0],F.p.v[1]*R[1],-F.p.v[2]*R[2]):a.translate(F.p.v[0]*R,F.p.v[1]*R,-F.p.v[2]*R));if(e.strokeWidthAnim&&(G=le<0?0:le),e.strokeColorAnim&&(ue=`rgb(`+Math.round(H[0]*255)+`,`+Math.round(H[1]*255)+`,`+Math.round(H[2]*255)+`)`),e.fillColorAnim&&e.fc&&(de=`rgb(`+Math.round(U[0]*255)+`,`+Math.round(U[1]*255)+`,`+Math.round(U[2]*255)+`)`),this._hasMaskedPath){if(a.translate(0,-e.ls),a.translate(0,n[1]*N*.01+l,0),this._pathData.p.v){E=(h.point[1]-b.point[1])/(h.point[0]-b.point[0]);var ye=Math.atan(E)*180/Math.PI;h.point[0]<b.point[0]&&(ye+=180),a.rotate(-ye*Math.PI/180)}a.translate(ne,re,0),m-=n[0]*f[u].an*.005,f[u+1]&&z!==f[u+1].ind&&(m+=f[u].an/2,m+=e.tr*.001*e.finalSize)}else{switch(a.translate(c,l,0),e.ps&&a.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:a.translate(f[u].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[f[u].line]),0,0);break;case 2:a.translate(f[u].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[f[u].line])/2,0,0)}a.translate(0,-e.ls),a.translate(B,0,0),a.translate(n[0]*f[u].an*.005,n[1]*N*.01,0),c+=f[u].l+e.tr*.001*e.finalSize}o===`html`?K=a.toCSS():o===`svg`?K=a.to2dCSS():fe=[a.props[0],a.props[1],a.props[2],a.props[3],a.props[4],a.props[5],a.props[6],a.props[7],a.props[8],a.props[9],a.props[10],a.props[11],a.props[12],a.props[13],a.props[14],a.props[15]],q=ce}s<=u?(te=new xe(q,G,ue,de,K,fe),this.renderedLetters.push(te),s+=1,this.lettersChangedFlag=!0):(te=this.renderedLetters[u],this.lettersChangedFlag=te.update(q,G,ue,de,K,fe)||this.lettersChangedFlag)}}},ye.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},ye.prototype.mHelper=new R,ye.prototype.defaultPropsArray=[],B([I],ye);function be(e,t,n){var r={propType:!1},i=V.getProp,a=t.a;this.a={r:a.r?i(e,a.r,0,h,n):r,rx:a.rx?i(e,a.rx,0,h,n):r,ry:a.ry?i(e,a.ry,0,h,n):r,sk:a.sk?i(e,a.sk,0,h,n):r,sa:a.sa?i(e,a.sa,0,h,n):r,s:a.s?i(e,a.s,1,.01,n):r,a:a.a?i(e,a.a,1,0,n):r,o:a.o?i(e,a.o,0,.01,n):r,p:a.p?i(e,a.p,1,0,n):r,sw:a.sw?i(e,a.sw,0,0,n):r,sc:a.sc?i(e,a.sc,1,0,n):r,fc:a.fc?i(e,a.fc,1,0,n):r,fh:a.fh?i(e,a.fh,0,0,n):r,fs:a.fs?i(e,a.fs,0,.01,n):r,fb:a.fb?i(e,a.fb,0,.01,n):r,t:a.t?i(e,a.t,0,0,n):r},this.s=Se.getTextSelectorProp(e,t.s,n),this.s.t=t.s.t}function xe(e,t,n,r,i,a){this.o=e,this.sw=t,this.sc=n,this.fc=r,this.m=i,this.p=a,this._mdf={o:!0,sw:!!t,sc:!!n,fc:!!r,m:!0,p:!0}}xe.prototype.update=function(e,t,n,r,i,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var o=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,o=!0),this.sw!==t&&(this.sw=t,this._mdf.sw=!0,o=!0),this.sc!==n&&(this.sc=n,this._mdf.sc=!0,o=!0),this.fc!==r&&(this.fc=r,this._mdf.fc=!0,o=!0),this.m!==i&&(this.m=i,this._mdf.m=!0,o=!0),a.length&&(this.p[0]!==a[0]||this.p[1]!==a[1]||this.p[4]!==a[4]||this.p[5]!==a[5]||this.p[12]!==a[12]||this.p[13]!==a[13])&&(this.p=a,this._mdf.p=!0,o=!0),o};function J(e,t){this._frameId=n,this.pv=``,this.v=``,this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=t,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:``,fStyle:``,fWeight:``,fc:``,j:``,justifyOffset:``,l:[],lh:0,lineWidths:[],ls:``,of:``,s:``,sc:``,sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}J.prototype.defaultBoxWidth=[0,0],J.prototype.copyData=function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},J.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},J.prototype.searchProperty=function(){return this.searchKeyframes()},J.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},J.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},J.prototype.getValue=function(e){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||e){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var t=this.currentData,n=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{this.lock=!0,this._mdf=!1;var r,i=this.effectsSequence.length,a=e||this.data.d.k[this.keysIndex].s;for(r=0;r<i;r+=1)a=n===this.keysIndex?this.effectsSequence[r](this.currentData,a.t):this.effectsSequence[r](a,a.t);t!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},J.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,t=this.elem.comp.renderedFrame,n=0,r=e.length;n<=r-1&&!(n===r-1||e[n+1].t>t);)n+=1;return this.keysIndex!==n&&(this.keysIndex=n),this.data.d.k[this.keysIndex].s},J.prototype.buildFinalText=function(e){for(var t=[],n=0,r=e.length,i,a,o=!1;n<r;)i=e.charCodeAt(n),se.isCombinedCharacter(i)?t[t.length-1]+=e.charAt(n):i>=55296&&i<=56319?(a=e.charCodeAt(n+1),a>=56320&&a<=57343?(o||se.isModifier(i,a)?(t[t.length-1]+=e.substr(n,2),o=!1):t.push(e.substr(n,2)),n+=1):t.push(e.charAt(n))):i>56319?(a=e.charCodeAt(n+1),se.isZeroWidthJoiner(i,a)?(o=!0,t[t.length-1]+=e.substr(n,2),n+=1):t.push(e.charAt(n))):se.isZeroWidthJoiner(i)?(t[t.length-1]+=e.charAt(n),o=!0):t.push(e.charAt(n)),n+=1;return t},J.prototype.completeTextData=function(e){e.__complete=!0;var t=this.elem.globalData.fontManager,n=this.data,r=[],i,a,o,s=0,c,l=n.m.g,u=0,d=0,f=0,p=[],m=0,h=0,g,_,v=t.getFontByName(e.f),y,b=0,x=oe(v);e.fWeight=x.weight,e.fStyle=x.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),a=e.finalText.length,e.finalLineHeight=e.lh;var S=e.tr/1e3*e.finalSize,C;if(e.sz)for(var w=!0,T=e.sz[0],E=e.sz[1],D,O;w;){O=this.buildFinalText(e.t),D=0,m=0,a=O.length,S=e.tr/1e3*e.finalSize;var k=-1;for(i=0;i<a;i+=1)C=O[i].charCodeAt(0),o=!1,O[i]===` `?k=i:(C===13||C===3)&&(m=0,o=!0,D+=e.finalLineHeight||e.finalSize*1.2),t.chars?(y=t.getCharData(O[i],v.fStyle,v.fFamily),b=o?0:y.w*e.finalSize/100):b=t.measureText(O[i],e.f,e.finalSize),m+b>T&&O[i]!==` `?(k===-1?a+=1:i=k,D+=e.finalLineHeight||e.finalSize*1.2,O.splice(i,+(k===i),`\r`),k=-1,m=0):(m+=b,m+=S);D+=v.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&E<D?(--e.finalSize,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=O,a=e.finalText.length,w=!1)}m=-S,b=0;var A=0,j;for(i=0;i<a;i+=1)if(o=!1,j=e.finalText[i],C=j.charCodeAt(0),C===13||C===3?(A=0,p.push(m),h=m>h?m:h,m=-2*S,c=``,o=!0,f+=1):c=j,t.chars?(y=t.getCharData(j,v.fStyle,t.getFontByName(e.f).fFamily),b=o?0:y.w*e.finalSize/100):b=t.measureText(c,e.f,e.finalSize),j===` `?A+=b+S:(m+=b+S+A,A=0),r.push({l:b,an:b,add:u,n:o,anIndexes:[],val:c,line:f,animatorJustifyOffset:0}),l==2){if(u+=b,c===``||c===` `||i===a-1){for((c===``||c===` `)&&(u-=b);d<=i;)r[d].an=u,r[d].ind=s,r[d].extra=b,d+=1;s+=1,u=0}}else if(l==3){if(u+=b,c===``||i===a-1){for(c===``&&(u-=b);d<=i;)r[d].an=u,r[d].ind=s,r[d].extra=b,d+=1;u=0,s+=1}}else r[s].ind=s,r[s].extra=0,s+=1;if(e.l=r,h=m>h?m:h,p.push(m),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=h,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=p;var M=n.a,N,P;_=M.length;var F,I,L=[];for(g=0;g<_;g+=1){for(N=M[g],N.a.sc&&(e.strokeColorAnim=!0),N.a.sw&&(e.strokeWidthAnim=!0),(N.a.fc||N.a.fh||N.a.fs||N.a.fb)&&(e.fillColorAnim=!0),I=0,F=N.s.b,i=0;i<a;i+=1)P=r[i],P.anIndexes[g]=I,(F==1&&P.val!==``||F==2&&P.val!==``&&P.val!==` `||F==3&&(P.n||P.val==` `||i==a-1)||F==4&&(P.n||i==a-1))&&(N.s.rn===1&&L.push(I),I+=1);n.a[g].s.totalChars=I;var ee=-1,te;if(N.s.rn===1)for(i=0;i<a;i+=1)P=r[i],ee!=P.anIndexes[g]&&(ee=P.anIndexes[g],te=L.splice(Math.floor(Math.random()*L.length),1)[0]),P.anIndexes[g]=te}e.yOffset=e.finalLineHeight||e.finalSize*1.2,e.ls=e.ls||0,e.ascent=v.ascent*e.finalSize/100},J.prototype.updateDocumentData=function(e,t){t=t===void 0?this.keysIndex:t;var n=this.copyData({},this.data.d.k[t].s);n=this.copyData(n,e),this.data.d.k[t].s=n,this.recalculate(t),this.elem.addDynamicProperty(this)},J.prototype.recalculate=function(e){var t=this.data.d.k[e].s;t.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(t)},J.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},J.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Se=function(){var e=Math.max,t=Math.min,n=Math.floor;function r(e,t){this._currentTextLength=-1,this.k=!1,this.data=t,this.elem=e,this.comp=e.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(e),this.s=V.getProp(e,t.s||{k:0},0,0,this),this.e=`e`in t?V.getProp(e,t.e,0,0,this):{v:100},this.o=V.getProp(e,t.o||{k:0},0,0,this),this.xe=V.getProp(e,t.xe||{k:0},0,0,this),this.ne=V.getProp(e,t.ne||{k:0},0,0,this),this.sm=V.getProp(e,t.sm||{k:100},0,0,this),this.a=V.getProp(e,t.a,0,.01,this),this.dynamicProperties.length||this.getValue()}r.prototype={getMult:function(r){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var i=0,a=0,o=1,s=1;this.ne.v>0?i=this.ne.v/100:a=-this.ne.v/100,this.xe.v>0?o=1-this.xe.v/100:s=1+this.xe.v/100;var c=z.getBezierEasing(i,a,o,s).get,l=0,u=this.finalS,d=this.finalE,f=this.data.sh;if(f===2)l=d===u?+(r>=d):e(0,t(.5/(d-u)+(r-u)/(d-u),1)),l=c(l);else if(f===3)l=d===u?r>=d?0:1:1-e(0,t(.5/(d-u)+(r-u)/(d-u),1)),l=c(l);else if(f===4)d===u?l=0:(l=e(0,t(.5/(d-u)+(r-u)/(d-u),1)),l<.5?l*=2:l=1-2*(l-.5)),l=c(l);else if(f===5){if(d===u)l=0;else{var p=d-u;r=t(e(0,r+.5-u),d-u);var m=-p/2+r,h=p/2;l=Math.sqrt(1-m*m/(h*h))}l=c(l)}else f===6?(d===u?l=0:(r=t(e(0,r+.5-u),d-u),l=(1+Math.cos(Math.PI+Math.PI*2*r/(d-u)))/2),l=c(l)):(r>=n(u)&&(l=r-u<0?e(0,t(t(d,1)-(u-r),1)):e(0,t(d-r,1))),l=c(l));if(this.sm.v!==100){var g=this.sm.v*.01;g===0&&(g=1e-8);var _=.5-g*.5;l<_?l=0:(l=(l-_)/g,l>1&&(l=1))}return l*this.a.v},getValue:function(e){this.iterateDynamicProperties(),this._mdf=e||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,e&&this.data.r===2&&(this.e.v=this._currentTextLength);var t=this.data.r===2?1:100/this.data.totalChars,n=this.o.v/t,r=this.s.v/t+n,i=this.e.v/t+n;if(r>i){var a=r;r=i,i=a}this.finalS=r,this.finalE=i}},B([I],r);function i(e,t,n){return new r(e,t,n)}return{getTextSelectorProp:i}}(),Ce=function(){return function(e,t,n){var r=0,i=e,a=N(i),o={newElement:s,release:c};function s(){var e;return r?(--r,e=a[r]):e=t(),e}function c(e){r===i&&(a=we.double(a),i*=2),n&&n(e),a[r]=e,r+=1}return o}}(),we=function(){function e(e){return e.concat(N(e.length))}return{double:e}}(),Te=function(){function e(){return M(`float32`,2)}return Ce(8,e)}(),Ee=function(){function e(){return new H}function t(e){for(var t=e._length,n=0;n<t;n+=1)Te.release(e.v[n]),Te.release(e.i[n]),Te.release(e.o[n]),e.v[n]=null,e.i[n]=null,e.o[n]=null;e._length=0,e.c=!1}function n(e){var t=r.newElement(),n,i=e._length===void 0?e.v.length:e._length;for(t.setLength(i),t.c=e.c,n=0;n<i;n+=1)t.setTripleAt(e.v[n][0],e.v[n][1],e.o[n][0],e.o[n][1],e.i[n][0],e.i[n][1],n);return t}var r=Ce(4,e,t);return r.clone=n,r}(),De=function(){var e={newShapeCollection:i,release:a},t=0,n=4,r=N(n);function i(){var e;return t?(--t,e=r[t]):e=new fe,e}function a(e){var i,a=e._length;for(i=0;i<a;i+=1)Ee.release(e.shapes[i]);e._length=0,t===n&&(r=we.double(r),n*=2),r[t]=e,t+=1}return e}(),Oe=function(){function e(){return{lengths:[],totalLength:0}}function t(e){var t,n=e.lengths.length;for(t=0;t<n;t+=1)ke.release(e.lengths[t]);e.lengths.length=0}return Ce(8,e,t)}(),ke=function(){function e(){return{addedLength:0,percents:M(`float32`,m),lengths:M(`float32`,m)}}return Ce(8,e)}(),Ae=function(){function e(e){for(var t=e.split(`\r
`),n={},r,i=0,a=0;a<t.length;a+=1)r=t[a].split(`:`),r.length===2&&(n[r[0]]=r[1].trim(),i+=1);if(i===0)throw Error();return n}return function(t){for(var n=[],r=0;r<t.length;r+=1){var i=t[r],a={time:i.tm,duration:i.dr};try{a.payload=JSON.parse(t[r].cm)}catch{try{a.payload=e(t[r].cm)}catch{a.payload={name:t[r]}}}n.push(a)}return n}}();function je(){}je.prototype.checkLayers=function(e){var t,n=this.layers.length,r;for(this.completeLayers=!0,t=n-1;t>=0;--t)this.elements[t]||(r=this.layers[t],r.ip-r.st<=e-this.layers[t].st&&r.op-r.st>e-this.layers[t].st&&this.buildItem(t)),this.completeLayers=this.elements[t]?this.completeLayers:!1;this.checkPendingElements()},je.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e);default:return this.createNull(e)}},je.prototype.createCamera=function(){throw Error(`You're using a 3d camera. Try the html renderer.`)},je.prototype.createAudio=function(e){return new nt(e,this.globalData,this)},je.prototype.createFootage=function(e){return new FootageElement(e,this.globalData,this)},je.prototype.buildAllItems=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.buildItem(e);this.checkPendingElements()},je.prototype.includeLayers=function(e){this.completeLayers=!1;var t,n=e.length,r,i=this.layers.length;for(t=0;t<n;t+=1)for(r=0;r<i;){if(this.layers[r].id===e[t].id){this.layers[r]=e[t];break}r+=1}},je.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},je.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},je.prototype.buildElementParenting=function(e,t,n){for(var r=this.elements,i=this.layers,a=0,o=i.length;a<o;)i[a].ind==t&&(!r[a]||r[a]===!0?(this.buildItem(a),this.addPendingElement(e)):(n.push(r[a]),r[a].setAsParent(),i[a].parent===void 0?e.setHierarchy(n):this.buildElementParenting(e,i[a].parent,n))),a+=1},je.prototype.addPendingElement=function(e){this.pendingElements.push(e)},je.prototype.searchExtraCompositions=function(e){var t,n=e.length;for(t=0;t<n;t+=1)if(e[t].xt){var r=this.createComp(e[t]);r.initExpressions(),this.globalData.projectInterface.registerComposition(r)}},je.prototype.setupGlobalData=function(e,t){this.globalData.fontManager=new se,this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,t),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}};function Y(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=P(`svg`);var n=``;if(t&&t.title){var r=P(`title`),i=w();r.setAttribute(`id`,i),r.textContent=t.title,this.svgElement.appendChild(r),n+=i}if(t&&t.description){var a=P(`desc`),o=w();a.setAttribute(`id`,o),a.textContent=t.description,this.svgElement.appendChild(a),n+=` `+o}n&&this.svgElement.setAttribute(`aria-labelledby`,n);var s=P(`defs`);this.svgElement.appendChild(s);var c=P(`g`);this.svgElement.appendChild(c),this.layerElement=c,this.renderConfig={preserveAspectRatio:t&&t.preserveAspectRatio||`xMidYMid meet`,imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||`xMidYMid slice`,contentVisibility:t&&t.contentVisibility||`visible`,progressiveLoad:t&&t.progressiveLoad||!1,hideOnTransparent:!(t&&t.hideOnTransparent===!1),viewBoxOnly:t&&t.viewBoxOnly||!1,viewBoxSize:t&&t.viewBoxSize||!1,className:t&&t.className||``,id:t&&t.id||``,focusable:t&&t.focusable,filterSize:{width:t&&t.filterSize&&t.filterSize.width||`100%`,height:t&&t.filterSize&&t.filterSize.height||`100%`,x:t&&t.filterSize&&t.filterSize.x||`0%`,y:t&&t.filterSize&&t.filterSize.y||`0%`}},this.globalData={_mdf:!1,frameNum:-1,defs:s,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType=`svg`}B([je],Y),Y.prototype.createNull=function(e){return new Ye(e,this.globalData,this)},Y.prototype.createShape=function(e){return new X(e,this.globalData,this)},Y.prototype.createText=function(e){return new it(e,this.globalData,this)},Y.prototype.createImage=function(e){return new et(e,this.globalData,this)},Y.prototype.createComp=function(e){return new rt(e,this.globalData,this)},Y.prototype.createSolid=function(e){return new tt(e,this.globalData,this)},Y.prototype.configAnimation=function(e){this.svgElement.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),this.renderConfig.viewBoxSize?this.svgElement.setAttribute(`viewBox`,this.renderConfig.viewBoxSize):this.svgElement.setAttribute(`viewBox`,`0 0 `+e.w+` `+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute(`width`,e.w),this.svgElement.setAttribute(`height`,e.h),this.svgElement.style.width=`100%`,this.svgElement.style.height=`100%`,this.svgElement.style.transform=`translate3d(0,0,0)`,this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute(`class`,this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute(`id`,this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute(`focusable`,this.renderConfig.focusable),this.svgElement.setAttribute(`preserveAspectRatio`,this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var n=this.globalData.defs;this.setupGlobalData(e,n),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var r=P(`clipPath`),i=P(`rect`);i.setAttribute(`width`,e.w),i.setAttribute(`height`,e.h),i.setAttribute(`x`,0),i.setAttribute(`y`,0);var a=w();r.setAttribute(`id`,a),r.appendChild(i),this.layerElement.setAttribute(`clip-path`,`url(`+t+`#`+a+`)`),n.appendChild(r),this.layers=e.layers,this.elements=N(e.layers.length)},Y.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=``),this.layerElement=null,this.globalData.defs=null;var e,t=this.layers?this.layers.length:0;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},Y.prototype.updateContainerSize=function(){},Y.prototype.buildItem=function(e){var t=this.elements;if(!(t[e]||this.layers[e].ty===99)){t[e]=!0;var n=this.createItem(this.layers[e]);t[e]=n,o&&(this.layers[e].ty===0&&this.globalData.projectInterface.registerComposition(n),n.initExpressions()),this.appendElementInPos(n,e),this.layers[e].tt&&(!this.elements[e-1]||this.elements[e-1]===!0?(this.buildItem(e-1),this.addPendingElement(n)):n.setMatte(t[e-1].layerId))}},Y.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var t=0,n=this.elements.length;t<n;){if(this.elements[t]===e){e.setMatte(this.elements[t-1].layerId);break}t+=1}}},Y.prototype.renderFrame=function(e){if(!(this.renderedFrame===e||this.destroyed)){e===null?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var t,n=this.layers.length;for(this.completeLayers||this.checkLayers(e),t=n-1;t>=0;--t)(this.completeLayers||this.elements[t])&&this.elements[t].prepareFrame(e-this.layers[t].st);if(this.globalData._mdf)for(t=0;t<n;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()}},Y.prototype.appendElementInPos=function(e,t){var n=e.getBaseElement();if(n){for(var r=0,i;r<t;)this.elements[r]&&this.elements[r]!==!0&&this.elements[r].getBaseElement()&&(i=this.elements[r].getBaseElement()),r+=1;i?this.layerElement.insertBefore(n,i):this.layerElement.appendChild(n)}},Y.prototype.hide=function(){this.layerElement.style.display=`none`},Y.prototype.show=function(){this.layerElement.style.display=`block`};function Me(e,n,r){this.data=e,this.element=n,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i=this.globalData.defs,a,o=this.masksProperties?this.masksProperties.length:0;this.viewData=N(o),this.solidPath=``;var s,c=this.masksProperties,l=0,u=[],d,f,p=w(),m,h,g,_,v=`clipPath`,y=`clip-path`;for(a=0;a<o;a+=1)if((c[a].mode!==`a`&&c[a].mode!==`n`||c[a].inv||c[a].o.k!==100||c[a].o.x)&&(v=`mask`,y=`mask`),(c[a].mode===`s`||c[a].mode===`i`)&&l===0?(m=P(`rect`),m.setAttribute(`fill`,`#ffffff`),m.setAttribute(`width`,this.element.comp.data.w||0),m.setAttribute(`height`,this.element.comp.data.h||0),u.push(m)):m=null,s=P(`path`),c[a].mode===`n`)this.viewData[a]={op:V.getProp(this.element,c[a].o,0,.01,this.element),prop:le.getShapeProp(this.element,c[a],3),elem:s,lastPath:``},i.appendChild(s);else{l+=1,s.setAttribute(`fill`,c[a].mode===`s`?`#000000`:`#ffffff`),s.setAttribute(`clip-rule`,`nonzero`);var b;if(c[a].x.k===0?(g=null,_=null):(v=`mask`,y=`mask`,_=V.getProp(this.element,c[a].x,0,null,this.element),b=w(),h=P(`filter`),h.setAttribute(`id`,b),g=P(`feMorphology`),g.setAttribute(`operator`,`erode`),g.setAttribute(`in`,`SourceGraphic`),g.setAttribute(`radius`,`0`),h.appendChild(g),i.appendChild(h),s.setAttribute(`stroke`,c[a].mode===`s`?`#000000`:`#ffffff`)),this.storedData[a]={elem:s,x:_,expan:g,lastPath:``,lastOperator:``,filterId:b,lastRadius:0},c[a].mode===`i`){f=u.length;var x=P(`g`);for(d=0;d<f;d+=1)x.appendChild(u[d]);var S=P(`mask`);S.setAttribute(`mask-type`,`alpha`),S.setAttribute(`id`,p+`_`+l),S.appendChild(s),i.appendChild(S),x.setAttribute(`mask`,`url(`+t+`#`+p+`_`+l+`)`),u.length=0,u.push(x)}else u.push(s);c[a].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[a]={elem:s,lastPath:``,op:V.getProp(this.element,c[a].o,0,.01,this.element),prop:le.getShapeProp(this.element,c[a],3),invRect:m},this.viewData[a].prop.k||this.drawPath(c[a],this.viewData[a].prop.v,this.viewData[a])}for(this.maskElement=P(v),o=u.length,a=0;a<o;a+=1)this.maskElement.appendChild(u[a]);l>0&&(this.maskElement.setAttribute(`id`,p),this.element.maskedElement.setAttribute(y,`url(`+t+`#`+p+`)`),i.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Me.prototype.getMaskProperty=function(e){return this.viewData[e].prop},Me.prototype.renderFrame=function(e){var n=this.element.finalTransform.mat,r,i=this.masksProperties.length;for(r=0;r<i;r+=1)if((this.viewData[r].prop._mdf||e)&&this.drawPath(this.masksProperties[r],this.viewData[r].prop.v,this.viewData[r]),(this.viewData[r].op._mdf||e)&&this.viewData[r].elem.setAttribute(`fill-opacity`,this.viewData[r].op.v),this.masksProperties[r].mode!==`n`&&(this.viewData[r].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[r].invRect.setAttribute(`transform`,n.getInverseMatrix().to2dCSS()),this.storedData[r].x&&(this.storedData[r].x._mdf||e))){var a=this.storedData[r].expan;this.storedData[r].x.v<0?(this.storedData[r].lastOperator!==`erode`&&(this.storedData[r].lastOperator=`erode`,this.storedData[r].elem.setAttribute(`filter`,`url(`+t+`#`+this.storedData[r].filterId+`)`)),a.setAttribute(`radius`,-this.storedData[r].x.v)):(this.storedData[r].lastOperator!==`dilate`&&(this.storedData[r].lastOperator=`dilate`,this.storedData[r].elem.setAttribute(`filter`,null)),this.storedData[r].elem.setAttribute(`stroke-width`,this.storedData[r].x.v*2))}},Me.prototype.getMaskelement=function(){return this.maskElement},Me.prototype.createLayerSolidPath=function(){var e=`M0,0 `;return e+=` h`+this.globalData.compSize.w,e+=` v`+this.globalData.compSize.h,e+=` h-`+this.globalData.compSize.w,e+=` v-`+this.globalData.compSize.h+` `,e},Me.prototype.drawPath=function(e,t,n){var r=` M`+t.v[0][0]+`,`+t.v[0][1],i,a=t._length;for(i=1;i<a;i+=1)r+=` C`+t.o[i-1][0]+`,`+t.o[i-1][1]+` `+t.i[i][0]+`,`+t.i[i][1]+` `+t.v[i][0]+`,`+t.v[i][1];if(t.c&&a>1&&(r+=` C`+t.o[i-1][0]+`,`+t.o[i-1][1]+` `+t.i[0][0]+`,`+t.i[0][1]+` `+t.v[0][0]+`,`+t.v[0][1]),n.lastPath!==r){var o=``;n.elem&&(t.c&&(o=e.inv?this.solidPath+r:r),n.elem.setAttribute(`d`,o)),n.lastPath=r}},Me.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};function Ne(){}Ne.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Pe(){}Pe.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,t){var n,r=this.dynamicProperties.length;for(n=0;n<r;n+=1)(t||this._isParent&&this.dynamicProperties[n].propType===`transform`)&&(this.dynamicProperties[n].getValue(),this.dynamicProperties[n]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Fe(){}Fe.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?ce.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new R},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,t=this.finalTransform.mat,n=0,r=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;n<r;){if(this.hierarchy[n].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}n+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,t.cloneFromProps(e),n=0;n<r;n+=1)e=this.hierarchy[n].finalTransform.mProp.v.props,t.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}},globalToLocal:function(e){var t=[];t.push(this.finalTransform);for(var n=!0,r=this.comp;n;)r.finalTransform?(r.data.hasMask&&t.splice(0,0,r.finalTransform),r=r.comp):n=!1;var i,a=t.length,o;for(i=0;i<a;i+=1)o=t[i].mat.applyToPointArray(0,0,0),e=[e[0]-o[0],e[1]-o[1],0];return e},mHelper:new R};function Ie(){}Ie.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,t=this.renderableComponents.length;for(e=0;e<t;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};function Le(){}(function(){B([Ie,ne({initElement:function(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initTransform(e,t,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var e=this.baseElement||this.layerElement;e.style.display=`none`,this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var e=this.baseElement||this.layerElement;e.style.display=`block`}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&=!1)},renderInnerContent:function(){},prepareFrame:function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],Le)})();function Re(e,t){this.elem=e,this.pos=t}function ze(e,t){this.data=e,this.type=e.ty,this.d=``,this.lvl=t,this._mdf=!1,this.closed=e.hd===!0,this.pElem=P(`path`),this.msElem=null}ze.prototype.reset=function(){this.d=``,this._mdf=!1};function Be(e,t,n){this.caches=[],this.styles=[],this.transformers=e,this.lStr=``,this.sh=n,this.lvl=t,this._isAnimated=!!n.k;for(var r=0,i=e.length;r<i;){if(e[r].mProps.dynamicProperties.length){this._isAnimated=!0;break}r+=1}}Be.prototype.setAsAnimated=function(){this._isAnimated=!0};function Ve(e,t,n){this.transform={mProps:e,op:t,container:n},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function He(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=V.getProp(e,t.o,0,.01,this),this.w=V.getProp(e,t.w,0,null,this),this.d=new q(e,t.d||{},`svg`,this),this.c=V.getProp(e,t.c,1,255,this),this.style=n,this._isAnimated=!!this._isAnimated}B([I],He);function Ue(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=V.getProp(e,t.o,0,.01,this),this.c=V.getProp(e,t.c,1,255,this),this.style=n}B([I],Ue);function We(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,t,n)}We.prototype.initGradientData=function(e,t,n){this.o=V.getProp(e,t.o,0,.01,this),this.s=V.getProp(e,t.s,1,null,this),this.e=V.getProp(e,t.e,1,null,this),this.h=V.getProp(e,t.h||{k:0},0,.01,this),this.a=V.getProp(e,t.a||{k:0},0,h,this),this.g=new pe(e,t.g,this),this.style=n,this.stops=[],this.setGradientData(n.pElem,t),this.setGradientOpacity(t,n),this._isAnimated=!!this._isAnimated},We.prototype.setGradientData=function(e,n){var r=w(),i=P(n.t===1?`linearGradient`:`radialGradient`);i.setAttribute(`id`,r),i.setAttribute(`spreadMethod`,`pad`),i.setAttribute(`gradientUnits`,`userSpaceOnUse`);var a=[],o,s,c=n.g.p*4;for(s=0;s<c;s+=4)o=P(`stop`),i.appendChild(o),a.push(o);e.setAttribute(n.ty===`gf`?`fill`:`stroke`,`url(`+t+`#`+r+`)`),this.gf=i,this.cst=a},We.prototype.setGradientOpacity=function(e,n){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,a,o=P(`mask`),s=P(`path`);o.appendChild(s);var c=w(),l=w();o.setAttribute(`id`,l);var u=P(e.t===1?`linearGradient`:`radialGradient`);u.setAttribute(`id`,c),u.setAttribute(`spreadMethod`,`pad`),u.setAttribute(`gradientUnits`,`userSpaceOnUse`),a=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var d=this.stops;for(i=e.g.p*4;i<a;i+=2)r=P(`stop`),r.setAttribute(`stop-color`,`rgb(255,255,255)`),u.appendChild(r),d.push(r);s.setAttribute(e.ty===`gf`?`fill`:`stroke`,`url(`+t+`#`+c+`)`),e.ty===`gs`&&(s.setAttribute(`stroke-linecap`,ee[e.lc||2]),s.setAttribute(`stroke-linejoin`,te[e.lj||2]),e.lj===1&&s.setAttribute(`stroke-miterlimit`,e.ml)),this.of=u,this.ms=o,this.ost=d,this.maskId=l,n.msElem=s}},B([I],We);function Ge(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=V.getProp(e,t.w,0,null,this),this.d=new q(e,t.d||{},`svg`,this),this.initGradientData(e,t,n),this._isAnimated=!!this._isAnimated}B([We,I],Ge);function Ke(){this.it=[],this.prevViewData=[],this.gr=P(`g`)}var qe=function(){var e=new R,t=new R,n={createRenderFunction:r};function r(e){switch(e.ty){case`fl`:return o;case`gf`:return c;case`gs`:return s;case`st`:return l;case`sh`:case`el`:case`rc`:case`sr`:return a;case`tr`:return i;default:return null}}function i(e,t,n){(n||t.transform.op._mdf)&&t.transform.container.setAttribute(`opacity`,t.transform.op.v),(n||t.transform.mProps._mdf)&&t.transform.container.setAttribute(`transform`,t.transform.mProps.v.to2dCSS())}function a(n,r,i){var a,o,s,c,l,u,d=r.styles.length,f=r.lvl,p,m,h,g,_;for(u=0;u<d;u+=1){if(c=r.sh._mdf||i,r.styles[u].lvl<f){for(m=t.reset(),g=f-r.styles[u].lvl,_=r.transformers.length-1;!c&&g>0;)c=r.transformers[_].mProps._mdf||c,--g,--_;if(c)for(g=f-r.styles[u].lvl,_=r.transformers.length-1;g>0;)h=r.transformers[_].mProps.v.props,m.transform(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13],h[14],h[15]),--g,--_}else m=e;if(p=r.sh.paths,o=p._length,c){for(s=``,a=0;a<o;a+=1)l=p.shapes[a],l&&l._length&&(s+=me(l,l._length,l.c,m));r.caches[u]=s}else s=r.caches[u];r.styles[u].d+=n.hd===!0?``:s,r.styles[u]._mdf=c||r.styles[u]._mdf}}function o(e,t,n){var r=t.style;(t.c._mdf||n)&&r.pElem.setAttribute(`fill`,`rgb(`+u(t.c.v[0])+`,`+u(t.c.v[1])+`,`+u(t.c.v[2])+`)`),(t.o._mdf||n)&&r.pElem.setAttribute(`fill-opacity`,t.o.v)}function s(e,t,n){c(e,t,n),l(e,t,n)}function c(e,t,n){var r=t.gf,i=t.g._hasOpacity,a=t.s.v,o=t.e.v;if(t.o._mdf||n){var s=e.ty===`gf`?`fill-opacity`:`stroke-opacity`;t.style.pElem.setAttribute(s,t.o.v)}if(t.s._mdf||n){var c=e.t===1?`x1`:`cx`,l=c===`x1`?`y1`:`cy`;r.setAttribute(c,a[0]),r.setAttribute(l,a[1]),i&&!t.g._collapsable&&(t.of.setAttribute(c,a[0]),t.of.setAttribute(l,a[1]))}var u,d,f,p;if(t.g._cmdf||n){u=t.cst;var m=t.g.c;for(f=u.length,d=0;d<f;d+=1)p=u[d],p.setAttribute(`offset`,m[d*4]+`%`),p.setAttribute(`stop-color`,`rgb(`+m[d*4+1]+`,`+m[d*4+2]+`,`+m[d*4+3]+`)`)}if(i&&(t.g._omdf||n)){var h=t.g.o;for(u=t.g._collapsable?t.cst:t.ost,f=u.length,d=0;d<f;d+=1)p=u[d],t.g._collapsable||p.setAttribute(`offset`,h[d*2]+`%`),p.setAttribute(`stop-opacity`,h[d*2+1])}if(e.t===1)(t.e._mdf||n)&&(r.setAttribute(`x2`,o[0]),r.setAttribute(`y2`,o[1]),i&&!t.g._collapsable&&(t.of.setAttribute(`x2`,o[0]),t.of.setAttribute(`y2`,o[1])));else{var g;if((t.s._mdf||t.e._mdf||n)&&(g=Math.sqrt((a[0]-o[0])**2+(a[1]-o[1])**2),r.setAttribute(`r`,g),i&&!t.g._collapsable&&t.of.setAttribute(`r`,g)),t.e._mdf||t.h._mdf||t.a._mdf||n){g||=Math.sqrt((a[0]-o[0])**2+(a[1]-o[1])**2);var _=Math.atan2(o[1]-a[1],o[0]-a[0]),v=t.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var y=g*v,b=Math.cos(_+t.a.v)*y+a[0],x=Math.sin(_+t.a.v)*y+a[1];r.setAttribute(`fx`,b),r.setAttribute(`fy`,x),i&&!t.g._collapsable&&(t.of.setAttribute(`fx`,b),t.of.setAttribute(`fy`,x))}}}function l(e,t,n){var r=t.style,i=t.d;i&&(i._mdf||n)&&i.dashStr&&(r.pElem.setAttribute(`stroke-dasharray`,i.dashStr),r.pElem.setAttribute(`stroke-dashoffset`,i.dashoffset[0])),t.c&&(t.c._mdf||n)&&r.pElem.setAttribute(`stroke`,`rgb(`+u(t.c.v[0])+`,`+u(t.c.v[1])+`,`+u(t.c.v[2])+`)`),(t.o._mdf||n)&&r.pElem.setAttribute(`stroke-opacity`,t.o.v),(t.w._mdf||n)&&(r.pElem.setAttribute(`stroke-width`,t.w.v),r.msElem&&r.msElem.setAttribute(`stroke-width`,t.w.v))}return n}();function Je(){}Je.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,t=this.data.masksProperties.length;e<t;){if(this.data.masksProperties[e].mode!==`n`&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var e=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(e),this.data.ty===0||this.data.xt?this.compInterface=CompExpressionInterface(this):this.data.ty===4?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var e=L(this.data.bm),t=this.baseElement||this.layerElement;t.style[`mix-blend-mode`]=e},initBaseData:function(e,t,n){this.globalData=t,this.comp=n,this.data=e,this.layerId=w(),this.data.sr||(this.data.sr=1),this.effectsManager=new ht(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function Ye(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initFrame(),this.initTransform(e,t,n),this.initHierarchy()}Ye.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},Ye.prototype.renderFrame=function(){},Ye.prototype.getBaseElement=function(){return null},Ye.prototype.destroy=function(){},Ye.prototype.sourceRectAtTime=function(){},Ye.prototype.hide=function(){},B([Je,Fe,Ne,Pe],Ye);function Xe(){}Xe.prototype={initRendererElement:function(){this.layerElement=P(`g`)},createContainerElements:function(){this.matteElement=P(`g`),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null,n,r,i;if(this.data.td){if(this.data.td==3||this.data.td==1){var a=P(`mask`);a.setAttribute(`id`,this.layerId),a.setAttribute(`mask-type`,this.data.td==3?`luminance`:`alpha`),a.appendChild(this.layerElement),e=a,this.globalData.defs.appendChild(a),!_e.maskType&&this.data.td==1&&(a.setAttribute(`mask-type`,`luminance`),n=w(),r=ve.createFilter(n),this.globalData.defs.appendChild(r),r.appendChild(ve.createAlphaToLuminanceFilter()),i=P(`g`),i.appendChild(this.layerElement),e=i,a.appendChild(i),i.setAttribute(`filter`,`url(`+t+`#`+n+`)`))}else if(this.data.td==2){var o=P(`mask`);o.setAttribute(`id`,this.layerId),o.setAttribute(`mask-type`,`alpha`);var s=P(`g`);o.appendChild(s),n=w(),r=ve.createFilter(n);var c=P(`feComponentTransfer`);c.setAttribute(`in`,`SourceGraphic`),r.appendChild(c);var l=P(`feFuncA`);l.setAttribute(`type`,`table`),l.setAttribute(`tableValues`,`1.0 0.0`),c.appendChild(l),this.globalData.defs.appendChild(r);var u=P(`rect`);u.setAttribute(`width`,this.comp.data.w),u.setAttribute(`height`,this.comp.data.h),u.setAttribute(`x`,`0`),u.setAttribute(`y`,`0`),u.setAttribute(`fill`,`#ffffff`),u.setAttribute(`opacity`,`0`),s.setAttribute(`filter`,`url(`+t+`#`+n+`)`),s.appendChild(u),s.appendChild(this.layerElement),e=s,_e.maskType||(o.setAttribute(`mask-type`,`luminance`),r.appendChild(ve.createAlphaToLuminanceFilter()),i=P(`g`),s.appendChild(u),i.appendChild(this.layerElement),e=i,s.appendChild(i)),this.globalData.defs.appendChild(o)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute(`id`,this.data.ln),this.data.cl&&this.layerElement.setAttribute(`class`,this.data.cl),this.data.ty===0&&!this.data.hd){var d=P(`clipPath`),f=P(`path`);f.setAttribute(`d`,`M0,0 L`+this.data.w+`,0 L`+this.data.w+`,`+this.data.h+` L0,`+this.data.h+`z`);var p=w();if(d.setAttribute(`id`,p),d.appendChild(f),this.globalData.defs.appendChild(d),this.checkMasks()){var m=P(`g`);m.setAttribute(`clip-path`,`url(`+t+`#`+p+`)`),m.appendChild(this.layerElement),this.transformedElement=m,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute(`clip-path`,`url(`+t+`#`+p+`)`)}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute(`transform`,this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute(`opacity`,this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Me(this.data,this,this.globalData),this.renderableEffectsManager=new mt(this)},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute(`mask`,`url(`+t+`#`+e+`)`)}};function Ze(){}Ze.prototype={addShapeToModifiers:function(e){var t,n=this.shapeModifiers.length;for(t=0;t<n;t+=1)this.shapeModifiers[t].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var t=0,n=this.shapeModifiers.length;t<n;)if(this.shapeModifiers[t].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,t=this.shapes.length;for(e=0;e<t;e+=1)this.shapes[e].sh.reset();t=this.shapeModifiers.length;var n;for(e=t-1;e>=0&&(n=this.shapeModifiers[e].processShapes(this._isFirstFrame),!n);--e);}},searchProcessedElement:function(e){for(var t=this.processedElements,n=0,r=t.length;n<r;){if(t[n].elem===e)return t[n].pos;n+=1}return 0},addProcessedElement:function(e,t){for(var n=this.processedElements,r=n.length;r;)if(--r,n[r].elem===e){n[r].pos=t;return}n.push(new Re(e,t))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};function Qe(){}Qe.prototype.initElement=function(e,t,n){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,t,n),this.textProperty=new J(this,e.t,this.dynamicProperties),this.textAnimator=new ye(e.t,this.renderType,this),this.initTransform(e,t,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Qe.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},Qe.prototype.createPathShape=function(e,t){var n,r=t.length,i,a=``;for(n=0;n<r;n+=1)i=t[n].ks.k,a+=me(i,i.i.length,!0,e);return a},Qe.prototype.updateDocumentData=function(e,t){this.textProperty.updateDocumentData(e,t)},Qe.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},Qe.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},Qe.prototype.applyTextPropertiesToMatrix=function(e,t,n,r,i){switch(e.ps&&t.translate(e.ps[0],e.ps[1]+e.ascent,0),t.translate(0,-e.ls,0),e.j){case 1:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n]),0,0);break;case 2:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n])/2,0,0)}t.translate(r,i,0)},Qe.prototype.buildColor=function(e){return`rgb(`+Math.round(e[0]*255)+`,`+Math.round(e[1]*255)+`,`+Math.round(e[2]*255)+`)`},Qe.prototype.emptyProp=new xe,Qe.prototype.destroy=function(){};function $e(){}B([Je,Fe,Ne,Pe,Le],$e),$e.prototype.initElement=function(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initTransform(e,t,n),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!t.progressiveLoad)&&this.buildAllItems(),this.hide()},$e.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var t=this.tm.v;t===this.data.op&&(t=this.data.op-1),this.renderedFrame=t}var n,r=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),n=r-1;n>=0;--n)(this.completeLayers||this.elements[n])&&(this.elements[n].prepareFrame(this.renderedFrame-this.layers[n].st),this.elements[n]._mdf&&(this._mdf=!0))}},$e.prototype.renderInnerContent=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},$e.prototype.setElements=function(e){this.elements=e},$e.prototype.getElements=function(){return this.elements},$e.prototype.destroyElements=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy()},$e.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function et(e,t,n){this.assetData=t.getAssetData(e.refId),this.initElement(e,t,n),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}B([Je,Fe,Xe,Ne,Pe,Le],et),et.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=P(`image`),this.innerElem.setAttribute(`width`,this.assetData.w+`px`),this.innerElem.setAttribute(`height`,this.assetData.h+`px`),this.innerElem.setAttribute(`preserveAspectRatio`,this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS(`http://www.w3.org/1999/xlink`,`href`,e),this.layerElement.appendChild(this.innerElem)},et.prototype.sourceRectAtTime=function(){return this.sourceRect};function tt(e,t,n){this.initElement(e,t,n)}B([et],tt),tt.prototype.createContent=function(){var e=P(`rect`);e.setAttribute(`width`,this.data.sw),e.setAttribute(`height`,this.data.sh),e.setAttribute(`fill`,this.data.sc),this.layerElement.appendChild(e)};function nt(e,t,n){this.initFrame(),this.initRenderable(),this.assetData=t.getAssetData(e.refId),this.initBaseData(e,t,n),this._isPlaying=!1,this._canPlay=!1;var r=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(r),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=e.tm?V.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}nt.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var t=this.tm.v;this._currentTime=t}},B([Ie,Je,Pe],nt),nt.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},nt.prototype.show=function(){},nt.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},nt.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},nt.prototype.resume=function(){this._canPlay=!0},nt.prototype.setRate=function(e){this.audio.rate(e)},nt.prototype.volume=function(e){this.audio.volume(e)},nt.prototype.getBaseElement=function(){return null},nt.prototype.destroy=function(){},nt.prototype.sourceRectAtTime=function(){},nt.prototype.initExpressions=function(){};function rt(e,t,n){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?N(this.layers.length):[],this.initElement(e,t,n),this.tm=e.tm?V.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}B([Y,$e,Xe],rt);function it(e,t,n){this.textSpans=[],this.renderType=`svg`,this.initElement(e,t,n)}B([Je,Fe,Xe,Ne,Pe,Le,Qe],it),it.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=P(`text`))},it.prototype.buildTextContents=function(e){for(var t=0,n=e.length,r=[],i=``;t<n;)e[t]===`\r`||e[t]===``?(r.push(i),i=``):i+=e[t],t+=1;return r.push(i),r},it.prototype.buildNewText=function(){var e,t,n=this.textProperty.currentData;this.renderedLetters=N(n?n.l.length:0),n.fc?this.layerElement.setAttribute(`fill`,this.buildColor(n.fc)):this.layerElement.setAttribute(`fill`,`rgba(0,0,0,0)`),n.sc&&(this.layerElement.setAttribute(`stroke`,this.buildColor(n.sc)),this.layerElement.setAttribute(`stroke-width`,n.sw)),this.layerElement.setAttribute(`font-size`,n.finalSize);var r=this.globalData.fontManager.getFontByName(n.f);if(r.fClass)this.layerElement.setAttribute(`class`,r.fClass);else{this.layerElement.setAttribute(`font-family`,r.fFamily);var i=n.fWeight,a=n.fStyle;this.layerElement.setAttribute(`font-style`,a),this.layerElement.setAttribute(`font-weight`,i)}this.layerElement.setAttribute(`aria-label`,n.t);var o=n.l||[],s=!!this.globalData.fontManager.chars;t=o.length;var c,l=this.mHelper,u,d=``,f=this.data.singleShape,p=0,m=0,h=!0,g=n.tr*.001*n.finalSize;if(f&&!s&&!n.sz){var _=this.textContainer,v=`start`;switch(n.j){case 1:v=`end`;break;case 2:v=`middle`;break;default:v=`start`}_.setAttribute(`text-anchor`,v),_.setAttribute(`letter-spacing`,g);var y=this.buildTextContents(n.finalText);for(t=y.length,m=n.ps?n.ps[1]+n.ascent:0,e=0;e<t;e+=1)c=this.textSpans[e]||P(`tspan`),c.textContent=y[e],c.setAttribute(`x`,0),c.setAttribute(`y`,m),c.style.display=`inherit`,_.appendChild(c),this.textSpans[e]=c,m+=n.finalLineHeight;this.layerElement.appendChild(_)}else{var b=this.textSpans.length,x,S;for(e=0;e<t;e+=1)s&&f&&e!==0||(c=b>e?this.textSpans[e]:P(s?`path`:`text`),b<=e&&(c.setAttribute(`stroke-linecap`,`butt`),c.setAttribute(`stroke-linejoin`,`round`),c.setAttribute(`stroke-miterlimit`,`4`),this.textSpans[e]=c,this.layerElement.appendChild(c)),c.style.display=`inherit`),l.reset(),l.scale(n.finalSize/100,n.finalSize/100),f&&(o[e].n&&(p=-g,m+=n.yOffset,m+=+!!h,h=!1),this.applyTextPropertiesToMatrix(n,l,o[e].line,p,m),p+=o[e].l||0,p+=g),s?(S=this.globalData.fontManager.getCharData(n.finalText[e],r.fStyle,this.globalData.fontManager.getFontByName(n.f).fFamily),x=S&&S.data||{},u=x.shapes?x.shapes[0].it:[],f?d+=this.createPathShape(l,u):c.setAttribute(`d`,this.createPathShape(l,u))):(f&&c.setAttribute(`transform`,`translate(`+l.props[12]+`,`+l.props[13]+`)`),c.textContent=o[e].val,c.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`));f&&c&&c.setAttribute(`d`,d)}for(;e<this.textSpans.length;)this.textSpans[e].style.display=`none`,e+=1;this._sizeChanged=!0},it.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},it.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var e,t,n=this.textAnimator.renderedLetters,r=this.textProperty.currentData.l;t=r.length;var i,a;for(e=0;e<t;e+=1)r[e].n||(i=n[e],a=this.textSpans[e],i._mdf.m&&a.setAttribute(`transform`,i.m),i._mdf.o&&a.setAttribute(`opacity`,i.o),i._mdf.sw&&a.setAttribute(`stroke-width`,i.sw),i._mdf.sc&&a.setAttribute(`stroke`,i.sc),i._mdf.fc&&a.setAttribute(`fill`,i.fc))}};function X(e,t,n){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,t,n),this.prevViewData=[]}B([Je,Fe,Xe,Ze,Ne,Pe,Le],X),X.prototype.initSecondaryElement=function(){},X.prototype.identityMatrix=new R,X.prototype.buildExpressionInterface=function(){},X.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},X.prototype.filterUniqueShapes=function(){var e,t=this.shapes.length,n,r,i=this.stylesList.length,a,o=[],s=!1;for(r=0;r<i;r+=1){for(a=this.stylesList[r],s=!1,o.length=0,e=0;e<t;e+=1)n=this.shapes[e],n.styles.indexOf(a)!==-1&&(o.push(n),s=n._isAnimated||s);o.length>1&&s&&this.setShapesAsAnimated(o)}},X.prototype.setShapesAsAnimated=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t].setAsAnimated()},X.prototype.createStyleElement=function(e,n){var r,i=new ze(e,n),a=i.pElem;return e.ty===`st`?r=new He(this,e,i):e.ty===`fl`?r=new Ue(this,e,i):(e.ty===`gf`||e.ty===`gs`)&&(r=new(e.ty===`gf`?We:Ge)(this,e,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),a.setAttribute(`mask`,`url(`+t+`#`+r.maskId+`)`))),(e.ty===`st`||e.ty===`gs`)&&(a.setAttribute(`stroke-linecap`,ee[e.lc||2]),a.setAttribute(`stroke-linejoin`,te[e.lj||2]),a.setAttribute(`fill-opacity`,`0`),e.lj===1&&a.setAttribute(`stroke-miterlimit`,e.ml)),e.r===2&&a.setAttribute(`fill-rule`,`evenodd`),e.ln&&a.setAttribute(`id`,e.ln),e.cl&&a.setAttribute(`class`,e.cl),e.bm&&(a.style[`mix-blend-mode`]=L(e.bm)),this.stylesList.push(i),this.addToAnimatedContents(e,r),r},X.prototype.createGroupElement=function(e){var t=new Ke;return e.ln&&t.gr.setAttribute(`id`,e.ln),e.cl&&t.gr.setAttribute(`class`,e.cl),e.bm&&(t.gr.style[`mix-blend-mode`]=L(e.bm)),t},X.prototype.createTransformElement=function(e,t){var n=ce.getTransformProperty(this,e,this),r=new Ve(n,n.o,t);return this.addToAnimatedContents(e,r),r},X.prototype.createShapeElement=function(e,t,n){var r=4;e.ty===`rc`?r=5:e.ty===`el`?r=6:e.ty===`sr`&&(r=7);var i=new Be(t,n,le.getShapeProp(this,e,r,this));return this.shapes.push(i),this.addShapeToModifiers(i),this.addToAnimatedContents(e,i),i},X.prototype.addToAnimatedContents=function(e,t){for(var n=0,r=this.animatedContents.length;n<r;){if(this.animatedContents[n].element===t)return;n+=1}this.animatedContents.push({fn:qe.createRenderFunction(e),element:t,data:e})},X.prototype.setElementStyles=function(e){var t=e.styles,n,r=this.stylesList.length;for(n=0;n<r;n+=1)this.stylesList[n].closed||t.push(this.stylesList[n])},X.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,t=this.itemsData.length;for(e=0;e<t;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),t=this.dynamicProperties.length,e=0;e<t;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},X.prototype.searchShapes=function(e,t,n,r,i,a,o){var s=[].concat(a),c,l=e.length-1,u,d,f=[],p=[],m,h,g;for(c=l;c>=0;--c){if(g=this.searchProcessedElement(e[c]),g?t[c]=n[g-1]:e[c]._render=o,e[c].ty===`fl`||e[c].ty===`st`||e[c].ty===`gf`||e[c].ty===`gs`)g?t[c].style.closed=!1:t[c]=this.createStyleElement(e[c],i),e[c]._render&&t[c].style.pElem.parentNode!==r&&r.appendChild(t[c].style.pElem),f.push(t[c].style);else if(e[c].ty===`gr`){if(!g)t[c]=this.createGroupElement(e[c]);else for(d=t[c].it.length,u=0;u<d;u+=1)t[c].prevViewData[u]=t[c].it[u];this.searchShapes(e[c].it,t[c].it,t[c].prevViewData,t[c].gr,i+1,s,o),e[c]._render&&t[c].gr.parentNode!==r&&r.appendChild(t[c].gr)}else e[c].ty===`tr`?(g||(t[c]=this.createTransformElement(e[c],r)),m=t[c].transform,s.push(m)):e[c].ty===`sh`||e[c].ty===`rc`||e[c].ty===`el`||e[c].ty===`sr`?(g||(t[c]=this.createShapeElement(e[c],s,i)),this.setElementStyles(t[c])):e[c].ty===`tm`||e[c].ty===`rd`||e[c].ty===`ms`||e[c].ty===`pb`?(g?(h=t[c],h.closed=!1):(h=U.getModifier(e[c].ty),h.init(this,e[c]),t[c]=h,this.shapeModifiers.push(h)),p.push(h)):e[c].ty===`rp`&&(g?(h=t[c],h.closed=!0):(h=U.getModifier(e[c].ty),t[c]=h,h.init(this,e,c,t),this.shapeModifiers.push(h),o=!1),p.push(h));this.addProcessedElement(e[c],c+1)}for(l=f.length,c=0;c<l;c+=1)f[c].closed=!0;for(l=p.length,c=0;c<l;c+=1)p[c].closed=!0},X.prototype.renderInnerContent=function(){this.renderModifiers();var e,t=this.stylesList.length;for(e=0;e<t;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<t;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute(`d`,this.stylesList[e].d),this.stylesList[e].d=`M0 0`+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute(`d`,this.stylesList[e].d||`M0 0`))},X.prototype.renderShape=function(){var e,t=this.animatedContents.length,n;for(e=0;e<t;e+=1)n=this.animatedContents[e],(this._isFirstFrame||n.element._isAnimated)&&n.data!==!0&&n.fn(n.data,n.element,this._isFirstFrame)},X.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function at(e,t){this.filterManager=t;var n=P(`feColorMatrix`);if(n.setAttribute(`type`,`matrix`),n.setAttribute(`color-interpolation-filters`,`linearRGB`),n.setAttribute(`values`,`0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0`),n.setAttribute(`result`,`f1`),e.appendChild(n),n=P(`feColorMatrix`),n.setAttribute(`type`,`matrix`),n.setAttribute(`color-interpolation-filters`,`sRGB`),n.setAttribute(`values`,`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`),n.setAttribute(`result`,`f2`),e.appendChild(n),this.matrixFilter=n,t.effectElements[2].p.v!==100||t.effectElements[2].p.k){var r=P(`feMerge`);e.appendChild(r);var i=P(`feMergeNode`);i.setAttribute(`in`,`SourceGraphic`),r.appendChild(i),i=P(`feMergeNode`),i.setAttribute(`in`,`f2`),r.appendChild(i)}}at.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[0].p.v,n=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute(`values`,n[0]-t[0]+` 0 0 0 `+t[0]+` `+(n[1]-t[1])+` 0 0 0 `+t[1]+` `+(n[2]-t[2])+` 0 0 0 `+t[2]+` 0 0 0 `+r+` 0`)}};function ot(e,t){this.filterManager=t;var n=P(`feColorMatrix`);n.setAttribute(`type`,`matrix`),n.setAttribute(`color-interpolation-filters`,`sRGB`),n.setAttribute(`values`,`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0`),e.appendChild(n),this.matrixFilter=n}ot.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[2].p.v,n=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute(`values`,`0 0 0 0 `+t[0]+` 0 0 0 0 `+t[1]+` 0 0 0 0 `+t[2]+` 0 0 0 `+n+` 0`)}};function st(e,t){e.setAttribute(`x`,`-100%`),e.setAttribute(`y`,`-100%`),e.setAttribute(`width`,`300%`),e.setAttribute(`height`,`300%`),this.filterManager=t;var n=P(`feGaussianBlur`);e.appendChild(n),this.feGaussianBlur=n}st.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[0].p.v*.3,n=this.filterManager.effectElements[1].p.v,r=n==3?0:t,i=n==2?0:t;this.feGaussianBlur.setAttribute(`stdDeviation`,r+` `+i);var a=this.filterManager.effectElements[2].p.v==1?`wrap`:`duplicate`;this.feGaussianBlur.setAttribute(`edgeMode`,a)}};function ct(e,t){this.initialized=!1,this.filterManager=t,this.elem=e,this.paths=[]}ct.prototype.initialize=function(){var e=this.elem.layerElement.children||this.elem.layerElement.childNodes,n,r,i,a;for(this.filterManager.effectElements[1].p.v===1?(a=this.elem.maskManager.masksProperties.length,i=0):(i=this.filterManager.effectElements[0].p.v-1,a=i+1),r=P(`g`),r.setAttribute(`fill`,`none`),r.setAttribute(`stroke-linecap`,`round`),r.setAttribute(`stroke-dashoffset`,1);i<a;i+=1)n=P(`path`),r.appendChild(n),this.paths.push({p:n,m:i});if(this.filterManager.effectElements[10].p.v===3){var o=P(`mask`),s=w();o.setAttribute(`id`,s),o.setAttribute(`mask-type`,`alpha`),o.appendChild(r),this.elem.globalData.defs.appendChild(o);var c=P(`g`);for(c.setAttribute(`mask`,`url(`+t+`#`+s+`)`);e[0];)c.appendChild(e[0]);this.elem.layerElement.appendChild(c),this.masker=o,r.setAttribute(`stroke`,`#fff`)}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2)for(e=this.elem.layerElement.children||this.elem.layerElement.childNodes;e.length;)this.elem.layerElement.removeChild(e[0]);this.elem.layerElement.appendChild(r),this.elem.layerElement.removeAttribute(`mask`),r.setAttribute(`stroke`,`#fff`)}this.initialized=!0,this.pathMasker=r},ct.prototype.renderFrame=function(e){this.initialized||this.initialize();var t,n=this.paths.length,r,i;for(t=0;t<n;t+=1)if(this.paths[t].m!==-1&&(r=this.elem.maskManager.viewData[this.paths[t].m],i=this.paths[t].p,(e||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute(`d`,r.lastPath),e||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var o=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,s=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,c=i.getTotalLength();a=`0 0 0 `+c*o+` `;for(var l=c*(s-o),d=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01,f=Math.floor(l/d),p=0;p<f;p+=1)a+=`1 `+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01+` `;a+=`0 `+c*10+` 0 0`}else a=`1 `+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01;i.setAttribute(`stroke-dasharray`,a)}if((e||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute(`stroke-width`,this.filterManager.effectElements[4].p.v*2),(e||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute(`opacity`,this.filterManager.effectElements[6].p.v),(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2)&&(e||this.filterManager.effectElements[3].p._mdf)){var m=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute(`stroke`,`rgb(`+u(m[0]*255)+`,`+u(m[1]*255)+`,`+u(m[2]*255)+`)`)}};function lt(e,t){this.filterManager=t;var n=P(`feColorMatrix`);n.setAttribute(`type`,`matrix`),n.setAttribute(`color-interpolation-filters`,`linearRGB`),n.setAttribute(`values`,`0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0`),n.setAttribute(`result`,`f1`),e.appendChild(n);var r=P(`feComponentTransfer`);r.setAttribute(`color-interpolation-filters`,`sRGB`),e.appendChild(r),this.matrixFilter=r;var i=P(`feFuncR`);i.setAttribute(`type`,`table`),r.appendChild(i),this.feFuncR=i;var a=P(`feFuncG`);a.setAttribute(`type`,`table`),r.appendChild(a),this.feFuncG=a;var o=P(`feFuncB`);o.setAttribute(`type`,`table`),r.appendChild(o),this.feFuncB=o}lt.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[0].p.v,n=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v,i=r[0]+` `+n[0]+` `+t[0],a=r[1]+` `+n[1]+` `+t[1],o=r[2]+` `+n[2]+` `+t[2];this.feFuncR.setAttribute(`tableValues`,i),this.feFuncG.setAttribute(`tableValues`,a),this.feFuncB.setAttribute(`tableValues`,o)}};function ut(e,t){this.filterManager=t;var n=this.filterManager.effectElements,r=P(`feComponentTransfer`);(n[10].p.k||n[10].p.v!==0||n[11].p.k||n[11].p.v!==1||n[12].p.k||n[12].p.v!==1||n[13].p.k||n[13].p.v!==0||n[14].p.k||n[14].p.v!==1)&&(this.feFuncR=this.createFeFunc(`feFuncR`,r)),(n[17].p.k||n[17].p.v!==0||n[18].p.k||n[18].p.v!==1||n[19].p.k||n[19].p.v!==1||n[20].p.k||n[20].p.v!==0||n[21].p.k||n[21].p.v!==1)&&(this.feFuncG=this.createFeFunc(`feFuncG`,r)),(n[24].p.k||n[24].p.v!==0||n[25].p.k||n[25].p.v!==1||n[26].p.k||n[26].p.v!==1||n[27].p.k||n[27].p.v!==0||n[28].p.k||n[28].p.v!==1)&&(this.feFuncB=this.createFeFunc(`feFuncB`,r)),(n[31].p.k||n[31].p.v!==0||n[32].p.k||n[32].p.v!==1||n[33].p.k||n[33].p.v!==1||n[34].p.k||n[34].p.v!==0||n[35].p.k||n[35].p.v!==1)&&(this.feFuncA=this.createFeFunc(`feFuncA`,r)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(r.setAttribute(`color-interpolation-filters`,`sRGB`),e.appendChild(r),r=P(`feComponentTransfer`)),(n[3].p.k||n[3].p.v!==0||n[4].p.k||n[4].p.v!==1||n[5].p.k||n[5].p.v!==1||n[6].p.k||n[6].p.v!==0||n[7].p.k||n[7].p.v!==1)&&(r.setAttribute(`color-interpolation-filters`,`sRGB`),e.appendChild(r),this.feFuncRComposed=this.createFeFunc(`feFuncR`,r),this.feFuncGComposed=this.createFeFunc(`feFuncG`,r),this.feFuncBComposed=this.createFeFunc(`feFuncB`,r))}ut.prototype.createFeFunc=function(e,t){var n=P(e);return n.setAttribute(`type`,`table`),t.appendChild(n),n},ut.prototype.getTableValue=function(e,t,n,r,i){for(var a=0,o=256,s,c=Math.min(e,t),l=Math.max(e,t),u=Array.call(null,{length:o}),d,f=0,p=i-r,m=t-e;a<=256;)s=a/256,d=s<=c?m<0?i:r:s>=l?m<0?r:i:r+p*((s-e)/m)**(1/n),u[f]=d,f+=1,a+=256/(o-1);return u.join(` `)},ut.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t,n=this.filterManager.effectElements;this.feFuncRComposed&&(e||n[3].p._mdf||n[4].p._mdf||n[5].p._mdf||n[6].p._mdf||n[7].p._mdf)&&(t=this.getTableValue(n[3].p.v,n[4].p.v,n[5].p.v,n[6].p.v,n[7].p.v),this.feFuncRComposed.setAttribute(`tableValues`,t),this.feFuncGComposed.setAttribute(`tableValues`,t),this.feFuncBComposed.setAttribute(`tableValues`,t)),this.feFuncR&&(e||n[10].p._mdf||n[11].p._mdf||n[12].p._mdf||n[13].p._mdf||n[14].p._mdf)&&(t=this.getTableValue(n[10].p.v,n[11].p.v,n[12].p.v,n[13].p.v,n[14].p.v),this.feFuncR.setAttribute(`tableValues`,t)),this.feFuncG&&(e||n[17].p._mdf||n[18].p._mdf||n[19].p._mdf||n[20].p._mdf||n[21].p._mdf)&&(t=this.getTableValue(n[17].p.v,n[18].p.v,n[19].p.v,n[20].p.v,n[21].p.v),this.feFuncG.setAttribute(`tableValues`,t)),this.feFuncB&&(e||n[24].p._mdf||n[25].p._mdf||n[26].p._mdf||n[27].p._mdf||n[28].p._mdf)&&(t=this.getTableValue(n[24].p.v,n[25].p.v,n[26].p.v,n[27].p.v,n[28].p.v),this.feFuncB.setAttribute(`tableValues`,t)),this.feFuncA&&(e||n[31].p._mdf||n[32].p._mdf||n[33].p._mdf||n[34].p._mdf||n[35].p._mdf)&&(t=this.getTableValue(n[31].p.v,n[32].p.v,n[33].p.v,n[34].p.v,n[35].p.v),this.feFuncA.setAttribute(`tableValues`,t))}};function dt(e,t){var n=t.container.globalData.renderConfig.filterSize;e.setAttribute(`x`,n.x),e.setAttribute(`y`,n.y),e.setAttribute(`width`,n.width),e.setAttribute(`height`,n.height),this.filterManager=t;var r=P(`feGaussianBlur`);r.setAttribute(`in`,`SourceAlpha`),r.setAttribute(`result`,`drop_shadow_1`),r.setAttribute(`stdDeviation`,`0`),this.feGaussianBlur=r,e.appendChild(r);var i=P(`feOffset`);i.setAttribute(`dx`,`25`),i.setAttribute(`dy`,`0`),i.setAttribute(`in`,`drop_shadow_1`),i.setAttribute(`result`,`drop_shadow_2`),this.feOffset=i,e.appendChild(i);var a=P(`feFlood`);a.setAttribute(`flood-color`,`#00ff00`),a.setAttribute(`flood-opacity`,`1`),a.setAttribute(`result`,`drop_shadow_3`),this.feFlood=a,e.appendChild(a);var o=P(`feComposite`);o.setAttribute(`in`,`drop_shadow_3`),o.setAttribute(`in2`,`drop_shadow_2`),o.setAttribute(`operator`,`in`),o.setAttribute(`result`,`drop_shadow_4`),e.appendChild(o);var s=P(`feMerge`);e.appendChild(s);var c=P(`feMergeNode`);s.appendChild(c),c=P(`feMergeNode`),c.setAttribute(`in`,`SourceGraphic`),this.feMergeNode=c,this.feMerge=s,this.originalNodeAdded=!1,s.appendChild(c)}dt.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){if((e||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute(`stdDeviation`,this.filterManager.effectElements[4].p.v/4),e||this.filterManager.effectElements[0].p._mdf){var t=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute(`flood-color`,A(Math.round(t[0]*255),Math.round(t[1]*255),Math.round(t[2]*255)))}if((e||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute(`flood-opacity`,this.filterManager.effectElements[1].p.v/255),e||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var n=this.filterManager.effectElements[3].p.v,r=(this.filterManager.effectElements[2].p.v-90)*h,i=n*Math.cos(r),a=n*Math.sin(r);this.feOffset.setAttribute(`dx`,i),this.feOffset.setAttribute(`dy`,a)}}};var ft=[];function pt(e,t,n){this.initialized=!1,this.filterManager=t,this.filterElem=e,this.elem=n,n.matteElement=P(`g`),n.matteElement.appendChild(n.layerElement),n.matteElement.appendChild(n.transformedElement),n.baseElement=n.matteElement}pt.prototype.findSymbol=function(e){for(var t=0,n=ft.length;t<n;){if(ft[t]===e)return ft[t];t+=1}return null},pt.prototype.replaceInParent=function(e,t){var n=e.layerElement.parentNode;if(n){for(var r=n.children,i=0,a=r.length;i<a&&r[i]!==e.layerElement;)i+=1;var o;i<=a-2&&(o=r[i+1]);var s=P(`use`);s.setAttribute(`href`,`#`+t),o?n.insertBefore(s,o):n.appendChild(s)}},pt.prototype.setElementAsMask=function(e,t){if(!this.findSymbol(t)){var n=w(),r=P(`mask`);r.setAttribute(`id`,t.layerId),r.setAttribute(`mask-type`,`alpha`),ft.push(t);var i=e.globalData.defs;i.appendChild(r);var a=P(`symbol`);a.setAttribute(`id`,n),this.replaceInParent(t,n),a.appendChild(t.layerElement),i.appendChild(a);var o=P(`use`);o.setAttribute(`href`,`#`+n),r.appendChild(o),t.data.hd=!1,t.show()}e.setMatte(t.layerId)},pt.prototype.initialize=function(){for(var e=this.filterManager.effectElements[0].p.v,t=this.elem.comp.elements,n=0,r=t.length;n<r;)t[n]&&t[n].data.ind===e&&this.setElementAsMask(this.elem,t[n]),n+=1;this.initialized=!0},pt.prototype.renderFrame=function(){this.initialized||this.initialize()};function mt(){}var Z=function(){var t={},n=[],r=0,i=0,a=0,o=!0,s=!1;function c(e){for(var t=0,r=e.target;t<i;)n[t].animation===r&&(n.splice(t,1),--t,--i,r.isPaused||f()),t+=1}function l(e,t){if(!e)return null;for(var r=0;r<i;){if(n[r].elem===e&&n[r].elem!==null)return n[r].animation;r+=1}var a=new Q;return p(a,e),a.setData(e,t),a}function u(){var e,t=n.length,r=[];for(e=0;e<t;e+=1)r.push(n[e].animation);return r}function d(){a+=1,D()}function f(){--a}function p(e,t){e.addEventListener(`destroy`,c),e.addEventListener(`_active`,d),e.addEventListener(`_idle`,f),n.push({elem:t,animation:e}),i+=1}function m(e){var t=new Q;return p(t,null),t.setParams(e),t}function h(e,t){for(var r=0;r<i;r+=1)n[r].animation.setSpeed(e,t)}function g(e,t){for(var r=0;r<i;r+=1)n[r].animation.setDirection(e,t)}function _(e){for(var t=0;t<i;t+=1)n[t].animation.play(e)}function v(t){for(var c=t-r,l=0;l<i;l+=1)n[l].animation.advanceTime(c);r=t,a&&!s?e.requestAnimationFrame(v):o=!0}function y(t){r=t,e.requestAnimationFrame(v)}function b(e){for(var t=0;t<i;t+=1)n[t].animation.pause(e)}function x(e,t,r){for(var a=0;a<i;a+=1)n[a].animation.goToAndStop(e,t,r)}function S(e){for(var t=0;t<i;t+=1)n[t].animation.stop(e)}function C(e){for(var t=0;t<i;t+=1)n[t].animation.togglePause(e)}function w(e){for(var t=i-1;t>=0;--t)n[t].animation.destroy(e)}function T(e,t,n){var r=[].concat([].slice.call(document.getElementsByClassName(`lottie`)),[].slice.call(document.getElementsByClassName(`bodymovin`))),i,a=r.length;for(i=0;i<a;i+=1)n&&r[i].setAttribute(`data-bm-type`,n),l(r[i],e);if(t&&a===0){n||=`svg`;var o=document.getElementsByTagName(`body`)[0];o.innerText=``;var s=F(`div`);s.style.width=`100%`,s.style.height=`100%`,s.setAttribute(`data-bm-type`,n),o.appendChild(s),l(s,e)}}function E(){for(var e=0;e<i;e+=1)n[e].animation.resize()}function D(){!s&&a&&(o&&=(e.requestAnimationFrame(y),!1))}function O(){s=!0}function k(){s=!1,D()}function A(e,t){for(var r=0;r<i;r+=1)n[r].animation.setVolume(e,t)}function j(e){for(var t=0;t<i;t+=1)n[t].animation.mute(e)}function M(e){for(var t=0;t<i;t+=1)n[t].animation.unmute(e)}return t.registerAnimation=l,t.loadAnimation=m,t.setSpeed=h,t.setDirection=g,t.play=_,t.pause=b,t.stop=S,t.togglePause=C,t.searchAnimations=T,t.resize=E,t.goToAndStop=x,t.destroy=w,t.freeze=O,t.unfreeze=k,t.setVolume=A,t.mute=j,t.unmute=M,t.getRegisteredAnimations=u,t}(),Q=function(){this._cbs=[],this.name=``,this.path=``,this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=w(),this.assetsPath=``,this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=i,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=p(),this.imagePreloader=new ge,this.audioController=he(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};B([j],Q),Q.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var t=`svg`;switch(e.animType?t=e.animType:e.renderer&&(t=e.renderer),t){case`canvas`:this.renderer=new CanvasRenderer(this,e.rendererSettings);break;case`svg`:this.renderer=new Y(this,e.rendererSettings);break;default:this.renderer=new HybridRenderer(this,e.rendererSettings)}this.imagePreloader.setCacheType(t,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=t,this.loop=e.loop===``||e.loop===null||e.loop===void 0||e.loop===!0||e.loop!==!1&&parseInt(e.loop,10),this.autoplay=`autoplay`in e?e.autoplay:!0,this.name=e.name?e.name:``,this.autoloadSegments=!Object.prototype.hasOwnProperty.call(e,`autoloadSegments`)||e.autoloadSegments,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(this.path=e.path.lastIndexOf(`\\`)===-1?e.path.substr(0,e.path.lastIndexOf(`/`)+1):e.path.substr(0,e.path.lastIndexOf(`\\`)+1),this.fileName=e.path.substr(e.path.lastIndexOf(`/`)+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(`.json`)),ae.loadAnimation(e.path,this.configAnimation,this.onSetupError))},Q.prototype.onSetupError=function(){this.trigger(`data_failed`)},Q.prototype.setupAnimation=function(e){ae.completeAnimation(e,this.configAnimation)},Q.prototype.setData=function(e,t){t&&typeof t!=`object`&&(t=JSON.parse(t));var n={wrapper:e,animationData:t},r=e.attributes;n.path=r.getNamedItem(`data-animation-path`)?r.getNamedItem(`data-animation-path`).value:r.getNamedItem(`data-bm-path`)?r.getNamedItem(`data-bm-path`).value:r.getNamedItem(`bm-path`)?r.getNamedItem(`bm-path`).value:``,n.animType=r.getNamedItem(`data-anim-type`)?r.getNamedItem(`data-anim-type`).value:r.getNamedItem(`data-bm-type`)?r.getNamedItem(`data-bm-type`).value:r.getNamedItem(`bm-type`)?r.getNamedItem(`bm-type`).value:r.getNamedItem(`data-bm-renderer`)?r.getNamedItem(`data-bm-renderer`).value:r.getNamedItem(`bm-renderer`)?r.getNamedItem(`bm-renderer`).value:`canvas`;var i=r.getNamedItem(`data-anim-loop`)?r.getNamedItem(`data-anim-loop`).value:r.getNamedItem(`data-bm-loop`)?r.getNamedItem(`data-bm-loop`).value:r.getNamedItem(`bm-loop`)?r.getNamedItem(`bm-loop`).value:``;i===`false`?n.loop=!1:i===`true`?n.loop=!0:i!==``&&(n.loop=parseInt(i,10)),n.autoplay=(r.getNamedItem(`data-anim-autoplay`)?r.getNamedItem(`data-anim-autoplay`).value:r.getNamedItem(`data-bm-autoplay`)?r.getNamedItem(`data-bm-autoplay`).value:!r.getNamedItem(`bm-autoplay`)||r.getNamedItem(`bm-autoplay`).value)!==`false`,n.name=r.getNamedItem(`data-name`)?r.getNamedItem(`data-name`).value:r.getNamedItem(`data-bm-name`)?r.getNamedItem(`data-bm-name`).value:r.getNamedItem(`bm-name`)?r.getNamedItem(`bm-name`).value:``,(r.getNamedItem(`data-anim-prerender`)?r.getNamedItem(`data-anim-prerender`).value:r.getNamedItem(`data-bm-prerender`)?r.getNamedItem(`data-bm-prerender`).value:r.getNamedItem(`bm-prerender`)?r.getNamedItem(`bm-prerender`).value:``)===`false`&&(n.prerender=!1),this.setParams(n)},Q.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var t=this.animationData.layers,n,r=t.length,i=e.layers,a,o=i.length;for(a=0;a<o;a+=1)for(n=0;n<r;){if(t[n].id===i[a].id){t[n]=i[a];break}n+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(r=e.assets.length,n=0;n<r;n+=1)this.animationData.assets.push(e.assets[n]);this.animationData.__complete=!1,ae.completeAnimation(this.animationData,this.onSegmentComplete)},Q.prototype.onSegmentComplete=function(e){this.animationData=e,o&&o.initExpressions(this),this.loadNextSegment()},Q.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||e.length===0||!this.autoloadSegments)this.trigger(`data_ready`),this.timeCompleted=this.totalFrames;else{var t=e.shift();this.timeCompleted=t.time*this.frameRate;var n=this.path+this.fileName+`_`+this.segmentPos+`.json`;this.segmentPos+=1,ae.loadData(n,this.includeLayers.bind(this),function(){this.trigger(`data_failed`)}.bind(this))}},Q.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Q.prototype.imagesLoaded=function(){this.trigger(`loaded_images`),this.checkLoaded()},Q.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Q.prototype.configAnimation=function(e){if(this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||=[],this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=Ae(e.markers||[]),this.trigger(`config_ready`),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},Q.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Q.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!==`canvas`)&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,o&&o.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger(`DOMLoaded`)}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},Q.prototype.resize=function(){this.renderer.updateContainerSize()},Q.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},Q.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger(`enterFrame`),this.renderFrame(),this.trigger(`drawnFrame`)},Q.prototype.renderFrame=function(){if(this.isLoaded!==!1&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},Q.prototype.play=function(e){e&&this.name!==e||this.isPaused===!0&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger(`_active`)))},Q.prototype.pause=function(e){e&&this.name!==e||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger(`_idle`),this.audioController.pause())},Q.prototype.togglePause=function(e){e&&this.name!==e||(this.isPaused===!0?this.play():this.pause())},Q.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Q.prototype.getMarkerData=function(e){for(var t,n=0;n<this.markers.length;n+=1)if(t=this.markers[n],t.payload&&t.payload.name===e)return t;return null},Q.prototype.goToAndStop=function(e,t,n){if(!(n&&this.name!==n)){var r=Number(e);if(isNaN(r)){var i=this.getMarkerData(e);i&&this.goToAndStop(i.time,!0)}else t?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},Q.prototype.goToAndPlay=function(e,t,n){if(!(n&&this.name!==n)){var r=Number(e);if(isNaN(r)){var i=this.getMarkerData(e);i&&(i.duration?this.playSegments([i.time,i.time+i.duration],!0):this.goToAndStop(i.time,!0))}else this.goToAndStop(r,t,n);this.play()}},Q.prototype.advanceTime=function(e){if(this.isPaused!==!0&&this.isLoaded!==!1){var t=this.currentRawFrame+e*this.frameModifier,n=!1;t>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(t>this.totalFrames?t%this.totalFrames:0)||(n=!0,t=this.totalFrames-1):t>=this.totalFrames?(this.playCount+=1,this.checkSegments(t%this.totalFrames)||(this.setCurrentRawFrameValue(t%this.totalFrames),this._completedLoop=!0,this.trigger(`loopComplete`))):this.setCurrentRawFrameValue(t):t<0?this.checkSegments(t%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+t%this.totalFrames),this._completedLoop?this.trigger(`loopComplete`):this._completedLoop=!0):(n=!0,t=0)):this.setCurrentRawFrameValue(t),n&&(this.setCurrentRawFrameValue(t),this.pause(),this.trigger(`complete`))}},Q.prototype.adjustSegment=function(e,t){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-t)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+t)),this.trigger(`segmentStart`)},Q.prototype.setSegment=function(e,t){var n=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?n=e:this.currentRawFrame+this.firstFrame>t&&(n=t-e)),this.firstFrame=e,this.totalFrames=t-e,this.timeCompleted=this.totalFrames,n!==-1&&this.goToAndStop(n,!0)},Q.prototype.playSegments=function(e,t){if(t&&(this.segments.length=0),typeof e[0]==`object`){var n,r=e.length;for(n=0;n<r;n+=1)this.segments.push(e[n])}else this.segments.push(e);this.segments.length&&t&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Q.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},Q.prototype.checkSegments=function(e){return this.segments.length?(this.adjustSegment(this.segments.shift(),e),!0):!1},Q.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger(`destroy`),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},Q.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},Q.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},Q.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},Q.prototype.setVolume=function(e,t){t&&this.name!==t||this.audioController.setVolume(e)},Q.prototype.getVolume=function(){return this.audioController.getVolume()},Q.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},Q.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},Q.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Q.prototype.getPath=function(){return this.path},Q.prototype.getAssetsPath=function(e){var t=``;if(e.e)t=e.p;else if(this.assetsPath){var n=e.p;n.indexOf(`images/`)!==-1&&(n=n.split(`/`)[1]),t=this.assetsPath+n}else t=this.path,t+=e.u?e.u:``,t+=e.p;return t},Q.prototype.getAssetData=function(e){for(var t=0,n=this.assets.length;t<n;){if(e===this.assets[t].id)return this.assets[t];t+=1}return null},Q.prototype.hide=function(){this.renderer.hide()},Q.prototype.show=function(){this.renderer.show()},Q.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},Q.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case`enterFrame`:case`drawnFrame`:this.triggerEvent(e,new _(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case`loopComplete`:this.triggerEvent(e,new y(e,this.loop,this.playCount,this.frameMult));break;case`complete`:this.triggerEvent(e,new v(e,this.frameMult));break;case`segmentStart`:this.triggerEvent(e,new b(e,this.firstFrame,this.totalFrames));break;case`destroy`:this.triggerEvent(e,new x(e,this));break;default:this.triggerEvent(e)}e===`enterFrame`&&this.onEnterFrame&&this.onEnterFrame.call(this,new _(e,this.currentFrame,this.totalFrames,this.frameMult)),e===`loopComplete`&&this.onLoopComplete&&this.onLoopComplete.call(this,new y(e,this.loop,this.playCount,this.frameMult)),e===`complete`&&this.onComplete&&this.onComplete.call(this,new v(e,this.frameMult)),e===`segmentStart`&&this.onSegmentStart&&this.onSegmentStart.call(this,new b(e,this.firstFrame,this.totalFrames)),e===`destroy`&&this.onDestroy&&this.onDestroy.call(this,new x(e,this))},Q.prototype.triggerRenderFrameError=function(e){var t=new S(e,this.currentFrame);this.triggerEvent(`error`,t),this.onError&&this.onError.call(this,t)},Q.prototype.triggerConfigError=function(e){var t=new C(e,this.currentFrame);this.triggerEvent(`error`,t),this.onError&&this.onError.call(this,t)};function ht(){this.effectElements=[]}var $={};function gt(e){t=e}function _t(){Dt===!0?Z.searchAnimations(Ot,Dt,kt):Z.searchAnimations()}function vt(e){i=e}function yt(e){a=e}function bt(e){return Dt===!0&&(e.animationData=JSON.parse(Ot)),Z.loadAnimation(e)}function xt(e){if(typeof e==`string`)switch(e){case`high`:m=200;break;default:case`medium`:m=50;break;case`low`:m=10}else!isNaN(e)&&e>1&&(m=e)}function St(){return typeof navigator<`u`}function Ct(e,t){e===`expressions`&&(o=t)}function wt(e){switch(e){case`propertyFactory`:return V;case`shapePropertyFactory`:return le;case`matrix`:return R;default:return null}}$.play=Z.play,$.pause=Z.pause,$.setLocationHref=gt,$.togglePause=Z.togglePause,$.setSpeed=Z.setSpeed,$.setDirection=Z.setDirection,$.stop=Z.stop,$.searchAnimations=_t,$.registerAnimation=Z.registerAnimation,$.loadAnimation=bt,$.setSubframeRendering=vt,$.resize=Z.resize,$.goToAndStop=Z.goToAndStop,$.destroy=Z.destroy,$.setQuality=xt,$.inBrowser=St,$.installPlugin=Ct,$.freeze=Z.freeze,$.unfreeze=Z.unfreeze,$.setVolume=Z.setVolume,$.mute=Z.mute,$.unmute=Z.unmute,$.getRegisteredAnimations=Z.getRegisteredAnimations,$.useWebWorker=function(e){r=e},$.setIDPrefix=yt,$.__getFactory=wt,$.version=`5.8.1`;function Tt(){document.readyState===`complete`&&(clearInterval(Mt),_t())}function Et(e){for(var t=At.split(`&`),n=0;n<t.length;n+=1){var r=t[n].split(`=`);if(decodeURIComponent(r[0])==e)return decodeURIComponent(r[1])}return null}var Dt=`__[STANDALONE]__`,Ot=`__[ANIMATIONDATA]__`,kt=``,At;if(Dt){var jt=document.getElementsByTagName(`script`);At=(jt[jt.length-1]||{src:``}).src.replace(/^[^\?]+\??/,``),kt=Et(`renderer`)}var Mt=setInterval(Tt,100);return $})})),_=i(h(),1),v=i(g(),1);s();function y(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var b=`.pera-wallet-modal-header {
  position: absolute;
  top: -44px;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pera-wallet-modal-header--mobile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;
}
.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: unset;
  box-shadow: unset;
}

.pera-wallet-modal-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #ffffff;
}

.pera-wallet-modal-header__brand-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pera-wallet-modal-header__version-number {
  color: #9d9dae;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal-header__close-button {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  background: rgba(44, 53, 89, 0.1);
  border-radius: 8px;
}

.pera-wallet-modal-header__close-button__close-icon {
  width: 20px;
  height: 20px;
}`;y(b);var x=document.createElement(`template`);x.innerHTML=`\n  <div class="${o()?`pera-wallet-modal-header pera-wallet-modal-header--mobile`:`pera-wallet-modal-header pera-wallet-modal-header--desktop`}">\n      ${o()?``:`<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              <div class="pera-wallet-modal-header__brand-text">
                <span>Pera Connect</span>

                <span class="pera-wallet-modal-header__version-number">v1.9.0</span>
              </div>
            </div>
            `} \n\n      <button\n        id="pera-wallet-modal-header-close-button"\n        class="pera-wallet-button pera-wallet-modal-header__close-button">\n        <img\n          class="pera-wallet-modal-header__close-button__close-icon"\n          src="${o()?`data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e`:`data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e`}"\n        />\n      </button>\n    </div>\n`;var S=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=b,this.shadowRoot.append(x.content.cloneNode(!0),e),this.onClose()}}onClose(){let e=this.shadowRoot?.getElementById(`pera-wallet-modal-header-close-button`),t=this.getAttribute(`modal-id`);e&&t===`pera-wallet-redirect-modal-wrapper`&&e.addEventListener(`click`,()=>{d(`pera-wallet-redirect-modal-wrapper`)})}},C=`data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e`,w=`.pera-wallet-download-qr-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 26px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

@media (max-width: 767px) {
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 51px;
  }
}`;y(w);var T=document.createElement(`template`);T.innerHTML=`
  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  
`;var E=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=w,this.shadowRoot.append(T.content.cloneNode(!0),e)}}connectedCallback(){let e=new _.default({width:205,height:205,type:`svg`,data:n,image:C,dotsOptions:{color:`#000`,type:`extra-rounded`},imageOptions:{crossOrigin:`anonymous`,margin:10},cornersSquareOptions:{type:`extra-rounded`},cornersDotOptions:{type:`dot`}}),t=this.shadowRoot?.getElementById(`pera-wallet-download-qr-code-wrapper`);t&&e.append(t)}},D=`data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e`,O=`data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e`,k=`data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e`,A=`.pera-wallet-connect-modal-desktop-mode {
  display: grid;
  grid-template-columns: 205px auto;
  gap: 70px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 364px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable:not(.pera-wallet-connect-modal-desktop-mode__default-view--extension-enabled) .pera-wallet-accordion-item .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable:not(.pera-wallet-connect-modal-desktop-mode__default-view--extension-enabled) .pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 434px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable:not(.pera-wallet-connect-modal-desktop-mode__default-view--extension-enabled) .pera-wallet-accordion-item .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {
  margin-top: 50px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {
  display: flex;
  cursor: pointer;
}
.pera-wallet-connect-modal-desktop-mode--compact {
  grid-template-columns: unset;
  gap: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet {
  padding: 28px 40px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  width: 172px;
  height: 40px;
  margin: 0 auto;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view {
  overflow: hidden;
  border-radius: 24px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item {
  margin-bottom: 0;
  border-radius: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item:not(:last-child) {
  border-bottom: 1px solid #e6e8ee;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item #pera-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle {
  padding: 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__text, .pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__bold-color {
  font-weight: 600;
  color: #1a1a1a;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 265px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-container {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-description,
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  margin: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  font-weight: 500;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper {
  margin: 4px auto 0;
  padding: 0;
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper svg {
  padding: 8px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 12px;
}
.pera-wallet-connect-modal-desktop-mode--select-account {
  width: 100%;
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: unset;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.pera-wallet-connect-modal-desktop-mode__accordion__description,
.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {
  padding: 0 40px 20px 64px;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 88px);
  padding: 48px 52px 40px;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #6a6a81;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__connect-button {
  display: block;
  width: 100%;
  height: 48px;
  border: unset;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 13px;
}

.pera-wallet-connect-qr-code-wrapper {
  width: fit-content;
  margin: 24px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-description {
  color: #838aa6;
  text-align: center;
  margin: 32px 0 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0;
  color: #6b46fe;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view__back-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  padding: 12px 24px;
  color: #3c3c49;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border: unset;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view {
  padding: 32px 37px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 24px;
}

.pera-wallet-connect-modal-download-pera-view__title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.13px;
}

.pera-wallet-connect-modal-download-pera-view__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 53px;
}

.pera-wallet-connect-modal-download-pera-view__footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: -0.04px;
  cursor: pointer;
}

#pera-wallet-iframe {
  width: 285px;
  height: 376px;
  margin: 0 auto;
  border: none;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-desktop-mode {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pera-wallet-connect-qr-code-wrapper {
    margin-top: 16px;
  }
  .pera-wallet-connect-modal-download-pera-view {
    padding: 24px;
  }
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 32px;
  }
  .pera-wallet-connect-modal-download-pera-view__footer {
    margin-top: 40px;
  }
}`;y(A);var j=`.pera-wallet-accordion-item {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);
}
.pera-wallet-accordion-item:not(:last-of-type) {
  margin-bottom: 20px;
}
.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 0;
  overflow: hidden;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}

.pera-wallet-accordion-toggle {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  color: #2c3559;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
}

.pera-wallet-accordion-icon {
  transition: all ease-in 0.2s;
}

.pera-wallet-accordion-toggle__bold-color {
  color: #1A1A1A;
  font-weight: 600;
}

.pera-wallet-accordion-toggle__content-with-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pera-wallet-accordion-toggle__label {
  padding: 4px 9px;
  color: #1C786C;
  background: #E0FAEE;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01px;
}

.pera-wallet-accordion-toggle__button {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 767px) {
  .pera-wallet-accordion-toggle {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
  }
}`;y(j);var M=document.createElement(`template`),N=document.createElement(`style`),P=document.createElement(`style`);N.textContent=A,P.textContent=j,M.innerHTML=`
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view"></div>
       

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;var F=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot&&(this.shadowRoot.append(M.content.cloneNode(!0),N,P),this.shadowRoot.addEventListener(`click`,e=>{this.handleAccordion(e)}),this.getAttribute(`compact-mode`)===`true`&&this.shadowRoot.getElementById(`pera-wallet-connect-modal-desktop-mode`)?.classList.add(`pera-wallet-connect-modal-desktop-mode--compact`))}connectedCallback(){this.renderConnectOptions();let e=this.getAttribute(`should-display-new-badge`),t=this.shadowRoot?.getElementById(`pera-extension-new-label`);e===`false`&&t?.setAttribute(`style`,`display:none`),this.handleChangeView()}renderConnectOptions(){let e=this.shadowRoot?.querySelector(`.pera-wallet-connect-modal-desktop-mode__default-view`),t=this.getAttribute(`promote-mobile`)===`true`,n=this.getAttribute(`is-extension-enabled`)===`true`,{webWalletOption:r,mobileWalletOption:i,extensionWalletOption:a}=function(e,t){let n=`\n  <div id="web-wallet-option" class="pera-wallet-accordion-item ${t||e?``:`pera-wallet-accordion-item--active`}  pera-wallet-accordion-item--web-wallet">\n            <a class="pera-wallet-accordion-toggle">\n              <button class="pera-wallet-accordion-toggle__button"></button>\n\n              <img src="${D}" class="pera-wallet-accordion-icon" />\n\n              <div class="pera-wallet-accordion-toggle__text">\n                Connect With\n\n                <span class="pera-wallet-accordion-toggle__bold-color">\n                  Pera Web\n                </span>\n              </div>\n            </a>\n  \n            <div class="pera-wallet-accordion-item__content">\n              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>\n              \n              <div\n                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">\n                <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />\n              </div>\n  \n              <p\n                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">\n                Connect with Pera Web to continue\n              </p>\n            </div>\n  \n            <button\n              id="pera-wallet-connect-web-wallet-launch-button"\n              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">\n              Launch Pera Web\n  \n              <img src="${k}" />\n            </button>\n          </div>`,r=`\n  <div id="mobile-wallet-option" class="pera-wallet-accordion-item ${!t&&e?`pera-wallet-accordion-item--active`:``}">\n            <a class="pera-wallet-accordion-toggle">\n            <button class="pera-wallet-accordion-toggle__button"></button>\n  \n              <img src="${D}" class="pera-wallet-accordion-icon" />\n  \n              <div class="pera-wallet-accordion-toggle__text">\n                Connect with\n  \n                <span class="pera-wallet-accordion-toggle__bold-color">\n                  Pera Mobile\n                </span>\n              </div>\n            </a>\n  \n            <div class="pera-wallet-accordion-item__content">\n              <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>\n  \n              <div class="pera-wallet-connect-modal-desktop-mode__download-pera-container">\n                <p\n                  class="pera-wallet-connect-modal-desktop-mode__download-pera-description">\n                    Don’t have Pera Wallet app?\n                </p>\n  \n                <button\n                  id="pera-wallet-connect-modal-desktop-mode-download-pera-button"\n                  class="pera-wallet-connect-modal-desktop-mode__download-pera-button">\n                  <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />\n  \n                  Download Pera Wallet\n                </button>\n              </div>\n            </div>\n          </div>`,i=`\n  <div id="extension-wallet-option" class="pera-wallet-accordion-item pera-wallet-accordion-item--active">\n            <a class="pera-wallet-accordion-toggle">\n              <button class="pera-wallet-accordion-toggle__button"></button>\n\n              <img src="${D}" class="pera-wallet-accordion-icon" />\n\n              <div class="pera-wallet-accordion-toggle__content-with-label">\n                <div class="pera-wallet-accordion-toggle__content-with-label__text">\n                  Connect With\n\n                  <span class="pera-wallet-accordion-toggle__bold-color">\n                    Pera Extension\n                  </span>\n                </div>\n\n                <span id="pera-extension-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>\n              </div>\n            </a>\n\n            <div class="pera-wallet-accordion-item__content">\n              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>\n\n              <div\n                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">\n                <img src="${O}" />\n              </div>\n\n              <p\n                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">\n                Pera Extension detected in your browser\n              </p>\n            </div>\n\n            <button\n              id="pera-wallet-connect-extension-launch-button"\n              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">\n              Connect with Extension\n\n              <img src="${k}" />\n            </button>\n          </div>`;return{mobileWalletOption:document.createRange().createContextualFragment(r),webWalletOption:document.createRange().createContextualFragment(n),extensionWalletOption:document.createRange().createContextualFragment(i)}}(t,n);n&&(e?.appendChild(a),e?.classList.add(`pera-wallet-connect-modal-desktop-mode__default-view--extension-enabled`)),t?(e?.appendChild(i),e?.appendChild(r)):(e?.appendChild(r),e?.appendChild(i))}handleChangeView(){let e=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-desktop-mode-download-pera-button`),t=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-download-pera-view-back-button`),n=this.shadowRoot?.getElementById(`pera-wallet-connect-web-wallet-launch-button`);e&&e.addEventListener(`click`,()=>{this.onClickDownload()}),t&&t.addEventListener(`click`,()=>{this.onClickBack()}),n&&n.addEventListener(`click`,()=>{this.webWalletConnect()});let r=this.shadowRoot?.getElementById(`pera-wallet-connect-extension-launch-button`);r&&r.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`pera-wallet-extension-connect`,{bubbles:!0,composed:!0}))}),this.renderQRCode(),this.checkWebWalletAvaliability()}webWalletConnect(){this.getAttribute(`is-web-wallet-avaliable`)===`true`&&window.onWebWalletConnect()}handleAccordion(e){if(e.target instanceof Element){if(!e.target.classList.contains(`pera-wallet-accordion-toggle__button`))return;if(this.shadowRoot&&e.target.parentElement?.parentElement){let t=e.target.parentElement?.parentElement;if(!t||t.classList.contains(`pera-wallet-accordion-item--active`))return;let n=this.shadowRoot.querySelectorAll(`.pera-wallet-accordion-item.pera-wallet-accordion-item--active`);for(let e=0;e<n.length;e++)n[e].classList.remove(`pera-wallet-accordion-item--active`);t.classList.toggle(`pera-wallet-accordion-item--active`)}}}renderQRCode(){let e=this.getAttribute(`is-web-wallet-avaliable`),t=this.getAttribute(`compact-mode`)===`true`,n=this.getAttribute(`single-account`)===`true`,r=this.getAttribute(`uri`);n&&(r=`${r}&singleAccount=true`);let i=e===`false`?250:205;if(t&&(i=190),r){let e=new _.default({width:i,height:i,type:`svg`,data:r,image:C,dotsOptions:{color:`#000`,type:`extra-rounded`},imageOptions:{crossOrigin:`anonymous`,margin:8},cornersSquareOptions:{type:`extra-rounded`},cornersDotOptions:{type:`dot`}}),t=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-connect-qr-code`);t&&e.append(t)}}onClickDownload(){if(this.shadowRoot){let e=this.shadowRoot.getElementById(`pera-wallet-connect-modal-desktop-mode`);e&&(e.classList.remove(`pera-wallet-connect-modal-desktop-mode--default`),e.classList.add(`pera-wallet-connect-modal-desktop-mode--download`))}}onClickBack(){if(this.shadowRoot){let e=this.shadowRoot.getElementById(`pera-wallet-connect-modal-desktop-mode`);e&&(e.classList.add(`pera-wallet-connect-modal-desktop-mode--default`),e.classList.remove(`pera-wallet-connect-modal-desktop-mode--download`))}}checkWebWalletAvaliability(){this.getAttribute(`is-web-wallet-avaliable`)===`false`&&(this.shadowRoot?.querySelector(`.pera-wallet-connect-modal-desktop-mode__default-view`))?.classList.add(`pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable`)}},I=`.pera-wallet-connect-modal-touch-screen-mode {
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;
  padding: 4px;
}

.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,
.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  display: block;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {
  margin-bottom: 32px;
  background-color: #6b46fe;
  color: #ffffff;
}

.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  margin-bottom: 20px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {
  position: relative;
  margin-bottom: 32px;
  border-top: 1px solid #e6e8ee;
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {
  position: absolute;
  top: -25px;
  right: calc(50% - 56px);
  width: 116px;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
}`;y(I);var L=document.createElement(`template`),ee=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),L.innerHTML=`
  <div class="pera-wallet-connect-modal-touch-screen-mode">
    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

    <div>
      <a
        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"
        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Launch Pera Wallet
      </a>

      <div
        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">
        <p
          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"
          >
          New to Pera?
        </p>
      </div>

      <a
        href="https://perawallet.app/download/"
        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Install Pera Wallet
      </a>
    </div>
  </div>
`,this.shadowRoot){let e=document.createElement(`style`);e.textContent=I,this.shadowRoot.append(L.content.cloneNode(!0),e);let t=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button`),n=this.getAttribute(`uri`),r=this.getAttribute(`single-account`)===`true`,i=this.getAttribute(`selected-account`)||void 0;t&&n&&(t.setAttribute(`href`,u(n,{singleAccount:r,selectedAccount:i})),t.addEventListener(`click`,()=>{this.onClickLaunch()}))}}onClickLaunch(){if(L.innerHTML=`\n    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">\n      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute(`should-use-sound`)}"></pera-wallet-connect-modal-pending-message-section>\n    </div>\n  `,this.shadowRoot){let e=document.createElement(`style`);e.textContent=I,this.shadowRoot.innerHTML=``,this.shadowRoot.append(L.content.cloneNode(!0),e)}}},te=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}`;y(te);var R=document.createElement(`template`),z=o()?`${l} ${l}--mobile`:`${l} ${l}--desktop`,B=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){this.shadowRoot&&this.render()}render(){if(!this.shadowRoot)return;let e=document.createElement(`style`);e.textContent=te,this.getAttribute(`compact-mode`)===`true`&&(z=`${z} pera-wallet-modal--compact`);let t=this.getAttribute(`single-account`)===`true`,n=this.getAttribute(`selected-account`)||void 0;o()?(R.innerHTML=`\n          <div class="${z}">\n            <div class="pera-wallet-modal__body" part="body">\n              <pera-wallet-modal-header modal-id="${m}"></pera-wallet-modal-header/>\n        \n              <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute(`uri`)}" should-use-sound="${this.getAttribute(`should-use-sound`)}" single-account="${t}" selected-account="${n}"></pera-wallet-modal-touch-screen-mode>\n            </div>\n          </div>\n        `,this.shadowRoot.append(R.content.cloneNode(!0),e)):(R.innerHTML=`\n        <div class="${z}">\n          <div class="pera-wallet-modal__body">\n            <pera-wallet-modal-header modal-id="${m}"></pera-wallet-modal-header/>\n      \n            <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute(`uri`)}" is-web-wallet-avaliable="${this.getAttribute(`is-web-wallet-avaliable`)}" should-display-new-badge="${this.getAttribute(`should-display-new-badge`)}" compact-mode="${this.getAttribute(`compact-mode`)}" promote-mobile="${this.getAttribute(`promote-mobile`)}" single-account="${t}" is-extension-enabled="${this.getAttribute(`is-extension-enabled`)}"\n        ></pera-wallet-modal-desktop-mode>\n          </div>\n        </div>\n      `,this.shadowRoot.append(R.content.cloneNode(!0),e))}},ne=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-redirect-modal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-redirect-modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pera-wallet-redirect-modal__content__title {
  margin: 20px 0 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.26px;
}

.pera-wallet-redirect-modal__content__description,
.pera-wallet-redirect-modal__content__install-pera-text {
  color: #3c3c49;
  max-width: 271px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__content__description {
  margin-bottom: 24px;
}

.pera-wallet-redirect-modal__content__install-pera-text__link {
  color: #6b46fe;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__launch-pera-wallet-button {
  display: block;
  padding: 14px;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}`;y(ne);var re=document.createElement(`template`);re.innerHTML=`\n  <div class="pera-wallet-modal pera-wallet-modal--mobile">\n    <div class="pera-wallet-modal__body">\n      <pera-wallet-modal-header modal-id="${c}"></pera-wallet-modal-header/>\n\n      <div class="pera-wallet-redirect-modal">\n        <div class="pera-wallet-redirect-modal__content">\n          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />\n\n          <h1 class="pera-wallet-redirect-modal__content__title">\n            Can't Launch Pera\n          </h1>\n\n          <p class="pera-wallet-redirect-modal__content__description">\n            We couldn't redirect you to Pera Wallet automatically. Please try again.\n          </p>\n\n          <p class="pera-wallet-redirect-modal__content__install-pera-text">\n            Don't have Pera Wallet installed yet?\n            <br />\n            \n            <a\n              id="pera-wallet-redirect-modal-download-pera-link"\n              class="pera-wallet-redirect-modal__content__install-pera-text__link"\n              href="https://perawallet.app/download/"\n              rel="noopener noreferrer"\n              target="_blank">\n              Tap here to install.\n            </a>\n          </p>\n        </div>\n\n        <a\n          id="pera-wallet-redirect-modal-launch-pera-link"\n          class="pera-wallet-redirect-modal__launch-pera-wallet-button">\n          Launch Pera Wallet\n        </a>\n      </div>\n    </div>\n  </div>\n`;var ie=class extends HTMLElement{constructor(){if(super(),this.handleVisibilityChange=()=>{document.visibilityState===`hidden`&&this.onClose()},this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=ne,this.shadowRoot.append(re.content.cloneNode(!0),e),(this.shadowRoot?.getElementById(`pera-wallet-redirect-modal-download-pera-link`))?.addEventListener(`click`,()=>{this.onClose()}),(this.shadowRoot?.getElementById(`pera-wallet-redirect-modal-launch-pera-link`))?.addEventListener(`click`,()=>{f(r())})}}connectedCallback(){document.addEventListener(`visibilitychange`,this.handleVisibilityChange),f(r())}disconnectedCallback(){document.removeEventListener(`visibilitychange`,this.handleVisibilityChange)}onClose(){d(c)}},ae=`.pera-wallet-connect-modal-information-section {
  padding: 12px;
  padding-right: 0;
}
.pera-wallet-connect-modal-information-section--mobile {
  padding: 0;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {
  margin-bottom: 24px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.09px;
  font-weight: 400;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  background-color: #f2f3f8;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
}
.pera-wallet-connect-modal-information-section * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 32px;
}

.pera-wallet-connect-modal-information-section__title {
  margin-bottom: 148px;
  color: #3c3c49;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.pera-wallet-connect-modal-information-section__secondary-title {
  margin-bottom: 20px;
  color: #9d9dae;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
}

.pera-wallet-connect-modal-information-section__features-item {
  display: grid;
  align-items: center;
  grid-template-columns: 36px auto;
  gap: 16px;
}
.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {
  margin-bottom: 24px;
}

.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01px;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-information-section--desktop {
    padding: 0;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {
    margin-bottom: 12px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.26px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {
    display: none;
  }
  .pera-wallet-connect-modal-information-section__secondary-title {
    display: none;
  }
}`;y(ae);var oe=document.createElement(`template`);oe.innerHTML=`\n  <section class="${o()?`pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile`:`pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop`}">\n    <img\n      id="pera-wallet-connect-modal-information-section-pera-icon"\n      src="${O}"\n      class="pera-wallet-connect-modal-information-section__pera-icon"\n      alt="Pera Wallet Logo"\n    />\n\n    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">\n        Connect to Pera Wallet\n    </h1>\n\n    <h1 class="pera-wallet-connect-modal-information-section__title">\n      Simply the best Algorand wallet.\n    </h1>\n\n    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">\n      Features\n    </h2>\n\n    <ul>\n      <li class="pera-wallet-connect-modal-information-section__features-item">\n        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">\n          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />\n        </div>\n        \n        <p\n          class="pera-wallet-connect-modal-information-section__features-item__description">\n          Connect to any Algorand dApp securely\n        </p>\n      </li>\n\n      <li class="pera-wallet-connect-modal-information-section__features-item">\n        <div\n          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">\n          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />\n        </div>\n\n        <p\n          class="pera-wallet-connect-modal-information-section__features-item__description">\n          Your private keys are safely stored locally\n        </p>\n      </li>\n\n      <li class="pera-wallet-connect-modal-information-section__features-item">\n        <div\n          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">\n          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />\n        </div>\n\n        <p\n          class="pera-wallet-connect-modal-information-section__features-item__description">\n          View NFTs, buy and swap crypto and more\n        </p>\n      </li>\n    </ul>\n  </section>\n`;var se=class extends HTMLElement{constructor(){var e,t,n;super(),this.attachShadow({mode:`open`});let r=document.querySelector(`pera-wallet-connect-modal`)?.getAttribute(`compact-mode`)===`true`;if(this.shadowRoot&&(!r&&!o()||o())){let r=document.createElement(`style`);r.textContent=ae,this.shadowRoot.append(oe.content.cloneNode(!0),r),o()?(e=this.shadowRoot.getElementById(`pera-wallet-connect-modal-information-section-title`))==null||e.setAttribute(`style`,`display: none;`):((t=this.shadowRoot.getElementById(`pera-wallet-connect-modal-information-section-pera-icon`))==null||t.setAttribute(`src`,`data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e`),(n=this.shadowRoot.getElementById(`pera-wallet-connect-modal-information-section-connect-pera-mobile`))==null||n.setAttribute(`style`,`display: none;`))}}},V=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-connect-modal-pending-message-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 48px;
  gap: 56px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-pending-message {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.pera-wallet-connect-modal-pending-message--try-again-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__title {
  margin: 16px 0 12px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.26px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__description {
  color: #6a6a81;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__button {
  display: block;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  color: #ffffff;
  background-color: #6b46fe;
  border: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {
  width: 24px;
  height: 24px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #3c3c49;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {
  /* stylelint-disable value-no-vendor-prefix */
  /* stylelint-disable  property-no-vendor-prefix */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01px;
  color: #9d9dae;
}

.pera-wallet-connect-modal-pending-message__animation-wrapper {
  width: 56px;
  height: 56px;
  background-color: #6b46fe;
  border-radius: 50%;
}

.pera-wallet-connect-modal-pending-message__text {
  max-width: 271px;
  margin-top: 24px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.26px;
}

.pera-wallet-connect-modal-pending-message__cancel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  border: none;
}`;y(V);var ce=document.createElement(`template`);ce.innerHTML=`
  <div class="pera-wallet-connect-modal-pending-message-section">
    <div class="pera-wallet-connect-modal-pending-message">
      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>

      <div class="pera-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Pera Wallet
      </div>
    </div>

    <button
      id="pera-wallet-connect-modal-pending-message-cancel-button"
      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;var H=`\n  <div class="pera-wallet-connect-modal-pending-message--try-again-view">\n    <div>\n      <img src="${O}" alt="Pera Wallet Logo" />\n\n      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">\n        Couldn’t establish connection\n      </h1>\n\n      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">\n        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.\n      </p>\n    </div>\n\n    <div>\n      <a\n        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"\n        target="_blank"\n        rel="noopener noreferrer"\n        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">\n        <img\n          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"\n          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"\n          alt="Help Icon"\n        />\n\n        <div>\n          <div\n            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">\n            <h1\n              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">\n                Resolving WalletConnect issues\n            </h1>\n\n            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>\n          </div>\n\n          <p\n            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">\n            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...\n          </p>\n        </div>\n      </a>\n\n      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">\n        Close & Try Again\n      </button>\n    </div>\n  </div>\n  `,le=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=V,this.shadowRoot.append(ce.content.cloneNode(!0),e)}}connectedCallback(){(this.shadowRoot?.getElementById(`pera-wallet-connect-modal-pending-message-cancel-button`))?.addEventListener(`click`,()=>{this.onClose()}),this.addAudioForConnection(),this.renderLottieAnimation(),setTimeout(()=>{if(ce.innerHTML=H,this.shadowRoot){let e=document.createElement(`style`);e.textContent=V,this.shadowRoot.innerHTML=``,this.shadowRoot.append(ce.content.cloneNode(!0),e),(this.shadowRoot?.getElementById(`pera-wallet-connect-modal-pending-message-try-again-button`))?.addEventListener(`click`,()=>{this.onClose()})}},3e4)}onClose(){d(m)}addAudioForConnection(){if(this.getAttribute(`should-use-sound`)===`true`&&t()){let e=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-pending-message-audio-wrapper`),t=document.createElement(`audio`);t.src=`https://s3.amazonaws.com/wc.perawallet.app/audio.mp3`,t.autoplay=!0,t.loop=!0,e?.appendChild(t)}}renderLottieAnimation(){let e=this.shadowRoot?.getElementById(`pera-wallet-connect-modal-pending-message-animation-wrapper`);e&&v.default.loadAnimation({container:e,renderer:`svg`,loop:!0,autoplay:!0,path:`https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json`})}},U=`.pera-wallet-sign-txn-toast {
  --pera-wallet-sign-txn-toast-width: 422px;
  --pera-wallet-sign-txn-toast-height: 134px;
  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;
  position: fixed;
  bottom: 28px;
  right: 35px;
  z-index: 11;
  overflow: hidden;
  width: var(--pera-wallet-sign-txn-toast-width);
  height: var(--pera-wallet-sign-txn-toast-height);
  background: #edeffb;
  border-radius: 8px;
  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;
}
.pera-wallet-sign-txn-toast * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-sign-txn-toast-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-sign-txn-toast ul,
.pera-wallet-sign-txn-toast ol,
.pera-wallet-sign-txn-toast li {
  list-style-type: none;
}

.pera-wallet-sign-txn-toast__header__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.pera-wallet-sign-txn-toast__content__lottie-animation {
  position: absolute;
  top: -75px;
  left: -100px;
  width: 368px;
  height: 368px;
}

.pera-wallet-sign-txn-toast__content__description {
  position: absolute;
  top: 40px;
  right: 48px;
  max-width: 197px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .pera-wallet-sign-txn-toast {
    display: none;
  }
}
@keyframes PeraWalletSignTxnToastSlideIn {
  0% {
    bottom: 12px;
    opacity: 0;
  }
  100% {
    bottom: 26px;
    opacity: 1;
  }
}`;y(U);var W=document.createElement(`template`);W.innerHTML=`
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;var G=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=U,this.shadowRoot.append(W.content.cloneNode(!0),e),this.shadowRoot.getElementById(`pera-wallet-sign-txn-toast-close-button`)?.addEventListener(`click`,()=>{d(p)}),this.renderLottieAnimation()}}renderLottieAnimation(){let e=this.shadowRoot?.getElementById(`pera-wallet-sign-txn-toast-lottie-animation`);e&&v.default.loadAnimation({container:e,renderer:`svg`,loop:!0,autoplay:!0,path:`https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json`})}},ue=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
  background-image: unset;
  padding: 0;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {
  width: 100%;
  height: 100%;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin: 0 auto;
  border: none;
}

.pera-wallet-sign-txn-modal--compact.pera-wallet-modal .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
}`;y(ue);var de=document.createElement(`template`);de.innerHTML=`\n  <div id="pera-wallet-sign-txn-modal" class="${l} pera-wallet-sign-txn-modal">\n    <div class="pera-wallet-modal__body">\n      <pera-wallet-modal-header modal-id="${e}"></pera-wallet-modal-header/>\n\n      <div class="pera-wallet-sign-txn-modal__body__content" />\n    </div>\n  </div>\n`;var K=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:`open`}),this.shadowRoot){let e=document.createElement(`style`);e.textContent=ue,this.shadowRoot.append(de.content.cloneNode(!0),e),this.getAttribute(`compact-mode`)===`true`&&this.shadowRoot.getElementById(`pera-wallet-sign-txn-modal`)?.classList.add(`pera-wallet-sign-txn-modal--compact`)}}};function fe(){let e=.01*window.innerHeight;document.documentElement.style.setProperty(`--pera-wallet-vh`,`${e}px`)}function q(e,t){window.customElements.get(e)||window.customElements.define(e,t)}document.readyState===`complete`||document.readyState===`interactive`?fe():window.addEventListener(`DOMContentLoaded`,()=>{fe()}),window.addEventListener(`resize`,()=>{fe()}),q(`pera-wallet-connect-modal`,B),q(`pera-wallet-modal-desktop-mode`,F),q(`pera-wallet-modal-header`,S),q(`pera-wallet-modal-touch-screen-mode`,ee),q(`pera-wallet-redirect-modal`,ie),q(`pera-wallet-connect-modal-information-section`,se),q(`pera-wallet-connect-modal-pending-message-section`,le),q(`pera-wallet-sign-txn-toast`,G),q(`pera-wallet-sign-txn-modal`,K),q(`pera-wallet-download-qr-code`,E);