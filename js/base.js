(function(window, document) {
	var __extflag = {};
	var __initialize = function() {
			this._$super.apply(this, arguments);
		};
	var __extend = function(_super, _static) {
			if (!_super || !U._$isType(_super, 'function') || !U._$isType(this, 'function')) return;
			if ( !! _static) for (var _method in _super)
			if (U._$isType(_super[_method], 'function')) this[_method] = _super[_method];
			this._$super = _super;
			this._$supro = _super.prototype;
			this.prototype = new _super(__extflag);
			this.prototype.constructor = this;
			this.prototype._$initialize = __initialize;
			var _superp = _super;
			this.prototype._$super = function() {
				var _init = _superp.prototype._$initialize;
				_superp = _superp._$super || _super;
				return !!_init && _init.apply(this, arguments);
			};
			return this.prototype;
		};
	var __implement = function() {
			var _this = this.prototype;
			for (var i = 0, l = arguments.length, _class, _prototype; i < l; i++) {
				_class = arguments[i];
				if (!U._$isType(_class, 'function')) continue;
				_prototype = _class.prototype;
				for (var x in _prototype)
				if (U._$isType(_prototype[x], 'function')) _this[x] = _prototype[x];
			}
			return _this;
		};
	var __bind = function() {
			var _function = this,
				_args = arguments,
				_object = Array.prototype.shift.call(arguments);
			return function() {
				Array.prototype.push.apply(arguments, _args);
				return _function.apply(_object || window, arguments);
			}
		};
	window.O = {};
	window.F = function() {
		return false;
	};
	window.P = function(_namespace) {
		if (!_namespace || !_namespace.length) return null;
		var _package = window;
		for (var a = _namespace.split('.'), l = a.length, i = (a[0] == 'window') ? 1 : 0; i < l;
		_package = _package[a[i]] = _package[a[i]] || {}, i++);
		return _package;
	};
	window.C = function() {
		var _class = function() {
				if (arguments[0] != __extflag && !! this._$initialize) return this._$initialize.apply(this, arguments);
			};
		_class._$extend = __extend;
		_class._$implement = __implement;
		return _class;
	};
	Function.prototype._$bind = function() {
		var _function = this,
			_args = arguments,
			_object = Array.prototype.shift.call(arguments);
		return function() {
			var _argc = Array.prototype.slice.call(_args, 0);
			Array.prototype.push.apply(_argc, arguments);
			return _function.apply(_object || window, _argc);
		};
	};
	Function.prototype._$bind2 = __bind;
	Function.prototype._$bindAsEventListener = __bind;
	var p = P('N');
	p.rc = p.rc || {};
	p.xd = p.xd || [];
	p.tm = p.tm || O;
	p.ui = p.ui || 'ntes.ui';
	p.ut = p.ut || 'ntes.util';
	p.gb = p.gb || 'ntes.global';
	p.gw = p.gw || 'ntes.widget';
	p.fw = p.fw || 'ntes.framework';
	p.rc.r = p.rc.r || 'http://b.bst.126.net/common/';
	p.rc.s = p.rc.s || '/common/storage.swf';
	p.rc.u = p.rc.u || '/common/upload.swf';
	if (p.rc.s.indexOf('?') < 0) p.rc.s += '?t=' + new Date().getTime();
})(this, document);
(function(window, document) {
	var __userAgent = window.navigator.userAgent;
	P('B');
	B.__destroy = F;
	B._$ISIE = /msie\s+(.*?)\;/i.test(__userAgent);
	B._$ISFF = !B._$ISIE && /rv\:(.*?)\)\s+gecko\//i.test(__userAgent);
	B._$ISOP = !B._$ISIE && !B._$ISFF && /opera\/(.*?)\s/i.test(__userAgent);
	B._$ISSF = !B._$ISIE && !B._$ISFF && !B._$ISOP && /applewebkit\/(.*?)\s/i.test(__userAgent);
	B._$ISKQ = !B._$ISIE && !B._$ISFF && !B._$ISOP && !B._$ISSF && /konqueror\/(.*?)\;/i.test(__userAgent);
	B._$VERSION = RegExp.$1;
	B._$ISOLDIE = B._$ISIE && B._$VERSION < '7.0';
	B._$ISMT = B._$ISIE && __userAgent.indexOf('Maxthon') >= 0;
	B._$ISTT = B._$ISIE && __userAgent.indexOf('TencentTraveler') >= 0;
	if (B._$ISIE) try {
		document.execCommand('BackgroundImageCache', false, true);
	} catch (e) {}
})(this, document);
(function(window, document) {
	var __trim = /(?:^\s+)|(?:\s+$)/g,
		__empty = /^\s*$/,
		__remap = {
			a: {
				r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
				'<': '&lt;',
				'>': '&gt;',
				'&': '&amp;',
				' ': '&nbsp;',
				'"': '&quot;',
				"'": '&#39;',
				'\n': '<br/>',
				'\r': ''
			},
			b: {
				r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
				'&lt;': '<',
				'&gt;': '>',
				'&amp;': '&',
				'&nbsp;': ' ',
				'&#39;': "'",
				'&quot;': '"',
				'<br/>': '\n'
			},
			c: {
				i: true,
				r: /\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g
			},
			d: {
				r: /\'|\"/g,
				"'": "\\'",
				'"': '\\"'
			}
		};
	P('U');
	U.__destroy = F;
	U._$number = function(_number) {
		_number = parseInt(_number) || 0;
		return (_number < 10 ? '0' : '') + _number;
	};
	U._$trim = function(_content) {
		return !!_content && !! _content.replace && _content.replace(__trim, '') || '';
	};
	U._$subString = function(_content, _length) {
		_content = _content || '';
		if (!_length) return _content;
		for (var i = 0, k = 0, l = _content.length; i < l; i++) {
			k += _content.charCodeAt(i) > 255 ? 2 : 1;
			if (k >= _length) return _content.substr(0, i + (k == _length ? 1 : 0));
		}
		return _content;
	};
	U._$isEmpty = function(_content) {
		return __empty.test(_content || '');
	};
	U._$rand = function(_min, _max) {
		return Math.floor(Math.random() * (_max - _min) + _min);
	};
	U._$randNumberString = function(_length) {
		_length = Math.max(0, Math.min(_length || 10, 100));
		var _min = Math.pow(10, _length - 1),
			_max = _min * 10;
		return U._$rand(_min, _max).toString();
	};
	U._$isType = function(_data, _type) {
		return Object.prototype.toString.
		call(_data).toLowerCase() == ('[object ' + _type.toLowerCase() + ']');
	};
	U._$indexOf = function(_list, _item) {
		var _isfunc = U._$isType(_item, 'function');
		if ( !! _list && _list.length > 0) for (var i = 0, l = _list.length; i < l; i++)
		if (_isfunc ? !! _item(_list[i]) : _list[i] == _item) return i;
		return -1;
	};
	U._$encode = function(_map, _content) {
		if (!_map || !_content || !_content.replace) return _content || '';
		return _content.replace(_map.r, function($1) {
			var _result = _map[!_map.i ? $1.toLowerCase() : $1];
			return _result != null ? _result : $1;
		});
	};
	U._$escape = function(_content) {
		return U._$encode(__remap.a, _content);
	};
	U._$unescape = function(_content) {
		return U._$encode(__remap.b, _content);
	};
	U._$string = function(_content) {
		return U._$encode(__remap.d, _content);
	};
	U._$format = function(_time, _format) {
		if (!_time || !_format) return '';
		if (U._$isType(_time, 'string')) _time = new Date(Date.parse(_time));
		if (!U._$isType(_time, 'date')) _time = new Date(_time);
		var _map = __remap.c;
		_map['yyyy'] = _time.getFullYear();
		_map['yy'] = ('' + _map['yyyy']).substr(2);
		_map['M'] = _time.getMonth() + 1;
		_map['MM'] = U._$number(_map['M']);
		_map['d'] = _time.getDate();
		_map['dd'] = U._$number(_map['d']);
		_map['H'] = _time.getHours();
		_map['HH'] = U._$number(_map['H']);
		_map['m'] = _time.getMinutes();
		_map['mm'] = U._$number(_map['m']);
		_map['s'] = _time.getSeconds();
		_map['ss'] = U._$number(_map['s']);
		_map['ms'] = _time.getMilliseconds();
		return U._$encode(_map, _format);
	};
	U._$serialize = function(_data) {
		if (U._$isType(_data, 'number')) return _data;
		if (U._$isType(_data, 'date')) return _data.getTime();
		if (U._$isType(_data, 'boolean')) return !!_data ? 'true' : 'false';
		if (U._$isType(_data, 'string')) return "'" + U._$string(_data) + "'";
		if (!_data) return 'null';
		if (U._$isType(_data, 'array')) {
			var _arr = [];
			for (var i = 0, l = _data.length; i < l;
			_arr.push(U._$serialize(_data[i])), i++);
			return '[' + _arr.join(',') + ']';
		}
		if (U._$isType(_data, 'object')) {
			var _arr = [];
			for (var p in _data)
			_arr.push(U._$serialize(p) + ':' + U._$serialize(_data[p]));
			return '{' + _arr.join(',') + '}';
		}
		return 'null';
	};
	U._$deserialize = function(_content) {
		try {
			return !_content ? null : (new Function('return ' + _content))();
		} catch (e) {
			return null;
		}
	};
	U._$parseJSON = !! window.JSON ? JSON.parse : U._$deserialize;
	U._$toJSONString = !! window.JSON ? JSON.stringify : U._$serialize;
	U._$getGValue = function(_key) {
		var _value = window[_key];
		try {
			if (!delete window[_key]) throw '';
		} catch (e) {
			window[_key] = undefined;
		}
		return _value;
	};
	U._$getQueryStringRegExp = function(name) {
		var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
		if (reg.test(location.search)) return unescape(RegExp.$2.replace(/\+/g, " "));
		return "";
	};
	U._$getFullName = function(_userName) {
		if (_userName.substr(-4) === "@126") return _userName.replace("@126", "@126.com");
		else if (_userName.substr(-4) === "@188") return _userName.replace("@188", "@188.com");
		else if (_userName.substr(-5) === "@popo") return _userName.replace(".popo", "@popo.163.com");
		else if (_userName.substr(-4) === ".vip") return _userName.replace(".vip", "@vip.163.com");
		else if (_userName.substr(-5) === "@yeah") return _userName.replace("@yeah", "@yeah.net");
		else if (_userName.substr(-5) === "@game") return _userName;
		else if (_userName.indexOf('@') >= 0) {
			return _userName;
		} else {
			return _userName + "@163.com";
		}
	};
})(this, document);
(function(window, document) {
	var __hc, __tp = {},
		__sp = /\s+/g,
		__hk = '__hvrkey__',
		__ha = '__hatkey__',
		__ec = document.createDocumentFragment();
	var __initElementByTag = function(_element) {
			if (!_element) return;
			switch (_element.tagName.toLowerCase()) {
			case 'a':
				_element.href = '#';
				_element.hideFocus = true;
				break;
			case 'iframe':
				_element.frameBorder = 0;
				_element.src = 'about:blank';
				return;
			case 'script':
				_element.defer = 'defer';
				_element.type = 'text/javascript';
				return;
			case 'style':
				_element.type = 'text/css';
				return;
			case 'link':
				_element.type = 'text/css';
				_element.rel = 'stylesheet';
				return;
			}
			__ec.appendChild(_element);
		};
	var __getRegClassName = function(_class) {
			_class = U._$trim(_class);
			return !_class ? '' : '(\\s|^)(?:' + _class.replace(__sp, '|') + ')(?=\\s|$)';
		};
	var __hoverElement = function(_element, _hovered) {
			_element = E._$getElement(_element);
			if (!_element) return;
			_hovered = !! _hovered;
			if (_element[__ha] == _hovered) return;
			var _class = _element[__hk];
			if (!_class) return;
			_element[__ha] = _hovered;
			_hovered ? E._$addClassName(_element, _class) : E._$delClassName(_element, _class);
		};
	var __maxElement = function(_element) {
			_element = E._$getElement(_element);
			if (!_element) return;
			var _type = _element.mt,
				_value = _element.mv,
				_attr = _type == 'width' ? 'scrollWidth' : 'scrollHeight';
			_element.style[_type] = _element[_attr] < _value ? 'auto' : (_value + 'px');
		};
	var __adjElement = function(_element) {
			_element = E._$getElement(_element);
			if (!_element) return;
			var _type = _element.mt,
				_value = _element.mv,
				_ratio = _element.mr,
				_st = _element.style,
				_rd = (_element.scrollWidth / _element.scrollHeight) || 1,
				_mw = _type == 'width' ? _value : Math.floor(_value * _ratio),
				_mh = _type == 'width' ? Math.floor(_value / _ratio) : _value;
			if (_rd >= _ratio && _element.scrollWidth > _mw) {
				_st.width = _mw + 'px';
				_st.height = 'auto';
				return;
			}
			if (_rd <= _ratio && _element.scrollHeight > _mh) {
				_st.width = 'auto';
				_st.height = _mh + 'px';
				return;
			}
			_st.width = 'auto';
			_st.height = 'auto';
		};
	var __getOffset = function(_element, _type, _filter) {
			_element = E._$getElement(_element);
			if (!_element) return 0;
			_filter = _filter || F;
			var _offset = 0;
			while ( !! _element && !_filter(_element)) {
				_offset += _element[_type];
				_element = _element.offsetParent;
			}
			return _offset;
		};
	var __getStyle;
	if ( !! document.defaultView && !! document.defaultView.getComputedStyle) {
		__getStyle = function(_element, _style) {
			var _css = document.defaultView.getComputedStyle(_element, null);
			return !_css ? '' : _css[_style];
		};
	} else {
		__getStyle = function(_element, _style) {
			return _element.currentStyle[_style];
		};
	}
	P('E');
	E.__destroy = function() {
		var _element = document.createElement('div');
		_element.style.display = 'none';
		document.body.appendChild(_element);
		_element.appendChild(__ec);
	};
	E._$getElement = function(_element) {
		if (arguments.length <= 1) return U._$isType(_element, 'string') || U._$isType(_element, 'number') ? document.getElementById(_element) : _element;
		var _result = [];
		for (var i = 0, l = arguments.length; i < l;
		_result.push(E._$getElement(arguments[i])), i++);
		return _result;
	};
	E._$getChildElements = function(_element, _class) {
		_element = E._$getElement(_element);
		if (!_element) return null;
		var _result = [];
		for (var _node = _element.children || _element.childNodes, i = 0, l = _node.length; i < l; i++) {
			if (_node[i].nodeType != Node.ELEMENT_NODE || (_class && !E._$hasClassName(_node[i], _class))) continue;
			_result.push(_node[i]);
		}
		return _result;
	};
	E._$getElementsByClassName = function(_element, _class) {
		_class = U._$trim(_class);
		_element = E._$getElement(_element);
		if (!_element || !_class) return null;
		if ( !! _element.getElementsByClassName) {
			return Array.prototype.slice.call(
			_element.getElementsByClassName(_class), 0);
		}
		if ( !! document.evaluate) {
			var _result = [],
				_xrsult = document.evaluate('.//*' + __getExpByClassName(_class), _element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			for (var i = 0, l = _xrsult.snapshotLength; i < l;
			_result.push(_xrsult.snapshotItem(i)), i++);
			return _result;
		}
		var _result = [],
			_regexp = new RegExp(__getRegClassName(_class), 'g'),
			_xrsult = _element.getElementsByTagName('*');
		for (var i = 0, l = _xrsult.length; i < l; i++)
		if (E._$hasClassName(_xrsult[i], _regexp)) _result.push(_xrsult[i]);
		return _result;
	};
	E._$hasClassName = function(_element, _class) {
		_element = E._$getElement(_element);
		if (!_element || !_class) return false;
		_class = U._$isType(_class, 'string') ? __getRegClassName(_class) : _class;
		return (_element.className || '').search(_class) >= 0;
	};
	E._$replaceClassName = function(_element, _del, _add) {
		_element = E._$getElement(_element);
		if (!_element || (!_del && !_add)) return;
		var _class = _element.className || '';
		_add = ' ' + (_add || '');
		_del = __getRegClassName(_del + _add); !! _del && (_class = _class.replace(new RegExp(_del, 'g'), '$1'));
		_element.className = U._$trim(_class + _add).replace(__sp, ' ');
	};
	E._$addClassName = function(_element, _add) {
		E._$replaceClassName(_element, '', _add);
	};
	E._$delClassName = function(_element, _del) {
		E._$replaceClassName(_element, _del, '');
	};
	E._$addNodeTemplate = function(_element, _key) {
		var _nd = E._$getElement(_element),
			_sn = _key || ('tp_' + U._$randNumberString(6));
		if ( !! _nd) {
			__tp[_sn] = _nd;
			__ec.appendChild(_nd);
		} else if (U._$isType(_element, 'string')) {
			__tp[_sn] = _element;
		}
		return _sn;
	};
	E._$getNodeTemplate = function(_sn) {
		var _ntmp = __tp[_sn];
		if ( !! _ntmp && U._$isType(_ntmp, 'string')) E._$addNodeTemplate(E._$parseElement(_ntmp), _sn);
		return !__tp[_sn] ? null : __tp[_sn].cloneNode(true);
	};
	E._$parseElement = function(_xhtml) {
		if (!U._$isType(_xhtml, 'string')) return _xhtml;
		_xhtml = U._$trim(_xhtml);
		if (!_xhtml) return null;
		var _element = document.cloneElement('div');
		_element.innerHTML = _xhtml;
		return _element.childNodes.length == 1 ? _element.childNodes[0] : _element;
	};
	E._$parseStyle = function(_css, _style) {
		var _stySheets = document.getElementsByTagName('style');
		if (!_css) return null;
		if (!B._$ISIE || _stySheets && _stySheets.length < 30) {
			if (!_style) {
				var _style = document.cloneElement('style');
				document.head.appendChild(_style);
			}
			if (!B._$ISIE) {
				_style.innerText += _css;
			} else {
				try {
					_style.styleSheet.cssText += _css;
				} catch (e) {
					_style = document.styleSheets[_stySheets.length - 1];
					_style.cssText += _css;
				}
			}
			return _style;
		}
		__hc.styleSheet.cssText += _css;
		return __hc;
	};
	E._$setStyle = function(_elements, _prop, _val) {
		for (var i = 0, len = _elements.length; i < len; i++) {
			E._$getElement(_elements[i]).style[_prop] = _val;
		}
	};
	E._$setCSS = function(_el, _styles) {
		for (var _prop in _styles) {
			if (!_styles.hasOwnProperty(_prop)) continue;
			E._$setStyle(_el, _prop, _styles[_prop]);
		}
	};
	E._$getStyle = function(_element, _style) {
		_element = E._$getElement(_element);
		return !_element ? '' : _element.style[_style] || __getStyle(_element, _style);
	};
	E._$offsetX = function(_element, _filter) {
		return __getOffset(_element, 'offsetLeft', _filter);
	};
	E._$offsetY = function(_element, _filter) {
		return __getOffset(_element, 'offsetTop', _filter);
	};
	E._$removeElement = function(_element) {
		_element = E._$getElement(_element);
		if (!_element || !_element.parentNode) return;
		_element.parentNode.removeChild(_element);
		if (B._$ISIE && !! _element.outerHTML) _element.outerHTML = '';
	};
	E._$removeElementByEC = function() {
		for (var i = 0, l = arguments.length, _element; i < l; i++) {
			_element = E._$getElement(arguments[i]);
			_element && __ec.appendChild(_element);
		}
	};
	E._$noSelect = function(_element, _selected) {
		if (!B._$ISIE) return;
		_element = E._$getElement(_element);
		if (!_element) return;
		_element.onselectstart = !_selected ? F : null;
	};
	E._$hoverElement = function(_element, _class, _force) {
		if (!B._$ISOLDIE && !_force) return;
		_element = E._$getElement(_element);
		if (!_element || !_class || !! _element[__hk]) return;
		_element[__hk] = _class;
		var _id = _element.id = _element.id || 'xnd_' + U._$randNumberString(10);
		V._$addEvent(_element, B._$ISIE ? 'mouseleave' : 'mouseout', __hoverElement._$bind(E, _id, false));
		V._$addEvent(_element, B._$ISIE ? 'mouseenter' : 'mouseover', __hoverElement._$bind(E, _id, true));
	};
	E._$maxBoxElement = function(_element, _type, _value, _ratio) {
		if (!B._$ISOLDIE) return;
		_element = E._$getElement(_element);
		if (!_element) return;
		var _id = _element.id || ('mnd_' + U._$randNumberString(10));
		_element.id = _id;
		_element.mt = _type;
		_element.mv = _value;
		_element.mr = _ratio;
		if ( !! _element.maxkey) return;
		_element.maxkey = true;
		var _type = _element.tagName.toLowerCase() == 'img' ? 'load' : 'resize'; !! _ratio ? V._$addEvent(_element, _type, __adjElement._$bind(E, _id)) : V._$addEvent(_element, _type, __maxElement._$bind(E, _id));
	};
	E._$maxWidthElement = function(_element, _width, _ratio) {
		E._$maxBoxElement(_element, 'width', _width, _ratio);
	};
	E._$maxHeightElement = function(_element, _height, _ratio) {
		E._$maxBoxElement(_element, 'height', _height, _ratio);
	};
	E._$getFlashObject = function(_key) {
		var _flash = B._$ISIE ? window[_key] : document[_key];
		return !!_flash ? document.getElementById(_key) : _flash;
	};
	var __getExpByClassName;
	if ( !! document.evaluate) __getExpByClassName = function(_class) {
		if (!_class) return null;
		if (!__sp.test(_class)) return "[contains(concat(' ',@class,' '),' " + _class + " ')]";
		var _arr = _class.split(__sp),
			_result = '';
		for (var i = 0, l = _arr.length, _tmp; i < l; i++) {
			_tmp = __getExpByClassName(_arr[i]);
			_result += !_tmp ? '' : _tmp;
		}
		return _result;
	};
	if (!window.Node) window.Node = {
		ELEMENT_NODE: 1
	};
	if (B._$ISFF) {
		HTMLElement.prototype['__defineGetter__']("innerText", function() {
			return this.textContent;
		});
		HTMLElement.prototype['__defineSetter__']("innerText", function(_content) {
			this.textContent = _content;
		});
		HTMLElement.prototype.insertAdjacentElement = function(_where, _element) {
			if (!_where || !_element) return;
			switch (_where) {
			case 'beforeEnd':
				this.appendChild(_element);
				return;
			case 'beforeBegin':
				this.parentNode.insertBefore(_element, this);
				return;
			case 'afterBegin':
				!this.firstChild ? this.appendChild(_element) : this.insertBefore(_element, this.firstChild);
				return;
			case 'afterEnd':
				!this.nextSibling ? this.parentNode.appendChild(_element) : this.parentNode.insertBefore(_element, this.nextSibling);
				return;
			}
		};
		HTMLElement.prototype.insertAdjacentHTML = function(_where, _html) {
			if (!_where || !_html) return;
			this.insertAdjacentElement(_where, document.createRange().
			createContextualFragment(_html));
		};
	}
	document.head = document.getElementsByTagName('head')[0] || document.body;
	document.cloneElement = function(_tag, _class) {
		var _element = document.createElement(_tag);
		__initElementByTag(_element); !! _class && (_element.className = _class);
		return _element;
	};
	if (B._$ISIE) {
		__hc = document.cloneElement('style');
		document.head.appendChild(__hc);
	}
})(this, document);
(function(window, document) {
	var __akey = '__' + new Date().getTime() + '__';
	var __events = {};
	var __cacheEventWithoutCached = function(_element, _type, _handler) {
			var _sn = 'ev_' + U._$randNumberString(),
				_object = {
					evn: {}
				};
			_object.evn[_type] = _handler;
			_object.elm = _element;
			__events[_sn] = _object;
			_element[__akey] = _sn;
		};
	var __cacheEventWithCached = function(_sn, _type, _handler) {
			var _object = __events[_sn].evn,
				_function = _object[_type];
			if (!_function) {
				_object[_type] = _handler;
				return;
			}
			if (!U._$isType(_function, 'array')) {
				_object[_type] = [_function, _handler];
				return;
			}
			_function.push(_handler);
		};
	var __cacheEvent = function(_element, _type, _handler) {
			if (_element == window || _element == document || _element == top || _element == parent) return;
			var _sn = _element[__akey];
			_sn ? __cacheEventWithCached(_sn, _type, _handler) : __cacheEventWithoutCached(_element, _type, _handler);
		};
	var __clearEventInCache = function(_sn, _type) {
			try {
				var _cache = __events[_sn];
				if (!_cache) return;
				if ( !! _type) {
					var _handler = _cache.evn[_type];
					if (!_handler) return;
					if (!U._$isType(_handler, 'array')) V._$delEvent(_cache.elm, _type, _handler);
					else for (var h; h = _handler.pop();
					V._$delEvent(_cache.elm, _type, h));
					delete _cache.evn[_type];
					return;
				}
				__clearCacheWithSN(_sn);
			} catch (e) {}
		};
	var __clearEventsInCache = function() {
			for (var _sn in __events) try {
				__clearCacheWithSN(_sn);
			} catch (e) {}
		};
	var __clearCacheWithSN = function(_sn) {
			var _cache = __events[_sn];
			if (!_cache) return;
			for (var _type in _cache.evn) !! _type && __clearEventInCache(_sn, _type);
			_cache.elm[__akey] = '';
			delete _cache.elm;
			delete _cache.evn;
			delete __events[_sn];
		};
	var __onReadyStateChange = function(_callback, _event) {
			var _element = V._$getElement(_event) || document;
			if (!_element || (_element.readyState != 'loaded' && _element.readyState != 'complete')) return;
			_callback(_event);
		};
	var __isOnReadyStateChange = function(_element, _type) {
			var _tag = (_element.tagName || '').toLowerCase();
			return B._$ISIE && ((_element == document && _type == 'DOMContentLoaded') || ((_tag == 'iframe' || _tag == 'script') && _type == 'load'));
		};
	var __isW3cListener = !! document.addEventListener,
		__rectifyEventType;
	__rectifyEventType = function(_type) {
		if (__isW3cListener && _type === 'propertychange') {
			_type = 'input';
		} else if (!__isW3cListener && _type === 'input') {
			_type = 'propertychange';
		}
		return _type;
	};
	var __addEvent, __delEvent;
	if (__isW3cListener) {
		__addEvent = function(_element, _type, _handler, _capture) {
			_element.addEventListener(_type, _handler, !! _capture);
		};
		__delEvent = function(_element, _type, _handler, _capture) {
			_element.removeEventListener(_type, _handler, !! _capture);
		};
	} else {
		__addEvent = function(_element, _type, _handler) {
			_element.attachEvent('on' + _type, _handler);
		};
		__delEvent = function(_element, _type, _handler) {
			_element.detachEvent('on' + _type, _handler);
		};
	}
	P('V');
	V.__destroy = __clearEventsInCache;
	V._$getElement = function(_event) {
		if (!_event) return null;
		var _element = _event.target || _event.srcElement;
		if (!arguments[1] || !U._$isType(arguments[1], 'function')) return _element;
		while (_element) {
			if ( !! arguments[1](_element)) return _element;
			_element = _element.parentNode;
		}
		return null;
	};
	V._$addEvent = function(_element, _type, _handler, _capture) {
		_element = E._$getElement(_element);
		if (!_element || !_type || !_handler) return;
		if (__isOnReadyStateChange(_element, _type)) {
			_type = 'readystatechange';
			_handler = __onReadyStateChange._$bind(null, _handler);
		}
		_type = __rectifyEventType(_type);
		__addEvent(_element, _type, _handler, _capture);
		__cacheEvent(_element, _type, _handler);
	};
	V._$batchEvent = function(_elements, _mode, _type, _handler, _capture) {
		var _function;
		switch (_mode) {
		case 'add':
			_function = V._$addEvent;
			break;
		case 'del':
			_function = V._$delEvent;
			break;
		case 'clear':
			_function = V._$clearEvent;
			break;
		}
		for (var e; e = _elements.pop();
		_function(e, _type, _handler, _capture));
	};
	V._$delEvent = function(_element, _type, _handler, _capture) {
		_element = E._$getElement(_element);
		if (!_element || !_type || !_handler) return;
		__delEvent(_element, _type, _handler, _capture);
	};
	V._$clearEvent = function(_element, _type) {
		_element = E._$getElement(_element);
		if (!_element) return;
		_type = __rectifyEventType(_type);
		if (__isOnReadyStateChange(_element, _type)) {
			_type = 'readystatechange';
		}
		__clearEventInCache(_element[__akey], _type);
	};
	V._$dispatchEvent = function(_element, _type) {
		_element = E._$getElement(_element);
		if (!_element) return;
		if ( !! document.createEvent) {
			var _event = document.createEvent('MouseEvent');
			_event.initEvent(_type, false, false);
			_element.dispatchEvent(_event);
		} else if ( !! document.createEventObject) {
			_element.fireEvent('on' + _type, arguments[2] || window.event || document.createEventObject());
		}
	};
	V._$stop = function(_event) {
		V._$stopBubble(_event);
		V._$stopDefault(_event);
	};
	V._$stopBubble = function(_event) {
		if (!_event) return; !! _event.stopPropagation ? _event.stopPropagation() : _event.cancelBubble = true;
	};
	V._$stopDefault = function(_event) {
		if (!_event) return; !! _event.preventDefault ? _event.preventDefault() : _event.returnValue = false;
	};
	V._$pointerX = function(_event) {
		if (!_event) return 0;
		return _event.pageX || (_event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
	};
	V._$pointerY = function(_event) {
		if (!_event) return 0;
		return _event.pageY || (_event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
	};
})(this, document);




