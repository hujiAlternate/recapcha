$(document).ready(setGreaseMonkeyLink);

function setGreaseMonkeyLink()
{
	var li = "liOther";
	
	if ($.browser.msie)
	{
		li = "liIE";
	}
	if ($.browser.mozilla)
	{
		li = "liFirefox";
	}
	if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))
	{
		li = "liChrome";
	}
	
	$("#" + li).addClass("current_browser");
}
