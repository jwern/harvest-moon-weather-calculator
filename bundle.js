(()=>{var t={447:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_blizzard.png"},17:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_clear.png"},469:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_cloudy.png"},969:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_drizzle.png"},237:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_hurricane.png"},59:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_rainy.png"},565:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_snowy.png"},953:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"images//hmsi_sunny.png"},467:(t,e,a)=>{var s={"./hmsi_blizzard.png":447,"./hmsi_clear.png":17,"./hmsi_cloudy.png":469,"./hmsi_drizzle.png":969,"./hmsi_hurricane.png":237,"./hmsi_rainy.png":59,"./hmsi_snowy.png":565,"./hmsi_sunny.png":953};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id=467}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,a),n.exports}a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{"use strict";a.p;const t=function(){let t=0;return{getNewId:()=>(t++,localStorage.setItem("localCropId",JSON.stringify(t)),t),updateIdWithLocal:e=>{t=Number(e)}}}();class e{constructor(e){this._totalDays=e._totalDays||0,this._totalWater=e._totalWater||0,this._totalSun=e._totalSun||0,this._ages=[{stage:"withered"}],this._currentAge=e._currentAge||0,this._id=e._id||t.getNewId(),this._regrow=!1}increaseDays(){this._totalDays++}increaseWater(t){this._totalWater+=t}increaseSun(t){this._totalSun+=t}get age(){return this._ages[this._currentAge]}get id(){return this._id}get regrowStatus(){return this._regrow}get water(){return this._totalWater}get sun(){return this._totalSun}get waterNeeded(){if(!this.age.water)return"Water N/A";const t=this.age.water.min-this._totalWater;return t>=0?`Water Needed: ${t}`:"Max Water: "+(this.age.water.max-this._totalWater)}get sunNeeded(){if(!this.age.sun)return"Sun N/A";const t=this.age.sun.min-this._totalSun;return t>=0?`Sun Needed: ${t}`:"Max Sun: "+(this.age.sun.max-this._totalSun)}get daysNeeded(){if(!this.age.days)return"Days N/A";const t=this.age.days-this._totalDays;return t>=0?`Days Left: ${t}`:"Days Left: 0"}nextDay(t){this.increaseDays(),this.increaseSun(t.sun),this.increaseWater(t.water),this.checkStatus()}resetTotals(){this._totalDays=0,this._totalWater=0,this._totalSun=0}regrowCrop(){if(this._regrow){let t=this._ages.find((t=>t.stage===this._regrow)),e=this._ages.indexOf(t);this._currentAge=e}}ageCrop(){this._currentAge++,this.resetTotals()}witherCrop(){let t=this._ages.find((t=>"withered"===t.stage));this._currentAge=this._ages.indexOf(t)}checkStatus(){let t=this.age;if("withered"!==t.stage)if(this._totalWater>t.water.max||this._totalSun>t.sun.max)this.witherCrop();else if(this._totalDays>=t.days){if("mature"===t.stage)return void this.witherCrop();this._totalWater>=t.water.min&&this._totalSun>=t.sun.min&&this.ageCrop()}}}const s={Turnip:class extends e{constructor(t={}){super(t),this.cropType="Turnip",this._ages.unshift({stage:"seed",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"sprout",days:2,sun:{min:3,max:19},water:{min:2,max:19}},{stage:"mature",days:10,sun:{max:39},water:{max:19}})}},Potato:class extends e{constructor(t={}){super(t),this.cropType="Potato",this._ages.unshift({stage:"seed",days:3,sun:{min:4,max:19},water:{min:3,max:19}},{stage:"sprout",days:4,sun:{min:6,max:27},water:{min:4,max:27}},{stage:"mature",days:10,sun:{max:19},water:{max:9}})}},Cucumber:class extends e{constructor(t={}){super(t),this.cropType="Cucumber",this._ages.unshift({stage:"seed",days:4,sun:{min:7,max:29},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:5,max:23},water:{min:2,max:7}},{stage:"sprout2",days:2,sun:{min:4,max:17},water:{min:2,max:9}},{stage:"mature",days:10,sun:{max:19},water:{max:7}}),this._regrow="sprout2"}},Cabbage:class extends e{constructor(t={}){super(t),this.cropType="Cabbage",this._ages.unshift({stage:"seed",days:4,sun:{min:9,max:24},water:{min:3,max:11}},{stage:"sprout",days:5,sun:{min:12,max:29},water:{min:4,max:11}},{stage:"sprout2",days:5,sun:{min:12,max:26},water:{min:5,max:15}},{stage:"mature",days:10,sun:{max:9},water:{max:9}})}},Strawberry:class extends e{constructor(t={}){super(t),this.cropType="Strawberry",this._ages.unshift({stage:"seed",days:4,sun:{min:4,max:9},water:{min:4,max:11}},{stage:"sprout",days:3,sun:{min:3,max:9},water:{min:3,max:11}},{stage:"sprout2",days:2,sun:{min:3,max:5},water:{min:2,max:7}},{stage:"mature",days:10,sun:{max:9},water:{max:9}}),this._regrow="sprout2"}},Tomato:class extends e{constructor(t={}){super(t),this.cropType="Tomato",this._ages.unshift({stage:"seed",days:3,sun:{min:7,max:24},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:7,max:24},water:{min:2,max:9}},{stage:"sprout2",days:3,sun:{min:7,max:19},water:{min:2,max:9}},{stage:"sprout3",days:3,sun:{min:9,max:24},water:{min:2,max:11}},{stage:"mature",days:10,sun:{max:19},water:{max:7}}),this._regrow="sprout3"}},Corn:class extends e{constructor(t={}){super(t),this.cropType="Corn",this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:9},water:{min:3,max:11}},{stage:"sprout",days:4,sun:{min:8,max:19},water:{min:4,max:19}},{stage:"sprout2",days:4,sun:{min:8,max:24},water:{min:4,max:19}},{stage:"sprout3",days:3,sun:{min:8,max:24},water:{min:3,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:19}}),this._regrow="sprout3"}},Onion:class extends e{constructor(t={}){super(t),this.cropType="Onion",this._ages.unshift({stage:"seed",days:3,sun:{min:3,max:14},water:{min:3,max:9}},{stage:"sprout",days:4,sun:{min:4,max:29},water:{min:4,max:13}},{stage:"mature",days:10,sun:{max:14},water:{max:9}})}},Pumpkin:class extends e{constructor(t={}){super(t),this.cropType="Pumpkin",this._ages.unshift({stage:"seed",days:4,sun:{min:12,max:29},water:{min:4,max:11}},{stage:"sprout",days:5,sun:{min:13,max:39},water:{min:5,max:13}},{stage:"sprout2",days:5,sun:{min:16,max:39},water:{min:5,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:5}})}},Pineapple:class extends e{constructor(t={}){super(t),this.cropType="Pineapple",this._ages.unshift({stage:"seed",days:5,sun:{min:12,max:34},water:{min:5,max:15}},{stage:"sprout",days:5,sun:{min:12,max:29},water:{min:6,max:19}},{stage:"sprout2",days:5,sun:{min:10,max:34},water:{min:6,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:11}}),this._regrow="sprout2"}},Eggplant:class extends e{constructor(t={}){super(t),this.cropType="Eggplant",this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:22},water:{min:3,max:11}},{stage:"sprout",days:3,sun:{min:8,max:24},water:{min:4,max:13}},{stage:"sprout2",days:3,sun:{min:8,max:24},water:{min:3,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:9}}),this._regrow="sprout2"}},Carrot:class extends e{constructor(t={}){super(t),this.cropType="Carrot",this._ages.unshift({stage:"seed",days:3,sun:{min:5,max:19},water:{min:3,max:11}},{stage:"sprout",days:4,sun:{min:6,max:24},water:{min:4,max:15}},{stage:"mature",days:10,sun:{max:14},water:{max:3}})}},Yam:class extends e{constructor(t={}){super(t),this.cropType="Yam",this._ages.unshift({stage:"seed",days:1,sun:{min:2,max:5},water:{min:1,max:7}},{stage:"sprout",days:2,sun:{min:3,max:11},water:{min:1,max:3}},{stage:"sprout2",days:2,sun:{min:3,max:9},water:{min:1,max:3}},{stage:"mature",days:10,sun:{max:14},water:{max:3}}),this._regrow="sprout2"}},Spinach:class extends e{constructor(t={}){super(t),this.cropType="Spinach",this._ages.unshift({stage:"seed",days:2,sun:{min:2,max:9},water:{min:2,max:7}},{stage:"sprout",days:3,sun:{min:3,max:11},water:{min:2,max:7}},{stage:"mature",days:10,sun:{max:9},water:{max:3}})}},BellPepper:class extends e{constructor(t={}){super(t),this.cropType="BellPepper",this._ages.unshift({stage:"seed",days:2,sun:{min:5,max:17},water:{min:2,max:9}},{stage:"sprout",days:1,sun:{min:3,max:9},water:{min:1,max:5}},{stage:"sprout2",days:2,sun:{min:4,max:11},water:{min:2,max:15}},{stage:"sprout3",days:2,sun:{min:4,max:11},water:{min:1,max:15}},{stage:"mature",days:10,sun:{max:19},water:{max:9}}),this._regrow="sprout3"}}},r={Spring:["Turnip","Potato","Cucumber","Cabbage","Strawberry"],Summer:["Tomato","Corn","Onion","Pumpkin","Pineapple"],Fall:["Eggplant","Carrot","Yam","Spinach","BellPepper"]},n=function(){let t;return{weatherButton:e=>{t=e,localStorage.setItem("localLastWeatherPressed",JSON.stringify(t))},getLastWeather:()=>t,undoLastWeather:()=>console.log(t),getLocalLastWeather:e=>{let a=JSON.parse(e);t=a}}}(),i=function(){let t=[];const e=()=>{localStorage.setItem("localMyCrops",JSON.stringify(t))},a=e=>t.find((t=>t.id===Number(e.getAttribute("data-id"))));return{getCrops:()=>t,addCrop:e=>{const a=n.getLastWeather();document.getElementById("apply-days-weather").checked&&a&&(e.increaseWater(a.water),e.increaseSun(a.sun)),t.push(e)},removeCrop:s=>{let r=a(s),n=t.indexOf(r);t.splice(n,1),e()},checkRegrow:t=>{let s=a(t);return!!s.regrowStatus&&(s.regrowCrop(),e(),s)},waterCrop:t=>{let s=a(t);return s.increaseWater(1),e(),s},replaceWithLocalCrops:e=>{let a=[],r=JSON.parse(e);for(let t of r){let e=new s[t.cropType](t);a.push(e)}t=a},setLocalCrops:e}}(),o=function(t,e){const a=document.createElement(t);return a.classList.add(e),a},u=function(t){let e=t.split(""),a=e.slice(1).find((t=>t.match(/[A-Z]/)));if(a){let t=e.slice(1).indexOf(a);return e.splice(t+1,0," "),e.join("")}return t},m=function(t,e,a){const s={name:`${u(a.constructor.name)}`,stage:`Stage: ${a.age.stage}`,days:`${a.daysNeeded}`,water:`${a.waterNeeded}`,sun:`${a.sunNeeded}`};t.innerText=s[e]},c=function(t,e){const a=t.querySelector(".growing-crop-stage");m(a,"stage",e),function(t,e){"mature"===e.age.stage?t.classList.remove("hidden"):t.classList.add("hidden")}(t.querySelector(".harvest-button"),e);const s=t.querySelector(".growing-crop-days");m(s,"days",e);const r=t.querySelector(".growing-crop-water");m(r,"water",e);const n=t.querySelector(".growing-crop-sun");m(n,"sun",e)},d=function(){return document.getElementById("current-crops")},g=function(t){d().removeChild(t)},p=function(t){return t.closest(".growing-crop")},l=function(){const t=p(this);confirm("Really remove?")&&(i.removeCrop(t),g(t))},h=function(){const t=p(this);if(confirm("Harvest crop?")){let e=i.checkRegrow(t);e?c(t,e):(i.removeCrop(t),g(t))}},w=function(){const t=p(this);let e=i.waterCrop(t);c(t,e)},x=function(t){const e=d(),a=function(t){const e=o("div","growing-crop");e.setAttribute("data-id",t.id);const a=o("span","growing-crop-name");return m(a,"name",t),[a,o("span","growing-crop-stage"),o("span","growing-crop-days"),o("span","growing-crop-water"),o("span","growing-crop-sun"),function(){const t=o("div","growing-crop-buttons"),e=o("button","harvest-button"),a=o("button","scythe-button"),s=o("button","water-button");return e.innerText="Harvest",e.classList.add("hidden"),a.innerText="Scythe",s.innerText="Water",e.addEventListener("click",h),a.addEventListener("click",l),s.addEventListener("click",w),t.appendChild(e),t.appendChild(a),t.appendChild(s),t}()].forEach((t=>e.appendChild(t))),c(e,t),e}(t);e.appendChild(a)},y=function(){return document.getElementById("new-crop-dropdown")},f=function(t){const e=y();if(e){let a=r[t];for(let t of a){let a=document.createElement("option");a.value=t,a.setAttribute("name",t),a.innerText=u(t),e.appendChild(a)}}},_=function(){const t=y();if(t)for(;t.lastChild;)t.removeChild(t.lastChild);f(this.value)},S=[{weather:"sunny",sun:3,water:0},{weather:"clear",sun:2,water:0},{weather:"cloudy",sun:1,water:0},{weather:"drizzle",sun:0,water:1},{weather:"rainy",sun:0,water:2},{weather:"snowy",sun:0,water:2},{weather:"blizzard",sun:0,water:3},{weather:"hurricane",sun:0,water:3}];a(467);const C=function(){const t=this.closest(".weather-button"),e=S.find((e=>e.weather===t.getAttribute("data-weather")));var a;a=e,i.getCrops().forEach((t=>t.nextDay(a))),i.setLocalCrops(),n.weatherButton(e),i.getCrops().forEach((t=>{const e=document.querySelector(`[data-id="${t.id}"]`);c(e,t)}))};document.getElementById("calculator-body")&&(function(){document.querySelectorAll(".weather-button img").forEach((t=>{t.addEventListener("click",C)})),document.getElementById("weather-buttons-undo").addEventListener("click",n.undoLastWeather);const t=document.getElementById("add-crops-form");t.addEventListener("submit",(t=>function(t){t.preventDefault();let e=function(t){const e=new(0,s[t]);return i.addCrop(e),i.setLocalCrops(),e}(Object.fromEntries(new FormData(t.target).entries()).type);x(e)}(t))),t.querySelectorAll('input[name="season"]').forEach((t=>t.addEventListener("change",_)))}(),f("Spring"),function(){if(function(t){var e;try{e=window.localStorage;var a="__storage_test__";return e.setItem(a,a),e.removeItem(a),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}()){let e=localStorage.getItem("localMyCrops"),a=localStorage.getItem("localCropId"),s=localStorage.getItem("localLastWeatherPressed");if(e){i.replaceWithLocalCrops(e);for(let t of i.getCrops())x(t);a&&t.updateIdWithLocal(a),s&&n.getLocalLastWeather(s)}}}())})()})();