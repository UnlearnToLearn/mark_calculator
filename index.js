
 $(document).ready(function(){
    $('.click').click(function(){
      $('.popup_box').css("display", "block");
      $('.form-group').css("filter","blur(3px)")
    });
    $('.btn1').click(function(){
      $('.popup_box').css("display", "none");
    });
    $('.btn2').click(function(){
      $('.popup_box').css("display", "none");
    });
  });
function c()
{
    var a = document.getElementById("tmark1").value;
    var b = document.getElementById("tmark2").value;
    var c = document.getElementById("tmark3").value;
    var d = document.getElementById("lmark").value;
    var e = document.getElementById("emark").value;
    var f = document.getElementById("mmark").value;
    var g = document.getElementById("pmark").value;
    var h = document.getElementById("cmark").value;
    var i = document.getElementById("bmark").value;
    var j = document.getElementById("twmark").value;
    sum = parseFloat(a) + parseFloat(b) + parseFloat(c);
    tenmark = sum/6 ;

    sums = parseFloat(d)+parseFloat(e)+parseFloat(f);

    emark = (sums*10)/45;

    sumstwo =  parseFloat(g)+parseFloat(h)+parseFloat(i);

    emarks = (sumstwo*10)/35 ;

    tot = (emark + emarks)/120;
    total = tot*20;
    totalmark = total + parseFloat(j) + tenmark ;
    
    perecent = (totalmark/100)* 600 ;
   
    document.getElementById("per").innerHTML = "your percentage is "+totalmark+ "%" ;
    document.getElementById("ma").innerHTML = "your mark out of 600 is "+perecent ;
    
}