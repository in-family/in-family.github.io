(function() {
	var p = P('np.m'),
		__pro, __spro, __fpro, __easeOut;
	__easeOut = function(t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	};
	p._$$SlideTrans = C(), __pro = p._$$SlideTrans.prototype;
	__pro._$initialize = function(_options) {
		_options = _options || {};
		this.__node = E._$getElement(_options.node);
		this.__count = _options.count || 1;
		this.__space = _options.space / this.__count;
		this.__duration = _options.duration || 50;
		this.__interval = _options.interval || 10;
		this.__timegap = _options.timegap || 1000;
		this.__auto = !! _options.auto;
		this.__direct = !! _options.vertical ? 'scrollTop' : 'scrollLeft';
		this.__index = 0;
		this.__onMove = _options.onMove || F;
	};
	__pro._$run = function(_index) {
		var _count = this.__count;
		typeof _index == 'undefined' && (_index = this.__index);
		_index < 0 && (_index = _count - 1) || _index >= _count && (_index = 0);
		this.__time = 0;
		this.__index = _index;
		this.__originValue = this.__node[this.__direct];
		this.__targetValue = _index * this.__space;
		this.__diffValue = this.__targetValue - this.__originValue;
		this.__slide();
		this.__onMove(_index, _count);
	};
	__pro._$runNext = function() {
		this._$run(++this.__index);
	};
	__pro._$runPrev = function() {
		this._$run(--this.__index);
	};
	__pro.__slide = function() {
		window.clearTimeout(this.__timer);
		if (this.__diffValue && this.__time < this.__duration) {
			var _val = Math.round(__easeOut(this.__time++, this.__originValue, this.__diffValue, this.__duration));
			this.__slideTo(_val);
			this.__timer = window.setTimeout(this.__slide._$bind(this), this.__interval)
		} else {
			this.__slideTo(this.__targetValue);
			this.__auto && (this.__timer = window.setTimeout(this._$runNext._$bind(this), this.__timegap));
		}
	};
	__pro.__slideTo = function(_value) {
		this.__node[this.__direct] = _value;
	};
	p._$$SlideController = C(), __spro = p._$$SlideController.prototype;
	__spro._$initialize = function(_options) {
		this.__nodes = _options.nodes;
		this.__delay = _options.delay || 100;
		this.__class = _options.className || '';
		this.__onhover = _options.hover || F;
		this.__bind();
	};
	__spro.__bind = function() {
		for (var i = 0, l = this.__nodes.length; i < l; i++) {
			V._$addEvent(this.__nodes[i], 'mouseover', this.__onclick._$bind(this, i));
		}
	};
	__spro.__onclick = function(_index) {
		this.__clearClass()
		E._$addClassName(this.__nodes[_index], this.__class);
		this.__onhover(_index);
	};
	__spro.__onmouseout = function() {
		window.clearTimeout(this.__timer);
	};
	__spro.__clearClass = function() {
		for (var i = 0, l = this.__nodes.length; i < l; i++) {
			E._$delClassName(this.__nodes[i], this.__class);
		}
	};
	p._$$SliderFocus = C(), __fpro = p._$$SliderFocus.prototype;
	__fpro._$initialize = function(_options) {
		_options = _options || {};
		this.__node = E._$getElement(_options.node);
		this.__box = E._$getElement(_options.box);
		this.__children = this.__node.children;
		this.__count = this.__children.length;
		this.__interval = _options.interval || 10;
		this.__duration = _options.duration || 50;
		this.__offset = _options.offset;
	};
	__fpro._$run = function(_index) {
		var _count = this.__count;
		typeof _index == 'undefined' && (_index = 0);
		_index < 0 && (_index = _count - 1) || _index >= _count && (_index = 0);
		this.__originValue = parseInt(this.__box.style.left) || 0;
		this.__targetValue = this.__calPosition(this.__children[_index]);
		this.__diffValue = this.__targetValue - this.__originValue;
		this.__time = 0;
		this.__slide();
		gIndex = _index;
	}
	__fpro.__slide = function() {
		window.clearTimeout(this.__timer);
		if (this.__diffValue && this.__time < this.__duration) {
			var _val = Math.round(__easeOut(this.__time++, this.__originValue, this.__diffValue, this.__duration));
			this.__slideTo(_val);
			this.__timer = window.setTimeout(this.__slide._$bind(this), this.__interval)
		} else {
			this.__slideTo(this.__targetValue);
		}
	}
	__fpro.__slideTo = function(_value) {
		this.__box.style.left = _value + 'px';
	};
	__fpro.__calPosition = function(_child) {
		var pos1 = _child.getBoundingClientRect(),
			pos2 = this.__node.getBoundingClientRect();
		return pos1.left - pos2.left + this.__offset;
	};
})();





var _toutuTxt = E._$getElement('toutu-txt'),
	_toutus = E._$getElement('toutus').getElementsByTagName('img');
var slider = new np.m._$$SlideTrans({
	node: 'toutus',
	count: 4,
	space: 3920,
	duration: 50,
	interval: 10,
	timegap: 5000,
	auto: true,
	onMove: function(_index) {
		sliderx._$run(_index);
		if ( !! UD.visit_photo2_0) {
			_toutuTxt.innerText = _toutus[_index].alt;
		}
	}
});

new np.m._$$SlideController({
	nodes: E._$getElement('slider0').getElementsByTagName('li'),
	className: '',
	hover: function(_index) {
		slider._$run(_index);
	}
});

var sliderx = new np.m._$$SliderFocus({
	node: 'slider0',
	box: 'toutu-focusbox',
	offset: 12,
	duration: 50
});
slider._$run();

var _ttLeftControl = E._$getElement('slide-ico-l'),
	_ttRightControl = E._$getElement('slide-ico-r');
if (B._$ISOLDIE) {
	E._$hoverElement(_ttLeftControl, 'slider-ico-hover');
	E._$hoverElement(_ttRightControl, 'slider-ico-hover');
	var _recomList = E._$getChildElements('recom-list');
	for (var i = 0, l = _recomList.length; i < l; i++) {
		if (_recomList[i].className.indexOf('w-rec-class') === -1) {
			E._$hoverElement(_recomList[i], 'w-rec-hover');
		} else {
			E._$hoverElement(_recomList[i], 'w-rec-class-hover');
		}
	}
}
_ttLeftControl.onclick = function() {
	slider._$runPrev();
}
_ttRightControl.onclick = function() {
	slider._$runNext();
}
_ttLeftControl.onmousedown = function() {
	E._$addClassName(this, 'click');
}
_ttLeftControl.onmouseup = function() {
	E._$delClassName(this, 'click');
}
_ttRightControl.onmousedown = function() {
	E._$addClassName(this, 'click');
}
_ttRightControl.onmouseup = function() {
	E._$delClassName(this, 'click');
}

