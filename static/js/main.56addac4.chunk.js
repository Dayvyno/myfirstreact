(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{13:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(3),a=n(5),o=n(4),i=n(1),s=n.n(i),h=n(7),l=n.n(h),j=(n(13),n(0)),u=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.category;return Object(j.jsx)("tr",{children:Object(j.jsx)("th",{colSpan:"2",children:e})})}}]),n}(s.a.Component),p=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.product,t=e.stocked?e.name:Object(j.jsx)("span",{children:e.name});return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:e.price})]})}}]),n}(s.a.Component),d=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e,t=this.props.filterText,n=this.props.inStockChange,c=[];return e=null,this.props.products.forEach((function(r){-1!==r.name.indexOf(t)&&(n&&!r.stocked||(r.category!==e&&c.push(Object(j.jsx)(u,{category:r.category},r.category)),c.push(Object(j.jsx)(p,{product:r})),e=r.category))})),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Price"})]})}),Object(j.jsxs)("tbody",{children:[c," "]})]})}}]),n}(s.a.Component),b=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleFilterChange=function(t){return e.props.onFilterTextChange(t.target.value)},e.handleInStockChange=function(t){return e.props.onHandleInStockChange(t.target.checked)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:e,placeholder:"Search....",name:"searchbar",onChange:this.handleFilterChange}),Object(j.jsxs)("p",{children:[Object(j.jsx)("input",{type:"checkbox",checked:t,onChange:this.handleInStockChange})," Only show products in stock"]})]})}}]),n}(s.a.Component),O=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleFilterText=function(e){return r.setState({filterText:e})},r.handleInStockChanging=function(e){return r.setState({inStockChange:e})},r.state={filterText:"",inStockChange:!1},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{filterText:this.state.filterText,onFilterTextChange:this.handleFilterText,inStockChange:this.state.inStockChange,onHandleInStockChange:this.handleInStockChanging}),Object(j.jsx)(d,{products:g,filterText:this.state.filterText,inStockChange:this.state.inStockChange})]})}}]),n}(s.a.Component),g=[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}];l.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.56addac4.chunk.js.map