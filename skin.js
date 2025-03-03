// Garden Gnome Software - Skin
// Pano2VR 7.1.7/20981
// Filename: BrooklynBridgeMaqueteInteligente.ggsk
// Generated 2025-02-20T00:01:54

function pano2vrSkin(player,base) {
	player.addVariable('BASICO', 2, false, { ignoreInState: 0  });
	player.addVariable('Alpha1', 2, false, { ignoreInState: 0  });
	player.addVariable('Alpha2', 2, false, { ignoreInState: 0  });
	player.addVariable('Alpha3', 2, false, { ignoreInState: 0  });
	player.addVariable('Node1', 2, false, { ignoreInState: 0  });
	player.addVariable('PADRAO', 2, false, { ignoreInState: 0  });
	player.addVariable('PREMIUM', 2, false, { ignoreInState: 0  });
	player.addVariable('var_hs', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('VideoPadrao', 2, false, { ignoreInState: 0  });
	player.addVariable('Opcao2', 2, false, { ignoreInState: 0  });
	player.addVariable('Opcao1', 2, false, { ignoreInState: 0  });
	player.addVariable('category_visible', 2, false, { ignoreInState: 1  });
	player.addVariable('node_visible', 2, false, { ignoreInState: 0  });
	player.addVariable('Menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('Imagem1', 2, false, { ignoreInState: 0  });
	player.addVariable('Filme3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup_1', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('MAQUETE', 2, true, { ignoreInState: 0  });
	player.addVariable('Som1', 2, false, { ignoreInState: 0  });
	player.addVariable('indicativo', 2, false, { ignoreInState: 0  });
	player.addVariable('EventosLigados', 2, true, { ignoreInState: 0  });
	player.addVariable('Timer', 1, 0, { ignoreInState: 0  });
	player.addVariable('Corretora', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL12', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL3AB', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL5B', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL5A', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL3A', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL4A', 2, false, { ignoreInState: 0  });
	player.addVariable('FINAL6AB', 2, false, { ignoreInState: 0  });
	player.addVariable('UNIDADES', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta84', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta74', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta67', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta65', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta58', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta45', 2, false, { ignoreInState: 0  });
	player.addVariable('Planta44', 2, false, { ignoreInState: 0  });
	player.addVariable('ITE', 2, false, { ignoreInState: 0  });
	player.addVariable('IACC', 2, false, { ignoreInState: 0  });
	player.addVariable('IACU', 2, false, { ignoreInState: 0  });
	player.addVariable('IHU', 2, false, { ignoreInState: 0  });
	player.addVariable('IEL', 2, false, { ignoreInState: 0  });
	player.addVariable('IG', 2, false, { ignoreInState: 0  });
	player.addVariable('IEC', 2, false, { ignoreInState: 0  });
	player.addVariable('IEU', 2, false, { ignoreInState: 0  });
	player.addVariable('ISC', 2, false, { ignoreInState: 0  });
	player.addVariable('IGS', 2, false, { ignoreInState: 0  });
	player.addVariable('IP', 2, false, { ignoreInState: 0  });
	player.addVariable('IPD', 2, false, { ignoreInState: 0  });
	player.addVariable('IPRD', 2, false, { ignoreInState: 0  });
	player.addVariable('UN', 2, false, { ignoreInState: 0  });
	player.addVariable('TECI', 2, false, { ignoreInState: 0  });
	player.addVariable('B1', 2, false, { ignoreInState: 0  });
	player.addVariable('IMP', 2, false, { ignoreInState: 0  });
	player.addVariable('TEC', 2, false, { ignoreInState: 0  });
	player.addVariable('VEN', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('kb_accessibility', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu_left', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu_right', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_auto_rot', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
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
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
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
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
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
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_share') == false)) && 
				((player.getVariableValue('vis_phone_languages') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_opt_back_available = {};
		me._variable_opt_back_available.ggCurrentLogicState = -1;
		me._variable_opt_back_available.logicBlock = function() {
			var newLogicState_opt_back_available;
			if (
				((player.getVariableValue('opt_back') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicState_opt_back_available = 0;
			}
			else {
				newLogicState_opt_back_available = -1;
			}
			if (me._variable_opt_back_available.ggCurrentLogicState != newLogicState_opt_back_available) {
				me._variable_opt_back_available.ggCurrentLogicState = newLogicState_opt_back_available;
				if (me._variable_opt_back_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_back_available', true);
				}
				else {
					player.setVariableValue('opt_back_available', false);
				}
			}
		}
		me._variable_opt_info_available = {};
		me._variable_opt_info_available.ggCurrentLogicState = -1;
		me._variable_opt_info_available.logicBlock = function() {
			var newLogicState_opt_info_available;
			if (
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicState_opt_info_available = 0;
			}
			else {
				newLogicState_opt_info_available = -1;
			}
			if (me._variable_opt_info_available.ggCurrentLogicState != newLogicState_opt_info_available) {
				me._variable_opt_info_available.ggCurrentLogicState = newLogicState_opt_info_available;
				if (me._variable_opt_info_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_info_available', true);
				}
				else {
					player.setVariableValue('opt_info_available', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._video_screentint_file=document.createElement('div');
		el.ggId="video_screentint_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_file.style.transition='';
				if (me._video_screentint_file.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_file.style.visibility=(Number(me._video_screentint_file.style.opacity)>0||!me._video_screentint_file.style.opacity)?'inherit':'hidden';
					me._video_screentint_file.ggVisible=true;
				}
				else {
					me._video_screentint_file.style.visibility="hidden";
					me._video_screentint_file.ggVisible=false;
				}
			}
		}
		me._video_screentint_file.logicBlock_visible();
		me._video_screentint_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_screentint_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_file);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 6%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style.transition='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.logicBlock_visible();
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IndoaXRlIiB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBkdXI9IjFzIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMD'+
			'szOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_file.ggIsActive=function() {
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
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_file.ggVideoNotLoaded == false && me._popup_video_file.ggDeactivate && player.isPlaying('popup_video_file')) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('disablepictureinpicture', 'true');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			player.changeVolume('popup_video_file', 0.0);
			notifySeekbars();
			if (me._popup_video_file.ggActivate) {
				me._popup_video_file__vid.addEventListener('play', me._popup_video_file.ggActivate);
			}
			if (me._popup_video_file.ggDeactivate) {
				me._popup_video_file__vid.addEventListener('ended', me._popup_video_file.ggDeactivate);
				me._popup_video_file__vid.addEventListener('pause', me._popup_video_file.ggDeactivate);
			}
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style.transition='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.logicBlock_visible();
		me._popup_video_file.ggDeactivate=function () {
				player.playSound("Audio1","100");
				player.playSound("Audio2","100");
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 326px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((284px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style.transition='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.logicBlock_visible();
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		me._seekbar_file.ggMediaId = 'popup_video_file';
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_file.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_file.mediaEl != null) {
					if (e.target == me._seekbar_file) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_file.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_file || e.target == me._seekbar_file__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_file.onmousedown = me._seekbar_file.ontouchstart = me._seekbar_file.mouseTouchHandling;
		me._seekbar_file.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#000000';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject(me._seekbar_file.ggMediaId);
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_file.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,1) ' + currPos + '%, rgba(0,0,0,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7px;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTUwLjUsMzk4LjZsLTM4LjEsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42ICAgQy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5MSwzNzBjMC0xLjUsMS0y'+
			'LjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDcuOCwzOTguOGwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjYgICBDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTkyLjgsMzY3'+
			'YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
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
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseenter=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_play_file']=true;
		}
		me._ht_video_play_file.onmouseleave=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_play_file']=false;
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTc3LjcsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM2gtMTQuM2MtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDE0LjMgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMs'+
			'MC0yLjMtMS0yLjMtMi4zdi0zOC42ICAgYzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiAgICBDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNT'+
			'UuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYgICAgQy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNzgsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjkgICBjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0x'+
			'NS45ICAgYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNDIuOSAgICBDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cG'+
			'F0aCBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45ICAgIEMtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
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
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseenter=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_pause_file']=true;
		}
		me._ht_video_pause_file.onmouseleave=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_pause_file']=false;
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_close_file=document.createElement('div');
		els=me._video_popup_close_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_popup_close_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_popup_close_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_close_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_file.style.transition='';
				if (me._video_popup_close_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_file.style.visibility=(Number(me._video_popup_close_file.style.opacity)>0||!me._video_popup_close_file.style.opacity)?'inherit':'hidden';
					me._video_popup_close_file.ggVisible=true;
				}
				else {
					me._video_popup_close_file.style.visibility="hidden";
					me._video_popup_close_file.ggVisible=false;
				}
			}
		}
		me._video_popup_close_file.logicBlock_visible();
		me._video_popup_close_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_popup_close_file.onmouseenter=function (e) {
			me._video_popup_close_file__img.style.visibility='hidden';
			me._video_popup_close_file__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_close_file']=true;
		}
		me._video_popup_close_file.onmouseleave=function (e) {
			me._video_popup_close_file__img.style.visibility='inherit';
			me._video_popup_close_file__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_close_file']=false;
		}
		me._video_popup_close_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_popup_close_file);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style.transition='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.logicBlock_visible();
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=250;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('var_hs', player.getVariableValue('var_hs') + Number("1"));
			player.setVariableValue('var_hs', player.getVariableValue('var_hs') % Number("4"));
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 7.17%;';
		hs+='position : absolute;';
		hs+='top : -0.26%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style.transition='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.logicBlock_visible();
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup_1', false);
				me._info_title0.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_title0.ggUpdateText();
			me._info_title0.ggTextDiv.scrollTop = 0;
				me._info_text_body0.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_text_body0.ggUpdateText();
			me._info_text_body0.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 0px) / 2) - 20%);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style.transition='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_visible();
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._information_bg0=document.createElement('div');
		el.ggId="information_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information_bg0.ggIsActive=function() {
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
		me._information_bg0.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._information_bg0);
		el=me._info_text_body0=document.createElement('div');
		els=me._info_text_body0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body0.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body0.ggUpdateText();
		el.appendChild(els);
		me._info_text_body0.ggIsActive=function() {
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
		me._info_text_body0.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body0);
		el=me._info_title0=document.createElement('div');
		els=me._info_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title0.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title0.ggUpdateText();
		el.appendChild(els);
		me._info_title0.ggIsActive=function() {
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
		me._info_title0.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title0);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close.ggIsActive=function() {
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
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup_1', false);
				me._info_title0.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_title0.ggUpdateText();
			me._info_title0.ggTextDiv.scrollTop = 0;
				me._info_text_body0.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_text_body0.ggUpdateText();
			me._info_text_body0.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseenter=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_popup_close']=true;
		}
		me._info_popup_close.onmouseleave=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_popup_close']=false;
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._iconespadro=document.createElement('div');
		el.ggId="Icones-Padr\xe3o";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 1px);';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iconespadro.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iconespadro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Opcao2') == true)) && 
				((player.getVariableValue('Node1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Menu') == true)) && 
				((player.getVariableValue('Node1') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._iconespadro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._iconespadro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._iconespadro.style.transition='opacity 0s';
				if (me._iconespadro.ggCurrentLogicStateVisible == 0) {
					me._iconespadro.style.visibility=(Number(me._iconespadro.style.opacity)>0||!me._iconespadro.style.opacity)?'inherit':'hidden';
					me._iconespadro.ggVisible=true;
				}
				else if (me._iconespadro.ggCurrentLogicStateVisible == 1) {
					me._iconespadro.style.visibility=(Number(me._iconespadro.style.opacity)>0||!me._iconespadro.style.opacity)?'inherit':'hidden';
					me._iconespadro.ggVisible=true;
				}
				else {
					me._iconespadro.style.visibility="hidden";
					me._iconespadro.ggVisible=false;
				}
			}
		}
		me._iconespadro.logicBlock_visible();
		me._iconespadro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['iconespadro'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._iconespadro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._iconespadro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._iconespadro.style.transition='opacity 0s';
				if (me._iconespadro.ggCurrentLogicStateAlpha == 0) {
					me._iconespadro.style.visibility=me._iconespadro.ggVisible?'inherit':'hidden';
					me._iconespadro.style.opacity=1;
				}
				else {
					me._iconespadro.style.visibility=me._iconespadro.ggVisible?'inherit':'hidden';
					me._iconespadro.style.opacity=0.3;
				}
			}
		}
		me._iconespadro.logicBlock_alpha();
		me._iconespadro.onmouseenter=function (e) {
			me.elementMouseOver['iconespadro']=true;
			me._iconespadro.logicBlock_alpha();
		}
		me._iconespadro.onmouseleave=function (e) {
			me.elementMouseOver['iconespadro']=false;
			me._iconespadro.logicBlock_alpha();
		}
		me._iconespadro.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._iconespadro);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Menu') == true)) && 
				((player.getVariableValue('Node1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_background.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_background.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_background.style.transition='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateVisible == 0) {
					me._menu_background.style.visibility=(Number(me._menu_background.style.opacity)>0||!me._menu_background.style.opacity)?'inherit':'hidden';
					me._menu_background.ggVisible=true;
				}
				else {
					me._menu_background.style.visibility="hidden";
					me._menu_background.ggVisible=false;
				}
			}
		}
		me._menu_background.logicBlock_visible();
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style.transition='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.logicBlock_alpha();
		me._menu_background.onclick=function (e) {
				player.playSound("Audio1","100");
				player.playSound("Audio2","100");
				player.playSound("Audio3","100");
			if (
				(
					((me.ggUserdata.customnodeid == "Flores"))
				)
			) {
					player.stopSound("Audio1");
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._node_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._node_scroller.ggDragInertiaX *= 0.96;
				me._node_scroller.ggDragInertiaY *= 0.96;
				me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
				me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
				if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._node_scroller__content.onmouseup = null;
			me._node_scroller__content.onmousemove = null;
			me._node_scroller__content.ontouchend = null;
			me._node_scroller__content.ontouchmove = null;
			me._node_scroller__content.onpointerup = null;
			me._node_scroller__content.onpointermove = null;
			setTimeout(function() { me._node_scroller.ggIsDragging = false; }, 100);
		}
		me._node_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._node_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._node_scroller.ggDragStartY) > 10) me._node_scroller.ggIsDragging = true;
			var diffX = (eventX - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
			var diffY = (eventY - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
			me._node_scroller.ggDragInertiaX = -diffX;
			me._node_scroller.ggDragInertiaY = -diffY;
			me._node_scroller.ggDragLastX = eventX;
			me._node_scroller.ggDragLastY = eventY;
			me._node_scroller.ggScrollByX(-diffX);
			me._node_scroller.ggScrollByY(-diffY);
		}
		me._node_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = me._node_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = me._node_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.onmouseup = me._node_scroller__content.mousetouchend;
			me._node_scroller__content.ontouchend = me._node_scroller__content.mousetouchend;
			me._node_scroller__content.onmousemove = me._node_scroller__content.mousetouchmove;
			me._node_scroller__content.ontouchmove = me._node_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._node_scroller__content.mousetouchstart;
		els.ontouchstart = me._node_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._node_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 800px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 800px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.96;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.96;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_scroller.ggIsActive=function() {
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
		me._node_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true)) && 
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_scroller.style.transition='opacity 500ms ease 0ms';
				if (me._node_scroller.ggCurrentLogicStateAlpha == 0) {
					me._node_scroller.style.visibility=me._node_scroller.ggVisible?'inherit':'hidden';
					me._node_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._node_scroller.style.opacity == 0.0) { me._node_scroller.style.visibility="hidden"; } }, 505);
					me._node_scroller.style.opacity=0;
				}
			}
		}
		me._node_scroller.logicBlock_alpha();
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					skin.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
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
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._category_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._category_scroller.ggDragInertiaX *= 0.96;
				me._category_scroller.ggDragInertiaY *= 0.96;
				me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
				me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
				if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._category_scroller__content.onmouseup = null;
			me._category_scroller__content.onmousemove = null;
			me._category_scroller__content.ontouchend = null;
			me._category_scroller__content.ontouchmove = null;
			me._category_scroller__content.onpointerup = null;
			me._category_scroller__content.onpointermove = null;
			setTimeout(function() { me._category_scroller.ggIsDragging = false; }, 100);
		}
		me._category_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._category_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._category_scroller.ggDragStartY) > 10) me._category_scroller.ggIsDragging = true;
			var diffX = (eventX - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
			var diffY = (eventY - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
			me._category_scroller.ggDragInertiaX = -diffX;
			me._category_scroller.ggDragInertiaY = -diffY;
			me._category_scroller.ggDragLastX = eventX;
			me._category_scroller.ggDragLastY = eventY;
			me._category_scroller.ggScrollByX(-diffX);
			me._category_scroller.ggScrollByY(-diffY);
		}
		me._category_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = me._category_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = me._category_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.onmouseup = me._category_scroller__content.mousetouchend;
			me._category_scroller__content.ontouchend = me._category_scroller__content.mousetouchend;
			me._category_scroller__content.onmousemove = me._category_scroller__content.mousetouchmove;
			me._category_scroller__content.ontouchmove = me._category_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._category_scroller__content.mousetouchstart;
		els.ontouchstart = me._category_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._category_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.96;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.96;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(30 * me._category_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.96;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.96;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(30 * me._category_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_scroller.ggIsActive=function() {
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
		me._category_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('node_visible') == true)) || 
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._category_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._category_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._category_scroller.style.transition='opacity 500ms ease 0ms';
				if (me._category_scroller.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._category_scroller.style.opacity == 0.0) { me._category_scroller.style.visibility="hidden"; } }, 505);
					me._category_scroller.style.opacity=0;
				}
				else {
					me._category_scroller.style.visibility=me._category_scroller.ggVisible?'inherit':'hidden';
					me._category_scroller.style.opacity=1;
				}
			}
		}
		me._category_scroller.logicBlock_alpha();
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = contentWidth != 0 ? me._category_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					if (me._category_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
						me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
						me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					skin.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 37;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._category_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._category_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._category_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._category_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._category_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._category_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.ggNodeCount = me._category_cloner.ggNumFilterPassed;
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode && me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"",title:"All",description:""},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_cloner.ggIsActive=function() {
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
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
			me._category_cloner.ggUpdate();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB3aWR0aD0iMzJweCIgZmlsbC1vcGFjaXR5PSIxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIH'+
			'htbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Menu') == true)) && 
				((player.getVariableValue('Node1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_open.style.transition='opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateVisible == 0) {
					me._menu_open.style.visibility=(Number(me._menu_open.style.opacity)>0||!me._menu_open.style.opacity)?'inherit':'hidden';
					me._menu_open.ggVisible=true;
				}
				else {
					me._menu_open.style.visibility="hidden";
					me._menu_open.ggVisible=false;
				}
			}
		}
		me._menu_open.logicBlock_visible();
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style.transition='opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else if (me._menu_open.ggCurrentLogicStateAlpha == 1) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.6;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
			}
		}
		me._menu_open.logicBlock_alpha();
		me._menu_open.onclick=function (e) {
			if (
				(
					((player.getVariableValue('node_visible') == false))
				)
			) {
				player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
			}
			player.setVariableValue('node_visible', false);
		}
		me._menu_open.onmouseenter=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseleave=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._planta0=document.createElement('div');
		els=me._planta0__img=document.createElement('img');
		els.className='ggskin ggskin_planta0';
		hs=basePath + 'images/planta0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PLANTA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 417px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 484px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._planta0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._planta0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._planta0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._planta0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._planta0.style.transition='left 0s, top 0s, transform 0s';
				if (me._planta0.ggCurrentLogicStatePosition == 0) {
					me._planta0.style.left='-35px';
					me._planta0.style.top='70px';
				}
				else {
					me._planta0.style.left='11px';
					me._planta0.style.top='100px';
				}
			}
		}
		me._planta0.logicBlock_position();
		me._planta0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._planta0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._planta0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._planta0.style.transition='left 0s, top 0s, transform 0s';
				if (me._planta0.ggCurrentLogicStateScaling == 0) {
					me._planta0.ggParameter.sx = 0.7;
					me._planta0.ggParameter.sy = 0.7;
					me._planta0.style.transform=parameterToTransform(me._planta0.ggParameter);
					skin.updateSize(me._planta0);
				}
				else {
					me._planta0.ggParameter.sx = 1;
					me._planta0.ggParameter.sy = 1;
					me._planta0.style.transform=parameterToTransform(me._planta0.ggParameter);
					skin.updateSize(me._planta0);
				}
			}
		}
		me._planta0.logicBlock_scaling();
		me._planta0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Planta') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta0.style.transition='left 0s, top 0s, transform 0s';
				if (me._planta0.ggCurrentLogicStateVisible == 0) {
					me._planta0.style.visibility=(Number(me._planta0.style.opacity)>0||!me._planta0.style.opacity)?'inherit':'hidden';
					me._planta0.ggVisible=true;
				}
				else {
					me._planta0.style.visibility="hidden";
					me._planta0.ggVisible=false;
				}
			}
		}
		me._planta0.logicBlock_visible();
		me._planta0.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 3%;';
		hs+='height : 79.3367%;';
		hs+='left : 3%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 83.2727%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._map_1.ggIsActive=function() {
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
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._planta0.appendChild(me._map_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=-19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) - 19px);';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._(" ESCOLHER AMBIENTES NA PLANTA - CLICK NOS ICONES AZUEIS ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
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
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._planta0.appendChild(me._text_1);
		el=me._image_popup_close1=document.createElement('div');
		els=me._image_popup_close1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_popup_close1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_popup_close";
		el.ggDx=221;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 221px);';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close1.ggIsActive=function() {
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
		me._image_popup_close1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Planta') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close1.style.transition='';
				if (me._image_popup_close1.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close1.style.visibility=(Number(me._image_popup_close1.style.opacity)>0||!me._image_popup_close1.style.opacity)?'inherit':'hidden';
					me._image_popup_close1.ggVisible=true;
				}
				else {
					me._image_popup_close1.style.visibility="hidden";
					me._image_popup_close1.ggVisible=false;
				}
			}
		}
		me._image_popup_close1.logicBlock_visible();
		me._image_popup_close1.onclick=function (e) {
			me._planta0.style.transition='none';
			me._planta0.style.visibility='hidden';
			me._planta0.ggVisible=false;
			player.setVariableValue('Planta', false);
		}
		me._image_popup_close1.onmouseenter=function (e) {
			me._image_popup_close1__img.style.visibility='hidden';
			me._image_popup_close1__imgo.style.visibility='inherit';
			me.elementMouseOver['image_popup_close1']=true;
		}
		me._image_popup_close1.onmouseleave=function (e) {
			me._image_popup_close1__img.style.visibility='inherit';
			me._image_popup_close1__imgo.style.visibility='hidden';
			me.elementMouseOver['image_popup_close1']=false;
		}
		me._image_popup_close1.ggUpdatePosition=function (useTransition) {
		}
		me._planta0.appendChild(me._image_popup_close1);
		me.divSkin.appendChild(me._planta0);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=-0.01;
		el.ggDy=0.01;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) - 0.01%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0.01%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style.transition='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.logicBlock_visible();
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IndoaXRlIiB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBkdXI9IjFzIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMD'+
			'szOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
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
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
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
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style.transition='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image.ggSubElement.src='';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.logicBlock_visible();
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		me._image_popup.appendChild(me._popup_image);
		el=me._image_popup_close0=document.createElement('div');
		els=me._image_popup_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_popup_close0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_popup_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close0.ggIsActive=function() {
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
		me._image_popup_close0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_popup_close0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_popup_close0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_popup_close0.style.transition='left 0s, top 0s';
				if (me._image_popup_close0.ggCurrentLogicStatePosition == 0) {
					me._image_popup_close0.style.left = 'calc(50% - (32px / 2))';
					me._image_popup_close0.style.top='120px';
				}
				else {
					me._image_popup_close0.style.left='calc(50% - ((32px + 0px) / 2) + 0px)';
					me._image_popup_close0.style.top='-30px';
				}
			}
		}
		me._image_popup_close0.logicBlock_position();
		me._image_popup_close0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close0.style.transition='left 0s, top 0s';
				if (me._image_popup_close0.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close0.style.visibility=(Number(me._image_popup_close0.style.opacity)>0||!me._image_popup_close0.style.opacity)?'inherit':'hidden';
					me._image_popup_close0.ggVisible=true;
				}
				else {
					me._image_popup_close0.style.visibility="hidden";
					me._image_popup_close0.ggVisible=false;
				}
			}
		}
		me._image_popup_close0.logicBlock_visible();
		me._image_popup_close0.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close0.onmouseenter=function (e) {
			me._image_popup_close0__img.style.visibility='hidden';
			me._image_popup_close0__imgo.style.visibility='inherit';
			me.elementMouseOver['image_popup_close0']=true;
		}
		me._image_popup_close0.onmouseleave=function (e) {
			me._image_popup_close0__img.style.visibility='inherit';
			me._image_popup_close0__imgo.style.visibility='hidden';
			me.elementMouseOver['image_popup_close0']=false;
		}
		me._image_popup_close0.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_close0);
		me.divSkin.appendChild(me._image_popup);
		el=me._planta_implantao=document.createElement('div');
		els=me._planta_implantao__img=document.createElement('img');
		els.className='ggskin ggskin_planta_implantao';
		hs=basePath + 'images/planta_implantao.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PLANTA IMPLANTA\xc7\xc3O";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 1688px;';
		hs+='left : calc(50% - ((3000px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1688px + 0px) / 2) + 1px);';
		hs+='visibility : hidden;';
		hs+='width : 3000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._planta_implantao.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._planta_implantao.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).height <= 300))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 380))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._planta_implantao.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._planta_implantao.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._planta_implantao.style.transition='transform 0s, transform 0s';
				if (me._planta_implantao.ggCurrentLogicStateScaling == 0) {
					me._planta_implantao.ggParameter.sx = 0.12;
					me._planta_implantao.ggParameter.sy = 0.12;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
					skin.updateSize(me._planta_implantao);
				}
				else if (me._planta_implantao.ggCurrentLogicStateScaling == 1) {
					me._planta_implantao.ggParameter.sx = 0.15;
					me._planta_implantao.ggParameter.sy = 0.15;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
					skin.updateSize(me._planta_implantao);
				}
				else if (me._planta_implantao.ggCurrentLogicStateScaling == 2) {
					me._planta_implantao.ggParameter.sx = 0.2;
					me._planta_implantao.ggParameter.sy = 0.2;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
					skin.updateSize(me._planta_implantao);
				}
				else {
					me._planta_implantao.ggParameter.sx = 0.4;
					me._planta_implantao.ggParameter.sy = 0.4;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
					skin.updateSize(me._planta_implantao);
				}
			}
		}
		me._planta_implantao.logicBlock_scaling();
		me._planta_implantao.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._planta_implantao.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._planta_implantao.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._planta_implantao.style.transition='transform 0s, transform 0s';
				if (me._planta_implantao.ggCurrentLogicStateAngle == 0) {
					me._planta_implantao.ggParameter.a = 90;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
				}
				else {
					me._planta_implantao.ggParameter.a = 0;
					me._planta_implantao.style.transform=parameterToTransform(me._planta_implantao.ggParameter);
				}
			}
		}
		me._planta_implantao.logicBlock_angle();
		me._planta_implantao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('MAQUETE') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_implantao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_implantao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_implantao.style.transition='transform 0s, transform 0s';
				if (me._planta_implantao.ggCurrentLogicStateVisible == 0) {
					me._planta_implantao.style.visibility="hidden";
					me._planta_implantao.ggVisible=false;
				}
				else {
					me._planta_implantao.style.visibility="hidden";
					me._planta_implantao.ggVisible=false;
				}
			}
		}
		me._planta_implantao.logicBlock_visible();
		me._planta_implantao.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwICAgUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40ICAgbC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0w'+
			'LjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMgICBsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyAgIGMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjEuNiwzOTYuOWwxNS44LDE1LjhjMC44LDAuOCwwLjgsMS41LT'+
			'AuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUgICBjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEgICBjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xICAgbDE1LjgsMTUuOGwxNS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIu'+
			'NC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwICAgUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNCAgIGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40'+
			'LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQgICBsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQgICBjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLD'+
			'EyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42ICAgYy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMgICBjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41ICAgbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgs'+
			'MS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_popup_close";
		el.ggDx=-206;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 206px);';
		hs+='position : absolute;';
		hs+='top : 517px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close.ggIsActive=function() {
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
		me._image_popup_close.onclick=function (e) {
			me._planta_implantao.style.transition='none';
			me._planta_implantao.style.visibility='hidden';
			me._planta_implantao.ggVisible=false;
		}
		me._image_popup_close.onmouseenter=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_popup_close']=true;
		}
		me._image_popup_close.onmouseleave=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_popup_close']=false;
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._planta_implantao.appendChild(me._image_popup_close);
		me.divSkin.appendChild(me._planta_implantao);
		el=me._information2=document.createElement('div');
		el.ggId="information2";
		el.ggDx=0;
		el.ggDy=4.56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((620px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 0px) / 2) + 4.56%);';
		hs+='visibility : hidden;';
		hs+='width : 620px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._information2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._information2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._information2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._information2.ggCurrentLogicStatePosition == 0) {
					me._information2.style.left = 'calc(50% - (620px / 2))';
					me._information2.style.top = 'calc(50% - (250px / 2) - (0px / 2) + 12%)';
				}
				else {
					me._information2.style.left='calc(50% - ((620px + 0px) / 2) + 0%)';
					me._information2.style.top='calc(50% - ((250px + 0px) / 2) + 4.56%)';
				}
			}
		}
		me._information2.logicBlock_position();
		me._information2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information2.ggCurrentLogicStateSize = newLogicStateSize;
				me._information2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._information2.ggCurrentLogicStateSize == 0) {
					me._information2.style.width='280px';
					me._information2.style.height='250px';
					me._information2.style.left = 'calc(50% - (280px / 2))';
					me._information2.style.top = 'calc(50% - (250px / 2) - (0px / 2) + 4.56%)';
					skin.updateSize(me._information2);
				}
				else {
					me._information2.style.width='620px';
					me._information2.style.height='250px';
					me._information2.style.left = 'calc(50% - (620px / 2))';
					me._information2.style.top = 'calc(50% - (250px / 2) - (0px / 2) + 4.56%)';
					skin.updateSize(me._information2);
				}
			}
		}
		me._information2.logicBlock_size();
		me._information2.ggUpdatePosition=function (useTransition) {
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((620px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 620px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information_bg.ggIsActive=function() {
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
		me._information_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._information_bg.style.transition='width 0s, height 0s';
				if (me._information_bg.ggCurrentLogicStateSize == 0) {
					me._information_bg.style.width='280px';
					me._information_bg.style.height='250px';
					me._information_bg.style.left = 'calc(50% - (280px / 2) - (4px / 2))';
					me._information_bg.style.top = 'calc(50% - (250px / 2) - (4px / 2))';
					skin.updateSize(me._information_bg);
				}
				else {
					me._information_bg.style.width='620px';
					me._information_bg.style.height='250px';
					me._information_bg.style.left = 'calc(50% - (620px / 2) - (4px / 2))';
					me._information_bg.style.top = 'calc(50% - (250px / 2) - (4px / 2))';
					skin.updateSize(me._information_bg);
				}
			}
		}
		me._information_bg.logicBlock_size();
		me._information_bg.ggUpdatePosition=function (useTransition) {
		}
		me._information2.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 193px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 67px;';
		hs+='visibility : inherit;';
		hs+='width : 608px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
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
		me._info_text_body.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_text_body.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_text_body.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_text_body.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_text_body.ggCurrentLogicStatePosition == 0) {
					me._info_text_body.style.left='10px';
					me._info_text_body.style.top='45px';
				}
				else {
					me._info_text_body.style.left='20px';
					me._info_text_body.style.top='67px';
				}
			}
		}
		me._info_text_body.logicBlock_position();
		me._info_text_body.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_text_body.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_text_body.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_text_body.ggCurrentLogicStateSize == 0) {
					me._info_text_body.style.width='268px';
					me._info_text_body.style.height='198px';
					skin.updateSize(me._info_text_body);
				}
				else {
					me._info_text_body.style.width='608px';
					me._info_text_body.style.height='193px';
					skin.updateSize(me._info_text_body);
				}
			}
		}
		me._info_text_body.logicBlock_size();
		me._info_text_body.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('IG') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('IEL') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('IHU') == true))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('IACU') == true))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('IACC') == true))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('IACU') == true))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('ITE') == true))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('IEC') == true))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('IEU') == true))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('ISC') == true))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('IGS') == true))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('IP') == true))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('IPD') == true))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('IPRD') == true))
			)
			{
				newLogicStateText = 13;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateText != newLogicStateText) {
				me._info_text_body.ggCurrentLogicStateText = newLogicStateText;
				me._info_text_body.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_text_body.ggCurrentLogicStateText == 0) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\nO empreendimento ser\xe1 dotado de um gerador com liga\xe7\xe3o autom\xe1tica no caso de queda de energia el\xe9trica da rede p\xfablica com capacidade para alimenta\xe7\xe3o do elevador de servi\xe7o mantendo o em funcionamento permanente e capacidade para movimentar os outros at\xe9 o t\xe9rreo conforme projeto espec\xedfico. Atender\xe1 tamb\xe9, a(os) pontos de ilumona\xe7\xe3o que sejam essenciais para evacua\xe7\xe3o do empreendimento, bombas de recalque de \xe1gua servida e pluvial, port\xf5es el\xe9tricos, pontos do \xe1tico e na guarita\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 1) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Ser\xe3o instalados 4 elevadoes para a torre, sendo 2 sociais e 2 de servi\xe7o. A quantidade de elevadores atende ao trafego da edifica\xe7\xe3o conforme norma.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 2) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\n\nConforme projeto espec\xedfico e atendendo \xe0s exig\xeancias municipais das concession\xe1rias de acordo com a ABNT ou outras normas internacionais equivaletnes.\nEst\xe3o previstos os seguintes pontos hidr\xe1ulicos e ou instala\xe7\xf5es especiais para as unidades aut\xf3nomas:\n  -Ponto de \xe1gua para filtro na cozinha:\n  -Ponto de \xe1gua para m\xe1quina de lavar lou\xe7a:\n  -Ponto de \xe1gua e esgoto para m\xe1quina de lavar roupa:\n  -Ponto de \xe1gua e esgoto para o tanque:\n  -Ponto de \xe1gua e esgoto para cuba da cozinha:\n  -Ponto de \xe1gua e esgoto para cuba do lavabo:\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 3) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Nas unidades aut\xf3nomas ser\xe1 entregue ponto de dreno para futura instala\xe7\xe3o de sistema de ar condicionado nos dormit\xf3rios e na sala ficando por conta dos propriet\xe1rios das unidades a aquisi\xe7\xe3o dos equipamentos (condensadora, evaporadoras sancas de gesso e tubula\xe7\xe3o Frigor\xedgena) conforme espec\xedfico.\nFica dispon\xedvel a previs\xe3o de um ponto el\xe9trico para instala\xe7\xe3o de ar condicionado do tipo multisplit que antender\xe1 a carga t\xe9rmica m\xe1xima de 36000 BTUs para os finais 1A, 2A 1B e 2B: 27000 bTUs para os finais 3A, 4A, 5A, 6A, 3B, 4B, 5B e 6B.\nObs: O cliente podr\xe1 optar pela instala\xe7\xe3o do ar condicionado nos ambientes que somem a carga m\xe1xima prevista n\xe3o sendo poss\xedvel a instala\xe7\xe3o dos equipamentos em todos os ambientes.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 4) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Para as \xe1reas comuns ser\xe1 entregue sistema de ar condicionado instalado e em funcionamento na Guarita, Party Lounge, Poker & Snooker e Fitness. Nos ambientes como Gourmet Lounge e Private Pool House, ser\xe1 entregue infraestrutura (rede frigor\xedgena, carga el\xe9trica e ponto de dreno) para futura instala\xe7\xe3o de sistema de ar condicionado, ficando por conta do condom\xednio a aquisi\xe7\xe3o e instala\xe7\xe3o das condensadoras e evaporadoras conforme projeto espec\xedfico. No ambiente da Kids Space ser\xe1 entregue infraestrutura (carga el\xe9trica e ponto de dreno) para futura instala\xe7\xe3o de sistema de ar condicioando ficando por conta do condom\xednio a aquisi\xe7\xe3o e instala\xe7\xe3o das condensadoras, evaporadoras e tubula\xe7\xe3o frigor\xedgena conforme projeto espec\xedfico. Demais \xe1reas comuns n\xe3o ser\xe1 entregue infraestrutura para sistema de ar condicionado.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 5) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\n\nNas unidades aut\xf3nomas ser\xe1 entregue ponto de dreno para futura instala\xe7\xe3o de sistema de ar condicionado nos dormit\xf3rios e na sala ficando por conta dos propriet\xe1rios das unidades a aquisi\xe7\xe3o dos equipamentos (condensadora, evaporadoras sancas de gesso e tubula\xe7\xe3o Frigor\xedgena) conforme espec\xedfico.\nFica dispon\xedvel a previs\xe3o de um ponto el\xe9trico para instala\xe7\xe3o de ar condicionado do tipo multisplit que antender\xe1 a carga t\xe9rmica m\xe1xima de 36000 BTUs para os finais 1A, 2A 1B e 2B: 27000 BTUs para os finais 3A, 4A, 5A, 6A, 3B, 4B, 5B e 6B.\nObs: O cliente podr\xe1 optar pela instala\xe7\xe3o do ar condicionado nos ambientes que somem a carga m\xe1xima prevista n\xe3o sendo poss\xedvel a instala\xe7\xe3o dos equipamentos em todos os ambientes.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 6) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\nSistema estrutural em alvenaria estrutural.\nATEN\xc7\xc3O: O emprendimento utiliza o sistema construtivo em alvenaria estrutural, onde todas as paredes exercem fun\xe7\xe3o estrutural, isto \xe9, recebem cargas dos pavimentos superiores, portanto fica terminantemente PROIBIDO: Abrir paredes para instala\xe7\xe3o de janelas, bal\xe7\xf5es, passa prato, rasgos para inclus\xe7\xe3o ou realoca\xe7\xe3o de instala\xe7\xe3o el\xe9trica ou hidr\xe1ulica, ar condicionado, etc.\n\nRetirar paredes total ou parcialmente sob qualquer pretexto (exceto a parede de veda\xe7\xe3o do dormit\xf3rio revers\xedvel indicada na planta de contrato). Os cond\xf4minos que n\xe3o atenderem estas determina\xe7\xf5es poder\xe3o ser responsabilizados civil e criminalmente.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 7) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Est\xe3o previstas as seguintes instala\xe7\xf5es especiais para \xe1reas de lazer:\n\n-Tomadas USB nos ambientes de lazer coberto: Lobby, Poker & Soonker Bar, Fitness, Party Lounge, Gourment Lounge, Private Pool House e Kids Space:\n     Ponto no teto para monitoramento da Kids Space:\n     Ponto para recarga de carro el\xe9trico no 1 pavimento garagem:\n     Infraestrutura para Wi Fi en todos os ambientes de lazer coberto (Lobby, Poker & Snooker Bar, Fitness, Party Lounge, Gourmet Lounge, Private Pool House e Kids Space) e descobertos ( Pool, Playground, Pet Place, Private Pool House externa e Grill & Barbecue). A aquisi\xe7\xe3o e instala\xe7\xe3o do cabeamento e equipamentos ficar\xe3o por conta do condom\xednio.\nObs: Todas as tomadas e pontos de luz ser\xe3o entregues em voltagem 127V\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 8) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\nConforme projeto espec\xedfico e atendendo \xe0s exig\xeancias municipais, de acordo com ABNT ou outras normas internacionais equivalentes. Est\xe3o previstas as seguintes instala\xe7\xf5es especiais para as unidades aut\xf3nomas conforme projeto espec\xedfico de el\xe9trica:\n\n-Tomadas USB nos dormit\xf3rios:\n  Pontos (TUG)\' para depurador na cozinha:\n  Pontos (TUG)\' para fog\xe3o ou cooktop \xe0 g\xe1s na cozinha:\n  Pontos (TUE)\' 220V para forno el\xe9trico na cozinha:\n  Pontos (TUE)\' para m\xe1quina de lavar lou\xe7a na cozinha (execto finais 03 e 04 do Bloco A):\n  Pontos (TUG)\' para micro ondas na cozinha:\n  Pontos (TUG)\' para m\xe1quina de lavar roupa:\n  Pontos (TUG)\' para Grill no terra\xe7o para unidades finais 3 e 4 Blooco A:\n  Infraestrutura (condutor neutro) para interruptor inteligente na sala. terra\xe7o e dormit\xf3rios:\n  Infraestrutura (tubula\xe7\xe3o seca) no teto da sala para ponto monitoramento:\n  Infraestrutura (tubula\xe7\xe3o seca) para otimiza\xe7\xe3o do wi fi com previs\xe3o de instala\xe7\xe3o de roteador no teto. A aquisi\xe7\xe3o e instala\xe7\xe3o do cabeamento e equipamentos (roteador) ficar\xe3o por conta do propriet\xe1rio.\n  Infraestrutura para instala\xe7\xe3o do SPA (carga m\xe1xima de 13 kva 220V), na \xe1rea externa das unidades Gardens.\n\'tomada de uso geral\nObs1: Todas as tomadas, com exce\xe7\xe3o do forno e pontos de luz ser\xe3o entregues em voltagem 127V.", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 9) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("\nTubula\xe7\xe3o seca para futura instalal\xe7\xe3o de c\xe1meras pelo condom\xednio no acesso de pedestres, ve\xedculos e elevador.\nEntrega de pontos para c\xe2meras nas \xe1reas de lazer infantil (Kids Space) e acessos da torre.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 10) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Cozinha: ser\xe1 executada na cozinha infraestrutura de g\xe1s natural para instala\xe7\xe3o do fog\xe3o \xe0 g\xe1s. \xc1rea de servi\xe7o: ser\xe1 executada na \xe1rea de servi\xe7o infraestrutura para instala\xe7\xe3o de aquecedor \xe0 g\xe1s para aquecimento dos chuveiros, pontos de \xe1gua da cozinha e pontos das torneiras dos banheiros, com exe\xe7\xe3o do lavabo.\nA tubula\xe7\xe3o \xe9 entregue aparente por motivos de seguran\xe7a e manuten\xe7\xe3o, a compra e instala\xe7\xe3o do aquecedor fica a cargo da conta do cliente.\nA execu\xe7\xe3o do sistema de g\xe1s permite ao condom\xednio a instala\xe7\xe3o de medidores individualizados.\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 11) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Ser\xe1 instalada e entregue em funcionamneto o controle de acesso dos port\xf5es de garagem e da entrada de pedestres. Portaria com vidro blindado\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 12) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("A altura do piso at\xe9 o teto da unidade \xe9 de 2.60m, no banheiro das unidades essa altura \xe9 de 2.30m\n\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else if (me._info_text_body.ggCurrentLogicStateText == 13) {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("Endere\xe7o: Avenida Pinheiro 2660 \/ R\xfaa S\xe3o Sebasti\xe3o 297 \/ 305 309 \/ 315 S\xe3o Paulo SP\n\n\xc1rea terreno: 3296,37 m2\n\nPavimentos:\n1 Subsolo + T\xe9rreo + 5 Pavimentos garagem + Pavimento Lazer + 1 Torre com 19 pavimentos tipos\n\nTipologias por torre:\n12 unidades por pavimento | 236 unidades\nSendo: 4 unid. de 84m2 (tipologia de ponta) | 2 unid. de 74m2 (tipologia de meio) | 2 unid. de 67m2 (tipologia de meio) | 2 unid. de 58m2 (tipologia de meio) | 2 unid. de 45m2 (tipologia de meio)\n 84 UH 84m2 - 2 suites ou 3 dorms (1 suite) | 1 ou 2 vagas\n 84 UH 74m2 - 2 suites | 1 vaga\n 84 UH 67m2 - 1 suite ou 2 dorms (1 suite) | 1 vaga\n 84 UH 45m2 - 1 suite | 1 vaga\n 04 Elevadores\n\nGaragem:\n236 vagas cobertas\n6 vagas descobertas\n4 vagas PCD\n1 vaga com ponto para carregamento el\xe9trico\n1 vaga para compartilhamento do carsharing\n32 vagas para moto\n84 vagas para bicicletas\n\n\xc2reas de lazer \/ comum:\nT\xe9rreo Lobby, Pet Place\n4 Pavimento Lazer: Poker & Snooker Bar, Fitness, Mini Market\n6 Pavimento Lazer: Kids Place, Gourmet Lounge, Party Lounge, Pool Solarium, Kids Pool, Playground, Grill & Barbecue, Private Pool House\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
				else {
					if (me._info_text_body.ggUpdateText) {
					me._info_text_body.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_text_body.ggUpdateText();
					} else {
						if (me._info_text_body.ggUpdatePosition) me._info_text_body.ggUpdatePosition();
					}
				}
			}
		}
		me._info_text_body.logicBlock_text();
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information2.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 337px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
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
		me._info_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_title.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_title.ggCurrentLogicStatePosition == 0) {
					me._info_title.style.left='12px';
					me._info_title.style.top='20px';
				}
				else {
					me._info_title.style.left='11px';
					me._info_title.style.top='20px';
				}
			}
		}
		me._info_title.logicBlock_position();
		me._info_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_title__text.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_title.ggCurrentLogicStateSize == 0) {
					me._info_title__text.style.width='261px';
					me._info_title__text.style.height='70px';
					skin.updateSize(me._info_title);
				}
				else {
					me._info_title__text.style.width='337px';
					me._info_title__text.style.height='auto';
					skin.updateSize(me._info_title);
				}
			}
		}
		me._info_title.logicBlock_size();
		me._info_title.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('ITE') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('IACC') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('IACU') == true))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('IHU') == true))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('IEL') == true))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('IG') == true))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('IEC') == true))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('IEU') == true))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('ISC') == true))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('IGS') == true))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('IP') == true))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('IPD') == true))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('IPRD') == true))
			)
			{
				newLogicStateText = 12;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._info_title.ggCurrentLogicStateText != newLogicStateText) {
				me._info_title.ggCurrentLogicStateText = newLogicStateText;
				me._info_title.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._info_title.ggCurrentLogicStateText == 0) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("ESTRUTURA", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 1) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("AR CONDICIONADO | COMUM", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 2) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("AR CONDICIONADO | UNID", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 3) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("INSTALA\xc7\xd5ES HIDR\xc1ULICAS | UNID", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 4) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("ELEVADORES", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 5) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("GERADOR", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 6) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("INSTALA\xc7\xd5ES EL\xc9TRICAS | COMUM", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 7) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("INSTALA\xc7\xd5ES EL\xc9TRICAS | UNID", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 8) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("SISTEMA DE CFTV", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 9) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("G\xc1S", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 10) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("PORTARIA", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 11) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("P\xc9 DIREITO", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else if (me._info_title.ggCurrentLogicStateText == 12) {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("PRODUTO", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
				else {
					if (me._info_title.ggUpdateText) {
					me._info_title.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._info_title.ggUpdateText();
					} else {
						if (me._info_title.ggUpdatePosition) me._info_title.ggUpdatePosition();
					}
				}
			}
		}
		me._info_title.logicBlock_text();
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information2.appendChild(me._info_title);
		me.divSkin.appendChild(me._information2);
		el=me._info_tec2=document.createElement('div');
		el.ggId="INFO TEC2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #8c8c8c;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 40px;';
		hs+='bottom : 20px;';
		hs+='cursor : default;';
		hs+='height : 102px;';
		hs+='left : calc(50% - ((350px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_tec2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_tec2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ar_condicionado_com=document.createElement('div');
		els=me._ar_condicionado_com__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ar Condicionado Com";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 77px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ar_condicionado_com.ggUpdateText=function() {
			var params = [];
			var hs = player._("2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ar_condicionado_com.ggUpdateText();
		el.appendChild(els);
		me._ar_condicionado_com.ggIsActive=function() {
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
		me._ar_condicionado_com.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ar_condicionado_com'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IACC') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ar_condicionado_com.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ar_condicionado_com.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ar_condicionado_com__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_com.ggCurrentLogicStateBackgroundColor == 0) {
					me._ar_condicionado_com__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._ar_condicionado_com.ggCurrentLogicStateBackgroundColor == 1) {
					me._ar_condicionado_com__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._ar_condicionado_com__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._ar_condicionado_com.logicBlock_backgroundcolor();
		me._ar_condicionado_com.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['ar_condicionado_com'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._ar_condicionado_com.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._ar_condicionado_com.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._ar_condicionado_com__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_com.ggCurrentLogicStateBorderColor == 0) {
					me._ar_condicionado_com__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._ar_condicionado_com__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ar_condicionado_com.logicBlock_bordercolor();
		me._ar_condicionado_com.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['ar_condicionado_com'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._ar_condicionado_com.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._ar_condicionado_com.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._ar_condicionado_com__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_com.ggCurrentLogicStateTextColor == 0) {
					me._ar_condicionado_com.style.color="rgba(0,0,0,1)";
				}
				else {
					me._ar_condicionado_com.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._ar_condicionado_com.logicBlock_textcolor();
		me._ar_condicionado_com.onclick=function (e) {
			player.setVariableValue('IACC', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._ar_condicionado_com.onmouseenter=function (e) {
			me.elementMouseOver['ar_condicionado_com']=true;
			me._p2.logicBlock_visible();
			me._ar_condicionado_com.logicBlock_backgroundcolor();
			me._ar_condicionado_com.logicBlock_bordercolor();
			me._ar_condicionado_com.logicBlock_textcolor();
		}
		me._ar_condicionado_com.onmouseleave=function (e) {
			me.elementMouseOver['ar_condicionado_com']=false;
			me._p2.logicBlock_visible();
			me._ar_condicionado_com.logicBlock_backgroundcolor();
			me._ar_condicionado_com.logicBlock_bordercolor();
			me._ar_condicionado_com.logicBlock_textcolor();
		}
		me._ar_condicionado_com.ggUpdatePosition=function (useTransition) {
		}
		el=me._p2=document.createElement('div');
		els=me._p2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Ar Condicionado Com", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p2.ggUpdateText();
		el.appendChild(els);
		me._p2.ggIsActive=function() {
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
		me._p2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ar_condicionado_com'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p2.style.transition='';
				if (me._p2.ggCurrentLogicStateVisible == 0) {
					me._p2.style.visibility=(Number(me._p2.style.opacity)>0||!me._p2.style.opacity)?'inherit':'hidden';
					me._p2.ggVisible=true;
				}
				else {
					me._p2.style.visibility="hidden";
					me._p2.ggVisible=false;
				}
			}
		}
		me._p2.logicBlock_visible();
		me._p2.ggUpdatePosition=function (useTransition) {
		}
		me._ar_condicionado_com.appendChild(me._p2);
		me._info_tec2.appendChild(me._ar_condicionado_com);
		el=me._ar_condicionado_und=document.createElement('div');
		els=me._ar_condicionado_und__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ar Condicionado Und";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ar_condicionado_und.ggUpdateText=function() {
			var params = [];
			var hs = player._("3", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ar_condicionado_und.ggUpdateText();
		el.appendChild(els);
		me._ar_condicionado_und.ggIsActive=function() {
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
		me._ar_condicionado_und.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ar_condicionado_und'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IACU') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ar_condicionado_und.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ar_condicionado_und.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ar_condicionado_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_und.ggCurrentLogicStateBackgroundColor == 0) {
					me._ar_condicionado_und__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._ar_condicionado_und.ggCurrentLogicStateBackgroundColor == 1) {
					me._ar_condicionado_und__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._ar_condicionado_und__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._ar_condicionado_und.logicBlock_backgroundcolor();
		me._ar_condicionado_und.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['ar_condicionado_und'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._ar_condicionado_und.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._ar_condicionado_und.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._ar_condicionado_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_und.ggCurrentLogicStateBorderColor == 0) {
					me._ar_condicionado_und__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._ar_condicionado_und__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ar_condicionado_und.logicBlock_bordercolor();
		me._ar_condicionado_und.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['ar_condicionado_und'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._ar_condicionado_und.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._ar_condicionado_und.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._ar_condicionado_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._ar_condicionado_und.ggCurrentLogicStateTextColor == 0) {
					me._ar_condicionado_und.style.color="rgba(0,0,0,1)";
				}
				else {
					me._ar_condicionado_und.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._ar_condicionado_und.logicBlock_textcolor();
		me._ar_condicionado_und.onclick=function (e) {
			player.setVariableValue('IACU', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
		}
		me._ar_condicionado_und.onmouseenter=function (e) {
			me.elementMouseOver['ar_condicionado_und']=true;
			me._p3.logicBlock_visible();
			me._ar_condicionado_und.logicBlock_backgroundcolor();
			me._ar_condicionado_und.logicBlock_bordercolor();
			me._ar_condicionado_und.logicBlock_textcolor();
		}
		me._ar_condicionado_und.onmouseleave=function (e) {
			me.elementMouseOver['ar_condicionado_und']=false;
			me._p3.logicBlock_visible();
			me._ar_condicionado_und.logicBlock_backgroundcolor();
			me._ar_condicionado_und.logicBlock_bordercolor();
			me._ar_condicionado_und.logicBlock_textcolor();
		}
		me._ar_condicionado_und.ggUpdatePosition=function (useTransition) {
		}
		el=me._p3=document.createElement('div');
		els=me._p3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Ar Condicionado Unid", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p3.ggUpdateText();
		el.appendChild(els);
		me._p3.ggIsActive=function() {
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
		me._p3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ar_condicionado_und'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p3.style.transition='';
				if (me._p3.ggCurrentLogicStateVisible == 0) {
					me._p3.style.visibility=(Number(me._p3.style.opacity)>0||!me._p3.style.opacity)?'inherit':'hidden';
					me._p3.ggVisible=true;
				}
				else {
					me._p3.style.visibility="hidden";
					me._p3.ggVisible=false;
				}
			}
		}
		me._p3.logicBlock_visible();
		me._p3.ggUpdatePosition=function (useTransition) {
		}
		me._ar_condicionado_und.appendChild(me._p3);
		me._info_tec2.appendChild(me._ar_condicionado_und);
		el=me._inst_hidrulica_und=document.createElement('div');
		els=me._inst_hidrulica_und__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Inst. Hidr\xe1ulica Und";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._inst_hidrulica_und.ggUpdateText=function() {
			var params = [];
			var hs = player._("4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._inst_hidrulica_und.ggUpdateText();
		el.appendChild(els);
		me._inst_hidrulica_und.ggIsActive=function() {
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
		me._inst_hidrulica_und.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['inst_hidrulica_und'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IHU') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._inst_hidrulica_und.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._inst_hidrulica_und.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._inst_hidrulica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_hidrulica_und.ggCurrentLogicStateBackgroundColor == 0) {
					me._inst_hidrulica_und__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._inst_hidrulica_und.ggCurrentLogicStateBackgroundColor == 1) {
					me._inst_hidrulica_und__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._inst_hidrulica_und__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._inst_hidrulica_und.logicBlock_backgroundcolor();
		me._inst_hidrulica_und.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['inst_hidrulica_und'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._inst_hidrulica_und.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._inst_hidrulica_und.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._inst_hidrulica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_hidrulica_und.ggCurrentLogicStateBorderColor == 0) {
					me._inst_hidrulica_und__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._inst_hidrulica_und__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_hidrulica_und.logicBlock_bordercolor();
		me._inst_hidrulica_und.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['inst_hidrulica_und'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._inst_hidrulica_und.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._inst_hidrulica_und.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._inst_hidrulica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_hidrulica_und.ggCurrentLogicStateTextColor == 0) {
					me._inst_hidrulica_und.style.color="rgba(0,0,0,1)";
				}
				else {
					me._inst_hidrulica_und.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_hidrulica_und.logicBlock_textcolor();
		me._inst_hidrulica_und.onclick=function (e) {
			player.setVariableValue('IHU', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._inst_hidrulica_und.onmouseenter=function (e) {
			me.elementMouseOver['inst_hidrulica_und']=true;
			me._p4.logicBlock_visible();
			me._inst_hidrulica_und.logicBlock_backgroundcolor();
			me._inst_hidrulica_und.logicBlock_bordercolor();
			me._inst_hidrulica_und.logicBlock_textcolor();
		}
		me._inst_hidrulica_und.onmouseleave=function (e) {
			me.elementMouseOver['inst_hidrulica_und']=false;
			me._p4.logicBlock_visible();
			me._inst_hidrulica_und.logicBlock_backgroundcolor();
			me._inst_hidrulica_und.logicBlock_bordercolor();
			me._inst_hidrulica_und.logicBlock_textcolor();
		}
		me._inst_hidrulica_und.ggUpdatePosition=function (useTransition) {
		}
		el=me._p4=document.createElement('div');
		els=me._p4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -95px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p4.ggUpdateText=function() {
			var params = [];
			var hs = player._("Inst. Hidr\xe1ulica Unid", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p4.ggUpdateText();
		el.appendChild(els);
		me._p4.ggIsActive=function() {
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
		me._p4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['inst_hidrulica_und'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p4.style.transition='';
				if (me._p4.ggCurrentLogicStateVisible == 0) {
					me._p4.style.visibility=(Number(me._p4.style.opacity)>0||!me._p4.style.opacity)?'inherit':'hidden';
					me._p4.ggVisible=true;
				}
				else {
					me._p4.style.visibility="hidden";
					me._p4.ggVisible=false;
				}
			}
		}
		me._p4.logicBlock_visible();
		me._p4.ggUpdatePosition=function (useTransition) {
		}
		me._inst_hidrulica_und.appendChild(me._p4);
		me._info_tec2.appendChild(me._inst_hidrulica_und);
		el=me._elevadores=document.createElement('div');
		els=me._elevadores__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Elevadores";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._elevadores.ggUpdateText=function() {
			var params = [];
			var hs = player._("5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._elevadores.ggUpdateText();
		el.appendChild(els);
		me._elevadores.ggIsActive=function() {
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
		me._elevadores.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['elevadores'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IEL') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._elevadores.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._elevadores.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._elevadores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._elevadores.ggCurrentLogicStateBackgroundColor == 0) {
					me._elevadores__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._elevadores.ggCurrentLogicStateBackgroundColor == 1) {
					me._elevadores__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._elevadores__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._elevadores.logicBlock_backgroundcolor();
		me._elevadores.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['elevadores'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._elevadores.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._elevadores.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._elevadores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._elevadores.ggCurrentLogicStateBorderColor == 0) {
					me._elevadores__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._elevadores__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._elevadores.logicBlock_bordercolor();
		me._elevadores.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['elevadores'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._elevadores.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._elevadores.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._elevadores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._elevadores.ggCurrentLogicStateTextColor == 0) {
					me._elevadores.style.color="rgba(0,0,0,1)";
				}
				else {
					me._elevadores.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._elevadores.logicBlock_textcolor();
		me._elevadores.onclick=function (e) {
			player.setVariableValue('IEL', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._elevadores.onmouseenter=function (e) {
			me.elementMouseOver['elevadores']=true;
			me._p5.logicBlock_visible();
			me._elevadores.logicBlock_backgroundcolor();
			me._elevadores.logicBlock_bordercolor();
			me._elevadores.logicBlock_textcolor();
		}
		me._elevadores.onmouseleave=function (e) {
			me.elementMouseOver['elevadores']=false;
			me._p5.logicBlock_visible();
			me._elevadores.logicBlock_backgroundcolor();
			me._elevadores.logicBlock_bordercolor();
			me._elevadores.logicBlock_textcolor();
		}
		me._elevadores.ggUpdatePosition=function (useTransition) {
		}
		el=me._p5=document.createElement('div');
		els=me._p5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -140px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p5.ggUpdateText=function() {
			var params = [];
			var hs = player._("Elevadores", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p5.ggUpdateText();
		el.appendChild(els);
		me._p5.ggIsActive=function() {
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
		me._p5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['elevadores'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p5.style.transition='';
				if (me._p5.ggCurrentLogicStateVisible == 0) {
					me._p5.style.visibility=(Number(me._p5.style.opacity)>0||!me._p5.style.opacity)?'inherit':'hidden';
					me._p5.ggVisible=true;
				}
				else {
					me._p5.style.visibility="hidden";
					me._p5.ggVisible=false;
				}
			}
		}
		me._p5.logicBlock_visible();
		me._p5.ggUpdatePosition=function (useTransition) {
		}
		me._elevadores.appendChild(me._p5);
		me._info_tec2.appendChild(me._elevadores);
		el=me._geradores=document.createElement('div');
		els=me._geradores__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Geradores";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._geradores.ggUpdateText=function() {
			var params = [];
			var hs = player._("6", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._geradores.ggUpdateText();
		el.appendChild(els);
		me._geradores.ggIsActive=function() {
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
		me._geradores.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['geradores'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IG') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._geradores.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._geradores.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._geradores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._geradores.ggCurrentLogicStateBackgroundColor == 0) {
					me._geradores__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._geradores.ggCurrentLogicStateBackgroundColor == 1) {
					me._geradores__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._geradores__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._geradores.logicBlock_backgroundcolor();
		me._geradores.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['geradores'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._geradores.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._geradores.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._geradores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._geradores.ggCurrentLogicStateBorderColor == 0) {
					me._geradores__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._geradores__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._geradores.logicBlock_bordercolor();
		me._geradores.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['geradores'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._geradores.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._geradores.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._geradores__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._geradores.ggCurrentLogicStateTextColor == 0) {
					me._geradores.style.color="rgba(0,0,0,1)";
				}
				else {
					me._geradores.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._geradores.logicBlock_textcolor();
		me._geradores.onclick=function (e) {
			player.setVariableValue('IG', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._geradores.onmouseenter=function (e) {
			me.elementMouseOver['geradores']=true;
			me._p6.logicBlock_visible();
			me._geradores.logicBlock_backgroundcolor();
			me._geradores.logicBlock_bordercolor();
			me._geradores.logicBlock_textcolor();
		}
		me._geradores.onmouseleave=function (e) {
			me.elementMouseOver['geradores']=false;
			me._p6.logicBlock_visible();
			me._geradores.logicBlock_backgroundcolor();
			me._geradores.logicBlock_bordercolor();
			me._geradores.logicBlock_textcolor();
		}
		me._geradores.ggUpdatePosition=function (useTransition) {
		}
		el=me._p6=document.createElement('div');
		els=me._p6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p6.ggUpdateText=function() {
			var params = [];
			var hs = player._("Geradores", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p6.ggUpdateText();
		el.appendChild(els);
		me._p6.ggIsActive=function() {
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
		me._p6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['geradores'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p6.style.transition='';
				if (me._p6.ggCurrentLogicStateVisible == 0) {
					me._p6.style.visibility=(Number(me._p6.style.opacity)>0||!me._p6.style.opacity)?'inherit':'hidden';
					me._p6.ggVisible=true;
				}
				else {
					me._p6.style.visibility="hidden";
					me._p6.ggVisible=false;
				}
			}
		}
		me._p6.logicBlock_visible();
		me._p6.ggUpdatePosition=function (useTransition) {
		}
		me._geradores.appendChild(me._p6);
		me._info_tec2.appendChild(me._geradores);
		el=me._inst_eltrica_area_comun=document.createElement('div');
		els=me._inst_eltrica_area_comun__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Inst. El\xe9trica Area Comun";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._inst_eltrica_area_comun.ggUpdateText=function() {
			var params = [];
			var hs = player._("7", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._inst_eltrica_area_comun.ggUpdateText();
		el.appendChild(els);
		me._inst_eltrica_area_comun.ggIsActive=function() {
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
		me._inst_eltrica_area_comun.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['inst_eltrica_area_comun'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IEC') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._inst_eltrica_area_comun.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._inst_eltrica_area_comun.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._inst_eltrica_area_comun__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_area_comun.ggCurrentLogicStateBackgroundColor == 0) {
					me._inst_eltrica_area_comun__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._inst_eltrica_area_comun.ggCurrentLogicStateBackgroundColor == 1) {
					me._inst_eltrica_area_comun__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._inst_eltrica_area_comun__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
		me._inst_eltrica_area_comun.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['inst_eltrica_area_comun'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._inst_eltrica_area_comun.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._inst_eltrica_area_comun.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._inst_eltrica_area_comun__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_area_comun.ggCurrentLogicStateBorderColor == 0) {
					me._inst_eltrica_area_comun__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._inst_eltrica_area_comun__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_eltrica_area_comun.logicBlock_bordercolor();
		me._inst_eltrica_area_comun.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['inst_eltrica_area_comun'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._inst_eltrica_area_comun.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._inst_eltrica_area_comun.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._inst_eltrica_area_comun__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_area_comun.ggCurrentLogicStateTextColor == 0) {
					me._inst_eltrica_area_comun.style.color="rgba(0,0,0,1)";
				}
				else {
					me._inst_eltrica_area_comun.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_eltrica_area_comun.logicBlock_textcolor();
		me._inst_eltrica_area_comun.onclick=function (e) {
			player.setVariableValue('IEC', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._inst_eltrica_area_comun.onmouseenter=function (e) {
			me.elementMouseOver['inst_eltrica_area_comun']=true;
			me._p7.logicBlock_visible();
			me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
			me._inst_eltrica_area_comun.logicBlock_bordercolor();
			me._inst_eltrica_area_comun.logicBlock_textcolor();
		}
		me._inst_eltrica_area_comun.onmouseleave=function (e) {
			me.elementMouseOver['inst_eltrica_area_comun']=false;
			me._p7.logicBlock_visible();
			me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
			me._inst_eltrica_area_comun.logicBlock_bordercolor();
			me._inst_eltrica_area_comun.logicBlock_textcolor();
		}
		me._inst_eltrica_area_comun.ggUpdatePosition=function (useTransition) {
		}
		el=me._p7=document.createElement('div');
		els=me._p7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p7.ggUpdateText=function() {
			var params = [];
			var hs = player._("Inst. El\xe9trica Com", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p7.ggUpdateText();
		el.appendChild(els);
		me._p7.ggIsActive=function() {
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
		me._p7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['inst_eltrica_area_comun'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p7.style.transition='';
				if (me._p7.ggCurrentLogicStateVisible == 0) {
					me._p7.style.visibility=(Number(me._p7.style.opacity)>0||!me._p7.style.opacity)?'inherit':'hidden';
					me._p7.ggVisible=true;
				}
				else {
					me._p7.style.visibility="hidden";
					me._p7.ggVisible=false;
				}
			}
		}
		me._p7.logicBlock_visible();
		me._p7.ggUpdatePosition=function (useTransition) {
		}
		me._inst_eltrica_area_comun.appendChild(me._p7);
		me._info_tec2.appendChild(me._inst_eltrica_area_comun);
		el=me._inst_eltrica_und=document.createElement('div');
		els=me._inst_eltrica_und__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Inst. El\xe9trica Und";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._inst_eltrica_und.ggUpdateText=function() {
			var params = [];
			var hs = player._("8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._inst_eltrica_und.ggUpdateText();
		el.appendChild(els);
		me._inst_eltrica_und.ggIsActive=function() {
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
		me._inst_eltrica_und.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['inst_eltrica_und'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IEU') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._inst_eltrica_und.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._inst_eltrica_und.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._inst_eltrica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_und.ggCurrentLogicStateBackgroundColor == 0) {
					me._inst_eltrica_und__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._inst_eltrica_und.ggCurrentLogicStateBackgroundColor == 1) {
					me._inst_eltrica_und__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._inst_eltrica_und__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._inst_eltrica_und.logicBlock_backgroundcolor();
		me._inst_eltrica_und.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['inst_eltrica_und'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._inst_eltrica_und.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._inst_eltrica_und.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._inst_eltrica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_und.ggCurrentLogicStateBorderColor == 0) {
					me._inst_eltrica_und__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._inst_eltrica_und__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_eltrica_und.logicBlock_bordercolor();
		me._inst_eltrica_und.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['inst_eltrica_und'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._inst_eltrica_und.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._inst_eltrica_und.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._inst_eltrica_und__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._inst_eltrica_und.ggCurrentLogicStateTextColor == 0) {
					me._inst_eltrica_und.style.color="rgba(0,0,0,1)";
				}
				else {
					me._inst_eltrica_und.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._inst_eltrica_und.logicBlock_textcolor();
		me._inst_eltrica_und.onclick=function (e) {
			player.setVariableValue('IEU', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._inst_eltrica_und.onmouseenter=function (e) {
			me.elementMouseOver['inst_eltrica_und']=true;
			me._p8.logicBlock_visible();
			me._inst_eltrica_und.logicBlock_backgroundcolor();
			me._inst_eltrica_und.logicBlock_bordercolor();
			me._inst_eltrica_und.logicBlock_textcolor();
		}
		me._inst_eltrica_und.onmouseleave=function (e) {
			me.elementMouseOver['inst_eltrica_und']=false;
			me._p8.logicBlock_visible();
			me._inst_eltrica_und.logicBlock_backgroundcolor();
			me._inst_eltrica_und.logicBlock_bordercolor();
			me._inst_eltrica_und.logicBlock_textcolor();
		}
		me._inst_eltrica_und.ggUpdatePosition=function (useTransition) {
		}
		el=me._p8=document.createElement('div');
		els=me._p8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p8.ggUpdateText=function() {
			var params = [];
			var hs = player._("Inst. El\xe9trica Unid", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p8.ggUpdateText();
		el.appendChild(els);
		me._p8.ggIsActive=function() {
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
		me._p8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['inst_eltrica_und'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p8.style.transition='';
				if (me._p8.ggCurrentLogicStateVisible == 0) {
					me._p8.style.visibility=(Number(me._p8.style.opacity)>0||!me._p8.style.opacity)?'inherit':'hidden';
					me._p8.ggVisible=true;
				}
				else {
					me._p8.style.visibility="hidden";
					me._p8.ggVisible=false;
				}
			}
		}
		me._p8.logicBlock_visible();
		me._p8.ggUpdatePosition=function (useTransition) {
		}
		me._inst_eltrica_und.appendChild(me._p8);
		me._info_tec2.appendChild(me._inst_eltrica_und);
		el=me._sistema_cftv=document.createElement('div');
		els=me._sistema_cftv__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Sistema CFTV";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._sistema_cftv.ggUpdateText=function() {
			var params = [];
			var hs = player._("9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._sistema_cftv.ggUpdateText();
		el.appendChild(els);
		me._sistema_cftv.ggIsActive=function() {
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
		me._sistema_cftv.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['sistema_cftv'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('ISC') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sistema_cftv.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sistema_cftv.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sistema_cftv__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._sistema_cftv.ggCurrentLogicStateBackgroundColor == 0) {
					me._sistema_cftv__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._sistema_cftv.ggCurrentLogicStateBackgroundColor == 1) {
					me._sistema_cftv__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._sistema_cftv__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._sistema_cftv.logicBlock_backgroundcolor();
		me._sistema_cftv.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['sistema_cftv'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._sistema_cftv.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._sistema_cftv.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._sistema_cftv__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._sistema_cftv.ggCurrentLogicStateBorderColor == 0) {
					me._sistema_cftv__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._sistema_cftv__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._sistema_cftv.logicBlock_bordercolor();
		me._sistema_cftv.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['sistema_cftv'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._sistema_cftv.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._sistema_cftv.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._sistema_cftv__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._sistema_cftv.ggCurrentLogicStateTextColor == 0) {
					me._sistema_cftv.style.color="rgba(0,0,0,1)";
				}
				else {
					me._sistema_cftv.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._sistema_cftv.logicBlock_textcolor();
		me._sistema_cftv.onclick=function (e) {
			player.setVariableValue('ISC', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._sistema_cftv.onmouseenter=function (e) {
			me.elementMouseOver['sistema_cftv']=true;
			me._p9.logicBlock_visible();
			me._sistema_cftv.logicBlock_backgroundcolor();
			me._sistema_cftv.logicBlock_bordercolor();
			me._sistema_cftv.logicBlock_textcolor();
		}
		me._sistema_cftv.onmouseleave=function (e) {
			me.elementMouseOver['sistema_cftv']=false;
			me._p9.logicBlock_visible();
			me._sistema_cftv.logicBlock_backgroundcolor();
			me._sistema_cftv.logicBlock_bordercolor();
			me._sistema_cftv.logicBlock_textcolor();
		}
		me._sistema_cftv.ggUpdatePosition=function (useTransition) {
		}
		el=me._p9=document.createElement('div');
		els=me._p9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -53px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p9.ggUpdateText=function() {
			var params = [];
			var hs = player._("Sistema CFTV", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p9.ggUpdateText();
		el.appendChild(els);
		me._p9.ggIsActive=function() {
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
		me._p9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['sistema_cftv'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p9.style.transition='';
				if (me._p9.ggCurrentLogicStateVisible == 0) {
					me._p9.style.visibility=(Number(me._p9.style.opacity)>0||!me._p9.style.opacity)?'inherit':'hidden';
					me._p9.ggVisible=true;
				}
				else {
					me._p9.style.visibility="hidden";
					me._p9.ggVisible=false;
				}
			}
		}
		me._p9.logicBlock_visible();
		me._p9.ggUpdatePosition=function (useTransition) {
		}
		me._sistema_cftv.appendChild(me._p9);
		me._info_tec2.appendChild(me._sistema_cftv);
		el=me._gs=document.createElement('div');
		els=me._gs__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="G\xe0s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gs.ggUpdateText=function() {
			var params = [];
			var hs = player._("10", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gs.ggUpdateText();
		el.appendChild(els);
		me._gs.ggIsActive=function() {
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
		me._gs.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['gs'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IGS') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._gs.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._gs.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._gs__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._gs.ggCurrentLogicStateBackgroundColor == 0) {
					me._gs__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._gs.ggCurrentLogicStateBackgroundColor == 1) {
					me._gs__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._gs__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._gs.logicBlock_backgroundcolor();
		me._gs.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['gs'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._gs.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._gs.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._gs__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._gs.ggCurrentLogicStateBorderColor == 0) {
					me._gs__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._gs__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._gs.logicBlock_bordercolor();
		me._gs.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['gs'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._gs.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._gs.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._gs__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._gs.ggCurrentLogicStateTextColor == 0) {
					me._gs.style.color="rgba(0,0,0,1)";
				}
				else {
					me._gs.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._gs.logicBlock_textcolor();
		me._gs.onclick=function (e) {
			player.setVariableValue('IGS', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._gs.onmouseenter=function (e) {
			me.elementMouseOver['gs']=true;
			me._p10.logicBlock_visible();
			me._gs.logicBlock_backgroundcolor();
			me._gs.logicBlock_bordercolor();
			me._gs.logicBlock_textcolor();
		}
		me._gs.onmouseleave=function (e) {
			me.elementMouseOver['gs']=false;
			me._p10.logicBlock_visible();
			me._gs.logicBlock_backgroundcolor();
			me._gs.logicBlock_bordercolor();
			me._gs.logicBlock_textcolor();
		}
		me._gs.ggUpdatePosition=function (useTransition) {
		}
		el=me._p10=document.createElement('div');
		els=me._p10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -95px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p10.ggUpdateText=function() {
			var params = [];
			var hs = player._("G\xe0s", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p10.ggUpdateText();
		el.appendChild(els);
		me._p10.ggIsActive=function() {
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
		me._p10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gs'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p10.style.transition='';
				if (me._p10.ggCurrentLogicStateVisible == 0) {
					me._p10.style.visibility=(Number(me._p10.style.opacity)>0||!me._p10.style.opacity)?'inherit':'hidden';
					me._p10.ggVisible=true;
				}
				else {
					me._p10.style.visibility="hidden";
					me._p10.ggVisible=false;
				}
			}
		}
		me._p10.logicBlock_visible();
		me._p10.ggUpdatePosition=function (useTransition) {
		}
		me._gs.appendChild(me._p10);
		me._info_tec2.appendChild(me._gs);
		el=me._portaria=document.createElement('div');
		els=me._portaria__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Portaria";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._portaria.ggUpdateText=function() {
			var params = [];
			var hs = player._("11", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._portaria.ggUpdateText();
		el.appendChild(els);
		me._portaria.ggIsActive=function() {
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
		me._portaria.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['portaria'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IP') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._portaria.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._portaria.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._portaria__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._portaria.ggCurrentLogicStateBackgroundColor == 0) {
					me._portaria__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._portaria.ggCurrentLogicStateBackgroundColor == 1) {
					me._portaria__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._portaria__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._portaria.logicBlock_backgroundcolor();
		me._portaria.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['portaria'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._portaria.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._portaria.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._portaria__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._portaria.ggCurrentLogicStateBorderColor == 0) {
					me._portaria__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._portaria__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._portaria.logicBlock_bordercolor();
		me._portaria.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['portaria'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._portaria.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._portaria.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._portaria__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._portaria.ggCurrentLogicStateTextColor == 0) {
					me._portaria.style.color="rgba(0,0,0,1)";
				}
				else {
					me._portaria.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._portaria.logicBlock_textcolor();
		me._portaria.onclick=function (e) {
			player.setVariableValue('IP', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._portaria.onmouseenter=function (e) {
			me.elementMouseOver['portaria']=true;
			me._p11.logicBlock_visible();
			me._portaria.logicBlock_backgroundcolor();
			me._portaria.logicBlock_bordercolor();
			me._portaria.logicBlock_textcolor();
		}
		me._portaria.onmouseleave=function (e) {
			me.elementMouseOver['portaria']=false;
			me._p11.logicBlock_visible();
			me._portaria.logicBlock_backgroundcolor();
			me._portaria.logicBlock_bordercolor();
			me._portaria.logicBlock_textcolor();
		}
		me._portaria.ggUpdatePosition=function (useTransition) {
		}
		el=me._p11=document.createElement('div');
		els=me._p11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -140px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p11.ggUpdateText=function() {
			var params = [];
			var hs = player._("Portaria", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p11.ggUpdateText();
		el.appendChild(els);
		me._p11.ggIsActive=function() {
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
		me._p11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['portaria'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p11.style.transition='';
				if (me._p11.ggCurrentLogicStateVisible == 0) {
					me._p11.style.visibility=(Number(me._p11.style.opacity)>0||!me._p11.style.opacity)?'inherit':'hidden';
					me._p11.ggVisible=true;
				}
				else {
					me._p11.style.visibility="hidden";
					me._p11.ggVisible=false;
				}
			}
		}
		me._p11.logicBlock_visible();
		me._p11.ggUpdatePosition=function (useTransition) {
		}
		me._portaria.appendChild(me._p11);
		me._info_tec2.appendChild(me._portaria);
		el=me._p_direito=document.createElement('div');
		els=me._p_direito__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="P\xe9 Direito";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p_direito.ggUpdateText=function() {
			var params = [];
			var hs = player._("12", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p_direito.ggUpdateText();
		el.appendChild(els);
		me._p_direito.ggIsActive=function() {
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
		me._p_direito.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['p_direito'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IPD') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._p_direito.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._p_direito.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._p_direito__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._p_direito.ggCurrentLogicStateBackgroundColor == 0) {
					me._p_direito__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._p_direito.ggCurrentLogicStateBackgroundColor == 1) {
					me._p_direito__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._p_direito__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._p_direito.logicBlock_backgroundcolor();
		me._p_direito.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['p_direito'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._p_direito.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._p_direito.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._p_direito__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._p_direito.ggCurrentLogicStateBorderColor == 0) {
					me._p_direito__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._p_direito__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._p_direito.logicBlock_bordercolor();
		me._p_direito.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['p_direito'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._p_direito.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._p_direito.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._p_direito__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._p_direito.ggCurrentLogicStateTextColor == 0) {
					me._p_direito.style.color="rgba(0,0,0,1)";
				}
				else {
					me._p_direito.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._p_direito.logicBlock_textcolor();
		me._p_direito.onclick=function (e) {
			player.setVariableValue('IPD', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._p_direito.onmouseenter=function (e) {
			me.elementMouseOver['p_direito']=true;
			me._p12.logicBlock_visible();
			me._p_direito.logicBlock_backgroundcolor();
			me._p_direito.logicBlock_bordercolor();
			me._p_direito.logicBlock_textcolor();
		}
		me._p_direito.onmouseleave=function (e) {
			me.elementMouseOver['p_direito']=false;
			me._p12.logicBlock_visible();
			me._p_direito.logicBlock_backgroundcolor();
			me._p_direito.logicBlock_bordercolor();
			me._p_direito.logicBlock_textcolor();
		}
		me._p_direito.ggUpdatePosition=function (useTransition) {
		}
		el=me._p12=document.createElement('div');
		els=me._p12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p12.ggUpdateText=function() {
			var params = [];
			var hs = player._("P\xe9 Direito", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p12.ggUpdateText();
		el.appendChild(els);
		me._p12.ggIsActive=function() {
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
		me._p12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['p_direito'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p12.style.transition='';
				if (me._p12.ggCurrentLogicStateVisible == 0) {
					me._p12.style.visibility=(Number(me._p12.style.opacity)>0||!me._p12.style.opacity)?'inherit':'hidden';
					me._p12.ggVisible=true;
				}
				else {
					me._p12.style.visibility="hidden";
					me._p12.ggVisible=false;
				}
			}
		}
		me._p12.logicBlock_visible();
		me._p12.ggUpdatePosition=function (useTransition) {
		}
		me._p_direito.appendChild(me._p12);
		me._info_tec2.appendChild(me._p_direito);
		el=me._iproduto=document.createElement('div');
		els=me._iproduto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="I-Produto";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._iproduto.ggUpdateText=function() {
			var params = [];
			var hs = player._("1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._iproduto.ggUpdateText();
		el.appendChild(els);
		me._iproduto.ggIsActive=function() {
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
		me._iproduto.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['iproduto'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IPRD') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._iproduto.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._iproduto.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._iproduto__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._iproduto.ggCurrentLogicStateBackgroundColor == 0) {
					me._iproduto__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._iproduto.ggCurrentLogicStateBackgroundColor == 1) {
					me._iproduto__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._iproduto__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._iproduto.logicBlock_backgroundcolor();
		me._iproduto.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['iproduto'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._iproduto.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._iproduto.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._iproduto__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._iproduto.ggCurrentLogicStateBorderColor == 0) {
					me._iproduto__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._iproduto__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._iproduto.logicBlock_bordercolor();
		me._iproduto.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['iproduto'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._iproduto.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._iproduto.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._iproduto__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._iproduto.ggCurrentLogicStateTextColor == 0) {
					me._iproduto.style.color="rgba(0,0,0,1)";
				}
				else {
					me._iproduto.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._iproduto.logicBlock_textcolor();
		me._iproduto.onclick=function (e) {
			player.setVariableValue('IPRD', true);
			if (
				(
					((player.getVariableValue('ITE') == true))
				)
			) {
				player.setVariableValue('ITE', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._iproduto.onmouseenter=function (e) {
			me.elementMouseOver['iproduto']=true;
			me._p1.logicBlock_visible();
			me._iproduto.logicBlock_backgroundcolor();
			me._iproduto.logicBlock_bordercolor();
			me._iproduto.logicBlock_textcolor();
		}
		me._iproduto.onmouseleave=function (e) {
			me.elementMouseOver['iproduto']=false;
			me._p1.logicBlock_visible();
			me._iproduto.logicBlock_backgroundcolor();
			me._iproduto.logicBlock_bordercolor();
			me._iproduto.logicBlock_textcolor();
		}
		me._iproduto.ggUpdatePosition=function (useTransition) {
		}
		el=me._p1=document.createElement('div');
		els=me._p1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Produto", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p1.ggUpdateText();
		el.appendChild(els);
		me._p1.ggIsActive=function() {
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
		me._p1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['iproduto'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p1.style.transition='';
				if (me._p1.ggCurrentLogicStateVisible == 0) {
					me._p1.style.visibility=(Number(me._p1.style.opacity)>0||!me._p1.style.opacity)?'inherit':'hidden';
					me._p1.ggVisible=true;
				}
				else {
					me._p1.style.visibility="hidden";
					me._p1.ggVisible=false;
				}
			}
		}
		me._p1.logicBlock_visible();
		me._p1.ggUpdatePosition=function (useTransition) {
		}
		me._iproduto.appendChild(me._p1);
		me._info_tec2.appendChild(me._iproduto);
		el=me._estrutura=document.createElement('div');
		els=me._estrutura__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Estrutura";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 291px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._estrutura.ggUpdateText=function() {
			var params = [];
			var hs = player._("13", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._estrutura.ggUpdateText();
		el.appendChild(els);
		me._estrutura.ggIsActive=function() {
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
		me._estrutura.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['estrutura'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('ITE') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._estrutura.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._estrutura.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._estrutura__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._estrutura.ggCurrentLogicStateBackgroundColor == 0) {
					me._estrutura__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._estrutura.ggCurrentLogicStateBackgroundColor == 1) {
					me._estrutura__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._estrutura__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me._estrutura.logicBlock_backgroundcolor();
		me._estrutura.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['estrutura'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._estrutura.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._estrutura.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._estrutura__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._estrutura.ggCurrentLogicStateBorderColor == 0) {
					me._estrutura__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._estrutura__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._estrutura.logicBlock_bordercolor();
		me._estrutura.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['estrutura'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._estrutura.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._estrutura.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._estrutura__text.style.transition='background-color 0s, border-color 0s, color 0s';
				if (me._estrutura.ggCurrentLogicStateTextColor == 0) {
					me._estrutura.style.color="rgba(0,0,0,1)";
				}
				else {
					me._estrutura.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._estrutura.logicBlock_textcolor();
		me._estrutura.onclick=function (e) {
			player.setVariableValue('ITE', true);
			if (
				(
					((player.getVariableValue('IPRD') == true))
				)
			) {
				player.setVariableValue('IPRD', false);
			}
			if (
				(
					((player.getVariableValue('IACC') == true))
				)
			) {
				player.setVariableValue('IACC', false);
			}
			if (
				(
					((player.getVariableValue('IEC') == true))
				)
			) {
				player.setVariableValue('IEC', false);
			}
			if (
				(
					((player.getVariableValue('IEU') == true))
				)
			) {
				player.setVariableValue('IEU', false);
			}
			if (
				(
					((player.getVariableValue('IHU') == true))
				)
			) {
				player.setVariableValue('IHU', false);
			}
			if (
				(
					((player.getVariableValue('IEL') == true))
				)
			) {
				player.setVariableValue('IEL', false);
			}
			if (
				(
					((player.getVariableValue('IG') == true))
				)
			) {
				player.setVariableValue('IG', false);
			}
			if (
				(
					((player.getVariableValue('ISC') == true))
				)
			) {
				player.setVariableValue('ISC', false);
			}
			if (
				(
					((player.getVariableValue('IGS') == true))
				)
			) {
				player.setVariableValue('IGS', false);
			}
			if (
				(
					((player.getVariableValue('IP') == true))
				)
			) {
				player.setVariableValue('IP', false);
			}
			if (
				(
					((player.getVariableValue('IPD') == true))
				)
			) {
				player.setVariableValue('IPD', false);
			}
			if (
				(
					((player.getVariableValue('IACU') == true))
				)
			) {
				player.setVariableValue('IACU', false);
			}
		}
		me._estrutura.onmouseenter=function (e) {
			me.elementMouseOver['estrutura']=true;
			me._p13.logicBlock_visible();
			me._estrutura.logicBlock_backgroundcolor();
			me._estrutura.logicBlock_bordercolor();
			me._estrutura.logicBlock_textcolor();
		}
		me._estrutura.onmouseleave=function (e) {
			me.elementMouseOver['estrutura']=false;
			me._p13.logicBlock_visible();
			me._estrutura.logicBlock_backgroundcolor();
			me._estrutura.logicBlock_bordercolor();
			me._estrutura.logicBlock_textcolor();
		}
		me._estrutura.ggUpdatePosition=function (useTransition) {
		}
		el=me._p13=document.createElement('div');
		els=me._p13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="p13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(15,15,15,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -224px;';
		hs+='position : absolute;';
		hs+='top : -93px;';
		hs+='visibility : hidden;';
		hs+='width : calc(214px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._p13.ggUpdateText=function() {
			var params = [];
			var hs = player._("Estrutura", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._p13.ggUpdateText();
		el.appendChild(els);
		me._p13.ggIsActive=function() {
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
		me._p13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['estrutura'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p13.style.transition='';
				if (me._p13.ggCurrentLogicStateVisible == 0) {
					me._p13.style.visibility=(Number(me._p13.style.opacity)>0||!me._p13.style.opacity)?'inherit':'hidden';
					me._p13.ggVisible=true;
				}
				else {
					me._p13.style.visibility="hidden";
					me._p13.ggVisible=false;
				}
			}
		}
		me._p13.logicBlock_visible();
		me._p13.ggUpdatePosition=function (useTransition) {
		}
		me._estrutura.appendChild(me._p13);
		me._info_tec2.appendChild(me._estrutura);
		me.divSkin.appendChild(me._info_tec2);
		el=me._tplanta_implantao=document.createElement('div');
		els=me._tplanta_implantao__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-PLANTA IMPLANTA\xc7\xc3O";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 6px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : calc(217px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #626262;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 12px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._tplanta_implantao.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA IMPLANTA\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tplanta_implantao.ggUpdateText();
		el.appendChild(els);
		me._tplanta_implantao.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tplanta_implantao.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tplanta_implantao.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tplanta_implantao.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tplanta_implantao.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._tplanta_implantao.ggCurrentLogicStatePosition == 0) {
					me._tplanta_implantao.style.left='-20px';
					me._tplanta_implantao.style.top='70px';
				}
				else {
					me._tplanta_implantao.style.left='6px';
					me._tplanta_implantao.style.top='96px';
				}
			}
		}
		me._tplanta_implantao.logicBlock_position();
		me._tplanta_implantao.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 1028)) && 
				((me.elementMouseOver['tplanta_implantao'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._tplanta_implantao.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._tplanta_implantao.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._tplanta_implantao.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._tplanta_implantao.ggCurrentLogicStateScaling == 0) {
					me._tplanta_implantao.ggParameter.sx = 0.8;
					me._tplanta_implantao.ggParameter.sy = 0.8;
					me._tplanta_implantao.style.transform=parameterToTransform(me._tplanta_implantao.ggParameter);
					skin.updateSize(me._tplanta_implantao);
				}
				else if (me._tplanta_implantao.ggCurrentLogicStateScaling == 1) {
					me._tplanta_implantao.ggParameter.sx = 0.8;
					me._tplanta_implantao.ggParameter.sy = 0.8;
					me._tplanta_implantao.style.transform=parameterToTransform(me._tplanta_implantao.ggParameter);
					skin.updateSize(me._tplanta_implantao);
				}
				else {
					me._tplanta_implantao.ggParameter.sx = 1;
					me._tplanta_implantao.ggParameter.sy = 1;
					me._tplanta_implantao.style.transform=parameterToTransform(me._tplanta_implantao.ggParameter);
					skin.updateSize(me._tplanta_implantao);
				}
			}
		}
		me._tplanta_implantao.logicBlock_scaling();
		me._tplanta_implantao.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['tplanta_implantao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tplanta_implantao.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tplanta_implantao.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tplanta_implantao.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._tplanta_implantao.ggCurrentLogicStateAlpha == 0) {
					me._tplanta_implantao.style.visibility=me._tplanta_implantao.ggVisible?'inherit':'hidden';
					me._tplanta_implantao.style.opacity=1;
				}
				else {
					me._tplanta_implantao.style.visibility=me._tplanta_implantao.ggVisible?'inherit':'hidden';
					me._tplanta_implantao.style.opacity=0.7;
				}
			}
		}
		me._tplanta_implantao.logicBlock_alpha();
		me._tplanta_implantao.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['tplanta_implantao'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('IMP') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tplanta_implantao.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tplanta_implantao.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tplanta_implantao__text.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._tplanta_implantao.ggCurrentLogicStateBackgroundColor == 0) {
					me._tplanta_implantao__text.style.backgroundColor="rgba(16,16,16,1)";
				}
				else if (me._tplanta_implantao.ggCurrentLogicStateBackgroundColor == 1) {
					me._tplanta_implantao__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._tplanta_implantao__text.style.backgroundColor="rgba(98,98,98,1)";
				}
			}
		}
		me._tplanta_implantao.logicBlock_backgroundcolor();
		me._tplanta_implantao.onclick=function (e) {
			me._planta_implantao.ggVisible = !me._planta_implantao.ggVisible;
			var flag=me._planta_implantao.ggVisible;
			me._planta_implantao.style.transition='none';
			me._planta_implantao.style.visibility=((flag)&&(Number(me._planta_implantao.style.opacity)>0||!me._planta_implantao.style.opacity))?'inherit':'hidden';
			player.setVariableValue('IMP', !player.getVariableValue('IMP'));
		}
		me._tplanta_implantao.onmouseenter=function (e) {
			me.elementMouseOver['tplanta_implantao']=true;
			me._tplanta_implantao.logicBlock_scaling();
			me._tplanta_implantao.logicBlock_alpha();
			me._tplanta_implantao.logicBlock_backgroundcolor();
		}
		me._tplanta_implantao.onmouseleave=function (e) {
			me.elementMouseOver['tplanta_implantao']=false;
			me._tplanta_implantao.logicBlock_scaling();
			me._tplanta_implantao.logicBlock_alpha();
			me._tplanta_implantao.logicBlock_backgroundcolor();
		}
		me._tplanta_implantao.ggUpdatePosition=function (useTransition) {
		}
		el=me._planta=document.createElement('div');
		els=me._planta__img=document.createElement('img');
		els.className='ggskin ggskin_planta';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAMWElEQVR4nO3dPY4j1xmG0Y9mLcCJrcipEi/BGzDgRXoJDgwFjrwTBwoFaAdF0IFATf8Pu1lV9+c9B5hMmr5VbPB77i12z6kAINefq+ofVfX3qvqxqn6oqj9V1a9V9UtV/a+q/lNVP1XVz43WCABs5K9V9a+qulTV9c4//62qv7VYLADwmD9W1T/rc4P/5Z9/V9Vfjl44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAmE6tFwDAsS7rem29hr2cl8Vcu9NdN2rmbxYA5i'+
			'QGPvbhzTH4ARiZCHjfuzfG8AdgFkLgtVc3xOAHYEYi4LlnN8PwB2BmIuCbP7ReAAAcxUb3m98DwE0BgBynKsMfgCweBXgEAACRTnb/ACRKPwVwAgAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAAn3JellPrNfA4AQDA3Qz/eQgAAO5i+M9lafWFfSO9dlnXa6uv7fX4Gq8ZX9Xye+crfL/NxwkAwMEMf3rQ7AQAINUMA3WLaxgthGbjBAAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQ3wMAQBP3/i4Bvy9gH04AAOiW4b8fAQBAlwz/fQkAALpj+O9PAADQFcP/GAIAgG4Y/scRAAB0wfA/lgAAoDnD/3gCAICmDP82BAAA'+
			'zRj+7QgAAJow/NsSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAADEOS/LqfUaWhMAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSADCg87KcWq8BGJsAAIBAAgAAAgkAAAgkAAAgkAAAgEACAB7Q4tP4fgIA2IIAAIBAAgAedOSO3O4f2IoAgA0cMZgNf2BLAgAAAgkA2MieO3S7f2BrS+sFwExug/qyrtct/z6ArTkBgB1sMbgNf2BPTgBgJ189DTD4gSM0C4CtjkihdwY60COPAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAg'+
			'AAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAKAOi/LqfUaADiWAACAQAIAAAIJgHCO/wEyCQAACCQAgtn9A+QSAKEMf4BsAiCQ4Q+AAAhj+ANQJQCiGP4A3CytF8D+DH4AXhIAEzLwAfieZgFgSAFAOz4DAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgvwkQdnZZ1+tn/nu/JAs4ggCAnXx28L/8/4QAsCePAGAHXx3+W/8dAO9xAgAb2npoOw0A9uIEADay547daQCwNQEAAIEEAGzgiB26UwBgSwIAHnTkYBYBwFYEAAAEEgDwgBY7cqcAwBYEAAAEEgAAEEgAAEAgAQAAgQQAAAQSADAgPwkAPEoAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAA'+
			'EEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQKCl1Re+rOu11ddu4bwsp9ZrOELa6wowqmYBkOY2GGcNAYMfYCweARxsxkE54zUBzM4JQAOznAYY/ADjcgLQ0MgDdOS1AyAAACCSAGhsxJ30iGsG4DkB0IGRBupIawXgfQIAAAIJgE6MsLMeYY0A3EcAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgCdOC'+
			'/LqfUavmeENQJwHwEAAIEEQAdG2lmPtFYA3icAGhtxoI64ZgCeEwAAEEgANDTyTnrktQNQtbReQKJZhuftOi7rem29FgA+xwnAwWYZ/k/NeE0As3MCcJDZh6TTAICxNAuA2QdiqrTXVfAAo/IIAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAI'+
			'JAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAItLReAPA1l3W9tl7Do87Lcmq9hhHN8NrTngAAmnlrkImC5wx79iIAgK7cBl56CBj87M1nAIAuXdb1mjoEU6+bYwkAoGtJwzA5ejieAAC6lzAUE66RvggAAAgkAIAhzLxDnvna6JcAAIYx46Cc8ZoYgwAAgEACABjKTDvmma6F8QgAAAgkAAAgkAAAgEACABiOZ+fwOAEAAIEEAABR0v+lyRsBAACBBAAwJJ8DgMcIAAAIJAAAIJAAAI'+
			'BAAgAY1uifA/Bp9OO5598IAAAIJACAoTkF4F7u9XMCAKAxg2l/7vFrAgCgAwYURxMAwPBGfwxwIwK2d16Wk/v6NgEA0BHDajvu5ccEADCFWU4BqgyuLbiH37e0XgAArz0dYDPFzZ4M/c8RADCo3t7sehhSl3W99nZftjDjNdGeRwDAVHoIERiBAAA2YZcKYxEAwHScAsD3CQBgSiIAPiYAgM14DADjEADAtJwCwPsEALCp3k4BRAC8TQAA0xMB8JoAACKIAHhOAACb6+0xwI0IgG8EABBFBMBvBACwi15PAapEAFQJACDUZV2vQoBkAgDYTc+nADcigFQCANiVCIA+CQCA8kiAPAIA2N0IpwA3QoAUAgDgDUKA2QkA4BAjnQI8JQSYlQAADjNqBFQJAeaztF4AwEheRsDIUUM2AQAc6rwsp5l20oKAUQkA4HCzRcBT'+
			'b12XKKBHPgMANJE0FH1+gB4JAICDiAB6IgCAZpJOAW6cBtALAQA0lRgBVU4DaE8AAM2JADieAAC6kBoB0IoAALqRGAFOAWhFAABdSYwAaEEAAN1JiwCnALQgAIAupUUAHE0AAN0SAbAfAQB0LSUCPAbgaAIA6F5KBMCRBAAwhPOynIQAbEcAAEMRAbANAQAMRwTA4wQAMCSPBOAxAgAY2iwRMMt1MA4BAAzPaQB8ngAApiEC4H4CAJiK0wC4jwAApjRSCIyyTuYiAICp9R4CPa+NuQkAIELvIQBHEwBAlJ5CoJd1kGlpvQCAFp4O3xb/Ep/hT2sCAIh3dAwY/vRAAAA8sWcMGPz0RAAAvOPlwP5qEBj89EgAANzpvUH+MgwMfEYgAAAeZOAzIj8GCACBmp0AtPixGwDgN04AACCQAACAQAIAAAIJAAAIJAAAIJAAAI'+
			'BAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIABnRellPrNQBjEwAAEEgAAEAgAQAAgQQAAAQSAAAQ6FRVdVnXa+uFAPfxEwDAFpwAAECg33cSTgGgf3b/wFaevZmIAOiX4Q9sySMAAAj0akfhFAD6Y/cPbO3dNxUhAO0Z/MBePnxzEQHQjuEP7OmuNxghAMcx+IEj/B8NlGvGJmAp2gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PLANTA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._planta.ggIsActive=function() {
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
		me._planta.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta.style.transition='';
				if (me._planta.ggCurrentLogicStateVisible == 0) {
					me._planta.style.visibility=(Number(me._planta.style.opacity)>0||!me._planta.style.opacity)?'inherit':'hidden';
					me._planta.ggVisible=true;
				}
				else if (me._planta.ggCurrentLogicStateVisible == 1) {
					me._planta.style.visibility="hidden";
					me._planta.ggVisible=false;
				}
				else {
					me._planta.style.visibility="hidden";
					me._planta.ggVisible=false;
				}
			}
		}
		me._planta.logicBlock_visible();
		me._planta.ggUpdatePosition=function (useTransition) {
		}
		me._tplanta_implantao.appendChild(me._planta);
		me.divSkin.appendChild(me._tplanta_implantao);
		el=me._informaes_tcnicas=document.createElement('div');
		els=me._informaes_tcnicas__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="INFORMA\xc7\xd5ES T\xc9CNICAS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 5px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 138px;';
		hs+='visibility : inherit;';
		hs+='width : calc(217px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #626262;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 12px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._informaes_tcnicas.ggUpdateText=function() {
			var params = [];
			var hs = player._("INFORMA\xc7\xd5ES T\xc9CNICAS", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._informaes_tcnicas.ggUpdateText();
		el.appendChild(els);
		me._informaes_tcnicas.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._informaes_tcnicas.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._informaes_tcnicas.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._informaes_tcnicas.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._informaes_tcnicas.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._informaes_tcnicas.ggCurrentLogicStatePosition == 0) {
					me._informaes_tcnicas.style.left='-20px';
					me._informaes_tcnicas.style.top='90px';
				}
				else {
					me._informaes_tcnicas.style.left='5px';
					me._informaes_tcnicas.style.top='138px';
				}
			}
		}
		me._informaes_tcnicas.logicBlock_position();
		me._informaes_tcnicas.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 1028)) && 
				((me.elementMouseOver['informaes_tcnicas'] == true)) && 
				((player.getVariableValue('indicativo') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._informaes_tcnicas.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._informaes_tcnicas.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._informaes_tcnicas.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._informaes_tcnicas.ggCurrentLogicStateScaling == 0) {
					me._informaes_tcnicas.ggParameter.sx = 0.8;
					me._informaes_tcnicas.ggParameter.sy = 0.8;
					me._informaes_tcnicas.style.transform=parameterToTransform(me._informaes_tcnicas.ggParameter);
					skin.updateSize(me._informaes_tcnicas);
				}
				else if (me._informaes_tcnicas.ggCurrentLogicStateScaling == 1) {
					me._informaes_tcnicas.ggParameter.sx = 0.8;
					me._informaes_tcnicas.ggParameter.sy = 0.8;
					me._informaes_tcnicas.style.transform=parameterToTransform(me._informaes_tcnicas.ggParameter);
					skin.updateSize(me._informaes_tcnicas);
				}
				else {
					me._informaes_tcnicas.ggParameter.sx = 1;
					me._informaes_tcnicas.ggParameter.sy = 1;
					me._informaes_tcnicas.style.transform=parameterToTransform(me._informaes_tcnicas.ggParameter);
					skin.updateSize(me._informaes_tcnicas);
				}
			}
		}
		me._informaes_tcnicas.logicBlock_scaling();
		me._informaes_tcnicas.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['informaes_tcnicas'] == true)) && 
				((player.getVariableValue('indicativo') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._informaes_tcnicas.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._informaes_tcnicas.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._informaes_tcnicas.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._informaes_tcnicas.ggCurrentLogicStateAlpha == 0) {
					me._informaes_tcnicas.style.visibility=me._informaes_tcnicas.ggVisible?'inherit':'hidden';
					me._informaes_tcnicas.style.opacity=1;
				}
				else {
					me._informaes_tcnicas.style.visibility=me._informaes_tcnicas.ggVisible?'inherit':'hidden';
					me._informaes_tcnicas.style.opacity=0.7;
				}
			}
		}
		me._informaes_tcnicas.logicBlock_alpha();
		me._informaes_tcnicas.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['informaes_tcnicas'] == true)) && 
				((player.getVariableValue('indicativo') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('TEC') == true)) && 
				((player.getVariableValue('indicativo') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._informaes_tcnicas.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._informaes_tcnicas.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._informaes_tcnicas__text.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._informaes_tcnicas.ggCurrentLogicStateBackgroundColor == 0) {
					me._informaes_tcnicas__text.style.backgroundColor="rgba(16,16,16,1)";
				}
				else if (me._informaes_tcnicas.ggCurrentLogicStateBackgroundColor == 1) {
					me._informaes_tcnicas__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._informaes_tcnicas__text.style.backgroundColor="rgba(98,98,98,1)";
				}
			}
		}
		me._informaes_tcnicas.logicBlock_backgroundcolor();
		me._informaes_tcnicas.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._info_tec2.ggVisible = !me._info_tec2.ggVisible;
				var flag=me._info_tec2.ggVisible;
				me._info_tec2.style.transition='none';
				me._info_tec2.style.visibility=((flag)&&(Number(me._info_tec2.style.opacity)>0||!me._info_tec2.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._information2.ggVisible = !me._information2.ggVisible;
				var flag=me._information2.ggVisible;
				me._information2.style.transition='none';
				me._information2.style.visibility=((flag)&&(Number(me._information2.style.opacity)>0||!me._information2.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.setVariableValue('TEC', !player.getVariableValue('TEC'));
			}
		}
		me._informaes_tcnicas.onmouseenter=function (e) {
			me.elementMouseOver['informaes_tcnicas']=true;
			me._informaes_tcnicas.logicBlock_scaling();
			me._informaes_tcnicas.logicBlock_alpha();
			me._informaes_tcnicas.logicBlock_backgroundcolor();
		}
		me._informaes_tcnicas.onmouseleave=function (e) {
			me.elementMouseOver['informaes_tcnicas']=false;
			me._informaes_tcnicas.logicBlock_scaling();
			me._informaes_tcnicas.logicBlock_alpha();
			me._informaes_tcnicas.logicBlock_backgroundcolor();
		}
		me._informaes_tcnicas.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_tec_logo=document.createElement('div');
		els=me._info_tec_logo__img=document.createElement('img');
		els.className='ggskin ggskin_info_tec_logo';
		hs=basePath + 'images/info_tec_logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="INFO TEC LOGO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_tec_logo.ggIsActive=function() {
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
		me._info_tec_logo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_tec_logo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_tec_logo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_tec_logo.style.transition='';
				if (me._info_tec_logo.ggCurrentLogicStateVisible == 0) {
					me._info_tec_logo.style.visibility=(Number(me._info_tec_logo.style.opacity)>0||!me._info_tec_logo.style.opacity)?'inherit':'hidden';
					me._info_tec_logo.ggVisible=true;
				}
				else if (me._info_tec_logo.ggCurrentLogicStateVisible == 1) {
					me._info_tec_logo.style.visibility="hidden";
					me._info_tec_logo.ggVisible=false;
				}
				else {
					me._info_tec_logo.style.visibility="hidden";
					me._info_tec_logo.ggVisible=false;
				}
			}
		}
		me._info_tec_logo.logicBlock_visible();
		me._info_tec_logo.ggUpdatePosition=function (useTransition) {
		}
		me._informaes_tcnicas.appendChild(me._info_tec_logo);
		me.divSkin.appendChild(me._informaes_tcnicas);
		el=me._unidades_m2=document.createElement('div');
		els=me._unidades_m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="UNIDADES | M2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 3px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : inherit;';
		hs+='width : calc(217px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #626262;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 12px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._unidades_m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNIDADES | M2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._unidades_m2.ggUpdateText();
		el.appendChild(els);
		me._unidades_m2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._unidades_m2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._unidades_m2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._unidades_m2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._unidades_m2.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._unidades_m2.ggCurrentLogicStatePosition == 0) {
					me._unidades_m2.style.left='-20px';
					me._unidades_m2.style.top='110px';
				}
				else {
					me._unidades_m2.style.left='3px';
					me._unidades_m2.style.top='181px';
				}
			}
		}
		me._unidades_m2.logicBlock_position();
		me._unidades_m2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 1028)) && 
				((me.elementMouseOver['unidades_m2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._unidades_m2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._unidades_m2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._unidades_m2.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._unidades_m2.ggCurrentLogicStateScaling == 0) {
					me._unidades_m2.ggParameter.sx = 0.8;
					me._unidades_m2.ggParameter.sy = 0.8;
					me._unidades_m2.style.transform=parameterToTransform(me._unidades_m2.ggParameter);
					skin.updateSize(me._unidades_m2);
				}
				else if (me._unidades_m2.ggCurrentLogicStateScaling == 1) {
					me._unidades_m2.ggParameter.sx = 0.8;
					me._unidades_m2.ggParameter.sy = 0.8;
					me._unidades_m2.style.transform=parameterToTransform(me._unidades_m2.ggParameter);
					skin.updateSize(me._unidades_m2);
				}
				else {
					me._unidades_m2.ggParameter.sx = 1;
					me._unidades_m2.ggParameter.sy = 1;
					me._unidades_m2.style.transform=parameterToTransform(me._unidades_m2.ggParameter);
					skin.updateSize(me._unidades_m2);
				}
			}
		}
		me._unidades_m2.logicBlock_scaling();
		me._unidades_m2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['unidades_m2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._unidades_m2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._unidades_m2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._unidades_m2.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._unidades_m2.ggCurrentLogicStateAlpha == 0) {
					me._unidades_m2.style.visibility=me._unidades_m2.ggVisible?'inherit':'hidden';
					me._unidades_m2.style.opacity=1;
				}
				else {
					me._unidades_m2.style.visibility=me._unidades_m2.ggVisible?'inherit':'hidden';
					me._unidades_m2.style.opacity=0.7;
				}
			}
		}
		me._unidades_m2.logicBlock_alpha();
		me._unidades_m2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['unidades_m2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('B1') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._unidades_m2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._unidades_m2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._unidades_m2__text.style.transition='left 0s, top 0s, transform 0s, opacity 0s, background-color 0s';
				if (me._unidades_m2.ggCurrentLogicStateBackgroundColor == 0) {
					me._unidades_m2__text.style.backgroundColor="rgba(16,16,16,1)";
				}
				else if (me._unidades_m2.ggCurrentLogicStateBackgroundColor == 1) {
					me._unidades_m2__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._unidades_m2__text.style.backgroundColor="rgba(98,98,98,1)";
				}
			}
		}
		me._unidades_m2.logicBlock_backgroundcolor();
		me._unidades_m2.onclick=function (e) {
			player.setVariableValue('B1', !player.getVariableValue('B1'));
			var flag=me._unidadesm4.ggPositonActive;
			if (player.transitionsDisabled) {
				me._unidadesm4.style.transition='none';
			} else {
				me._unidadesm4.style.transition='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._unidadesm4.ggParameter.rx=0;me._unidadesm4.ggParameter.ry=0;
			} else {
				me._unidadesm4.ggParameter.rx=550;me._unidadesm4.ggParameter.ry=0;
			}
				me._unidadesm4.style.transform=parameterToTransform(me._unidadesm4.ggParameter);
			me._unidadesm4.ggPositonActive=!flag;
			var flag=me._unidadesm2.ggPositonActive;
			if (player.transitionsDisabled) {
				me._unidadesm2.style.transition='none';
			} else {
				me._unidadesm2.style.transition='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._unidadesm2.ggParameter.rx=0;me._unidadesm2.ggParameter.ry=0;
			} else {
				me._unidadesm2.ggParameter.rx=380;me._unidadesm2.ggParameter.ry=0;
			}
				me._unidadesm2.style.transform=parameterToTransform(me._unidadesm2.ggParameter);
			me._unidadesm2.ggPositonActive=!flag;
			player.setVariableValue('UNIDADES', true);
			player.setVariableValue('UN', !player.getVariableValue('UN'));
			player.setVariableValue('Planta44', false);
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('FINAL12', false);
			player.setVariableValue('FINAL3AB', false);
			player.setVariableValue('FINAL5B', false);
			player.setVariableValue('FINAL5A', false);
			player.setVariableValue('FINAL3A', false);
			player.setVariableValue('FINAL4A', false);
			player.setVariableValue('FINAL6AB', false);
			player.hideOnePolyHotspot("FINAL 1B");
			player.hideOnePolyHotspot("FINAL 3B");
			player.hideOnePolyHotspot("FINAL 5B");
			player.hideOnePolyHotspot("FINAL 3A");
			player.hideOnePolyHotspot("FINAL 1A");
			player.hideOnePolyHotspot("FINAL 5A");
			player.hideOnePolyHotspot("FINAL 2A");
			player.hideOnePolyHotspot("FINAL 4A");
			player.hideOnePolyHotspot("FINAL 2B");
			player.hideOnePolyHotspot("FINAL 4B");
			player.hideOnePolyHotspot("FINAL 6 A - B");
			player.hideOnePolyHotspot("FINAL 3A - VENDIDO");
			player.hideOnePolyHotspot("FINAL 3B VENDIDO");
			player.hideOnePolyHotspot("FINAL 4A - VENDIDO");
			player.hideOnePolyHotspot("FINAL 1B - VENDIDO");
			player.hideOnePolyHotspot("FINAL 5B - VENDIDO");
			player.hideOnePolyHotspot("FINAL 3B VENDIDO-2");
			player.setVariableValue('VEN', false);
		}
		me._unidades_m2.onmouseenter=function (e) {
			me.elementMouseOver['unidades_m2']=true;
			me._unidades_m2.logicBlock_scaling();
			me._unidades_m2.logicBlock_alpha();
			me._unidades_m2.logicBlock_backgroundcolor();
		}
		me._unidades_m2.onmouseleave=function (e) {
			me.elementMouseOver['unidades_m2']=false;
			me._unidades_m2.logicBlock_scaling();
			me._unidades_m2.logicBlock_alpha();
			me._unidades_m2.logicBlock_backgroundcolor();
		}
		me._unidades_m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._um2=document.createElement('div');
		els=me._um2__img=document.createElement('img');
		els.className='ggskin ggskin_um2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAHbCAYAAAA3XAR+AAAGaklEQVR4nO3ZQW7bMBRAQavQKXS/nMPQZXkNdZFF2iAvSF3bVNqZtWF8ENQDKS0vF4CP/Zg9AHBeAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBANL6lR/tYxyPHgT4e9dtW+75f04QQBIIIAkEkAQCSPmS0otJwAkCSF/6zAl8D7+e/O/xydMJAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAAaZ09wEeu27bMnuFP7GMcj/rv77YWl8vj1uM7rsXl8tj98WinCsR33QDwr3LFAJJAAEkggCQQQBIIIAkEkA'+
			'QCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQDSqQKxj3HsYxyz5wBenSoQwLkIBJAEAkjr7AH4nHcyb6zF850yEDYCnIMrBpAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkNbZA9Cu27bMnuEW+xjH7Bm4j1MFwgPBZ+yP53PFAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJA'+
			'AEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCCtsweg7WMcs2c4E+vxfKcKhA0A5+KKASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEA0jp7ANp125bZM9xiH+OYPQP3cbpAeCgo9sbzuWIASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIK2zB6DtYxyzZ+'+
			'D/drpAeCgo9sbzuWIASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEBaZw/w3nXbltkz3GIf45g9A9zb6QLBG7H8nfV4PlcMIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAGmdPcB7+xjH7BmAV04QQDrdCYI3TlO/sx7P5wQBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEAS'+
			'CCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJI6+wB3rtu2zJ7hlvsYxyzZ4B7c4IAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIAgEkgQCSQABJIIAkEEASCCAJBJAEAkgCASSBAJJAAEkggCQQQBIIIAkEkAQCSAIBpOVl9gTAaTlBAEkggCQQQBIIIAkEkAQCSAIBJIEAkkAASSCAJBBAEgggCQSQBAJIPwFhGHLPeANaAw'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="UM2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._um2.ggIsActive=function() {
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
		me._um2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._um2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._um2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._um2.style.transition='';
				if (me._um2.ggCurrentLogicStateVisible == 0) {
					me._um2.style.visibility=(Number(me._um2.style.opacity)>0||!me._um2.style.opacity)?'inherit':'hidden';
					me._um2.ggVisible=true;
				}
				else if (me._um2.ggCurrentLogicStateVisible == 1) {
					me._um2.style.visibility="hidden";
					me._um2.ggVisible=false;
				}
				else {
					me._um2.style.visibility="hidden";
					me._um2.ggVisible=false;
				}
			}
		}
		me._um2.logicBlock_visible();
		me._um2.ggUpdatePosition=function (useTransition) {
		}
		me._unidades_m2.appendChild(me._um2);
		me.divSkin.appendChild(me._unidades_m2);
		el=me._img_planta_448=document.createElement('div');
		els=me._img_planta_448__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_448';
		hs=basePath + 'images/img_planta_448.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 44,8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_448.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_448.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_448.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_448.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_448.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_448.ggCurrentLogicStatePosition == 0) {
					me._img_planta_448.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_448.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_448.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta_448.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta_448.logicBlock_position();
		me._img_planta_448.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_448'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_448.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_448.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_448.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_448.ggCurrentLogicStateScaling == 0) {
					me._img_planta_448.ggParameter.sx = 1.5;
					me._img_planta_448.ggParameter.sy = 1.5;
					me._img_planta_448.style.transform=parameterToTransform(me._img_planta_448.ggParameter);
					skin.updateSize(me._img_planta_448);
				}
				else if (me._img_planta_448.ggCurrentLogicStateScaling == 1) {
					me._img_planta_448.ggParameter.sx = 0.9;
					me._img_planta_448.ggParameter.sy = 0.9;
					me._img_planta_448.style.transform=parameterToTransform(me._img_planta_448.ggParameter);
					skin.updateSize(me._img_planta_448);
				}
				else {
					me._img_planta_448.ggParameter.sx = 1;
					me._img_planta_448.ggParameter.sy = 1;
					me._img_planta_448.style.transform=parameterToTransform(me._img_planta_448.ggParameter);
					skin.updateSize(me._img_planta_448);
				}
			}
		}
		me._img_planta_448.logicBlock_scaling();
		me._img_planta_448.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3A') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_448.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_448.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_448.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_448.ggCurrentLogicStateVisible == 0) {
					me._img_planta_448.style.visibility="hidden";
					me._img_planta_448.ggVisible=false;
				}
				else {
					me._img_planta_448.style.visibility="hidden";
					me._img_planta_448.ggVisible=false;
				}
			}
		}
		me._img_planta_448.logicBlock_visible();
		me._img_planta_448.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_448']=true;
			me._img_planta_448.logicBlock_scaling();
		}
		me._img_planta_448.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_448']=false;
			me._img_planta_448.logicBlock_scaling();
		}
		me._img_planta_448.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_448);
		el=me._img_planta_457=document.createElement('div');
		els=me._img_planta_457__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_457';
		hs=basePath + 'images/img_planta_457.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 45,7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_457.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_457.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_457.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_457.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_457.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_457.ggCurrentLogicStatePosition == 0) {
					me._img_planta_457.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_457.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_457.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta_457.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta_457.logicBlock_position();
		me._img_planta_457.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_457'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_457.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_457.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_457.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_457.ggCurrentLogicStateScaling == 0) {
					me._img_planta_457.ggParameter.sx = 1.5;
					me._img_planta_457.ggParameter.sy = 1.5;
					me._img_planta_457.style.transform=parameterToTransform(me._img_planta_457.ggParameter);
					skin.updateSize(me._img_planta_457);
				}
				else if (me._img_planta_457.ggCurrentLogicStateScaling == 1) {
					me._img_planta_457.ggParameter.sx = 0.9;
					me._img_planta_457.ggParameter.sy = 0.9;
					me._img_planta_457.style.transform=parameterToTransform(me._img_planta_457.ggParameter);
					skin.updateSize(me._img_planta_457);
				}
				else {
					me._img_planta_457.ggParameter.sx = 1;
					me._img_planta_457.ggParameter.sy = 1;
					me._img_planta_457.style.transform=parameterToTransform(me._img_planta_457.ggParameter);
					skin.updateSize(me._img_planta_457);
				}
			}
		}
		me._img_planta_457.logicBlock_scaling();
		me._img_planta_457.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL4A') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_457.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_457.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_457.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_457.ggCurrentLogicStateVisible == 0) {
					me._img_planta_457.style.visibility="hidden";
					me._img_planta_457.ggVisible=false;
				}
				else {
					me._img_planta_457.style.visibility="hidden";
					me._img_planta_457.ggVisible=false;
				}
			}
		}
		me._img_planta_457.logicBlock_visible();
		me._img_planta_457.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_457']=true;
			me._img_planta_457.logicBlock_scaling();
		}
		me._img_planta_457.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_457']=false;
			me._img_planta_457.logicBlock_scaling();
		}
		me._img_planta_457.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_457);
		el=me._img_planta_584=document.createElement('div');
		els=me._img_planta_584__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_584';
		hs=basePath + 'images/img_planta_584.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 58,4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_584.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_584.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_584.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_584.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_584.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_584.ggCurrentLogicStatePosition == 0) {
					me._img_planta_584.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_584.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_584.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta_584.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta_584.logicBlock_position();
		me._img_planta_584.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_584'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_584.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_584.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_584.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_584.ggCurrentLogicStateScaling == 0) {
					me._img_planta_584.ggParameter.sx = 1.5;
					me._img_planta_584.ggParameter.sy = 1.5;
					me._img_planta_584.style.transform=parameterToTransform(me._img_planta_584.ggParameter);
					skin.updateSize(me._img_planta_584);
				}
				else if (me._img_planta_584.ggCurrentLogicStateScaling == 1) {
					me._img_planta_584.ggParameter.sx = 0.9;
					me._img_planta_584.ggParameter.sy = 0.9;
					me._img_planta_584.style.transform=parameterToTransform(me._img_planta_584.ggParameter);
					skin.updateSize(me._img_planta_584);
				}
				else {
					me._img_planta_584.ggParameter.sx = 1;
					me._img_planta_584.ggParameter.sy = 1;
					me._img_planta_584.style.transform=parameterToTransform(me._img_planta_584.ggParameter);
					skin.updateSize(me._img_planta_584);
				}
			}
		}
		me._img_planta_584.logicBlock_scaling();
		me._img_planta_584.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL6AB') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_584.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_584.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_584.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_584.ggCurrentLogicStateVisible == 0) {
					me._img_planta_584.style.visibility="hidden";
					me._img_planta_584.ggVisible=false;
				}
				else {
					me._img_planta_584.style.visibility="hidden";
					me._img_planta_584.ggVisible=false;
				}
			}
		}
		me._img_planta_584.logicBlock_visible();
		me._img_planta_584.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_584']=true;
			me._img_planta_584.logicBlock_scaling();
		}
		me._img_planta_584.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_584']=false;
			me._img_planta_584.logicBlock_scaling();
		}
		me._img_planta_584.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_584);
		el=me._img_planta_651=document.createElement('div');
		els=me._img_planta_651__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_651';
		hs=basePath + 'images/img_planta_651.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 65,1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_651.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_651.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_651.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_651.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_651.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_651.ggCurrentLogicStatePosition == 0) {
					me._img_planta_651.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_651.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_651.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta_651.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta_651.logicBlock_position();
		me._img_planta_651.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_651'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_651.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_651.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_651.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_651.ggCurrentLogicStateScaling == 0) {
					me._img_planta_651.ggParameter.sx = 1.5;
					me._img_planta_651.ggParameter.sy = 1.5;
					me._img_planta_651.style.transform=parameterToTransform(me._img_planta_651.ggParameter);
					skin.updateSize(me._img_planta_651);
				}
				else if (me._img_planta_651.ggCurrentLogicStateScaling == 1) {
					me._img_planta_651.ggParameter.sx = 0.9;
					me._img_planta_651.ggParameter.sy = 0.9;
					me._img_planta_651.style.transform=parameterToTransform(me._img_planta_651.ggParameter);
					skin.updateSize(me._img_planta_651);
				}
				else {
					me._img_planta_651.ggParameter.sx = 1;
					me._img_planta_651.ggParameter.sy = 1;
					me._img_planta_651.style.transform=parameterToTransform(me._img_planta_651.ggParameter);
					skin.updateSize(me._img_planta_651);
				}
			}
		}
		me._img_planta_651.logicBlock_scaling();
		me._img_planta_651.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5A') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_651.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_651.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_651.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_651.ggCurrentLogicStateVisible == 0) {
					me._img_planta_651.style.visibility="hidden";
					me._img_planta_651.ggVisible=false;
				}
				else {
					me._img_planta_651.style.visibility="hidden";
					me._img_planta_651.ggVisible=false;
				}
			}
		}
		me._img_planta_651.logicBlock_visible();
		me._img_planta_651.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_651']=true;
			me._img_planta_651.logicBlock_scaling();
		}
		me._img_planta_651.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_651']=false;
			me._img_planta_651.logicBlock_scaling();
		}
		me._img_planta_651.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_651);
		el=me._img_planta_675=document.createElement('div');
		els=me._img_planta_675__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_675';
		hs=basePath + 'images/img_planta_675.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 67,5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_675.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_675.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_675.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_675.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_675.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_675.ggCurrentLogicStatePosition == 0) {
					me._img_planta_675.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_675.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_675.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta_675.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta_675.logicBlock_position();
		me._img_planta_675.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_675'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_675.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_675.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_675.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_675.ggCurrentLogicStateScaling == 0) {
					me._img_planta_675.ggParameter.sx = 1.5;
					me._img_planta_675.ggParameter.sy = 1.5;
					me._img_planta_675.style.transform=parameterToTransform(me._img_planta_675.ggParameter);
					skin.updateSize(me._img_planta_675);
				}
				else if (me._img_planta_675.ggCurrentLogicStateScaling == 1) {
					me._img_planta_675.ggParameter.sx = 0.9;
					me._img_planta_675.ggParameter.sy = 0.9;
					me._img_planta_675.style.transform=parameterToTransform(me._img_planta_675.ggParameter);
					skin.updateSize(me._img_planta_675);
				}
				else {
					me._img_planta_675.ggParameter.sx = 1;
					me._img_planta_675.ggParameter.sy = 1;
					me._img_planta_675.style.transform=parameterToTransform(me._img_planta_675.ggParameter);
					skin.updateSize(me._img_planta_675);
				}
			}
		}
		me._img_planta_675.logicBlock_scaling();
		me._img_planta_675.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5B') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_675.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_675.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_675.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_675.ggCurrentLogicStateVisible == 0) {
					me._img_planta_675.style.visibility="hidden";
					me._img_planta_675.ggVisible=false;
				}
				else {
					me._img_planta_675.style.visibility="hidden";
					me._img_planta_675.ggVisible=false;
				}
			}
		}
		me._img_planta_675.logicBlock_visible();
		me._img_planta_675.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_675']=true;
			me._img_planta_675.logicBlock_scaling();
		}
		me._img_planta_675.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_675']=false;
			me._img_planta_675.logicBlock_scaling();
		}
		me._img_planta_675.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_675);
		el=me._img_planta746=document.createElement('div');
		els=me._img_planta746__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta746';
		hs=basePath + 'images/img_planta746.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA74,6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta746.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta746.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta746.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta746.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta746.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta746.ggCurrentLogicStatePosition == 0) {
					me._img_planta746.style.left = 'calc(50% - (400px / 2))';
					me._img_planta746.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta746.style.left='calc(50% - ((400px + 0px) / 2) + 0px)';
					me._img_planta746.style.top='calc(50% - ((400px + 0px) / 2) + 0px)';
				}
			}
		}
		me._img_planta746.logicBlock_position();
		me._img_planta746.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta746'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta746.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta746.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta746.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta746.ggCurrentLogicStateScaling == 0) {
					me._img_planta746.ggParameter.sx = 1.5;
					me._img_planta746.ggParameter.sy = 1.5;
					me._img_planta746.style.transform=parameterToTransform(me._img_planta746.ggParameter);
					skin.updateSize(me._img_planta746);
				}
				else if (me._img_planta746.ggCurrentLogicStateScaling == 1) {
					me._img_planta746.ggParameter.sx = 0.9;
					me._img_planta746.ggParameter.sy = 0.9;
					me._img_planta746.style.transform=parameterToTransform(me._img_planta746.ggParameter);
					skin.updateSize(me._img_planta746);
				}
				else {
					me._img_planta746.ggParameter.sx = 1;
					me._img_planta746.ggParameter.sy = 1;
					me._img_planta746.style.transform=parameterToTransform(me._img_planta746.ggParameter);
					skin.updateSize(me._img_planta746);
				}
			}
		}
		me._img_planta746.logicBlock_scaling();
		me._img_planta746.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3AB') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta746.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta746.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta746.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta746.ggCurrentLogicStateVisible == 0) {
					me._img_planta746.style.visibility="hidden";
					me._img_planta746.ggVisible=false;
				}
				else {
					me._img_planta746.style.visibility="hidden";
					me._img_planta746.ggVisible=false;
				}
			}
		}
		me._img_planta746.logicBlock_visible();
		me._img_planta746.onmouseenter=function (e) {
			me.elementMouseOver['img_planta746']=true;
			me._img_planta746.logicBlock_scaling();
		}
		me._img_planta746.onmouseleave=function (e) {
			me.elementMouseOver['img_planta746']=false;
			me._img_planta746.logicBlock_scaling();
		}
		me._img_planta746.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta746);
		el=me._img_planta_842=document.createElement('div');
		els=me._img_planta_842__img=document.createElement('img');
		els.className='ggskin ggskin_img_planta_842';
		hs=basePath + 'images/img_planta_842.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="img PLANTA 84,2";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_planta_842.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._img_planta_842.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._img_planta_842.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._img_planta_842.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._img_planta_842.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_842.ggCurrentLogicStatePosition == 0) {
					me._img_planta_842.style.left = 'calc(50% - (400px / 2))';
					me._img_planta_842.style.top = 'calc(50% - (400px / 2) - (0px / 2) + 150px)';
				}
				else {
					me._img_planta_842.style.left='calc(50% - ((400px + 0px) / 2) + 2px)';
					me._img_planta_842.style.top='calc(50% - ((400px + 0px) / 2) + 2px)';
				}
			}
		}
		me._img_planta_842.logicBlock_position();
		me._img_planta_842.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 1028)) && 
				((me.elementMouseOver['img_planta_842'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._img_planta_842.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._img_planta_842.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._img_planta_842.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_842.ggCurrentLogicStateScaling == 0) {
					me._img_planta_842.ggParameter.sx = 1.5;
					me._img_planta_842.ggParameter.sy = 1.5;
					me._img_planta_842.style.transform=parameterToTransform(me._img_planta_842.ggParameter);
					skin.updateSize(me._img_planta_842);
				}
				else if (me._img_planta_842.ggCurrentLogicStateScaling == 1) {
					me._img_planta_842.ggParameter.sx = 0.9;
					me._img_planta_842.ggParameter.sy = 0.9;
					me._img_planta_842.style.transform=parameterToTransform(me._img_planta_842.ggParameter);
					skin.updateSize(me._img_planta_842);
				}
				else {
					me._img_planta_842.ggParameter.sx = 1;
					me._img_planta_842.ggParameter.sy = 1;
					me._img_planta_842.style.transform=parameterToTransform(me._img_planta_842.ggParameter);
					skin.updateSize(me._img_planta_842);
				}
			}
		}
		me._img_planta_842.logicBlock_scaling();
		me._img_planta_842.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL12') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._img_planta_842.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._img_planta_842.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._img_planta_842.style.transition='left 0s, top 0s, transform 0s';
				if (me._img_planta_842.ggCurrentLogicStateVisible == 0) {
					me._img_planta_842.style.visibility="hidden";
					me._img_planta_842.ggVisible=false;
				}
				else {
					me._img_planta_842.style.visibility="hidden";
					me._img_planta_842.ggVisible=false;
				}
			}
		}
		me._img_planta_842.logicBlock_visible();
		me._img_planta_842.onmouseenter=function (e) {
			me.elementMouseOver['img_planta_842']=true;
			me._img_planta_842.logicBlock_scaling();
		}
		me._img_planta_842.onmouseleave=function (e) {
			me.elementMouseOver['img_planta_842']=false;
			me._img_planta_842.logicBlock_scaling();
		}
		me._img_planta_842.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._img_planta_842);
		el=me._unidadesm2=document.createElement('div');
		el.ggId="Unidadesm2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 653px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unidadesm2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._unidadesm2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 1028))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._unidadesm2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._unidadesm2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._unidadesm2.style.transition='';
				if (me._unidadesm2.ggCurrentLogicStateVisible == 0) {
					me._unidadesm2.style.visibility=(Number(me._unidadesm2.style.opacity)>0||!me._unidadesm2.style.opacity)?'inherit':'hidden';
					me._unidadesm2.ggVisible=true;
				}
				else {
					me._unidadesm2.style.visibility="hidden";
					me._unidadesm2.ggVisible=false;
				}
			}
		}
		me._unidadesm2.logicBlock_visible();
		me._unidadesm2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #8c8c8c;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 40px;';
		hs+='cursor : default;';
		hs+='height : 425px;';
		hs+='left : -451px;';
		hs+='position : absolute;';
		hs+='top : -410px;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
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
		me._rectangle_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_10.style.transition='';
				if (me._rectangle_10.ggCurrentLogicStateVisible == 0) {
					me._rectangle_10.style.visibility=(Number(me._rectangle_10.style.opacity)>0||!me._rectangle_10.style.opacity)?'inherit':'hidden';
					me._rectangle_10.ggVisible=true;
				}
				else {
					me._rectangle_10.style.visibility="hidden";
					me._rectangle_10.ggVisible=false;
				}
			}
		}
		me._rectangle_10.logicBlock_visible();
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._rectangle_10);
		el=me.__4570=document.createElement('div');
		els=me.__4570__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="45,7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -442px;';
		hs+='position : absolute;';
		hs+='top : -105px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__4570.ggUpdateText=function() {
			var params = [];
			var hs = player._("45,7", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4570.ggUpdateText();
		el.appendChild(els);
		me.__4570.ggIsActive=function() {
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
		me.__4570.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_4570'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__4570.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__4570.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__4570.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4570.ggCurrentLogicStateScaling == 0) {
					me.__4570.ggParameter.sx = 1.5;
					me.__4570.ggParameter.sy = 1.5;
					me.__4570.style.transform=parameterToTransform(me.__4570.ggParameter);
					setTimeout(function() {skin.updateSize(me.__4570);}, 550);
				}
				else {
					me.__4570.ggParameter.sx = 1;
					me.__4570.ggParameter.sy = 1;
					me.__4570.style.transform=parameterToTransform(me.__4570.ggParameter);
					setTimeout(function() {skin.updateSize(me.__4570);}, 550);
				}
			}
		}
		me.__4570.logicBlock_scaling();
		me.__4570.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4570.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4570.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4570.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4570.ggCurrentLogicStateVisible == 0) {
					me.__4570.style.visibility=(Number(me.__4570.style.opacity)>0||!me.__4570.style.opacity)?'inherit':'hidden';
					me.__4570.ggVisible=true;
				}
				else {
					me.__4570.style.visibility="hidden";
					me.__4570.ggVisible=false;
				}
			}
		}
		me.__4570.logicBlock_visible();
		me.__4570.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL4A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4570.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4570.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4570__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4570.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4570__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__4570.ggCurrentLogicStateBackgroundColor == 1) {
					me.__4570__text.style.backgroundColor="rgba(0,85,0,1)";
				}
				else {
					me.__4570__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__4570.logicBlock_backgroundcolor();
		me.__4570.onclick=function (e) {
			player.setVariableValue('FINAL4A', !player.getVariableValue('FINAL4A'));
			player.toggleOnePolyHotspot("FINAL 4A");
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			player.setVariableValue('Planta45', false);
		}
		me.__4570.onmouseenter=function (e) {
			me.elementMouseOver['_4570']=true;
			me.__4570.logicBlock_scaling();
		}
		me.__4570.onmouseleave=function (e) {
			me.elementMouseOver['_4570']=false;
			me.__4570.logicBlock_scaling();
		}
		me.__4570.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__4570);
		el=me.__6510=document.createElement('div');
		els=me.__6510__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="65,1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -443px;';
		hs+='position : absolute;';
		hs+='top : -215px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__6510.ggUpdateText=function() {
			var params = [];
			var hs = player._("65,1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6510.ggUpdateText();
		el.appendChild(els);
		me.__6510.ggIsActive=function() {
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
		me.__6510.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_6510'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__6510.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__6510.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__6510.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6510.ggCurrentLogicStateScaling == 0) {
					me.__6510.ggParameter.sx = 1.5;
					me.__6510.ggParameter.sy = 1.5;
					me.__6510.style.transform=parameterToTransform(me.__6510.ggParameter);
					setTimeout(function() {skin.updateSize(me.__6510);}, 550);
				}
				else {
					me.__6510.ggParameter.sx = 1;
					me.__6510.ggParameter.sy = 1;
					me.__6510.style.transform=parameterToTransform(me.__6510.ggParameter);
					setTimeout(function() {skin.updateSize(me.__6510);}, 550);
				}
			}
		}
		me.__6510.logicBlock_scaling();
		me.__6510.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6510.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6510.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6510.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6510.ggCurrentLogicStateVisible == 0) {
					me.__6510.style.visibility=(Number(me.__6510.style.opacity)>0||!me.__6510.style.opacity)?'inherit':'hidden';
					me.__6510.ggVisible=true;
				}
				else {
					me.__6510.style.visibility="hidden";
					me.__6510.ggVisible=false;
				}
			}
		}
		me.__6510.logicBlock_visible();
		me.__6510.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL5A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__6510.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__6510.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__6510__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6510.ggCurrentLogicStateBackgroundColor == 0) {
					me.__6510__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__6510.ggCurrentLogicStateBackgroundColor == 1) {
					me.__6510__text.style.backgroundColor="rgba(0,170,255,1)";
				}
				else {
					me.__6510__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__6510.logicBlock_backgroundcolor();
		me.__6510.onclick=function (e) {
			player.setVariableValue('FINAL5A', !player.getVariableValue('FINAL5A'));
			player.toggleOnePolyHotspot("FINAL 5A");
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			player.setVariableValue('Planta65', false);
		}
		me.__6510.onmouseenter=function (e) {
			me.elementMouseOver['_6510']=true;
			me.__6510.logicBlock_scaling();
		}
		me.__6510.onmouseleave=function (e) {
			me.elementMouseOver['_6510']=false;
			me.__6510.logicBlock_scaling();
		}
		me.__6510.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__6510);
		el=me.__5840=document.createElement('div');
		els=me.__5840__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="58,4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -442px;';
		hs+='position : absolute;';
		hs+='top : -159px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__5840.ggUpdateText=function() {
			var params = [];
			var hs = player._("58,4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5840.ggUpdateText();
		el.appendChild(els);
		me.__5840.ggIsActive=function() {
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
		me.__5840.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_5840'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__5840.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__5840.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__5840.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__5840.ggCurrentLogicStateScaling == 0) {
					me.__5840.ggParameter.sx = 1.5;
					me.__5840.ggParameter.sy = 1.5;
					me.__5840.style.transform=parameterToTransform(me.__5840.ggParameter);
					setTimeout(function() {skin.updateSize(me.__5840);}, 550);
				}
				else {
					me.__5840.ggParameter.sx = 1;
					me.__5840.ggParameter.sy = 1;
					me.__5840.style.transform=parameterToTransform(me.__5840.ggParameter);
					setTimeout(function() {skin.updateSize(me.__5840);}, 550);
				}
			}
		}
		me.__5840.logicBlock_scaling();
		me.__5840.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5840.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5840.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5840.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__5840.ggCurrentLogicStateVisible == 0) {
					me.__5840.style.visibility=(Number(me.__5840.style.opacity)>0||!me.__5840.style.opacity)?'inherit':'hidden';
					me.__5840.ggVisible=true;
				}
				else {
					me.__5840.style.visibility="hidden";
					me.__5840.ggVisible=false;
				}
			}
		}
		me.__5840.logicBlock_visible();
		me.__5840.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL6AB') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5840.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5840.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5840__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__5840.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5840__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__5840.ggCurrentLogicStateBackgroundColor == 1) {
					me.__5840__text.style.backgroundColor="rgba(85,0,0,1)";
				}
				else {
					me.__5840__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__5840.logicBlock_backgroundcolor();
		me.__5840.onclick=function (e) {
			player.setVariableValue('FINAL6AB', !player.getVariableValue('FINAL6AB'));
			player.toggleOnePolyHotspot("FINAL 6 A - B");
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			player.setVariableValue('Planta58', false);
		}
		me.__5840.onmouseenter=function (e) {
			me.elementMouseOver['_5840']=true;
			me.__5840.logicBlock_scaling();
		}
		me.__5840.onmouseleave=function (e) {
			me.elementMouseOver['_5840']=false;
			me.__5840.logicBlock_scaling();
		}
		me.__5840.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__5840);
		el=me.__7460=document.createElement('div');
		els=me.__7460__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74,6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -442px;';
		hs+='position : absolute;';
		hs+='top : -331px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7460.ggUpdateText=function() {
			var params = [];
			var hs = player._("74,6", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7460.ggUpdateText();
		el.appendChild(els);
		me.__7460.ggIsActive=function() {
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
		me.__7460.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_7460'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__7460.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__7460.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__7460.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__7460.ggCurrentLogicStateScaling == 0) {
					me.__7460.ggParameter.sx = 1.5;
					me.__7460.ggParameter.sy = 1.5;
					me.__7460.style.transform=parameterToTransform(me.__7460.ggParameter);
					setTimeout(function() {skin.updateSize(me.__7460);}, 550);
				}
				else {
					me.__7460.ggParameter.sx = 1;
					me.__7460.ggParameter.sy = 1;
					me.__7460.style.transform=parameterToTransform(me.__7460.ggParameter);
					setTimeout(function() {skin.updateSize(me.__7460);}, 550);
				}
			}
		}
		me.__7460.logicBlock_scaling();
		me.__7460.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__7460.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__7460.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__7460.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__7460.ggCurrentLogicStateVisible == 0) {
					me.__7460.style.visibility=(Number(me.__7460.style.opacity)>0||!me.__7460.style.opacity)?'inherit':'hidden';
					me.__7460.ggVisible=true;
				}
				else {
					me.__7460.style.visibility="hidden";
					me.__7460.ggVisible=false;
				}
			}
		}
		me.__7460.logicBlock_visible();
		me.__7460.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL3AB') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__7460.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__7460.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__7460__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__7460.ggCurrentLogicStateBackgroundColor == 0) {
					me.__7460__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__7460.ggCurrentLogicStateBackgroundColor == 1) {
					me.__7460__text.style.backgroundColor="rgba(255,85,0,1)";
				}
				else {
					me.__7460__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__7460.logicBlock_backgroundcolor();
		me.__7460.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 3B");
			player.toggleOnePolyHotspot("FINAL 4B");
			player.setVariableValue('FINAL3AB', !player.getVariableValue('FINAL3AB'));
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta74', false);
		}
		me.__7460.onmouseenter=function (e) {
			me.elementMouseOver['_7460']=true;
			me.__7460.logicBlock_scaling();
		}
		me.__7460.onmouseleave=function (e) {
			me.elementMouseOver['_7460']=false;
			me.__7460.logicBlock_scaling();
		}
		me.__7460.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__7460);
		el=me.__842_0=document.createElement('div');
		els=me.__842_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="84,2 ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -442px;';
		hs+='position : absolute;';
		hs+='top : -386px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__842_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("84,2 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__842_0.ggUpdateText();
		el.appendChild(els);
		me.__842_0.ggIsActive=function() {
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
		me.__842_0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_842_0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__842_0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__842_0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__842_0.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_0.ggCurrentLogicStateScaling == 0) {
					me.__842_0.ggParameter.sx = 1.5;
					me.__842_0.ggParameter.sy = 1.5;
					me.__842_0.style.transform=parameterToTransform(me.__842_0.ggParameter);
					setTimeout(function() {skin.updateSize(me.__842_0);}, 550);
				}
				else {
					me.__842_0.ggParameter.sx = 1;
					me.__842_0.ggParameter.sy = 1;
					me.__842_0.style.transform=parameterToTransform(me.__842_0.ggParameter);
					setTimeout(function() {skin.updateSize(me.__842_0);}, 550);
				}
			}
		}
		me.__842_0.logicBlock_scaling();
		me.__842_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__842_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__842_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__842_0.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_0.ggCurrentLogicStateVisible == 0) {
					me.__842_0.style.visibility=(Number(me.__842_0.style.opacity)>0||!me.__842_0.style.opacity)?'inherit':'hidden';
					me.__842_0.ggVisible=true;
				}
				else {
					me.__842_0.style.visibility="hidden";
					me.__842_0.ggVisible=false;
				}
			}
		}
		me.__842_0.logicBlock_visible();
		me.__842_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL12') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__842_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__842_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__842_0__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__842_0__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__842_0.ggCurrentLogicStateBackgroundColor == 1) {
					me.__842_0__text.style.backgroundColor="rgba(0,0,127,1)";
				}
				else {
					me.__842_0__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__842_0.logicBlock_backgroundcolor();
		me.__842_0.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 2A");
			player.toggleOnePolyHotspot("FINAL 2B");
			player.toggleOnePolyHotspot("FINAL 1B");
			player.toggleOnePolyHotspot("FINAL 1A");
			player.setVariableValue('FINAL12', !player.getVariableValue('FINAL12'));
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			player.setVariableValue('Planta84', false);
		}
		me.__842_0.onmouseenter=function (e) {
			me.elementMouseOver['_842_0']=true;
			me.__842_0.logicBlock_scaling();
		}
		me.__842_0.onmouseleave=function (e) {
			me.elementMouseOver['_842_0']=false;
			me.__842_0.logicBlock_scaling();
		}
		me.__842_0.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__842_0);
		el=me.__6750=document.createElement('div');
		els=me.__6750__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="67,5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -443px;';
		hs+='position : absolute;';
		hs+='top : -274px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__6750.ggUpdateText=function() {
			var params = [];
			var hs = player._("67,5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6750.ggUpdateText();
		el.appendChild(els);
		me.__6750.ggIsActive=function() {
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
		me.__6750.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_6750'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__6750.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__6750.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__6750.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6750.ggCurrentLogicStateScaling == 0) {
					me.__6750.ggParameter.sx = 1.5;
					me.__6750.ggParameter.sy = 1.5;
					me.__6750.style.transform=parameterToTransform(me.__6750.ggParameter);
					setTimeout(function() {skin.updateSize(me.__6750);}, 550);
				}
				else {
					me.__6750.ggParameter.sx = 1;
					me.__6750.ggParameter.sy = 1;
					me.__6750.style.transform=parameterToTransform(me.__6750.ggParameter);
					setTimeout(function() {skin.updateSize(me.__6750);}, 550);
				}
			}
		}
		me.__6750.logicBlock_scaling();
		me.__6750.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6750.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6750.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6750.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6750.ggCurrentLogicStateVisible == 0) {
					me.__6750.style.visibility=(Number(me.__6750.style.opacity)>0||!me.__6750.style.opacity)?'inherit':'hidden';
					me.__6750.ggVisible=true;
				}
				else {
					me.__6750.style.visibility="hidden";
					me.__6750.ggVisible=false;
				}
			}
		}
		me.__6750.logicBlock_visible();
		me.__6750.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL5B') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__6750.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__6750.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__6750__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__6750.ggCurrentLogicStateBackgroundColor == 0) {
					me.__6750__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__6750.ggCurrentLogicStateBackgroundColor == 1) {
					me.__6750__text.style.backgroundColor="rgba(85,0,255,1)";
				}
				else {
					me.__6750__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__6750.logicBlock_backgroundcolor();
		me.__6750.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 5B");
			player.setVariableValue('FINAL5B', !player.getVariableValue('FINAL5B'));
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			player.setVariableValue('Planta67', false);
		}
		me.__6750.onmouseenter=function (e) {
			me.elementMouseOver['_6750']=true;
			me.__6750.logicBlock_scaling();
		}
		me.__6750.onmouseleave=function (e) {
			me.elementMouseOver['_6750']=false;
			me.__6750.logicBlock_scaling();
		}
		me.__6750.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__6750);
		el=me._planta_7460=document.createElement('div');
		els=me._planta_7460__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 74,6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -320px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_7460.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_7460.ggUpdateText();
		el.appendChild(els);
		me._planta_7460.ggIsActive=function() {
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
		me._planta_7460.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3AB') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_7460.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_7460.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_7460.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_7460.ggCurrentLogicStateVisible == 0) {
					me._planta_7460.style.visibility=(Number(me._planta_7460.style.opacity)>0||!me._planta_7460.style.opacity)?'inherit':'hidden';
					me._planta_7460.ggVisible=true;
				}
				else if (me._planta_7460.ggCurrentLogicStateVisible == 1) {
					me._planta_7460.style.visibility="hidden";
					me._planta_7460.ggVisible=false;
				}
				else {
					me._planta_7460.style.visibility="hidden";
					me._planta_7460.ggVisible=false;
				}
			}
		}
		me._planta_7460.logicBlock_visible();
		me._planta_7460.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta74') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_7460.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_7460.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_7460__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_7460.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_7460__text.style.backgroundColor="rgba(255,85,0,1)";
				}
				else {
					me._planta_7460__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_7460.logicBlock_backgroundcolor();
		me._planta_7460.onclick=function (e) {
			me._img_planta746.ggVisible = !me._img_planta746.ggVisible;
			var flag=me._img_planta746.ggVisible;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility=((flag)&&(Number(me._img_planta746.style.opacity)>0||!me._img_planta746.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			player.setVariableValue('Planta74', !player.getVariableValue('Planta74'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_7460.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_7460);
		el=me._planta_8420=document.createElement('div');
		els=me._planta_8420__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 84,2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -382px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_8420.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_8420.ggUpdateText();
		el.appendChild(els);
		me._planta_8420.ggIsActive=function() {
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
		me._planta_8420.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL12') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_8420.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_8420.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_8420.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_8420.ggCurrentLogicStateVisible == 0) {
					me._planta_8420.style.visibility=(Number(me._planta_8420.style.opacity)>0||!me._planta_8420.style.opacity)?'inherit':'hidden';
					me._planta_8420.ggVisible=true;
				}
				else if (me._planta_8420.ggCurrentLogicStateVisible == 1) {
					me._planta_8420.style.visibility="hidden";
					me._planta_8420.ggVisible=false;
				}
				else {
					me._planta_8420.style.visibility="hidden";
					me._planta_8420.ggVisible=false;
				}
			}
		}
		me._planta_8420.logicBlock_visible();
		me._planta_8420.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta84') == true)) && 
				((player.getVariableValue('FINAL12') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_8420.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_8420.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_8420__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_8420.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_8420__text.style.backgroundColor="rgba(0,0,127,1)";
				}
				else {
					me._planta_8420__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_8420.logicBlock_backgroundcolor();
		me._planta_8420.onclick=function (e) {
			me._img_planta_842.ggVisible = !me._img_planta_842.ggVisible;
			var flag=me._img_planta_842.ggVisible;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility=((flag)&&(Number(me._img_planta_842.style.opacity)>0||!me._img_planta_842.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta84', !player.getVariableValue('Planta84'));
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_8420.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_8420);
		el=me._planta_6750=document.createElement('div');
		els=me._planta_6750__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 67,5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -265px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_6750.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_6750.ggUpdateText();
		el.appendChild(els);
		me._planta_6750.ggIsActive=function() {
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
		me._planta_6750.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5B') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_6750.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_6750.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_6750.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_6750.ggCurrentLogicStateVisible == 0) {
					me._planta_6750.style.visibility=(Number(me._planta_6750.style.opacity)>0||!me._planta_6750.style.opacity)?'inherit':'hidden';
					me._planta_6750.ggVisible=true;
				}
				else if (me._planta_6750.ggCurrentLogicStateVisible == 1) {
					me._planta_6750.style.visibility="hidden";
					me._planta_6750.ggVisible=false;
				}
				else {
					me._planta_6750.style.visibility="hidden";
					me._planta_6750.ggVisible=false;
				}
			}
		}
		me._planta_6750.logicBlock_visible();
		me._planta_6750.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta67') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_6750.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_6750.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_6750__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_6750.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_6750__text.style.backgroundColor="rgba(0,0,255,1)";
				}
				else {
					me._planta_6750__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_6750.logicBlock_backgroundcolor();
		me._planta_6750.onclick=function (e) {
			me._img_planta_675.ggVisible = !me._img_planta_675.ggVisible;
			var flag=me._img_planta_675.ggVisible;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility=((flag)&&(Number(me._img_planta_675.style.opacity)>0||!me._img_planta_675.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta67', !player.getVariableValue('Planta67'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_6750.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_6750);
		el=me._planta_6510=document.createElement('div');
		els=me._planta_6510__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 65,1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -380px;';
		hs+='position : absolute;';
		hs+='top : -209px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_6510.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_6510.ggUpdateText();
		el.appendChild(els);
		me._planta_6510.ggIsActive=function() {
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
		me._planta_6510.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_6510.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_6510.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_6510.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_6510.ggCurrentLogicStateVisible == 0) {
					me._planta_6510.style.visibility=(Number(me._planta_6510.style.opacity)>0||!me._planta_6510.style.opacity)?'inherit':'hidden';
					me._planta_6510.ggVisible=true;
				}
				else if (me._planta_6510.ggCurrentLogicStateVisible == 1) {
					me._planta_6510.style.visibility="hidden";
					me._planta_6510.ggVisible=false;
				}
				else {
					me._planta_6510.style.visibility="hidden";
					me._planta_6510.ggVisible=false;
				}
			}
		}
		me._planta_6510.logicBlock_visible();
		me._planta_6510.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta65') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_6510.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_6510.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_6510__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_6510.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_6510__text.style.backgroundColor="rgba(0,170,255,1)";
				}
				else {
					me._planta_6510__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_6510.logicBlock_backgroundcolor();
		me._planta_6510.onclick=function (e) {
			me._img_planta_651.ggVisible = !me._img_planta_651.ggVisible;
			var flag=me._img_planta_651.ggVisible;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility=((flag)&&(Number(me._img_planta_651.style.opacity)>0||!me._img_planta_651.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta65', !player.getVariableValue('Planta65'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_6510.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_6510);
		el=me._planta_4480=document.createElement('div');
		els=me._planta_4480__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 44,8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -44px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_4480.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_4480.ggUpdateText();
		el.appendChild(els);
		me._planta_4480.ggIsActive=function() {
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
		me._planta_4480.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_4480.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_4480.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_4480.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_4480.ggCurrentLogicStateVisible == 0) {
					me._planta_4480.style.visibility=(Number(me._planta_4480.style.opacity)>0||!me._planta_4480.style.opacity)?'inherit':'hidden';
					me._planta_4480.ggVisible=true;
				}
				else if (me._planta_4480.ggCurrentLogicStateVisible == 1) {
					me._planta_4480.style.visibility="hidden";
					me._planta_4480.ggVisible=false;
				}
				else {
					me._planta_4480.style.visibility="hidden";
					me._planta_4480.ggVisible=false;
				}
			}
		}
		me._planta_4480.logicBlock_visible();
		me._planta_4480.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta44') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_4480.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_4480.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_4480__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_4480.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_4480__text.style.backgroundColor="rgba(222,144,0,1)";
				}
				else {
					me._planta_4480__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_4480.logicBlock_backgroundcolor();
		me._planta_4480.onclick=function (e) {
			me._img_planta_448.ggVisible = !me._img_planta_448.ggVisible;
			var flag=me._img_planta_448.ggVisible;
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility=((flag)&&(Number(me._img_planta_448.style.opacity)>0||!me._img_planta_448.style.opacity))?'inherit':'hidden';
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta44', !player.getVariableValue('Planta44'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
		}
		me._planta_4480.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_4480);
		el=me._planta_4570=document.createElement('div');
		els=me._planta_4570__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 45,7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_4570.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_4570.ggUpdateText();
		el.appendChild(els);
		me._planta_4570.ggIsActive=function() {
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
		me._planta_4570.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL4A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_4570.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_4570.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_4570.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_4570.ggCurrentLogicStateVisible == 0) {
					me._planta_4570.style.visibility=(Number(me._planta_4570.style.opacity)>0||!me._planta_4570.style.opacity)?'inherit':'hidden';
					me._planta_4570.ggVisible=true;
				}
				else if (me._planta_4570.ggCurrentLogicStateVisible == 1) {
					me._planta_4570.style.visibility="hidden";
					me._planta_4570.ggVisible=false;
				}
				else {
					me._planta_4570.style.visibility="hidden";
					me._planta_4570.ggVisible=false;
				}
			}
		}
		me._planta_4570.logicBlock_visible();
		me._planta_4570.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta45') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_4570.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_4570.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_4570__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_4570.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_4570__text.style.backgroundColor="rgba(0,85,0,1)";
				}
				else {
					me._planta_4570__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_4570.logicBlock_backgroundcolor();
		me._planta_4570.onclick=function (e) {
			me._img_planta_457.ggVisible = !me._img_planta_457.ggVisible;
			var flag=me._img_planta_457.ggVisible;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility=((flag)&&(Number(me._img_planta_457.style.opacity)>0||!me._img_planta_457.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta45', !player.getVariableValue('Planta45'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_4570.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_4570);
		el=me._planta_5840=document.createElement('div');
		els=me._planta_5840__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 58,4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -381px;';
		hs+='position : absolute;';
		hs+='top : -151px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_5840.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_5840.ggUpdateText();
		el.appendChild(els);
		me._planta_5840.ggIsActive=function() {
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
		me._planta_5840.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL6AB') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_5840.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_5840.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_5840.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_5840.ggCurrentLogicStateVisible == 0) {
					me._planta_5840.style.visibility=(Number(me._planta_5840.style.opacity)>0||!me._planta_5840.style.opacity)?'inherit':'hidden';
					me._planta_5840.ggVisible=true;
				}
				else if (me._planta_5840.ggCurrentLogicStateVisible == 1) {
					me._planta_5840.style.visibility="hidden";
					me._planta_5840.ggVisible=false;
				}
				else {
					me._planta_5840.style.visibility="hidden";
					me._planta_5840.ggVisible=false;
				}
			}
		}
		me._planta_5840.logicBlock_visible();
		me._planta_5840.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta58') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_5840.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_5840.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_5840__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_5840.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_5840__text.style.backgroundColor="rgba(85,0,0,1)";
				}
				else {
					me._planta_5840__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_5840.logicBlock_backgroundcolor();
		me._planta_5840.onclick=function (e) {
			me._img_planta_584.ggVisible = !me._img_planta_584.ggVisible;
			var flag=me._img_planta_584.ggVisible;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility=((flag)&&(Number(me._img_planta_584.style.opacity)>0||!me._img_planta_584.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta58', !player.getVariableValue('Planta58'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_5840.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me._planta_5840);
		el=me.__4480=document.createElement('div');
		els=me.__4480__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="44,8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -442px;';
		hs+='position : absolute;';
		hs+='top : -52px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__4480.ggUpdateText=function() {
			var params = [];
			var hs = player._("44,8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4480.ggUpdateText();
		el.appendChild(els);
		me.__4480.ggIsActive=function() {
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
		me.__4480.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_4480'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__4480.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__4480.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__4480.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4480.ggCurrentLogicStateScaling == 0) {
					me.__4480.ggParameter.sx = 1.5;
					me.__4480.ggParameter.sy = 1.5;
					me.__4480.style.transform=parameterToTransform(me.__4480.ggParameter);
					setTimeout(function() {skin.updateSize(me.__4480);}, 550);
				}
				else {
					me.__4480.ggParameter.sx = 1;
					me.__4480.ggParameter.sy = 1;
					me.__4480.style.transform=parameterToTransform(me.__4480.ggParameter);
					setTimeout(function() {skin.updateSize(me.__4480);}, 550);
				}
			}
		}
		me.__4480.logicBlock_scaling();
		me.__4480.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4480.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4480.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4480.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4480.ggCurrentLogicStateVisible == 0) {
					me.__4480.style.visibility=(Number(me.__4480.style.opacity)>0||!me.__4480.style.opacity)?'inherit':'hidden';
					me.__4480.ggVisible=true;
				}
				else {
					me.__4480.style.visibility="hidden";
					me.__4480.ggVisible=false;
				}
			}
		}
		me.__4480.logicBlock_visible();
		me.__4480.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL3A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4480.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4480.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4480__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__4480.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4480__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__4480.ggCurrentLogicStateBackgroundColor == 1) {
					me.__4480__text.style.backgroundColor="rgba(222,144,0,1)";
				}
				else {
					me.__4480__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__4480.logicBlock_backgroundcolor();
		me.__4480.onclick=function (e) {
			player.setVariableValue('Planta44', false);
			player.setVariableValue('FINAL3A', !player.getVariableValue('FINAL3A'));
			player.toggleOnePolyHotspot("FINAL 3A");
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
		}
		me.__4480.onmouseenter=function (e) {
			me.elementMouseOver['_4480']=true;
			me.__4480.logicBlock_scaling();
		}
		me.__4480.onmouseleave=function (e) {
			me.elementMouseOver['_4480']=false;
			me.__4480.logicBlock_scaling();
		}
		me.__4480.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm2.appendChild(me.__4480);
		me.divSkin.appendChild(me._unidadesm2);
		el=me._unidadesm4=document.createElement('div');
		el.ggId="Unidadesm4";
		el.ggDx=-450;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((596px + 0px) / 2) - 450px);';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : hidden;';
		hs+='width : 596px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unidadesm4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._unidadesm4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._unidadesm4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._unidadesm4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._unidadesm4.style.transition='transform 0s';
				if (me._unidadesm4.ggCurrentLogicStateScaling == 0) {
					me._unidadesm4.ggParameter.sx = 0.8;
					me._unidadesm4.ggParameter.sy = 0.8;
					me._unidadesm4.style.transform=parameterToTransform(me._unidadesm4.ggParameter);
					skin.updateSize(me._unidadesm4);
				}
				else {
					me._unidadesm4.ggParameter.sx = 1;
					me._unidadesm4.ggParameter.sy = 1;
					me._unidadesm4.style.transform=parameterToTransform(me._unidadesm4.ggParameter);
					skin.updateSize(me._unidadesm4);
				}
			}
		}
		me._unidadesm4.logicBlock_scaling();
		me._unidadesm4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._unidadesm4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._unidadesm4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._unidadesm4.style.transition='transform 0s';
				if (me._unidadesm4.ggCurrentLogicStateVisible == 0) {
					me._unidadesm4.style.visibility=(Number(me._unidadesm4.style.opacity)>0||!me._unidadesm4.style.opacity)?'inherit':'hidden';
					me._unidadesm4.ggVisible=true;
				}
				else {
					me._unidadesm4.style.visibility="hidden";
					me._unidadesm4.ggVisible=false;
				}
			}
		}
		me._unidadesm4.logicBlock_visible();
		me._unidadesm4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=-126;
		el.ggDy=43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #8c8c8c;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 40px;';
		hs+='cursor : default;';
		hs+='height : 165px;';
		hs+='left : calc(50% - ((310px + 8px) / 2) - 126px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((165px + 8px) / 2) + 43px);';
		hs+='visibility : hidden;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
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
		me._rectangle_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1.style.transition='';
				if (me._rectangle_1.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
					me._rectangle_1.ggVisible=true;
				}
				else {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.ggVisible=false;
				}
			}
		}
		me._rectangle_1.logicBlock_visible();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._rectangle_1);
		el=me.__457=document.createElement('div');
		els=me.__457__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="45,7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__457.ggUpdateText=function() {
			var params = [];
			var hs = player._("45,7", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__457.ggUpdateText();
		el.appendChild(els);
		me.__457.ggIsActive=function() {
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
		me.__457.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_457'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__457.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__457.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__457.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__457.ggCurrentLogicStateScaling == 0) {
					me.__457.ggParameter.sx = 2;
					me.__457.ggParameter.sy = 2;
					me.__457.style.transform=parameterToTransform(me.__457.ggParameter);
					setTimeout(function() {skin.updateSize(me.__457);}, 550);
				}
				else {
					me.__457.ggParameter.sx = 1;
					me.__457.ggParameter.sy = 1;
					me.__457.style.transform=parameterToTransform(me.__457.ggParameter);
					setTimeout(function() {skin.updateSize(me.__457);}, 550);
				}
			}
		}
		me.__457.logicBlock_scaling();
		me.__457.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__457.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__457.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__457.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__457.ggCurrentLogicStateVisible == 0) {
					me.__457.style.visibility=(Number(me.__457.style.opacity)>0||!me.__457.style.opacity)?'inherit':'hidden';
					me.__457.ggVisible=true;
				}
				else {
					me.__457.style.visibility="hidden";
					me.__457.ggVisible=false;
				}
			}
		}
		me.__457.logicBlock_visible();
		me.__457.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL4A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__457.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__457.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__457__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__457.ggCurrentLogicStateBackgroundColor == 0) {
					me.__457__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__457.ggCurrentLogicStateBackgroundColor == 1) {
					me.__457__text.style.backgroundColor="rgba(0,85,0,1)";
				}
				else {
					me.__457__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__457.logicBlock_backgroundcolor();
		me.__457.onclick=function (e) {
			player.setVariableValue('FINAL4A', !player.getVariableValue('FINAL4A'));
			player.toggleOnePolyHotspot("FINAL 4A");
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			player.setVariableValue('Planta45', false);
		}
		me.__457.onmouseenter=function (e) {
			me.elementMouseOver['_457']=true;
			me.__457.logicBlock_scaling();
		}
		me.__457.onmouseleave=function (e) {
			me.elementMouseOver['_457']=false;
			me.__457.logicBlock_scaling();
		}
		me.__457.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__457);
		el=me.__651=document.createElement('div');
		els=me.__651__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="65,1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__651.ggUpdateText=function() {
			var params = [];
			var hs = player._("65,1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__651.ggUpdateText();
		el.appendChild(els);
		me.__651.ggIsActive=function() {
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
		me.__651.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_651'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__651.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__651.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__651.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__651.ggCurrentLogicStateScaling == 0) {
					me.__651.ggParameter.sx = 2;
					me.__651.ggParameter.sy = 2;
					me.__651.style.transform=parameterToTransform(me.__651.ggParameter);
					setTimeout(function() {skin.updateSize(me.__651);}, 550);
				}
				else {
					me.__651.ggParameter.sx = 1;
					me.__651.ggParameter.sy = 1;
					me.__651.style.transform=parameterToTransform(me.__651.ggParameter);
					setTimeout(function() {skin.updateSize(me.__651);}, 550);
				}
			}
		}
		me.__651.logicBlock_scaling();
		me.__651.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__651.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__651.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__651.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__651.ggCurrentLogicStateVisible == 0) {
					me.__651.style.visibility=(Number(me.__651.style.opacity)>0||!me.__651.style.opacity)?'inherit':'hidden';
					me.__651.ggVisible=true;
				}
				else {
					me.__651.style.visibility="hidden";
					me.__651.ggVisible=false;
				}
			}
		}
		me.__651.logicBlock_visible();
		me.__651.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL5A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__651.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__651.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__651__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__651.ggCurrentLogicStateBackgroundColor == 0) {
					me.__651__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__651.ggCurrentLogicStateBackgroundColor == 1) {
					me.__651__text.style.backgroundColor="rgba(0,170,255,1)";
				}
				else {
					me.__651__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__651.logicBlock_backgroundcolor();
		me.__651.onclick=function (e) {
			player.setVariableValue('FINAL5A', !player.getVariableValue('FINAL5A'));
			player.toggleOnePolyHotspot("FINAL 5A");
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			player.setVariableValue('Planta65', false);
		}
		me.__651.onmouseenter=function (e) {
			me.elementMouseOver['_651']=true;
			me.__651.logicBlock_scaling();
		}
		me.__651.onmouseleave=function (e) {
			me.elementMouseOver['_651']=false;
			me.__651.logicBlock_scaling();
		}
		me.__651.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__651);
		el=me.__584=document.createElement('div');
		els=me.__584__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="58,4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__584.ggUpdateText=function() {
			var params = [];
			var hs = player._("58,4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__584.ggUpdateText();
		el.appendChild(els);
		me.__584.ggIsActive=function() {
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
		me.__584.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_584'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__584.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__584.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__584.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__584.ggCurrentLogicStateScaling == 0) {
					me.__584.ggParameter.sx = 2;
					me.__584.ggParameter.sy = 2;
					me.__584.style.transform=parameterToTransform(me.__584.ggParameter);
					setTimeout(function() {skin.updateSize(me.__584);}, 550);
				}
				else {
					me.__584.ggParameter.sx = 1;
					me.__584.ggParameter.sy = 1;
					me.__584.style.transform=parameterToTransform(me.__584.ggParameter);
					setTimeout(function() {skin.updateSize(me.__584);}, 550);
				}
			}
		}
		me.__584.logicBlock_scaling();
		me.__584.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__584.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__584.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__584.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__584.ggCurrentLogicStateVisible == 0) {
					me.__584.style.visibility=(Number(me.__584.style.opacity)>0||!me.__584.style.opacity)?'inherit':'hidden';
					me.__584.ggVisible=true;
				}
				else {
					me.__584.style.visibility="hidden";
					me.__584.ggVisible=false;
				}
			}
		}
		me.__584.logicBlock_visible();
		me.__584.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL6AB') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__584.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__584.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__584__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__584.ggCurrentLogicStateBackgroundColor == 0) {
					me.__584__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__584.ggCurrentLogicStateBackgroundColor == 1) {
					me.__584__text.style.backgroundColor="rgba(85,0,0,1)";
				}
				else {
					me.__584__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__584.logicBlock_backgroundcolor();
		me.__584.onclick=function (e) {
			player.setVariableValue('FINAL6AB', !player.getVariableValue('FINAL6AB'));
			player.toggleOnePolyHotspot("FINAL 6 A - B");
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			player.setVariableValue('Planta58', false);
		}
		me.__584.onmouseenter=function (e) {
			me.elementMouseOver['_584']=true;
			me.__584.logicBlock_scaling();
		}
		me.__584.onmouseleave=function (e) {
			me.elementMouseOver['_584']=false;
			me.__584.logicBlock_scaling();
		}
		me.__584.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__584);
		el=me.__746=document.createElement('div');
		els=me.__746__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74,6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__746.ggUpdateText=function() {
			var params = [];
			var hs = player._("74,6", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__746.ggUpdateText();
		el.appendChild(els);
		me.__746.ggIsActive=function() {
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
		me.__746.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_746'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__746.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__746.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__746.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__746.ggCurrentLogicStateScaling == 0) {
					me.__746.ggParameter.sx = 2;
					me.__746.ggParameter.sy = 2;
					me.__746.style.transform=parameterToTransform(me.__746.ggParameter);
					setTimeout(function() {skin.updateSize(me.__746);}, 550);
				}
				else {
					me.__746.ggParameter.sx = 1;
					me.__746.ggParameter.sy = 1;
					me.__746.style.transform=parameterToTransform(me.__746.ggParameter);
					setTimeout(function() {skin.updateSize(me.__746);}, 550);
				}
			}
		}
		me.__746.logicBlock_scaling();
		me.__746.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__746.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__746.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__746.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__746.ggCurrentLogicStateVisible == 0) {
					me.__746.style.visibility=(Number(me.__746.style.opacity)>0||!me.__746.style.opacity)?'inherit':'hidden';
					me.__746.ggVisible=true;
				}
				else {
					me.__746.style.visibility="hidden";
					me.__746.ggVisible=false;
				}
			}
		}
		me.__746.logicBlock_visible();
		me.__746.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL3AB') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__746.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__746.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__746__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__746.ggCurrentLogicStateBackgroundColor == 0) {
					me.__746__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__746.ggCurrentLogicStateBackgroundColor == 1) {
					me.__746__text.style.backgroundColor="rgba(255,85,0,1)";
				}
				else {
					me.__746__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__746.logicBlock_backgroundcolor();
		me.__746.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 3B");
			player.toggleOnePolyHotspot("FINAL 4B");
			player.setVariableValue('FINAL3AB', !player.getVariableValue('FINAL3AB'));
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta74', false);
		}
		me.__746.onmouseenter=function (e) {
			me.elementMouseOver['_746']=true;
			me.__746.logicBlock_scaling();
		}
		me.__746.onmouseleave=function (e) {
			me.elementMouseOver['_746']=false;
			me.__746.logicBlock_scaling();
		}
		me.__746.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__746);
		el=me.__842_=document.createElement('div');
		els=me.__842___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="84,2 ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__842_.ggUpdateText=function() {
			var params = [];
			var hs = player._("84,2 ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__842_.ggUpdateText();
		el.appendChild(els);
		me.__842_.ggIsActive=function() {
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
		me.__842_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_842_'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__842_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__842_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__842_.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_.ggCurrentLogicStateScaling == 0) {
					me.__842_.ggParameter.sx = 2;
					me.__842_.ggParameter.sy = 2;
					me.__842_.style.transform=parameterToTransform(me.__842_.ggParameter);
					setTimeout(function() {skin.updateSize(me.__842_);}, 550);
				}
				else {
					me.__842_.ggParameter.sx = 1;
					me.__842_.ggParameter.sy = 1;
					me.__842_.style.transform=parameterToTransform(me.__842_.ggParameter);
					setTimeout(function() {skin.updateSize(me.__842_);}, 550);
				}
			}
		}
		me.__842_.logicBlock_scaling();
		me.__842_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__842_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__842_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__842_.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_.ggCurrentLogicStateVisible == 0) {
					me.__842_.style.visibility=(Number(me.__842_.style.opacity)>0||!me.__842_.style.opacity)?'inherit':'hidden';
					me.__842_.ggVisible=true;
				}
				else {
					me.__842_.style.visibility="hidden";
					me.__842_.ggVisible=false;
				}
			}
		}
		me.__842_.logicBlock_visible();
		me.__842_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL12') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__842_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__842_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__842___text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__842_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__842___text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__842_.ggCurrentLogicStateBackgroundColor == 1) {
					me.__842___text.style.backgroundColor="rgba(0,0,127,1)";
				}
				else {
					me.__842___text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__842_.logicBlock_backgroundcolor();
		me.__842_.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 2A");
			player.toggleOnePolyHotspot("FINAL 2B");
			player.toggleOnePolyHotspot("FINAL 1B");
			player.toggleOnePolyHotspot("FINAL 1A");
			player.setVariableValue('FINAL12', !player.getVariableValue('FINAL12'));
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			player.setVariableValue('Planta84', false);
		}
		me.__842_.onmouseenter=function (e) {
			me.elementMouseOver['_842_']=true;
			me.__842_.logicBlock_scaling();
		}
		me.__842_.onmouseleave=function (e) {
			me.elementMouseOver['_842_']=false;
			me.__842_.logicBlock_scaling();
		}
		me.__842_.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__842_);
		el=me.__675=document.createElement('div');
		els=me.__675__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="67,5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__675.ggUpdateText=function() {
			var params = [];
			var hs = player._("67,5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__675.ggUpdateText();
		el.appendChild(els);
		me.__675.ggIsActive=function() {
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
		me.__675.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_675'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__675.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__675.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__675.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__675.ggCurrentLogicStateScaling == 0) {
					me.__675.ggParameter.sx = 2;
					me.__675.ggParameter.sy = 2;
					me.__675.style.transform=parameterToTransform(me.__675.ggParameter);
					setTimeout(function() {skin.updateSize(me.__675);}, 550);
				}
				else {
					me.__675.ggParameter.sx = 1;
					me.__675.ggParameter.sy = 1;
					me.__675.style.transform=parameterToTransform(me.__675.ggParameter);
					setTimeout(function() {skin.updateSize(me.__675);}, 550);
				}
			}
		}
		me.__675.logicBlock_scaling();
		me.__675.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__675.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__675.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__675.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__675.ggCurrentLogicStateVisible == 0) {
					me.__675.style.visibility=(Number(me.__675.style.opacity)>0||!me.__675.style.opacity)?'inherit':'hidden';
					me.__675.ggVisible=true;
				}
				else {
					me.__675.style.visibility="hidden";
					me.__675.ggVisible=false;
				}
			}
		}
		me.__675.logicBlock_visible();
		me.__675.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL5B') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__675.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__675.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__675__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__675.ggCurrentLogicStateBackgroundColor == 0) {
					me.__675__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__675.ggCurrentLogicStateBackgroundColor == 1) {
					me.__675__text.style.backgroundColor="rgba(85,0,255,1)";
				}
				else {
					me.__675__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__675.logicBlock_backgroundcolor();
		me.__675.onclick=function (e) {
			player.toggleOnePolyHotspot("FINAL 5B");
			player.setVariableValue('FINAL5B', !player.getVariableValue('FINAL5B'));
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			player.setVariableValue('Planta67', false);
		}
		me.__675.onmouseenter=function (e) {
			me.elementMouseOver['_675']=true;
			me.__675.logicBlock_scaling();
		}
		me.__675.onmouseleave=function (e) {
			me.elementMouseOver['_675']=false;
			me.__675.logicBlock_scaling();
		}
		me.__675.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__675);
		el=me._planta_746=document.createElement('div');
		els=me._planta_746__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 74,6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_746.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_746.ggUpdateText();
		el.appendChild(els);
		me._planta_746.ggIsActive=function() {
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
		me._planta_746.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3AB') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_746.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_746.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_746.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_746.ggCurrentLogicStateVisible == 0) {
					me._planta_746.style.visibility=(Number(me._planta_746.style.opacity)>0||!me._planta_746.style.opacity)?'inherit':'hidden';
					me._planta_746.ggVisible=true;
				}
				else if (me._planta_746.ggCurrentLogicStateVisible == 1) {
					me._planta_746.style.visibility="hidden";
					me._planta_746.ggVisible=false;
				}
				else {
					me._planta_746.style.visibility="hidden";
					me._planta_746.ggVisible=false;
				}
			}
		}
		me._planta_746.logicBlock_visible();
		me._planta_746.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta74') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_746.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_746.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_746__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_746.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_746__text.style.backgroundColor="rgba(255,85,0,1)";
				}
				else {
					me._planta_746__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_746.logicBlock_backgroundcolor();
		me._planta_746.onclick=function (e) {
			me._img_planta746.ggVisible = !me._img_planta746.ggVisible;
			var flag=me._img_planta746.ggVisible;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility=((flag)&&(Number(me._img_planta746.style.opacity)>0||!me._img_planta746.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			player.setVariableValue('Planta74', !player.getVariableValue('Planta74'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_746.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_746);
		el=me._planta_842=document.createElement('div');
		els=me._planta_842__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 84,2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_842.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_842.ggUpdateText();
		el.appendChild(els);
		me._planta_842.ggIsActive=function() {
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
		me._planta_842.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL12') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_842.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_842.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_842.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_842.ggCurrentLogicStateVisible == 0) {
					me._planta_842.style.visibility=(Number(me._planta_842.style.opacity)>0||!me._planta_842.style.opacity)?'inherit':'hidden';
					me._planta_842.ggVisible=true;
				}
				else if (me._planta_842.ggCurrentLogicStateVisible == 1) {
					me._planta_842.style.visibility="hidden";
					me._planta_842.ggVisible=false;
				}
				else {
					me._planta_842.style.visibility="hidden";
					me._planta_842.ggVisible=false;
				}
			}
		}
		me._planta_842.logicBlock_visible();
		me._planta_842.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta84') == true)) && 
				((player.getVariableValue('FINAL12') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_842.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_842.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_842__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_842.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_842__text.style.backgroundColor="rgba(0,0,127,1)";
				}
				else {
					me._planta_842__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_842.logicBlock_backgroundcolor();
		me._planta_842.onclick=function (e) {
			me._img_planta_842.ggVisible = !me._img_planta_842.ggVisible;
			var flag=me._img_planta_842.ggVisible;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility=((flag)&&(Number(me._img_planta_842.style.opacity)>0||!me._img_planta_842.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta84', !player.getVariableValue('Planta84'));
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_842.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_842);
		el=me._planta_675=document.createElement('div');
		els=me._planta_675__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 67,5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_675.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_675.ggUpdateText();
		el.appendChild(els);
		me._planta_675.ggIsActive=function() {
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
		me._planta_675.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5B') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_675.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_675.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_675.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_675.ggCurrentLogicStateVisible == 0) {
					me._planta_675.style.visibility=(Number(me._planta_675.style.opacity)>0||!me._planta_675.style.opacity)?'inherit':'hidden';
					me._planta_675.ggVisible=true;
				}
				else if (me._planta_675.ggCurrentLogicStateVisible == 1) {
					me._planta_675.style.visibility="hidden";
					me._planta_675.ggVisible=false;
				}
				else {
					me._planta_675.style.visibility="hidden";
					me._planta_675.ggVisible=false;
				}
			}
		}
		me._planta_675.logicBlock_visible();
		me._planta_675.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta67') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_675.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_675.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_675__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_675.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_675__text.style.backgroundColor="rgba(0,0,255,1)";
				}
				else {
					me._planta_675__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_675.logicBlock_backgroundcolor();
		me._planta_675.onclick=function (e) {
			me._img_planta_675.ggVisible = !me._img_planta_675.ggVisible;
			var flag=me._img_planta_675.ggVisible;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility=((flag)&&(Number(me._img_planta_675.style.opacity)>0||!me._img_planta_675.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta67', !player.getVariableValue('Planta67'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_675.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_675);
		el=me._planta_651=document.createElement('div');
		els=me._planta_651__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 65,1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 255px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_651.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_651.ggUpdateText();
		el.appendChild(els);
		me._planta_651.ggIsActive=function() {
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
		me._planta_651.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL5A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_651.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_651.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_651.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_651.ggCurrentLogicStateVisible == 0) {
					me._planta_651.style.visibility=(Number(me._planta_651.style.opacity)>0||!me._planta_651.style.opacity)?'inherit':'hidden';
					me._planta_651.ggVisible=true;
				}
				else if (me._planta_651.ggCurrentLogicStateVisible == 1) {
					me._planta_651.style.visibility="hidden";
					me._planta_651.ggVisible=false;
				}
				else {
					me._planta_651.style.visibility="hidden";
					me._planta_651.ggVisible=false;
				}
			}
		}
		me._planta_651.logicBlock_visible();
		me._planta_651.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta65') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_651.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_651.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_651__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_651.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_651__text.style.backgroundColor="rgba(0,170,255,1)";
				}
				else {
					me._planta_651__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_651.logicBlock_backgroundcolor();
		me._planta_651.onclick=function (e) {
			me._img_planta_651.ggVisible = !me._img_planta_651.ggVisible;
			var flag=me._img_planta_651.ggVisible;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility=((flag)&&(Number(me._img_planta_651.style.opacity)>0||!me._img_planta_651.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta65', !player.getVariableValue('Planta65'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_651.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_651);
		el=me._planta_448=document.createElement('div');
		els=me._planta_448__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 44,8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 212px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_448.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_448.ggUpdateText();
		el.appendChild(els);
		me._planta_448.ggIsActive=function() {
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
		me._planta_448.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL3A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_448.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_448.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_448.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_448.ggCurrentLogicStateVisible == 0) {
					me._planta_448.style.visibility=(Number(me._planta_448.style.opacity)>0||!me._planta_448.style.opacity)?'inherit':'hidden';
					me._planta_448.ggVisible=true;
				}
				else if (me._planta_448.ggCurrentLogicStateVisible == 1) {
					me._planta_448.style.visibility="hidden";
					me._planta_448.ggVisible=false;
				}
				else {
					me._planta_448.style.visibility="hidden";
					me._planta_448.ggVisible=false;
				}
			}
		}
		me._planta_448.logicBlock_visible();
		me._planta_448.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta44') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_448.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_448.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_448__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_448.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_448__text.style.backgroundColor="rgba(222,144,0,1)";
				}
				else {
					me._planta_448__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_448.logicBlock_backgroundcolor();
		me._planta_448.onclick=function (e) {
			me._img_planta_448.ggVisible = !me._img_planta_448.ggVisible;
			var flag=me._img_planta_448.ggVisible;
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility=((flag)&&(Number(me._img_planta_448.style.opacity)>0||!me._img_planta_448.style.opacity))?'inherit':'hidden';
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta44', !player.getVariableValue('Planta44'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta45', false);
		}
		me._planta_448.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_448);
		el=me._planta_457=document.createElement('div');
		els=me._planta_457__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 45,7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_457.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_457.ggUpdateText();
		el.appendChild(els);
		me._planta_457.ggIsActive=function() {
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
		me._planta_457.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL4A') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_457.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_457.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_457.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_457.ggCurrentLogicStateVisible == 0) {
					me._planta_457.style.visibility=(Number(me._planta_457.style.opacity)>0||!me._planta_457.style.opacity)?'inherit':'hidden';
					me._planta_457.ggVisible=true;
				}
				else if (me._planta_457.ggCurrentLogicStateVisible == 1) {
					me._planta_457.style.visibility="hidden";
					me._planta_457.ggVisible=false;
				}
				else {
					me._planta_457.style.visibility="hidden";
					me._planta_457.ggVisible=false;
				}
			}
		}
		me._planta_457.logicBlock_visible();
		me._planta_457.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta45') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_457.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_457.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_457__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_457.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_457__text.style.backgroundColor="rgba(0,85,0,1)";
				}
				else {
					me._planta_457__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_457.logicBlock_backgroundcolor();
		me._planta_457.onclick=function (e) {
			me._img_planta_457.ggVisible = !me._img_planta_457.ggVisible;
			var flag=me._img_planta_457.ggVisible;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility=((flag)&&(Number(me._img_planta_457.style.opacity)>0||!me._img_planta_457.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility='hidden';
			me._img_planta_584.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta45', !player.getVariableValue('Planta45'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta58', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_457.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_457);
		el=me._planta_584=document.createElement('div');
		els=me._planta_584__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PLANTA 58,4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(71px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #4a4a4a;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._planta_584.ggUpdateText=function() {
			var params = [];
			var hs = player._("PLANTA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._planta_584.ggUpdateText();
		el.appendChild(els);
		me._planta_584.ggIsActive=function() {
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
		me._planta_584.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('FINAL6AB') == true)) && 
				((player.getVariableValue('MAQUETE') == true)) && 
				((player.getVariableValue('UNIDADES') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._planta_584.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._planta_584.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._planta_584.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_584.ggCurrentLogicStateVisible == 0) {
					me._planta_584.style.visibility=(Number(me._planta_584.style.opacity)>0||!me._planta_584.style.opacity)?'inherit':'hidden';
					me._planta_584.ggVisible=true;
				}
				else if (me._planta_584.ggCurrentLogicStateVisible == 1) {
					me._planta_584.style.visibility="hidden";
					me._planta_584.ggVisible=false;
				}
				else {
					me._planta_584.style.visibility="hidden";
					me._planta_584.ggVisible=false;
				}
			}
		}
		me._planta_584.logicBlock_visible();
		me._planta_584.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Planta58') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._planta_584.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._planta_584.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._planta_584__text.style.transition='background-color 1000ms ease 0ms';
				if (me._planta_584.ggCurrentLogicStateBackgroundColor == 0) {
					me._planta_584__text.style.backgroundColor="rgba(85,0,0,1)";
				}
				else {
					me._planta_584__text.style.backgroundColor="rgba(74,74,74,1)";
				}
			}
		}
		me._planta_584.logicBlock_backgroundcolor();
		me._planta_584.onclick=function (e) {
			me._img_planta_584.ggVisible = !me._img_planta_584.ggVisible;
			var flag=me._img_planta_584.ggVisible;
			me._img_planta_584.style.transition='none';
			me._img_planta_584.style.visibility=((flag)&&(Number(me._img_planta_584.style.opacity)>0||!me._img_planta_584.style.opacity))?'inherit':'hidden';
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			me._img_planta_457.style.transition='none';
			me._img_planta_457.style.visibility='hidden';
			me._img_planta_457.ggVisible=false;
			me._img_planta_842.style.transition='none';
			me._img_planta_842.style.visibility='hidden';
			me._img_planta_842.ggVisible=false;
			me._img_planta_651.style.transition='none';
			me._img_planta_651.style.visibility='hidden';
			me._img_planta_651.ggVisible=false;
			me._img_planta_675.style.transition='none';
			me._img_planta_675.style.visibility='hidden';
			me._img_planta_675.ggVisible=false;
			me._img_planta746.style.transition='none';
			me._img_planta746.style.visibility='hidden';
			me._img_planta746.ggVisible=false;
			player.setVariableValue('Planta58', !player.getVariableValue('Planta58'));
			player.setVariableValue('Planta84', false);
			player.setVariableValue('Planta74', false);
			player.setVariableValue('Planta67', false);
			player.setVariableValue('Planta65', false);
			player.setVariableValue('Planta45', false);
			player.setVariableValue('Planta44', false);
		}
		me._planta_584.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me._planta_584);
		el=me.__448=document.createElement('div');
		els=me.__448__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="44,8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 222px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : hidden;';
		hs+='width : calc(47px + 4px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #2f2f2f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__448.ggUpdateText=function() {
			var params = [];
			var hs = player._("44,8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__448.ggUpdateText();
		el.appendChild(els);
		me.__448.ggIsActive=function() {
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
		me.__448.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_448'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__448.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__448.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__448.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__448.ggCurrentLogicStateScaling == 0) {
					me.__448.ggParameter.sx = 2;
					me.__448.ggParameter.sy = 2;
					me.__448.style.transform=parameterToTransform(me.__448.ggParameter);
					setTimeout(function() {skin.updateSize(me.__448);}, 550);
				}
				else {
					me.__448.ggParameter.sx = 1;
					me.__448.ggParameter.sy = 1;
					me.__448.style.transform=parameterToTransform(me.__448.ggParameter);
					setTimeout(function() {skin.updateSize(me.__448);}, 550);
				}
			}
		}
		me.__448.logicBlock_scaling();
		me.__448.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('UNIDADES') == true)) && 
				((player.getVariableValue('MAQUETE') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__448.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__448.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__448.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__448.ggCurrentLogicStateVisible == 0) {
					me.__448.style.visibility=(Number(me.__448.style.opacity)>0||!me.__448.style.opacity)?'inherit':'hidden';
					me.__448.ggVisible=true;
				}
				else {
					me.__448.style.visibility="hidden";
					me.__448.ggVisible=false;
				}
			}
		}
		me.__448.logicBlock_visible();
		me.__448.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('UNIDADES') == false))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('FINAL3A') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__448.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__448.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__448__text.style.transition='transform 500ms ease 0ms, background-color 0s';
				if (me.__448.ggCurrentLogicStateBackgroundColor == 0) {
					me.__448__text.style.backgroundColor="rgba(47,47,47,1)";
				}
				else if (me.__448.ggCurrentLogicStateBackgroundColor == 1) {
					me.__448__text.style.backgroundColor="rgba(222,144,0,1)";
				}
				else {
					me.__448__text.style.backgroundColor="rgba(47,47,47,1)";
				}
			}
		}
		me.__448.logicBlock_backgroundcolor();
		me.__448.onclick=function (e) {
			player.setVariableValue('FINAL3A', !player.getVariableValue('FINAL3A'));
			player.toggleOnePolyHotspot("FINAL 3A");
			me._img_planta_448.style.transition='none';
			me._img_planta_448.style.visibility='hidden';
			me._img_planta_448.ggVisible=false;
			player.setVariableValue('Planta44', false);
		}
		me.__448.onmouseenter=function (e) {
			me.elementMouseOver['_448']=true;
			me.__448.logicBlock_scaling();
		}
		me.__448.onmouseleave=function (e) {
			me.elementMouseOver['_448']=false;
			me.__448.logicBlock_scaling();
		}
		me.__448.ggUpdatePosition=function (useTransition) {
		}
		me._unidadesm4.appendChild(me.__448);
		me.divSkin.appendChild(me._unidadesm4);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 71px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 102.5%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 61px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 139px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='left 0s, top 0s, transform 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.left='-5px';
					me._image_3.style.top='7px';
				}
				else {
					me._image_3.style.left='29px';
					me._image_3.style.top='7px';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 380))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_3.style.transition='left 0s, top 0s, transform 0s';
				if (me._image_3.ggCurrentLogicStateScaling == 0) {
					me._image_3.ggParameter.sx = 0.7;
					me._image_3.ggParameter.sy = 0.7;
					me._image_3.style.transform=parameterToTransform(me._image_3.ggParameter);
					skin.updateSize(me._image_3);
				}
				else if (me._image_3.ggCurrentLogicStateScaling == 1) {
					me._image_3.ggParameter.sx = 0.8;
					me._image_3.ggParameter.sy = 0.8;
					me._image_3.style.transform=parameterToTransform(me._image_3.ggParameter);
					skin.updateSize(me._image_3);
				}
				else {
					me._image_3.ggParameter.sx = 1;
					me._image_3.ggParameter.sy = 1;
					me._image_3.style.transform=parameterToTransform(me._image_3.ggParameter);
					skin.updateSize(me._image_3);
				}
			}
		}
		me._image_3.logicBlock_scaling();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._image_3);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 111px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_mute.ggIsActive=function() {
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
		me._button_mute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_mute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_mute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_mute.style.transition='right 0s, top 0s';
				if (me._button_mute.ggCurrentLogicStatePosition == 0) {
					me._button_mute.style.right='8px';
					me._button_mute.style.top='0px';
				}
				else {
					me._button_mute.style.right='111px';
					me._button_mute.style.top='13px';
				}
			}
		}
		me._button_mute.logicBlock_position();
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAw'+
			'MS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYgICAgQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSAgICBjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiAgICAgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLT'+
			'AuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgcy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCAgICBjMC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQx'+
			'LTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzggICAgYzAtMS4xNDYtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSAgICBjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLj'+
			'k0My0wLjAzMiwxLjMxNSAgICBjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyICAgIGMtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5ICAgIGMwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAu'+
			'NzU0LDAuMzgzICAgIGMwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNi'+
			'wzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6ICAgICBNMTYuMDMyLDguOTE3Yy0w'+
			'LjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4ICAgIGMwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMy'+
			'wxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCAgICBjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1ICAgIGMwLjQxOCwwLjQxMiwwLjY3NCwwLjk3'+
			'NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1ICAgIGMwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzIgICAgYy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkgICAgYzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS'+
			'4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMgICAgYzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._unmute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0y'+
			'My4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6ICAgICBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLj'+
			'E4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4ICAgIGMwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIs'+
			'OC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCAgICBjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1ICAgIGMwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NC'+
			'wxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1ICAgIGMwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzIgICAgYy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkgICAgYzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAu'+
			'NDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMgICAgYzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5Ni'+
			'wzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYgICAgQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSAgICBjMi43OTUsMC4wMDEsNS4z'+
			'MTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiAgICAgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgcy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCAgICBjMC4yMjgsMC4yMjMsMC41MzEsMC'+
			'4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzggICAgYzAtMS4xNDYtMC40'+
			'NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSAgICBjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSAgICBjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyICAgIGMtMC40MTQtMC4zMDYtMC45OTYtMC4yMT'+
			'ctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5ICAgIGMwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAuNzU0LDAuMzgzICAgIGMwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmute.ggIsActive=function() {
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
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style.transition='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style.transition='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseenter=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
			me.elementMouseOver['unmute']=true;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.onmouseleave=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
			me.elementMouseOver['unmute']=false;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_unmute=document.createElement('div');
		els=me._tt_unmute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_unmute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_unmute.ggUpdateText=function() {
			var params = [];
			var hs = player._("Som", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_unmute.ggUpdateText();
		el.appendChild(els);
		me._tt_unmute.ggIsActive=function() {
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
		me._tt_unmute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['unmute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_unmute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_unmute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_unmute.style.transition='';
				if (me._tt_unmute.ggCurrentLogicStateVisible == 0) {
					me._tt_unmute.style.visibility=(Number(me._tt_unmute.style.opacity)>0||!me._tt_unmute.style.opacity)?'inherit':'hidden';
					me._tt_unmute.ggVisible=true;
				}
				else {
					me._tt_unmute.style.visibility="hidden";
					me._tt_unmute.ggVisible=false;
				}
			}
		}
		me._tt_unmute.logicBlock_visible();
		me._tt_unmute.ggUpdatePosition=function (useTransition) {
		}
		me._unmute.appendChild(me._tt_unmute);
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LjAzMSw4LjkxN2MtMC40NDItMC4xODYtMC45NTgtMC4wODctMS4zLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1ICAgIGMtMC4yMjMsMC4yMjMtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0N2MwLjIyMywwLjIyMiwwLjUz'+
			'MSwwLjM1MSwwLjg0NiwwLjM1MWgyLjIzOCAgICBsMy4xMDMsMy4wMzdjMC4yMjcsMC4yMjMsMC41MywwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODcsMC43MzMtMC42MjMsMC43MzMtMS4xMDNWMTAuMDIgICAgQzE2Ljc2NCw5LjUzOSwxNi40NzQsOS4xMDMsMTYuMDMxLDguOTE3eiBNMTQuMzcyLDE5LjIyOGwtMS40MTgtMS4zODhjLTAuMjI1LTAuMjIxLTAuNTIyLTAuMzQyLTAuODM3LTAuMzQyaC0xLjUzdi0yLjkwNGgxLjUzMSAgICBjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxOC0xLjM4OFYxOS4yMjh6IE0xNi'+
			'wzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41ICAgIGM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NiAgICBzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyAgICBjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4x'+
			'Myw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDcgICAgQzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxMywyMy4xNDcsMjMuMTQ2eiBNMjIuMzI3LDE2LjAzMWwxLjQ4NS0xLjQ4NWMwLjM2My0wLjM2NCwwLjM2My0wLjk1MywwLTEuMzE2ICAgIGMtMC4zNjQtMC4zNjMtMC45NTMtMC4zNjMtMS4zMTUsMGwtMS40ODUsMS40ODVsLTEuNDg1LTEuNDg1Yy0wLjM2My0wLjM2My0wLjk1Mi0wLjM2My0xLjMxNiwwYy0wLjM2MiwwLjM2NC0wLjM2MiwwLjk1MywwLDEuMzE2ICAgIGwxLjQ4NSwxLjQ4NWwtMS40ODUsMS40ODVjLTAuMzYyLDAuMzYyLTAuMzYyLDAuOTUyLD'+
			'AsMS4zMTVjMC4xODMsMC4xODIsMC40MiwwLjI3MiwwLjY1OCwwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MiAgICBsMS40ODUtMS40ODVsMS40ODUsMS40ODVjMC4xODEsMC4xODIsMC40MTksMC4yNzIsMC42NTcsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzJjMC4zNjMtMC4zNjMsMC4zNjMtMC45NTMsMC0xLjMxNSAgICBMMjIuMzI3LDE2LjAzMXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0xNi4wMzEsOC45MTdjLTAuNDQyLTAuMTg2LTAuOTU4LTAuMDg3LTEuMywwLjI0OGwtMy4xMDMs'+
			'My4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSAgICBjLTAuMjIzLDAuMjIzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDdjMC4yMjMsMC4yMjIsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMi4yMzggICAgbDMuMTAzLDMuMDM3YzAuMjI3LDAuMjIzLDAuNTMsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg3LDAuNzMzLTAuNjIzLDAuNzMzLTEuMTAzVjEwLjAyICAgIEMxNi43NjQsOS41MzksMTYuNDc0LDkuMTAzLDE2LjAzMSw4LjkxN3ogTT'+
			'E0LjM3MiwxOS4yMjhsLTEuNDE4LTEuMzg4Yy0wLjIyNS0wLjIyMS0wLjUyMi0wLjM0Mi0wLjgzNy0wLjM0MmgtMS41M3YtMi45MDRoMS41MzEgICAgYzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTgtMS4zODhWMTkuMjI4eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNSAgICBjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTYgICAgcy01LjMxNC0x'+
			'LjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcgICAgYzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3ICAgIEMyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTMsMjMuMTQ3LDIzLjE0NnogTTIyLjMyNywxNi4wMzFsMS40ODUtMS40ODVjMC4zNjMtMC4zNjQsMC4zNjMtMC45NTMsMC0xLjMxNiAgICBjLTAuMzY0LTAuMzYzLTAuOTUzLTAuMzYzLTEuMzE1LDBsLTEuND'+
			'g1LDEuNDg1bC0xLjQ4NS0xLjQ4NWMtMC4zNjMtMC4zNjMtMC45NTItMC4zNjMtMS4zMTYsMGMtMC4zNjIsMC4zNjQtMC4zNjIsMC45NTMsMCwxLjMxNiAgICBsMS40ODUsMS40ODVsLTEuNDg1LDEuNDg1Yy0wLjM2MiwwLjM2Mi0wLjM2MiwwLjk1MiwwLDEuMzE1YzAuMTgzLDAuMTgyLDAuNDIsMC4yNzIsMC42NTgsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzIgICAgbDEuNDg1LTEuNDg1bDEuNDg1LDEuNDg1YzAuMTgxLDAuMTgyLDAuNDE5LDAuMjcyLDAuNjU3LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyYzAuMzYzLTAuMzYzLDAuMzYzLTAuOTUzLDAtMS4zMTUgICAgTDIyLjMy'+
			'NywxNi4wMzF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgYy0wLjIyMywwLjIyMy0wLjM1MSwwLjUzMS0wLjM1MSww'+
			'Ljg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4ICAgIGwzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiAgICBDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxIC'+
			'AgIGMwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUgICAgYzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2ICAgIHMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcu'+
			'MTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyAgICBDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzEzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbDEuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYgICAgYy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS'+
			'4zMTYgICAgbDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyICAgIGwxLjQ4NS0xLjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1ICAgIEwyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikg'+
			'c2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUgICAgYy0wLjIyMywwLjIyMy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4ICAgIGwzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYz'+
			'AuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiAgICBDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxICAgIGMwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUgICAgYzYuOTAzLTAuMDAx'+
			'LDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2ICAgIHMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyAgICBDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMz'+
			'EzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbDEuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYgICAgYy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS4zMTYgICAgbDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyICAgIGwxLjQ4NS0x'+
			'LjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1ICAgIEwyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
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
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style.transition='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style.transition='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseenter=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
			me.elementMouseOver['mute']=true;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.onmouseleave=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_mute=document.createElement('div');
		els=me._tt_mute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_mute.ggUpdateText=function() {
			var params = [];
			var hs = player._("Mudo", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_mute.ggUpdateText();
		el.appendChild(els);
		me._tt_mute.ggIsActive=function() {
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
		me._tt_mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['mute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_mute.style.transition='';
				if (me._tt_mute.ggCurrentLogicStateVisible == 0) {
					me._tt_mute.style.visibility=(Number(me._tt_mute.style.opacity)>0||!me._tt_mute.style.opacity)?'inherit':'hidden';
					me._tt_mute.ggVisible=true;
				}
				else {
					me._tt_mute.style.visibility="hidden";
					me._tt_mute.ggVisible=false;
				}
			}
		}
		me._tt_mute.logicBlock_visible();
		me._tt_mute.ggUpdatePosition=function (useTransition) {
		}
		me._mute.appendChild(me._tt_mute);
		me._button_mute.appendChild(me._mute);
		me._image_2.appendChild(me._button_mute);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 69px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
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
		me._button_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_fullscreen.style.transition='right 0s, top 0s';
				if (me._button_fullscreen.ggCurrentLogicStatePosition == 0) {
					me._button_fullscreen.style.right='8px';
					me._button_fullscreen.style.top='40px';
				}
				else {
					me._button_fullscreen.style.right='69px';
					me._button_fullscreen.style.top='13px';
				}
			}
		}
		me._button_fullscreen.logicBlock_position();
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYt'+
			'MC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny'+
			'0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3'+
			'NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLj'+
			'E5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5'+
			'NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5Ni'+
			'wxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAu'+
			'MjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40Mj'+
			'csMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4x'+
			'NDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi'+
			'45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAu'+
			'NjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMC'+
			'wxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4z'+
			'OTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMj'+
			'IuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0w'+
			'LjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5Ni'+
			'wxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0w'+
			'LjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMT'+
			'k2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMT'+
			'UuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEs'+
			'MC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSww'+
			'LjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy'+
			'40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5'+
			'Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOT'+
			'YgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAu'+
			'NjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4'+
			'LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MW'+
			'MtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjky'+
			'NHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIg'+
			'dHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42Mj'+
			'MtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUs'+
			'MS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2'+
			'ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQz'+
			'I4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0'+
			'LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS'+
			'4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCww'+
			'LjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC'+
			'40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEu'+
			'MjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
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
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEgICBTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3ICAgYzAu'+
			'MzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCAgIFY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiAgIGMtMC'+
			'42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYgICBDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiAgIGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTIgICBsLTAuMjIyLDAu'+
			'MTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3ICAgbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcgICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS'+
			'0wLjE0OCAgIGMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYgICBjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4ICAg'+
			'Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LT'+
			'AuODQ2LDAuMzUxICAgUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyAgIGMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQgICBWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDIgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYgICBjMCwwLjY2MSwwLjUzNiwxLj'+
			'E5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyICAgbC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyAgIGwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIy'+
			'LDAuMTQ3ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNT'+
			'M1LDEuMTk2LTEuMTk2VjE2ICAgYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmlld0'+
			'JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMyww'+
			'LjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMT'+
			'k2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1'+
			'LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC'+
			'40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0'+
			'LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLT'+
			'E2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5'+
			'LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ni'+
			'AgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTct'+
			'MC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMT'+
			'k2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0w'+
			'LjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
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
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
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
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style.transition='';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible();
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style.transition='';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Tela Cheia", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("Sair", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._tt_fullscreen.ggUpdateText();
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.logicBlock_text();
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me._image_2.appendChild(me._button_fullscreen);
		el=me._regio=document.createElement('div');
		els=me._regio__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="REGI\xc3O";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 488px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : calc(112px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #626262;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._regio.ggUpdateText=function() {
			var params = [];
			var hs = player._("REGI\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._regio.ggUpdateText();
		el.appendChild(els);
		me._regio.ggIsActive=function() {
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
		me._regio.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['regio'] == true)) && 
				((player.getViewerSize(true).width <= 380))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((me.elementMouseOver['regio'] == true)) && 
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize(true).width <= 380))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._regio.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._regio.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._regio.style.transition='left 0s, top 0s, transform 0s';
				if (me._regio.ggCurrentLogicStatePosition == 0) {
					me._regio.style.left='228px';
					me._regio.style.top='60px';
				}
				else if (me._regio.ggCurrentLogicStatePosition == 1) {
					me._regio.style.left='260px';
					me._regio.style.top='60px';
				}
				else if (me._regio.ggCurrentLogicStatePosition == 2) {
					me._regio.style.left='230px';
					me._regio.style.top='40px';
				}
				else if (me._regio.ggCurrentLogicStatePosition == 3) {
					me._regio.style.left='260px';
					me._regio.style.top='40px';
				}
				else {
					me._regio.style.left='488px';
					me._regio.style.top='19px';
				}
			}
		}
		me._regio.logicBlock_position();
		me._regio.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['regio'] == true)) && 
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._regio.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._regio.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._regio.style.transition='left 0s, top 0s, transform 0s';
				if (me._regio.ggCurrentLogicStateScaling == 0) {
					me._regio.ggParameter.sx = 1;
					me._regio.ggParameter.sy = 1;
					me._regio.style.transform=parameterToTransform(me._regio.ggParameter);
					skin.updateSize(me._regio);
				}
				else if (me._regio.ggCurrentLogicStateScaling == 1) {
					me._regio.ggParameter.sx = 0.6;
					me._regio.ggParameter.sy = 0.6;
					me._regio.style.transform=parameterToTransform(me._regio.ggParameter);
					skin.updateSize(me._regio);
				}
				else {
					me._regio.ggParameter.sx = 1;
					me._regio.ggParameter.sy = 1;
					me._regio.style.transform=parameterToTransform(me._regio.ggParameter);
					skin.updateSize(me._regio);
				}
			}
		}
		me._regio.logicBlock_scaling();
		me._regio.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.google.com.br\/maps\/place\/Cyrela+Brooklyn+Bridge\/@-23.6323563,-46.689751,18.75z\/data=!4m6!3m5!1s0x94ce510078cca045:0xb38e77c4e8613dec!8m2!3d-23.6321957!4d-46.690792!16s%2Fg%2F11lf0mz5lz?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D","");
			}
		}
		me._regio.onmouseenter=function (e) {
			me.elementMouseOver['regio']=true;
			me._regio.logicBlock_position();
			me._regio.logicBlock_scaling();
		}
		me._regio.onmouseleave=function (e) {
			me.elementMouseOver['regio']=false;
			me._regio.logicBlock_position();
			me._regio.logicBlock_scaling();
		}
		me._regio.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._regio);
		el=me._drone_360=document.createElement('div');
		els=me._drone_360__img=document.createElement('img');
		els.className='ggskin ggskin_drone_360';
		hs=basePath + 'images/drone_360.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="DRONE 360";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 476px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._drone_360.ggIsActive=function() {
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
		me._drone_360.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 380))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1028))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._drone_360.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._drone_360.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._drone_360.style.transition='left 0s, top 0s';
				if (me._drone_360.ggCurrentLogicStatePosition == 0) {
					me._drone_360.style.left='270px';
					me._drone_360.style.top='10px';
				}
				else if (me._drone_360.ggCurrentLogicStatePosition == 1) {
					me._drone_360.style.left='300px';
					me._drone_360.style.top='10px';
				}
				else {
					me._drone_360.style.left='476px';
					me._drone_360.style.top='20px';
				}
			}
		}
		me._drone_360.logicBlock_position();
		me._drone_360.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/earth.google.com\/web\/@-23.63149594,-46.69055315,746.82296986a,353.504166d,35y,76.92655551h,70.48268484t,0r","");
			}
		}
		me._drone_360.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._drone_360);
		me.divSkin.appendChild(me._image_2);
		el=me._indicaes_de_uso=document.createElement('div');
		el.ggId="Indica\xe7\xf5es de Uso";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 7px solid #3a3a3a;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 401px;';
		hs+='left : calc(50% - ((291px + 14px) / 2) + 0px);';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((401px + 14px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 291px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._indicaes_de_uso.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._indicaes_de_uso.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).height <= 500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._indicaes_de_uso.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._indicaes_de_uso.style.transition='left 0s, top 0s, transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStatePosition == 0) {
					me._indicaes_de_uso.style.left = 'calc(50% - (291px / 2) - (14px / 2))';
					me._indicaes_de_uso.style.top = 'calc(50% - (401px / 2) - (14px / 2) + 20px)';
				}
				else {
					me._indicaes_de_uso.style.left='calc(50% - ((291px + 14px) / 2) + 0px)';
					me._indicaes_de_uso.style.top='calc(50% - ((401px + 14px) / 2) + 0px)';
				}
			}
		}
		me._indicaes_de_uso.logicBlock_position();
		me._indicaes_de_uso.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).height <= 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._indicaes_de_uso.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._indicaes_de_uso.style.transition='left 0s, top 0s, transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 0) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.7;
					me._indicaes_de_uso.style.transform=parameterToTransform(me._indicaes_de_uso.ggParameter);
					skin.updateSize(me._indicaes_de_uso);
				}
				else if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 1) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.8;
					me._indicaes_de_uso.style.transform=parameterToTransform(me._indicaes_de_uso.ggParameter);
					skin.updateSize(me._indicaes_de_uso);
				}
				else {
					me._indicaes_de_uso.ggParameter.sx = 1;
					me._indicaes_de_uso.ggParameter.sy = 1;
					me._indicaes_de_uso.style.transform=parameterToTransform(me._indicaes_de_uso.ggParameter);
					skin.updateSize(me._indicaes_de_uso);
				}
			}
		}
		me._indicaes_de_uso.logicBlock_scaling();
		me._indicaes_de_uso.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['indicaes_de_uso'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._indicaes_de_uso.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._indicaes_de_uso.style.transition='left 0s, top 0s, transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateAlpha == 0) {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=1;
				}
				else {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=0.3;
				}
			}
		}
		me._indicaes_de_uso.logicBlock_alpha();
		me._indicaes_de_uso.onmouseenter=function (e) {
			me.elementMouseOver['indicaes_de_uso']=true;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.onmouseleave=function (e) {
			me.elementMouseOver['indicaes_de_uso']=false;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.ggUpdatePosition=function (useTransition) {
		}
		el=me._iniciar=document.createElement('div');
		el.ggId="Iniciar";
		el.ggDx=1;
		el.ggDy=160;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3a3a3a;';
		hs+='border : 7px solid #3a3a3a;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 71px;';
		hs+='left : calc(50% - ((290px + 14px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71px + 14px) / 2) + 160px);';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iniciar.ggIsActive=function() {
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
		me._iniciar.onclick=function (e) {
			player.setVariableValue('indicativo', true);
			me._indicaes_de_uso.style.transition='none';
			me._indicaes_de_uso.style.visibility='hidden';
			me._indicaes_de_uso.ggVisible=false;
		}
		me._iniciar.ggUpdatePosition=function (useTransition) {
		}
		el=me._iniciar0=document.createElement('div');
		els=me._iniciar0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(85,170,127,0);';
		hs+='border-radius : 10px;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._iniciar0.ggUpdateText=function() {
			var params = [];
			var hs = player._("CONTINUAR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._iniciar0.ggUpdateText();
		el.appendChild(els);
		me._iniciar0.ggIsActive=function() {
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
		me._iniciar0.ggUpdatePosition=function (useTransition) {
		}
		me._iniciar.appendChild(me._iniciar0);
		me._indicaes_de_uso.appendChild(me._iniciar);
		el=me._iniciar_1=document.createElement('div');
		els=me._iniciar_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar_1";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(58,58,58,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(85,170,127,0);';
		hs+='border-radius : 10px;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._iniciar_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tour Virtual 360", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._iniciar_1.ggUpdateText();
		el.appendChild(els);
		me._iniciar_1.ggIsActive=function() {
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
		me._iniciar_1.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso.appendChild(me._iniciar_1);
		el=me._indicativo2=document.createElement('div');
		els=me._indicativo2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Indicativo2";
		el.ggDx=1;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(58,58,58,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 70px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(85,170,127,0);';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._indicativo2.ggUpdateText=function() {
			var params = [];
			var hs = player._("COMO NAVEGAR NO AMBIENTE?\nClique na imagem e arrastre", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._indicativo2.ggUpdateText();
		el.appendChild(els);
		me._indicativo2.ggIsActive=function() {
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
		me._indicativo2.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso.appendChild(me._indicativo2);
		el=me._dedo=document.createElement('div');
		els=me._dedo__img=document.createElement('img');
		els.className='ggskin ggskin_dedo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAARwUlEQVR4nO3dy1rbyBqGUbGfXBS+/4G5K/agm7RDDOhQ52+taXegpCj+X5WwedmgkNvt9b33GmAW9/vbS+81kM0FyCWGPlwnBujBRccpBj/UIQZoxYXGIQY/tCEEqM0Fxi4GP7QnAqjJxcWPDH/oSwhQg4uKbxn+MAYRQGkuKJ4y+GE8IoCSXEz8xfCHcYkASvlf7wUAsJ9ApxQlyR+8uMAc7ARwlR0AfjP8AXIoSLZtM/xhRnYBuMIOAMCkhDtXCAC8iAAEsn0UzvCH+XkUwBl2AAAgkGoM5u4f1mEXgKPsAABAIAEAAIEEAMACPNLjqF+9F0AfXizaSn0+6zqDcdkBgMpSh/+2/XPsyccPIxMAUJHhR0t2XDhCAABAIAEAAIEEAFRkS9Y5gFF5Ph'+
			'nICzKsy8+dsJcdAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAg0K/eC2AN9/vbS+81wGxut9f33msglx0AAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQ'+
			'AACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAL96r0AYAy32+v7V//tfn97abkWoD4BAA'+
			'G+G+6l/rxIgLkIAFjQ1YFf6nuKAhiXAIAF9Bj4e3xelyCAcQgAmNSoQ/87H2sWAtCfAICJzDj0n3k8DjEAfQgAmMAqg/8ZuwLQhwCAga08+D8TAtCWAIAB9Rz8jwO497sJxADUIwBgILUH7tGBuvf/r7Xu2+31XQRAHQIABlFjiLYanp+/T8lj8WgA6hAA0FnJYTnKkKwRBEIAyhIA0EmpwT/DQPxYY6kQmOGYYXQCADooMQhnHIKlfsBQBMB1AgAauzr8Vxl8V3cFPBKAawQANGLwP1ciBFY9N1DT/3ovABJcGf73+9tLwoC7cpxJH5gEpQgAqOzscEoZ/J+JAGhDAEBFV4Z/6bXM5Gz83G6v70IA9hEAUMmZQZR61/+VKyFQYz2wEgEAFZwd/jXWsgIRAOUJACjs6OBx17+PCICyBAAUdGb411rLis7EkgiA5wQA'+
			'FGL4t+PcwXUCAAow/Ns7cg7tAsDffBIgXLTS8P/qWEZd8/3+9rL3/PvEQPiTAICGeg+gq5+7/0zvYxIBcI4AgAuODNReg6f29vfj1+91jCIAjhMAcNLIw7/XM+/P37flcYsAOMYPAcIJow7/0T4Kt/V6DHXYTwBARa0G0miD/7OW69t7zkc+X9CCAICD9g6OFsN/9MH/2WhrHW090JIAgANGGf6zDf5HLdbuUQD8TADAZGYd/J/VDgGPAuB7AgB2GuHuf8VhJQKgDwEAOxj+da18bDAqAQCDm/l5/xG1jtEuADwnAOAHPe/+04ZS7wiAJAIACjD8y+m545F6zskkAOAbBtE67ALAnwQAXFR6sIww/EcYluIL6vLLgOALCYPgu0H/3X9rdW5K/9KeI78wCFYnAOCC2e7+S6338eu0+HXDPX6b4gi7IFCTRwAwiNofiF'+
			'NroNX82h9KnhuDHf5hBwCe2DNwSg6SFd7+9vG9bLHDHOwAwKJ63enW2hFovQsgZFidAIBPZr/7b7Elv3cdpb+moQzlCADoqMbwL/n1rhptPY9GXhu0IABgEaMOtNI7Ei13Aew4sDIBAA9abv+n/WT7DGuEJAIAJjfTYB0tnmY6d1CaAIADDLA8HgOwKgEAk5p1+I8WUZBKAMC/Wn6+fYvvM7KR4mWktUBLAgAmtMLQWuEYYGYCAHYysMZj1wbOEwAwmZVCZKVjgdkIAGjo6p2kgVmH80oiAQCbLd6erg5ff3dwjgAAgEACAHYosUVs+x8YiQAAupshbjxqYDUCAAACCQCYwAx3yD2VuDt3jkkjAAAg0K/eCwDGsedOutad8v3+9uI5O7QjACDc0aH7+P/bNod5eQQAwa7ecd9ur+/u2mFOAgAClR7cIgDmIwCggZEG'+
			'ZK21jHSMwM8EADQwyrPy2kNaBMA8BABQlAiAOQgACGEwA48EAARoPfzPfD+BAm0JAAAIJACAKma7o59tvXCVAIAJXBlOBhvwjAAApjfK2yxhJgIA6G6GXQqRwWoEAOwwwu+bn2FIAvMQAAAQSADAZnu3p6s7G/7u4BwBABPxGKAO55VEAgB2GuHnAFZj8EI/AgAmY2i2J9xYkQCACa0QAXZUoC8BAP9qNUwMrbECZqS1QEsCAA4YaViMtJYjSq1bsME1AgA6KDVUZo0AoD8BAJObKQJGu/uf6dxBaQIAHuwZLKMNsW2bY5DNsEZIIgBgEaMO2Nvt9b3k2lo+k/f8n5UJAOio9IAZLQJGW8+jkdcGLQgA+KTlY4C93++I0nfcI3FHDuUIAFjUqhFQwp5zIzZYnQCAJ2bfBfiwUgQYyFCWAIBBGHBfa/2OCX8XJBAAcM'+
			'FKd9ijMoyhDgEAX+gxeAy7P/V4l4S/A1IIALio9C6AAQS0IADgG72GsQhY/zMSoDcBAAXUGC7JEdBr+Cefc/IIAPjB3qEgAq67399e0o4ZehEAMLiUodj7sxASzjE8EgCwQ89dgKNrmJHhD+0JANhJBNSx4jHBDH71XgBwzMfAnP2n2msPfnf/8D07AHDACLsAR9cyIsMf+hMAcNBoETDTEGux3tl3RqAVAQAVtRpGo4dAq/UdOd8jny9oQQDACUeGR8s70tFCYLT1fBhxTdCaAICTRo2Abftv8CYNOlv/cIwAgAtGjoAktv7hOAEADYmA8gx/OEcAwEVHh4oIKMfwh/MEABQgAtq63V7fDX+4RgBAISKgjaPnzfCH5wQAFHQmAoTAfoY/lCMAoLAzQ0cE/Mzwh7IEAFQgAsqxSwJ1CACo5GwEGHb/OXsu3P3DzwQA'+
			'VHR2EKVHwNkQSvv0Q7hCAEBlVyIgLQSuHLPBD8f86r0ASPAxnM4Mt48/s/KAuxo6s56bWdfNGuwAQENXXvBX3RG4cky2/OE8OwDQ2P3+9nJl6K2wI1AiZGY+fhiBAIAOrjwS+DBbCJTcvZjlmGFkAgA6urobsG1/DtYRB6PBD2PyjylQjefIXpivqfVsv0RgjMI1BmX5BxVIAIxrlWFdkmsL6vAIAAZS4mcDVmHwQ10CAAaUHAIGP7QhAGBgSSFg8ENbAgAmsGoIGPrQjwCAiTwOzJljwOCH/gQATGq2GDD0YSwCABYwagwY+jAuAQCL+Tx0RwoCYBx+GyAABBIAABBIAABAIAEAAIEEAAAE8i4AYDhH3rnQ4q2G1sOKBAAwjDNvWfz4M6UH3dm3T6ash/kJAKC7Ep9VUHLQjbSeUp/jIAT4zM8AAF2V/qCiq19vpP'+
			'XU+BAnHwzFBwEAdFNrGF3dLi/tyqONGkQA2yYAgE5qD6GjX3+k9bQY0CIAAQA012r47P0+o60HWhAAQLTRhnLL9Yx27LQlAICmWg+d0YbcaOshlwAAGESPOBAkuQQAsLyvhpzhRzIBADRj4P7DeWAEAgAgnCDJJAAAIJAAABiAu3BaEwAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgX71XgCwrpF+x/1Ia9m28dZDHjsAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIL8OGA46+mtc7/e3l1prAThLAMBOZ39/+8efEwLASDwCgB/cbq/vZ4f/569TYj0AJQgA+EbpoV0qJgCuEgDwhZqD'+
			'WgQAvQkA6EQEAD0JAHii1XAWAUAvAgA6EwFAD94GSBG9h1jJt9j1OJbb7fXd2wSBluwAsITeAVLCCscAzEMAAEAgAcAyVriDXuEYgDkIABiMCABaEAAsZZXhucpxAOMSADAoEQDUJABYjsEJ8DMBAAMTM0AtAoAlrTQ4VzoWYBwCgGWtNDhXOhZgDAIAPhn1I3lFAFCSAGBphibAcwIAJiJogFIEAMs7MzRHfQywbSIAKEMAwIREAHCVACDCarsAAFcJAJiUXQDgCgFAjBV3AUQAcJYAgMmJAOAMAUCUFXcBtk0EAMcJAFiECACOEADEWXUXYNtEALCfAICdZokAgD0EAJFWvlNe+diAcgQAsTwKAJIJAFiUCAC+M8XdDOUZDv85c1fv/LGaWXa3KMcOAAAEEgDEW/lnAQC+IgAAIJAAgM0uAJBHAMAFIgCYlQAIZX'+
			'D9zU/2A0kEAFwkpoAZCQB4YBcASCEAgrlzLce5BGYjAOATuwBAAgEQzp1rOc4lMBMBAE/YBQBWJwBw5/oFHw4ErEwAQGEiAJiBAGDbNkPrKx4FAKsSAPwmAspxLoHRCQD+YHD9zS4AsCIBwF9EQBnOIzAyAcBThtef7AIAqxEAfEkEXOccAqMSAHzLAPuPXQBgJQKAH4mAa5w/YERemDjEXfD5ge7cMTKhmscOAIfc728vXigA5ueFnMsS72ztArAaYZ/nV+8FML/HFw4DDmAOig8aE0mMyA5AHj8DAACBBAA05k4LGIEAAIBAAgA6sAsA9CYAoBMRAPQkAAAgkACAjuwCAL0IAAAIJACgM7sAQA8CAAACCQAYgF0AoDUBAACBBAAMwi4A0JIAgIGIAKAVAQAAgQQADMYuANCCAACAQAIABmQXAKhNAABAIAEAg7IL'+
			'ANQkAGBgIgCoRQAAQCABAIOzCwDUIAAAIJAAgAnYBQBKEwAAEEgAwCTsAgAlCQCYiAgAShEAAOGEZSYBAJPxYg2UIAAAIJAAgAnZBQCuEgAAEEgAwKTsAgBXCACYmAgAzhIAAMFEZC4BAJPzAg6cIQAAIJAAgAXYBQCOEgAAoYRjNgEAi/BiDhwhAGAhIgDYSwAAQCB3C7Cg2+31vfcaGJvdIuwAAEAgAQALcncH/EQAAIQRiGybAIBleZEHviMAYGEiAPiKAAAIIgr5IABgcV7wgWcEAEAIMcgjAQABvPADnwkAgAAikM8EAIQwAIBHAgBgceKPZwQABDEIgA8CAGBhoo+vuDAgkF8XnMHw5zt2ACCQwQAIAIAFiTx+IgAglAEB2bwAQDg/D7AeccceLhJABCzE8GcvjwAAFmH4c4SLBdi2zS7A7Ax/jnLBAL+JgD'+
			'kZ/pzhEQDwm0ECOfxjB/5iJ2Aeoo2zXDjAUyJgbAY/V7mAgG8JgfEY/pTgIgJ+JALGYfhTigsJ2EUE9Gf4U5KLCThECPRh+FOaCwo4TAS0Y/BTiwsLOE0I1GX4U5OLC7hMCJRl8NOCiwwoQgSUYfjTigsNKEoInGPw05oLDqhCCOxj8NOLCw+oTgz8zeCnNxcg0FRyDBj6jMTFCHSTEAOGPqNyYQLDWCUIDH1m4CIFhjZ6FBj2zMqFC0ynVxQY9qzk/9x+EV0UirVsAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="dedo";
		el.ggDx=71;
		el.ggDy=-37;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 129px;';
		hs+='left : calc(50% - ((135px + 0px) / 2) + 71px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((129px + 0px) / 2) - 37px);';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dedo.ggIsActive=function() {
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
		me._dedo.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso.appendChild(me._dedo);
		el=me._mouse=document.createElement('div');
		els=me._mouse__img=document.createElement('img');
		els.className='ggskin ggskin_mouse';
		hs=basePath + 'images/mouse.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mouse";
		el.ggDx=-55;
		el.ggDy=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 145px;';
		hs+='left : calc(50% - ((152px + 0px) / 2) - 55px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((145px + 0px) / 2) - 42px);';
		hs+='visibility : inherit;';
		hs+='width : 152px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mouse.ggIsActive=function() {
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
		me._mouse.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso.appendChild(me._mouse);
		me.divSkin.appendChild(me._indicaes_de_uso);
		el=me._pergunta=document.createElement('div');
		els=me._pergunta__img=document.createElement('img');
		els.className='ggskin ggskin_pergunta';
		hs=basePath + 'images/pergunta.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Pergunta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pergunta.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pergunta.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._indicaes_de_uso.ggVisible = !me._indicaes_de_uso.ggVisible;
				var flag=me._indicaes_de_uso.ggVisible;
				me._indicaes_de_uso.style.transition='none';
				me._indicaes_de_uso.style.visibility=((flag)&&(Number(me._indicaes_de_uso.style.opacity)>0||!me._indicaes_de_uso.style.opacity))?'inherit':'hidden';
			}
		}
		me._pergunta.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pergunta);
		el=me._formulario1=document.createElement('div');
		el.ggId="Formulario-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1018px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._formulario1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._formulario1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._formulario1);
		el=me._formulario2=document.createElement('div');
		el.ggId="Formulario-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 831px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._formulario2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._formulario2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._formulario2);
		me._video_screentint_file.logicBlock_visible();
		me._video_popup_file.logicBlock_visible();
		me._popup_video_file.logicBlock_visible();
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._video_popup_controls_file.logicBlock_visible();
		me.elementMouseOver['ht_video_play_file']=false;
		me.elementMouseOver['ht_video_pause_file']=false;
		me._video_popup_close_file.logicBlock_visible();
		me.elementMouseOver['video_popup_close_file']=false;
		me._screentint_image.logicBlock_visible();
		me._screentint_info.logicBlock_visible();
		me._information.logicBlock_visible();
		me.elementMouseOver['info_popup_close']=false;
		me._iconespadro.logicBlock_visible();
		me._iconespadro.logicBlock_alpha();
		me.elementMouseOver['iconespadro']=false;
		me._menu_background.logicBlock_visible();
		me._menu_background.logicBlock_alpha();
		me._node_scroller.logicBlock_alpha();
		me._category_scroller.logicBlock_alpha();
		me._menu_open.logicBlock_visible();
		me._menu_open.logicBlock_alpha();
		me.elementMouseOver['menu_open']=false;
		me._planta0.logicBlock_position();
		me._planta0.logicBlock_scaling();
		me._planta0.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
			me._map_1__img.setAttribute('loading', 'lazy');
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._image_popup_close1.logicBlock_visible();
		me.elementMouseOver['image_popup_close1']=false;
		me._image_popup.logicBlock_visible();
		me._popup_image.logicBlock_visible();
		me._image_popup_close0.logicBlock_position();
		me._image_popup_close0.logicBlock_visible();
		me.elementMouseOver['image_popup_close0']=false;
		me._planta_implantao.logicBlock_scaling();
		me._planta_implantao.logicBlock_angle();
		me._planta_implantao.logicBlock_visible();
		me.elementMouseOver['image_popup_close']=false;
		me._information2.logicBlock_position();
		me._information2.logicBlock_size();
		me._information_bg.logicBlock_size();
		me._info_text_body.logicBlock_position();
		me._info_text_body.logicBlock_size();
		me._info_text_body.logicBlock_text();
		me._info_title.logicBlock_position();
		me._info_title.logicBlock_size();
		me._info_title.logicBlock_text();
		me._ar_condicionado_com.logicBlock_backgroundcolor();
		me._ar_condicionado_com.logicBlock_bordercolor();
		me._ar_condicionado_com.logicBlock_textcolor();
		me.elementMouseOver['ar_condicionado_com']=false;
		me._p2.logicBlock_visible();
		me._ar_condicionado_und.logicBlock_backgroundcolor();
		me._ar_condicionado_und.logicBlock_bordercolor();
		me._ar_condicionado_und.logicBlock_textcolor();
		me.elementMouseOver['ar_condicionado_und']=false;
		me._p3.logicBlock_visible();
		me._inst_hidrulica_und.logicBlock_backgroundcolor();
		me._inst_hidrulica_und.logicBlock_bordercolor();
		me._inst_hidrulica_und.logicBlock_textcolor();
		me.elementMouseOver['inst_hidrulica_und']=false;
		me._p4.logicBlock_visible();
		me._elevadores.logicBlock_backgroundcolor();
		me._elevadores.logicBlock_bordercolor();
		me._elevadores.logicBlock_textcolor();
		me.elementMouseOver['elevadores']=false;
		me._p5.logicBlock_visible();
		me._geradores.logicBlock_backgroundcolor();
		me._geradores.logicBlock_bordercolor();
		me._geradores.logicBlock_textcolor();
		me.elementMouseOver['geradores']=false;
		me._p6.logicBlock_visible();
		me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
		me._inst_eltrica_area_comun.logicBlock_bordercolor();
		me._inst_eltrica_area_comun.logicBlock_textcolor();
		me.elementMouseOver['inst_eltrica_area_comun']=false;
		me._p7.logicBlock_visible();
		me._inst_eltrica_und.logicBlock_backgroundcolor();
		me._inst_eltrica_und.logicBlock_bordercolor();
		me._inst_eltrica_und.logicBlock_textcolor();
		me.elementMouseOver['inst_eltrica_und']=false;
		me._p8.logicBlock_visible();
		me._sistema_cftv.logicBlock_backgroundcolor();
		me._sistema_cftv.logicBlock_bordercolor();
		me._sistema_cftv.logicBlock_textcolor();
		me.elementMouseOver['sistema_cftv']=false;
		me._p9.logicBlock_visible();
		me._gs.logicBlock_backgroundcolor();
		me._gs.logicBlock_bordercolor();
		me._gs.logicBlock_textcolor();
		me.elementMouseOver['gs']=false;
		me._p10.logicBlock_visible();
		me._portaria.logicBlock_backgroundcolor();
		me._portaria.logicBlock_bordercolor();
		me._portaria.logicBlock_textcolor();
		me.elementMouseOver['portaria']=false;
		me._p11.logicBlock_visible();
		me._p_direito.logicBlock_backgroundcolor();
		me._p_direito.logicBlock_bordercolor();
		me._p_direito.logicBlock_textcolor();
		me.elementMouseOver['p_direito']=false;
		me._p12.logicBlock_visible();
		me._iproduto.logicBlock_backgroundcolor();
		me._iproduto.logicBlock_bordercolor();
		me._iproduto.logicBlock_textcolor();
		me.elementMouseOver['iproduto']=false;
		me._p1.logicBlock_visible();
		me._estrutura.logicBlock_backgroundcolor();
		me._estrutura.logicBlock_bordercolor();
		me._estrutura.logicBlock_textcolor();
		me.elementMouseOver['estrutura']=false;
		me._p13.logicBlock_visible();
		me._tplanta_implantao.logicBlock_position();
		me._tplanta_implantao.logicBlock_scaling();
		me._tplanta_implantao.logicBlock_alpha();
		me._tplanta_implantao.logicBlock_backgroundcolor();
		me.elementMouseOver['tplanta_implantao']=false;
		me._planta.logicBlock_visible();
		me._informaes_tcnicas.logicBlock_position();
		me._informaes_tcnicas.logicBlock_scaling();
		me._informaes_tcnicas.logicBlock_alpha();
		me._informaes_tcnicas.logicBlock_backgroundcolor();
		me.elementMouseOver['informaes_tcnicas']=false;
		me._info_tec_logo.logicBlock_visible();
		me._unidades_m2.logicBlock_position();
		me._unidades_m2.logicBlock_scaling();
		me._unidades_m2.logicBlock_alpha();
		me._unidades_m2.logicBlock_backgroundcolor();
		me.elementMouseOver['unidades_m2']=false;
		me._um2.logicBlock_visible();
		me._img_planta_448.logicBlock_position();
		me._img_planta_448.logicBlock_scaling();
		me._img_planta_448.logicBlock_visible();
		me.elementMouseOver['img_planta_448']=false;
		me._img_planta_457.logicBlock_position();
		me._img_planta_457.logicBlock_scaling();
		me._img_planta_457.logicBlock_visible();
		me.elementMouseOver['img_planta_457']=false;
		me._img_planta_584.logicBlock_position();
		me._img_planta_584.logicBlock_scaling();
		me._img_planta_584.logicBlock_visible();
		me.elementMouseOver['img_planta_584']=false;
		me._img_planta_651.logicBlock_position();
		me._img_planta_651.logicBlock_scaling();
		me._img_planta_651.logicBlock_visible();
		me.elementMouseOver['img_planta_651']=false;
		me._img_planta_675.logicBlock_position();
		me._img_planta_675.logicBlock_scaling();
		me._img_planta_675.logicBlock_visible();
		me.elementMouseOver['img_planta_675']=false;
		me._img_planta746.logicBlock_position();
		me._img_planta746.logicBlock_scaling();
		me._img_planta746.logicBlock_visible();
		me.elementMouseOver['img_planta746']=false;
		me._img_planta_842.logicBlock_position();
		me._img_planta_842.logicBlock_scaling();
		me._img_planta_842.logicBlock_visible();
		me.elementMouseOver['img_planta_842']=false;
		me._unidadesm2.logicBlock_visible();
		me._rectangle_10.logicBlock_visible();
		me.__4570.logicBlock_scaling();
		me.__4570.logicBlock_visible();
		me.__4570.logicBlock_backgroundcolor();
		me.elementMouseOver['_4570']=false;
		me.__6510.logicBlock_scaling();
		me.__6510.logicBlock_visible();
		me.__6510.logicBlock_backgroundcolor();
		me.elementMouseOver['_6510']=false;
		me.__5840.logicBlock_scaling();
		me.__5840.logicBlock_visible();
		me.__5840.logicBlock_backgroundcolor();
		me.elementMouseOver['_5840']=false;
		me.__7460.logicBlock_scaling();
		me.__7460.logicBlock_visible();
		me.__7460.logicBlock_backgroundcolor();
		me.elementMouseOver['_7460']=false;
		me.__842_0.logicBlock_scaling();
		me.__842_0.logicBlock_visible();
		me.__842_0.logicBlock_backgroundcolor();
		me.elementMouseOver['_842_0']=false;
		me.__6750.logicBlock_scaling();
		me.__6750.logicBlock_visible();
		me.__6750.logicBlock_backgroundcolor();
		me.elementMouseOver['_6750']=false;
		me._planta_7460.logicBlock_visible();
		me._planta_7460.logicBlock_backgroundcolor();
		me._planta_8420.logicBlock_visible();
		me._planta_8420.logicBlock_backgroundcolor();
		me._planta_6750.logicBlock_visible();
		me._planta_6750.logicBlock_backgroundcolor();
		me._planta_6510.logicBlock_visible();
		me._planta_6510.logicBlock_backgroundcolor();
		me._planta_4480.logicBlock_visible();
		me._planta_4480.logicBlock_backgroundcolor();
		me._planta_4570.logicBlock_visible();
		me._planta_4570.logicBlock_backgroundcolor();
		me._planta_5840.logicBlock_visible();
		me._planta_5840.logicBlock_backgroundcolor();
		me.__4480.logicBlock_scaling();
		me.__4480.logicBlock_visible();
		me.__4480.logicBlock_backgroundcolor();
		me.elementMouseOver['_4480']=false;
		me._unidadesm4.logicBlock_scaling();
		me._unidadesm4.logicBlock_visible();
		me._rectangle_1.logicBlock_visible();
		me.__457.logicBlock_scaling();
		me.__457.logicBlock_visible();
		me.__457.logicBlock_backgroundcolor();
		me.elementMouseOver['_457']=false;
		me.__651.logicBlock_scaling();
		me.__651.logicBlock_visible();
		me.__651.logicBlock_backgroundcolor();
		me.elementMouseOver['_651']=false;
		me.__584.logicBlock_scaling();
		me.__584.logicBlock_visible();
		me.__584.logicBlock_backgroundcolor();
		me.elementMouseOver['_584']=false;
		me.__746.logicBlock_scaling();
		me.__746.logicBlock_visible();
		me.__746.logicBlock_backgroundcolor();
		me.elementMouseOver['_746']=false;
		me.__842_.logicBlock_scaling();
		me.__842_.logicBlock_visible();
		me.__842_.logicBlock_backgroundcolor();
		me.elementMouseOver['_842_']=false;
		me.__675.logicBlock_scaling();
		me.__675.logicBlock_visible();
		me.__675.logicBlock_backgroundcolor();
		me.elementMouseOver['_675']=false;
		me._planta_746.logicBlock_visible();
		me._planta_746.logicBlock_backgroundcolor();
		me._planta_842.logicBlock_visible();
		me._planta_842.logicBlock_backgroundcolor();
		me._planta_675.logicBlock_visible();
		me._planta_675.logicBlock_backgroundcolor();
		me._planta_651.logicBlock_visible();
		me._planta_651.logicBlock_backgroundcolor();
		me._planta_448.logicBlock_visible();
		me._planta_448.logicBlock_backgroundcolor();
		me._planta_457.logicBlock_visible();
		me._planta_457.logicBlock_backgroundcolor();
		me._planta_584.logicBlock_visible();
		me._planta_584.logicBlock_backgroundcolor();
		me.__448.logicBlock_scaling();
		me.__448.logicBlock_visible();
		me.__448.logicBlock_backgroundcolor();
		me.elementMouseOver['_448']=false;
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_scaling();
		me._button_mute.logicBlock_position();
		me.elementMouseOver['unmute']=false;
		me._tt_unmute.logicBlock_visible();
		me.elementMouseOver['mute']=false;
		me._tt_mute.logicBlock_visible();
		me._button_fullscreen.logicBlock_position();
		me.elementMouseOver['button_fullscreen']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me._tt_fullscreen.logicBlock_visible();
		me._tt_fullscreen.logicBlock_text();
		me._regio.logicBlock_position();
		me._regio.logicBlock_scaling();
		me.elementMouseOver['regio']=false;
		me._drone_360.logicBlock_position();
		me._indicaes_de_uso.logicBlock_position();
		me._indicaes_de_uso.logicBlock_scaling();
		me._indicaes_de_uso.logicBlock_alpha();
		me.elementMouseOver['indicaes_de_uso']=false;
		me._formulario1.ggproperties = {
			googleFormURL: 'https://docs.google.com/forms/d/e/1FAIpQLScUDJdNXIiCTy8v617N7vOssIefudoOSKkivp5pNbg9hAi6nw/viewform?usp=dialog',
		};
		el = me._formulario1;
		

(function() {
  // Insertar estilos responsivos para el modal
  var style = document.createElement("style");
  style.innerHTML = `
        #googleFormModal {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      width: calc(100% - 240px);
      height: calc(100% - 240px);
      position: relative;
    }
        @media (max-width: 600px) {
      #googleFormModal {
        width: calc(100% - 40px);
        height: calc(100% - 80px);
      }
    }
  `;
  document.head.appendChild(style);

  // Crear el overlay que cubre toda la pantalla con fondo negro translúcido
  var overlay = document.createElement("div");
  overlay.id = "googleFormOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
  overlay.style.display = "flex"; // Para centrar el modal
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";
  overlay.style.opacity = "0"; // Inicialmente invisible
  overlay.style.transition = "opacity 0.5s ease-in-out";
  overlay.style.display = "none"; // Oculto inicialmente

  // Crear el modal que contendrá el iframe
  var modal = document.createElement("div");
  modal.id = "googleFormModal";
  // Las dimensiones se establecen vía CSS (incluidas las media queries)

  // Crear el iframe para mostrar la página de Google Forms
  var iframe = document.createElement("iframe");
  iframe.src = el.ggproperties.googleFormURL;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("marginheight", "0");
  iframe.setAttribute("marginwidth", "0");
  iframe.setAttribute("scrolling", "auto");

  // Agregar el iframe al modal
  modal.appendChild(iframe);

  // Crear el botón de cierre ("X") en la esquina superior derecha
  var closeButton = document.createElement("div");
  closeButton.innerHTML = "&#10006;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "24px";
  closeButton.style.color = "#fff";
  closeButton.style.zIndex = "1001";
  closeButton.onclick = function() {
    overlay.style.opacity = "0";
    setTimeout(function() { overlay.style.display = "none"; }, 500);
  };

  // Estructurar el overlay: agregar el modal y el botón de cierre
  overlay.appendChild(modal);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);

  // Mostrar el overlay (con modal e iframe) después de 30 segundos (30000 ms)
  setTimeout(function() {
    overlay.style.display = "flex";
    setTimeout(function() { overlay.style.opacity = "1"; }, 50);
  }, 30000);
})();
;
		me._formulario2.ggproperties = {
			googleFormURL: 'https://docs.google.com/forms/d/e/1FAIpQLSddvBBze3Ab_hBE1KzDF-jftO7Eh6V3W8VJHeZ4AMIykGt-EA/viewform?usp=dialog',
		};
		el = me._formulario2;
		

(function() {
  // Insertar estilos responsivos mediante una etiqueta <style>
  var style = document.createElement("style");
  style.innerHTML = `
        #googleFormModal {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      width: calc(100% - 240px);
      height: calc(100% - 240px);
      position: relative;
    }
        @media (max-width: 600px) {
      #googleFormModal {
        width: calc(100% - 40px);
        height: calc(100% - 80px);
      }
    }
  `;
  document.head.appendChild(style);

  // Crear el overlay que cubre toda la pantalla con fondo negro translúcido
  var overlay = document.createElement("div");
  overlay.id = "googleFormOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
  overlay.style.display = "flex"; // Centrar el modal
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";
  overlay.style.opacity = "0"; // Inicialmente invisible
  overlay.style.transition = "opacity 0.5s ease-in-out";
  overlay.style.display = "none"; // Oculto inicialmente

  // Crear el modal (contenedor) que mostrará el iframe
  var modal = document.createElement("div");
  modal.id = "googleFormModal";
  // Las dimensiones y estilos del modal se definen en el bloque <style> anterior

  // Crear el iframe para incrustar la página de Google Forms
  var iframe = document.createElement("iframe");
  iframe.src = el.ggproperties.googleFormURL;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("marginheight", "0");
  iframe.setAttribute("marginwidth", "0");
  iframe.setAttribute("scrolling", "auto");

  // Agregar el iframe al modal
  modal.appendChild(iframe);

  // Crear el botón de cierre ("X") en la esquina superior derecha del overlay
  var closeButton = document.createElement("div");
  closeButton.innerHTML = "&#10006;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "24px";
  closeButton.style.color = "#fff";
  closeButton.style.zIndex = "1001";
  closeButton.onclick = function() {
    overlay.style.opacity = "0";
    setTimeout(function() { overlay.style.display = "none"; }, 500);
  };

  // Estructurar el overlay: se agrega primero el modal y luego el botón de cierre
  overlay.appendChild(modal);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);

  // Mostrar el overlay (y el modal con el iframe) después de 60 segundos (60000 ms)
  setTimeout(function() {
    overlay.style.display = "flex";
    setTimeout(function() { overlay.style.opacity = "1"; }, 50);
  }, 60000);
})();

;
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._category_cloner.ggInstances.length; i++) {
				me._category_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_share.logicBlock();
			me._video_screentint_file.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._seekbar_file.ggConnectToMediaEl();
			me._video_popup_close_file.logicBlock_visible();
			me._screentint_image.logicBlock_visible();
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
			me._iconespadro.logicBlock_visible();
			me._menu_background.logicBlock_visible();
			me._menu_background.logicBlock_alpha();
			me._node_scroller.logicBlock_alpha();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._category_scroller.logicBlock_alpha();
			me._category_cloner.ggUpdateConditionNodeChange();
			me._menu_open.logicBlock_visible();
			me._menu_open.logicBlock_alpha();
			me._planta0.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._image_popup_close1.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close0.logicBlock_visible();
			me._planta_implantao.logicBlock_visible();
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._ar_condicionado_com.logicBlock_backgroundcolor();
			me._ar_condicionado_und.logicBlock_backgroundcolor();
			me._inst_hidrulica_und.logicBlock_backgroundcolor();
			me._elevadores.logicBlock_backgroundcolor();
			me._geradores.logicBlock_backgroundcolor();
			me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
			me._inst_eltrica_und.logicBlock_backgroundcolor();
			me._sistema_cftv.logicBlock_backgroundcolor();
			me._gs.logicBlock_backgroundcolor();
			me._portaria.logicBlock_backgroundcolor();
			me._p_direito.logicBlock_backgroundcolor();
			me._iproduto.logicBlock_backgroundcolor();
			me._estrutura.logicBlock_backgroundcolor();
			me._tplanta_implantao.logicBlock_backgroundcolor();
			me._planta.logicBlock_visible();
			me._informaes_tcnicas.logicBlock_scaling();
			me._informaes_tcnicas.logicBlock_alpha();
			me._informaes_tcnicas.logicBlock_backgroundcolor();
			me._info_tec_logo.logicBlock_visible();
			me._unidades_m2.logicBlock_backgroundcolor();
			me._um2.logicBlock_visible();
			me._img_planta_448.logicBlock_visible();
			me._img_planta_457.logicBlock_visible();
			me._img_planta_584.logicBlock_visible();
			me._img_planta_651.logicBlock_visible();
			me._img_planta_675.logicBlock_visible();
			me._img_planta746.logicBlock_visible();
			me._img_planta_842.logicBlock_visible();
			me._rectangle_10.logicBlock_visible();
			me.__4570.logicBlock_visible();
			me.__4570.logicBlock_backgroundcolor();
			me.__6510.logicBlock_visible();
			me.__6510.logicBlock_backgroundcolor();
			me.__5840.logicBlock_visible();
			me.__5840.logicBlock_backgroundcolor();
			me.__7460.logicBlock_visible();
			me.__7460.logicBlock_backgroundcolor();
			me.__842_0.logicBlock_visible();
			me.__842_0.logicBlock_backgroundcolor();
			me.__6750.logicBlock_visible();
			me.__6750.logicBlock_backgroundcolor();
			me._planta_7460.logicBlock_visible();
			me._planta_7460.logicBlock_backgroundcolor();
			me._planta_8420.logicBlock_visible();
			me._planta_8420.logicBlock_backgroundcolor();
			me._planta_6750.logicBlock_visible();
			me._planta_6750.logicBlock_backgroundcolor();
			me._planta_6510.logicBlock_visible();
			me._planta_6510.logicBlock_backgroundcolor();
			me._planta_4480.logicBlock_visible();
			me._planta_4480.logicBlock_backgroundcolor();
			me._planta_4570.logicBlock_visible();
			me._planta_4570.logicBlock_backgroundcolor();
			me._planta_5840.logicBlock_visible();
			me._planta_5840.logicBlock_backgroundcolor();
			me.__4480.logicBlock_visible();
			me.__4480.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_visible();
			me.__457.logicBlock_visible();
			me.__457.logicBlock_backgroundcolor();
			me.__651.logicBlock_visible();
			me.__651.logicBlock_backgroundcolor();
			me.__584.logicBlock_visible();
			me.__584.logicBlock_backgroundcolor();
			me.__746.logicBlock_visible();
			me.__746.logicBlock_backgroundcolor();
			me.__842_.logicBlock_visible();
			me.__842_.logicBlock_backgroundcolor();
			me.__675.logicBlock_visible();
			me.__675.logicBlock_backgroundcolor();
			me._planta_746.logicBlock_visible();
			me._planta_746.logicBlock_backgroundcolor();
			me._planta_842.logicBlock_visible();
			me._planta_842.logicBlock_backgroundcolor();
			me._planta_675.logicBlock_visible();
			me._planta_675.logicBlock_backgroundcolor();
			me._planta_651.logicBlock_visible();
			me._planta_651.logicBlock_backgroundcolor();
			me._planta_448.logicBlock_visible();
			me._planta_448.logicBlock_backgroundcolor();
			me._planta_457.logicBlock_visible();
			me._planta_457.logicBlock_backgroundcolor();
			me._planta_584.logicBlock_visible();
			me._planta_584.logicBlock_backgroundcolor();
			me.__448.logicBlock_visible();
			me.__448.logicBlock_backgroundcolor();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._video_screentint_file.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._video_popup_close_file.logicBlock_visible();
			me._screentint_image.logicBlock_visible();
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
			me._iconespadro.logicBlock_visible();
			me._menu_background.logicBlock_visible();
			me._menu_background.logicBlock_alpha();
			me._node_scroller.ggUpdatePosition();
			me._node_scroller.logicBlock_alpha();
			me._category_scroller.ggUpdatePosition();
			me._category_scroller.logicBlock_alpha();
			me._menu_open.logicBlock_visible();
			me._menu_open.logicBlock_alpha();
			me._planta0.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			me._image_popup_close1.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close0.logicBlock_visible();
			me._planta_implantao.logicBlock_visible();
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._ar_condicionado_com.logicBlock_backgroundcolor();
			me._ar_condicionado_und.logicBlock_backgroundcolor();
			me._inst_hidrulica_und.logicBlock_backgroundcolor();
			me._elevadores.logicBlock_backgroundcolor();
			me._geradores.logicBlock_backgroundcolor();
			me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
			me._inst_eltrica_und.logicBlock_backgroundcolor();
			me._sistema_cftv.logicBlock_backgroundcolor();
			me._gs.logicBlock_backgroundcolor();
			me._portaria.logicBlock_backgroundcolor();
			me._p_direito.logicBlock_backgroundcolor();
			me._iproduto.logicBlock_backgroundcolor();
			me._estrutura.logicBlock_backgroundcolor();
			me._tplanta_implantao.logicBlock_backgroundcolor();
			me._planta.logicBlock_visible();
			me._informaes_tcnicas.logicBlock_scaling();
			me._informaes_tcnicas.logicBlock_alpha();
			me._informaes_tcnicas.logicBlock_backgroundcolor();
			me._info_tec_logo.logicBlock_visible();
			me._unidades_m2.logicBlock_backgroundcolor();
			me._um2.logicBlock_visible();
			me._img_planta_448.logicBlock_visible();
			me._img_planta_457.logicBlock_visible();
			me._img_planta_584.logicBlock_visible();
			me._img_planta_651.logicBlock_visible();
			me._img_planta_675.logicBlock_visible();
			me._img_planta746.logicBlock_visible();
			me._img_planta_842.logicBlock_visible();
			me._rectangle_10.logicBlock_visible();
			me.__4570.logicBlock_visible();
			me.__4570.logicBlock_backgroundcolor();
			me.__6510.logicBlock_visible();
			me.__6510.logicBlock_backgroundcolor();
			me.__5840.logicBlock_visible();
			me.__5840.logicBlock_backgroundcolor();
			me.__7460.logicBlock_visible();
			me.__7460.logicBlock_backgroundcolor();
			me.__842_0.logicBlock_visible();
			me.__842_0.logicBlock_backgroundcolor();
			me.__6750.logicBlock_visible();
			me.__6750.logicBlock_backgroundcolor();
			me._planta_7460.logicBlock_visible();
			me._planta_7460.logicBlock_backgroundcolor();
			me._planta_8420.logicBlock_visible();
			me._planta_8420.logicBlock_backgroundcolor();
			me._planta_6750.logicBlock_visible();
			me._planta_6750.logicBlock_backgroundcolor();
			me._planta_6510.logicBlock_visible();
			me._planta_6510.logicBlock_backgroundcolor();
			me._planta_4480.logicBlock_visible();
			me._planta_4480.logicBlock_backgroundcolor();
			me._planta_4570.logicBlock_visible();
			me._planta_4570.logicBlock_backgroundcolor();
			me._planta_5840.logicBlock_visible();
			me._planta_5840.logicBlock_backgroundcolor();
			me.__4480.logicBlock_visible();
			me.__4480.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_visible();
			me.__457.logicBlock_visible();
			me.__457.logicBlock_backgroundcolor();
			me.__651.logicBlock_visible();
			me.__651.logicBlock_backgroundcolor();
			me.__584.logicBlock_visible();
			me.__584.logicBlock_backgroundcolor();
			me.__746.logicBlock_visible();
			me.__746.logicBlock_backgroundcolor();
			me.__842_.logicBlock_visible();
			me.__842_.logicBlock_backgroundcolor();
			me.__675.logicBlock_visible();
			me.__675.logicBlock_backgroundcolor();
			me._planta_746.logicBlock_visible();
			me._planta_746.logicBlock_backgroundcolor();
			me._planta_842.logicBlock_visible();
			me._planta_842.logicBlock_backgroundcolor();
			me._planta_675.logicBlock_visible();
			me._planta_675.logicBlock_backgroundcolor();
			me._planta_651.logicBlock_visible();
			me._planta_651.logicBlock_backgroundcolor();
			me._planta_448.logicBlock_visible();
			me._planta_448.logicBlock_backgroundcolor();
			me._planta_457.logicBlock_visible();
			me._planta_457.logicBlock_backgroundcolor();
			me._planta_584.logicBlock_visible();
			me._planta_584.logicBlock_backgroundcolor();
			me.__448.logicBlock_visible();
			me.__448.logicBlock_backgroundcolor();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
			me._tt_fullscreen.logicBlock_text();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_hastouch();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._planta0.logicBlock_position();
			me._planta0.logicBlock_scaling();
			me._image_popup_close0.logicBlock_position();
			me._planta_implantao.logicBlock_scaling();
			me._planta_implantao.logicBlock_angle();
			me._information2.logicBlock_position();
			me._information2.logicBlock_size();
			me._information_bg.logicBlock_size();
			me._info_text_body.logicBlock_position();
			me._info_text_body.logicBlock_size();
			me._info_title.logicBlock_position();
			me._info_title.logicBlock_size();
			me._tplanta_implantao.logicBlock_position();
			me._tplanta_implantao.logicBlock_scaling();
			me._planta.logicBlock_visible();
			me._informaes_tcnicas.logicBlock_position();
			me._informaes_tcnicas.logicBlock_scaling();
			me._info_tec_logo.logicBlock_visible();
			me._unidades_m2.logicBlock_position();
			me._unidades_m2.logicBlock_scaling();
			me._um2.logicBlock_visible();
			me._img_planta_448.logicBlock_position();
			me._img_planta_448.logicBlock_scaling();
			me._img_planta_457.logicBlock_position();
			me._img_planta_457.logicBlock_scaling();
			me._img_planta_584.logicBlock_position();
			me._img_planta_584.logicBlock_scaling();
			me._img_planta_651.logicBlock_position();
			me._img_planta_651.logicBlock_scaling();
			me._img_planta_675.logicBlock_position();
			me._img_planta_675.logicBlock_scaling();
			me._img_planta746.logicBlock_position();
			me._img_planta746.logicBlock_scaling();
			me._img_planta_842.logicBlock_position();
			me._img_planta_842.logicBlock_scaling();
			me._unidadesm2.logicBlock_visible();
			me._unidadesm4.logicBlock_scaling();
			me._unidadesm4.logicBlock_visible();
			me._image_3.logicBlock_position();
			me._image_3.logicBlock_scaling();
			me._button_mute.logicBlock_position();
			me._button_fullscreen.logicBlock_position();
			me._regio.logicBlock_position();
			me._regio.logicBlock_scaling();
			me._drone_360.logicBlock_position();
			me._indicaes_de_uso.logicBlock_position();
			me._indicaes_de_uso.logicBlock_scaling();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_B1', function(event) {
			me._unidades_m2.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_FINAL12', function(event) {
			me._img_planta_842.logicBlock_visible();
			me.__842_0.logicBlock_backgroundcolor();
			me._planta_8420.logicBlock_visible();
			me._planta_8420.logicBlock_backgroundcolor();
			me.__842_.logicBlock_backgroundcolor();
			me._planta_842.logicBlock_visible();
			me._planta_842.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_FINAL3A', function(event) {
			me._img_planta_448.logicBlock_visible();
			me._planta_4480.logicBlock_visible();
			me.__4480.logicBlock_backgroundcolor();
			me._planta_448.logicBlock_visible();
			me.__448.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_FINAL3AB', function(event) {
			me._img_planta746.logicBlock_visible();
			me.__7460.logicBlock_backgroundcolor();
			me._planta_7460.logicBlock_visible();
			me.__746.logicBlock_backgroundcolor();
			me._planta_746.logicBlock_visible();
		});
		player.addListener('varchanged_FINAL4A', function(event) {
			me._img_planta_457.logicBlock_visible();
			me.__4570.logicBlock_backgroundcolor();
			me._planta_4570.logicBlock_visible();
			me.__457.logicBlock_backgroundcolor();
			me._planta_457.logicBlock_visible();
		});
		player.addListener('varchanged_FINAL5A', function(event) {
			me._img_planta_651.logicBlock_visible();
			me.__6510.logicBlock_backgroundcolor();
			me._planta_6510.logicBlock_visible();
			me.__651.logicBlock_backgroundcolor();
			me._planta_651.logicBlock_visible();
		});
		player.addListener('varchanged_FINAL5B', function(event) {
			me._img_planta_675.logicBlock_visible();
			me.__6750.logicBlock_backgroundcolor();
			me._planta_6750.logicBlock_visible();
			me.__675.logicBlock_backgroundcolor();
			me._planta_675.logicBlock_visible();
		});
		player.addListener('varchanged_FINAL6AB', function(event) {
			me._img_planta_584.logicBlock_visible();
			me.__5840.logicBlock_backgroundcolor();
			me._planta_5840.logicBlock_visible();
			me.__584.logicBlock_backgroundcolor();
			me._planta_584.logicBlock_visible();
		});
		player.addListener('varchanged_IACC', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._ar_condicionado_com.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IACU', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._ar_condicionado_und.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IEC', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._inst_eltrica_area_comun.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IEL', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._elevadores.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IEU', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._inst_eltrica_und.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IG', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._geradores.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IGS', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._gs.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IHU', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._inst_hidrulica_und.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IMP', function(event) {
			me._tplanta_implantao.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IP', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._portaria.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IPD', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._p_direito.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_IPRD', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._iproduto.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_ISC', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._sistema_cftv.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_ITE', function(event) {
			me._info_text_body.logicBlock_text();
			me._info_title.logicBlock_text();
			me._estrutura.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Imagem1', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_Imagem1();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_Imagem1();
				}
			}
		});
		player.addListener('varchanged_MAQUETE', function(event) {
			me._planta_implantao.logicBlock_visible();
			me._planta.logicBlock_visible();
			me._info_tec_logo.logicBlock_visible();
			me._um2.logicBlock_visible();
			me._rectangle_10.logicBlock_visible();
			me.__4570.logicBlock_visible();
			me.__6510.logicBlock_visible();
			me.__5840.logicBlock_visible();
			me.__7460.logicBlock_visible();
			me.__842_0.logicBlock_visible();
			me.__6750.logicBlock_visible();
			me._planta_7460.logicBlock_visible();
			me._planta_8420.logicBlock_visible();
			me._planta_6750.logicBlock_visible();
			me._planta_6510.logicBlock_visible();
			me._planta_4480.logicBlock_visible();
			me._planta_4570.logicBlock_visible();
			me._planta_5840.logicBlock_visible();
			me.__4480.logicBlock_visible();
			me._rectangle_1.logicBlock_visible();
			me.__457.logicBlock_visible();
			me.__651.logicBlock_visible();
			me.__584.logicBlock_visible();
			me.__746.logicBlock_visible();
			me.__842_.logicBlock_visible();
			me.__675.logicBlock_visible();
			me._planta_746.logicBlock_visible();
			me._planta_842.logicBlock_visible();
			me._planta_675.logicBlock_visible();
			me._planta_651.logicBlock_visible();
			me._planta_448.logicBlock_visible();
			me._planta_457.logicBlock_visible();
			me._planta_584.logicBlock_visible();
			me.__448.logicBlock_visible();
		});
		player.addListener('varchanged_Menu', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_Menu();
				}
			}
			me._iconespadro.logicBlock_visible();
			me._menu_background.logicBlock_visible();
			me._menu_open.logicBlock_visible();
		});
		player.addListener('varchanged_Node1', function(event) {
			me._iconespadro.logicBlock_visible();
			me._menu_background.logicBlock_visible();
			me._menu_open.logicBlock_visible();
		});
		player.addListener('varchanged_Opcao2', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_Opcao2();
				}
			}
			me._iconespadro.logicBlock_visible();
		});
		player.addListener('varchanged_Planta', function(event) {
			me._planta0.logicBlock_visible();
			me._image_popup_close1.logicBlock_visible();
		});
		player.addListener('varchanged_Planta44', function(event) {
			me._planta_4480.logicBlock_backgroundcolor();
			me._planta_448.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta45', function(event) {
			me._planta_4570.logicBlock_backgroundcolor();
			me._planta_457.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta58', function(event) {
			me._planta_5840.logicBlock_backgroundcolor();
			me._planta_584.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta65', function(event) {
			me._planta_6510.logicBlock_backgroundcolor();
			me._planta_651.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta67', function(event) {
			me._planta_6750.logicBlock_backgroundcolor();
			me._planta_675.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta74', function(event) {
			me._planta_7460.logicBlock_backgroundcolor();
			me._planta_746.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_Planta84', function(event) {
			me._planta_8420.logicBlock_backgroundcolor();
			me._planta_842.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_TEC', function(event) {
			me._informaes_tcnicas.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_UNIDADES', function(event) {
			me._rectangle_10.logicBlock_visible();
			me.__4570.logicBlock_visible();
			me.__4570.logicBlock_backgroundcolor();
			me.__6510.logicBlock_visible();
			me.__6510.logicBlock_backgroundcolor();
			me.__5840.logicBlock_visible();
			me.__5840.logicBlock_backgroundcolor();
			me.__7460.logicBlock_visible();
			me.__7460.logicBlock_backgroundcolor();
			me.__842_0.logicBlock_visible();
			me.__842_0.logicBlock_backgroundcolor();
			me.__6750.logicBlock_visible();
			me.__6750.logicBlock_backgroundcolor();
			me._planta_7460.logicBlock_visible();
			me._planta_8420.logicBlock_visible();
			me._planta_6750.logicBlock_visible();
			me._planta_6510.logicBlock_visible();
			me._planta_4480.logicBlock_visible();
			me._planta_4570.logicBlock_visible();
			me._planta_5840.logicBlock_visible();
			me.__4480.logicBlock_visible();
			me.__4480.logicBlock_backgroundcolor();
			me._rectangle_1.logicBlock_visible();
			me.__457.logicBlock_visible();
			me.__457.logicBlock_backgroundcolor();
			me.__651.logicBlock_visible();
			me.__651.logicBlock_backgroundcolor();
			me.__584.logicBlock_visible();
			me.__584.logicBlock_backgroundcolor();
			me.__746.logicBlock_visible();
			me.__746.logicBlock_backgroundcolor();
			me.__842_.logicBlock_visible();
			me.__842_.logicBlock_backgroundcolor();
			me.__675.logicBlock_visible();
			me.__675.logicBlock_backgroundcolor();
			me._planta_746.logicBlock_visible();
			me._planta_842.logicBlock_visible();
			me._planta_675.logicBlock_visible();
			me._planta_651.logicBlock_visible();
			me._planta_448.logicBlock_visible();
			me._planta_457.logicBlock_visible();
			me._planta_584.logicBlock_visible();
			me.__448.logicBlock_visible();
			me.__448.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_VideoPadrao', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_VideoPadrao();
				}
			}
		});
		player.addListener('varchanged_category_visible', function(event) {
			me._menu_background.logicBlock_alpha();
			me._node_scroller.logicBlock_alpha();
			me._category_scroller.logicBlock_alpha();
			me._menu_open.logicBlock_alpha();
		});
		player.addListener('varchanged_indicativo', function(event) {
			me._informaes_tcnicas.logicBlock_scaling();
			me._informaes_tcnicas.logicBlock_alpha();
			me._informaes_tcnicas.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_node_visible', function(event) {
			me._node_scroller.logicBlock_alpha();
			me._category_scroller.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_back', function(event) {
			me._variable_opt_back_available.logicBlock();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_var_hs', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_var_hs();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_var_hs();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_var_hs();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_var_hs();
				}
			}
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._screentint_image.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._popup_image.logicBlock_visible();
			me._image_popup_close0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_popup_1', function(event) {
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_languages', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_share', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_file', function(event) {
			me._video_screentint_file.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._popup_video_file.logicBlock_visible();
			me._video_popup_controls_file.logicBlock_visible();
			me._video_popup_close_file.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner.ggUpdate();
			me._category_cloner.ggUpdate();
		});
	};
	function SkinCloner_category_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_text=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_text;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._category_text.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			params.push(player._(String(me.ggNodeCount)));
			var hs = player._("%1 (%2)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_text.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_text.ggUpdateText();
		});
		el.appendChild(els);
		me._category_text.ggIsActive=function() {
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
		me._category_text.onclick=function (e) {
			if (me._category_text.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('node_visible', true);
		}
		me._category_text.ggActivate=function () {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		me._category_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._category_text);
			me.ggEvent_changenode=function(event) {
				if (me._category_text.ggLastIsActive!=me._category_text.ggIsActive()) {
					me._category_text.ggLastIsActive=me._category_text.ggIsActive();
					if (me._category_text.ggIsActive()) {
						if (me._category_text.ggActivate) me._category_text.ggActivate();
					} else {
						if (me._category_text.ggDeactivate) me._category_text.ggDeactivate();
					}
				}
			};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_image_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_image_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (me._node_image_cloner.isDragging()) return;
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseenter=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseleave=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((136px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px 0px 2px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
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
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : calc(50% - ((135px + 6px) / 2) + 0px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_visited.ggIsActive=function() {
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
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style.transition='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.logicBlock_bordercolor();
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
		me.elementMouseOver['node_image_cloner']=false;
		me._node_title.logicBlock_visible();
		me._node_visited.logicBlock_bordercolor();
			me.ggEvent_activehotspotchanged=function(event) {
				me._node_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._node_title.logicBlock_visible();
				me._node_visited.logicBlock_bordercolor();
				me._node_visited.logicBlock_bordercolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._node_visited.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function(event) {
				me._node_title.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Imagem1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('vis_image_popup', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_info1.logicBlock_alpha();
			me._ht_image_info1.logicBlock_backgroundcolor();
			me._tt_ht_image_file.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._ht_image_info1.logicBlock_alpha();
			me._ht_image_info1.logicBlock_backgroundcolor();
			me._tt_ht_image_file.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_customimage.ggSubElement.setAttribute('alt', player._(me._ht_image_customimage.ggAltText));
			me._ht_image_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_customimage.ggText_untranslated = img;
			me._ht_image_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_customimage.ggSubElement.style.width = '0px';
			me._ht_image_customimage.ggSubElement.style.height = '0px';
			me._ht_image_customimage.ggSubElement.src='';
			me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_customimage.ggText != player._(me._ht_image_customimage.ggText_untranslated)) {
				me._ht_image_customimage.ggText = player._(me._ht_image_customimage.ggText_untranslated);
				me._ht_image_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 6px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style.transition='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage.ggSubElement.src='';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.logicBlock_visible();
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_customimage.ggScrollbars || currentWidth < me._ht_image_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_customimage.scrollLeft=currentWidth / 2 - me._ht_image_customimage.clientWidth / 2;
			}
			if (!me._ht_image_customimage.ggScrollbars || currentHeight < me._ht_image_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_customimage.scrollTop=currentHeight / 2 - me._ht_image_customimage.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		el=me._ht_image_info1=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info1.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info1.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info1.ggParameter.sx = 0.8;
					me._ht_image_info1.ggParameter.sy = 0.8;
					me._ht_image_info1.style.transform=parameterToTransform(me._ht_image_info1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info1);}, 550);
				}
				else {
					me._ht_image_info1.ggParameter.sx = 1;
					me._ht_image_info1.ggParameter.sy = 1;
					me._ht_image_info1.style.transform=parameterToTransform(me._ht_image_info1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info1);}, 550);
				}
			}
		}
		me._ht_image_info1.logicBlock_scaling();
		me._ht_image_info1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info1.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info1.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info1.style.visibility=me._ht_image_info1.ggVisible?'inherit':'hidden';
					me._ht_image_info1.style.opacity=1;
				}
				else {
					me._ht_image_info1.style.visibility=me._ht_image_info1.ggVisible?'inherit':'hidden';
					me._ht_image_info1.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info1.logicBlock_alpha();
		me._ht_image_info1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info1.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info1.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info1.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info1.logicBlock_backgroundcolor();
		me._ht_image_info1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info2=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #0000ff;';
		hs+='border-radius : 200px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info2.style.transition='transform 500ms ease 0ms';
				if (me._ht_image_info2.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info2.ggParameter.sx = 2.5;
					me._ht_image_info2.ggParameter.sy = 2.5;
					me._ht_image_info2.style.transform=parameterToTransform(me._ht_image_info2.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info2);}, 550);
				}
				else {
					me._ht_image_info2.ggParameter.sx = 1;
					me._ht_image_info2.ggParameter.sy = 1;
					me._ht_image_info2.style.transform=parameterToTransform(me._ht_image_info2.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info2);}, 550);
				}
			}
		}
		me._ht_image_info2.logicBlock_scaling();
		me._ht_image_info2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_info1.appendChild(me._ht_image_info2);
		me._ht_image.appendChild(me._ht_image_info1);
		el=me._tt_ht_image_file=document.createElement('div');
		els=me._tt_ht_image_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_image_file.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_image_file.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_image_file.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_image_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image_file.logicBlock_position = function() {
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
			if (me._tt_ht_image_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_image_file.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_image_file.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_image_file.style.top='-47px';
				}
				else {
					me._tt_ht_image_file.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_image_file.style.top='24px';
				}
			}
		}
		me._tt_ht_image_file.logicBlock_position();
		me._tt_ht_image_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_image_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image_file.style.visibility=(Number(me._tt_ht_image_file.style.opacity)>0||!me._tt_ht_image_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_image_file.ggVisible=true;
				}
				else {
					me._tt_ht_image_file.style.visibility="hidden";
					me._tt_ht_image_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_image_file.logicBlock_visible();
		me._tt_ht_image_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._tt_ht_image_file);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1.style.transition='transform 0s';
				if (me._image_1.ggCurrentLogicStateScaling == 0) {
					me._image_1.ggParameter.sx = 1;
					me._image_1.ggParameter.sy = 1;
					me._image_1.style.transform=parameterToTransform(me._image_1.ggParameter);
					skin.updateSize(me._image_1);
				}
				else {
					me._image_1.ggParameter.sx = 1;
					me._image_1.ggParameter.sy = 1;
					me._image_1.style.transform=parameterToTransform(me._image_1.ggParameter);
					skin.updateSize(me._image_1);
				}
			}
		}
		me._image_1.logicBlock_scaling();
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._image_1);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 6;
			me._ht_image_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_customimage.logicBlock_visible();
		me._ht_image_info1.logicBlock_scaling();
		me._ht_image_info1.logicBlock_alpha();
		me._ht_image_info1.logicBlock_backgroundcolor();
		me._ht_image_info2.logicBlock_scaling();
		me._tt_ht_image_file.logicBlock_position();
		me._tt_ht_image_file.logicBlock_visible();
		me._image_1.logicBlock_scaling();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_customimage.logicBlock_visible();
				me._tt_ht_image_file.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_customimage.logicBlock_visible();
				me._ht_image_info1.logicBlock_scaling();
				me._ht_image_info2.logicBlock_scaling();
				me._tt_ht_image_file.logicBlock_visible();
				me._image_1.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_customimage.logicBlock_visible();
				me._ht_image_info1.logicBlock_scaling();
				me._ht_image_info2.logicBlock_scaling();
				me._tt_ht_image_file.logicBlock_position();
				me._tt_ht_image_file.logicBlock_visible();
				me._image_1.logicBlock_scaling();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_image_file.logicBlock_position();
			};
			me.ggEvent_varchanged_Imagem1=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_var_hs=function() {
				me._ht_image_info1.logicBlock_scaling();
				me._ht_image_info2.logicBlock_scaling();
				me._image_1.logicBlock_scaling();
			};
			me.__div = me._ht_image;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-308;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 308px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseenter=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseleave=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO'+
			'+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh'+
			'hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1'+
			'TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU'+
			'b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N'+
			'99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV'+
			'QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq'+
			'XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L'+
			'Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI'+
			'DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+'+
			'vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6'+
			'abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC'+
			'UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS'+
			'ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b'+
			'9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
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
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					me._map_pin_tt.style.left = 'calc(50% - (0px / 2))';
					me._map_pin_tt.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -38px)';
				}
				else {
					me._map_pin_tt.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._map_pin_tt.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha();
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_tt);
		me.elementMouseOver['map_pin']=false;
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me.elementMouseOver['map_pin_active']=false;
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal']=false;
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_tt.logicBlock_position();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._map_pin_tt.logicBlock_position();
			};
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggDx=-268;
		el.ggDy=-363;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 268px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 363px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Imagem1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
					skin._info_title0.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_title0.ggUpdateText();
				skin._info_title0.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
					skin._info_text_body0.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_text_body0.ggUpdateText();
				skin._info_text_body0.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.setVariableValue('vis_info_popup_1', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			me._ht_image_info10.logicBlock_alpha();
			me._ht_image_info10.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			me._ht_image_info10.logicBlock_alpha();
			me._ht_image_info10.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_information.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_information.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_information.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
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
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style.transition='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left = 'calc(50% - (0px / 2))';
					me._tt_information.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -47px)';
				}
				else {
					me._tt_information.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_information.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style.transition='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.logicBlock_visible();
		me._tt_information.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_info_customimage.ggSubElement.setAttribute('alt', player._(me._ht_info_customimage.ggAltText));
			me._ht_info_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_info_customimage.ggText_untranslated = img;
			me._ht_info_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_info_customimage.ggSubElement.style.width = '0px';
			me._ht_info_customimage.ggSubElement.style.height = '0px';
			me._ht_info_customimage.ggSubElement.src='';
			me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_info_customimage.ggText != player._(me._ht_info_customimage.ggText_untranslated)) {
				me._ht_info_customimage.ggText = player._(me._ht_info_customimage.ggText_untranslated);
				me._ht_info_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style.transition='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage.ggSubElement.src='';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.logicBlock_visible();
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_info_customimage.ggScrollbars || currentWidth < me._ht_info_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_info_customimage.scrollLeft=currentWidth / 2 - me._ht_info_customimage.clientWidth / 2;
			}
			if (!me._ht_info_customimage.ggScrollbars || currentHeight < me._ht_info_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_info_customimage.scrollTop=currentHeight / 2 - me._ht_info_customimage.clientHeight / 2;
			}
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		el=me._ht_image_info10=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info10.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info10.ggParameter.sx = 0.8;
					me._ht_image_info10.ggParameter.sy = 0.8;
					me._ht_image_info10.style.transform=parameterToTransform(me._ht_image_info10.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info10);}, 550);
				}
				else {
					me._ht_image_info10.ggParameter.sx = 1;
					me._ht_image_info10.ggParameter.sy = 1;
					me._ht_image_info10.style.transform=parameterToTransform(me._ht_image_info10.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info10);}, 550);
				}
			}
		}
		me._ht_image_info10.logicBlock_scaling();
		me._ht_image_info10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info10.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info10.style.visibility=me._ht_image_info10.ggVisible?'inherit':'hidden';
					me._ht_image_info10.style.opacity=1;
				}
				else {
					me._ht_image_info10.style.visibility=me._ht_image_info10.ggVisible?'inherit':'hidden';
					me._ht_image_info10.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info10.logicBlock_alpha();
		me._ht_image_info10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info10.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info10.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info10.logicBlock_backgroundcolor();
		me._ht_image_info10.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info20=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #0000ff;';
		hs+='border-radius : 200px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info20.style.transition='transform 500ms ease 0ms';
				if (me._ht_image_info20.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info20.ggParameter.sx = 2.5;
					me._ht_image_info20.ggParameter.sy = 2.5;
					me._ht_image_info20.style.transform=parameterToTransform(me._ht_image_info20.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info20);}, 550);
				}
				else {
					me._ht_image_info20.ggParameter.sx = 1;
					me._ht_image_info20.ggParameter.sy = 1;
					me._ht_image_info20.style.transform=parameterToTransform(me._ht_image_info20.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info20);}, 550);
				}
			}
		}
		me._ht_image_info20.logicBlock_scaling();
		me._ht_image_info20.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_info10.appendChild(me._ht_image_info20);
		me._ht_info.appendChild(me._ht_image_info10);
		el=me._image_info=document.createElement('div');
		els=me._image_info__img=document.createElement('img');
		els.className='ggskin ggskin_image_info';
		hs=basePath + 'images/image_info.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_info.style.transition='transform 0s';
				if (me._image_info.ggCurrentLogicStateScaling == 0) {
					me._image_info.ggParameter.sx = 1;
					me._image_info.ggParameter.sy = 1;
					me._image_info.style.transform=parameterToTransform(me._image_info.ggParameter);
					skin.updateSize(me._image_info);
				}
				else {
					me._image_info.ggParameter.sx = 1;
					me._image_info.ggParameter.sy = 1;
					me._image_info.style.transform=parameterToTransform(me._image_info.ggParameter);
					skin.updateSize(me._image_info);
				}
			}
		}
		me._image_info.logicBlock_scaling();
		me._image_info.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._image_info);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_info_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_info_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_info_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_info_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_info_customimage.logicBlock_visible();
		me._ht_image_info10.logicBlock_scaling();
		me._ht_image_info10.logicBlock_alpha();
		me._ht_image_info10.logicBlock_backgroundcolor();
		me._ht_image_info20.logicBlock_scaling();
		me._image_info.logicBlock_scaling();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_information.logicBlock_visible();
				me._ht_info_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._tt_information.logicBlock_visible();
				me._ht_info_customimage.logicBlock_visible();
				me._ht_image_info10.logicBlock_scaling();
				me._ht_image_info20.logicBlock_scaling();
				me._image_info.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._tt_information.logicBlock_position();
				me._tt_information.logicBlock_visible();
				me._ht_info_customimage.logicBlock_visible();
				me._ht_image_info10.logicBlock_scaling();
				me._ht_image_info20.logicBlock_scaling();
				me._image_info.logicBlock_scaling();
			};
			me.ggEvent_hastouch=function() {
				me._tt_information.logicBlock_position();
			};
			me.ggEvent_varchanged_Imagem1=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_var_hs=function() {
				me._ht_image_info10.logicBlock_scaling();
				me._ht_image_info20.logicBlock_scaling();
				me._image_info.logicBlock_scaling();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=-160;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 160px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((me.ggUserdata.customnodeid == "SE"))
				)
			) {
					player.stopSound("Som2");
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_image_info11.logicBlock_alpha();
			me._ht_image_info11.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._ht_image_info11.logicBlock_alpha();
			me._ht_image_info11.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me._ht_image_info11=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #0000ff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 2px) / 2) + 0px);';
		hs+='opacity : 0.1;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info11.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info11.ggParameter.sx = 0.8;
					me._ht_image_info11.ggParameter.sy = 0.8;
					me._ht_image_info11.style.transform=parameterToTransform(me._ht_image_info11.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info11);}, 550);
				}
				else {
					me._ht_image_info11.ggParameter.sx = 1;
					me._ht_image_info11.ggParameter.sy = 1;
					me._ht_image_info11.style.transform=parameterToTransform(me._ht_image_info11.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info11);}, 550);
				}
			}
		}
		me._ht_image_info11.logicBlock_scaling();
		me._ht_image_info11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info11.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info11.style.visibility=me._ht_image_info11.ggVisible?'inherit':'hidden';
					me._ht_image_info11.style.opacity=1;
				}
				else {
					me._ht_image_info11.style.visibility=me._ht_image_info11.ggVisible?'inherit':'hidden';
					me._ht_image_info11.style.opacity=0.1;
				}
			}
		}
		me._ht_image_info11.logicBlock_alpha();
		me._ht_image_info11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info11.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info11.style.backgroundColor="rgba(0,0,255,1)";
				}
				else {
					me._ht_image_info11.style.backgroundColor="rgba(0,0,255,1)";
				}
			}
		}
		me._ht_image_info11.logicBlock_backgroundcolor();
		me._ht_image_info11.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info21=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 200px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((50px + 8px) / 2) + 0px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info21.style.transition='transform 500ms ease 0ms';
				if (me._ht_image_info21.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info21.ggParameter.sx = 2.5;
					me._ht_image_info21.ggParameter.sy = 2.5;
					me._ht_image_info21.style.transform=parameterToTransform(me._ht_image_info21.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info21);}, 550);
				}
				else {
					me._ht_image_info21.ggParameter.sx = 1;
					me._ht_image_info21.ggParameter.sy = 1;
					me._ht_image_info21.style.transform=parameterToTransform(me._ht_image_info21.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info21);}, 550);
				}
			}
		}
		me._ht_image_info21.logicBlock_scaling();
		me._ht_image_info21.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_info11.appendChild(me._ht_image_info21);
		me._ht_node.appendChild(me._ht_image_info11);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_10.style.transition='transform 0s';
				if (me._image_10.ggCurrentLogicStateScaling == 0) {
					me._image_10.ggParameter.sx = 1;
					me._image_10.ggParameter.sy = 1;
					me._image_10.style.transform=parameterToTransform(me._image_10.ggParameter);
					skin.updateSize(me._image_10);
				}
				else {
					me._image_10.ggParameter.sx = 1;
					me._image_10.ggParameter.sy = 1;
					me._image_10.style.transform=parameterToTransform(me._image_10.ggParameter);
					skin.updateSize(me._image_10);
				}
			}
		}
		me._image_10.logicBlock_scaling();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._image_10);
		me.elementMouseOver['ht_node']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_image_info11.logicBlock_scaling();
		me._ht_image_info11.logicBlock_alpha();
		me._ht_image_info11.logicBlock_backgroundcolor();
		me._ht_image_info21.logicBlock_scaling();
		me._image_10.logicBlock_scaling();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_customimage.logicBlock_visible();
				me._ht_image_info11.logicBlock_scaling();
				me._ht_image_info21.logicBlock_scaling();
				me._image_10.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_customimage.logicBlock_visible();
				me._ht_image_info11.logicBlock_scaling();
				me._ht_image_info21.logicBlock_scaling();
				me._image_10.logicBlock_scaling();
			};
			me.ggEvent_varchanged_var_hs=function() {
				me._ht_image_info11.logicBlock_scaling();
				me._ht_image_info21.logicBlock_scaling();
				me._image_10.logicBlock_scaling();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Opcao2') == true)) && 
				((me.ggUserdata.customnodeid == "Flores")) && 
				((player.getVariableValue('Menu') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('VideoPadrao') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
				else if (me._ht_video_file.ggCurrentLogicStateVisible == 1) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('vis_video_file', true);
			if (skin._popup_video_file.ggApiPlayer) {
				if (skin._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_file.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_file.ggApiPlayerType == 'vimeo') {
					skin._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
				player.stopSound("Audio1");
				player.stopSound("Audio2");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_image_info12.logicBlock_alpha();
			me._ht_image_info12.logicBlock_backgroundcolor();
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_image_info12.logicBlock_alpha();
			me._ht_image_info12.logicBlock_backgroundcolor();
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info12=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info12.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info12.ggParameter.sx = 0.8;
					me._ht_image_info12.ggParameter.sy = 0.8;
					me._ht_image_info12.style.transform=parameterToTransform(me._ht_image_info12.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info12);}, 550);
				}
				else {
					me._ht_image_info12.ggParameter.sx = 1;
					me._ht_image_info12.ggParameter.sy = 1;
					me._ht_image_info12.style.transform=parameterToTransform(me._ht_image_info12.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info12);}, 550);
				}
			}
		}
		me._ht_image_info12.logicBlock_scaling();
		me._ht_image_info12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info12.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info12.style.visibility=me._ht_image_info12.ggVisible?'inherit':'hidden';
					me._ht_image_info12.style.opacity=1;
				}
				else {
					me._ht_image_info12.style.visibility=me._ht_image_info12.ggVisible?'inherit':'hidden';
					me._ht_image_info12.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info12.logicBlock_alpha();
		me._ht_image_info12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info12.style.transition='transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info12.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info12.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info12.logicBlock_backgroundcolor();
		me._ht_image_info12.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info22=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #0000ff;';
		hs+='border-radius : 200px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_info22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info22.style.transition='transform 500ms ease 0ms';
				if (me._ht_image_info22.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info22.ggParameter.sx = 2.5;
					me._ht_image_info22.ggParameter.sy = 2.5;
					me._ht_image_info22.style.transform=parameterToTransform(me._ht_image_info22.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info22);}, 550);
				}
				else {
					me._ht_image_info22.ggParameter.sx = 1;
					me._ht_image_info22.ggParameter.sy = 1;
					me._ht_image_info22.style.transform=parameterToTransform(me._ht_image_info22.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_info22);}, 550);
				}
			}
		}
		me._ht_image_info22.logicBlock_scaling();
		me._ht_image_info22.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_info12.appendChild(me._ht_image_info22);
		me._ht_video_file.appendChild(me._ht_image_info12);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_11.style.transition='transform 0s';
				if (me._image_11.ggCurrentLogicStateScaling == 0) {
					me._image_11.ggParameter.sx = 1;
					me._image_11.ggParameter.sy = 1;
					me._image_11.style.transform=parameterToTransform(me._image_11.ggParameter);
					skin.updateSize(me._image_11);
				}
				else {
					me._image_11.ggParameter.sx = 1;
					me._image_11.ggParameter.sy = 1;
					me._image_11.style.transform=parameterToTransform(me._image_11.ggParameter);
					skin.updateSize(me._image_11);
				}
			}
		}
		me._image_11.logicBlock_scaling();
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._image_11);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_file.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_file.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_file.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
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
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_file.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_file.style.top='-47px';
				}
				else {
					me._tt_ht_video_file.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_file.style.top='24px';
				}
			}
		}
		me._tt_ht_video_file.logicBlock_position();
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible();
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		el=me._ht_video_file_customimage=document.createElement('div');
		els=me._ht_video_file_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_customimage.ggSubElement.setAttribute('alt', player._(me._ht_video_file_customimage.ggAltText));
			me._ht_video_file_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_customimage.ggText_untranslated = img;
			me._ht_video_file_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_customimage.ggSubElement.style.width = '0px';
			me._ht_video_file_customimage.ggSubElement.style.height = '0px';
			me._ht_video_file_customimage.ggSubElement.src='';
			me._ht_video_file_customimage.ggSubElement.src=me._ht_video_file_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_customimage.ggText != player._(me._ht_video_file_customimage.ggText_untranslated)) {
				me._ht_video_file_customimage.ggText = player._(me._ht_video_file_customimage.ggText_untranslated);
				me._ht_video_file_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_customimage.style.transition='';
				if (me._ht_video_file_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_customimage.style.visibility="hidden";
					me._ht_video_file_customimage.ggSubElement.src='';
					me._ht_video_file_customimage.ggVisible=false;
				}
				else {
					me._ht_video_file_customimage.style.visibility=(Number(me._ht_video_file_customimage.style.opacity)>0||!me._ht_video_file_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_file_customimage.ggSubElement.src=me._ht_video_file_customimage.ggText;
					me._ht_video_file_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_file_customimage.logicBlock_visible();
		me._ht_video_file_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_customimage.clientWidth;
			var parentHeight = me._ht_video_file_customimage.clientHeight;
			var img = me._ht_video_file_customimage__img;
			var aspectRatioDiv = me._ht_video_file_customimage.clientWidth / me._ht_video_file_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_customimage.ggScrollbars || currentWidth < me._ht_video_file_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_customimage.scrollLeft=currentWidth / 2 - me._ht_video_file_customimage.clientWidth / 2;
			}
			if (!me._ht_video_file_customimage.ggScrollbars || currentHeight < me._ht_video_file_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_customimage.scrollTop=currentHeight / 2 - me._ht_video_file_customimage.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_customimage);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_image_info12.logicBlock_scaling();
		me._ht_image_info12.logicBlock_alpha();
		me._ht_image_info12.logicBlock_backgroundcolor();
		me._ht_image_info22.logicBlock_scaling();
		me._image_11.logicBlock_scaling();
		me._tt_ht_video_file.logicBlock_position();
		me._tt_ht_video_file.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file.logicBlock_visible();
				me._tt_ht_video_file.logicBlock_visible();
				me._ht_video_file_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_image_info12.logicBlock_scaling();
				me._ht_image_info22.logicBlock_scaling();
				me._image_11.logicBlock_scaling();
				me._tt_ht_video_file.logicBlock_visible();
				me._ht_video_file_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_image_info12.logicBlock_scaling();
				me._ht_image_info22.logicBlock_scaling();
				me._image_11.logicBlock_scaling();
				me._tt_ht_video_file.logicBlock_position();
				me._tt_ht_video_file.logicBlock_visible();
				me._ht_video_file_customimage.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_video_file.logicBlock_position();
			};
			me.ggEvent_varchanged_Menu=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_Opcao2=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_VideoPadrao=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_var_hs=function() {
				me._ht_image_info12.logicBlock_scaling();
				me._ht_image_info22.logicBlock_scaling();
				me._image_11.logicBlock_scaling();
			};
			me.__div = me._ht_video_file;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('var_hs', player.getVariableValue('var_hs') + Number("1"));
				player.setVariableValue('var_hs', player.getVariableValue('var_hs') % Number("4"));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.tooltip { font-family: "Josefin Sans", sans-serif;; font-size: 14px; } .ggskin.info { font-family: "Orbitron", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};