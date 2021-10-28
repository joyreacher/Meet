/*! For license information please see main.dc12b33b.chunk.js.LICENSE.txt */
(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(29),i=n.n(r),s=(n(37),n(7)),c=n.n(s),l=n(9),u=n(15),d=n(4),h=n(8),m=n(6),p=n(5),f=(n(39),n(32)),v=n(30),g=n(19),b=n(0);function w(e){var t=e.event,n=Object(o.useState)(!1),a=Object(f.a)(n,2),r=a[0],i=a[1];return!!t&&Object(b.jsxs)("div",{className:"Event","data-test":"event",children:[Object(b.jsx)("p",{children:new Date(t.start.dateTime).toDateString()}),Object(b.jsx)("p",{children:t.location}),Object(b.jsxs)("div",{className:"event-title-container",children:[Object(b.jsx)("h1",{"data-test":"event-title",className:"event-title",children:t.summary}),Object(b.jsx)(v.a,{className:"event-icon event-icon-".concat(r?"show":"hide"),"data-test":"event-icon",icon:r?g.b:g.a,onClick:function(){i(!r)}})]}),Object(b.jsxs)("div",{"data-test":"event-details-".concat(r?"show":"hide"),className:"event-details-".concat(r?"show":"hide"),children:[Object(b.jsx)("p",{className:"event-description","data-test":"event-description",children:t.description}),Object(b.jsx)("a",{href:t.htmlLink,children:Object(b.jsx)("button",{className:"event-link",children:"See this event"})})]})]},t.id)}var j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(w,{event:e})},e.id)}))})}}]),n}(o.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.color=null,o}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{className:"Alert__".concat(this.props.modifier),style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).color="orange",o}return n}(y),T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).color="red",o}return n}(y),x=y,S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n,o=t.target.value;return parseInt(t.target.value)?e.setState({query:o,error:{input:"Only Letters Please"}}):""===o?e.setState({query:"",error:{input:""},infoText:"",suggestions:[]}):"object"===typeof e.props.locations&&0===(n=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(o.toUpperCase())>-1}))).length?e.setState({query:o,infoText:"We can not find the city you are looking for. Please try another city.",suggestions:[]}):void e.setState({infoText:"",query:o,suggestions:n})},e.handleItemClicked=function(t){return e.setState({query:t,showSuggestions:!1,infoText:"",error:{input:""}}),e.props.updateEvents(t)},e.state={query:"Enter a city name",suggestions:[],showSuggestions:!1,locations:[],infoText:"",error:{input:""}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({locations:this.props.locations})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)("label",{className:"CitySearch__label",children:"Search for a city "}),Object(b.jsx)(k,{modifier:"citysearch-info",text:this.state.infoText}),Object(b.jsx)(T,{modifier:"citysearch",text:this.state.error.input}),Object(b.jsx)("input",{className:"city",type:"text",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({query:"",showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{visibility:"hidden"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("button",{className:"CitySearch__btn",onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all citites"})},"all")]})]})}}]),n}(o.Component),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={query:"",events:[],locations:[],error:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({events:this.props.events,locations:this.props.locations,query:this.props.number})}},{key:"handleChange",value:function(e){var t=this;this.setState({query:e});var n=setTimeout((function(){t.props.updateEvents(t.props.locations,t.state.query)}),950);return function(){clearTimeout(n),t.setState({query:""})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.events,o=t.number,a=t.errAlert;return Object(b.jsxs)("div",{className:"NumberOfEvents",children:[Object(b.jsxs)("div",{className:"NumberOfEvents__input-container",children:[Object(b.jsx)("label",{className:"NumberOfEvents__label","data-test":"number",children:"Number of events"}),Object(b.jsx)(T,{modifier:"numberofevents",text:a}),Object(b.jsx)("input",{name:"events","data-test":"text-box",type:"text",placeholder:o||this.state.query,value:this.state.query?this.state.query:"",onFocus:function(){return e.setState({query:" "})},onChange:function(t){e.handleChange(t.target.value)}})]}),Object(b.jsx)("div",{className:"display-event-number",children:Object(b.jsxs)("p",{"data-test":"number-of-events",children:["Events displayed: ",o||n.length]})})]})}}]),n}(o.Component);var Z=function(){return Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("p",{children:["M",Object(b.jsx)("span",{className:"navbar__logo-highlight",children:"eet"})]})})},M=n(20),E=n.n(M),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000a",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"New York, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000l",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"New York, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000q",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Denver, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000b",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"8qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Manchester, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(12),J=n.n(N),A=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access-token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,E.a.get("https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&D(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),J.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,A();case 10:if(!(n=e.sent)){e.next=20;break}return B(),o="https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,E.a.get(o);case 16:return(a=e.sent).data&&(r=L(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),J.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e;window.history.pushState&&window.location.pathname?(e=window.location.protocol+"//"+window.location.host+window.location.pathname,window.history.pushState("","",e)):(e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e))},D=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(u.a)(new Set(t))};var _=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__container",children:[Object(b.jsx)("a",{className:"footer__link",href:"https://github.com/joyreacher/Meet",children:"Github"}),Object(b.jsx)("a",{className:"footer__link",href:"https://www.linkedin.com/in/brianthomas--web-developer/",children:"LinkedIn"})]})})};var I=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",children:[Object(b.jsx)("h1",{children:"Welcome to the Meet app"}),Object(b.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{class:"google-btn",children:[Object(b.jsx)("div",{class:"google-icon-wrapper",children:Object(b.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){console.log(e),e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})}),Object(b.jsx)("a",{href:"https://joyreacher.github.io/meet/privacy-policy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):"condition is null"},R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){e.setState({numberOfEvents:n,error:{location:""}}),q().then((function(o){var a="all"!==t&&t?o.filter((function(e){return e.location===t})):o;if("string"===typeof t)return"all"===t?e.setState({events:a,locationCurrent:"",numberOfEvents:""}):e.setState({events:a,locationCurrent:t,numberOfEvents:"",eventsToShow:[]});if("object"===typeof t){e.setState({error:{location:""}});for(var r=0;r<n;r++){if(!e.state.locationCurrent||"all"===t){e.state.eventsToShow.push(o[r]);var i=Object(u.a)(new Set(e.state.eventsToShow));e.setState({eventsToShow:i})}if(e.state.locationCurrent){var s=o.filter((function(t){if(t.location===e.state.locationCurrent)return t.location}));void 0===s[r]&&e.setState({error:{location:"All events for "+e.state.locationCurrent+" are here"}}),e.state.eventsToShow.push(s[r])}if(void 0===o[r])return e.setState({eventsToShow:[],numberOfEvents:null,error:{location:"Exceeded number of events to show"}}),!1}var c=e.state.eventsToShow.filter((function(e,t){if(void 0!==e)return e}));return e.setState({events:c,eventsToShow:[]})}}))},e.state={events:[],locations:[],locationCurrent:"",numberOfEvents:"",eventsToShow:[],showWelcomeScreen:void 0,onlineErr:"",error:{location:""}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,!C(t);case 4:if(!e.sent){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,o=new URLSearchParams(window.location.search),a=o.get("code"),this.setState({showWelcomeScreen:!(!a&&!n)}),console.log(this.state.showWelcomeScreen),console.log(a,n),(a||n)&&this.mounted&&(console.log(a,n),console.log(this.state.showWelcomeScreen),document.title="Meet",window.scrollTo(0,0),navigator.onLine||this.setState({onlineErr:"Your offline"}),q().then((function(e){r.mounted&&(r.setState({events:e,locations:L(e)}),r.state.numberOfEvents||r.updateEvents(null,32))})));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(Z,{}),Object(b.jsxs)("div",{className:"main__container",children:[Object(b.jsx)("div",{className:"input__container",children:Object(b.jsxs)("div",{className:"input__container-inner",children:[Object(b.jsx)(x,{text:this.state.onlineErr}),Object(b.jsx)(S,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(b.jsx)(O,{events:this.state.events,errAlert:this.state.error.location,number:this.state.numberOfEvents,locations:this.state.locations,updateEvents:this.updateEvents})]})}),Object(b.jsx)(j,{events:this.state.events})]}),Object(b.jsx)(_,{}),Object(b.jsx)(I,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){return A()}})]})}}]),n}(o.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};n(31).config("8ae63409090f424c9037e091a559fc7e").install(),i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Meet","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),G()}},[[63,1,2]]]);
//# sourceMappingURL=main.dc12b33b.chunk.js.map