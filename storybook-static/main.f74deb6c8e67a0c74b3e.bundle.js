(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{284:function(module,exports,__webpack_require__){__webpack_require__(285),__webpack_require__(431),__webpack_require__(432),module.exports=__webpack_require__(594)},349:function(module,exports){},594:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(623)],module)}.call(this,__webpack_require__(595)(module))},623:function(module,exports,__webpack_require__){var map={"./stories/FadeInOut.stories.js":630,"./stories/SlideInOut.stories.js":629,"./stories/VerticalSlide.stories.js":628};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=623},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),taggedTemplateLiteral=(__webpack_require__(19),__webpack_require__(10)),Transition=__webpack_require__(633),index_esm=__webpack_require__(11);function _templateObject7(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms ease-in-out 0ms 1 normal both\n        ",";\n      overflow: hidden;\n    "]);return _templateObject7=function(){return data},data}function _templateObject6(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms ease-in-out 0ms 1 normal both\n        ",";\n      overflow: hidden;\n    "]);return _templateObject6=function(){return data},data}function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n  ",";\n\n  ",";\n"]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {opacity: 1;}\n  100% {opacity: 0;}\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {max-height: ","px;}\n  100% {max-height: 0px;}\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {max-height: 0px;}\n  100% {max-height: ","px;}\n"]);return _templateObject=function(){return data},data}var fadeIn=Object(index_esm.c)(_templateObject3()),fadeOut=Object(index_esm.c)(_templateObject4()),VerticalSlideContent=Object(index_esm.b)("div")(_templateObject5(),(function(props){return"entering"===props.transition&&Object(index_esm.a)(_templateObject6(),(maxHeight=props.maxHeight,Object(index_esm.c)(_templateObject(),maxHeight)),props.duration,props.alsoFade&&", ".concat(fadeIn," ").concat(props.duration,"ms ease-in-out 0ms 1 normal both"));var maxHeight}),(function(props){return"exiting"===props.transition&&Object(index_esm.a)(_templateObject7(),(maxHeight=props.maxHeight,Object(index_esm.c)(_templateObject2(),maxHeight)),props.duration,props.alsoFade&&", ".concat(fadeOut," ").concat(props.duration,"ms ease-in-out 0ms 1 normal both"));var maxHeight})),VerticalSlide=function(_ref){var inProp=_ref.in,maxHeight=_ref.maxHeight,duration=_ref.duration,className=_ref.className,alsoFade=_ref.alsoFade,children=_ref.children;return react.createElement(Transition.a,{in:inProp,timeout:duration,mountOnEnter:!0,unmountOnExit:!0},(function(transition){return react.createElement(VerticalSlideContent,{className:className,maxHeight:maxHeight,duration:duration,transition:transition,alsoFade:alsoFade},children)}))};VerticalSlide.displayName="VerticalSlide",VerticalSlide.__docgenInfo={description:"",methods:[],displayName:"VerticalSlide",props:{in:{required:!0,tsType:{name:"boolean"},description:""},maxHeight:{required:!0,tsType:{name:"number"},description:""},duration:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},alsoFade:{required:!1,tsType:{name:"boolean"},description:""}}};var src_VerticalSlide=VerticalSlide;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/VerticalSlide.tsx"]={name:"VerticalSlide",docgenInfo:VerticalSlide.__docgenInfo,path:"src/VerticalSlide.tsx"});var TestContent=__webpack_require__(71),dist=__webpack_require__(13);__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(70).withSource;var addSourceDecorator=__webpack_require__(70).addSource,VerticalSlide_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport VerticalSlide from '../VerticalSlide';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number} from '@storybook/addon-knobs';\n\nexport default {\n  component: VerticalSlide,\n  title: 'VerticalSlide',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <VerticalSlide\n    in={boolean('in')}\n    duration={number('duration', 300)}\n    maxHeight={number('maxHeight', 200)}\n    alsoFade={boolean('alsoFade')}\n  >\n    <TestContent />\n  </VerticalSlide>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",locationsMap:{"verticalslide--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:21},startBody:{col:23,line:12},endBody:{col:1,line:21}}}}},component:src_VerticalSlide,title:"VerticalSlide"},react_default.a.createElement(TestContent.a,null)),Default=addSourceDecorator((function(){return react_default.a.createElement(src_VerticalSlide,{in:Object(dist.boolean)("in"),duration:Object(dist.number)("duration",300),maxHeight:Object(dist.number)("maxHeight",200),alsoFade:Object(dist.boolean)("alsoFade")},VerticalSlide_stories_ref)}),{__STORY__:"import React from 'react';\nimport VerticalSlide from '../VerticalSlide';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number} from '@storybook/addon-knobs';\n\nexport default {\n  component: VerticalSlide,\n  title: 'VerticalSlide',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <VerticalSlide\n    in={boolean('in')}\n    duration={number('duration', 300)}\n    maxHeight={number('maxHeight', 200)}\n    alsoFade={boolean('alsoFade')}\n  >\n    <TestContent />\n  </VerticalSlide>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",__ADDS_MAP__:{"verticalslide--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:21},startBody:{col:23,line:12},endBody:{col:1,line:21}}},__MAIN_FILE_LOCATION__:"/VerticalSlide.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/norberg/quiq/public-repos/transitions/src/stories",__IDS_TO_FRAMEWORKS__:{}});Default.story={decorators:[dist.withKnobs]}},629:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(10),Transition=__webpack_require__(633),index_esm=__webpack_require__(11);function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms 1;\n      overflow: hidden;\n    "]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms 1;\n      overflow: hidden;\n    "]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  animation-fill-mode: forwards;\n\n  ",";\n\n  ",";\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  from {\n    max-height: ","px;\n    transform: translateX(0);\n  }\n  to {\n    max-height: 0px;\n    transform: translateX(",");\n  }\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  from {\n    max-height: 0px;\n    transform: translateX(",");\n  }\n  to {\n    max-height: ","px;\n    transform: translateX(0);\n  }\n"]);return _templateObject=function(){return data},data}var SlideContent=Object(index_esm.b)("div")(_templateObject3(),(function(props){return"entering"===props.transition&&Object(index_esm.a)(_templateObject4(),(maxHeight=props.maxHeight,inFrom=props.inFrom,Object(index_esm.c)(_templateObject(),"left"===inFrom?"-100%":"100%",maxHeight)),props.duration);var maxHeight,inFrom}),(function(props){return"exiting"===props.transition&&Object(index_esm.a)(_templateObject5(),(maxHeight=props.maxHeight,outToward=props.outToward,Object(index_esm.c)(_templateObject2(),maxHeight,"left"===outToward?"-100%":"100%")),props.duration);var maxHeight,outToward})),SlideInOut=function(_ref){var inProp=_ref.in,maxHeight=_ref.maxHeight,duration=_ref.duration,children=_ref.children,_ref$inFrom=_ref.inFrom,inFrom=void 0===_ref$inFrom?"left":_ref$inFrom,_ref$outToward=_ref.outToward,outToward=void 0===_ref$outToward?"right":_ref$outToward;return react.createElement(Transition.a,{in:inProp,timeout:duration,mountOnEnter:!0,unmountOnExit:!0},(function(transition){return react.createElement(SlideContent,{maxHeight:maxHeight,duration:duration,transition:transition,inFrom:inFrom,outToward:outToward},children)}))};SlideInOut.displayName="SlideInOut",SlideInOut.__docgenInfo={description:"",methods:[],displayName:"SlideInOut",props:{inFrom:{defaultValue:{value:"'left'",computed:!1},required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},outToward:{defaultValue:{value:"'right'",computed:!1},required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},in:{required:!1,tsType:{name:"boolean"},description:""},maxHeight:{required:!0,tsType:{name:"number"},description:""},duration:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var src_SlideInOut=SlideInOut;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SlideInOut.tsx"]={name:"SlideInOut",docgenInfo:SlideInOut.__docgenInfo,path:"src/SlideInOut.tsx"});var TestContent=__webpack_require__(71),dist=__webpack_require__(13);__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(70).withSource;var addSourceDecorator=__webpack_require__(70).addSource,SlideInOut_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport SlideInOut from '../SlideInOut';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number, select} from '@storybook/addon-knobs';\n\nexport default {\n  component: SlideInOut,\n  title: 'SlideInOut',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <SlideInOut\n    in={boolean('in')}\n    duration={number('duration', 300)}\n    maxHeight={number('maxHeight', 200)}\n    inFrom={select('inFrom', ['left', 'right'], 'left')}\n    outToward={select('outToward', ['left', 'right'], 'right')}\n  >\n    <TestContent />\n  </SlideInOut>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",locationsMap:{"slideinout--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:22},startBody:{col:23,line:12},endBody:{col:1,line:22}}}}},component:src_SlideInOut,title:"SlideInOut"},react_default.a.createElement(TestContent.a,null)),Default=addSourceDecorator((function(){return react_default.a.createElement(src_SlideInOut,{in:Object(dist.boolean)("in"),duration:Object(dist.number)("duration",300),maxHeight:Object(dist.number)("maxHeight",200),inFrom:Object(dist.select)("inFrom",["left","right"],"left"),outToward:Object(dist.select)("outToward",["left","right"],"right")},SlideInOut_stories_ref)}),{__STORY__:"import React from 'react';\nimport SlideInOut from '../SlideInOut';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number, select} from '@storybook/addon-knobs';\n\nexport default {\n  component: SlideInOut,\n  title: 'SlideInOut',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <SlideInOut\n    in={boolean('in')}\n    duration={number('duration', 300)}\n    maxHeight={number('maxHeight', 200)}\n    inFrom={select('inFrom', ['left', 'right'], 'left')}\n    outToward={select('outToward', ['left', 'right'], 'right')}\n  >\n    <TestContent />\n  </SlideInOut>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",__ADDS_MAP__:{"slideinout--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:22},startBody:{col:23,line:12},endBody:{col:1,line:22}}},__MAIN_FILE_LOCATION__:"/SlideInOut.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/norberg/quiq/public-repos/transitions/src/stories",__IDS_TO_FRAMEWORKS__:{}});Default.story={decorators:[dist.withKnobs]}},630:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(10),Transition=__webpack_require__(633),index_esm=__webpack_require__(11);function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms ease-in-out 0ms 1 normal both;\n      overflow: hidden;\n    "]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n      animation: "," ","ms ease-in-out 0ms 1 normal both;\n      overflow: hidden;\n    "]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  ",";\n\n  ",";\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {opacity: 1;}\n  100% {opacity: 0;}\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"]);return _templateObject=function(){return data},data}var fadeIn=Object(index_esm.c)(_templateObject()),fadeOut=Object(index_esm.c)(_templateObject2()),FadeContent=Object(index_esm.b)("div")(_templateObject3(),(function(props){return"entering"===props.transition&&Object(index_esm.a)(_templateObject4(),fadeIn,props.duration)}),(function(props){return"exiting"===props.transition&&Object(index_esm.a)(_templateObject5(),fadeOut,props.duration)})),FadeInOut=function(_ref){var inProp=_ref.in,duration=_ref.duration,className=_ref.className,children=_ref.children;return react.createElement(Transition.a,{in:inProp,timeout:duration,mountOnEnter:!0,unmountOnExit:!0},(function(transition){return react.createElement(FadeContent,{className:className,duration:duration,transition:transition},children)}))};FadeInOut.displayName="FadeInOut",FadeInOut.__docgenInfo={description:"",methods:[],displayName:"FadeInOut",props:{in:{required:!0,tsType:{name:"boolean"},description:""},duration:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var src_FadeInOut=FadeInOut;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/FadeInOut.tsx"]={name:"FadeInOut",docgenInfo:FadeInOut.__docgenInfo,path:"src/FadeInOut.tsx"});var TestContent=__webpack_require__(71),dist=__webpack_require__(13);__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(70).withSource;var addSourceDecorator=__webpack_require__(70).addSource,FadeInOut_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:"import React, {useState} from 'react';\nimport FadeInOut from '../FadeInOut';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number} from '@storybook/addon-knobs';\n\nexport default {\n  component: FadeInOut,\n  title: 'FadeInOut',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <FadeInOut in={boolean('in')} duration={number('duration', 300)}>\n    <TestContent />\n  </FadeInOut>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",locationsMap:{"fadeinout--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:16},startBody:{col:23,line:12},endBody:{col:1,line:16}}}}},component:src_FadeInOut,title:"FadeInOut"},react_default.a.createElement(TestContent.a,null)),Default=addSourceDecorator((function(){return react_default.a.createElement(src_FadeInOut,{in:Object(dist.boolean)("in"),duration:Object(dist.number)("duration",300)},FadeInOut_stories_ref)}),{__STORY__:"import React, {useState} from 'react';\nimport FadeInOut from '../FadeInOut';\nimport TestContent from './TestContent';\nimport {withKnobs, boolean, number} from '@storybook/addon-knobs';\n\nexport default {\n  component: FadeInOut,\n  title: 'FadeInOut',\n  // excludeStories: /_.*$/\n};\n\nexport const Default = () => (\n  <FadeInOut in={boolean('in')} duration={number('duration', 300)}>\n    <TestContent />\n  </FadeInOut>\n);\n\nDefault.story = {\n  decorators: [withKnobs],\n};\n",__ADDS_MAP__:{"fadeinout--default":{startLoc:{col:23,line:12},endLoc:{col:1,line:16},startBody:{col:23,line:12},endBody:{col:1,line:16}}},__MAIN_FILE_LOCATION__:"/FadeInOut.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/norberg/quiq/public-repos/transitions/src/stories",__IDS_TO_FRAMEWORKS__:{}});Default.story={decorators:[dist.withKnobs]}},71:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos ut possimus et recusandae. Eaque corrupti saepe laborum reprehenderit nobis minima atque voluptatibus totam temporibus iure. Quos, rerum? Quas, natus!"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos ut possimus et recusandae. Eaque corrupti saepe laborum reprehenderit nobis minima atque voluptatibus totam temporibus iure. Quos, rerum? Quas, natus!"),TestContent=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{height:200,background:"#f2f2f3",padding:32,boxSizing:"border-box"}},_ref,_ref2)};TestContent.displayName="TestContent",TestContent.__docgenInfo={description:"",methods:[],displayName:"TestContent"},__webpack_exports__.a=TestContent,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/TestContent.js"]={name:"TestContent",docgenInfo:TestContent.__docgenInfo,path:"src/stories/TestContent.js"})}},[[284,1,2]]]);
//# sourceMappingURL=main.f74deb6c8e67a0c74b3e.bundle.js.map