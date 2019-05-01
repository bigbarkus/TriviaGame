$(function () {


    const questionlist =
        [{
            question: "What color is this?",
            correct: "red",
            wrong: "blue",
            alsowrong: "green"
        },
        {
            question: "What color is this?",
            correct: "black",
            wrong: "white",
            alsowrong: "green"
        },
        {
            question: "What color is this?",
            correct: "purple",
            wrong: "pink",
            alsowrong: "orange"
        }];

    var clockRunning = false;

    function start() {
        if (!clockRunning) {
            time = 11;
            intervalId = setInterval(countdown, 1000);
            clockRunning = true;
        }

    }
    function stop() {
        clearInterval(intervalId);
        resettime();
    }

    function countdown() {
        time--;
        $(".card-title").text("Time:" + time);
        if (time === 0) {
            clearInterval(intervalId, 4000);
            Timeoutcard();
        }
    }
    function displayreset() {
        start();
        $(".jumbotron").hide();

    }
    function resettime() {
        setInterval(displayreset, 1000);
        clockRunning = false;
    }
    console.log(questionlist[0].correct);

    var count = 0;
    var incorrectanswers = 0;
    var correctanswers = 0;
    $(".btn-block").click(function () {
        count++;
        console.log(count);
        if (count === 1) {
            ButtonFiller2();
        }
        if (count === 2) {
            ButtonFiller3();
        }
        if (count === 3) {
            count = 0;
            TotalCard();
            incorrectanswers = 0;
            correctanswers = 0;
        }

        for (let i = 0; i < questionlist.length; i++) {
            if ($(this).text() == questionlist[0].correct || questionlist[1].correct || questionlist[2].correct) {
                correctanswers++;
                CongratulationsCard();
                stop();
                return correctanswers;
            }
            else {
                incorrectanswers++;
                ShowCorrectAnswerCard();
                stop();
                return incorrectanswers;
            }

        }

    });

    function Timeoutcard() {
        $(".jumbotron").show();
        $(".jumbotron").text("Out of time!");
        $(".jumbotron").prepend("<br>");
        $(".jumbotron").prepend('<button type="button" id="buttonreset" class="btn btn-lg">Reset?</button>');
        $("#buttonreset").click(function () {
            resetgame();
        });

    }
    function TotalCard() {
        $("#endcard").show();
        $("#endcard").text("Right:" + correctanswers + "Wrong:" + incorrectanswers);
        $("#endcard").prepend('<button type="button" id="buttonreset2" class="btn btn-lg">Reset?</button>');
        $("#buttonreset2").click(function () {
            resetgame();
        });


    }

    function resetgame() {
        $("#endcard").hide();
        ButtonFiller1();
        start();
    }
    function CongratulationsCard() {
        $(".jumbotron").show();
        $(".jumbotron").text("Congratulations! " + correctanswers + " right so far.");

    }

    function ShowCorrectAnswerCard() {
        $(".jumbotron").show();
        $(".jumbotron").text("Wrong! Here's the right answer:");
        // for loop going through correct answers checking for which respective function and displaying
        $(".jumbotron").append(`<p>${questionlist[0].correct}</p>`);
    }

    function ButtonFiller1() {
        $("#img").html("<img src='assets/images/red.jpg' class='center' width='200px'/>");
        $("#question").text(questionlist[0].question)
        $(".btn-danger").text(questionlist[0].correct);
        $(".btn-primary").text(questionlist[0].wrong);
        $(".btn-success").text(questionlist[0].alsowrong);
    }


    function ButtonFiller2() {
        $("#img").html("<img src='assets/images/black.jpg' class='center' height='300px' width='200px'/>");
        $("#question").text(questionlist[1].question)
        $(".btn-danger").text(questionlist[1].wrong);
        $(".btn-primary").text(questionlist[1].correct);
        $(".btn-success").text(questionlist[1].alsowrong);
    }

    function ButtonFiller3() {
        $("#img").html(`<img style="width:50%" class="center" src="/Users/milesmoscara/bootcamp/TriviaGame/assets/images/purple.jpg"/>`);
        $("#question").text(questionlist[2].question)
        $(".btn-danger").text(questionlist[2].alsowrong);
        $(".btn-primary").text(questionlist[2].wrong);
        $(".btn-success").text(questionlist[2].correct);
    }
    $("#endcard").hide();
    $(".jumbotron").hide();
    $("#buttonstart").click(function () {
        start();
        $("#startcard").hide();

        ButtonFiller1();
    });

});