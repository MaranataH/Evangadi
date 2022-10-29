$(function() {

	$("#loginBtn").click(function() {
	$('#login-error').html('');
	$('#loginBtn').html('<i class="fa fa-spinner"></i>');
	var uname = $("#name").val();
	var loginpassword      = $("#password").val();
	var securityToken = $("#securityToken").val();
	var dataString = 'username='+uname+'&password='+loginpassword+'&action=process&securityToken='+securityToken;

	$.ajax({
	type: "get",
	url: '/actions/get-login.php',
	data: dataString,
	target:"#divResult",
	success: function(resultStr){
		var loginError ="";
		try{
			var resultObj = JSON.parse(resultStr);
			if(resultObj.userId){
				window.location = '/login-redirect.php';	
			}
			else								
				loginError = resultObj.error;
			
		}
		catch(err) {
			loginError =err;
		}
		if(loginError != ''){
 				$('#login-error').html(loginError);
			    $('#login-error').show();
			    $('#loginBtn').html('Sign In');
		}
	}
	});
	return false;
	});
});
