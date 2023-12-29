var prod = 2;
// prod == 1 livve server
// prod == 2 test server
var host = prod == 1 ? "https://www.streamkar.net" : "http://test.streamkar.tv";
var default_img =
  '<img src="../common/img/kk_head_avatar_men.png" class="img img-circle my_img">';
var user_img;

var user_daily_data = [];

var gifterdata = [];

var winLucky = [];
var LuckyChance = [];
var rising_star_first = [];
var LuckyChanceRes = [];
var talent_data_val = [];
var LooteryRes = [];
var talents_points = [];
var LuckyChance = { TagCode: "00000000", userRemainChance: 0 };
var LooteryRes = {
  userRemainChance: 0,
  userLotteryResult: 2,
  TagCode: "00000000",
};
var rising_star_first = {
  rankingList: [
    {
      gender: 0,
      nickName: "rising Dataa",
      roomId: 502245363,
      userId: 502245363,
      actorLevel: 16,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!1280",
      userScore: 16924,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "❣️R j❣️нєєя❤️Rana ❣️",
      roomId: 550743199,
      userId: 550743199,
      actorLevel: 14,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!1280",
      userScore: 15941,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "Alisha🌋",
      roomId: 551491261,
      userId: 551491261,
      actorLevel: 12,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!1280",
      userScore: 15901,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "❣️รƭყℓσ̶❣️",
      roomId: 551302062,
      userId: 551302062,
      actorLevel: 17,
      richLevel: 8,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!1280",
      userScore: 15853,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 1,
      nickName: "DEaD MaN",
      roomId: 553307529,
      userId: 553307529,
      actorLevel: 14,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!1280",
      userScore: 14760,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: '"Mein Marvi Ki😍😜"',
      roomId: 552754236,
      userId: 552754236,
      actorLevel: 14,
      richLevel: 5,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!1280",
      userScore: 13493,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "😘Priya🎤singer🎶",
      roomId: 551138791,
      userId: 551138791,
      actorLevel: 12,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!1280",
      userScore: 7706,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 1,
      nickName: "⚔️ ცųɬɬ🔛ʂŋı℘ɛr ⚔️",
      roomId: 551575263,
      userId: 551575263,
      actorLevel: 8,
      richLevel: 6,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!1280",
      userScore: 6450,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "😍Vj😍Abro😍Syeda😍",
      roomId: 551153683,
      userId: 551153683,
      actorLevel: 14,
      richLevel: 6,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!1280",
      userScore: 6022,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "Sᴀᴅᴀғ💕The💕Queen",
      roomId: 551373401,
      userId: 551373401,
      actorLevel: 17,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!1280",
      userScore: 5969,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
  ],
  TagCode: "00000000",
};
var user_daily_data = {
  rankingList: [
    {
      gender: 0,
      nickName: "mega star Dataa",
      roomId: 502245363,
      userId: 502245363,
      actorLevel: 16,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/502245363_0_1540574205204.jpg!1280",
      userScore: 16924,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "❣️R j❣️нєєя❤️Rana ❣️",
      roomId: 550743199,
      userId: 550743199,
      actorLevel: 14,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/550743199_0_1550090938679.jpg!1280",
      userScore: 15941,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "Alisha🌋",
      roomId: 551491261,
      userId: 551491261,
      actorLevel: 12,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551491261_0_1551655951256.jpg!1280",
      userScore: 15901,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "❣️รƭყℓσ̶❣️",
      roomId: 551302062,
      userId: 551302062,
      actorLevel: 17,
      richLevel: 8,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551302062_0_1531434096986.jpg!1280",
      userScore: 15853,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 1,
      nickName: "DEaD MaN",
      roomId: 553307529,
      userId: 553307529,
      actorLevel: 14,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/553307529_0_1549029668493.jpg!1280",
      userScore: 14760,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: '"Mein Marvi Ki😍😜"',
      roomId: 552754236,
      userId: 552754236,
      actorLevel: 14,
      richLevel: 5,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/552754236_0_1550250294172.jpg!1280",
      userScore: 13493,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "😘Priya🎤singer🎶",
      roomId: 551138791,
      userId: 551138791,
      actorLevel: 12,
      richLevel: 3,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551138791_0_1551422082571.jpg!1280",
      userScore: 7706,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 1,
      nickName: "⚔️ ცųɬɬ🔛ʂŋı℘ɛr ⚔️",
      roomId: 551575263,
      userId: 551575263,
      actorLevel: 8,
      richLevel: 6,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551575263_0_1549993106380.jpg!1280",
      userScore: 6450,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "😍Vj😍Abro😍Syeda😍",
      roomId: 551153683,
      userId: 551153683,
      actorLevel: 14,
      richLevel: 6,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551153683_0_1535543829548.jpg!1280",
      userScore: 6022,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
    {
      gender: 0,
      nickName: "Sᴀᴅᴀғ💕The💕Queen",
      roomId: 551373401,
      userId: 551373401,
      actorLevel: 17,
      richLevel: 7,
      starLevel: 0,
      portrait: "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg",
      portrait_path_48:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!256",
      portrait_path_128:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!128",
      portrait_path_256:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!256",
      portrait_path_1280:
        "http://kkimg.kktv9.com/image/551373401_0_1551280003429.jpg!1280",
      userScore: 5969,
      liveType: 0,
      screenType: 1,
      roomSource: 1,
    },
  ],
  TagCode: "00000000",
};

var gifterdata = [
  {
    userId: 502184268,
    userScore: 208607000,
    nickName: "Jitendra Mahid",
    gender: 1,
    userLevel: 55,
    actorLevel: 53,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184268_0_1556006458069.jpg!128",
  },
  {
    userId: 555000040,
    userScore: 14200000,
    nickName: "test000040",
    gender: 1,
    userLevel: 15,
    actorLevel: 26,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000040_0_1587180572078.jpeg!128",
  },
  {
    userId: 502184264,
    userScore: 10000000,
    nickName: "Kamran Za",
    gender: 1,
    userLevel: 80,
    actorLevel: 0,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128",
  },
  {
    userId: 550495201,
    userScore: 2475000,
    nickName: "Tycoon142930",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 1999000,
    nickName: "fasdfsdfasf",
    gender: 0,
    userLevel: 14,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 502184263,
    userScore: 1000000,
    nickName: "Asif Gu263ab",
    gender: 1,
    userLevel: 80,
    actorLevel: 23,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 502184267,
    userScore: 675000,
    nickName: "Ayaz Alam",
    gender: 1,
    userLevel: 80,
    actorLevel: 43,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000001,
    userScore: 225000,
    nickName: "我是555000",
    gender: 1,
    userLevel: 14,
    actorLevel: 11,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000001_0_1552974758939.png!128",
  },
];
// new Api details
var recDetails = {
  errorCode: 0,
  msg: "success",
  data: {
    userPoints: 7150000,
    userVotes: 0,
    nowWeekBeanPot: 0,
    lastWeekBeanPot: 0,
    totalBeanPot: 648000,
  },
};
function webpageRec(local) {
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url: host + "/api/activity/football/getUserEventInfo?userId=" + userId,
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            if (evt.lengthComputable) {
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {},
      complete: function () {},
      success: function (data) {
        console.log(data);
        webpageRecPopulate(data);
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    webpageRecPopulate(recDetails);
  }
}
function webpageRecPopulate(recDetails) {
  // alert(JSON.stringify(recDetails));

  if (recDetails.errorCode == 0) {
    $("#weeklyIndex").val(recDetails.data.weekIndex);
    weeklyIndex = recDetails.data.weekIndex;
    prevIndex = recDetails.data.weekIndex - 1;
    get_talent_recWeekly(local);
    get_talent_recWeeklyPrevious(local);
    if (isFlag == false) {
      setTimeout(function () {
        getTeamRankWeekly(local);
        getTeamRank(local);
        get_talent_rec(local);
        getTeamWeeklyPrevious(local);

        getTeamWheelWeekly(local);
      }, 700);
      isFlag = true;
    }
    if (recDetails.data.gamePoints != undefined) {
      $("#chanceText").text(Math.floor(recDetails.data.gamePoints / 25000));
    }
    if (recDetails.data.voteTickets != undefined) {
      $("#voteText").text(recDetails.data.voteTickets);
    }

    if (recDetails.data.totalBeansPot != undefined) {
      $("#potOverallValue").html(recDetails.data.totalBeansPot);
      // $('#potoveralltxt').show();
      // $('#potweeklytxt').hide();
    }
    if (recDetails.data.weekIndex != undefined) {
      $("#weeklyIndex").val(recDetails.data.weekIndex);
    }
    if (recDetails.data.weekBeanPotList != undefined) {
      for (var i = 0; i < recDetails.data.weekBeanPotList.length; i++) {
        console.log(
          "tgis week inde" + recDetails.data.weekBeanPotList[i].weekIndex
        );

        console.log(
          "previous week index" +
            parseInt(recDetails.data.weekBeanPotList[i].weekIndex - 1)
        );

        if (
          recDetails.data.weekBeanPotList[i].weekIndex ==
          recDetails.data.weekIndex
        ) {
          $("#potWeeklyValue").html(
            recDetails.data.weekBeanPotList[i].weekBeanPot
          );
          $("#potWeeklyValuePrevious").html(
            recDetails.data.weekBeanPotList[i - 1].weekBeanPot
          );
          //      $('#potoveralltxt').hide();
          // $('#potweeklytxt').show();
        }

        if (
          parseInt(recDetails.data.weekBeanPotList[i].weekIndex) - 1 ==
          parseInt(recDetails.data.weekIndex) - 1
        ) {
          $("#potWeeklyValuePrevious").html(
            recDetails.data.weekBeanPotList[i - 1].weekBeanPot
          );
          //      $('#potoveralltxt').hide();
          // $('#potweeklytxt').show();
        }
      }
    }

    // if(recDetails.data.nowWeekBeanPot != undefined){
    //   $('#potWeeklyValue').html(recDetails.data.nowWeekBeanPot.toLocaleString());
    // }

    // if (recDetails.data.myRewardList != undefined) {
    //   if(recDetails.data.myRewardList.length == 1) {
    //     $('#myRewards').removeClass('col-two');
    //     $('#myRewards').removeClass('col-three');
    //     $('#myRewards').addClass('col-one');
    //   }else if(recDetails.data.myRewardList.length == 2) {
    //     $('#myRewards').removeClass('col-three');
    //     $('#myRewards').removeClass('col-one');
    //     $('#myRewards').addClass('col-two');
    //   }else if(recDetails.data.myRewardList.length >= 3) {
    //     $('#myRewards').addClass('col-three');
    //     $('#myRewards').removeClass('col-two');
    //     $('#myRewards').removeClass('col-one');
    //   }
    // $("#myRewards").html("");$("#myRewards").append("");
    //   if(recDetails.data.myRewardList.length>0){
    //   for(var i=0; i<recDetails.data.myRewardList.length; i++ ){
    //     var rewardCount = recDetails.data.myRewardList[i].rewardCount;
    //     var rewardId = recDetails.data.myRewardList[i].rewardId;
    //     var rewardDesc= '';
    //     var additionalDesc = '';
    //     if(rewardId == 0 ){
    //       rewardDesc = 'Beans'
    //       additionalDesc = '';
    //     }else if(rewardId == 40001361 ||  rewardId == 41002687){
    //       additionalDesc = ' ';
    //       rewardDesc = 'Lantern';
    //     }else if(rewardId == 30   || rewardId == 85){
    //       rewardDesc = 'theme';
    //       additionalDesc = ' Days';
    //     }else if(rewardId == 40001360   || rewardId == 41002653){
    //       rewardDesc = 'Star'
    //     }else if(rewardId == 100001){
    //       rewardDesc = 'VIP'
    //       additionalDesc = ' Days';
    //     }
    //     var rewardDescImg='';
    //     if(rewardDesc.includes('theme') == true || rewardDesc.includes('Theme') == true){
    //       rewardDescImg = 'theme';
    //     }else if(rewardDesc.includes('Lantern') == true || rewardDesc.includes('lantern') == true ){
    //       rewardDescImg = 'Lantern';
    //     }else if(rewardDesc.includes('Beans') == true || rewardDesc.includes('beans') == true){
    //       rewardDescImg = 'Beans';
    //     }else if(rewardDesc.includes('Star') == true || rewardDesc.includes('star') == true){
    //       rewardDescImg = 'Star';
    //     }else if(rewardDesc.includes('VIP') == true || rewardDesc.includes('vip') == true){
    //       rewardDescImg = 'VIP';
    //     }

    //     var content = '<div class="reward-div"><img src="img/rewards/'+rewardDescImg+'.png" class="rewards-img"><p class="reward-desc">'+rewardDesc+' x '+rewardCount+' '+additionalDesc+'</p></div>';
    //     $('#myRewards').append(content);
    //     console.log('Reward List:' + recDetails.data.myRewardList[i].rewardId)
    //   }
    // }
    // else{
    //   $('#myRewards').append('<div class="no-rew">No reward Yet<br>Play Now to get amazing rewards</div>');
    // }
    // }
  } else {
    //alert('Error');
  }
}

// User game rewards
var luckyPlayRew = {
  msg: "SUCCESS",
  data: {
    firstRewardLevel: 4,
    rewardResultList: [
      {
        rewardCount: 6000,
        rewardId: 0,
        rewardDesc: "Beans × %s",
        rewardType: 2,
      },
      {
        rewardCount: 12,
        rewardId: 30,
        rewardDesc: "room theme × %s day",
        rewardType: 4,
      },
      {
        rewardCount: 26,
        rewardId: 100001,
        rewardDesc: "VIP × %s day",
        rewardType: 1,
      },
      {
        rewardCount: 176,
        rewardId: 41002687,
        rewardDesc: "Lantern × %s",
        rewardType: 3,
      },
      {
        rewardCount: 33,
        rewardId: 41002653,
        rewardDesc: "Star × %s",
        rewardType: 3,
      },
    ],
  },
  errorCode: 0,
};
function getLuckyPlay(local) {
  $("#display").html("");
  $("#playImg").removeAttr("onclick", "getLuckyPlay(0)");

  var chanceCount = parseInt($("#myGameChances").val());
  //alert(host+'/api/activity/league/userPlayDraw?playCount='+chanceCount);

  $("#playImg").attr("disabled", true);
  $("#playImg").attr("disabled", "disabled");

  //playAudio();
  $("#luckyGifStart").show();
  $("#luckyImg").hide();
  // alert(chanceCount);
  if (local == 0 && chanceCount > 0) {
    const url = `${host}/api/activity/football/playFootballGame`;
    $.ajax({
      type: "POST",
      async: true,

      headers: { token: "" + u_token + "", userId: "" + userId + "" },
      url,
      contentType: "application/json",
      data: JSON.stringify({
        userId: userId,
        playCount: chanceCount,
      }),
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {},
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        //  $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        webpageRec(local);
        luckyPlayRew = data;
        // alert( JSON.stringify((luckyPlayRew)));
        if (luckyPlayRew.errorCode == 0) {
          // for (let index = 0; index < len.length; index++) {

          //     len[index].style.display="none";
          // }
          $("#luckyGif" + luckyPlayRew.data.levelList[0]).show();

          console.log("#luckyGif" + luckyPlayRew.data.levelList[0]);
          $("#luckyGifStart").hide();

          console.log(luckyPlayRew.data.levelList[0]);

          // for (let index = 0; coindex  < luckyPlayRew.data.lotteryGameResultList[0].result.length; index++) {
          //   setTimeout(function () {

          //     $("#display").append(
          //       '<div class="display">' + luckyPlayRew.data.lotteryGameResultList[0].result[index] + "</div>"
          //     );

          //   }, array1[index]);
          // }
          setTimeout(function () {
            //$('#luckyGif').hide();
            $("#luckyGif" + luckyPlayRew.data.levelList[0]).hide();
            $("#luckyImg").show();
          }, 2100);

          // $('#luckyImg').attr('src','img/game/'+luckyPlayRew.data.firstRewardLevel+'.png');

          setTimeout(function () {
            getLuckyPlayPopulate(luckyPlayRew);
          }, 3300);
        } else if (luckyPlayRew.errorCode == "2004") {
          $("#playImg").attr("disabled", false);
          //$('#luckyGif').attr('src','img/luckyDraw.png');

          $("#playImg").attr("onClick", "getLuckyPlay(0);");

          $("#luckyGifStart").hide();
          $("#luckyImg").show();
          Swal.fire({
            html: "<b>Greetings! You are on the verge of starting to score and winning beans rewards, with just  more  beans to spend. We are eagerly awaiting your participation and can't wait to observe your gameplay. Join us promptly!</b>",
            title:
              '<div class="nodata"><img src="./img/tryagain.png" class="w100" /></div>',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            showCloseButton: true,
          });
          //  setTimeout(function() {  getLuckyPlayPopulate(luckyPlayRew); }, 500);
        } else {
          $("#playImg").attr("onClick", "getLuckyPlay(0);");
          $("#playImg").attr("disabled", false);
          //$('#luckyGif').attr('src','img/luckyDraw.png');
          $("#luckyGifStart").hide();
          $("#luckyImg").show();
          Swal.fire({
            html: luckyPlayRew.msg,
            title: '<img src="./img/Oops text.png" class="oops-text-img" />',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            showCloseButton: true,
          });

          //  setTimeout(function() {  getLuckyPlayPopulate(luckyPlayRew); }, 500);
        }
        // getLuckyPlayPopulate(luckyPlayRew);
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    $("#playImg").attr("disabled", false);
    //$('#luckyGif').attr('src','img/luckyDraw.png');

    $("#playImg").attr("onClick", "getLuckyPlay(0);");

    $("#luckyGifStart").hide();
    $("#luckyImg").show();
    //getLuckyPlayPopulate(luckyPlayRew);
    Swal.fire({
      html: "Please enter chances other than 0",
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      showCloseButton: true,
    });
  }
}
function getLuckyPlayPopulate(luckyPlayRew) {
  //$('#luckyGif').hide();
  getWinnerApi(local);
  $("#playImg").attr("onClick", "getLuckyPlay(0);");
  $("#rewardList").append("");
  $("#rewardList").html("");
  $("#myGameChances").val(1);
  //$('#luckyImg').show();
  if (luckyPlayRew.errorCode == 0 && luckyPlayRew.data.levelList[0] > 0) {
    var rewardList = luckyPlayRew.data.lotteryGameResultList;
    $("#rewTextDet").html(
      "Impressive! You have given exceptional performance by scoring  goals and claiming <span id='sRuns' class='sbean'></span> POINTS.  <span id='sBeans' class='sbean'></span> beans credited to the account as your prize. Maintain your goal-scoring momentum to contribute towards your favourite team's victory."
    );

    $("#sRuns").html(luckyPlayRew.data.totalRuns);
    $("#sBeans").html(luckyPlayRew.data.totalBeans);

    var content =
      '<div class="reward-div"><img src="img/rewards/Beans.png" class="rewards-img"><p class="reward-desc">x' +
      luckyPlayRew.data.totalBeans +
      "</p></div>";
    $("#rewardList").append(content);
    //  }
    //userPlayReward();
    //$('#rewTextDet').append(content);

    setTimeout(function () {
      userPlayReward();
      $("#playImg").removeAttr("disabled");
      $("#playImg").attr("disabled", false);
    }, 500);
  } else if (
    luckyPlayRew.errorCode == 0 &&
    luckyPlayRew.data.levelList[0] == 0
  ) {
    $("#rewTextDet").html(
      "Oops!! Your attempt was unsuccessful. Please try again.!!"
    );

    $("#oopshot").hide();

    var rewardList = luckyPlayRew.data.lotteryGameResultList;

    $("#sRuns").html(luckyPlayRew.data.totalRuns);
    $("#sBeans").html(luckyPlayRew.data.totalBeans);

    var content =
      '<div class="reward-div"><img src="img/rewards/Beans.png" class="rewards-img"><p class="reward-desc">x' +
      luckyPlayRew.data.totalBeans +
      "</p></div>";
    $("#rewardList").append("");
    //  }
    //userPlayReward();
    //$('#rewTextDet').append(content);

    setTimeout(function () {
      userPlayReward();
      $("#playImg").removeAttr("disabled");
      $("#playImg").attr("disabled", false);
      $("#playImg").attr("onClick", "getLuckyPlay(0);");
    }, 500);
  } else {
    $("#playImg").attr("disabled", false);
    // $('#luckyGif').hide();
    //$('#luckyImg').show();
    $("#playImg").attr("onClick", "getLuckyPlay(0);");
    Swal.fire({
      html: "Something went wrong.Please Try again later. Thanks.",
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
  }
}

// team overall Rank
// var teamRankRec = {"errorCode":0,"msg":"SUCCESS","data":[{"teamIndex":3,"teamScore":100,"top3AvatarList":["http://kkimg.kktv9.com/image/555000037_0_1589189620111.png!128","","http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","http://kkimg.kktv9.com/image/555000037_0_1589189620111.png!128"]},{"teamIndex":6,"teamScore":70,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","",""]},{"teamIndex":2,"teamScore":50,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","http://kkimg.kktv9.com/image/555000001_0_1552974758939.png!128",""]},{"teamIndex":8,"teamScore":30,"top3AvatarList":["","http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","http://kkimg.kktv9.com/image/555000037_0_1589189620111.png!128"]},{"teamIndex":7,"teamScore":30,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","",""]},{"teamIndex":5,"teamScore":30,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","",""]},{"teamIndex":4,"teamScore":30,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128"]},{"teamIndex":1,"teamScore":30,"top3AvatarList":["http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128","",""]}]};
var teamRankRec = {
  errorCode: 0,
  msg: "SUCCESS",
  data: [
    {
      teamIndex: 1,
      teamScore: 57,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/568448229_0_1619745903939.png!128",
        "http://kkimg.kktv9.com/image/580569300_0_1612211368415.jpg!128",
        "http://kkimg.kktv9.com/image/559329746_0_1620578442844.jpg!128",
      ],
    },
    {
      teamIndex: 2,
      teamScore: 55,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
        "http://kkimg.kktv9.com/image/577255327_0_1622184005687.png!128",
        "http://kkimg.kktv9.com/image/559329746_0_1620578442844.jpg!128",
      ],
    },
    {
      teamIndex: 4,
      teamScore: 53,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/568448229_0_1619745903939.png!128",
        "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
        "http://kkimg.kktv9.com/image/559133175_0_1617134152554.png!128",
      ],
    },
    {
      teamIndex: 7,
      teamScore: 33,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
        "http://kkimg.kktv9.com/image/594260931_0_1620227858102.png!128",
        "http://kkimg.kktv9.com/image/602208033_0_1618808197043.png!128",
      ],
    },
    {
      teamIndex: 6,
      teamScore: 26,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
        "http://kkimg.kktv9.com/image/608095101_0_1622539046258.png!128",
        "http://kkimg.kktv9.com/image/577255327_0_1622184005687.png!128",
      ],
    },
    {
      teamIndex: 3,
      teamScore: 24,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
        "http://kkimg.kktv9.com/image/587133201_0_1622739348897.jpg!128",
        "http://kkimg.kktv9.com/image/603290905_0_1614086935112.jpg!128",
      ],
    },
    {
      teamIndex: 5,
      teamScore: 24,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/588619866_0_1601847640757.png!128",
        "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
        "http://kkimg.kktv9.com/image/604539502_0_1622321740137.png!128",
      ],
    },
    {
      teamIndex: 8,
      teamScore: 24,
      top3AvatarList: [
        "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
        "http://kkimg.kktv9.com/image/581032855_0_1620388097038.png!128",
        "http://kkimg.kktv9.com/image/588606909_0_1621493657534.png!128",
      ],
    },
  ],
};
function getTeamRank(local) {
  if (local == 0) {
    var weeklyIndex = $("#weeklyIndex").val();
    console.log(
      "total ranks: " +
        host +
        "/api/activity/cricket/getTeamRankInfo?type=2&weekIndex=" +
        weeklyIndex +
        ""
    );
    $.ajax({
      type: "GET",
      async: true,
      url: host + "/api/activity/cricket/getTeamRankInfo?type=2",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        teamRankRec = data;
        //  alert(JSON.stringify(teamRankRec))

        teamRankPopulate(teamRankRec);
        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    teamRankPopulate(teamRankRec);
  }
}

function teamRankPopulate(teamRankRec) {
  var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
  var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
  var imgPath = "http://kkimg.kktv9.com";
  var q = 1;
  var g = 5;
  $("#leagueRecTable").append("");
  $("#leagueRecTable").html("");
  var p;
  var user_img;
  var count = 0;
  var res3;
  var recBtnContent = "";
  if (teamRankRec.errorCode == 0) {
    for (i = 0; i < teamRankRec.data.length; i++) {
      //if(teamRankRec.data[i].weekIndex==weeklyIndex){
      for (
        k = 0;
        k <
        (teamRankRec.data[i].teamRankingInfoList.length > 10
          ? 10
          : teamRankRec.data[i].teamRankingInfoList.length);
        k++
      ) {
        var curData = "";
        curData = teamRankRec.data[i].teamRankingInfoList[k];

        var teamPortraitIndex = curData.teamIndex;
        var teamPortrait = "";
        var teamScore = curData.totalTrophies;
        var avatarListNumber = curData.teamRankingUserDTOList.length;
        var avatarList = [];
        var recBtnContent = "";

        count = count =
          curData.teamRankingUserDTOList.length > 3
            ? 3
            : curData.teamRankingUserDTOList.length;
        recBtnContent = "";

        if (count == 0) {
          recBtnContent = "";
        } else if (count == 1) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 2) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 3) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg">
                    <img src=${curData.teamRankingUserDTOList[2].portrait}alt="" onerror="imgError(this);">
                </div>
            </div>`;
        }

        var teamName = "";

        var teamName = "";

        if (teamPortraitIndex == 1) {
          teamName = "Devil Defenders";
        } else if (teamPortraitIndex == 2) {
          teamName = "Brave Blues";
        } else if (teamPortraitIndex == 3) {
          teamName = "Golden Panthers";
        } else if (teamPortraitIndex == 4) {
          teamName = "Real Rebels";
        } else if (teamPortraitIndex == 5) {
          teamName = "Fiery Eagles";
        } else if (teamPortraitIndex == 6) {
          teamName = "Blue Sharks";
        } else if (teamPortraitIndex == 7) {
          teamName = "Thundering Wizards";
        } else if (teamPortraitIndex == 8) {
          teamName = "Fierce Fighters";
        }

        var rec = "";
        // rec = '<div class="tableTre"><div><span class="user-info"><img src="img/team/wheel'+teamPortraitIndex+'.png" class="user-img"></span></div><div>'+teamName+'</div><div><button onclick="userRankWeekly(0,'+teamPortraitIndex+',1)" class="btn-center">'+recBtnContent+'</button></div><div class="tscore">'+teamScore+' Scores   </div></div>';
        rec =
          `<div class="leader-strip-bg">
            <div class="col-1">
                <img src="img/team/wheel${teamPortraitIndex}.png" alt="">
            </div>
            <div class="col-2">
               ${teamName}
            </div>
            <button onclick="userRankWeekly(0,${teamPortraitIndex},0,${k})" class="btn-center">
            ${recBtnContent}
           
            </button>
            <div class="col-4">
                ${teamScore} ` +
          (teamScore > 1 ? " Trophies" : " Trophies") +
          `
            </div>
        </div>`;

        $("#leagueRecTable").append(rec);
      }
    }
  } else {
    $("#leagueRecTable").append('<div class="nodata">No record found</div>');
  }
}
// team weekly
// team Rank
var teamRankRecWeekly = {
  errorCode: 0,
  msg: "SUCCESS",
  data: [
    { teamIndex: 1, teamScore: 0, top3AvatarList: [] },
    { teamIndex: 2, teamScore: 9, top3AvatarList: [""] },
    { teamIndex: 3, teamScore: 0, top3AvatarList: [] },
    { teamIndex: 4, teamScore: 0, top3AvatarList: [] },
    { teamIndex: 5, teamScore: 0, top3AvatarList: [] },
    { teamIndex: 6, teamScore: 0, top3AvatarList: [] },
    { teamIndex: 7, teamScore: 44, top3AvatarList: [""] },
    { teamIndex: 8, teamScore: 0, top3AvatarList: [] },
  ],
};
function getTeamRankWeekly(local) {
  if (local == 0) {
    var weeklyIndex = $("#weeklyIndex").val();
    console.log(
      host +
        "/api/activity/cricket/getTeamRankInfo?type=1&weekIndex=" +
        weeklyIndex +
        ""
    );
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/cricket/getTeamRankInfo?type=1&weekIndex=" +
        weeklyIndex +
        "",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        teamRankRecWeekly = data;

        // wheelRankPopulate(teamRankRecWeekly);
        teamRankPopulateWeekly(teamRankRecWeekly);

        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    console.log(teamRankRecWeekly);
    teamRankPopulateWeekly(teamRankRecWeekly);
  }
}
function getTeamWheelWeekly(local) {
  if (local == 0) {
    var weeklyIndex = $("#weeklyIndex").val();
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/cricket/getTeamRankInfo?type=1&weekIndex=" +
        weeklyIndex +
        "",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        //  alert(JSON.stringify(data))

        wheelRankPopulate(data);

        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    teamRankPopulateWeekly(teamRankRecWeekly);
  }
}

function teamRankPopulateWeekly(teamRankRec) {
  //if()
  var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
  var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
  var imgPath = "http://kkimg.kktv9.com";
  var q = 1;
  var g = 5;
  $("#leagueRecTableWeekly").append("");
  $("#leagueRecTableWeekly").html("");
  var p;
  var user_img;
  var recBtnContent;
  var res3;
  if (teamRankRec.errorCode == 0) {
    for (i = 0; i < teamRankRec.data.length; i++) {
      // if(teamRankRec.data[i].weekIndex==weeklyIndex){

      for (
        k = 0;
        k <
        (teamRankRec.data[0].teamRankingInfoList.length > 10
          ? 10
          : teamRankRec.data[0].teamRankingInfoList.length);
        k++
      ) {
        var curData = "";
        var count = 0;
        curData = teamRankRec.data[0].teamRankingInfoList[k];

        var teamPortraitIndex = curData.teamIndex;
        var teamPortrait = "";
        var teamScore = curData.teamTickets;
        var avatarListNumber = curData.teamRankingUserDTOList.length;
        var avatarList = [];
        var recBtnContent = "";

        count =
          curData.teamRankingUserDTOList.length > 3
            ? 3
            : curData.teamRankingUserDTOList.length;

        recBtnContent = "";

        if (count == 0) {
          recBtnContent = "";
        } else if (count == 1) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 2) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 3) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg">
                    <img src=${curData.teamRankingUserDTOList[2].portrait}alt="" onerror="imgError(this);">
                </div>
            </div>`;
        }

        var teamName = "";

        var teamName = "";

        if (teamPortraitIndex == 1) {
          teamName = "Team warrior";
        } else if (teamPortraitIndex == 2) {
          teamName = "Divine soldiers";
        } else if (teamPortraitIndex == 3) {
          teamName = " Striking Shadow";
        } else if (teamPortraitIndex == 4) {
          teamName = "Galaxy Fighters";
        } else if (teamPortraitIndex == 5) {
          teamName = "United Enigma";
        } else if (teamPortraitIndex == 6) {
          teamName = "The turf's giants";
        } else if (teamPortraitIndex == 7) {
          teamName = "Defender's Dream";
        } else if (teamPortraitIndex == 8) {
          teamName = "Barrier Breakers";
        }

        var rec = "";
        // rec = '<div class="tableTre"><div><span class="user-info"><img src="img/team/wheel'+teamPortraitIndex+'.png" class="user-img"></span></div><div>'+teamName+'</div><div><button onclick="userRankWeekly(0,'+teamPortraitIndex+',1)" class="btn-center">'+recBtnContent+'</button></div><div class="tscore">'+teamScore+' Scores   </div></div>';
        rec =
          `<div class="leader-strip-bg">
            <div class="col-1">
                <img src="img/team/wheel${teamPortraitIndex}.png" alt="">
            </div>
            <div class="col-2">
               ${teamName}
            </div>
            <button onclick="userRankWeekly(0,${teamPortraitIndex},1,${k})" class="btn-center">
            ${recBtnContent}
           
            </button>
            <div class="col-4">
               ` +
          `<img class="tiarimg" src="img/score.png">` +
          ` ${teamScore} ` +
          (teamScore > 1 ? " Scores" : " Score") +
          `
            </div>
        </div>`;
        $("#leagueRecTableWeekly").append(rec);
      }
    }
    // }
  } else {
    $("#leagueRecTableWeekly").append(
      '<div class="nodata">No record found</div>'
    );
  }
}
// talent Ranking
var talent_data_val = [
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁꧁ ",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
];
function get_talent_rec(local) {
  var uri = "params[]";
  //console.log("host+'/api/activity/eventShow/getEventCommonRank?eventDesc=20200919_league&rankType=6&userType=2&pageIndex=1&pageCount=20")
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&rankType=1&rankIndex=2&pageIndex=1&pageCount=20",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();

        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        $("#img_bulk_anim_1").attr("src", "img/bx_loader.gif");
        //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
        $("#img_bulk_anim_1").removeAttr("src");
      },
      success: function (data) {
        talent_data_val = data;
        get_talent_data(talent_data_val);

        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    get_talent_data(talent_data_val);
  }
}
function get_talent_data(talent_data_val) {
  $("#talentRecTable").html("");
  $("#talentRecTableMore").html("");
  $("#seemoreOverall").hide();
  $("#seeLessOverall").hide();
  if (talent_data_val != 0) {
    var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var imgPath = "http://kkimg.kktv9.com";
    var q = 1;
    var g = 5;
    var p;
    var rec = "";
    var user_img;
    var res3;
    for (
      k = 0;
      k < (talent_data_val.length > 20 ? 20 : talent_data_val.length);
      k++
    ) {
      var curData = talent_data_val[k];
      var userId = curData.userId;
      var profile_img = "";
      if (curData.portrait != "") {
        profile_img = '<img src="' + curData.portrait + '" class="user-img">';
      } else {
        profile_img = '<img src="img/user.png" class="user-img">';
      }
      var nickName = curData.nickName;
      var userLevel = curData.actorLevel;
      var userScore = curData.userScore;
      var rec = "";
      if (k == 0) {
        // rec = '<tr class="border-bottom" id="rec_id_' + gifterdata[k].userId + '"><td>' + profile_img + '</td><td><a href="' + kk_tv_url + '' + gifterdata[k].userId + '" target="_blank">' + user_img + '</a></td><td>' + gifterdata[k].nickName + '<br>  <p><img class="levelimg" src="' + talentlevel + gifterdata[k].userLevel + '.png"></p></td><td><span> <img class="tiarimg" src="img/coin.png">' + (teamScore != undefined ? teamScore.toLocaleString() : 0) + '</span></td></tr>'
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTable").append(rec);
      } else if (k == 1) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";

        $("#talentRecTable").append(rec);
      } else if (k == 2) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTable").append(rec);
      } else if (k < 10) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTable").append(rec);
      } else {
        $("#seemoreOverall").show();

        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableMore").append(rec);
      }
    }
  } else {
    $("#talentRecTable").html('<div class="nodata">No record found</div>');
  }
}
// weekly talent
var talent_data_valWeekly = [
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Weekly",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
];
function get_talent_recWeekly(local) {
  var uri = "params[]";
  console.log(
    host +
      "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&rankType=5&rankIndex=1&pageIndex=1&pageCount=20&" +
      encodeURIComponent(uri) +
      "=" +
      weeklyIndex
  );

  //alert("weekly"+host+'/api/activity/eventShow/getEventCommonRank?eventDesc=20200919_league&rankType=5&userType=2&pageIndex=1&pageCount=20&'+encodeURIComponent(uri)+'='+weeklyIndex);
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&rankType=5&rankIndex=1&pageIndex=1&pageCount=20&" +
        encodeURIComponent(uri) +
        "=" +
        weeklyIndex,
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        $("#img_bulk_anim_1").attr("src", "img/bx_loader.gif");
        //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
        $("#img_bulk_anim_1").removeAttr("src");
      },
      success: function (data) {
        talent_data_valWeekly = data;
        get_talent_dataWeekly(talent_data_valWeekly);
        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    get_talent_dataWeekly(talent_data_valWeekly);
  }
}
function get_talent_dataWeekly(talent_data_val) {
  //alert(JSON.stringify(talent_data_val))
  if (talent_data_val != 0) {
    $("#talentRecTableWeekly").html("");
    $("#talentRecTableWeeklyMore").html("");
    $("#seeLessWeekly").hide();
    $("#seemoreWeekly").hide();

    var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var imgPath = "http://kkimg.kktv9.com";
    var q = 1;
    var g = 5;
    var p;
    var rec = "";
    var user_img;
    var res3;
    for (
      k = 0;
      k < (talent_data_val.length > 20 ? 20 : talent_data_val.length);
      k++
    ) {
      var curData = talent_data_val[k];
      var userId = curData.userId;
      var profile_img = "";
      if (k < 3) {
        if (curData.portrait != "") {
          profile_img =
            '<img src="' + curData.portrait + '" class="user-img-top">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img-top">';
        }
      } else {
        if (curData.portrait != "") {
          profile_img = '<img src="' + curData.portrait + '" class="user-img">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img">';
        }
      }

      var nickName = curData.nickName;
      var userLevel = curData.actorLevel;
      var userScore = curData.userScore;
      var rec = "";
      if (k == 0) {
        // rec = '<tr class="border-bottom" id="rec_id_' + gifterdata[k].userId + '"><td>' + profile_img + '</td><td><a href="' + kk_tv_url + '' + gifterdata[k].userId + '" target="_blank">' + user_img + '</a></td><td>' + gifterdata[k].nickName + '<br>  <p><img class="levelimg" src="' + talentlevel + gifterdata[k].userLevel + '.png"></p></td><td><span> <img class="tiarimg" src="img/coin.png">' + (teamScore != undefined ? teamScore.toLocaleString() : 0) + '</span></td></tr>'
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeekly").append(rec);
      } else if (k == 1) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeekly").append(rec);
      } else if (k == 2) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeekly").append(rec);
      } else if (k < 10) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeekly").append(rec);
      } else {
        $("#seemoreWeekly").show();
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeeklyMore").append(rec);
      }
    }
  } else {
    $("#talentRecTableWeekly").html(
      '<div class="nodata">No record found</div>'
    );
  }
}
// top1 ranking
// function wheel ranking
var wheekRankRec = {
  errorCode: 0,
  msg: "SUCCESS",
  data: [
    {
      teamIndex: 1,
      teamPointScore: 108,
      userId: 502184264,
      userPointScore: 98,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 6,
      teamPointScore: 67,
      userId: 502184264,
      userPointScore: 57,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 3,
      teamPointScore: 32,
      userId: 502184264,
      userPointScore: 32,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 2,
      teamPointScore: 29,
      userId: 502184264,
      userPointScore: 29,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 7,
      teamPointScore: 28,
      userId: 502184264,
      userPointScore: 28,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 5,
      teamPointScore: 28,
      userId: 502184264,
      userPointScore: 28,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 8,
      teamPointScore: 15,
      userId: 502184264,
      userPointScore: 15,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
    {
      teamIndex: 4,
      teamPointScore: 10,
      userId: 502184264,
      userPointScore: 10,
      userAvatar: "/image/502184264_0_1548049352075.jpg",
    },
  ],
};

function wheelRankPopulate(teamRankRec) {
  var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
  //alert('1')

  var weeklyIndex = $("#weeklyIndex").val();
  if (teamRankRec.errorCode == 0) {
    // alert(weeklyIndex)
    var rank = 1;
    for (i = 0; i < teamRankRec.data.length; i++) {
      // if(teamRankRec.data[0].weekIndex==weeklyIndex){

      for (
        k = 0;
        k <
        (teamRankRec.data[0].teamRankingInfoList.length > 10
          ? 10
          : teamRankRec.data[0].teamRankingInfoList.length);
        k++
      ) {
        var curData = teamRankRec.data[0].teamRankingInfoList[k];
        var userId = curData.teamRankingUserDTOList[0].userId;
        var teamIndex = curData.teamIndex;
        var portrait = curData.teamRankingUserDTOList[0].portrait;
        var imgPath = "http://kkimg.kktv9.com";

        $("#teamTop" + rank).attr("src", "img/team/wheel" + teamIndex + ".png");
        // if(rank==1){

        // }
        // else{

        // }
        if (portrait != "") {
          $("#userTop" + rank).attr("src", portrait);
          if (rank == 1) {
            $("#userTop11").attr("src", portrait);
            //$('#userTop11').attr("href","talent.html");
          }

          $("#userTop" + rank).attr("onClick", "openProfile(" + userId + ");");
        } else {
          $("#userTop" + rank).attr(
            "src",
            "../common/img/kk_head_avatar_men.png"
          );
          if (rank == 1) {
            $("#userTop11").attr("src", "../common/img/kk_head_avatar_men.png");
          }
          $("#userTop" + rank).attr("onClick", "openProfile(" + userId + ");");
        }

        rank++;
      }
    }
  }
  // }
}

// team vote api
var teamVoteRec = {
  errorCode: 0,
  msg: "SUCCESS",
  data: true,
};
function teamVote(local) {
  var voteCount = $("#noVoteText").val();
  var teamIndex = $("#teamSelectionVal").val();
  $("#teamVote").attr("disabled", true);
  $("#btnVoteMain").attr("disabled", true);

  var voteText = $("#voteText").text();
  // voteText = parseInt(voteText,10);

  voteText = parseInt(voteText, 10);
  //alert("Vote count: "+ voteCount + "Vote text: " + voteText)

  // alert('Team Index: ' + teamIndex + '<br>voteCount'+ voteCount);
  // alert('selected ');
  if (voteCount == 0 && voteText > 0) {
    Swal.fire({
      html: "Please indicate the number of Credits  you wish to score for your favourite. Thank you!",
      title: '<img src="./img/missing.png" class="wid-80" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
    $("#btnVoteMain").attr("disabled", false);
    // $("#teamVote").attr("disabled", false);
  } else if (voteCount == 0 && voteText == 0) {
    Swal.fire({
      html: "<b>Please select your favourite team to send them Credits. Thank you!</b>",
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
    $("#btnVoteMain").attr("disabled", false);
    // $("#teamVote").attr("disabled", false);
  } else if (voteCount > voteText) {
    Swal.fire({
      html: "<b>We would love to see you play, send the event gifts, and earn chances, score Credits, and then try sending.</b>",
      title: '<img src="./img/uhoh1.png" class="w100" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
    $("#btnVoteMain").attr("disabled", false);
  } else if (voteCount < 0) {
    Swal.fire({
      html: " Points count cannot be less then zero",
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
    $("#btnVoteMain").attr("disabled", false);
  } else if (voteCount > 0 && local == 0) {
    // alert(host+'/api/activity/league/userVoteTeam?voteCount='+voteCount+'&voteTeamIndex='+teamIndex);
    const url = `${host}/api/activity/football/voteTeam`;
    $.ajax({
      type: "POST",
      async: true,
      headers: { token: "" + u_token + "", userId: "" + userId + "" },
      url,
      contentType: "application/json",
      data: JSON.stringify({
        userId: userId,
        teamIndex: teamIndex,
        voteCount: "" + voteCount + "",
      }),
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        //alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              //console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        webpageRec(local);
        teamVoteRec = data;
        //alert(data);

        teamVotePopulate(teamVoteRec, teamIndex);
        //  console.log('Ajax success');
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
      error: function (xhr, status, error) {
        console.log("Ajax Failure.");
      },
    });
  } else {
    teamVotePopulate(teamVoteRec, teamIndex);
  }
}
function teamVotePopulate(teamVoteRec, teamIndex) {
  $("#teamVote").attr("disabled", false);
  $("#btnVoteMain").attr("disabled", false);
  if (teamVoteRec.errorCode == 0 && teamVoteRec.data == true) {
    getTeamRank(local);

    getTeamRankWeekly(local);
    var teamName = "";

    if (teamIndex == 1) {
      teamName = "Team warrior";
    } else if (teamIndex == 2) {
      teamName = "Divine soldiers";
    } else if (teamIndex == 3) {
      teamName = " Striking Shadow";
    } else if (teamIndex == 4) {
      teamName = "Galaxy Fighters";
    } else if (teamIndex == 5) {
      teamName = "United Enigma";
    } else if (teamIndex == 6) {
      teamName = "The turf's giants";
    } else if (teamIndex == 7) {
      teamName = "Defender's Dream";
    } else if (teamIndex == 8) {
      teamName = "Barrier Breakers";
    }

    var team_img =
      "<img src='img/team/" + teamIndex + ".png'  class='center_img'>";
    // console.log('teamName: '+ teamName);
    var congText =
      team_img +
      ' Hey Supporter! We appreciate your appreciation for  <span class="sBeans">' +
      teamName +
      "</span>. It would be great to have your support again for our  " +
      teamName +
      " again.<br> Make us win this league by supporting us until the very end.";

    $("#voteCpngText").html(congText);
    $("#noVoteText").val(0);
    openVoteSuccessDialog();
  } else if (teamVoteRec.errorCode !== 0) {
    Swal.fire({
      html: "Please select your favourite team to send them Credits. Thank you!",
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
  } else {
    Swal.fire({
      html: teamVoteRec.errorCode,
      title: '<img src="./img/Oops text.png" class="oops-text-img" />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
  }
}
// user rank
var userRec = [
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
];
function userRank(local, teamIndex) {
  var uri = "params[]";
  var weeklyIndex = $("#weeklyIndex").val();
  console.log(
    "total" +
      host +
      "/api/activity/cricket/getTeamContributionInfo?weekIndex=0&teamIndex=" +
      teamIndex +
      "&pageNum=1&pageSize=20"
  );
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/cricket/getTeamContributionInfo?weekIndex=0&teamIndex=" +
        teamIndex +
        "&pageNum=1&pageSize=20",
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        $("#img_bulk_anim_1").attr("src", "img/bx_loader.gif");
        //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
        $("#img_bulk_anim_1").removeAttr("src");
      },
      success: function (data) {
        userRec = data;
        userRankPopulate(userRec, teamIndex);
        // console.log('Ajax success');
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    userRankPopulate(userRec, teamIndex);
  }
}
var userRec1 = [
  {
    userId: 568448229,
    userScore: 4085500,
    nickName: "Mummy's 👦 Boy💕",
    gender: 1,
    userLevel: 92,
    actorLevel: 17,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/568448229_0_1619745903939.png!128",
  },
  {
    userId: 580569300,
    userScore: 1897600,
    nickName: "꧁༒༺ অভ্র ༻༒꧂",
    gender: 1,
    userLevel: 39,
    actorLevel: 8,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/580569300_0_1612211368415.jpg!128",
  },
  {
    userId: 559329746,
    userScore: 968148,
    nickName: "•●◉✿hacker[F❤A]✿◉●•",
    gender: 1,
    userLevel: 44,
    actorLevel: 21,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/559329746_0_1620578442844.jpg!128",
  },
  {
    userId: 586936613,
    userScore: 755080,
    nickName: "Non_Refundable💧",
    gender: 1,
    userLevel: 27,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586936613_0_1601911197359.png!128",
  },
  {
    userId: 602193966,
    userScore: 682000,
    nickName: "আলাদিনের চেরাগ🤣",
    gender: 1,
    userLevel: 21,
    actorLevel: 1,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 558244457,
    userScore: 672264,
    nickName: "🇰 .🇷 .🇰",
    gender: 1,
    userLevel: 40,
    actorLevel: 13,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/558244457_0_1621883158619.png!128",
  },
  {
    userId: 588806873,
    userScore: 631464,
    nickName: "😡Ra1😡",
    gender: 1,
    userLevel: 22,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588806873_0_1621713976138.png!128",
  },
  {
    userId: 578646990,
    userScore: 440500,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 572265957,
    userScore: 355000,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
  {
    userId: 560791748,
    userScore: 225772,
    nickName: "        ",
    gender: 1,
    userLevel: 23,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560791748_0_1605809286454.png!128",
  },
  {
    userId: 602532906,
    userScore: 100742,
    nickName: "🐈😒pariSa😒🐈",
    gender: 0,
    userLevel: 16,
    actorLevel: 15,
    liveType: 1,
    portrait: "http://kkimg.kktv9.com/image/602532906_0_1622570539951.png!128",
  },
  {
    userId: 588251385,
    userScore: 100000,
    nickName: "Hell.",
    gender: 1,
    userLevel: 33,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588251385_0_1614025530600.png!128",
  },
  {
    userId: 592178854,
    userScore: 81966,
    nickName: "DON IS BACK 786",
    gender: 1,
    userLevel: 57,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
  },
  {
    userId: 574636730,
    userScore: 79846,
    nickName: "❣⃟ᴀˡᵒⁿᵉ٨ﮩ٨ᶠᵉᵉˡⁱⁿᵍ𓃭",
    gender: 1,
    userLevel: 16,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/574636730_0_1622771695948.png!128",
  },
  {
    userId: 593097681,
    userScore: 50788,
    nickName: "🥎INDEX🥎",
    gender: 1,
    userLevel: 27,
    actorLevel: 10,
    liveType: 1,
    portrait: "http://kkimg.kktv9.com/image/593097681_0_1622290738181.png!128",
  },
  {
    userId: 587133201,
    userScore: 45514,
    nickName: "🦇BLACKENED 🆔🦇",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587133201_0_1622739348897.jpg!128",
  },
  {
    userId: 580439796,
    userScore: 22000,
    nickName: "Omg aaaqil is here😍",
    gender: 1,
    userLevel: 8,
    actorLevel: 1,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 502323782,
    userScore: 17988,
    nickName: "𝙆𝙞𝙙𝙣𝙖𝙥𝙥𝙚𝙧",
    gender: 1,
    userLevel: 19,
    actorLevel: 11,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502323782_0_1622553369782.png!128",
  },
  {
    userId: 576783691,
    userScore: 15922,
    nickName: "💫Destiny✨",
    gender: 1,
    userLevel: 8,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/576783691_0_1619074168939.png!128",
  },
  {
    userId: 588606909,
    userScore: 13210,
    nickName: "KING NAGA YOYO",
    gender: 1,
    userLevel: 15,
    actorLevel: 19,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588606909_0_1621493657534.png!128",
  },
];
var userRec2 = [
  {
    userId: 592178854,
    userScore: 4082950,
    nickName: "DON IS BACK 786",
    gender: 1,
    userLevel: 57,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
  },
  {
    userId: 577255327,
    userScore: 1591688,
    nickName: "wait a mint",
    gender: 1,
    userLevel: 24,
    actorLevel: 12,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/577255327_0_1622184005687.png!128",
  },
  {
    userId: 559329746,
    userScore: 1428300,
    nickName: "•●◉✿hacker[F❤A]✿◉●•",
    gender: 1,
    userLevel: 44,
    actorLevel: 21,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/559329746_0_1620578442844.jpg!128",
  },
  {
    userId: 594260931,
    userScore: 1004000,
    nickName: "🔥🔥Thor🔥🔥",
    gender: 1,
    userLevel: 22,
    actorLevel: 16,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/594260931_0_1620227858102.png!128",
  },
  {
    userId: 594823092,
    userScore: 740140,
    nickName: "Golden girl pihu",
    gender: 0,
    userLevel: 19,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/594823092_0_1622618207131.png!128",
  },
  {
    userId: 577908053,
    userScore: 716010,
    nickName: "🤴𝓜𝓑★𝐒𝐊✔BADHON🤴",
    gender: 1,
    userLevel: 38,
    actorLevel: 10,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/577908053_0_1596305994793.png!128",
  },
  {
    userId: 578646990,
    userScore: 487956,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 602193966,
    userScore: 261780,
    nickName: "আলাদিনের চেরাগ🤣",
    gender: 1,
    userLevel: 21,
    actorLevel: 1,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 603988969,
    userScore: 156554,
    nickName: "জুলিয়াস 🧬🧬",
    gender: 1,
    userLevel: 14,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603988969_0_1619392091994.jpg!128",
  },
  {
    userId: 584985089,
    userScore: 130000,
    nickName: "A N N I 😎😎",
    gender: 1,
    userLevel: 22,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/584985089_0_1621055889335.jpg!128",
  },
  {
    userId: 565537563,
    userScore: 125032,
    nickName: "ʙᴀᴀʙᴜ",
    gender: 1,
    userLevel: 50,
    actorLevel: 10,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/565537563_0_1620091088650.png!128",
  },
  {
    userId: 580555191,
    userScore: 112500,
    nickName: "%As u wish🖤",
    gender: 1,
    userLevel: 19,
    actorLevel: 14,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/580555191_0_1621781326480.png!128",
  },
  {
    userId: 571746053,
    userScore: 96002,
    nickName: "🇮🇳⃢🍁ham hai app k",
    gender: 0,
    userLevel: 15,
    actorLevel: 16,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/571746053_0_1622454790924.png!128",
  },
  {
    userId: 602208033,
    userScore: 86076,
    nickName: "Whisky Samba !!",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/602208033_0_1618808197043.png!128",
  },
  {
    userId: 574017130,
    userScore: 81000,
    nickName: "Paglu ....",
    gender: 1,
    userLevel: 10,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/574017130_0_1622363429224.png!128",
  },
  {
    userId: 603866855,
    userScore: 74590,
    nickName: "Soulful Listener",
    gender: 1,
    userLevel: 11,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603866855_0_1615229195249.png!128",
  },
  {
    userId: 585775664,
    userScore: 74574,
    nickName: "@AUGGIE",
    gender: 1,
    userLevel: 19,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585775664_0_1609522951373.png!128",
  },
  {
    userId: 561534092,
    userScore: 71982,
    nickName: "BIP🤝AGENCY Hossain",
    gender: 1,
    userLevel: 21,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561534092_0_1620894452588.png!128",
  },
  {
    userId: 561557524,
    userScore: 59610,
    nickName: "Golu ji .......",
    gender: 1,
    userLevel: 20,
    actorLevel: 15,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561557524_0_1621930378310.png!128",
  },
  {
    userId: 572265957,
    userScore: 50000,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
];

var userRec3 = [
  {
    userId: 608072207,
    userScore: 160001,
    nickName: "💪𝕱𝖎𝖌𝖍𝖙𝖊𝖗",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
  },
  {
    userId: 587133201,
    userScore: 135882,
    nickName: "🦇BLACKENED 🆔🦇",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587133201_0_1622739348897.jpg!128",
  },
  {
    userId: 603290905,
    userScore: 111690,
    nickName: "ⓂⒺⓇⒸⓎ",
    gender: 1,
    userLevel: 23,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603290905_0_1614086935112.jpg!128",
  },
  {
    userId: 578646990,
    userScore: 90500,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 595602206,
    userScore: 60414,
    nickName: "Angelina...😅😅",
    gender: 0,
    userLevel: 15,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/595602206_0_1621163383187.png!128",
  },
  {
    userId: 603075204,
    userScore: 60276,
    nickName: "Brilliant🧐",
    gender: 1,
    userLevel: 12,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603075204_0_1618960741409.png!128",
  },
  {
    userId: 561160775,
    userScore: 30000,
    nickName: "Captain Sparrow™",
    gender: 1,
    userLevel: 17,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561160775_0_1594718311105.jpeg!128",
  },
  {
    userId: 561401033,
    userScore: 25202,
    nickName: "ⓈⒾⓂⒷⒶ",
    gender: 1,
    userLevel: 13,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561401033_0_1622287615647.png!128",
  },
  {
    userId: 560791748,
    userScore: 22000,
    nickName: "        ",
    gender: 1,
    userLevel: 23,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560791748_0_1605809286454.png!128",
  },
  {
    userId: 601691562,
    userScore: 21160,
    nickName: "GRACE ❤️",
    gender: 1,
    userLevel: 20,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/601691562_0_1619814442301.png!128",
  },
  {
    userId: 588619866,
    userScore: 20000,
    nickName: "♚ 🅨🅤🅖 ♚",
    gender: 1,
    userLevel: 16,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588619866_0_1601847640757.png!128",
  },
  {
    userId: 551023816,
    userScore: 20000,
    nickName: "krish4u🤩🤩",
    gender: 1,
    userLevel: 20,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/551023816_0_1606929944645.png!128",
  },
  {
    userId: 602598775,
    userScore: 18000,
    nickName: "🍻Golu🍻",
    gender: 1,
    userLevel: 10,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/602598775_0_1615646149733.png!128",
  },
  {
    userId: 550673778,
    userScore: 17701,
    nickName: "🇲 🇷 -🇱 🇦 🇱 🇮🌼",
    gender: 1,
    userLevel: 13,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/550673778_0_1619975530356.png!128",
  },
  {
    userId: 561534092,
    userScore: 14996,
    nickName: "BIP🤝AGENCY Hossain",
    gender: 1,
    userLevel: 21,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561534092_0_1620894452588.png!128",
  },
  {
    userId: 565785703,
    userScore: 14356,
    nickName: "🕊️ 🕊️ZERO 🕊️🕊️",
    gender: 1,
    userLevel: 14,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/565785703_0_1622310733296.png!128",
  },
  {
    userId: 602533175,
    userScore: 13900,
    nickName: "₦༏₦ℑ₳",
    gender: 1,
    userLevel: 9,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/602533175_0_1618472232925.png!128",
  },
  {
    userId: 502025062,
    userScore: 13898,
    nickName: "💝Mastaana🦹4G",
    gender: 0,
    userLevel: 13,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/502025062_0_1620062214212.png!128",
  },
  {
    userId: 557809844,
    userScore: 12740,
    nickName: "śhàh Ģ",
    gender: 1,
    userLevel: 12,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/557809844_0_1615151560219.png!128",
  },
  {
    userId: 603410190,
    userScore: 12018,
    nickName: "Support ❤️ 🇵🇸",
    gender: 1,
    userLevel: 11,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603410190_0_1620644764968.png!128",
  },
];
var userRec4 = [
  {
    userId: 568448229,
    userScore: 3384000,
    nickName: "Mummy's 👦 Boy💕",
    gender: 1,
    userLevel: 92,
    actorLevel: 17,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/568448229_0_1619745903939.png!128",
  },
  {
    userId: 578646990,
    userScore: 1086344,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 559133175,
    userScore: 1046000,
    nickName: "sᴀᴀɴᴠɪ",
    gender: 1,
    userLevel: 29,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/559133175_0_1617134152554.png!128",
  },
  {
    userId: 572265957,
    userScore: 817060,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
  {
    userId: 561664542,
    userScore: 796134,
    nickName: "MK🧐🧐",
    gender: 1,
    userLevel: 27,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561664542_0_1602527187092.png!128",
  },
  {
    userId: 594823092,
    userScore: 515000,
    nickName: "Golden girl pihu",
    gender: 0,
    userLevel: 19,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/594823092_0_1622618207131.png!128",
  },
  {
    userId: 602193966,
    userScore: 438000,
    nickName: "আলাদিনের চেরাগ🤣",
    gender: 1,
    userLevel: 21,
    actorLevel: 1,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 602532906,
    userScore: 291500,
    nickName: "🐈😒pariSa😒🐈",
    gender: 0,
    userLevel: 16,
    actorLevel: 15,
    liveType: 1,
    portrait: "http://kkimg.kktv9.com/image/602532906_0_1622570539951.png!128",
  },
  {
    userId: 560791748,
    userScore: 240773,
    nickName: "        ",
    gender: 1,
    userLevel: 23,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560791748_0_1605809286454.png!128",
  },
  {
    userId: 587133201,
    userScore: 193542,
    nickName: "🦇BLACKENED 🆔🦇",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587133201_0_1622739348897.jpg!128",
  },
  {
    userId: 563677608,
    userScore: 180082,
    nickName: "🗽 KRISHNA 🗽",
    gender: 1,
    userLevel: 39,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/563677608_0_1617939345134.png!128",
  },
  {
    userId: 565537563,
    userScore: 135000,
    nickName: "ʙᴀᴀʙᴜ",
    gender: 1,
    userLevel: 50,
    actorLevel: 10,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/565537563_0_1620091088650.png!128",
  },
  {
    userId: 560883756,
    userScore: 103226,
    nickName: "Remo ji",
    gender: 1,
    userLevel: 10,
    actorLevel: 5,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560883756_0_1619610210846.png!128",
  },
  {
    userId: 581032855,
    userScore: 27222,
    nickName: "khan ji dy",
    gender: 1,
    userLevel: 17,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/581032855_0_1620388097038.png!128",
  },
  {
    userId: 585948677,
    userScore: 27000,
    nickName: "king naga yoyo",
    gender: 1,
    userLevel: 9,
    actorLevel: 17,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585948677_0_1619796197447.png!128",
  },
  {
    userId: 559161609,
    userScore: 22408,
    nickName: "Alpha Sultan",
    gender: 1,
    userLevel: 16,
    actorLevel: 15,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/559161609_0_1622096310400.png!128",
  },
  {
    userId: 561401033,
    userScore: 21084,
    nickName: "ⓈⒾⓂⒷⒶ",
    gender: 1,
    userLevel: 13,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561401033_0_1622287615647.png!128",
  },
  {
    userId: 561534471,
    userScore: 18828,
    nickName: "user busy",
    gender: 1,
    userLevel: 23,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561534471_0_1622230429399.png!128",
  },
  {
    userId: 603685236,
    userScore: 17984,
    nickName: "𝙱𝚕𝚊𝚌𝚔 𝚠𝚘𝚕𝚏™",
    gender: 1,
    userLevel: 11,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603685236_0_1622563912368.png!128",
  },
  {
    userId: 585554708,
    userScore: 12832,
    nickName: "♚ƘƖƝƓ♚ ✧ƠƑ✧ ♚ƘƖƝƓƧ♚",
    gender: 1,
    userLevel: 16,
    actorLevel: 8,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585554708_0_1622711663481.png!128",
  },
];
var userRec5 = [
  {
    userId: 588619866,
    userScore: 209164,
    nickName: "♚ 🅨🅤🅖 ♚",
    gender: 1,
    userLevel: 16,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588619866_0_1601847640757.png!128",
  },
  {
    userId: 572265957,
    userScore: 120500,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
  {
    userId: 604539502,
    userScore: 78746,
    nickName: "𝕽𝖚𝖉𝖗𝖆𝖐𝖘𝖍",
    gender: 1,
    userLevel: 15,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/604539502_0_1622321740137.png!128",
  },
  {
    userId: 608072207,
    userScore: 70000,
    nickName: "💪𝕱𝖎𝖌𝖍𝖙𝖊𝖗",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
  },
  {
    userId: 586570414,
    userScore: 68610,
    nickName: "✧R🧿NY SINGH✧",
    gender: 1,
    userLevel: 12,
    actorLevel: 17,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586570414_0_1615394517607.png!128",
  },
  {
    userId: 603290905,
    userScore: 63900,
    nickName: "ⓂⒺⓇⒸⓎ",
    gender: 1,
    userLevel: 23,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603290905_0_1614086935112.jpg!128",
  },
  {
    userId: 585805184,
    userScore: 56306,
    nickName: "✰🅽🅾🅳🅳🆈✰",
    gender: 0,
    userLevel: 19,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585805184_0_1619705395074.png!128",
  },
  {
    userId: 578646990,
    userScore: 30000,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 587486120,
    userScore: 25776,
    nickName: "Shoaib78600",
    gender: 1,
    userLevel: 15,
    actorLevel: 14,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587486120_0_1618899616499.jpg!128",
  },
  {
    userId: 603075204,
    userScore: 21000,
    nickName: "Brilliant🧐",
    gender: 1,
    userLevel: 12,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603075204_0_1618960741409.png!128",
  },
  {
    userId: 551023816,
    userScore: 20300,
    nickName: "krish4u🤩🤩",
    gender: 1,
    userLevel: 20,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/551023816_0_1606929944645.png!128",
  },
  {
    userId: 579158604,
    userScore: 14356,
    nickName: "Vanessa Santiago",
    gender: 0,
    userLevel: 16,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com!128",
  },
  {
    userId: 593177378,
    userScore: 14332,
    nickName: "⚔️🗡️⚔️ Kings⚔️🗡️⚔️",
    gender: 1,
    userLevel: 13,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/593177378_0_1622710875450.png!128",
  },
  {
    userId: 575866074,
    userScore: 11892,
    nickName: "YES\n\n\n\n\n\n\n\n\n\n\nYES",
    gender: 1,
    userLevel: 8,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/575866074_0_1622534181728.png!128",
  },
  {
    userId: 604765945,
    userScore: 10032,
    nickName: "✨BinDass King👑",
    gender: 1,
    userLevel: 15,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/604765945_0_1620316824437.png!128",
  },
  {
    userId: 583255886,
    userScore: 9320,
    nickName: "🌟ꇙ꒤ꉣꏂꋪ ꄲꋊꏂ🌟🇮🇳👈",
    gender: 1,
    userLevel: 12,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/583255886_0_1622052334694.png!128",
  },
  {
    userId: 588746280,
    userScore: 9140,
    nickName: "𝓒𝓵𝓸𝓾𝓭❼❼❼",
    gender: 1,
    userLevel: 11,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588746280_0_1620488174931.png!128",
  },
  {
    userId: 574786012,
    userScore: 9030,
    nickName: "𒆜₦Ї₦ℑ₳𒆜",
    gender: 1,
    userLevel: 11,
    actorLevel: 5,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/574786012_0_1621279773454.png!128",
  },
  {
    userId: 574219284,
    userScore: 7646,
    nickName: "😡ʜɪᴛʟᴇʀ😡",
    gender: 1,
    userLevel: 12,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/574219284_0_1609738926318.png!128",
  },
  {
    userId: 561990118,
    userScore: 7485,
    nickName: "💞sona Maher 💞",
    gender: 1,
    userLevel: 15,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561990118_0_1622521244515.png!128",
  },
];
var userRec6 = [
  {
    userId: 608072207,
    userScore: 546667,
    nickName: "💪𝕱𝖎𝖌𝖍𝖙𝖊𝖗",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
  },
  {
    userId: 608095101,
    userScore: 173000,
    nickName: "Jacksøn",
    gender: 1,
    userLevel: 13,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608095101_0_1622539046258.png!128",
  },
  {
    userId: 577255327,
    userScore: 162558,
    nickName: "wait a mint",
    gender: 1,
    userLevel: 24,
    actorLevel: 12,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/577255327_0_1622184005687.png!128",
  },
  {
    userId: 603075204,
    userScore: 107066,
    nickName: "Brilliant🧐",
    gender: 1,
    userLevel: 12,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603075204_0_1618960741409.png!128",
  },
  {
    userId: 585927674,
    userScore: 90170,
    nickName: "bcsaus",
    gender: 1,
    userLevel: 19,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585927674_0_1622292468993.jpg!128",
  },
  {
    userId: 595602206,
    userScore: 74490,
    nickName: "Angelina...😅😅",
    gender: 0,
    userLevel: 15,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/595602206_0_1621163383187.png!128",
  },
  {
    userId: 572265957,
    userScore: 65000,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
  {
    userId: 578646990,
    userScore: 60000,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 565714922,
    userScore: 53051,
    nickName: "ꜱʜᴀᴅᴏᴡ",
    gender: 1,
    userLevel: 14,
    actorLevel: 25,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/565714922_0_1593668418302.png!128",
  },
  {
    userId: 603290905,
    userScore: 38000,
    nickName: "ⓂⒺⓇⒸⓎ",
    gender: 1,
    userLevel: 23,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/603290905_0_1614086935112.jpg!128",
  },
  {
    userId: 574219284,
    userScore: 37282,
    nickName: "😡ʜɪᴛʟᴇʀ😡",
    gender: 1,
    userLevel: 12,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/574219284_0_1609738926318.png!128",
  },
  {
    userId: 593519105,
    userScore: 34800,
    nickName: "inglish klr",
    gender: 1,
    userLevel: 14,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/593519105_0_1620796168550.jpg!128",
  },
  {
    userId: 585775664,
    userScore: 29126,
    nickName: "@AUGGIE",
    gender: 1,
    userLevel: 19,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585775664_0_1609522951373.png!128",
  },
  {
    userId: 567157229,
    userScore: 28021,
    nickName: "🦂Beelzebub🦅",
    gender: 1,
    userLevel: 18,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/567157229_0_1622313463667.png!128",
  },
  {
    userId: 586247406,
    userScore: 27176,
    nickName: "Mini Trivedi",
    gender: 0,
    userLevel: 11,
    actorLevel: 19,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586247406_0_1621696175355.png!128",
  },
  {
    userId: 581032855,
    userScore: 25000,
    nickName: "khan ji dy",
    gender: 1,
    userLevel: 17,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/581032855_0_1620388097038.png!128",
  },
  {
    userId: 561557524,
    userScore: 23168,
    nickName: "Golu ji .......",
    gender: 1,
    userLevel: 20,
    actorLevel: 15,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561557524_0_1621930378310.png!128",
  },
  {
    userId: 587967473,
    userScore: 23070,
    nickName: "vicks 2222",
    gender: 0,
    userLevel: 13,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587967473_0_1606049677480.png!128",
  },
  {
    userId: 586560979,
    userScore: 16392,
    nickName: "🔫🦂 Khalnayak 🦂🔫",
    gender: 1,
    userLevel: 15,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586560979_0_1621178735676.png!128",
  },
  {
    userId: 566296398,
    userScore: 15348,
    nickName: "➳ᴹᴿ᭄NawaBzada◉●",
    gender: 1,
    userLevel: 13,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/566296398_0_1618494458685.png!128",
  },
];
var userRec7 = [
  {
    userId: 592178854,
    userScore: 1980000,
    nickName: "DON IS BACK 786",
    gender: 1,
    userLevel: 57,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
  },
  {
    userId: 594260931,
    userScore: 775230,
    nickName: "🔥🔥Thor🔥🔥",
    gender: 1,
    userLevel: 22,
    actorLevel: 16,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/594260931_0_1620227858102.png!128",
  },
  {
    userId: 602208033,
    userScore: 244886,
    nickName: "Whisky Samba !!",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/602208033_0_1618808197043.png!128",
  },
  {
    userId: 564841603,
    userScore: 143380,
    nickName: "<~Đ𝔸Ř𝕂💗ŠH𝔸Đ𝕆₩~>",
    gender: 1,
    userLevel: 17,
    actorLevel: 5,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/564841603_0_1614006213643.png!128",
  },
  {
    userId: 588806873,
    userScore: 103644,
    nickName: "😡Ra1😡",
    gender: 1,
    userLevel: 22,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588806873_0_1621713976138.png!128",
  },
  {
    userId: 559300746,
    userScore: 82000,
    nickName: "🖤🅺🅰🆄🆁🅻🅾🆅🅴🖤",
    gender: 1,
    userLevel: 19,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/559300746_0_1615126013677.png!128",
  },
  {
    userId: 587133201,
    userScore: 70414,
    nickName: "🦇BLACKENED 🆔🦇",
    gender: 1,
    userLevel: 20,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/587133201_0_1622739348897.jpg!128",
  },
  {
    userId: 557536157,
    userScore: 67314,
    nickName: "⚕  CODE  'X'  ⚕️",
    gender: 1,
    userLevel: 15,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/557536157_0_1617891699607.png!128",
  },
  {
    userId: 550754721,
    userScore: 57000,
    nickName: "🇵🇰Tanveer Babu🇵🇰",
    gender: 1,
    userLevel: 11,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/550754721_0_1620325729104.png!128",
  },
  {
    userId: 608072207,
    userScore: 50000,
    nickName: "💪𝕱𝖎𝖌𝖍𝖙𝖊𝖗",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
  },
  {
    userId: 561534092,
    userScore: 44444,
    nickName: "BIP🤝AGENCY Hossain",
    gender: 1,
    userLevel: 21,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561534092_0_1620894452588.png!128",
  },
  {
    userId: 584759852,
    userScore: 41603,
    nickName: "🅾️ye🎤Talk",
    gender: 1,
    userLevel: 14,
    actorLevel: 5,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/584759852_0_1599712849687.png!128",
  },
  {
    userId: 582650670,
    userScore: 40298,
    nickName: "😡Ra1😡1",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/582650670_0_1621742425996.png!128",
  },
  {
    userId: 561664542,
    userScore: 28026,
    nickName: "MK🧐🧐",
    gender: 1,
    userLevel: 27,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561664542_0_1602527187092.png!128",
  },
  {
    userId: 553052600,
    userScore: 24982,
    nickName: "฿ⱠØØĐ ₴ⱧØ₮",
    gender: 1,
    userLevel: 7,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/553052600_0_1606425747815.png!128",
  },
  {
    userId: 560791748,
    userScore: 21000,
    nickName: "        ",
    gender: 1,
    userLevel: 23,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560791748_0_1605809286454.png!128",
  },
  {
    userId: 552605709,
    userScore: 17720,
    nickName: "ⒶⓎⒶⓃ",
    gender: 1,
    userLevel: 14,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/552605709_0_1622704649256.png!128",
  },
  {
    userId: 561160775,
    userScore: 17162,
    nickName: "Captain Sparrow™",
    gender: 1,
    userLevel: 17,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561160775_0_1594718311105.jpeg!128",
  },
  {
    userId: 589501028,
    userScore: 15960,
    nickName: "😡Ra1😡2",
    gender: 1,
    userLevel: 16,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/589501028_0_1621746062946.png!128",
  },
  {
    userId: 566136196,
    userScore: 15018,
    nickName: "R🖊A🖊Z🖊A",
    gender: 1,
    userLevel: 14,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/566136196_0_1621710790460.png!128",
  },
];
var userRec8 = [
  {
    userId: 592178854,
    userScore: 272322,
    nickName: "DON IS BACK 786",
    gender: 1,
    userLevel: 57,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/592178854_0_1608047006907.png!128",
  },
  {
    userId: 581032855,
    userScore: 269002,
    nickName: "khan ji dy",
    gender: 1,
    userLevel: 17,
    actorLevel: 4,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/581032855_0_1620388097038.png!128",
  },
  {
    userId: 588606909,
    userScore: 247592,
    nickName: "KING NAGA YOYO",
    gender: 1,
    userLevel: 15,
    actorLevel: 19,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588606909_0_1621493657534.png!128",
  },
  {
    userId: 561522287,
    userScore: 85500,
    nickName: "👑❤HEART👑KING 🖤👑",
    gender: 1,
    userLevel: 15,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/561522287_0_1607705467204.png!128",
  },
  {
    userId: 608072207,
    userScore: 60000,
    nickName: "💪𝕱𝖎𝖌𝖍𝖙𝖊𝖗",
    gender: 1,
    userLevel: 17,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608072207_0_1622260549562.png!128",
  },
  {
    userId: 565714922,
    userScore: 56051,
    nickName: "ꜱʜᴀᴅᴏᴡ",
    gender: 1,
    userLevel: 14,
    actorLevel: 25,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/565714922_0_1593668418302.png!128",
  },
  {
    userId: 578646990,
    userScore: 50000,
    nickName: "🤍 work hard 💪",
    gender: 1,
    userLevel: 22,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/578646990_0_1619484959167.png!128",
  },
  {
    userId: 572265957,
    userScore: 50000,
    nickName: "voiD 🗿",
    gender: 1,
    userLevel: 55,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/572265957_0_1622668987910.jpg!128",
  },
  {
    userId: 560417292,
    userScore: 49174,
    nickName: "💞মা আমার মা💞",
    gender: 1,
    userLevel: 23,
    actorLevel: 9,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/560417292_0_1621615655199.png!128",
  },
  {
    userId: 608211633,
    userScore: 28262,
    nickName: "Dost👍",
    gender: 1,
    userLevel: 13,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/608211633_0_1621690237810.png!128",
  },
  {
    userId: 586271017,
    userScore: 25532,
    nickName: "༒͢♥⃝⍣𓄂ANIL RANA",
    gender: 1,
    userLevel: 18,
    actorLevel: 7,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586271017_0_1593948817220.png!128",
  },
  {
    userId: 551023816,
    userScore: 22600,
    nickName: "krish4u🤩🤩",
    gender: 1,
    userLevel: 20,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/551023816_0_1606929944645.png!128",
  },
  {
    userId: 606334567,
    userScore: 17660,
    nickName: "🔥WehlA🔥.........👻",
    gender: 1,
    userLevel: 8,
    actorLevel: 6,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/606334567_0_1617304738223.png!128",
  },
  {
    userId: 600344351,
    userScore: 15434,
    nickName: "𝙉𝙊 𝙉𝘼𝙈𝙀",
    gender: 1,
    userLevel: 14,
    actorLevel: 11,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/600344351_0_1621437871597.png!128",
  },
  {
    userId: 579051993,
    userScore: 10598,
    nickName: "#️⃣#️⃣  SAM  #️⃣#️⃣",
    gender: 1,
    userLevel: 10,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/579051993_0_1588930778671.png!128",
  },
  {
    userId: 601691562,
    userScore: 10000,
    nickName: "GRACE ❤️",
    gender: 1,
    userLevel: 20,
    actorLevel: 1,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/601691562_0_1619814442301.png!128",
  },
  {
    userId: 585948677,
    userScore: 6510,
    nickName: "king naga yoyo",
    gender: 1,
    userLevel: 9,
    actorLevel: 17,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/585948677_0_1619796197447.png!128",
  },
  {
    userId: 601588938,
    userScore: 6349,
    nickName: "☠️🦂ASHU🦂☠️",
    gender: 1,
    userLevel: 10,
    actorLevel: 2,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/601588938_0_1621438993152.png!128",
  },
  {
    userId: 588619866,
    userScore: 5000,
    nickName: "♚ 🅨🅤🅖 ♚",
    gender: 1,
    userLevel: 16,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/588619866_0_1601847640757.png!128",
  },
  {
    userId: 586690059,
    userScore: 5000,
    nickName: "💞Vihaan💗",
    gender: 1,
    userLevel: 14,
    actorLevel: 3,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/586690059_0_1621855974229.png!128",
  },
];
function userRankPopulate(userRec, teamIndex) {
  if (userRec != 0) {
    var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var talentlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var imgPath = "http://kkimg.kktv9.com";
    var q = 1;
    var g = 5;
    var p;
    var user_img;
    var res3;

    $("#userRecTable").html("");
    $("#userRecTable1").html("");
    for (
      k = 0;
      k <
      (userRec.data.list[0].teamContributionDTOList[0].teamContributeUserDTOList
        .length > 10
        ? 10
        : userRec.data.list[0].teamContributionDTOList[0]
            .teamContributeUserDTOList.length);
      k++
    ) {
      var curData =
        userRec.data.list[0].teamContributionDTOList[0]
          .teamContributeUserDTOList[k];
      var userId = curData.userId;
      var profile_img = "";
      if (k < 3) {
        if (curData.userPortrait != "") {
          profile_img =
            '<img src="' + curData.userPortrait + '" class="user-img-top">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img-top">';
        }
      } else {
        if (curData.userPortrait != "") {
          profile_img =
            '<img src="' + curData.userPortrait + '" class="user-img">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img">';
        }
      }
      var nickName = curData.nickName;
      var userLevel = curData.userLevel;
      var userScore =
        '<img class="tiarimg" src="img/score.png"> ' +
        curData.totalTickets +
        (curData.totalTickets > 1 ? " Scores" : " Score");
      var rec = "";
      if (k == 0) {
        // rec = '<tr class="border-bottom" id="rec_id_' + gifterdata[k].userId + '"><td>' + profile_img + '</td><td><a href="' + kk_tv_url + '' + gifterdata[k].userId + '" target="_blank">' + user_img + '</a></td><td>' + gifterdata[k].nickName + '<br>  <p><img class="levelimg" src="' + talentlevel + gifterdata[k].userLevel + '.png"></p></td><td><span> <img class="tiarimg" src="img/coin.png">' + (teamScore != undefined ? teamScore.toLocaleString() : 0) + '</span></td></tr>'
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          convertToDot(nickName) +
          '</div><div><p><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else if (k == 1) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          convertToDot(nickName) +
          '</div><div><p><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else if (k == 2) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          convertToDot(nickName) +
          '</div><div><p><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else if (k < 7) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          convertToDot(nickName) +
          '</div><div><p><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          convertToDot(nickName) +
          '</div><div><p><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      }

      if (k < 7) {
        $("#userRecTable").append(rec);
        $("#seeMoreUser").hide();
      } else {
        $("#seeMoreUser").show();
        $("#userRecTable1").append(rec);
      }
    }
  } else {
    $("#userRecTable").html('<div class="nodata">No record found</div>');
  }
  $("#userRankFlag").attr("src", "img/team/" + teamIndex + ".png");
  userRanking();
}

// userRank Weekly
var userRecWeekly = [
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank weekly",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045 Useer rank",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
  {
    userId: 555000045,
    userScore: 1001150,
    nickName: "test045",
    gender: 1,
    userLevel: 17,
    actorLevel: 28,
    liveType: 0,
    portrait: "",
  },
  {
    userId: 555000004,
    userScore: 940858,
    nickName: "test04图录取我哦我一句剧透我一句路",
    gender: 0,
    userLevel: 13,
    actorLevel: 23,
    liveType: 0,
    portrait: "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128",
  },
];
function userRankWeekly(local, teamIndex, isTotal, userRank) {
  var uri = "params[]";
  //console.log("userRank"+userRank)
  // console.log(host+'/api/activity/eventShow/getModulePushRankV3?eventDesc=20220506_car&rankType=5&rankIndex=1&pageIndex=1&pageCount=20&'+encodeURIComponent(uri)+'='+teamIndex+'&'+encodeURIComponent(uri)+'='+weeklyIndex);

  if (isTotal == 1) {
    var weeklyIndex = $("#weeklyIndex").val();
  } else if (isTotal == 2) {
    var weeklyIndex = $("#weeklyIndex").val();
    weeklyIndex = parseInt(weeklyIndex) - 1;
  } else {
    var weeklyIndex = 0;
  }
  console.log(
    "yh bhai" +
      host +
      "/api/activity/cricket/getTeamContributionInfo?weekIndex=" +
      weeklyIndex +
      "&teamIndex=" +
      teamIndex +
      "&pageNum=1&pageSize=10"
  );

  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/cricket/getTeamContributionInfo?weekIndex=" +
        weeklyIndex +
        "&teamIndex=" +
        teamIndex +
        "&pageNum=1&pageSize=20",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        $("#img_bulk_anim_1").attr("src", "img/bx_loader.gif");
        //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
        $("#img_bulk_anim_1").removeAttr("src");
      },
      success: function (data) {
        userRecWeekly = data;
        userRankPopulateWeekly(userRecWeekly, teamIndex, userRank, isTotal);
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    userRankPopulateWeekly(userRecWeekly, teamIndex);
  }
}
function userRankPopulateWeekly(userRec, teamIndex, userRank, isTotal) {
  if (userRec != 0) {
    var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var imgPath = "http://kkimg.kktv9.com";
    var q = 1;
    var g = 5;
    var p;
    var user_img;
    var weeklyPotVal = Number($("#potWeeklyValue").text());
    var weeklyPotValPrev = Number($("#potWeeklyValuePrevious").text());
    var totalPotVal = Number($("#potOverallValue").text());
    //console.log(weeklyPotVal)

    var totalfirstVal = 0;
    var res3;
    var firstVal = 0;
    //console.log("userRec.data.list[0].teamContributionDTOList[0].teamContributeUserDTOList.length"+userRec.data.list[0].teamContributionDTOList[0].teamContributeUserDTOList.length)
    $("#userRecTable").html("");
    $("#userRecTable1").html("");
    for (
      k = 0;
      k <
      (userRec.data.list[0].teamContributionDTOList[0].teamContributeUserDTOList
        .length > 20
        ? 20
        : userRec.data.list[0].teamContributionDTOList[0]
            .teamContributeUserDTOList.length);
      k++
    ) {
      if (userRank == 0 && isTotal == 1) {
        if (k == 0) {
          firstVal = Math.floor((weeklyPotVal * 25) / 100);
        } else if (k == 1) {
          firstVal = Math.floor((weeklyPotVal * 15) / 100);
        } else if (k == 2) {
          firstVal = Math.floor((weeklyPotVal * 10) / 100);
        }
        //25 weekly     //15 weekly     //10 weekly
      } else if (userRank == 1 && isTotal == 1) {
        //15 weekly
        if (k == 0) {
          firstVal = Math.floor((weeklyPotVal * 15) / 100);
        } else if (k == 1) {
          firstVal = Math.floor((weeklyPotVal * 4) / 100);
        }
      } else if (userRank == 2 && isTotal == 1) {
        //7 weekly
        if (k == 0) {
          firstVal = Math.floor((weeklyPotVal * 7) / 100);
        } else if (k == 1) {
          firstVal = Math.floor((weeklyPotVal * 4) / 100);
        }
      } else if (userRank > 2 && userRank < 10 && isTotal == 1) {
        //4 weekly
        if (k == 0) {
          firstVal = Math.floor((weeklyPotVal * 4) / 100);
        }
      } else if (userRank == 0 && isTotal == 2) {
        if (k == 0) {
          firstValPrev = Math.floor((weeklyPotValPrev * 25) / 100);
        } else if (k == 1) {
          firstValPrev = Math.floor((weeklyPotValPrev * 15) / 100);
        } else if (k == 2) {
          firstValPrev = Math.floor((weeklyPotValPrev * 10) / 100);
        }
        //25 weekly     //15 weekly     //10 weekly
      } else if (userRank == 1 && isTotal == 2) {
        //15 weekly
        if (k == 0) {
          firstValPrev = Math.floor((weeklyPotValPrev * 15) / 100);
        } else if (k == 1) {
          firstValPrev = Math.floor((weeklyPotValPrev * 4) / 100);
        }
      } else if (userRank == 2 && isTotal == 2) {
        //7 weekly
        if (k == 0) {
          firstValPrev = Math.floor((weeklyPotValPrev * 7) / 100);
        } else if (k == 1) {
          firstValPrev = Math.floor((weeklyPotValPrev * 4) / 100);
        }
      } else if (userRank > 2 && userRank < 10 && isTotal == 2) {
        //4 weekly
        if (k == 0) {
          firstValPrev = Math.floor((weeklyPotValPrev * 4) / 100);
        }
      } else if (userRank > 2 && userRank < 10 && isTotal == 2) {
        //4 weekly
        if (k == 0) {
          firstValPrev = Math.floor((weeklyPotValPrev * 4) / 100);
        }
      } else if (userRank == 0 && isTotal == 0) {
        if (k == 0) {
          totalfirstVal = Math.floor((totalPotVal * 30) / 100);
        } else if (k == 1) {
          totalfirstVal = Math.floor((totalPotVal * 20) / 100);
        } else if (k == 2) {
          totalfirstVal = Math.floor((totalPotVal * 10) / 100);
        }
        //25 weekly     //15 weekly     //10 weekly
      } else if (userRank == 1 && isTotal == 0) {
        if (k == 0) {
          totalfirstVal = Math.floor((totalPotVal * 20) / 100);
        } else if (k == 1) {
          totalfirstVal = Math.floor((totalPotVal * 15) / 100);
        } else if (k == 2) {
          totalfirstVal = Math.floor((totalPotVal * 5) / 100);
        }
        //25 weekly     //15 weekly     //10 weekly
      }
      console.log("totalfirstVal" + totalPotVal);

      var curData =
        userRec.data.list[0].teamContributionDTOList[0]
          .teamContributeUserDTOList[k];
      var userId = curData.userId;
      var profile_img = "";
      if (k < 3) {
        if (curData.userPortrait != "") {
          profile_img =
            '<img src="' +
            curData.userPortrait +
            '" class="user-img-top" onerror="imgError(this)">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img-top">';
        }
      } else {
        if (curData.userPortrait != "") {
          profile_img =
            '<img src="' +
            curData.userPortrait +
            '" class="user-img" onerror="imgError(this)">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img">';
        }
      }

      var nickName = curData.nickName;
      var userLevel = curData.userLevel;
      var userScore =
        '<img class="tiarimg" src="img/score.png"> ' +
        curData.totalTickets +
        (curData.totalTickets > 1 ? " Scores" : " Score");
      var rec = "";
      if (k == 0) {
        // rec = '<tr class="border-bottom" id="rec_id_' + gifterdata[k].userId + '"><td>' + profile_img + '</td><td><a href="' + kk_tv_url + '' + gifterdata[k].userId + '" target="_blank">' + user_img + '</a></td><td>' + gifterdata[k].nickName + '<br>  <p><img class="levelimg" src="' + talentlevel + gifterdata[k].userLevel + '.png"></p></td><td><span> <img class="tiarimg" src="img/coin.png">' + (teamScore != undefined ? teamScore.toLocaleString() : 0) + '</span></td></tr>'
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nicknext">' +
          convertToDot(nickName) +
          '<p class="ulev"><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="estVal">' +
          (isTotal == 1
            ? 'Est Rewards:<br> <img class="tiarimg" src="img/coin.png">' +
              firstVal
            : isTotal == 2
            ? ' Rewards won:<br> <img class="tiarimg" src="img/coin.png">' +
              firstValPrev
            : isTotal == 0 && userRank < 2
            ? "Est Rewards:<br>" + totalfirstVal
            : "") +
          '</div><div class="tscore">' +
          userScore +
          "   </div></div>";
      } else if (k == 1) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nicknext">' +
          convertToDot(nickName) +
          '<p class="ulev"><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="estVal">' +
          (userRank < 3 && isTotal == 1
            ? 'Est Rewards:<br> <img class="tiarimg" src="img/coin.png">' +
              firstVal
            : userRank < 3 && isTotal == 2
            ? ' Rewards won:<br> <img class="tiarimg" src="img/coin.png">' +
              firstValPrev
            : isTotal == 0 && userRank < 2
            ? "Est Rewards:<br>" + totalfirstVal
            : "") +
          '</div><div  class="tscore">' +
          userScore +
          "  </div></div>";
      } else if (k == 2) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nicknext">' +
          convertToDot(nickName) +
          '<p class="ulev"><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div class="estVal">' +
          (userRank < 1 && isTotal == 1
            ? 'Est Rewards:<br> <img class="tiarimg" src="img/coin.png">' +
              firstVal
            : userRank < 1 && isTotal == 2
            ? ' Rewards won:<br> <img class="tiarimg" src="img/coin.png">' +
              firstValPrev
            : isTotal == 0 && userRank < 2
            ? "Est Rewards:<br>" + totalfirstVal
            : "") +
          '</div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else if (k < 10) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nicknext">' +
          convertToDot(nickName) +
          '<p class="ulev"><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div></div><div class="tscore">' +
          userScore +
          "  </div></div>";
      } else {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nicknext">' +
          convertToDot(nickName) +
          '<p class="ulev"><img class="levelimg" src="' +
          userlevel +
          userLevel +
          '.png"></p></div><div></div><div class="tscore">' +
          userScore +
          " </div></div>";
      }

      if (k < 10) {
        $("#userRecTable").append(rec);
        $("#seeMoreUser").hide();
      } else {
        $("#seeMoreUser").show();
        $("#userRecTable1").append(rec);
      }
    }
  } else {
    $("#userRecTable").html('<div class="nodata">No record weeee found</div>');
  }
  $("#userRankFlag").attr("src", "img/team/" + teamIndex + ".png");
  userRanking();
}

function openProfile(id) {
  try {
    var href = "http://www.kktv1.com/m/?roomid=" + id + "";
    // showToast("Opening Squad page...");
    window.phone.goToActivityWeb("Cricket Primere League", href);
  } catch (_error) {
    console.error(_error);
    // showToast("Open Squad page error...");
    location.href = "http://www.kktv1.com/m/?roomid=" + id + "";
  }
}

function imgError(image) {
  image.onerror = "";
  image.src = "../common/img/kk_head_avatar_men.png";
  return true;
}

function getWinnerApi(local) {
  // const url = host +
  //       "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&pageIndex=1&pageCount=10&rankIndex=3&rankType=2";
  const url = `${host}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240109_rps&rankIndex=1&pageNum=1&pageSize=10`;
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url,
      cache: false,
      success: function (data) {
        // alert(JSON.stringify(data))
        winnerPopulate(data);
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    winnerPopulate(rankingData);
  }
}

function winnerPopulate(data) {
  $.each(data.data.list, function (key, value) {
    $("#topmarq").append(createMarquee(value, key));
  });
}

function createMarquee(data, index) {
  if (data.userScore > 100) {
    var html = '<div class="tickerTapeMain w100 marauto">';

    html += '<div class="colTwo tickerCol1  marauto">';
    html += "<div>";
    html += '<button onclick="openProfile(' + data.userId + ')" >';
    html +=
      '<img src="' +
      data.portrait +
      '" class="tickerUserImg" onerror="imgError(this)"/>';
    html += "</button>";
    html += "</div>";
    html += '<div class="mt1">';

    html += '<span class="nametop">' + data.userScore + " beans </span>";
    html += '<img src="../rewards/beanbag.png"  class="wv7 vmiddle " />';
    html += '<span class="nametop"> have been claimed by </span>';

    html +=
      '<span class="nametop">' +
      data.nickname +
      " in SK Football Glory </span>";

    html += "</div>";

    html += "</div>";
    return html;
  }
}

//Previous week ranking

function getTeamWeeklyPrevious(local) {
  if (local == 0) {
    var weeklyIndex = parseInt($("#weeklyIndex").val());

    var weekPrev = weeklyIndex - 1;
    console.log(
      "weele:    " +
        host +
        "/api/activity/cricket/getTeamRankInfo?type=1&weekIndex=" +
        weekPrev +
        ""
    );
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/cricket/getTeamRankInfo?type=1&weekIndex=" +
        weekPrev +
        "",

      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
      },
      complete: function () {
        // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {
        //  alert(JSON.stringify(data))

        teamRankPopulateWeeklyPrev(data);

        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    teamRankPopulateWeekly(teamRankRecWeekly);
  }
}

function teamRankPopulateWeeklyPrev(teamRankRec) {
  //if()
  var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
  var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
  var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
  var imgPath = "http://kkimg.kktv9.com";
  var q = 1;
  var g = 5;
  $("#leagueRecTableWeeklyPre").append("");
  $("#leagueRecTableWeeklyPre").html("");
  var p;
  var user_img;
  var recBtnContent;
  var res3;
  if (teamRankRec.errorCode == 0) {
    for (i = 0; i < teamRankRec.data.length; i++) {
      // if(teamRankRec.data[i].weekIndex==weeklyIndex){

      for (
        k = 0;
        k <
        (teamRankRec.data[0].teamRankingInfoList.length > 10
          ? 10
          : teamRankRec.data[0].teamRankingInfoList.length);
        k++
      ) {
        var curData = "";
        var count = 0;
        curData = teamRankRec.data[0].teamRankingInfoList[k];

        var teamPortraitIndex = curData.teamIndex;
        var teamPortrait = "";
        var teamScore = curData.teamTickets;
        var avatarListNumber = curData.teamRankingUserDTOList.length;
        var avatarList = [];
        var recBtnContent = "";

        count =
          curData.teamRankingUserDTOList.length > 3
            ? 3
            : curData.teamRankingUserDTOList.length;

        recBtnContent = "";

        if (count == 0) {
          recBtnContent = "";
        } else if (count == 1) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 2) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg" style="visibility: hidden;">
                    <img src="img/wheel4.png" alt="">
                </div>
            </div>`;
        } else if (count == 3) {
          recBtnContent = ` <div class="col-3">
                <div class="silver-bg" >
                    <img src=${curData.teamRankingUserDTOList[1].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="gold-bg">
                    <img src=${curData.teamRankingUserDTOList[0].portrait} alt="" onerror="imgError(this);">
                </div>
                <div class="bronze-bg">
                    <img src=${curData.teamRankingUserDTOList[2].portrait}alt="" onerror="imgError(this);">
                </div>
            </div>`;
        }

        var teamName = "";

        var teamName = "";

        if (teamPortraitIndex == 1) {
          teamName = "Team warrior";
        } else if (teamPortraitIndex == 2) {
          teamName = "Divine soldiers";
        } else if (teamPortraitIndex == 3) {
          teamName = " Striking Shadow";
        } else if (teamPortraitIndex == 4) {
          teamName = "Galaxy Fighters";
        } else if (teamPortraitIndex == 5) {
          teamName = "United Enigma";
        } else if (teamPortraitIndex == 6) {
          teamName = "The turf's giants";
        } else if (teamPortraitIndex == 7) {
          teamName = "Defender's Dream";
        } else if (teamPortraitIndex == 8) {
          teamName = "Barrier Breakers";
        }

        var rec = "";
        // rec = '<div class="tableTre"><div><span class="user-info"><img src="img/team/wheel'+teamPortraitIndex+'.png" class="user-img"></span></div><div>'+teamName+'</div><div><button onclick="userRankWeekly(0,'+teamPortraitIndex+',1)" class="btn-center">'+recBtnContent+'</button></div><div class="tscore">'+teamScore+' Scores   </div></div>';
        rec =
          `<div class="leader-strip-bg">
            <div class="col-1">
                <img src="img/team/wheel${teamPortraitIndex}.png" alt="">
            </div>
            <div class="col-2">
               ${teamName}
            </div>
            <button onclick="userRankWeekly(0,${teamPortraitIndex},2,${k})" class="btn-center">
            ${recBtnContent}
           
            </button>
            <div class="col-4">
               ` +
          `<img class="tiarimg" src="img/score.png">` +
          ` ${teamScore} ` +
          (teamScore > 1 ? " Scores" : " Score") +
          `
            </div>
        </div>`;
        $("#leagueRecTableWeeklyPre").append(rec);
      }
    }
    // }
  } else {
    $("#leagueRecTableWeeklyPre").append(
      '<div class="nodata">No record found</div>'
    );
  }
}

function get_talent_recWeeklyPrevious(local) {
  var uri = "params[]";
  console.log(
    host +
      "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&rankType=5&rankIndex=1&pageIndex=1&pageCount=20&" +
      encodeURIComponent(uri) +
      "=" +
      prevIndex
  );

  //alert("weekly"+host+'/api/activity/eventShow/getEventCommonRank?eventDesc=20200919_league&rankType=5&userType=2&pageIndex=1&pageCount=20&'+encodeURIComponent(uri)+'='+weeklyIndex);
  if (local == 0) {
    $.ajax({
      type: "GET",
      async: true,
      url:
        host +
        "/api/activity/eventShow/getModulePushRankV3?eventDesc=20230805_footballGlory&rankType=5&rankIndex=1&pageIndex=1&pageCount=20&" +
        encodeURIComponent(uri) +
        "=" +
        prevIndex,
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.responseText);
        //   alert(thrownError);
      },
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener(
          "progress",
          function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
              console.log("Downloading contents.");
            }
          },
          false
        );
        return xhr;
      },
      beforeSend: function () {
        $("#img_bulk_anim_1").attr("src", "img/bx_loader.gif");
        //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
        $("#img_bulk_anim_1").removeAttr("src");
      },
      success: function (data) {
        talent_data_valWeeklyprev = data;
        get_talent_dataWeeklyPrev(talent_data_valWeeklyprev);
        console.log("Ajax success");
      },
      failure: function () {
        console.log("Ajax Failure.");
      },
    });
  } else {
    get_talent_dataWeeklyPrev(talent_data_valWeekly);
  }
}
function get_talent_dataWeeklyPrev(talent_data_val) {
  //alert(JSON.stringify(talent_data_val))
  if (talent_data_val != 0) {
    $("#talentRecTableWeeklyPrevious").html("");
    $("#talentRecTableWeeklyPreviousMore").html("");

    var userlevel = "http://www.streamkar.tv/streamkar/common/img/ulv/";
    var actorlvel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var talentlevel = "http://www.streamkar.tv/streamkar/common/img/tlv/";
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var imgPath = "http://kkimg.kktv9.com";
    var q = 1;
    var g = 5;
    var p;
    var rec = "";
    var user_img;
    var res3;
    for (
      k = 0;
      k < (talent_data_val.length > 20 ? 20 : talent_data_val.length);
      k++
    ) {
      var curData = talent_data_val[k];
      var userId = curData.userId;
      var profile_img = "";
      if (k < 3) {
        if (curData.portrait != "") {
          profile_img =
            '<img src="' + curData.portrait + '" class="user-img-top">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img-top">';
        }
      } else {
        if (curData.portrait != "") {
          profile_img = '<img src="' + curData.portrait + '" class="user-img">';
        } else {
          profile_img = '<img src="img/user.png" class="user-img">';
        }
      }

      var nickName = curData.nickName;
      var userLevel = curData.actorLevel;
      var userScore = curData.userScore;
      var rec = "";
      if (k == 0) {
        // rec = '<tr class="border-bottom" id="rec_id_' + gifterdata[k].userId + '"><td>' + profile_img + '</td><td><a href="' + kk_tv_url + '' + gifterdata[k].userId + '" target="_blank">' + user_img + '</a></td><td>' + gifterdata[k].nickName + '<br>  <p><img class="levelimg" src="' + talentlevel + gifterdata[k].userLevel + '.png"></p></td><td><span> <img class="tiarimg" src="img/coin.png">' + (teamScore != undefined ? teamScore.toLocaleString() : 0) + '</span></td></tr>'
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeeklyPrevious").append(rec);
      } else if (k == 1) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeeklyPrevious").append(rec);
      } else if (k == 2) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeeklyPrevious").append(rec);
      } else if (k < 10) {
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        $("#talentRecTableWeeklyPrevious").append(rec);
      } else {
        $("#talentRecTableWeeklyPrevious").show();
        rec =
          '<div class="tableTre"><div><a href="' +
          kk_tv_url +
          "" +
          userId +
          '" target="_blank" class="user-info">' +
          profile_img +
          '</a></div><div class="nick">' +
          nickName +
          '</div><div><p><img class="levelimg" src="' +
          talentlevel +
          userLevel +
          '.png"></p></div><div class="tscore"><img class="tiarimg" src="img/gems.png">' +
          userScore +
          " </div></div>";
        //  $('#talentRecTableWeeklyMore').append(rec);
      }
    }
  } else {
    $("#talentRecTableWeeklyPrevious").html(
      '<div class="nodata">No record found</div>'
    );
  }
}
