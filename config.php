<?php
	$http = 'http://';
	$urllocal = '/vump_clinicaObesidade';
	$title = 'Clínica da Obesidade';

	#Retorna a página
	$URL = str_replace($urllocal, '', $_SERVER['REQUEST_URI']);
	$geturl = explode('/', $URL);
	$params = count($geturl);
	$pagina = explode('?', $geturl[1]);
	$pagina = reset($pagina);
	$fileSys = 'index.php';

	#Identifica se é home ou inner page
	$classOnBody = 'p-inner';
	
	switch ($pagina) {
		case 'componentslist':
			$file = 'page_components.php';
			$title_page = 'Components - '.$title;
			break;
		
		default :
			$file = 'page_home.php';
			$title_page = $title;
			$classOnBody = 'p-home';
			break;
	}

#Monta a base url
	$url_site = $http . $_SERVER['SERVER_NAME'] . $urllocal;
	$base_page = '<base href="' . $url_site . '/" />';
	include($fileSys);
?>