$(function () {

    const questionlist = {
        questions1:
        {
            correct: "red",
            wrong: "blue",
            alsowrong: "green"
        },
        questions2:
        {
            correct: "black",
            wrong: "white",
            alsowrong: "yellow"
        },
        questions3:
        {
            correct: "purple",
            wrong: "pink",
            alsowrong: "orange"
        }
    };

    correctanswers = 0;
    incorrectanswers = 0;

    function AnswerChecker() {
        if ($("#button").val(questionlist.questions1.correct)) {
            correctanswers++;

        }
        else {
            incorrectanswers++;
        }
    }

    function CongratulationsCard() {
        $(".card").style.display = "none";

    }

    function ShowCorrectAnswerCard() {

    }

    function ButtonFiller1() {
        $("#img").append(`<img style="width:50%" class="center" src="/Users/milesmoscara/bootcamp/TriviaGame/assets/images/red.jpg"/>`);
        $(".btn-danger").text(questionlist.questions1.correct);
        $(".btn-primary").text(questionlist.questions1.wrong);
        $(".btn-success").text(questionlist.questions1.alsowrong);
    }

    $("#add-movie").on("click", function (event) {


        function ButtonFiller2() {
            $("#img").append(`<img style="width:50%" class="center" src="/Users/milesmoscara/bootcamp/TriviaGame/assets/images/black.jpg"/>`);
            $(".btn-danger").text(questionlist.questions2.wrong);
            $(".btn-primary").text(questionlist.questions2.correct);
            $(".btn-success").text(questionlist.questions2.alsowrong);
        }

        function ButtonFiller3() {
            $("#img").append(`<img style="width:50%" class="center" src="/Users/milesmoscara/bootcamp/TriviaGame/assets/images/purple.jpg"/>`);
            $(".btn-danger").text(questionlist.questions3.alsowrong);
            $(".btn-primary").text(questionlist.questions3.wrong);
            $(".btn-success").text(questionlist.questions3.correct);
        }

        ButtonFiller1();
    });