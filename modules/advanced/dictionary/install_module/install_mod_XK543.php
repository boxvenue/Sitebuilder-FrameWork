<?php
include($staticvars['local_root'].'kernel/staticvars.php');
$linker=mysql_connect($db->host, $db->user, $db->password);
if (!$link):
   echo 'Could not connect to mysql';
   exit;
endif;
$result=mysql_select_db($db->name);
$result=mysql_query("select * from dictionary");
if (mysql_error()): // table not found
	$result=mysql_query("CREATE TABLE `dictionary` (
  `cod_dic` bigint(20) NOT NULL auto_increment,
  `termo` varchar(255) collate latin1_general_ci NOT NULL,
  `definicao` text collate latin1_general_ci NOT NULL,
  `active` varchar(2) collate latin1_general_ci NOT NULL default '?',
  `email` varchar(255) collate latin1_general_ci NOT NULL,
  `imagem` varchar(255) collate latin1_general_ci NOT NULL,
  PRIMARY KEY  (`cod_dic`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=1 ");
endif;
mysql_close($linker);
// create direcories needed
if (!is_dir($staticvars['upload'].'/dictionary')):
	mkdir($staticvars['upload'].'/dictionary', 0755, true);
endif;
if (!is_dir($staticvars['upload'].'/dictionary/images')):
	mkdir($staticvars['upload'].'/dictionary/images', 0755, true);
endif;
?>