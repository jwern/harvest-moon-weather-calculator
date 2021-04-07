(()=>{var t={447:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_blizzard.png"},17:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_clear.png"},469:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_cloudy.png"},969:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_drizzle.png"},237:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_hurricane.png"},59:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_rainy.png"},565:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_snowy.png"},953:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});const s=r.p+"images//hmsi_sunny.png"},467:(t,e,r)=>{var s={"./hmsi_blizzard.png":447,"./hmsi_clear.png":17,"./hmsi_cloudy.png":469,"./hmsi_drizzle.png":969,"./hmsi_hurricane.png":237,"./hmsi_rainy.png":59,"./hmsi_snowy.png":565,"./hmsi_sunny.png":953};function a(t){var e=n(t);return r(e)}function n(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=467}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,r),n.exports}r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";r.p;const t=function(){let t=0;return{getNewId:()=>(t++,t)}}();class e{constructor(){this._totalDays=0,this._totalWater=0,this._totalSun=0,this._ages=[{stage:"withered"}],this._currentAge=0,this._id=t.getNewId(),this._regrow=!1}increaseDays(){this._totalDays++}increaseWater(t){this._totalWater+=t}increaseSun(t){this._totalSun+=t}get age(){return this._ages[this._currentAge]}get id(){return this._id}get regrowStatus(){return this._regrow}get water(){return this._totalWater}get sun(){return this._totalSun}get waterNeeded(){if(!this.age.water)return"Water N/A";const t=this.age.water.min-this._totalWater;return t>=0?`Water Needed: ${t}`:"Max Water: "+(this.age.water.max-this._totalWater)}get sunNeeded(){if(!this.age.sun)return"Sun N/A";const t=this.age.sun.min-this._totalSun;return t>=0?`Sun Needed: ${t}`:"Max Sun: "+(this.age.sun.max-this._totalSun)}get daysNeeded(){if(!this.age.days)return"Days N/A";const t=this.age.days-this._totalDays;return t>=0?`Days Left: ${t}`:"Days Left: 0"}nextDay(t){this.increaseDays(),this.increaseWater(t.water),this.increaseSun(t.sun),this.checkStatus()}resetTotals(){this._totalDays=0,this._totalWater=0,this._totalSun=0}regrowCrop(){if(this._regrow){let t=this._ages.find((t=>t.stage===this._regrow)),e=this._ages.indexOf(t);this._currentAge=e}}ageCrop(){this._currentAge++,this.resetTotals()}witherCrop(){let t=this._ages.find((t=>"withered"===t.stage));this._currentAge=this._ages.indexOf(t)}checkStatus(){let t=this.age;if("withered"!==t.stage)if(this._totalWater>t.water.max||this._totalSun>t.sun.max)this.witherCrop();else if(this._totalDays>=t.days){if("mature"===t.stage)return void this.witherCrop();this._totalWater>=t.water.min&&this._totalSun>=t.sun.min&&this.ageCrop()}}}const s={Turnip:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"sprout",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"mature",days:10,sun:{max:39},water:{max:19}})}},Potato:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:3,sun:{min:4,max:19},water:{min:3,max:19}},{stage:"sprout",days:4,sun:{min:6,max:27},water:{min:4,max:27}},{stage:"mature",days:10,sun:{max:19},water:{max:9}})}},Cucumber:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:7,max:29},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:5,max:23},water:{min:2,max:7}},{stage:"sprout2",days:2,sun:{min:4,max:17},water:{min:2,max:9}},{stage:"mature",days:10,sun:{max:19},water:{max:7}}),this._regrow="sprout2"}},Cabbage:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:9,max:24},water:{min:3,max:11}},{stage:"sprout",days:5,sun:{min:12,max:29},water:{min:4,max:11}},{stage:"sprout2",days:5,sun:{min:12,max:26},water:{min:5,max:15}},{stage:"mature",days:10,sun:{max:9},water:{max:9}})}},Strawberry:class extends e{constructor(){super(),this._ages.unshift({stage:"seed",days:4,sun:{min:4,max:9},water:{min:4,max:11}},{stage:"sprout",days:3,sun:{min:3,max:9},water:{min:3,max:11}},{stage:"sprout2",days:2,sun:{min:3,max:5},water:{min:2,max:7}},{stage:"mature",days:10,sun:{max:9},water:{max:9}}),this._regrow="sprout2"}}},a=function(){let t=[];const e=e=>t.find((t=>t.id===Number(e.getAttribute("data-id"))));return{getCrops:()=>t,addCrop:e=>t.push(e),removeCrop:r=>{let s=e(r),a=t.indexOf(s);t.splice(a,1)},checkRegrow:t=>{let r=e(t);return!!r.regrowStatus&&(r.regrowCrop(),r)}}}(),n=function(t,e){const r=document.createElement(t);return r.classList.add(e),r},i=function(t,e,r){const s={name:`${r.constructor.name}`,stage:`Stage: ${r.age.stage}`,days:`${r.daysNeeded}`,water:`${r.waterNeeded}`,sun:`${r.sunNeeded}`};t.innerText=s[e]},o=function(t,e){const r=t.querySelector(".growing-crop-stage");i(r,"stage",e),function(t,e){"mature"===e.age.stage?t.classList.remove("hidden"):t.classList.add("hidden")}(t.querySelector(".harvest-button"),e);const s=t.querySelector(".growing-crop-days");i(s,"days",e);const a=t.querySelector(".growing-crop-water");i(a,"water",e);const n=t.querySelector(".growing-crop-sun");i(n,"sun",e)},u=function(){return document.getElementById("current-crops")},c=function(t){u().removeChild(t)},d=function(t){return t.closest(".growing-crop")},g=function(){const t=d(this);confirm("Really remove?")&&(a.removeCrop(t),c(t))},h=function(){const t=d(this);if(confirm("Harvest crop?")){let e=a.checkRegrow(t);e?o(t,e):(a.removeCrop(t),c(t))}},m=[{weather:"sunny",sun:3,water:0},{weather:"clear",sun:1,water:0},{weather:"cloudy",sun:0,water:0},{weather:"drizzle",sun:0,water:1},{weather:"rainy",sun:0,water:2},{weather:"snowy",sun:0,water:2},{weather:"blizzard",sun:0,water:3},{weather:"hurricane",sun:0,water:3}];r(467);const p=function(){const t=this.closest(".weather-button"),e=m.find((e=>e.weather===t.getAttribute("data-weather")));var r;r=e,a.getCrops().forEach((t=>t.nextDay(r))),a.getCrops().forEach((t=>{const e=document.querySelector(`[data-id="${t.id}"]`);o(e,t)}))},l=function(t){t.preventDefault(),function(t){const e=u(),r=function(t){const e=n("div","growing-crop");e.setAttribute("data-id",t.id);const r=n("span","growing-crop-name");return i(r,"name",t),[r,n("span","growing-crop-stage"),n("span","growing-crop-days"),n("span","growing-crop-water"),n("span","growing-crop-sun"),function(){const t=n("div","growing-crop-buttons"),e=n("button","harvest-button"),r=n("button","scythe-button");return e.innerText="Harvest",e.classList.add("hidden"),r.innerText="Scythe",e.addEventListener("click",h),r.addEventListener("click",g),t.appendChild(e),t.appendChild(r),t}()].forEach((t=>e.appendChild(t))),o(e,t),e}(t);e.appendChild(r)}(function(t){const e=new(0,s[t]);return a.addCrop(e),e}(Object.fromEntries(new FormData(t.target).entries()).type))};document.querySelectorAll(".weather-button img").forEach((t=>{t.addEventListener("click",p)})),document.getElementById("add-crops-form").addEventListener("submit",(t=>l(t)))})()})();