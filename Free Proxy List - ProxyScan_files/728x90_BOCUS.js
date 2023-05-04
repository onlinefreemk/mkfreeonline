(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,36);


(lib.fond = function() {
	this.initialize(img.fond);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.hashtags = function() {
	this.initialize(img.hashtags);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.logobocuse = function() {
	this.initialize(img.logobocuse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logolyfe = function() {
	this.initialize(img.logolyfe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.visuel = function() {
	this.initialize(img.visuel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.visuel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.visuel();
	this.instance.setTransform(-370,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.visuel_1, new cjs.Rectangle(-370,-125,370,250), null);


(lib.logolyfe_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.logolyfe();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logolyfe_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.logobocuse_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.logobocuse();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logobocuse_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.hashtags_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.hashtags();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hashtags_1, new cjs.Rectangle(-364,-45,728,90), null);


(lib.fond_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.fond();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fond_1, new cjs.Rectangle(-364,-45,728,90), null);


(lib.devient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBrIAAjAIg/AAIAAgVICWAAIAAAVIg+AAIAADAg");
	this.shape.setTransform(51.85,2.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBrIhri3IAAC3IgYAAIAAjVIAhAAIBnCwIAAiwIAaAAIAADVg");
	this.shape_1.setTransform(32.6,2.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABrIAAjVIB8AAIAAAVIhiAAIAABJIBPAAIAAAUIhPAAIAABOIBnAAIAAAVg");
	this.shape_2.setTransform(13.975,2.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBrIAAjVIAZAAIAADVg");
	this.shape_3.setTransform(0.6,2.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBrIhJjVIAaAAIA/C8IBAi8IAYAAIhKDVg");
	this.shape_4.setTransform(-13.3,2.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABrIAAjVIB8AAIAAAVIhiAAIAABJIBPAAIAAAUIhPAAIAABOIBnAAIAAAVg");
	this.shape_5.setTransform(-30.875,2.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSBrIAAjVIA5AAQAkAAAYAOQAYANAMAYQAMAYAAAeIAAACQAAAegMAYQgMAYgYAOQgYAOglAAgAg4BWIAeAAQAaAAATgLQASgKAJgTQAKgTAAgbIAAgBQAAgZgJgTQgIgTgTgKQgSgLgdAAIgdAAg");
	this.shape_6.setTransform(-50.025,2.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.devient, new cjs.Rectangle(-63,-22,126,44), null);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CTA();
	this.instance.setTransform(-78,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-78,-18,156,36), null);


(lib.cadre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cadre, new cjs.Rectangle(-151,-126,302,252), null);


(lib.applat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF0028").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.applat, new cjs.Rectangle(-150,-125,300,250), null);


// stage content:
(lib._728x90_BOCUS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cadre
	this.instance = new lib.cadre();
	this.instance.setTransform(364,45,2.4267,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(523));

	// applat2
	this.instance_1 = new lib.applat();
	this.instance_1.setTransform(-364,45,2.4267,0.36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(251).to({_off:false},0).to({x:364},10,cjs.Ease.quartOut).to({regX:7.5,scaleX:0.0067,scaleY:1,x:740.05,y:125},10,cjs.Ease.quartInOut).to({_off:true},1).wait(251));

	// CTA
	this.instance_2 = new lib.CTA_1();
	this.instance_2.setTransform(820,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).to({x:620},9,cjs.Ease.backInOut).wait(10).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).wait(9).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).wait(10).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).to({_off:true},17).wait(176).to({_off:false,x:820},0).to({x:620},9,cjs.Ease.backInOut).wait(10).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).wait(9).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).wait(10).to({regX:0.1,regY:0.1,scaleX:1.0897,scaleY:1.0875,x:620.1,y:45.1},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:620,y:45},5,cjs.Ease.cubicInOut).wait(18));

	// hashtags
	this.instance_3 = new lib.hashtags_1();
	this.instance_3.setTransform(264.1,45.1,1,1.0002,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({x:332.1,alpha:1},10,cjs.Ease.quintInOut).to({_off:true},107).wait(144).to({_off:false,x:264.1,alpha:0},0).to({x:332.1,alpha:1},10,cjs.Ease.quintInOut).wait(108));

	// logo-lyfe
	this.instance_4 = new lib.logolyfe_1();
	this.instance_4.setTransform(121,45,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).to({x:205,alpha:1},10,cjs.Ease.quartInOut).wait(41).to({x:73},11,cjs.Ease.backInOut).wait(63).to({_off:true},69).wait(67).to({_off:false,x:121,alpha:0},0).to({x:205,alpha:1},10,cjs.Ease.quartInOut).wait(41).to({x:73},11,cjs.Ease.backInOut).wait(133));

	// devient
	this.instance_5 = new lib.devient();
	this.instance_5.setTransform(-49.95,45.1,0.5001,0.5001,0,0,0,0.1,0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).to({regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:83,y:45},10,cjs.Ease.quintInOut).wait(43).to({x:-49},11,cjs.Ease.backInOut).wait(40).to({_off:true},1).wait(156).to({_off:false,regX:0.1,regY:0.2,scaleX:0.5001,scaleY:0.5001,x:-49.95,y:45.1},0).to({regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:83,y:45},10,cjs.Ease.quintInOut).wait(43).to({x:-49},11,cjs.Ease.backInOut).wait(40).to({_off:true},1).wait(92));

	// logo-bocuse
	this.instance_6 = new lib.logobocuse_1();
	this.instance_6.setTransform(150,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({x:-108},12,cjs.Ease.backInOut).to({_off:true},1).wait(195).to({_off:false,x:150},0).wait(53).to({x:-108},12,cjs.Ease.backInOut).to({_off:true},1).wait(196));

	// fond
	this.instance_7 = new lib.fond_1();
	this.instance_7.setTransform(179,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({x:364},11,cjs.Ease.quintInOut).wait(86).to({x:179},0).wait(164).to({x:364},11,cjs.Ease.quintInOut).wait(87));

	// visuel
	this.instance_8 = new lib.visuel_1();
	this.instance_8.setTransform(820.5,125,0.5,0.5,0,0,0,185,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:90},175).to({_off:true},1).wait(85).to({_off:false,y:125},0).to({y:90},175).to({_off:true},1).wait(86));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-35,1281.7,285);
// library properties:
lib.properties = {
	id: '6D46A6D2FF56354BAC407F2E3F4C782A',
	width: 728,
	height: 90,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"CTA.png", id:"CTA"},
		{src:"fond.jpg", id:"fond"},
		{src:"hashtags.png", id:"hashtags"},
		{src:"logobocuse.png", id:"logobocuse"},
		{src:"logolyfe.png", id:"logolyfe"},
		{src:"visuel.jpg", id:"visuel"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6D46A6D2FF56354BAC407F2E3F4C782A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;