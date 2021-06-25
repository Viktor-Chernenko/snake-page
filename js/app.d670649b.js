(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],h=0,d=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Snake",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"snake"},[i("div",{staticClass:"snake-field"},[e.startShow?i("div",{staticClass:"start-game"},[i("div",{staticClass:"start-game__title"},[e._v("Выберите уровень сложности:")]),i("form",{staticClass:"form"},[e._l(e.levels,(function(t,n){return i("div",{key:n,staticClass:"form__item"},[i("label",[i("span",{staticClass:"form__title",class:{active:t.value===e.speed}},[e._v(e._s(t.title))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.speed,expression:"speed"}],staticClass:"form__input",attrs:{type:"radio",name:"level"},domProps:{value:t.value,checked:e._q(e.speed,t.value)},on:{change:function(n){e.speed=t.value}}})])])})),i("button",{staticClass:"form__btn btn-start",on:{click:function(t){return t.preventDefault(),e.startGame.apply(null,arguments)}}},[e._v(" НАЧАТЬ ")])],2),this.widthWindow>1024?i("div",{staticClass:"start-game-info"},[i("div",{staticClass:"start-game-info__title"},[e._v("Управление:")]),i("img",{staticClass:"start-game-info__img",attrs:{src:n("a07e"),alt:"keyboard arrow controls"}})]):e._e()]):e._e(),e.endGameShow?i("div",{staticClass:"snake-total-points"},[e._m(0),i("div",{staticClass:"snake-total-points__item"},[i("span",{staticClass:"snake-total-points__title"},[e._v("ВАШ РЕЗУЛЬТАТ:")]),i("span",{staticClass:"snake-total-points__number"},[e._v(e._s(e.total))])]),i("button",{staticClass:"restart-btn",on:{click:function(t){t.preventDefault(),e.endGameShow=!1,e.startShow=!0}}},[e._v(" НАЧАТЬ ЗАНОВО ")])]):e._e(),e.winGameShow?i("div",{staticClass:"snake-win"},[i("div",{staticClass:"snake-win__title"},[e._v("Поздравляю")]),i("div",{staticClass:"snake-win__text"},[e._v("Вы выйграли +1 к карме")]),i("button",{staticClass:"restart-btn",on:{click:function(t){t.preventDefault(),e.winGameShow=!1,e.startShow=!0}}},[e._v(" НАЧАТЬ ЗАНОВО ")])]):e._e(),e._l(e.numberCells,(function(t,n){return[i("div",{key:n,staticClass:"snake-field__item",class:{food:e.coordinateX(n)===e.foodIndex[0]&&e.coordinateY(n)===e.foodIndex[1],"snake-body__item":e.snakeBody(e.coordinateX(n),e.coordinateY(n)),"snake-body-piece":e.snakePieceBody(e.coordinateX(n),e.coordinateY(n)),"snake-body-head":e.snakeHead(e.coordinateX(n),e.coordinateY(n))},attrs:{"data-X":e.coordinateX(n),"data-Y":e.coordinateY(n)}})]}))],2),i("div",{staticClass:"arrow-box"},[i("button",{staticClass:"arrow-box__item arrow-box-left",on:{click:function(t){return e.moveSnake("ArrowLeft")}}},[e._v(" > ")]),i("button",{staticClass:"arrow-box__item arrow-box-up",on:{click:function(t){return e.moveSnake("ArrowUp")}}},[e._v(" > ")]),i("button",{staticClass:"arrow-box__item arrow-box-down",on:{click:function(t){return e.moveSnake("ArrowDown")}}},[e._v(" > ")]),i("button",{staticClass:"arrow-box__item arrow-box-right",on:{click:function(t){return e.moveSnake("ArrowRight")}}},[e._v(" > ")])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"snake-total-points__item"},[n("span",{staticClass:"snake-total-points__msg"},[e._v("ВЫ ПРОИГРАЛИ")])])}],c=(n("fb6a"),{name:"Snake",data:function(){return{snakePiece:[],foodIndex:[],numberCells:100,direction:"ArrowRight",startShow:!0,speed:600,prohibitionAbruptActions:!0,total:0,winningScore:35,endGameShow:!1,winGameShow:!1,interval:null,widthWindow:window.innerWidth,levels:[{title:"Тяжелый",value:200},{title:"Средний",value:400},{title:"Лёгкий",value:600}]}},methods:{creatingFoodForSnake:function(){var e=Math.floor(10*Math.random()+1),t=Math.floor(10*Math.random()+1),n=this.snakePiece.every((function(n){var i=!1;return i=n[0]!==e||n[1]!==t,i}));n?this.foodIndex=[e,t]:this.creatingFoodForSnake()},changePosition:function(){var e=this;this.interval=setInterval((function(){var t=e.snakePiece[e.snakePiece.length-1][0],n=e.snakePiece[e.snakePiece.length-1][1];"ArrowRight"===e.direction&&e.snakePiece.push([t+1,n]),"ArrowLeft"===e.direction&&e.snakePiece.push([t-1,n]),"ArrowUp"===e.direction&&e.snakePiece.push([t,n-1]),"ArrowDown"===e.direction&&e.snakePiece.push([t,n+1]),e.snakePiece[e.snakePiece.length-1][0]>10&&(e.snakePiece[e.snakePiece.length-1][0]=1),e.snakePiece[e.snakePiece.length-1][1]>10&&(e.snakePiece[e.snakePiece.length-1][1]=1),e.snakePiece[e.snakePiece.length-1][0]<1&&(e.snakePiece[e.snakePiece.length-1][0]=10),e.snakePiece[e.snakePiece.length-1][1]<1&&(e.snakePiece[e.snakePiece.length-1][1]=10),e.catchingFood()||e.snakePiece.shift(),e.total=e.snakePiece.length-3,e.prohibitionAbruptActions=!0,e.endGame(),e.winGame()}),this.speed)},moveSnake:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ArrowRight";if(this.prohibitionAbruptActions){var t=!0;"ArrowRight"===this.direction&&"ArrowLeft"===e&&(this.direction,t=!1),"ArrowLeft"===this.direction&&"ArrowRight"===e&&(this.direction,t=!1),"ArrowUp"===this.direction&&"ArrowDown"===e&&(this.direction,t=!1),"ArrowDown"===this.direction&&"ArrowUp"===e&&(this.direction,t=!1),t&&(this.direction=e),this.prohibitionAbruptActions=!1}},snakeHead:function(e,t){if(this.snakePiece.length){var n=!1;return this.snakePiece[this.snakePiece.length-1][0]===e&&this.snakePiece[this.snakePiece.length-1][1]===t&&(n=!0),n}return!1},snakePieceBody:function(e,t){if(this.snakePiece.length){var n=this.snakePiece.slice(0,-1),i=n.some((function(n){return n[0]===e&&n[1]===t}));return i}return!1},snakeBody:function(e,t){var n=this.snakePiece.some((function(n){return n[0]===e&&n[1]===t}));return n},coordinateX:function(e){var t=e;return t=e%10?e%10:0,t+1},coordinateY:function(e){return Math.floor(e/10)+1},catchingFood:function(){var e=this.snakePiece[this.snakePiece.length-1][0]===this.foodIndex[0]&&this.snakePiece[this.snakePiece.length-1][1]===this.foodIndex[1];return!!e&&(this.creatingFoodForSnake(),e)},startGame:function(){this.startGameInfo=!0,this.startShow=!1,this.endGameShow=!1,this.changePosition();for(var e=Math.floor(4*Math.random()+5),t=Math.floor(10*Math.random()+1),n=0;n<3;n++)this.snakePiece.push([e-4+n,t]);this.creatingFoodForSnake()},endGame:function(){for(var e=!1,t=0;t<this.snakePiece.length-1;t++)this.snakePiece[this.snakePiece.length-1][0]===this.snakePiece[t][0]&&this.snakePiece[this.snakePiece.length-1][1]===this.snakePiece[t][1]&&(e=!0);e&&(clearInterval(this.interval),this.endGameShow=!0,this.snakePiece=[],this.foodIndex=[],this.direction="ArrowRight")},winGame:function(){this.total>=this.winningScore&&(clearInterval(this.interval),this.winGameShow=!0,this.snakePiece=[],this.foodIndex=[],this.direction="ArrowRight")}},mounted:function(){var e=this;document.addEventListener("keydown",(function(t){"ArrowRight"===t.key&&e.moveSnake("ArrowRight"),"ArrowLeft"===t.key&&e.moveSnake("ArrowLeft"),"ArrowUp"===t.key&&e.moveSnake("ArrowUp"),"ArrowDown"===t.key&&e.moveSnake("ArrowDown")}))}}),l=c,u=(n("b28c"),n("2877")),h=Object(u["a"])(l,r,s,!1,null,"4f5c8214",null),d=h.exports,f={name:"App",components:{Snake:d}},k=f,v=(n("5c0b"),Object(u["a"])(k,o,a,!1,null,null,null)),p=v.exports;n("f5df1");i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a07e:function(e,t,n){e.exports=n.p+"img/controls.4da11f95.png"},b28c:function(e,t,n){"use strict";n("bcca")},bcca:function(e,t,n){}});
//# sourceMappingURL=app.d670649b.js.map