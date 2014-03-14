/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'orange',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','393px','500px','auto', 'auto'],
                borderRadius: ["0px 0px", "0px 0px", "0px 0px", "0px 0px"],
                fill: ["rgba(255,255,255,1.00)",[179,[['rgba(184,62,38,1.00)',0],['rgba(184,62,38,1.00)',36],['rgba(128,43,25,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'red',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','900px','600px','auto', 'auto'],
                borderRadius: ["0px 0px", "0px 0px", "0px 0px", "0px 0px"],
                fill: ["rgba(255,255,255,1.00)",[270,[['rgba(217,23,10,1.00)',0],['rgba(158,14,6,1.00)',100]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Adobe_CC_text',
                display: 'none',
                type: 'text',
                rect: ['274px', '53px','auto','auto','auto', 'auto'],
                text: "Adobe Creative Cloud",
                align: "center",
                font: ['source-sans-pro, sans-serif', 39, "rgba(255,255,255,1.00)", "500", "none", ""]
            },
            {
                id: 'timeline',
                display: 'none',
                type: 'rect',
                rect: ['430px', '514px','auto','auto','auto', 'auto']
            },
            {
                id: 'apollinaire',
                display: 'none',
                type: 'image',
                rect: ['-3px', '-16px','912px','840px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"apollinaire.jpg",'0px','0px']
            },
            {
                id: 'video_holder',
                type: 'rect',
                rect: ['170px', '142px','auto','auto','auto', 'auto']
            },
            {
                id: 'marker3',
                display: 'none',
                type: 'rect',
                rect: ['440', '519','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'marker3',
                symbolName: 'marker',
                autoPlay: {

                }
            },
            {
                id: 'video_holder',
                symbolName: 'video_holder',
                autoPlay: {

                }
            },
            {
                id: 'timeline',
                symbolName: 'timeline',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_timeline}": [
                ["style", "top", '514px'],
                ["style", "opacity", '0'],
                ["style", "left", '430px'],
                ["style", "display", 'none']
            ],
            "${_red}": [
                ["style", "top", '-605px'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["gradient", "background-image", [270,[['rgba(217,23,10,1.00)',0],['rgba(158,14,6,1.00)',100]]]],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_orange}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [179,[['rgba(184,62,38,1.00)',0],['rgba(184,62,38,1.00)',36],['rgba(128,43,25,1.00)',100]]]],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '393px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '600px'],
                ["style", "display", 'block'],
                ["style", "left", '-400px']
            ],
            "${_apollinaire}": [
                ["style", "top", '-16px'],
                ["style", "display", 'none'],
                ["style", "height", '840px'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px'],
                ["style", "width", '912px']
            ],
            "${_Text2Copy5}": [
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(126,126,126,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '262px'],
                ["style", "font-size", '26px']
            ],
            "${_marker3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(185,185,185,1)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "max-width", 'none'],
                ["style", "width", '900px']
            ],
            "${_Adobe_CC_text}": [
                ["style", "top", '53px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '500'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '274px'],
                ["style", "font-size", '39px']
            ],
            "${_video_holder}": [
                ["style", "left", '170px'],
                ["style", "top", '142px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 79500,
            autoPlay: false,
            timeline: [
                { id: "eid140", tween: [ "style", "${_apollinaire}", "opacity", '0.51639289529915', { fromValue: '0'}], position: 54630, duration: 370 },
                { id: "eid142", tween: [ "style", "${_apollinaire}", "opacity", '0', { fromValue: '0.5163930058479309'}], position: 57557, duration: 1443 },
                { id: "eid105", tween: [ "style", "${_orange}", "display", 'block', { fromValue: 'block'}], position: 2376, duration: 0, easing: "easeOutCubic" },
                { id: "eid103", tween: [ "style", "${_orange}", "display", 'none', { fromValue: 'block'}], position: 4852, duration: 0, easing: "easeOutCubic" },
                { id: "eid107", tween: [ "style", "${_red}", "top", '0px', { fromValue: '-605px'}], position: 6000, duration: 650, easing: "easeOutBounce" },
                { id: "eid111", tween: [ "style", "${_red}", "top", '608px', { fromValue: '0px'}], position: 8750, duration: 549, easing: "easeInQuart" },
                { id: "eid101", tween: [ "style", "${_orange}", "left", '0px', { fromValue: '-400px'}], position: 2376, duration: 224, easing: "easeOutCubic" },
                { id: "eid102", tween: [ "style", "${_orange}", "left", '-402px', { fromValue: '0px'}], position: 4621, duration: 231, easing: "easeOutCubic" },
                { id: "eid104", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(185,185,185,1)'}], position: 110, duration: 1255 },
                { id: "eid143", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 59000, duration: 1000 },
                { id: "eid144", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 69000, duration: 1000 },
                { id: "eid145", tween: [ "color", "${_Stage}", "background-color", 'rgba(185,185,185,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 77750, duration: 1750 },
                { id: "eid121", tween: [ "style", "${_timeline}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeInQuart" },
                { id: "eid133", tween: [ "style", "${_timeline}", "display", 'none', { fromValue: 'block'}], position: 54500, duration: 0, easing: "easeOutQuad" },
                { id: "eid135", tween: [ "style", "${_apollinaire}", "left", '0px', { fromValue: '-3px'}], position: 54630, duration: 4370 },
                { id: "eid108", tween: [ "style", "${_red}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutBounce" },
                { id: "eid112", tween: [ "style", "${_red}", "display", 'none', { fromValue: 'block'}], position: 9299, duration: 0, easing: "easeInQuart" },
                { id: "eid164", tween: [ "style", "${_marker3}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInQuad" },
                { id: "eid166", tween: [ "style", "${_marker3}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 500, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_timeline}", "left", '-286px', { fromValue: '430px'}], position: 10500, duration: 43500 },
                { id: "eid165", tween: [ "style", "${_marker3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid167", tween: [ "style", "${_marker3}", "display", 'none', { fromValue: 'block'}], position: 54500, duration: 0, easing: "easeInQuad" },
                { id: "eid136", tween: [ "style", "${_apollinaire}", "top", '-217px', { fromValue: '-16px'}], position: 54630, duration: 4370 },
                { id: "eid118", tween: [ "style", "${_timeline}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInQuart" },
                { id: "eid131", tween: [ "style", "${_timeline}", "opacity", '0', { fromValue: '1'}], position: 54000, duration: 500, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "style", "${_Adobe_CC_text}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInQuart" },
                { id: "eid114", tween: [ "style", "${_Adobe_CC_text}", "display", 'none', { fromValue: 'block'}], position: 9299, duration: 0, easing: "easeInQuart" },
                { id: "eid137", tween: [ "style", "${_apollinaire}", "display", 'block', { fromValue: 'none'}], position: 54630, duration: 0 },
                { id: "eid138", tween: [ "style", "${_apollinaire}", "display", 'none', { fromValue: 'block'}], position: 59000, duration: 0 }            ]
        }
    }
},
"video_holder": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '560px', '315px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'video_holder',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(152,152,152,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_video_holder}": [
                ["style", "top", '0px'],
                ["style", "height", '315px'],
                ["color", "background-color", 'rgba(152,152,152,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '560px']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '560px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"timeline": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['3px', '0px', '750px', '32px', 'auto', 'auto'],
                    borderRadius: ['16px 16px', '16px 16px', '16px 16px', '16px 16px'],
                    id: 'RoundRect3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(241,241,241,1.00)', 0], ['rgba(211,211,211,1.00)', 100]]]]
                },
                {
                    rect: ['9px', '5px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(202,202,202,1.00)', 0], ['rgba(241,241,241,1.00)', 100]]]]
                },
                {
                    rect: ['725px', '5px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(202,202,202,1.00)', 0], ['rgba(241,241,241,1.00)', 100]]]]
                },
                {
                    rect: ['188px', '5px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(202,202,202,1.00)', 0], ['rgba(241,241,241,1.00)', 100]]]]
                },
                {
                    rect: ['367px', '5px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(202,202,202,1.00)', 0], ['rgba(241,241,241,1.00)', 100]]]]
                },
                {
                    rect: ['546px', '5px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(202,202,202,1.00)', 0], ['rgba(241,241,241,1.00)', 100]]]]
                },
                {
                    type: 'text',
                    rect: ['0px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'Start',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(53,53,53,1.00)', '600', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['189px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: '1h',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(53,53,53,1.00)', '600', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['367px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy4',
                    text: '2h',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(53,53,53,1.00)', '600', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['547px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy2',
                    text: '3h',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(53,53,53,1.00)', '600', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['714px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2Copy3',
                    text: 'Done',
                    align: 'center',
                    font: ['source-sans-pro, sans-serif', 20, 'rgba(53,53,53,1.00)', '600', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect3}": [
                ["style", "border-top-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [270,[['rgba(241,241,241,1.00)',0],['rgba(211,211,211,1.00)',100]]]],
                ["style", "left", '3px'],
                ["style", "width", '750px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '32px'],
                ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text2Copy}": [
                ["style", "top", '39px'],
                ["color", "color", 'rgba(53,53,53,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '189px'],
                ["style", "font-size", '20px']
            ],
            "${_Text2}": [
                ["style", "top", '39px'],
                ["color", "color", 'rgba(53,53,53,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_EllipseCopy3}": [
                ["style", "top", '5px'],
                ["style", "height", '23px'],
                ["gradient", "background-image", [270,[['rgba(202,202,202,1.00)',0],['rgba(241,241,241,1.00)',100]]]],
                ["style", "left", '546px'],
                ["style", "width", '23px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '39px'],
                ["color", "color", 'rgba(53,53,53,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '547px'],
                ["style", "font-size", '20px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '39px'],
                ["color", "color", 'rgba(53,53,53,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '714px'],
                ["style", "font-size", '20px']
            ],
            "${_Ellipse}": [
                ["style", "top", '5px'],
                ["style", "height", '23px'],
                ["gradient", "background-image", [270,[['rgba(202,202,202,1.00)',0],['rgba(241,241,241,1.00)',100]]]],
                ["style", "left", '9px'],
                ["style", "width", '23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '759px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '39px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["color", "color", 'rgba(53,53,53,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '367px'],
                ["style", "font-size", '20px']
            ],
            "${_EllipseCopy}": [
                ["style", "top", '5px'],
                ["style", "height", '23px'],
                ["gradient", "background-image", [270,[['rgba(202,202,202,1.00)',0],['rgba(241,241,241,1.00)',100]]]],
                ["style", "left", '725px'],
                ["style", "width", '23px']
            ],
            "${_EllipseCopy2}": [
                ["style", "top", '5px'],
                ["style", "height", '23px'],
                ["gradient", "background-image", [270,[['rgba(202,202,202,1.00)',0],['rgba(241,241,241,1.00)',100]]]],
                ["style", "left", '188px'],
                ["style", "width", '23px']
            ],
            "${_EllipseCopy4}": [
                ["style", "top", '5px'],
                ["style", "height", '23px'],
                ["gradient", "background-image", [270,[['rgba(202,202,202,1.00)',0],['rgba(241,241,241,1.00)',100]]]],
                ["style", "left", '367px'],
                ["style", "width", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"marker": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(140,14,6,1.00)', 0], ['rgba(245,32,19,1.00)', 100]]]]
                },
                {
                    rect: ['-4px', '-4px', '30px', '30px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    transform: [[0, 0], [], [], ['0.53302', '0.53302']],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [270, [['rgba(237,25,10,1.00)', 0], ['rgba(170,16,7,1.00)', 100]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.53302'],
                ["style", "height", '30px'],
                ["transform", "scaleX", '0.53302'],
                ["gradient", "background-image", [270,[['rgba(237,25,10,1.00)',0],['rgba(170,16,7,1.00)',100]]]],
                ["style", "left", '-4px'],
                ["style", "width", '30px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["gradient", "background-image", [270,[['rgba(140,14,6,1.00)',0],['rgba(245,32,19,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-69059814");
