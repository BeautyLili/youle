<?php
	$username = $_POST["username"];
	$password = $_POST["password"];

	$connection = mysql_connect("localhost", "root", "");
	mysql_select_db("users",$connection);

	// SQL 语句
	$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
	// 发送 SQL 语句执行
	$result = mysql_query($sql, $connection);
	// 得到查询结果集中的行
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	if (!$row) {
		echo '{"status":1,"msg":"用户名或密码错误"}';
	} else {
		echo '{"status":4,"msg":"登录成功<br>"}';
		// echo json_encode($row);
	}

	mysql_close($connection);
?>