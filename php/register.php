<?php
	$username=$_POST["username"];
	$password=$_POST["password"];

	$connection=mysql_connect("localhost","root","");
	mysql_select_db("users",$connection);
	$sql="SELECT * FROM users WHERE username='$username'";
	$result=mysql_query($sql);
	$row=mysql_fetch_array($result,MYSQL_ASSOC);
	
	if($row){
		echo '{"status":1,"msg":"用户名已经存在"}';
	}else{
		$sql="INSERT INTO users VALUES (NULL,'$username','$password')";
		$result=mysql_query($sql);
		if(!$result)
			die("error:".mysql_error());
		echo '{"status":"4","msg":"注册成功"}';
	}

	mysql_close($connection);

?>