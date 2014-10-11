/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
//var procedure1Statement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
//function procedure1(param) {
//	return WL.Server.invokeSQLStatement({
//		preparedStatement : procedure1Statement,
//		parameters : [param]
//	});
//}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
var verifyUserStatement = WL.Server.createSQLStatement("SELECT * FROM `users` WHERE `email`=? AND `password`=?");
function verifyUser(user,pass) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : verifyUserStatement,
		parameters : [user,pass]
	});
	
}

var addUserStatement = WL.Server.createSQLStatement("INSERT INTO `wl`.`users` (`email`, `password`) VALUES ('new@worklight.yes', '212121212')");
function addUser(param){
	return WL.Server.invokeSQLStatement({
		preparedStatement : addUserStatement,
		parameters : [param]
	});
	
}
