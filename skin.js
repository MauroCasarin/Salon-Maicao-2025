// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: Sponsors botones Buck UP.ggsk
// Generated 2025-05-06T09:17:36

function pano2vrSkin(player,base) {
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('opt_autohide', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_loader', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(255,255,255,0.313725);';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 55px;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 377px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 19px;';
		hs+='border-radius : 19px;';
		hs+='background : rgba(204,204,204,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 13px;';
		hs+='cursor : default;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.49999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 341px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._but_sedal=document.createElement('div');
		els=me._but_sedal__img=document.createElement('img');
		els.className='ggskin ggskin_but_sedal';
		hs=basePath + 'images/but_sedal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','Stand SEDAL');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="But SEDAL";
		el.ggDx=-76;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 59px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._but_sedal.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._but_sedal.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._but_sedal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._but_sedal);
		el=me._but_loreal=document.createElement('div');
		els=me._but_loreal__img=document.createElement('img');
		els.className='ggskin ggskin_but_loreal';
		hs=basePath + 'images/but_loreal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('alt','Stand LOREAL');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="But LOREAL";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 55px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._but_loreal.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._but_loreal.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._but_loreal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._but_loreal);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs=basePath + 'images/button_10.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 10";
		el.ggDx=65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 56px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_10);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs=basePath + 'images/button_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDx=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 53px;';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs=basePath + 'images/button_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggDx=104;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 57px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs=basePath + 'images/button_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggDx=157;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 70px;';
		hs+='cursor : pointer;';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs=basePath + 'images/button_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 4";
		el.ggDx=-165;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 55px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_4);
		el=me._button_5=document.createElement('div');
		els=me._button_5__img=document.createElement('img');
		els.className='ggskin ggskin_button_5';
		hs=basePath + 'images/button_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 5";
		el.ggDx=-120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 58px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_5.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._button_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_5);
		el=me._button_6=document.createElement('div');
		els=me._button_6__img=document.createElement('img');
		els.className='ggskin ggskin_button_6';
		hs=basePath + 'images/button_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 6";
		el.ggDx=140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 17px;';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_6.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._button_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_6);
		el=me._button_7=document.createElement('div');
		els=me._button_7__img=document.createElement('img');
		els.className='ggskin ggskin_button_7';
		hs=basePath + 'images/button_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 7";
		el.ggDx=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 17px;';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_7.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._button_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_7);
		el=me._button_8=document.createElement('div');
		els=me._button_8__img=document.createElement('img');
		els.className='ggskin ggskin_button_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 8";
		el.ggDx=49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 17px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_8.onmouseout=function (e) {
			me.elementMouseDown['button_8']=false;
		}
		me._button_8.onmousedown=function (e) {
			me.elementMouseDown['button_8']=true;
		}
		me._button_8.onmouseup=function (e) {
			me.elementMouseDown['button_8']=false;
		}
		me._button_8.ontouchend=function (e) {
			me.elementMouseDown['button_8']=false;
		}
		me._button_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_8);
		el=me._button_9=document.createElement('div');
		els=me._button_9__img=document.createElement('img');
		els.className='ggskin ggskin_button_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 9";
		el.ggDx=-49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 17px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_9.onmouseout=function (e) {
			me.elementMouseDown['button_9']=false;
		}
		me._button_9.onmousedown=function (e) {
			me.elementMouseDown['button_9']=true;
		}
		me._button_9.onmouseup=function (e) {
			me.elementMouseDown['button_9']=false;
		}
		me._button_9.ontouchend=function (e) {
			me.elementMouseDown['button_9']=false;
		}
		me._button_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_9);
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzU2NiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaH'+
			'R0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeT0iMHB4IiB2aWV3Qm94PSItMzU2NiAtMjYwNiAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgdmVyc2lvbj0iMS4xIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSIvPgogPGcgaWQ9IkxheWVy'+
			'XzIiPgogIDxnPgogICA8Zz4KICAgIDxjaXJjbGUgb3BhY2l0eT0iMC40IiByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NTkuMzMzIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8Y2lyY2xlIHI9IjIuNzYiIGN5PSItMjU5MC4zNzYiIGN4PSItMzU1OS4zMzMiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxjaXJjbGUgcj0iMi43NiIgY3k9Ii0yNTkwLjM3NiIgY3g9Ii0zNTU5LjMzMyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogIC'+
			'A8L2c+CiAgIDxnPgogICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIHI9IjIuNzYiIGN5PSItMjU5MC4zNzYiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIGN4PSItMzU0MC42NjciIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxjaXJjbGUgcj0iMi43NiIgY3k9Ii0yNTkwLjM3NiIgY3g9Ii0zNTQwLjY2NyIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBjeD0iLTM1NDAuNjY3IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4K'+
			'ICA8L2c+CiAgPGc+CiAgIDxjaXJjbGUgb3BhY2l0eT0iMC40IiByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NTAiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBjeD0iLTM1NTAiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSByPSIyLjc2IiBjeT0iLTI1OTAuMzc2IiBjeD0iLTM1NTAiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzU2NiAtMjU3MS4zMzMgMzIgMzIiIHhtbG5zOn'+
			'g9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHk9IjBweCIgdmlld0JveD0iLTM1NjYgLTI1NzEuMzMzIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIi8+CiA8ZyBp'+
			'ZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NjAuMjY2IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8Y2lyY2xlIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBjeD0iLTM1NjAuMjY2IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8Y2lyY2xlIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBjeD0iLTM1NjAuMjY2IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD'+
			'0iMC4yIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8Y2lyY2xlIG9wYWNpdHk9IjAuNCIgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIGN4PSItMzUzOS43MzMiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIGN4PSItMzUzOS43MzMiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIGN4PSItMzUzOS43MzMiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIw'+
			'LjIiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIHI9IjMuMDM2IiBjeT0iLTI1NTUuNzA5IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NTAiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPGNpcmNsZSByPSIzLjAzNiIgY3k9Ii0yNTU1LjcwOSIgY3g9Ii0zNTUwIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxjaXJjbGUgcj0iMy4wMzYiIGN5PSItMjU1NS43MDkiIGN4PSItMzU1MCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIvPgogIDwvZz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggDx=-109;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 953px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._show_controller_button.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._show_controller_button.style[domTransition]='left 0s, bottom 0s';
				if (me._show_controller_button.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._show_controller_button.style.bottom='-100px';
					me._show_controller_button.ggUpdatePosition(true);
				}
				else {
					me._show_controller_button.ggDx=-109;
					me._show_controller_button.style.bottom='953px';
					me._show_controller_button.ggUpdatePosition(true);
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
			me.elementMouseOver['show_controller_button']=true;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ontouchend=function (e) {
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='0';
			me._show_controller_button.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='1';
			me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_timer);
		el=me._tt_show_controller=document.createElement('div');
		els=me._tt_show_controller__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_show_controller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : -44px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Controller";
		el.appendChild(els);
		me._tt_show_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_show_controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_show_controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_show_controller.style[domTransition]='right 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStatePosition == 0) {
					me._tt_show_controller.style.right='0px';
					me._tt_show_controller.style.top='-25px';
				}
				else {
					me._tt_show_controller.style.right='-44px';
					me._tt_show_controller.style.top='32px';
				}
			}
		}
		me._tt_show_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['show_controller_button'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_show_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_show_controller.style[domTransition]='right 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStateVisible == 0) {
					me._tt_show_controller.style.visibility=(Number(me._tt_show_controller.style.opacity)>0||!me._tt_show_controller.style.opacity)?'inherit':'hidden';
					me._tt_show_controller.ggVisible=true;
				}
				else {
					me._tt_show_controller.style.visibility="hidden";
					me._tt_show_controller.ggVisible=false;
				}
			}
		}
		me._tt_show_controller.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._tt_show_controller);
		me.divSkin.appendChild(me._show_controller_button);
		el=me._loading_multires=document.createElement('div');
		els=me._loading_multires__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOCAzNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI2cHgiIGhlaWdodD0iN3B4IiB2ZXJzaW9uPSIxLjAiPgogPGc+CiAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIHI9IjE3LjUiIGN5PSIxNy41IiBjeD0iMTcuNSIgZmlsbD0iI2ZmNTVmZiIvPg'+
			'ogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGtleVRpbWVzPSIwOzAuMTY3OzAuNTswLjY2ODsxIiBiZWdpbj0iMHMiIGR1cj0iNjAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjAuMzsxOzE7MC4zOzAuMyIvPgogPC9nPgogPGc+CiAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIHI9IjE3LjUiIGN5PSIxNy41IiBjeD0iMTEwLjUiIGZpbGw9IiNmZjU1ZmYiLz4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBrZXlUaW1lcz0iMDswLjMzNDswLjU7MC44MzU7MSIgYmVnaW49IjBzIiBkdXI9IjYwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0'+
			'ZSIgdmFsdWVzPSIwLjM7MC4zOzE7MTswLjMiLz4KIDwvZz4KIDxnPgogIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiByPSIxNy41IiBjeT0iMTcuNSIgY3g9IjY0IiBmaWxsPSIjZmY1NWZmIi8+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIga2V5VGltZXM9IjA7MC4xNjc7MC4zMzQ7MC42Njg7MC44MzU7MSIgYmVnaW49IjBzIiBkdXI9IjYwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwLjM7MC4zOzE7MTswLjM7MC4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._loading_multires__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_multires";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 7px;';
		hs+='position : absolute;';
		hs+='right : 226px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_multires.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_multires.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTileLoading() == true)) && 
				((player.getVariableValue('opt_loader_mulires') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading_multires.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading_multires.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading_multires.style[domTransition]='';
				if (me._loading_multires.ggCurrentLogicStateVisible == 0) {
					me._loading_multires.style.visibility=(Number(me._loading_multires.style.opacity)>0||!me._loading_multires.style.opacity)?'inherit':'hidden';
					me._loading_multires.ggVisible=true;
				}
				else {
					me._loading_multires.style.visibility="hidden";
					me._loading_multires.ggVisible=false;
				}
			}
		}
		me._loading_multires.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loading_multires);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_8']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['button_9']) {
			player.changeFovLog(-1,true);
		}
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='0';
				me._show_controller_button.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
			} else {
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='1';
				me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._loading_multires.logicBlock_visible();
	me._show_controller_button.logicBlock_position();
	me._tt_show_controller.logicBlock_position();
	player.addListener('tilesready', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('tilesrequested', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._show_controller_button.logicBlock_position();me._loading_multires.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('hastouch', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('varchanged_vis_website', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._show_controller_button.logicBlock_position(); });
	player.addListener('varchanged_opt_loader_mulires', function(args) { me._loading_multires.logicBlock_visible(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 66:
					me._button_1.onclick.call(me._button_1);
					break;
				case 67:
					me._button_5.onclick.call(me._button_5);
					break;
				case 68:
					me._button_3.onclick.call(me._button_3);
					break;
				case 76:
					me._but_loreal.onclick.call(me._but_loreal);
					break;
				case 77:
					me._button_4.onclick.call(me._button_4);
					break;
				case 78:
					me._button_2.onclick.call(me._button_2);
					break;
				case 83:
					me._but_sedal.onclick.call(me._but_sedal);
					break;
			}
		}
	});
	me.skinTimerEvent();
};