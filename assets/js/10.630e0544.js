(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{393:function(e,t,n){e.exports=n.p+"assets/img/component.e7b7d443.jpg"},426:function(e,t,n){"use strict";n.r(t);var a=n(2),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("研究子组件patch主流程调试了五遍以上的源码了，终于摸到了核心流程")]),e._v(" "),t("h1",{attrs:{id:"流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[e._v("#")]),e._v(" 流程图")]),e._v(" "),t("p",[t("img",{attrs:{src:n(393),alt:"avatar"}})]),e._v(" "),t("p",[e._v("在递归遍历的最后只有普通节点没有组件会走到createChildren方法下方的部分")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    createChildren(vnode, children, insertedVnodeQueue)\n    if (isDef(data)) {\n        invokeCreateHooks(vnode, insertedVnodeQueue)\n    }\n    insert(parentElm, vnode.elm, refElm)\n")])])]),t("p",[e._v("在流程图上每次会根据tag创建一个空的dom节点，再去遍历子节点，将子节点全都插入到该空的dom节点中。一开始我一直在想这样的话不就一直有一个没用的dom节点充当容器吗？答案在invokeCreateHooks这个方法中，isdef(data)判断的是vnode是否有属性，如果有，则调用invokeCreateHooks方法将vnode.elm的空dom节点加上属性！之后再进行递归插入,所以insert(parentElm)中的parentElm一直都是空的dom节点，直到递归插入到最初，parentElm就会是body。程序走到这一步将dom节点插入到body中页面就会渲染出来了。")]),e._v(" "),t("p",[e._v("子组件是递归插入的，所以插入顺序是先子后父。")])])}),[],!1,null,null,null);t.default=o.exports}}]);