
  function formatSearch()
  {
	var strSearch = $('.search_field').val().toLowerCase();
  if(strSearch == "")
  strSearch = $('.search_spfield').val().toLowerCase();
	strSearch = strSearch.replace("/", "-");
	strSearch = strSearch.replace(/ /g, "-");
	window.location = '//www.slideserve.com/search/presentations/' + encodeURIComponent(strSearch);
  }

  $(document).ready(function () {
	$('.search_field , .search_spfield').keydown(function (event) {
  if (event.keyCode == 13) {
	formatSearch();
  }
	});
  $('#usearch').keydown(function (event) {
  if (event.keyCode == 13) {
    formatSearchuser();
  }
  });
  });

  function formatSearchuser()
  {
    var strSearch = document.getElementById('usearch').value;
    strSearch = strSearch.replace("/", "-");
    strSearch = strSearch.replace(/ /g, "-");
    window.location = '/user/search/' + encodeURIComponent(strSearch);
  }

  function upgreadetoPro()
  {
    $.get('/dialogs/login.php?action=upgrade', function(data){
      $('body').prepend(data);
    });
  }
  function followuser(uid,uname,info,follow)
  {
        $.ajax({
             type: "get",
             url: '/actions/follow.php?uid='+uid+'&username='+uname+'&info='+info+'&follow='+follow,
             success: function(data){
                var dataObj = JSON.parse(data);
                if(dataObj.Action == 'Login')
                {
                  //$('body').append(dataObj.Action);
                  $.get('/dialogs/login.php?action=follow&uid='+uid+'&username='+uname+'&info='+info+'&follow='+follow, function(data){
                    $('body').prepend(data);
                  });
                }
                else if(dataObj.error != '')
                  $('.error').html(dataObj.error);
                else
                {
                  $('.success').html(dataObj.Message);
                  location.reload(true);
                }
             }
       });
    };

    function loadProfileTab(ldflg,start,uid,uname)
      {
          $('#loadmore').html('<i class="fa fa-spinner"></i>');
          $.ajax({
               type: "get",
               url: '/level2/uprofile_loadmore.php?flg='+ldflg+'&page='+start+'&UID='+uid+'&uname='+uname,
               success: function(html){
                   $('#loadmore').html(' Load More ...');
                   $('#'+ldflg).html(html);
                   window.scrollTo(0, 0);
                   //if(page >= 100)
                   //$('#loadmore').hide();
               }
         });
      };

      function tagMore(key,start)
      {
          $('#loadmore').html('<i class="fa fa-spinner"></i>');
          $.ajax({
               type: "get",
               url: '/level2/seach_bytag_loadmore.php?key='+key+'&page='+start,
               success: function(html){
                   $('.rslts').html(html);
                   window.scrollTo(0, 0);
               }
         });
      };

      function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
      }

      $(document).on("click", ".strtcpign" , function(){

        if( !validateEmail($('#email').val()))
        {
          alert('error');
          return;
        }
        if($('#username').val() =='')
        {
          alert('error');
          return;
        }
        var datastring = $("#attendeefrm").serialize();
        $.ajax({
          type: "POST",
          url: "/level2/campaign-url.php",
          data: datastring,
          success: function(data) {
            $('.splayer').attr('src',data);
            $('.login').remove();
          },
          error: function() {
            alert('error handling here');
          }
        });
      });
