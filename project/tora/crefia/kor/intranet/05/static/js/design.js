$(function($){
	$("input[type=text], input[type=password], textarea").focus(function(){ //�Է¹ڽ� ��Ŀ����
		$(this).addClass("active");
	});
	$("input[type=text], input[type=password], textarea").blur(function(){ //�Է¹ڽ� �ƿ���
		$(this).removeClass("active");
	});
	//gnb submenu
	$("#gnb a").hover( function() { $("#header .submenu").show(); } );
	$("#header").mouseleave( function() { $("#header .submenu").hide(); } );
	//quickmenu allmenu
	$("nav.quick .totalmenu-ctl").click(function() {
		$("#footer").toggleClass("wide");
		$("nav.quick .dashboard-ctl").removeClass("active");
		$(".dashbdmenu").hide();
		$(this).toggleClass("active");
		$(".totalmenu").toggle();
		return false;
	});
	//dashboard
	$("nav.quick .dashboard-ctl").click(function() {
		$("nav.quick .totalmenu-ctl").removeClass("active");
		$(".totalmenu").hide();
		$(this).toggleClass("active");
		$(".dashbdmenu").toggle();
		return false;
	});
	//snb
	var menu_v = $('.snb');
	var sItem = menu_v.find('>menu>li');
	$(document).ready(function(){ //����޴������� li ������ ǥ��
		sItem.has(">ul").addClass("dep");
	});
	// mw hide window
	$(document).keydown(function(event){
		if(event.keyCode != 27) return true;
		if ($('.mw').show()) {
			$('.mw').hide();
		}
		return false;
	});
	$('.mw').find('>.bg').mousedown(function(event){
		$('.mw').hide();
		return false;
	});
	$('.mw .btCls').click(function(){
		$('.mw').hide();
		return false;
	});
	//input label hide
	var i_text = $('.item>label').next('.i_text');
	$('.item>label').css('position','absolute');
		i_text
		.focus(function(){
			$(this).prev('label').css('visibility','hidden');
		})
	.blur(function(){
		if($(this).val() == ''){
			$(this).prev('label').css('visibility','visible');
		} else {
			$(this).prev('label').css('visibility','hidden');
		}
	})
	.change(function(){
		if($(this).val() == ''){
			$(this).prev('label').css('visibility','visible');
		} else {
			$(this).prev('label').css('visibility','hidden');
		}
	})
	.blur();
});
