(window["webpackJsonpbaseball-scorekeeper"]=window["webpackJsonpbaseball-scorekeeper"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRoge2ZPQ7CMAxGP5A4DT0OiAHu0ZGO3BlEWeolSqo2/omD/CQGGOzvJWrrFCAIgqAHzj33nAB8ADykCm7gCuAN4MUtNAGYl4+VBIWnvtUSQ1JoXr7f+BmL3Ao9h9qCl0xBrZ1IV5563bmFLSTUwhOaEurhCQ0Js/CEpIR5eEJColl4giPRPDxRI+EmPLFHwl14YouE2/DEmoT78ERpjrGep1jkdsL9yqfkdkJt5Y/SBQF8C78fAJwU+omSu2AtRnERur6I126VloeiKrbc591K7HlIuZOoecK6keCMB80lJGabZhKSg5m5hMZUaSahORKrS1jM82oSlocRcYm/eLk7Qn/lU9KdeHILjrA/SZEEOzzR9V9MQRAEevwAP81TZMDoVoUAAAAASUVORK5CYII="},function(e,t,a){e.exports=a.p+"static/media/open-button.f53b7bf1.svg"},function(e,t,a){e.exports=a.p+"static/media/icons8-plus.23acaf4b.svg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(1),s=(a(23),a(2)),i=a.n(s),u=a(4),m=a(14),d=a(6),f=a(8),p=a(7),b=a(9);a(25);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this))).componentDidUpdate=function(e,t){e.value!==a.props.value&&a.setState({textValue:a.props.value}),t.editable&&!a.state.editable&&a.props.onChange&&(2===a.props.onChange.length?a.props.onChange(a.state.textValue,a.props.id):a.props.onChange(a.state.textValue))},a.onChange=function(e){var t=e.target.value;a.setState({textValue:t})},a.toggleEditable=function(e){a.setState(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{editable:!e.editable})})},a.onEnter=function(e){13===e.keyCode&&a.toggleEditable(e)},a.render=function(){var e;return e=a.state.editable?r.a.createElement("input",{type:"text",name:"result",onBlur:a.toggleEditable,value:a.state.textValue,onChange:a.onChange,onSubmit:a.toggleEditable,onKeyUp:a.onEnter,autoFocus:!0}):r.a.createElement("div",{className:"notEditable ".concat(""===a.state.textValue?a.props.noValueClassName:"")},a.state.textValue||a.props.placeholder||""),r.a.createElement("div",{className:"editableText",onClick:a.toggleEditable},r.a.createElement("div",{className:"stretch"},e))},a.state={editable:!1,textValue:e.value?e.value:""},a}return Object(b.a)(t,e),t}(n.Component);h.defaultProps={noValueClassName:"noValue"};var v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={value:a.props.value?a.props.value:a.props.options[0]},a.handleChange=function(e){a.setState({value:e.target.value}),a.props.onChange&&a.props.onChange(e.target.value)},a.render=function(){return r.a.createElement("div",{className:"select"},r.a.createElement("select",{className:a.props.className,value:a.state.value,onChange:a.handleChange},a.props.options.map(function(e,t){return r.a.createElement("option",{value:e,key:t.toString()},e)})))},a}return Object(b.a)(t,e),t}(n.Component),E=a(3),y=(a(26),function(e){function t(e){var a;if(Object(d.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).componentDidUpdate=function(){if(a.props.onChange){var e=t.months.findIndex(function(e){return e.name===a.state.month}),n=new Date(a.state.year,e,a.state.day);a.props.onChange(n.toISOString())}},a.render=function(){return r.a.createElement("div",{className:"date-picker"},r.a.createElement(v,{className:"date-dropdown",options:t.months.map(function(e){return e.name}),onChange:function(e){return a.setState({month:e})},value:a.state.month}),r.a.createElement(v,{className:"date-dropdown",options:a.state&&a.state.month?Object(E.a)(Array(t.months.find(function(e){return e.name===a.state.month}).days).keys()).map(function(e,t){return t+1}):Object(E.a)(Array(31).keys()).map(function(e,t){return t+1}),onChange:function(e){return a.setState({day:e})},value:a.state.day}),r.a.createElement(v,{className:"date-dropdown year",options:Object(E.a)(Array(30).keys()).map(function(e,t){return t+2019}),onChange:function(e){return a.setState({year:e})},value:a.state.year}))},e.date){var n=new Date(e.date);a.state={month:t.months[n.getMonth()].name,day:n.getDate(),year:n.getFullYear()}}else a.state={month:"Jan",day:1,year:2019};return a}return Object(b.a)(t,e),t}(n.Component));y.months=[{name:"Jan",days:31},{name:"Feb",days:29},{name:"Mar",days:31},{name:"Apr",days:30},{name:"May",days:31},{name:"Jun",days:30},{name:"Jul",days:31},{name:"Aug",days:31},{name:"Sep",days:30},{name:"Oct",days:31},{name:"Nov",days:30},{name:"Dec",days:31}];var O=a(10),j=a.n(O),C=(a(34),a(35),function(e){var t=e.labels;return r.a.createElement("div",{className:"table-header table-row"},t.map(function(e,t){return r.a.createElement("div",{key:t.toString(),className:"table-column"},e)}))}),N=a(15),k=a.n(N),w=(a(36),function(){return r.a.createElement("div",{className:"skeleton-wrapper"},r.a.createElement("div",{className:"skeleton"}))}),S=function(e){var t=e.id,a=e.loading,n=e.columns,c=e.onSelect,o=e.onDelete,l=e.numColumns;return r.a.createElement("div",{className:"table-row",onClick:function(){c&&c(t)}},!a&&n.map(function(e,t){return r.a.createElement("div",{key:t.toString(),className:"table-column"},e)}),!a&&o&&r.a.createElement("img",{className:"delete-icon",src:k.a,onClick:function(e){e.stopPropagation(),o(t)},alt:"delete"}),a&&Array.from({length:l},function(e,t){return r.a.createElement(w,{key:t.toString()})}))},A=(a(37),function(e){var t=e.headers,a=e.rows,n=e.onSelect,c=e.onDelete,o=e.loading;return r.a.createElement("div",{className:"table"},r.a.createElement(C,{labels:t}),r.a.createElement("div",{className:"data"},!o&&a.map(function(e){return r.a.createElement(S,{id:e.id,key:e.id,columns:e.data,onSelect:n,onDelete:c})}),o&&Array.from({length:3},function(e,a){return r.a.createElement(S,{key:a.toString(),loading:!0,numColumns:t.length})})))}),x=(a(12),function(e){var t=e.title,a=e.text,n=e.onSubmit,o=e.onCancel,l=e.submitLabel,s=e.cancelLabel,i=e.error;return Object(c.createPortal)(r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-box ".concat(i?"error":"")},r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"text"},a),r.a.createElement("div",{className:"buttons"},o&&r.a.createElement("button",{className:"cancel-button",onClick:o},s||"Cancel"),r.a.createElement("button",{className:"submit-button",onClick:n},l||"Submit")))),document.body)}),D=(a(38),a(16)),I=a.n(D),B=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],s=c[1];return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"open-button ".concat(o?"open":""),onClick:function(){s(!o)}},r.a.createElement("img",{src:I.a,alt:"Open menu"})),o&&r.a.createElement("div",{className:"content"},t.map(function(e,t){return r.a.createElement("div",{key:t.toString()},e)})))},V=function(e){var t=e.label,a=e.onClick;return r.a.createElement("div",{className:"menu-button",onClick:a},t)},P=function(e){var t=e.label,a=e.defaultValue,n=e.onChange;return r.a.createElement("div",{className:"menu-toggle"},r.a.createElement("label",{htmlFor:"toggle"},t),r.a.createElement(j.a,{id:"toggle",className:"toggle",defaultChecked:a,onChange:n,icons:{checked:null,unchecked:null}}))},L=function(e){var t=e.label,a=e.selected,n=e.onSelect;return r.a.createElement("div",{className:"tab ".concat(a?"":"not-selected"),onClick:function(){return n(t)}},t)},R=(a(39),function(e){var t=e.labels,a=e.selectedLabel,n=e.onSelect;return r.a.createElement("div",{className:"tabs"},t.map(function(e,t){return r.a.createElement(L,{onSelect:n,label:e,selected:e===a,key:t})}))}),T=(a(40),a(17)),J=a.n(T),U=function(e){var t=e.addInning,a=e.team,n=e.onTeamChange,c=e.date,o=e.onDateChange,l=e.menu;return r.a.createElement("div",{className:"game-metadata"},r.a.createElement("div",{className:"main-menu"},l),r.a.createElement("div",{className:"team-name-wrapper metadata-wrapper"},r.a.createElement("div",{className:"team-name"},r.a.createElement(h,{value:a,onChange:n,placeholder:"Team Name"}))),r.a.createElement("div",{className:"game-date-wrapper metadata-wrapper"},r.a.createElement("div",{className:"game-date"},r.a.createElement(y,{date:c,onChange:o}))),r.a.createElement("div",{className:"add-inning metadata-wrapper",onClick:t},r.a.createElement("img",{src:J.a,alt:"Add inning"})))},M=(a(13),function(e){var t=e.type,a=e.reached,n=e.updateCount,c="pitchBox ".concat(a?"reached":"");return r.a.createElement("div",{className:c,onClick:function(e){return n(t,!a)}})}),G=r.a.memo(function(e){var t=e.onChange,a=e.balls,n=void 0===a?0:a,c=e.strikes,o=void 0===c?0:c,l=function(e,t,a){return Array.from({length:t}).map(function(t,n){return r.a.createElement(M,{key:n,type:a,reached:n+1<=e,updateCount:s})})},s=function(e,a){"ball"===e?t({strikes:o,balls:a?n+1:n-1}):t({strikes:a?o+1:o-1,balls:n})};return r.a.createElement("div",{className:"pitchCount"},r.a.createElement("div",{className:"balls flexbox"},l(n,3,"ball")),r.a.createElement("div",{className:"strikes flexbox"},l(o,2,"strike")))}),K=(a(41),function(e){var t=e.farthestBase,a=void 0===t?0:t,n=e.onBaseClick,c=function(e){return e<=a?"base reached":"base"},o=function(e){n(parseInt(e.target.id))};return r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 180"},r.a.createElement("g",{className:"infield",transform:"matrix(-0.7,-0.7,0.7,-0.7,115,180)"},r.a.createElement("path",{className:"dirt",d:"M 0 0 L 160 0 A 160 140 45 0 1 0 160 L 0 0"}),r.a.createElement("g",{className:"bases"},r.a.createElement("rect",{className:"grass",y:"0",width:"100px",height:"100px",x:"0"}),a>=1&&r.a.createElement("line",{x1:"2",y1:"18",x2:"2",y2:"80",className:"base-line reached"}),a>=2&&r.a.createElement("line",{x1:"20",y1:"98",x2:"80",y2:"98",className:"base-line reached"}),a>=3&&r.a.createElement("line",{x1:"98",y1:"18",x2:"98",y2:"80",className:"base-line reached"}),a>=4&&r.a.createElement("line",{x1:"80",y1:"2",x2:"18",y2:"2",className:"base-line reached"}),r.a.createElement("rect",{id:"1",name:"first",className:c(1),x:"0",y:"80",onClick:o}),r.a.createElement("rect",{id:"2",name:"second",className:c(2),x:"80",y:"80",onClick:o}),r.a.createElement("rect",{id:"3",name:"third",className:c(3),x:"80",y:"0",onClick:o}),r.a.createElement("polygon",{id:"4",name:"home",className:c(4),points:"0,0 18,0 26,8 8,26 0,18 0,0",fill:"white",onClick:o}))))}),Q=function(e){var t=e.children;return Object(c.createPortal)(r.a.createElement("div",{className:"modal"},t),document.body)},F=(a(42),r.a.memo(function(e){var t,a,c=e.inning,o=e.result,s=e.onChange,i=e.isModal;if(!i){var u=Object(n.useState)(!1),m=Object(l.a)(u,2);t=m[0],a=m[1]}var d=o&&o.farthestBase||0,f=o&&o.count||{balls:0,strikes:0},p=o&&o.result||"";return r.a.createElement("div",{className:"wrapper ".concat(i?"large":""),onClick:i?void 0:function(){return a(!0)}},r.a.createElement("div",{className:"field"},r.a.createElement(K,{onBaseClick:function(e){s({farthestBase:e<=d?e-1:e,count:f,result:p,inning:c})},farthestBase:d}),r.a.createElement("div",{className:"count"},r.a.createElement(G,Object.assign({onChange:function(e){return s({count:e,farthestBase:d,result:p,inning:c})}},f)))),r.a.createElement("div",{className:"result"},r.a.createElement(h,{onChange:function(e){return s({count:f,farthestBase:d,result:e,inning:c})},placeholder:"result",value:p})),t&&r.a.createElement(Q,{result:o},r.a.createElement(F,{isModal:!0,result:o})))})),H=(a(43),function(e){var t=e.initName,a=void 0===t?"":t,c=e.initSince,o=void 0===c?1:c,s=e.onChange,i=e.showInningSelection,u=e.id,m=Object(n.useState)(a),d=Object(l.a)(m,2),f=d[0],p=d[1],b=Object(n.useState)(o),g=Object(l.a)(b,2),E=g[0],y=g[1];return Object(n.useEffect)(function(){s&&s({name:f,since:parseInt(E)},u)},[f,E,s,u]),Object(n.useEffect)(function(){return p(a)},[a,p]),r.a.createElement("div",{className:"player dashed-border-bottom"},r.a.createElement(h,{value:f,onChange:p,noValueClassName:""}),i&&r.a.createElement(v,{value:o,onChange:y,options:Array.from({length:9},function(e,t){return t+1})}))}),Y=(a(44),function(e){var t=e.players,a=void 0===t?[]:t,n=e.onChange,c=function(e,t){if(t===a.length||e.name&&e.name!==a[t].name||e.since!==a[t].since){var r=Object(E.a)(a);t<a.length?r[t]=e:""!==e.name&&r.push(e),n&&n(r)}},o=a.map(function(e,t){return r.a.createElement(H,{initName:e.name,initSince:e.since,showInningSelection:t>0,id:t,key:t.toString(),onChange:c})});return o.push(r.a.createElement(H,{id:a.length,showInningSelection:a.length>0,key:a.length.toString(),onChange:c})),r.a.createElement("div",{className:"player-names"},o)}),Z=function(e){var t=e.stats,a=e.onUpdate,n=e.number,c=e.innings,o=void 0===c?9:c,l=t.players,s=t.results,i=void 0===s?[]:s,u=function(e){var t=Object(E.a)(i);t[e.inning-1]=e,a&&a({position:n,results:t,players:l})},m=Array.from({length:o},function(e,a){return r.a.createElement("div",{key:"".concat(n,"-").concat(a),className:"inning"},r.a.createElement(F,{inning:a+1,onChange:u,result:t&&t.results?t.results[a]:void 0}))});return r.a.createElement("div",{className:"position"},r.a.createElement("div",{className:"players left-column"},r.a.createElement(Y,{onChange:function(e){a&&a({position:n,results:i,players:e})},players:t?t.players:void 0})),r.a.createElement("div",{className:"results"},m))},q=(a(45),a(46),function(e){var t=e.innings,a=void 0===t?9:t;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"left-column"},"Players"),r.a.createElement("div",{className:"innings"},Array.from({length:a},function(e,t){return r.a.createElement("div",{key:t.toString(),className:"inning inning-header"},t+1)}),r.a.createElement("div",{className:"end inning"})))}),z=function(e){var t=e.onChange,a=e.innings,c=e.stats,o=void 0===c?Array.from({length:9},function(e,t){return{}}):c,l=function(e){var t=Object(n.useRef)();return Object(n.useEffect)(function(){t.current=e}),t.current}(a);Object(n.useEffect)(function(){return t&&t(o)},[o,t]),Object(n.useEffect)(function(){l&&l!==a&&window.scroll(window.scroll(window.outerWidth,0))},[a,l]);var s=function(e){var a=o?Object(E.a)(o):[];a[e.position-1]=e,t&&t(a)},i=o.map(function(e,t){return r.a.createElement(Z,{number:t+1,innings:a,key:t,stats:e,onUpdate:s})});return r.a.createElement("div",{className:"innings-grid"},r.a.createElement(q,{innings:a}),r.a.createElement("div",{className:"grid"},i))},W=function(e){var t=e.gameId,a=e.onReload,c=Object(n.useState)(t),o=Object(l.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(!0),f=Object(l.a)(d,2),p=f[0],b=f[1],g=Object(n.useState)("home"),h=Object(l.a)(g,2),v=h[0],E=h[1],y=Object(n.useState)(),O=Object(l.a)(y,2),j=O[0],C=O[1],N=Object(n.useState)(),k=Object(l.a)(N,2),w=k[0],S=k[1],A=Object(n.useState)(),D=Object(l.a)(A,2),I=D[0],L=D[1],T=Object(n.useState)(),J=Object(l.a)(T,2),M=J[0],G=J[1],K=Object(n.useState)(),Q=Object(l.a)(K,2),F=Q[0],H=Q[1],Y=Object(n.useState)(9),Z=Object(l.a)(Y,2),q=Z[0],W=Z[1],X=Object(n.useState)({show:!1}),$=Object(l.a)(X,2),_=$[0],ee=$[1],te=Object(n.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ce=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s?"put":"post",e.next=3,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(s||""),{method:t,headers:{"content-type":"application/json"},body:JSON.stringify({metadata:{date:I,homeTeam:j,awayTeam:w},innings:{home:M,away:F}})});case 3:a=e.sent,s||(console.log(a.headers),n=a.headers.get("location"),r=n.substring(n.lastIndexOf("/")+1),m(r)),a.ok?ee({show:!0,title:"Game saved successfully!"}):ee({show:!0,title:"Error saving game",error:!0});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),oe=function(){W(q+1)};Object(n.useEffect)(function(){(function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=14;break}return e.next=3,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,L(a.metadata.date),C(a.metadata.homeTeam),S(a.metadata.awayTeam),G(a.innings.home),H(a.innings.away),n=a.innings&&a.innings[0]&&a.innings[0].results.length>=9?a.innings[0].results.length:9,W(n);case 14:b(!1);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[s]);var le=r.a.createElement(B,null,r.a.createElement(V,{label:"Save",onClick:ce}),r.a.createElement(V,{label:"Load",onClick:a}),r.a.createElement(P,{label:"Dark mode",onChange:function(e){console.log(e),re(!ne)},defaultValue:ne}));return!p&&r.a.createElement("div",{className:ne?"dark":"light"},"home"===v?r.a.createElement(U,{team:j,onTeamChange:C,date:I,onDateChange:L,addInning:oe,menu:le}):r.a.createElement(U,{team:w,onTeamChange:S,date:I,onDateChange:L,addInning:oe,menu:le}),"home"===v?r.a.createElement(z,{innings:q,stats:M,onChange:G}):r.a.createElement(z,{innings:q,stats:F,onChange:H}),r.a.createElement(R,{onSelect:E,labels:["home","away"],selectedLabel:v}),_.show&&r.a.createElement(x,{onSubmit:function(){return ee({show:!1})},text:_.text,title:_.title,submitLabel:"OK",error:_.error}))},X=(a(47),function(e){var t=e.onSelect,a=Object(n.useState)(!0),c=Object(l.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)(),d=Object(l.a)(m,2),f=d[0],p=d[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),h=g[0],v=g[1],E=Object(n.useState)(),y=Object(l.a)(E,2),O=y[0],j=y[1],C=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.map(function(e){var t,a=e.id,n=e.metadata,r=n.date;return{id:a,data:[n.homeTeam,n.awayTeam,(t=r,new Date(t).toLocaleDateString(void 0,{month:"long",year:"numeric",day:"numeric"}))]}}),p(n),s(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){C()},[]);var N=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j(t),v(!0);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(O),{method:"delete"});case 2:C(),v(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"game-selector"},r.a.createElement("div",{className:"new-game"},r.a.createElement("a",{href:"#",onClick:function(){t&&t(null)}},"New game")," or load existing game:"),r.a.createElement(A,{headers:["Home","Away","Date"],loading:o,rows:f,onSelect:t,onDelete:N}),h&&r.a.createElement(x,{onCancel:function(){return v(!1)},onSubmit:k,title:"Delete Game",text:"Do you really want to delete the game?",submitLabel:"Yes",cancelLabel:"No"}))}),$=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),s=Object(l.a)(o,2),i=s[0],u=s[1];return r.a.createElement("div",null,i?r.a.createElement(X,{onSelect:function(e){c(e),u(!1)}}):r.a.createElement(W,{gameId:a,onReload:function(){return u(!0)}}))};a(48),a(49);o.a.render(r.a.createElement($,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.cb0e0ead.chunk.js.map