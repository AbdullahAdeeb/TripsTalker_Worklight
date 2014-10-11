
/* JavaScript content from js/main.js in folder common */
function onConnectSuccess(){
	console.log("connect successful");
}

function onConnectFailure(){
	console.log("connection fucked up");	
}

function mysqlSuccess(result){
	console.log("mysql sucess haha");
	if (result.invocationResult.resultSet.length == 1){
		$.mobile.pageContainer.pagecontainer("change", "#main", {});
		alert("Logged In");
		//go to next page
	}else{
		alert("wrong longin info!");
	}
	
//	WL.Logger.debug("mysql succceeeed haha");
}

function mysqlFailure(response){
	console.log("mysql failed mwahaha ");
	alert('Failed!');
//	WL.Logger.error("mysql failed wakwak");
}

function loginClick(email,pass){
	console.log("this is ur email:" + email);
	console.log("this is ur pass:" + pass);
	
	var invoData = {
			adapter : 'UsersDBAdapter',
			procedure : 'verifyUser',
			parameters : [email,pass]
	};
	
	var	options = {
			onSuccess : mysqlSuccess,
			onFailure : mysqlFailure
	};
	
	WL.Client.invokeProcedure(invoData, options);
	
	console.log('it has been invoked');
}
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	 WL.Client.connect({onSuccess: onConnectSuccess,onFailure: onConnectFailure});
	 console.log('calling login click method');
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}