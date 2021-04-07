(()=>{var t={447:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_blizzard.png"},17:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_clear.png"},469:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_cloudy.png"},969:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_drizzle.png"},237:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_hurricane.png"},59:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_rainy.png"},565:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_snowy.png"},953:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a=s.p+"images//hmsi_sunny.png"},467:(t,e,s)=>{var a={"./hmsi_blizzard.png":447,"./hmsi_clear.png":17,"./hmsi_cloudy.png":469,"./hmsi_drizzle.png":969,"./hmsi_hurricane.png":237,"./hmsi_rainy.png":59,"./hmsi_snowy.png":565,"./hmsi_sunny.png":953};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=467}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{"use strict";s.p;const t=function(){let t=0;return{getNewId:()=>(t++,t)}}();class e{constructor(){this._totalDays=0,this._totalWater=0,this._totalSun=0,this._ages=[{stage:"withered"}],this._currentAge=0,this._id=t.getNewId(),this._regrow=!1}increaseDays(){this._totalDays++}increaseWater(t){this._totalWater+=t}increaseSun(t){this._totalSun+=t}get age(){return this._ages[this._currentAge]}get id(){return this._id}get regrowStatus(){return this._regrow}get water(){return this._totalWater}get sun(){return this._totalSun}get waterNeeded(){if(!this.age.water)return"Water N/A";const t=this.age.water.min-this._totalWater;return t>=0?`Water Needed: ${t}`:"Max Water: "+(this.age.water.max-this._totalWater)}get sunNeeded(){if(!this.age.sun)return"Sun N/A";const t=this.age.sun.min-this._totalSun;return t>=0?`Sun Needed: ${t}`:"Max Sun: "+(this.age.sun.max-this._totalSun)}get daysNeeded(){if(!this.age.days)return"Days N/A";const t=this.age.days-this._totalDays;return t>=0?`Days Left: ${t}`:"Days Left: 0"}nextDay(t){this.increaseDays(),this.increaseWater(t.water),this.increaseSun(t.sun),this.checkStatus()}resetTotals(){this._totalDays=0,this._totalWater=0,this._totalSun=0}regrowCrop(){if(this._regrow){let t=this._ages.find((t=>t.stage===this._regrow)),e=this._ages.indexOf(t);this._currentAge=e}}ageCrop(){this._currentAge++,this.resetTotals()}witherCrop(){let t=this._ages.find((t=>"withered"===t.stage));this._currentAge=this._ages.indexOf(t)}checkStatus(){let t=this.age;if("withered"!==t.stage)if(this._totalWater>t.water.max||this._totalSun>t.sun.max)this.witherCrop();else if(this._totalDays>=t.days){if("mature"===t.stage)return void this.witherCrop();this._totalWater>=t.water.min&&this._totalSun>=t.sun.min&&this.ageCrop()}}}const a={Turnip:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"sprout",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"mature",days:10,sun:{max:39},water:{max:19}})}},Potato:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:4,max:19},water:{min:3,max:19}},{stage:"sprout",days:4,sun:{min:6,max:27},water:{min:4,max:27}},{stage:"mature",days:10,sun:{max:19},water:{max:9}})}},Cucumber:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:7,max:29},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:5,max:23},water:{min:2,max:7}},{stage:"sprout2",days:2,sun:{min:4,max:17},water:{min:2,max:9}},{stage:"mature",days:10,sun:{max:19},water:{max:7}}),this._regrow="sprout2"}},Cabbage:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:9,max:24},water:{min:3,max:11}},{stage:"sprout",days:5,sun:{min:12,max:29},water:{min:4,max:11}},{stage:"sprout2",days:5,sun:{min:12,max:26},water:{min:5,max:15}},{stage:"mature",days:10,sun:{max:9},water:{max:9}})}},Strawberry:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:4,max:9},water:{min:4,max:11}},{stage:"sprout",days:3,sun:{min:3,max:9},water:{min:3,max:11}},{stage:"sprout2",days:2,sun:{min:3,max:5},water:{min:2,max:7}},{stage:"mature",days:10,sun:{max:9},water:{max:9}}),this._regrow="sprout2"}},Tomato:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:7,max:24},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:7,max:24},water:{min:2,max:9}},{stage:"sprout2",days:3,sun:{min:7,max:19},water:{min:2,max:9}},{stage:"sprout3",days:3,sun:{min:9,max:24},water:{min:2,max:11}},{stage:"mature",days:10,sun:{max:19},water:{max:7}}),this._regrow="sprout3"}},Corn:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:9},water:{min:3,max:11}},{stage:"sprout",days:4,sun:{min:8,max:19},water:{min:4,max:19}},{stage:"sprout2",days:4,sun:{min:8,max:24},water:{min:4,max:19}},{stage:"sprout3",days:3,sun:{min:8,max:24},water:{min:3,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:19}}),this._regrow="sprout3"}},Onion:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:3,max:14},water:{min:3,max:9}},{stage:"sprout",days:4,sun:{min:4,max:29},water:{min:4,max:13}},{stage:"mature",days:10,sun:{max:14},water:{max:9}})}},Pumpkin:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:12,max:29},water:{min:4,max:11}},{stage:"sprout",days:5,sun:{min:13,max:39},water:{min:5,max:13}},{stage:"sprout2",days:5,sun:{min:16,max:39},water:{min:5,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:5}})}},Pineapple:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:5,sun:{min:12,max:34},water:{min:5,max:15}},{stage:"sprout",days:5,sun:{min:12,max:29},water:{min:6,max:19}},{stage:"sprout2",days:5,sun:{min:10,max:34},water:{min:6,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:11}}),this._regrow="sprout2"}},Eggplant:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:22},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:8,max:24},water:{min:4,max:13}},{stage:"sprout2",days:3,sun:{min:8,max:24},water:{min:3,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:9}}),this._regrow="sprout2"}},Carrot:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:19},water:{min:3,max:11}},{stage:"sprout",days:4,sun:{min:6,max:24},water:{min:4,max:15}},{stage:"mature",days:10,sun:{max:14},water:{max:3}})}},Yam:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:1,sun:{min:2,max:5},water:{min:1,max:7}},{stage:"sprout",days:2,sun:{min:3,max:11},water:{min:1,max:3}},{stage:"sprout2",days:2,sun:{min:3,max:9},water:{min:1,max:3}},{stage:"mature",days:10,sun:{max:14},water:{max:3}}),this._regrow="sprout2"}},Spinach:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:2,sun:{min:2,max:9},water:{min:2,max:7}},{stage:"sprout",days:3,sun:{min:3,max:11},water:{min:2,max:7}},{stage:"mature",days:10,sun:{max:9},water:{max:3}})}},BellPepper:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:2,sun:{min:5,max:17},water:{min:2,max:9}},{stage:"sprout",days:1,sun:{min:3,max:9},water:{min:1,max:5}},{stage:"sprout2",days:2,sun:{min:4,max:11},water:{min:2,max:15}},{stage:"sprout3",days:2,sun:{min:4,max:11},water:{min:1,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:9}}),this._regrow="sprout3"}}},r=function(){let t=[];const e=e=>t.find((t=>t.id===Number(e.getAttribute("data-id"))));return{getCrops:()=>t,addCrop:e=>t.push(e),removeCrop:s=>{let a=e(s),r=t.indexOf(a);t.splice(r,1)},checkRegrow:t=>{let s=e(t);return!!s.regrowStatus&&(s.regrowCrop(),s)}}}(),n=function(t,e){const s=document.createElement(t);return s.classList.add(e),s},i=function(t){let e=t.split(""),s=e.slice(1).find((t=>t.match(/[A-Z]/)));if(s){let t=e.slice(1).indexOf(s);return e.splice(t+1,0," "),e.join("")}return t},u=function(t,e,s){const a={name:`${i(s.constructor.name)}`,stage:`Stage: ${s.age.stage}`,days:`${s.daysNeeded}`,water:`${s.waterNeeded}`,sun:`${s.sunNeeded}`};t.innerText=a[e]},o=function(t,e){const s=t.querySelector(".growing-crop-stage");u(s,"stage",e),function(t,e){"mature"===e.age.stage?t.classList.remove("hidden"):t.classList.add("hidden")}(t.querySelector(".harvest-button"),e);const a=t.querySelector(".growing-crop-days");u(a,"days",e);const r=t.querySelector(".growing-crop-water");u(r,"water",e);const n=t.querySelector(".growing-crop-sun");u(n,"sun",e)},m=function(){return document.getElementById("current-crops")},d=function(t){m().removeChild(t)},c=function(t){return t.closest(".growing-crop")},g=function(){const t=c(this);confirm("Really remove?")&&(r.removeCrop(t),d(t))},h=function(){const t=c(this);if(confirm("Harvest crop?")){let e=r.checkRegrow(t);e?o(t,e):(r.removeCrop(t),d(t))}},p=(function(){const t=document.getElementById("new-crop-dropdown");if(t)for(let e in a){let s=document.createElement("option");s.value=e,s.setAttribute("name",e),s.innerText=i(e),t.appendChild(s)}}(),[{weather:"sunny",sun:3,water:0},{weather:"clear",sun:1,water:0},{weather:"cloudy",sun:0,water:0},{weather:"drizzle",sun:0,water:1},{weather:"rainy",sun:0,water:2},{weather:"snowy",sun:0,water:2},{weather:"blizzard",sun:0,water:3},{weather:"hurricane",sun:0,water:3}]);s(467);const x=function(){const t=this.closest(".weather-button"),e=p.find((e=>e.weather===t.getAttribute("data-weather")));var s;s=e,r.getCrops().forEach((t=>t.nextDay(s))),r.getCrops().forEach((t=>{const e=document.querySelector(`[data-id="${t.id}"]`);o(e,t)}))},w=function(t){t.preventDefault(),function(t){const e=m(),s=function(t){const e=n("div","growing-crop");e.setAttribute("data-id",t.id);const s=n("span","growing-crop-name");return u(s,"name",t),[s,n("span","growing-crop-stage"),n("span","growing-crop-days"),n("span","growing-crop-water"),n("span","growing-crop-sun"),function(){const t=n("div","growing-crop-buttons"),e=n("button","harvest-button"),s=n("button","scythe-button");return e.innerText="Harvest",e.classList.add("hidden"),s.innerText="Scythe",e.addEventListener("click",h),s.addEventListener("click",g),t.appendChild(e),t.appendChild(s),t}()].forEach((t=>e.appendChild(t))),o(e,t),e}(t);e.appendChild(s)}(function(t){const e=new(0,a[t]);return r.addCrop(e),e}(Object.fromEntries(new FormData(t.target).entries()).type))};document.querySelectorAll(".weather-button img").forEach((t=>{t.addEventListener("click",x)})),document.getElementById("add-crops-form").addEventListener("submit",(t=>w(t)))})()})();