/*-----------------------------------------------------------------------------*/
//View page related events
$(document).ready(function()
{

  /*setTimeout(function(){
  var tag = document.createElement("script");
  tag.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58edb9b70f4a85f2";
  document.getElementsByTagName("head")[0].appendChild(tag);
  },4000);*/


	/*-----------------------------------------------------------------------------*/
  //For flash content
  /*var $flplayer = $('#flplayer');
  if ( $flplayer.length){
      setTimeout(show_fl,5000);
  }
  function show_fl(){
    var node = $("#doc_node").val();
    var vid = $("#doc_docId").val();
    if (node.length <= 0) {
      node = 'video';
      mpath = '//video.slideserve.com/' +vid;
    } else {
      mpath = '//' + node + '.slideserve.com/pres/' +vid;
    }

    $('#flplayer').html('<object name="ssplayer" type="application/x-shockwave-flash" id="flash" style="visibility: visible;" width="100%" height="100%" align="middle" wmode="opaque" data="https://' + node + '.slideserve.com/player_new_ads.swf" ><param name="movie" value="https://' + node + '.slideserve.com/player_new_ads.swf"/><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="FlashVars" value="auto_play=true&IfClosedAds=Close&NodeServer= ' + node + '&moviePath=' + mpath + '" /></object>');
    setTimeout(function(){$('#flash').width('99%')},1000);

  };*/
  /*-----------------------------------------------------------------------------*/ 


  /*-----------------------------------------------------------------------------*/
  //For next related page click
	$(function () {
	  var page = 1;
	  rlheight = 0;

      if($('#pro').val() == 1)
      moreByUser();

		  $('.pager li').click(function(){
		    if(rlheight == 0)
		    rlheight = $('#tab-right').height();

		    page = page + ($(this).index() - 1);
		    if(page <= 5 && page > 0){
		      if(page==1)
		        $('.pager li').addClass('disabled');
		      if($(this).index() == 2)
		        $('.pager li').removeClass('disabled');
		      if($(this).index() == 0)
		        $('.pager li:nth-child(3)').removeClass('disabled');

		      if(page > 4 )
		      $('.pager li:nth-child(3)').addClass('disabled');
		      $('.j-current-slide').html(page);
		      $('.relsec').append('<div style="height: '+rlheight+'px;" align="center"><i class="fa fa-spinner" style="display: table-cell;top:calc(57%);position: absolute;left: calc(45%);font-size: 42px;"></i></div>');
		      $.ajax({
		          type: "get",
		          url: '/view_related_result.php?key='+$('#related').attr('data-title')+'&page='+page+"&vid="+$('#doc_docId').val()+'&pro='+$('#pro').val(),
		          target: "#divResult",
              success: function (html) {
                $('.relsec').html(html);
                if($('#pro').val() == 1)
                    $(".m-1.p-0").css("min-height",($(".m-1.p-0").height()+20+$(".pro-box").height()-$(".m-0.p-0").height()-$(".m-1.p-0").height()));
              }
		      });
		  }
		});
	});
	/*-----------------------------------------------------------------------------*/

  /*-----------------------------------------------------------------------------*/
  // share through email
  $('#email_toemail').click(function() {
    $('#user_msg').show(50,"linear");
    $("#send_email").show(50,"linear");
    $("#email_email").show(50,"linear");
    $("#email_name").show(50,"linear");
  });
  $("#send_email").click(function() {
      var From = $("#email_name").val();
      var fromemail = $("#email_email").val();
      var toemail = $("#email_toemail").val();
      var uname = $("#vido_uname").val();
      var vid = $("#doc_docId").val();
      var msg = $("#user_msg").val();
      var dataString = 'fname='+From+"&femail="+fromemail+"&toemail="+toemail+"&uname="+uname+"&vid="+vid+'&umsg='+msg;
      $("#etrans_err").html('');
      if(toemail == '')
      $("#etrans_err").html("Please enter your friend's email");
      else if(From == '')
      $("#etrans_err").html("Please enter your name");
      else if(fromemail == '')
      $("#etrans_err").html("Please enter your email address");


      if($("#etrans_err").html() != '')
      {
      $("#etrans_err").show();
      $('#etrans_err').css({'z-index': '10'});
      return;
      }
      $('#send_email').val('Sending...');
      $(".mailloader").fadeIn();
      $.ajax({
      type: "get",
      url: '/actions/email_video.php?'+dataString,
      data: dataString,
      target:"#divResult",
      success: function(html){
        if(html == 'success')
        {
          $(".mailloader").fadeOut();
          //$("#etrans_msg").html("<font style='color:green;'>Email sent successfully! </font>");
          $("#mxsuccess").fadeIn();
          $('#send_email').attr("disabled", true);
          $('#send_email').css({'background': 'rgba(197, 197, 197, 0.27)'});
          //$(".umail").fadeOut();
          setTimeout(function(){$("#email_name").val('');
          $("#email_email").val('');$("#email_toemail").val('');$("#user_msg").val('');$(".umail").fadeIn();$("#mxsuccess").fadeOut();$('#send_email').val('Send Mail');
          $(".mailloader").fadeOut();$('#send_email').removeAttr("disabled");$('#send_email').css({'background': '#494949'});}, 10000);
        }
        else
        {
          $('#send_email').val('Send Mail');
          $("#etrans_err").html(html);
          $("#etrans_err").show();
          $('#etrans_err').css({'z-index': '10'});
          $(".mailloader").fadeOut();
        }
      }
      });
  });
	$("#send_email").click(function() {
    var From = $("#email_name").val();
    var fromemail = $("#email_email").val();
    var toemail = $("#email_toemail").val();
    var uname = $("#vido_uname").val();
    var vid = $("#doc_docId").val();
    var msg = $("#user_msg").val();
    var dataString = 'fname='+From+"&femail="+fromemail+"&toemail="+toemail+"&uname="+uname+"&vid="+vid+'&umsg='+msg;
    $("#etrans_msg").html('');
    if(From == '')
    $("#etrans_msg").html("<font style='color:red;'>Type your name</font>");
    else if(fromemail == '')
    $("#etrans_msg").html("Type your email address");
    else if(toemail == '')
    $("#etrans_msg").html("Type reciever's email id");
    if($("#etrans_msg").html() != '')
    {
      $("#etrans_msg").show();
      return;
    }
    $.ajax({
      type: "get",
      url: '/actions/email_video.php?'+dataString,
      data: dataString,
      target:"#divResult",
      success: function(html){
        if(html == 'success'){
          $("#etrans_msg").html("<font style='color:green;'>Email has been sent! </font>");
          $("#etrans_msg").show();
          window.setTimeout(function(){
            $("#e_transcript").fadeOut("slow");
            //Showe_trans(0);
          }, 1000);
        }
        else{
          $("#etrans_msg").html("<font style='color:red;'>"+html+" </font>");
          $("#etrans_msg").show();
        }
      }
    });
  });
  /*-----------------------------------------------------------------------------*/
  function removebg(){
    $('#social_icons').css('background-image',  'none');
  }


  if( !localStorage.getItem('closedsuggestion') )
  { var time = Date.now();
    /*$("#suggestion-box").load("/free-templateids.php?"+time);*/
    $("#suggestion-box").slideToggle("slide");
  }


  $('#showreport').click(function(){
    $.get('/level2/report.php?link='+$('#link').val(), function(data){
      $('.rptfrm').html(data);
    });
  });

});
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
//General functions
function scrollToElm(elmId){
  var elm= document.getElementById(elmId);
  window.scrollTo(elm.offsetLeft,elm.offsetTop);
};

function scrollToDownload(){
  var elm= document.getElementById('Download_ppt');
  //window.scrollTo(elm.offsetLeft,elm.offsetTop);
  window.scrollTo(elm.offsetLeft,elm.offsetTop+$('.player-row').height()+110);

  $('#suggestion').hide();
  $('#download').css('display', 'inline');
  //document.getElementById('suggestion').style.display = "none";
  //document.getElementById('download').style.display = "inline";
  //document.getElementById('related').style.height = '600px';
  //$('#related').css({'overflow-y':'scroll','display':'inline-block'});
  if($( ".rldads" ).height() == 0){
    $( ".rldads" ).height('360px');
    $( ".rldads" ).html('<iframe src="/re-ads-download.php" height="360px;" width="336px" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
  }
};

function showpop(id){
  if(LeadPosition == '-2' && LeadShowed != 'submitted')
  {
    $('#fetch').html(LeadContent);return;
  }
  $.ajax({
        type: "POST",
        //url: 'https://'+subdom+'.slideserve.com/g-captcha.php?vid=' + id,
        url:'/actions/g-captcha.php?vid=' + id,
        target: "#divResult",
        success: function (html) {
        	$('#fetch').html(html);
		}
	});
};



function showdownload(id)
{

  $.ajax({
        type: "POST",
        url: '/dialogs/download.php?docId=' + id,
        target: "#divResult",
        success: function (html) {
          $('.ss-popup').remove();
        	$('body').prepend(html);

          if(LeadPosition == '-2' && LeadShowed != 'submitted')
          {
            $('.popup-content').html(LeadContent);
            $('.popup-content').height('350px');
            return;
          }
		}
	});
};

/*-----------------------------------------------------------------------------*/
//To get more presentations by user
function moreByUser(){

    $("#byusersect").html("<div align=\"center\" style=\"margin:50px auto\"><img class=\"moduleFeaturedThumb\" src=\"/image/statload.gif\" /></div>");
    $.ajax({
          type: "get",
          //url: 'https://'+subdom+'.slideserve.com/more_user.php?uid=' + uid,
          url: '/view_related_result.php?userId='+$("#doc_userId").val()+"&docId="+$('#doc_docId').val()+'&pro='+$('#pro').val(),
          target: "#divResult",
          success: function (html) {
          $("#byusersect").html(html);
          if($('#pro').val() == 1)
            $(".m-1.p-0").css("min-height",($(".m-1.p-0").height()+20+$(".pro-box").height()-$(".m-0.p-0").height()-$(".m-1.p-0").height()));
        }
    });

};
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
//To get more presentations by user
function moreTs(n,guid){
  $( "#moreTs-tbn" ).remove();
  $.ajax({
    type:"get",
    url:'/custom-cache/'+n+'/'+guid+'-trScriptMore.txt',
    success: function (html) {
        $("#tscript").append(html);
      }

  });

};
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
function reportThis(link,docId){
  $('#reportThisBtn').hide();
  $.ajax({
    type: "get",
    url: '/actions/report.php?link='+link+'&docId='+docId,
    data: null,      
    success: function(dataIn){
      $("#reportThisContainer").html(dataIn);        
    }
  });
}
/*-----------------------------------------------------------------------------*/
