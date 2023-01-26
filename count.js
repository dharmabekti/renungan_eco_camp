$(document).ready(function () {
  $("#reload").hide();
  var countS = 7;
  var count;
  var clock = $(".timer").FlipClock(0, {
    countdown: true,
    clockFace: "MinuteCounter",
    autoStart: false,
  });

  var audio1 = new Audio("https://demo.neoproject.info/timer/assets/05.23.mp3");
  var audio2 = new Audio(
    "https://demo.neoproject.info/timer/assets/0.18-2.mp3"
  );
  var audio3 = new Audio("https://demo.neoproject.info/timer/assets/0.18.mp3");
  var audio4 = new Audio("https://demo.neoproject.info/timer/assets/0.37.mp3");
  var genta = new Audio("https://demo.neoproject.info/timer/assets/genta.mp3");
  var time1 = 316000;
  var time2 = time1 + 17000;
  var time3 = time2 + 20000;
  var time4 = time3 + 420000;
  var time5 = time4 + 19000;
  var time6 = time5 + 22000;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  $("#start").on("click", function () {
    $("#reload").show();
    $("#start").hide();
    var audio = new Audio("./assets/renungan.m4a");
    // Step 1
    audio.play();
    setTimeout(() => {
      clock.setTime(countS * 60);
      count = countS;
      clock.start();
    }, 350000);

    setTimeout(() => {
      $("#reload").hide();
      $("#start").show();
    }, 843000 + 3000);
  });

  // $("#start").on("click", async function () {
  //   $("#reload").show();
  //   $("#start").hide();
  //   // await play("https://demo.neoproject.info/timer/assets/0.18-2.mp3").then(
  //   //   function () {
  //   //     play("https://demo.neoproject.info/timer/assets/genta.mp3").then(
  //   //       function () {
  //   //         $("#reload").hide();
  //   //         $("#start").show();
  //   //       }
  //   //     );
  //   //   }
  //   // );

  //   // audio2.play();
  //   // if (audio2.currentTime <= 0 && audio2.ended) {
  //   //   genta.play();
  //   // }
  //   // sleep(17000)
  //   //   .then(() => genta.play())
  //   //   .then(() => sleep(20000))
  //   //   .then(() => {
  //   //     $("#reload").hide();
  //   //     $("#start").show();
  //   //   });
  // });

  function play(url) {
    return new Promise(function (resolve, reject) {
      // return a promise
      var audio = new Audio(); // create audio wo/ src
      audio.preload = "auto"; // intend to play through
      audio.autoplay = true; // autoplay when loaded
      audio.onerror = reject; // on error, reject
      audio.onended = resolve; // when done, resolve

      audio.src = url;
    });
  }

  function playSound(url) {
    var ourAudio = document.createElement("genta"); // Create a audio element using the DOM
    ourAudio.style.display = "none"; // Hide the audio element
    ourAudio.src = url; // Set resource to our URL
    ourAudio.autoplay = true; // Automatically play sound
    ourAudio.onended = function () {
      this.remove(); // Remove when played.
    };
    document.body.appendChild(ourAudio);
  }

  // $("#start").on("click", function () {
  //   $("#reload").show();
  //   $("#start").hide();
  //   // Step 1
  //   audio1.play();
  //   // Step 2
  //   setTimeout(() => {
  //     genta.play();
  //   }, time1);
  //   // Step 3
  //   setTimeout(() => {
  //     audio2.play();
  //   }, time2);
  //   // Step 4
  //   setTimeout(() => {
  //     clock.setTime(countS * 60);
  //     count = countS;
  //     clock.start();
  //   }, time3);
  //   // Step 5
  //   setTimeout(() => {
  //     audio3.play();
  //   }, time4);
  //   // Step 6
  //   setTimeout(() => {
  //     genta.play();
  //   }, time5);
  //   // Step 7
  //   setTimeout(() => {
  //     audio4.play();
  //   }, time6);
  //   setTimeout(() => {
  //     $("#reload").hide();
  //     $("#start").show();
  //   }, time6 + 3000);
  // });

  $("#reload").on("click", function () {
    window.location.reload();
  });
});
