var selectedFiles=new Array();var selectedDirs=new Array();var fileSrc='filelist.php';function resizeColumn(name1,name2){var elm1=document.getElementById(name1);var elm2=document.getElementById(name2);elm1.width=elm2.width;};function resizeTable(){var td_width=document.body.clientWidth-document.getElementById('selectCol3').width-document.getElementById('iconCol3').width-document.getElementById('fsizeCol3').width-document.getElementById('fmodCol3').width-document.getElementById('spacerCol3').width-20;document.getElementById('fnameCol2').width=td_width;document.getElementById('fnameCol3').width=td_width;};function init(isSearchAction){var isGecko=navigator.userAgent.indexOf('Gecko')!=-1;disabledTools=disabledTools.split(',');correctFileListDivScroll('filelist');setCommandEnabled('createdir',hasCreateFolderPermission);setCommandEnabled('createdoc',hasCreateDocPermission);setCommandEnabled('refresh',true);setCommandEnabled('upload',hasUploadPermission);setCommandEnabled('search',hasSearchPermission);setCommandEnabled('cut',false);setCommandEnabled('copy',false);setCommandEnabled('paste',hasPasteAccess);setCommandEnabled('delete',false);setCommandEnabled('unzip',false);setCommandEnabled('zip',false);setCommandEnabled('toggleall',true);setCommandEnabled('imagemanager',true);setCommandEnabled('help',true);fixImagesBug();if (errorMsg!="")alert(errorMsg);hideLoadingBar();};