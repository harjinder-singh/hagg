function validateForm(frm){for(cnt=0;cnt<frm.elements.length;cnt++)if(ctl=frm.elements[cnt],value=trim(frm.elements[cnt].value),type=frm.elements[cnt].type.toUpperCase(),title=frm.elements[cnt].title,req=frm.elements[cnt].lang,""!=req&&null!=req&&"0"!=req){if(req=req.toUpperCase(),"TEXT"==type||"TEXTAREA"==type){if(-1!=req.indexOf("MUST")){if(""==value||null==value)return alert('Please enter "'+title+'"'),ctl.focus(),!1;req=req.replace("MUST","")}if(-1!=req.indexOf("INT")){if(isNaN(value))return alert('Please enter numeric values for "'+title+'"'),ctl.focus(),!1;if(-1!=value.indexOf("."))return alert('Please enter numeric values for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("INT",""),-1!=req.indexOf("+")&&parseInt(value)<=0||-1!=value.indexOf("."))return alert('Please enter positive numerics for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("+",""),-1!=req.indexOf("-")&&parseInt(value)>=0)return alert('Please enter negative numerics for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("-",""),-1!=req.indexOf("<=")&&parseInt(value)>parseInt(req.substr(req.indexOf("<=")+2,req.length-req.indexOf("<="))))return alert("Please enter numerics <= "+req.substr(req.indexOf("<=")+2,req.length-req.indexOf("<="))+' for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("<=",""),-1!=req.indexOf(">=")&&parseInt(value)<parseInt(req.substr(req.indexOf(">=")+2,req.length-req.indexOf(">="))))return alert("Please enter numerics >= "+req.substr(req.indexOf(">=")+2,req.length-req.indexOf(">="))+' for "'+title+'"'),ctl.focus(),!1;req=req.replace(">=","");continue}if(-1!=req.indexOf("DBL")){if(isNaN(value))return alert('Please enter numeric values for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("DBL",""),-1!=req.indexOf("+")&&parseFloat(value)<=0)return alert('Please enter positive numerics for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("+",""),-1!=req.indexOf("-")&&parseFloat(value)>=0)return alert('Please enter negative numerics for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("-",""),-1!=req.indexOf("<=")&&parseFloat(value)>parseFloat(req.substr(req.indexOf("<=")+2,req.length-req.indexOf("<="))))return alert("Please enter numerics <= "+req.substr(req.indexOf("<=")+2,req.length-req.indexOf("<="))+' for "'+title+'"'),ctl.focus(),!1;if(req=req.replace("<=",""),-1!=req.indexOf(">=")&&parseFloat(value)<parseFloat(req.substr(req.indexOf(">=")+2,req.length-req.indexOf(">="))))return alert("Please enter numerics >= "+req.substr(req.indexOf(">=")+2,req.length-req.indexOf(">="))+' for "'+title+'"'),ctl.focus(),!1;req=req.replace(">=","");continue}if(-1!=req.indexOf("LEN")){if(-1!=req.indexOf("LEN=")&&value.length!=parseInt(req.substr(req.indexOf("LEN=")+4))&&0!=value.length)return alert("Please enter "+req.substr(req.indexOf("LEN=")+4)+" characters for "+title),ctl.focus(),!1;if(-1!=req.indexOf("LEN<")&&!(value.length<=parseInt(req.substr(req.indexOf("LEN<")+4))))return alert("Please enter atmost "+req.substr(req.indexOf("LEN<")+4)+" characters for "+title),ctl.focus(),!1;if(-1!=req.indexOf("LEN>")&&!(value.length>=parseInt(req.substr(req.indexOf("LEN>")+4))))return check=req.substr(0,req.indexOf("|")).length,0!=check?alert("Please enter atleast "+req.substr(req.indexOf("LEN>")+4,check-4)+" characters for "+title):alert("Please enter atleast "+req.substr(req.indexOf("LEN>")+4)+" characters for "+title),ctl.focus(),!1}if(-1!=req.indexOf("USERNAME")){var re=/^[A-Za-z]\w{3,}$/;if(!re.test(value))return alert('Please choose a correct "'+title+'".'),ctl.focus(),!1}if(-1!=req.indexOf("AGE18+")){var string=value,separator="/",stringArray=string.split(separator);if(mm=stringArray[1],dd=stringArray[0],yy=stringArray[2],alert(mm+" "+dd+" "+yy),thedate=new Date,mm2=thedate.getMonth()+1,dd2=thedate.getDate(),yy2=thedate.getYear(),yy2<100&&(yy2+=1900),yourage=yy2-yy,mm2<mm&&(yourage-=1),mm2==mm&&dd2<dd&&(yourage-=1),agestring=yourage+" ",parseInt(agestring)<18)return alert("You should be 18+ to fill this form."),ctl.focus(),!1}if(-1!=req.indexOf("DATE")&&""!=value){if(!isDate(value))return alert('Please enter valid date for "'+title+'". [Format :mm/dd/yyyy]'),ctl.focus(),!1;if(-1!=req.indexOf("FUTURE")){var dt=new Date,dtVal=new Date(value);if(dt>dtVal)return alert('Please enter a future date for "'+title+'"'),ctl.focus(),!1;req=req.replace("FUTURE","")}}if(-1!=req.indexOf("EMAIL")&&""!=value&&!isValidEmailStrict(value))return alert("Please enter valid "+title),ctl.focus(),!1;if(-1!=req.indexOf("COMP")&&""!=value){req=req.replace("MUST",""),req=req.replace("COMP","");var valemailc=trim(eval("frm."+req.toLowerCase()+".value"));if(valemailc!=value)return alert("Email Address Mismatched"),!1}}if("PASSWORD"==type){if(""==value||null==value)return alert('Please enter "'+title+'"'),ctl.focus(),!1;if(-1==req.indexOf("COMP")&&value.length<=3)return alert('Please enter "'+title+'" more than 4 characters.'),ctl.focus(),!1;var re=/^[A-Za-z]\w{3,}$/;if(!re.test(value))return alert("Please choose a correct password. Must not start with numeric characters."),ctl.focus(),!1;if(-1!=req.indexOf("COMP")&&""!=value){req=req.replace("MUST",""),req=req.replace("COMP","");var valpwdc=trim(eval("frm."+req.toLowerCase()+".value"));if(valpwdc!=value)return alert("Password Mismatched"),ctl.focus(),!1;var re=/^[A-Za-z]\w{3,}/;if(!re.test(value))return alert("not valid password"),ctl.focus(),!1}}if("CHECKBOX"==type&&0==ctl.checked)return alert('Please check "'+title+'" to proceed.'),ctl.focus(),!1;if("SELECT"==ctl.tagName&&-1!=req.indexOf("MUST")){if(""==value||null==value)return alert('Please select "'+title+'" to proceed.'),ctl.focus(),!1;req=req.replace("MUST","")}if("FILE"==type&&-1!=req.indexOf("MUST")){if(""==value||null==value)return alert('Please enter "'+title+'"'),ctl.focus(),!1;req=req.replace("MUST","")}}return!0}function trim(e){if(" "!=e.charAt(0)&&" "!=e.charAt(e.length-1))return e;for(;" "==e.charAt(0);)e=""+e.substring(1,e.length);for(;" "==e.charAt(e.length-1);)e=""+e.substring(0,e.length-1);return e}function removeBadCharacters(e){return e.replace&&e.replace(/[<>\"\'%;\)\(&\+]/,""),e}function isAlphabetic(e){return isAlphabetic1(e,!0)}function isAlphabetic1(e,r){return!e.search||!(r&&-1!=e.search(/[^a-zA-Z\s]/)||!r&&-1!=e.search(/[^a-zA-Z]/))}function isNumeric(e){return isNumeric1(e,!1)}function isNumeric1(e,r){return!e.search||!(r&&-1!=e.search(/[^\d\s]/)||!r&&-1!=e.search(/\D/))}function trimAll(e){for(var r="",t=0;t<e.length;t++)" "!=e.charAt(t)&&(r+=e.charAt(t));return r}function isAlphanumeric(e){return isAlphanumeric1(e,!1)}function isAlphanumeric1(e,r){return!e.search||!(r&&-1!=e.search(/[^\w\s]/)||!r&&-1!=e.search(/\W/))}function isValidLength(e,r,t){return!(e.length<r||e.length>t)}function isValidEmail(e){if(e.indexOf("@")<3)return!1;var r=e.substring(0,e.indexOf("@")),t=e.substring(e.indexOf("@")+1);return-1==r.indexOf("(")&&-1==r.indexOf(")")&&-1==r.indexOf("<")&&-1==r.indexOf(">")&&-1==r.indexOf(",")&&-1==r.indexOf(";")&&-1==r.indexOf(":")&&-1==r.indexOf("\\")&&-1==r.indexOf('"')&&-1==r.indexOf("[")&&-1==r.indexOf("]")&&-1==r.indexOf(" ")&&(-1==t.indexOf("(")&&-1==t.indexOf(")")&&-1==t.indexOf("<")&&-1==t.indexOf(">")&&-1==t.indexOf(",")&&-1==t.indexOf(";")&&-1==t.indexOf(":")&&-1==t.indexOf("\\")&&-1==t.indexOf('"')&&-1==t.indexOf("[")&&-1==t.indexOf("]")&&-1==t.indexOf(" "))}function isValidEmailStrict(e){if(0==isValidEmail(e))return!1;var r=e.substring(e.indexOf("@")+1);return-1!=r.indexOf(".")&&(0!=r.indexOf(".")&&r.indexOf(".")!=r.length-1)}function isInteger(e){var r;for(r=0;r<e.length;r++){var t=e.charAt(r);if(t<"0"||t>"9")return!1}return!0}function stripCharsInBag(e,r){var t,a="";for(t=0;t<e.length;t++){var n=e.charAt(t);-1==r.indexOf(n)&&(a+=n)}return a}function daysInFebruary(e){return e%4!=0||e%100==0&&e%400!=0?28:29}function DaysArray(e){for(var r=1;r<=e;r++)this[r]=31,4!=r&&6!=r&&9!=r&&11!=r||(this[r]=30),2==r&&(this[r]=29);return this}function isDate(e){var r="/",t=1900,a=2100,n=DaysArray(12),i=e.indexOf(r),l=e.indexOf(r,i+1),s=e.substring(0,i),c=e.substring(i+1,l),o=e.substring(l+1);strYr=o,"0"==c.charAt(0)&&c.length>1&&(c=c.substring(1)),"0"==s.charAt(0)&&s.length>1&&(s=s.substring(1));for(var u=1;u<=3;u++)"0"==strYr.charAt(0)&&strYr.length>1&&(strYr=strYr.substring(1));return month=parseInt(s),day=parseInt(c),year=parseInt(strYr),-1!=i&&-1!=l&&(!(s.length<1||month<1||month>12)&&(!(c.length<1||day<1||day>31||2==month&&day>daysInFebruary(year)||day>n[month])&&(!(4!=o.length||0==year||year<t||year>a)&&(-1==e.indexOf(r,l+1)&&0!=isInteger(stripCharsInBag(e,r))))))}function checkAllCB(e,r){var t;for(t=0;t<e.length;t++)e[t].checked=r}function checkAllFRM(e,r){var t;for(t=0;t<e.elements.length;t++)"checkbox"==e.elements[t].type&&(e.elements[t].checked=r)}function isAllChecked(e,r){var t;for(t=0;t<e.length&&e[t].checked;t++);t==e.length?r.checked=!0:r.checked=!1}function isAnyCheckedFRM(e,r){for(var t=0;t<e.elements.length;t++)if("checkbox"==e.elements[t].type.toLowerCase()&&e.elements[t].checked)return!0;return alert(r),!1}function openFixedWindow(e,r){window.open(e,"newWindow","resizable=no,"+r)}function openImageWindow(e,r){window.open(e,"newImageWindow","resizable=yes,scrollbars=yes,"+r)}function clearCombo(e){for(var r=e.options.length;r>=0;--r)e.options[r]=null}function Highlight(e){var r=null;r=document.getElementById("tr_"+e.value).className,r="trListValue"==r?"trListValue1":"trListValue",document.getElementById("tr_"+e.value).className=r}function createIDs(e){var nm=e.name,cb=eval("document.frmMain."+e.name),t="",f="";if(cb.length){for(var i=0;i<cb.length;i++)cb[i].checked?t+="'"+cb[i].value+"',":f+="'"+cb[i].value+"',";t=t.substr(0,t.length-1),f=f.substr(0,f.length-1)}else cb.checked?t="'"+cb.value+"'":f="'"+cb.value+"'";document.getElementById(nm.replace("cb_","h_")).value=t+"|"+f}function doChangeWay(e,r){document.getElementById(e).value=r,document.frmMain.submit()}function doChangeSort(e){var r=document.frmMain.sort.value,t=document.frmMain.order.value.toLowerCase();t=r==e&&"asc"==t?"desc":"asc",document.location=document.frmMain.action+"?sort="+e+"&order="+t}function popUpWindow(e,r,t,a,n){popUpWin&&(popUpWin.closed||popUpWin.close()),popUpWin=open(e,"SendSms","width="+r+",height="+t+",top="+a+",left="+n)}function messageWindow(e,r){var t="300",a="125",n=screen.width/2-t/2,i=screen.height/2-a/2,l="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,width="+t+",height="+a+",left="+n+",top="+i+",screenX="+n+",screenY="+i,s=window.open("","msgWindow",l),c="<head><title>"+e+"</title></head>",o="<center>"+r+'<br><p><form><input type="button" value="   Done   " onClick="self.close()"></form>';s.document.write(c+o)}function formatTelNo(e){if(""!=e.value){var r=new String(e.value);if(r=r.substring(0,14),null==r.match(".[0-9]{3}.[0-9]{3}-[0-9]{4}")){if(null==r.match(".[0-9]{2}.[0-9]{3}-[0-9]{4}|.[0-9].[0-9]{3}-[0-9]{4}|.[0-9]{3}.[0-9]{2}-[0-9]{4}|.[0-9]{3}.[0-9]-[0-9]{4}")){var t,a=phoneChar="";for(t=0;t<r.length;t++)phoneChar=r.substr(t,1),isNaN(phoneChar)||" "==phoneChar||(a+=phoneChar);for(r="",t=0;t<a.length;t++)0==t&&(r+="("),3==t&&(r+=") "),6==t&&(r+="-"),r+=a.substr(t,1)}}else r="("+r.substring(1,4)+") "+r.substring(5,8)+"-"+r.substring(9,13);r!=e.value&&(e.value=r)}}function checkTelNo(e){""!=e.value&&null==e.value.match(".[0-9]{3}.[0-9]{3}-[0-9]{4}")&&null!=e.value.match("[0-9]{10}")&&formatTelNo(e)}function formatSSNNo(e){if(""!=e.value){var r=new String(e.value);if(r=r.substring(0,11),null==r.match("[0-9]{3}-[0-9]{2}-[0-9]{4}")&&null==r.match("[0-9]{2}-[0-9]{2}-[0-9]{4}|[0-9]-[0-9]{2}-[0-9]{4}|[0-9]{3}-[0-9]-[0-9]{4}")){var t,a=phoneChar="";for(t=0;t<r.length;t++)phoneChar=r.substr(t,1),isNaN(phoneChar)||" "==phoneChar||(a+=phoneChar);for(r="",t=0;t<a.length;t++)3==t&&(r+="-"),5==t&&(r+="-"),r+=a.substr(t,1)}r!=e.value&&(e.value=r)}}function checkSSNNo(e){""!=e.value&&null==e.value.match("[0-9]{3}-[0-9]{2}-[0-9]{4}")&&null!=e.value.match("[0-9]{9}")&&formatSSNNo(e)}function formatEINNo(e){if(""!=e.value){var r=new String(e.value);if(r=r.substring(0,10),null==r.match("[0-9]{2}-[0-9]{7}")&&null==r.match("[0-9]{2}-[0-9]{7}|[0-9]-[0-9]{7}")){var t,a=phoneChar="";for(t=0;t<r.length;t++)phoneChar=r.substr(t,1),isNaN(phoneChar)||" "==phoneChar||(a+=phoneChar);for(r="",t=0;t<a.length;t++)2==t&&(r+="-"),r+=a.substr(t,1)}r!=e.value&&(e.value=r)}}function checkEINNo(e){""!=e.value&&null==e.value.match("[0-9]{2}-[0-9]{7}")&&null!=e.value.match("[0-9]{9}")&&formatEINNo(e)}function drawTable(e,r,t){if(-1!=navigator.appName.indexOf("Microsoft")&&parseInt(navigator.appVersion)>=4){var a;a='<table id="box" name="'+e+'" cellpadding="0" cellspacing="0" border="0" width="'+r+'">',a+="<tr>",a+='<td bgcolor="#003366" width="0"><img src="/images/dot.gif" name="'+t+'1" height="5" width="0"></td>',a+='<td bgcolor="#8CAAE6" width="'+r+'"><img src="/images/dot.gif" name="'+t+'2" height="5" width="'+r+'"></td></tr>',a+="</table>",document.write(a)}else document.write(" ")}function funMycomment(a){obj=document.getElementById("box"),tblwidth=obj.width,maxlen=obj.name;var aa;aa=document.getElementById(a.id),x=maxlen-aa.value.length,x<0&&(aa.value=aa.value.substring(0,maxlen),x=0,alert("Maximum "+maxlen+" character used")),eval("document."+a.id+"1").width=tblwidth*(maxlen-x)/maxlen,eval("document."+a.id+"1").alt=maxlen-x+" chars used",eval("document."+a.id+"2").width=tblwidth*x/maxlen,eval("document."+a.id+"2").alt=x+" chars available"}var popUpWin=0,maxAdNo=1,adNo,myAd=new Array;myAd[0]='<a href="http://www.emisha.com/cat-Florenzia-Collection~66.html"><img src="/images/florenzia.gif"  border="0"></a>',myAd[1]='<a href="http://www.emisha.com/cat-Personalized-&-Engraved-Gifts~27.html"><img src="shop_images/mainimg.gif" width="453" height="167" border="0"></a>';var maxAdNoLarge=1,adNoLarge,myAdLarge=new Array;myAdLarge[0]='<a href="http://www.emisha.com/cat-Florenzia-Collection~66.html"><img src="/images/florenzia_large.gif"  border="0"></a>',myAdLarge[1]='<a href="http://www.emisha.com/cat-Bridal-Wear~2.html"><img src="shop_images/shop_inner.gif" border="0"></a>';var maxAdNoVenue=3,adNoVenue,myAdVenue=new Array;myAdVenue[0]='<img src="images/venue1.jpg" width="427" height="222">',myAdVenue[1]='<img src="images/venue2.jpg" width="427" height="222">',myAdVenue[2]='<img src="images/venue3.jpg" width="427" height="222">',myAdVenue[3]='<img src="images/venue4.jpg" width="427" height="222">';var maxAdNoCaterer=4,adNoCaterer,myAdCaterer=new Array;myAdCaterer[0]='<img src="images/catering2.jpg" width="427" height="222">',myAdCaterer[1]='<img src="images/catering1.jpg" width="427" height="222">',myAdCaterer[2]='<img src="images/catering3.jpg" width="427" height="222">',myAdCaterer[3]='<img src="images/catering4.jpg" width="427" height="222">',myAdCaterer[4]='<img src="images/catering5.jpg" width="427" height="222">';var maxAdNoPerformer=2,adNoPerformer,myAdPerformer=new Array;myAdPerformer[0]='<img src="images/ent1.jpg" width="427" height="222">',myAdPerformer[1]='<img src="images/ent2.jpg" width="427" height="222">',myAdPerformer[2]='<img src="images/ent3.jpg" width="427" height="222">';var maxAdNoLimo=2,adNoLimo,myAdLimo=new Array;myAdLimo[0]='<img src="images/limo1.jpg" width="427" height="222">',myAdLimo[1]='<img src="images/limo3.jpg" width="427" height="222">',myAdLimo[2]='<img src="images/limo2.jpg" width="427" height="222">';var maxAdNoHome=4,adNoHome,myAdHome=new Array;myAdHome[0]='<img src="images/home1.jpg" width="427" height="222">',myAdHome[1]='<img src="images/home2.jpg" width="427" height="222">',myAdHome[2]='<img src="images/home3.jpg" width="427" height="222">',myAdHome[3]='<img src="images/home4.jpg" width="427" height="222">',myAdHome[4]='<img src="images/home5.jpg" width="427" height="222">';