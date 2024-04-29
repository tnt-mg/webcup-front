//@ts-nocheck
let e=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,t=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,r=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,n=/(^[#\.][a-z]|[a-y][a-z])/i,o=Math.PI/180,i=Math.sin,a=Math.cos,l=Math.abs,s=Math.sqrt,h=e=>"string"==typeof e,p=e=>"number"==typeof e,g=e=>Math.round(1e5*e)/1e5||0;function d(e){let t,r=0;for(e.reverse();r<e.length;r+=2)t=e[r],e[r]=e[r+1],e[r+1]=t;e.reversed=!e.reversed}let c={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function f(e,r){let n,o,i,a,l,s,h,p,g,d,f,u,m,w,x,M,P,b,N,S,T,v,z=e.tagName.toLowerCase(),A=.552284749831;return"path"!==z&&e.getBBox?(s=((e,t)=>{let r,n=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(e.attributes),i=o.length;for(t=","+t+",";--i>-1;)r=o[i].nodeName.toLowerCase(),t.indexOf(","+r+",")<0&&n.setAttributeNS(null,r,o[i].nodeValue);return n})(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),v=((e,t)=>{let r=t?t.split(","):[],n={},o=r.length;for(;--o>-1;)n[r[o]]=+e.getAttribute(r[o])||0;return n})(e,c[z]),"rect"===z?(a=v.rx,l=v.ry||a,o=v.x,i=v.y,d=v.width-2*a,f=v.height-2*l,a||l?(u=o+a*(1-A),m=o+a,w=m+d,x=w+a*A,M=w+a,P=i+l*(1-A),b=i+l,N=b+f,S=N+l*A,T=N+l,n="M"+M+","+b+" V"+N+" C"+[M,S,x,T,w,T,w-(w-m)/3,T,m+(w-m)/3,T,m,T,u,T,o,S,o,N,o,N-(N-b)/3,o,b+(N-b)/3,o,b,o,P,u,i,m,i,m+(w-m)/3,i,w-(w-m)/3,i,w,i,x,i,M,P,M,b].join(",")+"z"):n="M"+(o+d)+","+i+" v"+f+" h"+-d+" v"+-f+" h"+d+"z"):"circle"===z||"ellipse"===z?("circle"===z?(a=l=v.r,p=a*A):(a=v.rx,l=v.ry,p=l*A),o=v.cx,i=v.cy,h=a*A,n="M"+(o+a)+","+i+" C"+[o+a,i+p,o+h,i+l,o,i+l,o-h,i+l,o-a,i+p,o-a,i,o-a,i-p,o-h,i-l,o,i-l,o+h,i-l,o+a,i-p,o+a,i].join(",")+"z"):"line"===z?n="M"+v.x1+","+v.y1+" L"+v.x2+","+v.y2:"polyline"!==z&&"polygon"!==z||(g=(e.getAttribute("points")+"").match(t)||[],o=g.shift(),i=g.shift(),n="M"+o+","+i+" L"+g.join(","),"polygon"===z&&(n+=","+o+","+i+"z")),s.setAttribute("d",y(s._gsRawPath=_(n))),r&&e.parentNode&&(e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e)),s):e}function u(e,t,r,n,h,p,g,d,c){if(e===d&&t===c)return;r=l(r),n=l(n);let f=h%360*o,u=a(f),_=i(f),y=Math.PI,m=2*y,w=(e-d)/2,x=(t-c)/2,M=u*w+_*x,P=-_*w+u*x,b=M*M,N=P*P,S=b/(r*r)+N/(n*n);S>1&&(r=s(S)*r,n=s(S)*n);let T=r*r,v=n*n,z=(T*v-T*N-v*b)/(T*N+v*b);z<0&&(z=0);let A=(p===g?-1:1)*s(z),O=A*(r*P/n),C=A*(-n*M/r),R=(e+d)/2+(u*O-_*C),I=(t+c)/2+(_*O+u*C),L=(M-O)/r,F=(P-C)/n,V=(-M-O)/r,Y=(-P-C)/n,j=L*L+F*F,G=(F<0?-1:1)*Math.acos(L/s(j)),X=(L*Y-F*V<0?-1:1)*Math.acos((L*V+F*Y)/s(j*(V*V+Y*Y)));isNaN(X)&&(X=y),!g&&X>0?X-=m:g&&X<0&&(X+=m),G%=m,X%=m;let q,E=Math.ceil(l(X)/(m/4)),H=[],U=X/E,B=4/3*i(U/2)/(1+a(U/2)),D=u*r,W=_*r,Q=_*-n,Z=u*n;for(q=0;q<E;q++)M=a(h=G+q*U),P=i(h),L=a(h+=U),F=i(h),H.push(M-B*P,P+B*M,L+B*F,F-B*L,L,F);for(q=0;q<H.length;q+=2)M=H[q],P=H[q+1],H[q]=M*D+P*Q+R,H[q+1]=M*W+P*Z+I;return H[q-2]=d,H[q-1]=c,H}function _(t){let n,o,i,a,s,h,p,g,d,c,f,_,y,m,w,x=(t+"").replace(r,e=>{let t=+e;return t<1e-4&&t>-1e-4?0:t}).match(e)||[],M=[],P=0,b=0,N=x.length,S=0,T="ERROR: malformed path: "+t,v=function(e,t,r,n){c=(r-e)/3,f=(n-t)/3,p.push(e+c,t+f,r-c,n-f,r,n)};if(!t||!isNaN(x[0])||isNaN(x[1]))return console.log(T),M;for(n=0;n<N;n++)if(y=s,isNaN(x[n])?(s=x[n].toUpperCase(),h=s!==x[n]):n--,i=+x[n+1],a=+x[n+2],h&&(i+=P,a+=b),n||(g=i,d=a),"M"===s)p&&(p.length<8?M.length-=1:S+=p.length),P=g=i,b=d=a,p=[i,a],M.push(p),n+=2,s="L";else if("C"===s)p||(p=[0,0]),h||(P=b=0),p.push(i,a,P+1*x[n+3],b+1*x[n+4],P+=1*x[n+5],b+=1*x[n+6]),n+=6;else if("S"===s)c=P,f=b,"C"!==y&&"S"!==y||(c+=P-p[p.length-4],f+=b-p[p.length-3]),h||(P=b=0),p.push(c,f,i,a,P+=1*x[n+3],b+=1*x[n+4]),n+=4;else if("Q"===s)c=P+2/3*(i-P),f=b+2/3*(a-b),h||(P=b=0),P+=1*x[n+3],b+=1*x[n+4],p.push(c,f,P+2/3*(i-P),b+2/3*(a-b),P,b),n+=4;else if("T"===s)c=P-p[p.length-4],f=b-p[p.length-3],p.push(P+c,b+f,i+2/3*(P+1.5*c-i),a+2/3*(b+1.5*f-a),P=i,b=a),n+=2;else if("H"===s)v(P,b,P=i,b),n+=1;else if("V"===s)v(P,b,P,b=i+(h?b-P:0)),n+=1;else if("L"===s||"Z"===s)"Z"===s&&(i=g,a=d,p.closed=!0),("L"===s||l(P-i)>.5||l(b-a)>.5)&&(v(P,b,i,a),"L"===s&&(n+=2)),P=i,b=a;else if("A"===s){if(m=x[n+4],w=x[n+5],c=x[n+6],f=x[n+7],o=7,m.length>1&&(m.length<3?(f=c,c=w,o--):(f=w,c=m.substr(2),o-=2),w=m.charAt(1),m=m.charAt(0)),_=u(P,b,+x[n+1],+x[n+2],+x[n+3],+m,+w,(h?P:0)+1*c,(h?b:0)+1*f),n+=o,_)for(o=0;o<_.length;o++)p.push(_[o]);P=p[p.length-2],b=p[p.length-1]}else console.log(T);return n=p.length,n<6?(M.pop(),n=0):p[0]===p[n-2]&&p[1]===p[n-1]&&(p.closed=!0),M.totalPoints=S+n,M}function y(e){p(e[0])&&(e=[e]);let t,r,n,o,i="",a=e.length;for(r=0;r<a;r++){for(o=e[r],i+="M"+g(o[0])+","+g(o[1])+" C",t=o.length,n=2;n<t;n++)i+=g(o[n++])+","+g(o[n++])+" "+g(o[n++])+","+g(o[n++])+" "+g(o[n++])+","+g(o[n])+" ";o.closed&&(i+="z")}return i}let m,w,x,M,P,b=()=>m||"undefined"!=typeof window&&(m=window.gsap)&&m.registerPlugin&&m,N=e=>"function"==typeof e,S=Math.atan2,T=Math.cos,v=Math.sin,z=Math.sqrt,A=Math.PI,O=2*A,C=.3*A,R=.7*A,I=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,L=/(^[#\.][a-z]|[a-y][a-z])/i,F=/[achlmqstvz]/i,V=e=>console&&console.warn(e),Y=function(){return String.fromCharCode.apply(null,arguments)},j=Y(103,114,101,101,110,115,111,99,107,46,99,111,109),G=function(e){var t="undefined"!=typeof window,r=0===(t?window.location.href:"").indexOf(Y(102,105,108,101,58,47,47))||-1!==e.indexOf(Y(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(Y(49,50,55,46,48,32,48,46,49)),n=[j,Y(99,111,100,101,112,101,110,46,105,111),Y(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),Y(99,111,100,101,112,101,110,46,100,101,118),Y(99,111,100,101,112,101,110,46,97,112,112),Y(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),Y(112,101,110,115,46,99,108,111,117,100),Y(99,115,115,45,116,114,105,99,107,115,46,99,111,109),Y(99,100,112,110,46,105,111),Y(112,101,110,115,46,105,111),Y(103,97,110,110,111,110,46,116,118),Y(99,111,100,101,99,97,110,121,111,110,46,110,101,116),Y(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),Y(99,101,114,101,98,114,97,120,46,99,111,46,117,107),Y(116,121,109,112,97,110,117,115,46,110,101,116),Y(116,119,101,101,110,109,97,120,46,99,111,109),Y(112,108,110,107,114,46,99,111),Y(104,111,116,106,97,114,46,99,111,109),Y(119,101,98,112,97,99,107,98,105,110,46,99,111,109),Y(97,114,99,104,105,118,101,46,111,114,103),Y(99,111,100,101,115,97,110,100,98,111,120,46,105,111),Y(99,115,98,46,97,112,112),Y(115,116,97,99,107,98,108,105,116,122,46,99,111,109),Y(115,116,97,99,107,98,108,105,116,122,46,105,111),Y(99,111,100,105,101,114,46,105,111),Y(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),Y(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),Y(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),Y(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),Y(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),Y(106,115,102,105,100,100,108,101,46,110,101,116)],o=function(){t&&("loading"===document.readyState||"interactive"===document.readyState?document.addEventListener("readystatechange",o):(document.removeEventListener("readystatechange",o),t&&window.console&&!window._gsapWarned&&"object"==typeof window.gsap&&!1!==window.gsap.config().trialWarn&&(console.log(Y(37,99,87,97,114,110,105,110,103),Y(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(Y(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"MorphSVGPlugin"+Y(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(Y(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),Y(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)))},i=n.length;for(setTimeout(o,50);--i>-1;)if(-1!==e.indexOf(n[i]))return!0;return 1||!setTimeout((function(){t&&(window.location.href=Y(104,116,116,112,115,58,47,47)+j+Y(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=MorphSVGPlugin&source=trial")}),3e3)}("undefined"!=typeof window?window.location.host:""),X=e=>{let t,r=e.length,n=0,o=0;for(t=0;t<r;t++)n+=e[t++],o+=e[t];return[n/(r/2),o/(r/2)]},q=e=>{let t,r,n,o=e.length,i=e[0],a=i,l=e[1],s=l;for(n=6;n<o;n+=6)t=e[n],r=e[n+1],t>i?i=t:t<a&&(a=t),r>l?l=r:r<s&&(s=r);return e.centerX=(i+a)/2,e.centerY=(l+s)/2,e.size=(i-a)*(l-s)},E=(e,t=3)=>{let r,n,o,i,a,l,s,h,p,g,d,c,f,u,_,y,m=e.length,w=e[0][0],x=w,M=e[0][1],P=M,b=1/t;for(;--m>-1;)for(a=e[m],r=a.length,i=6;i<r;i+=6)for(p=a[i],g=a[i+1],d=a[i+2]-p,u=a[i+3]-g,c=a[i+4]-p,_=a[i+5]-g,f=a[i+6]-p,y=a[i+7]-g,l=t;--l>-1;)s=b*l,h=1-s,n=(s*s*f+3*h*(s*c+h*d))*s+p,o=(s*s*y+3*h*(s*_+h*u))*s+g,n>w?w=n:n<x&&(x=n),o>M?M=o:o<P&&(P=o);return e.centerX=(w+x)/2,e.centerY=(M+P)/2,e.left=x,e.width=w-x,e.top=P,e.height=M-P,e.size=(w-x)*(M-P)},H=(e,t)=>t.length-e.length,U=(e,t)=>{let r=e.size||q(e),n=t.size||q(t);return Math.abs(n-r)<(r+n)/20?t.centerX-e.centerX||t.centerY-e.centerY:n-r},B=(e,t)=>{let r,n,o=e.slice(0),i=e.length,a=i-2;for(t|=0,r=0;r<i;r++)n=(r+t)%a,e[r++]=o[n],e[r]=o[n+1]},D=(e,t,r,n,o)=>{let i,a,l,s,h=e.length,p=0,g=h-2;for(r*=6,a=0;a<h;a+=6)i=(a+r)%g,s=e[i]-(t[a]-n),l=e[i+1]-(t[a+1]-o),p+=z(l*l+s*s);return p},W=(e,t,r)=>{let n,o,i,a=e.length,l=X(e),s=X(t),h=s[0]-l[0],p=s[1]-l[1],g=D(e,t,0,h,p),c=0;for(i=6;i<a;i+=6)o=D(e,t,i/6,h,p),o<g&&(g=o,c=i);if(r)for(n=e.slice(0),d(n),i=6;i<a;i+=6)o=D(n,t,i/6,h,p),o<g&&(g=o,c=-i);return c/6},Q=(e,t,r)=>{let n,o,i,a,l,s,h=e.length,p=1e20,g=0,d=0;for(;--h>-1;)for(n=e[h],s=n.length,l=0;l<s;l+=6)o=n[l]-t,i=n[l+1]-r,a=z(o*o+i*i),a<p&&(p=a,g=n[l],d=n[l+1]);return[g,d]},Z=(e,t,r,n,o,i)=>{let a,l,s,h,p,g=t.length,d=0,c=Math.min(e.size||q(e),t[r].size||q(t[r]))*n,f=1e20,u=e.centerX+o,_=e.centerY+i;for(l=r;l<g&&(a=t[l].size||q(t[l]),!(a<c));l++)s=t[l].centerX-u,h=t[l].centerY-_,p=z(s*s+h*h),p<f&&(d=l,f=p);return p=t[d],t.splice(d,1),p},k=(e,t)=>{let r,n,o,i,a,l,s,h,p,g,d,c,f,u,_=0,y=e.length,m=t/((y-2)/6);for(f=2;f<y;f+=6)for(_+=m;_>.999999;)r=e[f-2],n=e[f-1],o=e[f],i=e[f+1],a=e[f+2],l=e[f+3],s=e[f+4],h=e[f+5],u=1/((Math.floor(_)||1)+1),p=r+(o-r)*u,d=o+(a-o)*u,p+=(d-p)*u,d+=(a+(s-a)*u-d)*u,g=n+(i-n)*u,c=i+(l-i)*u,g+=(c-g)*u,c+=(l+(h-l)*u-c)*u,e.splice(f,4,r+(o-r)*u,n+(i-n)*u,p,g,p+(d-p)*u,g+(c-g)*u,d,c,a+(s-a)*u,l+(h-l)*u),f+=6,y+=6,_--;return e},J=(e,t,r,n,o)=>{let i,a,l,s,h,p,g,c=t.length-e.length,f=c>0?t:e,u=c>0?e:t,_=0,y="complexity"===n?H:U,m="position"===n?0:"number"==typeof n?n:.8,w=u.length,x="object"==typeof r&&r.push?r.slice(0):[r],M="reverse"===x[0]||x[0]<0,P="log"===r;if(u[0]){if(f.length>1&&(e.sort(y),t.sort(y),p=f.size||E(f),p=u.size||E(u),p=f.centerX-u.centerX,g=f.centerY-u.centerY,y===U))for(w=0;w<u.length;w++)f.splice(w,0,Z(u[w],f,w,m,p,g));if(c)for(c<0&&(c=-c),f[0].length>u[0].length&&k(u[0],(f[0].length-u[0].length)/6|0),w=u.length;_<c;)s=f[w].size||q(f[w]),l=Q(u,f[w].centerX,f[w].centerY),s=l[0],h=l[1],u[w++]=[s,h,s,h,s,h,s,h],u.totalPoints+=8,_++;for(w=0;w<e.length;w++)i=t[w],a=e[w],c=i.length-a.length,c<0?k(i,-c/6|0):c>0&&k(a,c/6|0),M&&!1!==o&&!a.reversed&&d(a),(r=x[w]||0===x[w]?x[w]:"auto")&&(a.closed||Math.abs(a[0]-a[a.length-2])<.5&&Math.abs(a[1]-a[a.length-1])<.5?"auto"===r||"log"===r?(x[w]=r=W(a,i,!w||!1===o),r<0&&(M=!0,d(a),r=-r),B(a,6*r)):"reverse"!==r&&(w&&r<0&&d(a),B(a,6*(r<0?-r:r))):!M&&("auto"===r&&Math.abs(i[0]-a[0])+Math.abs(i[1]-a[1])+Math.abs(i[i.length-2]-a[a.length-2])+Math.abs(i[i.length-1]-a[a.length-1])>Math.abs(i[0]-a[a.length-2])+Math.abs(i[1]-a[a.length-1])+Math.abs(i[i.length-2]-a[0])+Math.abs(i[i.length-1]-a[1])||r%2)?(d(a),x[w]=-1,M=!0):"auto"===r?x[w]=0:"reverse"===r&&(x[w]=-1),a.closed!==i.closed&&(a.closed=i.closed=!1));return P&&V("shapeIndex:["+x.join(",")+"]"),e.shapeIndex=x,x}},K=(e,t,r,n,o)=>{let i=_(e[0]),a=_(e[1]);J(i,a,t||0===t?t:"auto",r,o)&&(e[0]=y(i),e[1]=y(a),"log"!==n&&!0!==n||V('precompile:["'+e[0]+'","'+e[1]+'"]'))},$=(e,t)=>{let r,n,o,i,a,l,s,h=0,p=parseFloat(e[0]),g=parseFloat(e[1]),d=p+","+g+" ";for(o=e.length,r=.5*t/(.5*o-1),n=0;n<o-2;n+=2){if(h+=r,l=parseFloat(e[n+2]),s=parseFloat(e[n+3]),h>.999999)for(a=1/(Math.floor(h)+1),i=1;h>.999999;)d+=(p+(l-p)*a*i).toFixed(2)+","+(g+(s-g)*a*i).toFixed(2)+" ",h--,i++;d+=l+","+s+" ",p=l,g=s}return d},ee=e=>{let t=e[0].match(I)||[],r=e[1].match(I)||[],n=r.length-t.length;n>0?e[0]=$(t,n):e[1]=$(r,-n)},te=e=>isNaN(e)?ee:t=>{ee(t),t[1]=((e,t)=>{if(!t)return e;let r,n,o,i=e.match(I)||[],a=i.length,l="";for("reverse"===t?(n=a-1,r=-2):(n=(2*(parseInt(t,10)||0)+1+100*a)%a,r=2),o=0;o<a;o+=2)l+=i[n-1]+","+i[n]+" ",n=(n+r)%a;return l})(t[1],parseInt(e,10))},re=(e,t)=>{let r,n,o,i,a,l,s,h,p,g,d,c,f=e.length,u=.2*(t||1);for(;--f>-1;){for(n=e[f],d=n.isSmooth=n.isSmooth||[0,0,0,0],c=n.smoothData=n.smoothData||[0,0,0,0],d.length=4,h=n.length-2,s=6;s<h;s+=6)o=n[s]-n[s-2],i=n[s+1]-n[s-1],a=n[s+2]-n[s],l=n[s+3]-n[s+1],p=S(i,o),g=S(l,a),r=Math.abs(p-g)<u,r&&(c[s-2]=p,c[s+2]=g,c[s-1]=z(o*o+i*i),c[s+3]=z(a*a+l*l)),d.push(r,r,0,0,r,r);n[h]===n[0]&&n[h+1]===n[1]&&(o=n[0]-n[h-2],i=n[1]-n[h-1],a=n[2]-n[0],l=n[3]-n[1],p=S(i,o),g=S(l,a),Math.abs(p-g)<u&&(c[h-2]=p,c[2]=g,c[h-1]=z(o*o+i*i),c[3]=z(a*a+l*l),d[h-2]=d[h-1]=!0))}return e},ne=e=>{let t=e.trim().split(" ");return{x:(~e.indexOf("left")?0:~e.indexOf("right")?100:isNaN(parseFloat(t[0]))?50:parseFloat(t[0]))/100,y:(~e.indexOf("top")?0:~e.indexOf("bottom")?100:isNaN(parseFloat(t[1]))?50:parseFloat(t[1]))/100}},oe="Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",ie=function(e,t,r,n){let o,i,a=this._origin,l=this._eOrigin,s=e[r]-a.x,h=e[r+1]-a.y,p=z(s*s+h*h),g=S(h,s);var d;return s=t[r]-l.x,h=t[r+1]-l.y,o=S(h,s)-g,i=(d=o)!==d%A?d+(d<0?O:-O):d,!n&&x&&Math.abs(i+x.ca)<C&&(n=x),this._anchorPT=x={_next:this._anchorPT,t:e,sa:g,ca:n&&i*n.ca<0&&Math.abs(i)>R?o:i,sl:p,cl:z(s*s+h*h)-p,i:r}},ae=e=>{m=b(),P=P||m&&m.plugins.morphSVG,m&&P?(w=m.utils.toArray,P.prototype._tweenRotation=ie,M=1):e&&V("Please gsap.registerPlugin(MorphSVGPlugin)")};const le={version:"3.11.5",name:"morphSVG",rawVars:1,register(e,t){m=e,P=t,ae()},init(e,t,r,n,o){if(M||ae(1),!t)return V("invalid shape"),!1;let i,a,l,s,h,p,g,d,c,u,m,P,b,S,T,v,z,A,O,C,R,Y;if(N(t)&&(t=t.call(r,n,e,o)),"string"==typeof t||t.getBBox||t[0])t={shape:t};else if("object"==typeof t){for(a in i={},t)i[a]=N(t[a])&&"render"!==a?t[a].call(r,n,e,o):t[a];t=i}let j=e.nodeType?window.getComputedStyle(e):{},X=j.fill+"",q=!("none"===X||"0"===(X.match(I)||[])[3]||"evenodd"===j.fillRule),H=(t.origin||"50 50").split(",");if(i=(e.nodeName+"").toUpperCase(),h="POLYLINE"===i||"POLYGON"===i,"PATH"!==i&&!h&&!t.prop)return V("Cannot morph a <"+i+"> element. "+oe),!1;if(a="PATH"===i?"d":"points",!t.prop&&!N(e.setAttribute))return!1;if(s=((e,t,r)=>{let n,o;return(!("string"==typeof e)||L.test(e)||(e.match(I)||[]).length<3)&&(n=w(e)[0],n?(o=(n.nodeName+"").toUpperCase(),t&&"PATH"!==o&&(n=f(n,!1),o="PATH"),e=n.getAttribute("PATH"===o?"d":"points")||"",n===r&&(e=n.getAttributeNS(null,"data-original")||e)):(V("WARNING: invalid morph to: "+e),e=!1)),e})(t.shape||t.d||t.points||"","d"===a,e),h&&F.test(s))return V("A <"+i+"> cannot accept path data. "+oe),!1;if(p=t.shapeIndex||0===t.shapeIndex?t.shapeIndex:"auto",g=t.map||le.defaultMap,this._prop=t.prop,this._render=t.render||le.defaultRender,this._apply="updateTarget"in t?t.updateTarget:le.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(t.precision)?2:+t.precision),this._tween=r,s){if(this._target=e,z="object"==typeof t.precompile,u=this._prop?e[this._prop]:e.getAttribute(a),this._prop||e.getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",u),"d"===a||this._prop){if(u=_(z?t.precompile[0]:u),m=_(z?t.precompile[1]:s),!z&&!J(u,m,p,g,q))return!1;for("log"!==t.precompile&&!0!==t.precompile||V('precompile:["'+y(u)+'","'+y(m)+'"]'),R="linear"!==(t.type||le.defaultType),R&&(u=re(u,t.smoothTolerance),m=re(m,t.smoothTolerance),u.size||E(u),m.size||E(m),C=ne(H[0]),this._origin=u.origin={x:u.left+C.x*u.width,y:u.top+C.y*u.height},H[1]&&(C=ne(H[1])),this._eOrigin={x:m.left+C.x*m.width,y:m.top+C.y*m.height}),this._rawPath=e._gsRawPath=u,b=u.length;--b>-1;)for(T=u[b],v=m[b],d=T.isSmooth||[],c=v.isSmooth||[],S=T.length,x=0,P=0;P<S;P+=2)v[P]===T[P]&&v[P+1]===T[P+1]||(R?d[P]&&c[P]?(A=T.smoothData,O=v.smoothData,Y=P+(P===S-4?7-S:5),this._controlPT={_next:this._controlPT,i:P,j:b,l1s:A[P+1],l1c:O[P+1]-A[P+1],l2s:A[Y],l2c:O[Y]-A[Y]},l=this._tweenRotation(T,v,P+2),this._tweenRotation(T,v,P,l),this._tweenRotation(T,v,Y-1,l),P+=4):this._tweenRotation(T,v,P):(l=this.add(T,P,T[P],v[P],0,0,0,0,0,1),l=this.add(T,P+1,T[P+1],v[P+1],0,0,0,0,0,1)||l))}else l=this.add(e,"setAttribute",e.getAttribute(a)+"",s+"",n,o,0,te(p),a);R&&(this.add(this._origin,"x",this._origin.x,this._eOrigin.x,0,0,0,0,0,1),l=this.add(this._origin,"y",this._origin.y,this._eOrigin.y,0,0,0,0,0,1)),l&&(this._props.push("morphSVG"),l.end=s,l.endProp=a)}return G},render(e,t){let r,n,o,i,a,l,s,h,p,g,d,c,f,u=t._rawPath,_=t._controlPT,y=t._anchorPT,m=t._rnd,w=t._target,x=t._pt;for(;x;)x.r(e,x.d),x=x._next;if(1===e&&t._apply)for(x=t._pt;x;)x.end&&(t._prop?w[t._prop]=x.end:w.setAttribute(x.endProp,x.end)),x=x._next;else if(u){for(;y;)l=y.sa+e*y.ca,a=y.sl+e*y.cl,y.t[y.i]=t._origin.x+T(l)*a,y.t[y.i+1]=t._origin.y+v(l)*a,y=y._next;for(o=e<.5?2*e*e:(4-2*e)*e-1;_;)s=_.i,i=u[_.j],f=s+(s===i.length-4?7-i.length:5),l=S(i[f]-i[s+1],i[f-1]-i[s]),d=v(l),c=T(l),p=i[s+2],g=i[s+3],a=_.l1s+o*_.l1c,i[s]=p-c*a,i[s+1]=g-d*a,a=_.l2s+o*_.l2c,i[f-1]=p+c*a,i[f]=g+d*a,_=_._next;if(w._gsRawPath=u,t._apply){for(r="",n=" ",h=0;h<u.length;h++)for(i=u[h],a=i.length,r+="M"+(i[0]*m|0)/m+" "+(i[1]*m|0)/m+" C",s=2;s<a;s++)r+=(i[s]*m|0)/m+" ";t._prop?w[t._prop]=r:w.setAttribute("d",r)}}t._render&&u&&t._render.call(t._tween,u,w)},kill(e){this._pt=this._rawPath=0},getRawPath:function(e){let t,r=(e=h(e)&&n.test(e)&&document.querySelector(e)||e).getAttribute?e:0;return r&&(e=e.getAttribute("d"))?(r._gsPath||(r._gsPath={}),t=r._gsPath[e],t&&!t._dirty?t:r._gsPath[e]=_(e)):e?h(e)?_(e):p(e[0])?[e]:e:console.warn("Expecting a <path> element or an SVG path data string")},stringToRawPath:_,rawPathToString:y,normalizeStrings(e,t,{shapeIndex:r,map:n}){let o=[e,t];return K(o,r,n),o},pathFilter:K,pointsFilter:ee,getTotalSize:E,equalizeSegmentQuantity:J,convertToPath:(e,t)=>w(e).map(e=>f(e,!1!==t)),defaultType:"linear",defaultUpdateTarget:!0,defaultMap:"size"};b()&&m.registerPlugin(le);export default le;export{le as MorphSVGPlugin};
