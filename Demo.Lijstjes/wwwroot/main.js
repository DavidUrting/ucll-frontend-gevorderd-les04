!function(n){var e={};function t(l){if(e[l])return e[l].exports;var I=e[l]={i:l,l:!1,exports:{}};return n[l].call(I.exports,I,I.exports,t),I.l=!0,I.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var I in n)t.d(l,I,function(e){return n[e]}.bind(null,I));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/lijst-event.js\n\ufeffclass LijstEvent {\r\n    constructor(onderdeel) {\r\n        this.onderdeel;\r\n    }\r\n}\r\n\r\nclass LijstAddEvent extends LijstEvent {\r\n    constructor(onderdeel) {\r\n        super(onderdeel);\r\n    }\r\n}\r\n\r\nclass LijstRemoveEvent extends LijstEvent {\r\n    constructor(onderdeel) {\r\n        super(onderdeel);\r\n    }\r\n}\r\n\r\nclass LijstChangeEvent extends LijstEvent {\r\n    constructor(onderdeel) {\r\n        super(onderdeel);\r\n    }\r\n}\r\n\n// CONCATENATED MODULE: ./src/lijst-onderdeel.js\n\ufeff\r\n\r\nclass lijst_onderdeel_LijstOnderdeel {\r\n    constructor(lijst, id, tekst) {\r\n        this._lijst = lijst;\r\n        this._id = id;\r\n        this.tekst = tekst;\r\n    }\r\n\r\n    get id() {\r\n        return this._id;\r\n    }\r\n\r\n    get tekst() {\r\n        return this._tekst;\r\n    };\r\n\r\n    set tekst(value) {\r\n        this._tekst = value;\r\n        this._lijst.listeners.forEach((l) => {\r\n            l(new LijstChangeEvent(this));\r\n        });\r\n    }\r\n}\n// CONCATENATED MODULE: ./src/lijst.js\n\ufeff\r\n \r\n\r\n\r\nclass lijst_Lijst {\r\n    constructor() {\r\n        this.sequence = 0;\r\n        this.onderdelen = [];\r\n        this.listeners = [];\r\n    }\r\n\r\n    add(tekst) {\r\n        let onderdeel = new lijst_onderdeel_LijstOnderdeel(this, this.sequence++, tekst);\r\n        this.onderdelen.push(onderdeel);\r\n        this.listeners.forEach(l => {\r\n            l(new LijstAddEvent(onderdeel));\r\n        });\r\n        return onderdeel;\r\n    }\r\n\r\n    remove(id) {\r\n        id = parseInt(id);\r\n        let index = -1;\r\n        for (let i = 0; i < this.onderdelen.length; i++) {\r\n            if (this.onderdelen[i].id === id) {\r\n                index = i;\r\n                break;\r\n            }\r\n        }\r\n\r\n        if (index >= 0) {\r\n            let onderdeel = this.onderdelen[index];\r\n            this.onderdelen.splice(index, 1);\r\n\r\n            this.listeners.forEach(l => {\r\n                l(new LijstRemoveEvent(onderdeel));\r\n            });\r\n        }\r\n    }\r\n\r\n    registerListener(listener) {\r\n        this.listeners.push(listener);\r\n    }\r\n}\r\n\r\nclass LijstRenderer {\r\n    constructor(lijst) {\r\n        lijst.registerListener((e) => { this.onLijstEvent(); });\r\n    }\r\n\r\n    onLijstEvent(e) {\r\n    }\r\n}\r\n\r\nclass HtmlLijstRenderer extends LijstRenderer {\r\n    constructor(lijst, ulElement) {\r\n        super(lijst);\r\n        this.lijst = lijst;\r\n        this.ulElement = ulElement;\r\n    }\r\n\r\n    onLijstEvent(e) {\r\n        if (!this.skipEvents) {\r\n            super.onLijstEvent(e);\r\n            this.render();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        this.ulElement.innerHTML = "";\r\n        this.lijst.onderdelen.forEach((o) => {\r\n            let li = document.createElement("li");\r\n            li.id = `${this.ulElement.id}-${o.id}`\r\n            li.innerHTML = `<div><input type=\'text\' /><button data-onderdeel-id=\'${o.id}\'>X</button></div>`;\r\n            this.ulElement.appendChild(li);\r\n            document.querySelector(`#${li.id} input`).value = o.tekst;\r\n            document.querySelector(`#${li.id} input`).addEventListener("input", (e) => {\r\n                this.skipEvents = true;\r\n                o.tekst = e.target.value;\r\n                this.skipEvents = false;\r\n                e.preventDefault();\r\n            });\r\n            document.querySelector(`#${li.id} button`).addEventListener("click", (e) => {\r\n                this.lijst.remove(e.target.getAttribute(\'data-onderdeel-id\'));\r\n                e.preventDefault();\r\n            });\r\n        });\r\n    }\r\n}\n// CONCATENATED MODULE: ./src/index.js\n\ufeff\r\n\r\nvar lijst = new lijst_Lijst();\r\nlijst.add(\'testje 1\');\r\nlijst.add(\'testje 2\');\r\n\r\nvar lijstRenderer1 = new HtmlLijstRenderer(lijst, document.getElementById("lijst1"));\r\nlijstRenderer1.render();\r\n\r\nvar lijstRenderer2 = new HtmlLijstRenderer(lijst, document.getElementById("lijst2"));\r\nlijstRenderer2.render();\r\n\r\ndocument.getElementById("add").addEventListener("click", (e) => {\r\n    lijst.add(\'\');\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlqc3QtZXZlbnQuanM/MDQwNSIsIndlYnBhY2s6Ly8vLi9zcmMvbGlqc3Qtb25kZXJkZWVsLmpzP2MxNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpanN0LmpzPzYxODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQ3RCQSxDQUFrRDs7QUFFM0MsTUFBTSw4QkFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQSxDOztBQ3ZCQSxDQUFpRTs7OztBQUkxRCxNQUFNLFdBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw4QkFBYztBQUMxQztBQUNBO0FBQ0Esa0JBQWtCLGFBQWE7QUFDL0IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxxQkFBcUIsRUFBRTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0IsR0FBRyxLQUFLO0FBQ2pELG1GQUFtRixLQUFLO0FBQ3hGO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0MsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxDOztBQ3hGQSxDQUFvRDs7QUFFcEQsZ0JBQWdCLFdBQUs7QUFDckI7QUFDQTs7QUFFQSx5QkFBeUIsaUJBQWlCO0FBQzFDOztBQUVBLHlCQUF5QixpQkFBaUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2NsYXNzIExpanN0RXZlbnQge1xyXG4gICAgY29uc3RydWN0b3Iob25kZXJkZWVsKSB7XHJcbiAgICAgICAgdGhpcy5vbmRlcmRlZWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWpzdEFkZEV2ZW50IGV4dGVuZHMgTGlqc3RFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvbmRlcmRlZWwpIHtcclxuICAgICAgICBzdXBlcihvbmRlcmRlZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlqc3RSZW1vdmVFdmVudCBleHRlbmRzIExpanN0RXZlbnQge1xyXG4gICAgY29uc3RydWN0b3Iob25kZXJkZWVsKSB7XHJcbiAgICAgICAgc3VwZXIob25kZXJkZWVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpanN0Q2hhbmdlRXZlbnQgZXh0ZW5kcyBMaWpzdEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG9uZGVyZGVlbCkge1xyXG4gICAgICAgIHN1cGVyKG9uZGVyZGVlbCk7XHJcbiAgICB9XHJcbn1cclxuIiwi77u/aW1wb3J0IHsgTGlqc3RDaGFuZ2VFdmVudCB9IGZyb20gJy4vbGlqc3QtZXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpanN0T25kZXJkZWVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGxpanN0LCBpZCwgdGVrc3QpIHtcclxuICAgICAgICB0aGlzLl9saWpzdCA9IGxpanN0O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50ZWtzdCA9IHRla3N0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRla3N0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZWtzdDtcclxuICAgIH07XHJcblxyXG4gICAgc2V0IHRla3N0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdGVrc3QgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9saWpzdC5saXN0ZW5lcnMuZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICBsKG5ldyBMaWpzdENoYW5nZUV2ZW50KHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIu+7v2ltcG9ydCB7IExpanN0QWRkRXZlbnQsIExpanN0UmVtb3ZlRXZlbnQgfSBmcm9tICcuL2xpanN0LWV2ZW50JztcclxuaW1wb3J0IHsgTGlqc3RPbmRlcmRlZWwgfSBmcm9tIFwiLi9saWpzdC1vbmRlcmRlZWxcIjsgXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpanN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMub25kZXJkZWxlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHRla3N0KSB7XHJcbiAgICAgICAgbGV0IG9uZGVyZGVlbCA9IG5ldyBMaWpzdE9uZGVyZGVlbCh0aGlzLCB0aGlzLnNlcXVlbmNlKyssIHRla3N0KTtcclxuICAgICAgICB0aGlzLm9uZGVyZGVsZW4ucHVzaChvbmRlcmRlZWwpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgIGwobmV3IExpanN0QWRkRXZlbnQob25kZXJkZWVsKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9uZGVyZGVlbDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgICBpZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub25kZXJkZWxlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmRlcmRlbGVuW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBvbmRlcmRlZWwgPSB0aGlzLm9uZGVyZGVsZW5baW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLm9uZGVyZGVsZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsKG5ldyBMaWpzdFJlbW92ZUV2ZW50KG9uZGVyZGVlbCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaWpzdFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxpanN0KSB7XHJcbiAgICAgICAgbGlqc3QucmVnaXN0ZXJMaXN0ZW5lcigoZSkgPT4geyB0aGlzLm9uTGlqc3RFdmVudCgpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpanN0RXZlbnQoZSkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbExpanN0UmVuZGVyZXIgZXh0ZW5kcyBMaWpzdFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxpanN0LCB1bEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihsaWpzdCk7XHJcbiAgICAgICAgdGhpcy5saWpzdCA9IGxpanN0O1xyXG4gICAgICAgIHRoaXMudWxFbGVtZW50ID0gdWxFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlqc3RFdmVudChlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNraXBFdmVudHMpIHtcclxuICAgICAgICAgICAgc3VwZXIub25MaWpzdEV2ZW50KGUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy51bEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxpanN0Lm9uZGVyZGVsZW4uZm9yRWFjaCgobykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGxpLmlkID0gYCR7dGhpcy51bEVsZW1lbnQuaWR9LSR7by5pZH1gXHJcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8ZGl2PjxpbnB1dCB0eXBlPSd0ZXh0JyAvPjxidXR0b24gZGF0YS1vbmRlcmRlZWwtaWQ9JyR7by5pZH0nPlg8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICB0aGlzLnVsRWxlbWVudC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xpLmlkfSBpbnB1dGApLnZhbHVlID0gby50ZWtzdDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bGkuaWR9IGlucHV0YCkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBFdmVudHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgby50ZWtzdCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwRXZlbnRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsaS5pZH0gYnV0dG9uYCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpanN0LnJlbW92ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25kZXJkZWVsLWlkJykpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIu+7v2ltcG9ydCB7IExpanN0LCBIdG1sTGlqc3RSZW5kZXJlciB9IGZyb20gXCIuL2xpanN0XCI7XHJcblxyXG52YXIgbGlqc3QgPSBuZXcgTGlqc3QoKTtcclxubGlqc3QuYWRkKCd0ZXN0amUgMScpO1xyXG5saWpzdC5hZGQoJ3Rlc3RqZSAyJyk7XHJcblxyXG52YXIgbGlqc3RSZW5kZXJlcjEgPSBuZXcgSHRtbExpanN0UmVuZGVyZXIobGlqc3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlqc3QxXCIpKTtcclxubGlqc3RSZW5kZXJlcjEucmVuZGVyKCk7XHJcblxyXG52YXIgbGlqc3RSZW5kZXJlcjIgPSBuZXcgSHRtbExpanN0UmVuZGVyZXIobGlqc3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlqc3QyXCIpKTtcclxubGlqc3RSZW5kZXJlcjIucmVuZGVyKCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxpanN0LmFkZCgnJyk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);