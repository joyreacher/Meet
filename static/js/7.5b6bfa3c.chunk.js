(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[7],{370:function(e,t,s){"use strict";s.r(t);var n=s(34),a=s(52),r=s(35),i=s(36),u=s(0),o=s(121),c=s(7),l=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={query:"",events:[],locations:[],error:""},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.setState({events:this.props.events,locations:this.props.locations,query:this.props.number})}},{key:"handleChange",value:function(e){var t=this;if(this.setState({query:e}),this.state.query){var s=setTimeout((function(){t.setState({query:e}),t.props.updateEvents(t.props.locations,t.state.query)}),750);return function(){clearTimeout(s)}}this.setState({query:""})}},{key:"render",value:function(){var e=this,t=this.props,s=t.events,n=t.number,a=t.errAlert;return Object(c.jsxs)("div",{className:"NumberOfEvents",children:[Object(c.jsxs)("div",{className:"NumberOfEvents__input-container",children:[Object(c.jsx)("label",{htmlFor:"events",className:"NumberOfEvents__label","data-test":"number",children:"Number of events"}),Object(c.jsx)(o.a,{modifier:"numberofevents",text:a}),Object(c.jsx)("input",{id:"events",name:"events","data-test":"text-box",type:"text",placeholder:n||this.state.query,value:this.state.query?this.state.query:"",onFocus:function(){return e.setState({query:" "})},onChange:function(t){e.handleChange(t.target.value)}})]}),Object(c.jsx)("div",{className:"display-event-number",children:Object(c.jsxs)("p",{"data-test":"number-of-events",children:["Events displayed: ",a?s.length:n]})})]})}}]),s}(u.Component);t.default=l}}]);
//# sourceMappingURL=7.5b6bfa3c.chunk.js.map