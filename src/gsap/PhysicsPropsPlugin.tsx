//@ts-nocheck

let e,t,s,i,n,o=()=>e||"undefined"!=typeof window&&(e=window.gsap)&&e.registerPlugin&&e,r=e=>Math.round(1e4*e)/1e4,a=function(){return String.fromCharCode.apply(null,arguments)},l=a(103,114,101,101,110,115,111,99,107,46,99,111,109),c=(function(e){var t="undefined"!=typeof window,s=0===(t?window.location.href:"").indexOf(a(102,105,108,101,58,47,47))||-1!==e.indexOf(a(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(a(49,50,55,46,48,32,48,46,49)),i=[l,a(99,111,100,101,112,101,110,46,105,111),a(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),a(99,111,100,101,112,101,110,46,100,101,118),a(99,111,100,101,112,101,110,46,97,112,112),a(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),a(112,101,110,115,46,99,108,111,117,100),a(99,115,115,45,116,114,105,99,107,115,46,99,111,109),a(99,100,112,110,46,105,111),a(112,101,110,115,46,105,111),a(103,97,110,110,111,110,46,116,118),a(99,111,100,101,99,97,110,121,111,110,46,110,101,116),a(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),a(99,101,114,101,98,114,97,120,46,99,111,46,117,107),a(116,121,109,112,97,110,117,115,46,110,101,116),a(116,119,101,101,110,109,97,120,46,99,111,109),a(112,108,110,107,114,46,99,111),a(104,111,116,106,97,114,46,99,111,109),a(119,101,98,112,97,99,107,98,105,110,46,99,111,109),a(97,114,99,104,105,118,101,46,111,114,103),a(99,111,100,101,115,97,110,100,98,111,120,46,105,111),a(99,115,98,46,97,112,112),a(115,116,97,99,107,98,108,105,116,122,46,99,111,109),a(115,116,97,99,107,98,108,105,116,122,46,105,111),a(99,111,100,105,101,114,46,105,111),a(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),a(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),a(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),a(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),a(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),a(106,115,102,105,100,100,108,101,46,110,101,116)],n=function(){t&&("loading"===document.readyState||"interactive"===document.readyState?document.addEventListener("readystatechange",n):(document.removeEventListener("readystatechange",n),t&&window.console&&!window._gsapWarned&&"object"==typeof window.gsap&&!1!==window.gsap.config().trialWarn&&(console.log(a(37,99,87,97,114,110,105,110,103),a(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(a(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"PhysicsPropsPlugin"+a(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(a(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),a(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)))},o=i.length;for(setTimeout(n,50);--o>-1;)if(-1!==e.indexOf(i[o]))return!0;1||setTimeout((function(){t&&(window.location.href=a(104,116,116,112,115,58,47,47)+l+a(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=PhysicsPropsPlugin&source=trial")}),3e3)}("undefined"!=typeof window?window.location.host:""),r=>{e=r||o(),t||(s=e.utils.getUnit,i=e.core.getStyleSaver,n=e.core.reverting||function(){},t=1)});class d{constructor(e,t,i,n,o,r){let a=e._gsap,l=a.get(e,t);this.p=t,this.set=a.set(e,t),this.s=this.val=parseFloat(l),this.u=s(l)||0,this.vel=i||0,this.v=this.vel/r,n||0===n?(this.acc=n,this.a=this.acc/(r*r)):this.acc=this.a=0,this.fr=1-(o||0)}}const p={version:"3.11.5",name:"physicsProps",register:c,init(e,s,n){t||c();let o,r=this;for(o in r.styles=i&&i(e),r.target=e,r.tween=n,r.step=0,r.sps=30,r.vProps=[],s){let{velocity:t,acceleration:n,friction:a}=s[o];(t||n)&&(r.vProps.push(new d(e,o,t,n,a,r.sps)),r._props.push(o),i&&r.styles.save(o),a&&(r.hasFr=1))}},render(e,t){let s,i,o,a,l,{vProps:c,tween:d,target:p,step:f,hasFr:h,sps:u}=t,g=c.length,v=d._from?d._dur-d._time:d._time;if(d._time||!n())if(h){if(v*=u,i=(0|v)-f,i<0){for(;g--;)s=c[g],s.v=s.vel/u,s.val=s.s;g=c.length,t.step=f=0,i=0|v}for(o=v%1;g--;){for(s=c[g],a=i;a--;)s.v+=s.a,s.v*=s.fr,s.val+=s.v;s.set(p,s.p,r(s.val+s.v*o*s.fr)+s.u)}t.step+=i}else for(l=v*v*.5;g--;)s=c[g],s.set(p,s.p,r(s.s+s.vel*v+s.acc*l)+s.u);else t.styles.revert()},kill(e){let t=this.vProps,s=t.length;for(;s--;)t[s].p===e&&t.splice(s,1)}};o()&&e.registerPlugin(p);export default p;export{p as PhysicsPropsPlugin};
