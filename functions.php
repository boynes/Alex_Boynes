<?php

/**
* returns users IP address
*/
function getRealIpAddr() {
  if (!empty($_SERVER['HTTP_CLIENT_IP']))
  //check ip from share internet
  {
    $ip=$_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  //to check ip is pass from proxy
  {
    $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else
  {
    $ip=$_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}


// check if page is current (for nav)
function is_page_current($page){
	global $current_page;
	if(!empty($page) && !empty($current_page)){
		if($page == $current_page){
			echo 'class="active"';
		}
	}
}

// check if page is current simply returns true false
function is_page($page){
	global $current_page;
	if(!empty($page) && !empty($current_page)){
		if($page == $current_page){
			return true;
		}else{
			return false;
		}
	}
}

?>
