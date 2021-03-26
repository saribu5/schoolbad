<script languge="JavaScript1.2">
/*
animated status bar testing: ancient code i found in my basement
may or may not work 
javascript 1.2
*/
timeid=5;
stcnt=11;
msg="testing";
wmsg=newArray(33);
wmsg[0]=msg;
blnk="";
for (i=1; 1<32; i++){
  b=blnk.substring(0,i);
  wmsg[i]="";
  for j=0; j<msg.length;j++) wmsg[i]=wmsg[i]+msg.charAt(j)+b;
}
function wiper(){
  if (stcnt>-1) str=wmsg[stcnt]; else str=wmsg[0];
  of (stcnt--<-40) stcnt=31;
  status=str;
  clearTimeout(timeID);
  timeID=setTimeout("wiper()",100);
}
//-->
</script>