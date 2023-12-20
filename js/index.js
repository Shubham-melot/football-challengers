// Session storing  //
var jssor_1_options = {
  $AutoPlay: 1,
  $SlideWidth: 250,
  $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$,
  },
  $BulletNavigatorOptions: {
    $Class: $JssorBulletNavigator$,
    $SpacingX: 16,
    $SpacingY: 16,
  },
};
var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

function contentNext(val) {
  sessionStorage.setItem("SelectedItem", val);
  switch (val) {
    case "1": {
      contentChange(1);
      break;
    }
    case "2": {
      contentChange(2);
      break;
    }
    default: {
      contentChange(1);
    }
  }
}

function stringlengthUser() {
  let user_ent = parseInt($("#myGameChances").val());
  let maxlength = parseInt($("#chanceText").text());

  if (user_ent <= 99) {
    if (user_ent > maxlength) {
      $("#myGameChances").val(maxlength);
    } else {
    }
  } else if (user_ent >= 99 && maxlength >= user_ent) {
    $("#myGameChances").val(99);
  } else {
    // alert("stopp case")
    $("#myGameChances").val("");

    //document.getElementById(id).value='';
  }
}

$(document).ready(function () {
  contentChange(1);

  var today = new Date();
  var dd = today.getUTCDate();
  var month = today.getMonth();
  var m = month + 1;
});
// user agent check //
var UA = navigator.userAgent,
  iOS = !!UA.match(/iPad|iPhone/i);
if (iOS) {
  $(document).on("touchstart", function (e) {
    e.target.click();
  });
}
// get api function
var uid = 0;
var userId = 0;
var u_token = "";
var playtime;
var prevIndex;
var local = 1;
var weeklyIndex;
var isFlag = false;
var today = new Date();
var dd = today.getUTCDate();
//var host = "http://www.streamkarlive.live";
$(document).ready(function () {
  // uid=0;
  var uri = "params[]";
  teamIndex = 1;
  weeklyIndex = 1;
  // uid=502184262;
  // userId=502184262;
  // u_token= 'A11AA5140F6A2E461FBF72A51BDE9EED6A';
  //queryData();

  // console.log( host+'/api/activity/eventShow/getEventCommonRank?eventDesc=20200919_league&rankType=1&userType=1&pageIndex=1&pageCount=20&'+encodeURIComponent(uri)+'='+teamIndex+'&'+encodeURIComponent(uri)+'='+weeklyIndex);
  //openVoteSuccessDialog();
  if (local == 0) {
    try {
      // get user info
      window.phone.getUserInfo(function (userInfo) {
        // console.log(userInfo.userId)
        uid = userInfo.userId > 0 ? userInfo.userId : 0;
        userId = userInfo.userId > 0 ? userInfo.userId : 0;
        u_token = userInfo.token != "" ? userInfo.token : null;
        queryData();
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  } else {
    queryData();
  }
  getParams();
});

function queryData() {
  // local=1;
  webpageRec(local);

  getWinnerApi(local);
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getParams() {
  var open_app_link = getUrlParameter("open_app_link"); // "edit
  var query = window.location.search.substring(1);
  var iphone_link;
  var android_link;
  if (open_app_link !== "") {
    $("#tab_data_all").addClass("tab_data");
    if (open_app_link !== "") {
      $("#floatbtn").css("display", "block");
      $("#button_android").attr("href", open_app_link);
    } else {
      $("#floatbtn").css("display", "block");
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
      if (isAndroid) {
        $("#button_android").attr(
          "href",
          "https://play.google.com/store/apps/details?id=com.thankyo.hwgame"
        );
      } else if (isiOS) {
        $("#button_android").attr(
          "href",
          "https://itunes.apple.com/in/app/streamkar/id1182923162"
        );
      } else {
        // PC
        $("#button_android").attr("href", "http://www.streamkar.tv/");
      }
    }
  }
}
// check location //
$("#lngmainbtn").on("click", function () {
  if ($(".langs").is(":hidden")) {
    $(".langs").show();
  } else {
    $(".langs").hide();
  }
});
$(".langs>div>button").each(function (index) {
  $(this).on("click", function () {
    $("#lngtxt").html("<span>" + $(this).text().trim() + "</span>");
    contentNext($(this).attr("data-id"));
    $(".langs").hide();
  });
});
$(document).ready(function () {
  // document.getElementById("userVoteModal").style.display = "block";

  contentChange(1);

  var today = new Date();
  var dd = today.getUTCDate();
  var month = today.getMonth();
  var m = month + 1;
});
// Slider JS
var slideIndex = 1;
var timer = null;
// showSlides(slideIndex);
function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 4000);
}

// slide 2 JS function
var slideIndex1 = 1;
var timer1 = null;
// showSlides1(slideIndex1);
function plusSlides1(n) {
  clearTimeout(timer1);
  showSlides1((slideIndex1 += n));
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n == undefined) {
    n = ++slideIndex1;
  }
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active1";
  timer1 = setTimeout(showSlides1, 4000);
}

// new functions{}
function leagueChange(evt, typ) {
  if (typ == 1) {
    console.log("type1: ".typ);
    $("#potFan").show();
    $("#potOverall").hide();
    $("#weeklyRanking").show();
    $("#overallRanking").hide();
    $("#leaderboardHead").text("Weekly Ranking");
    $("#btn-super").addClass("active-league");
    $("#btn-overall").removeClass("active-league");
    $("#potoveralltxt").css("display", "none");
    $("#potweeklytxt").css("display", "block");
  } else if (typ == 2) {
    $("#potOverall").show();
    $("#potFan").hide();
    $("#weeklyRanking").hide();
    $("#overallRanking").show();
    $("#leaderboardHead").text("Overall Ranking");
    $("#btn-super").removeClass("active-league");
    $("#btn-overall").addClass("active-league");
    $("#potoveralltxt").css("display", "block");
    $("#potweeklytxt").css("display", "none");
    console.log("type2: ".typ);
  } else {
    $("#potweeklytxt").css("display", "block");

    $("#potFan").show();
    $("#potOverall").hide();
    $("#btn-super").addClass("active-league");
    $("#btn-overall").removeClass("active-league");
    $("#leaderboardHead").text("Weekly Ranking");
    $("#weeklyRanking").show();
    $("#overallRanking").hide();
    console.log("type3: ".typ);
  }
}

function rankingLeague(evt, typ) {
  if (typ == 1) {
    console.log("type1: ".typ);
    $("#leagueRec").show();
    $("#talentRec").hide();
    $("#btn-league-rec").addClass("active-league");
    $("#btn-overall-rec").removeClass("active-league");
  } else if (typ == 2) {
    $("#talentRec").show();
    $("#leagueRec").hide();
    $("#btn-league-rec").removeClass("active-league");
    $("#btn-overall-rec").addClass("active-league");
    console.log("type2: ".typ);
  } else {
    $("#leagueRec").show();
    $("#talentRec").hide();
    $("#btn-league-rec").addClass("active-league");
    $("#btn-overall-rec").removeClass("active-league");
    console.log("type3: ".typ);
  }
}

function rankingLeague1(evt, typ) {
  if (typ == 1) {
    console.log("type1: ".typ);
    $("#leagueRecWeekly").show();
    $("#talentRecWeekly").hide();
    $("#btn-league-rec-1").addClass("active-league");
    $("#btn-overall-rec-1").removeClass("active-league");
  } else if (typ == 2) {
    $("#talentRecWeekly").show();
    $("#leagueRecWeekly").hide();
    $("#btn-league-rec-1").removeClass("active-league");
    $("#btn-overall-rec-1").addClass("active-league");
    console.log("type2: ".typ);
  } else {
    $("#leagueRecWeekly").show();
    $("#talentRecWeekly").hide();
    $("#btn-league-rec-1").addClass("active-league");
    $("#btn-overall-rec-1").removeClass("active-league");
    console.log("type3: ".typ);
  }
}

function noChanceSelect(typ) {
  $("#chanceTextValue").val(typ);
  if (typ == 1) {
    $("#chanceText-1").addClass("btn-lucky-bg-active");
    $("#chanceText-10").removeClass("btn-lucky-bg-active");
    $("#chanceText-100").removeClass("btn-lucky-bg-active");
  } else if (typ == 10) {
    $("#chanceText-1").removeClass("btn-lucky-bg-active");
    $("#chanceText-10").addClass("btn-lucky-bg-active");
    $("#chanceText-100").removeClass("btn-lucky-bg-active");
  } else if (typ == 99) {
    $("#chanceText-1").removeClass("btn-lucky-bg-active");
    $("#chanceText-10").removeClass("btn-lucky-bg-active");
    $("#chanceText-100").addClass("btn-lucky-bg-active");
  }
}
function rankingLeagueWeekRank(typ) {
  if (typ == 3) {
    $("#talentRecWeeklyThis").show();
    $("#leagueRecWeeklyPrev").hide();
    $("#btn-league-rec-this").addClass("active");
    $("#btn-league-rec-pre").removeClass("active");
    console.log("type2: " + typ);
  } else {
    $("#talentRecWeeklyThis").hide();
    $("#leagueRecWeeklyPrev").show();
    $("#btn-league-rec-this").removeClass("active");
    $("#btn-league-rec-pre").addClass("active");
  }
}
function userRanking() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("userRankModal");
  modal.style.display = "block";
  var span = document.getElementById("closeuserRankModal");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("btn-how-to2").scrollIntoView();
    $(window).scrollTop($("#btn-how-to2").offset().top);
  };
}

function userPlayReward() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");

  var modal = document.getElementById("userPlayRewards");
  modal.style.display = "block";
  var span = document.getElementById("closePlayRew");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    $("#oopshot").show();

    modal.style.display = "none";
    $("#luckyImg").attr("src", "img/game/luckyimg.png");
    document.getElementById("luckyDrawView").scrollIntoView();
    $(window).scrollTop($("#luckyDrawView").offset().top);
  };
}

function openVoteSuccessDialog() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("userVoteModal");
  modal.style.display = "block";
  var span = document.getElementById("closeVoteModal");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("team6").scrollIntoView();
    $(window).scrollTop($("#team6").offset().top);
  };
}

function rewardChange(evt, typ) {
  if (typ == 1) {
    $("#UserRewards").show();
    $("#talentRewards").hide();
    $("#btn-rew-talent").removeClass("active-talen");
    $("#btn-rew-user").addClass("active-talen");
  } else if (typ == 2) {
    $("#UserRewards").hide();
    $("#talentRewards").show();
    $("#btn-rew-talent").addClass("active-talen");
    $("#btn-rew-user").removeClass("active-talen");
  } else {
    $("#UserRewards").show();
    $("#talentRewards").hide();
    $("#btn-rew-talent").removeClass("active-talen");
    $("#btn-rew-user").addClass("active-talen");
  }
}

// rewards event webpage
function openRewards() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("rewards");
  modal.style.display = "block";
  var span = document.getElementById("closeRewards");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("luckyDrawView").scrollIntoView();
    $(window).scrollTop($("#luckyDrawView").offset().top);
  };
}
// superfan dialog
function openSuperFan() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("superFanDialog");
  modal.style.display = "block";
  var span = document.getElementById("closesuperFanDialog");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("superFant").scrollIntoView();
    $(window).scrollTop($("#superFant").offset().top);
  };
}
// how to play
//
function openHowTo() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("howTo");
  modal.style.display = "block";
  var span = document.getElementById("closeHowTo");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("htBtn").scrollIntoView();
    $(window).scrollTop($("#htBtn").offset().top);
  };
}

// my rewards modal box
function openMyRewardsDialog() {
  // When the user clicks the button, open the modal
  $("#overlay").addClass("overlay");
  var modal = document.getElementById("myRewardsDialog");
  modal.style.display = "block";
  var span = document.getElementById("closemyRewardsDialog");
  span.onclick = function () {
    $("#overlay").removeClass("overlay");
    modal.style.display = "none";
    document.getElementById("teamTop1").scrollIntoView();
    $(window).scrollTop($("#teamTop1").offset().top);
  };
}

function teamSelection(typ) {
  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideWidth: 250,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16,
    },
  };
  // var    jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  //javascript:Pause();
  // $('#noVoteText').html(0);

  $("#teamSelectionVal").val(typ);
  $("#btnVoteMain").attr("disabled", false);
  $("#btnVoteMain").css("filter", "grayscale(0)");
  if (typ == 1) {
    jssor_1_options = { $AutoPlay: 0 };
    console.log("teaaaa");
    $("#team1").addClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 2) {
    $("#team1").removeClass("active-select");
    $("#team2").addClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 3) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").addClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 4) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").addClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 5) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").addClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 6) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").addClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 7) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").addClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 8) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").addClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").removeClass("active-select");
  } else if (typ == 9) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team10").removeClass("active-select");
    $("#team9").addClass("active-select");
  } else if (typ == 10) {
    $("#team1").removeClass("active-select");
    $("#team2").removeClass("active-select");
    $("#team3").removeClass("active-select");
    $("#team4").removeClass("active-select");
    $("#team5").removeClass("active-select");
    $("#team6").removeClass("active-select");
    $("#team7").removeClass("active-select");
    $("#team8").removeClass("active-select");
    $("#team9").removeClass("active-select");
    $("#team10").addClass("active-select");
  }
}

function voteCount(num) {
  var voteCount = $("#noVoteText").val();
  var totalVote = $("#voteText").text();
  voteCount = parseInt(voteCount, 10);
  totalVote = parseInt(totalVote, 10);
  // alert("Vote Count: " + voteCount + " totalVote " + totalVote )
  if (num == 1 && voteCount + 1 <= totalVote) {
    voteCount++;
    if (voteCount == totalVote) {
      $("plusVote").css("opacity", 0.5);
      $("#negVote").css("opacity", 1);
    } else {
      $("plusVote").css("opacity", 1);
      $("#negVote").css("opacity", 1);
    }
    $("#noVoteText").val(voteCount);
  } else if (num == 2 && voteCount - 1 >= 0) {
    voteCount--;
    if (voteCount == 0) {
      $("plusVote").css("opacity", 1);
      $("#negVote").css("opacity", 0.5);
    } else {
      $("plusVote").css("opacity", 1);
      $("#negVote").css("opacity", 1);
    }
    $("#noVoteText").val(voteCount);
  }
}

function rewardsChange(typ) {
  if (typ == 1) {
    $("#OverallBtn").addClass(" active-league");
    $("#weeklyBtn").removeClass(" active-league");
    $("#overallRewards").show();
    $("#weeklyRewards").hide();
  } else if (typ == 2) {
    $("#OverallBtn").removeClass(" active-league");
    $("#weeklyBtn").addClass(" active-league");
    $("#overallRewards").hide();
    $("#weeklyRewards").show();
  }
}

function rewardsChangeTalent(typ) {
  if (typ == 1) {
    $("#OverallBtnTalent").addClass(" active-league");
    $("#weeklyBtnTalent").removeClass(" active-league");
    $("#overallRewardsTalent").show();
    $("#weeklyRewardsTalent").hide();
  } else if (typ == 2) {
    $("#OverallBtnTalent").removeClass(" active-league");
    $("#weeklyBtnTalent").addClass(" active-league");
    $("#overallRewardsTalent").hide();
    $("#weeklyRewardsTalent").show();
  }
}

function seeMoreUser(typ) {
  if (typ == 1) {
    $("#seeLessUser").show();
    $("#seeMoreUser").hide();
    $("#userRecTable1").show();
  } else if (typ == 2) {
    $("#seeMoreUser").show();
    $("#seeLessUser").hide();
    $("#userRecTable1").hide();
  }
}

window.jssor_1_slider_init = function () {
  /*#region responsive code begin*/

  var MAX_WIDTH = 980;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 3);
    }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};

function hasDecimal(num) {
  console.log(num);
  return !!(num % 1);
}

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
  var keyCode = e.which ? e.which : e.keyCode;
  var ret =
    (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
  console.log("errrr");
  //document.getElementById("error").style.display = ret ? "none" : "inline";
  return ret;
}

function stringlength(minlength, maxlength) {
  var user_ent = parseInt($("#noVoteText").val());
  //console.log("hello "+(user_ent % 1));
  var maxlength = parseInt($("#voteText").text());
  console.log("maxlength" + maxlength);
  console.log("user_ent" + user_ent);
  console.log("user_ent" + typeof user_ent);
  console.log("maxlength" + typeof maxlength);
  if (user_ent > maxlength) {
    $("#noVoteText").val(maxlength);
  } else {
  }
}

$(document).ready(function () {
  $("[id^=noVoteText]").keypress(validateNumber);
});

function validateNumber(event) {
  var key = window.event ? event.keyCode : event.which;

  if (event.keyCode === 8 || event.keyCode === 46) {
    var user_ent = float2int($("#noVoteText").val());
    console.log("userId" + user_ent);
    var val = Math.round(user_ent);
    console.log("case 1" + Math.round(user_ent));
    $("#noVoteText").val(val);
    return true;
  } else if (key < 48 || key > 57) {
    console.log("case 2");
    return false;
    console.log("case 3");
  } else {
    return true;
    console.log("case 4");
  }
}

function convertToDot(name) {
  let divide = name.length / 2;

  name.length >= 4 ? (name = name.slice(0, divide) + "...") : (name = name);

  return name;
}

function weeklySeemore(id) {
  if (id == 1) {
    $("#talentRecTableWeeklyMore").show();
    $("#seeLessWeekly").show();
    $("#seemoreWeekly").hide();
  } else if (id == 2) {
    $("#talentRecTableWeeklyMore").hide();
    $("#seeLessWeekly").hide();
    $("#seemoreWeekly").show();
  } else if (id == 3) {
    $("#talentRecTableMore").show();
    $("#seemoreOverall").hide();
    $("#seeLessOverall").show();
  } else if (id == 4) {
    $("#talentRecTableMore").hide();
    $("#seeLessOverall").hide();
    $("#seemoreOverall").show();
  }
}

function rankingLeaguePrev(typ) {
  if (typ == 1) {
    console.log("type1: ".typ);
    $("#leagueRecWeeklyPreviousData").show();
    $("#talentRecWeeklyPreviousData").hide();
    $("#btn-league-rec-previous").addClass("active-league");
    $("#btn-overall-rec-previous").removeClass("active-league");
    console.log("type1: " + typ);
  } else if (typ == 2) {
    $("#leagueRecWeeklyPreviousData").hide();
    $("#talentRecWeeklyPreviousData").show();
    $("#btn-overall-rec-previous").addClass("active-league");
    $("#btn-league-rec-previous").removeClass("active-league");
    console.log("type2: " + typ);
  } else {
    $("#leagueRecWeeklyPreviousData").show();
    $("#talentRecWeeklyPreviousData").hide();
    $("#btn-league-rec-1").addClass("active-league");
    $("#btn-overall-rec-1").removeClass("active-league");
    console.log("type3: " + typ);
  }
}
