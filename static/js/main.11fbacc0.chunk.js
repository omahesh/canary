(this["webpackJsonpomahesh.github.io"]=this["webpackJsonpomahesh.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),a=n.n(i),o=n(7),u=n.n(o),h=n(5),c=n.n(h),l=n(8),s=n(2),f=n(9),g=n(4),m=n(3),d=n.p+"static/media/om.e4091921.txt";n(17);function p(t){return Object(r.jsx)("div",{className:"cell "+(t.alive?"alive":"")})}var v=function(t){Object(g.a)(n,t);var e=Object(m.a)(n);function n(t){var r;return Object(s.a)(this,n),r=e.call(this,t),setTimeout((function(){return r.update()}),1250),r.length=Number(t.length),document.documentElement.style.setProperty("--length",r.length),r.cellsize=window.innerWidth/r.length,r.height=Math.floor(window.innerHeight/r.cellsize),r.maxHeight=r.height,r.state={grid:Array(r.height).fill(0).map((function(){return Array(r.length).fill(0).map((function(){return!1}))}))},window.onresize=function(){r.cellsize=window.innerWidth/r.length,r.height=Math.min(Math.floor(window.innerHeight/r.cellsize),r.maxHeight);var t=Array(r.height).fill(0).map((function(t,e){return r.state.grid[e]||Array(r.length).fill(!1)}));r.setState({grid:t})},r}return Object(f.a)(n,[{key:"update",value:function(){var t=this;setTimeout((function(){for(var e=t.state.grid,n=[],r=0;r<e.length;r++){n.push([]);for(var i=0;i<e[r].length;i++){for(var a=0,o=-1;o<=1;o++)for(var u=-1;u<=1;u++)0===o&&0===u||r+o<0||r+o>=e.length||i+u<0||i+u>=e[r].length||e[r+o][i+u]&&a++;n[r][i]=e[r][i]&&2===a||3===a}}t.setState({grid:n}),t.update()}),150)}},{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,n,r,i,a=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:return e=t.sent,t.next=5,e.text();case 5:n=t.sent,r=n.split("\n").map((function(t){return t.split(", ").map((function(t){return"1"===t}))})),i=(i=Array(this.height).fill(0).map((function(){return Array(a.length).fill(!1)}))).map((function(t,e){var n=Math.floor(e-(a.height-r.length)/2);if(r.length<=n||n<0)return r.length+4>n&&n>=-4?t:t.map((function(){return Math.random()<.15}));var i=Math.floor((a.length-r[n].length)/2);return t.map((function(t,e){return r[n][e-i]||!1}))})),this.setState({grid:i});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)(a.a.Fragment,{children:this.state.grid.map((function(t,e){return Object(r.jsx)("div",{className:"row",children:t.map((function(t,n){return Object(r.jsx)(p,{alive:t},[e,n])}))})}))})}}]),n}(i.Component);n(18),n(19),i.Component,n(20),n(21);u.a.render(Object(r.jsx)(v,{length:"150"}),document.getElementById("grid"))}],[[22,1,2]]]);
//# sourceMappingURL=main.11fbacc0.chunk.js.map