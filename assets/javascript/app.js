var input = []
var time = 30;
var right = 0
var interval;
var isRunning = false;
var answers = ['3', '2', '2', '1', '4', '1', '2', '2', '3', '2']

var question = [
    {
        writeQuestion: 'What does P.E stand for?',
        answers: [
            'a -<input type="radio" id="question1" name="question1" value="1"> Party Extreme <br>',
            'b -<input type="radio" id="question1" name="question1" value="2"> Phat Envy <br>',
            'c -<input type="radio" id="question1" name="question1" value="3"> Physical Education <br>',
            'd -<input type="radio" id="question1" name="question1" value="4"> Trick question P.E is a string of letters and ... and cannot stand in real life <br>'
        ].join("")


    },
    {
        writeQuestion: 'Skipping meals will help you lose weight',
        answers: [
            'a -<input type="radio" id="question2" name="question2" value="1"> True <br>',
            'b -<input type="radio" id="question2" name="question2" value="2"> False <br>'
            // 'c -<input type="radio" id="question2" name="question2" value="3"> some value <br>',
            // 'd -<input type="radio" id="question2" name="question2" value="4"> some value <br>'
        ].join("")


    },
    {
        writeQuestion: 'Physical Activity is the same as exercise',
        answers: [
            'a -<input type="radio" id="question3" name="question3" value="1"> True <br>',
            'b -<input type="radio" id="question3" name="question3" value="2"> False <br>'
            // 'c -<input type="radio" id="question3" name="question3" value="3"> some value <br>',
            // 'd -<input type="radio" id="question3" name="question3" value="4"> some value <br>'
        ].join("")

    }
    ,
    {
        writeQuestion: 'What are the 5 components of health related physical fitness?',
        answers: [
            'a -<input type="radio" id="question4" name="question4" value="1"> Cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition  <br>',
            'b -<input type="radio" id="question4" name="question4" value="2"> Aerobic capacity, endurance, flex arm hang, push ups, curl ups <br>',
            'c -<input type="radio" id="question4" name="question4" value="3"> Bench press, squats, bench press, squats, bench press <br>',
            'd -<input type="radio" id="question4" name="question4" value="4"> dead lift, dead lift, dead lift, dead lift ,dead lift <br>'
        ].join("")

    }
    ,
    {
        writeQuestion: 'What does BMI stand for?',
        answers: [
            'a -<input type="radio" id="question5" name="question5" value="1"> Basic Meal Infastructure <br>',
            'b -<input type="radio" id="question5" name="question5" value="2"> Basal Metabolic Inquiry <br>',
            'c -<input type="radio" id="question5" name="question5" value="3"> Body Measurement Instantly <br>',
            'd -<input type="radio" id="question5" name="question5" value="4"> Body Mass Index<br>'
        ].join("")

    }
    ,
    {
        writeQuestion: 'What does BMR stand for?',
        answers: [
            'a -<input type="radio" id="question6" name="question6" value="1"> Basal Metabolic Rate <br>',
            'b -<input type="radio" id="question6" name="question6" value="2"> Big Mac Ready <br>',
            'c -<input type="radio" id="question6" name="question6" value="3"> Body Measure Rate <br>',
            'd -<input type="radio" id="questio6n" name="question6" value="4"> Booty Me Right <br>'
        ].join("")

    }
    ,
    {
        writeQuestion: 'What does THZ stand for as it relates to fitness?',
        answers: [
            'a -<input type="radio" id="question7" name="question7" value="1"> Together Healthy Zones <br>',
            'b -<input type="radio" id="question7" name="question7" value="2"> Target Heartrate Zone <br>',
            'c -<input type="radio" id="question7" name="question7" value="3"> Tyla Hyla Zybra <br>',
            'd -<input type="radio" id="question7" name="question7" value="4"> Teeth Healthy Zebra <br>'
        ].join("")


    }
    ,
    {
        writeQuestion: 'How many calories equal one pound of fat?',
        answers: [
            'a -<input type="radio" id="question8" name="question8" value="1"> 3,000 calories <br>',
            'b -<input type="radio" id="question8" name="question8" value="2"> 3,250 calories <br>',
            'c -<input type="radio" id="question8" name="question8" value="3"> 10,000 calories <br>',
            'd -<input type="radio" id="question8" name="question8" value="4"> 3,500 calories <br>'
        ].join("")


    }
    ,
    {
        writeQuestion: 'How many calories do you need to burn in order to lose 5 pounds?',
        answers: [
            'a -<input type="radio" id="question9" name="question9" value="1">16,000 calories <br>',
            'b -<input type="radio" id="question9" name="question9" value="2"> 1,500 calories <br>',
            'c -<input type="radio" id="question9" name="question9" value="3"> 17,500 calories <br>',
            'd -<input type="radio" id="question9" name="question9" value="4"> 5,000 calories <br>'
        ].join("")


    }
    ,
    {
        writeQuestion: 'What does it mean to be Physically Literate??',
        answers: [
            'a -<input type="radio" id="question10" name="question10" value="1"> To be the best athlete in P.E. <br>',
            'b -<input type="radio" id="question10" name="question10" value="2"> To be motivated, have confidence, physical competence, knowledge, and understanding to value and to take responsiblilty for engagement in physical activities for life <br>',
            'c -<input type="radio" id="question10" name="question10" value="3"> To have self confidence and take risks in physical activity to learn and grow with basic fundamental skills <br>',
            'd -<input type="radio" id="question10" name="question10" value="4"> To be able to read in P.E. class <br>'
        ].join("")


    }
]



// var totalquestions = questions.length

$(document).ready(function () {
    // hide our submit and questions
    $('.gamebox').hide();
    $('#submit').hide();
    $('.scoreboard').hide();
    

    // start button hides itself shows submit and questions

    // when called rudces time until time runs out then runs gameover
    function countdown() {
        // console.log("hello from countdown")
        time--;
        $('#timer').text(time)
        if (time === 0) {
            return gameover();

        }
    };
    // game over hides our, questions hides the timer, shows the scoreboard with the reltaed info, hides submit, compares answers to correct answers
    function gameover() {
        // console.log("hello from gameover")
        clearInterval(interval);
        isrunning = false;
        $('#timer').hide();
        $('.gamebox').hide();
        $('.scoreboard').show();
        $('.scoreboard').append("<div id=showthis> Congradulations you got " + right + " out of " + answers.length + "!</div>");
        $('#submit').hide();
        // var radios = $('[name="question[i]"]').val();

        for (var i = 0; i < question.length; i++) {

                if ( question[i].answer[i].checked.val() === answers)
                    right++
            
        }
    };
    // starts game 
    function startgame() {
        // console.log("hello from startgame")
        if (!isRunning) {

            interval = setInterval(countdown, 1000);

            isRunning = true;


        }


    };
    $('#startbtn').on('click', function () {
        // console.log('click')
        $('#startbtn').hide();
        $('.gamebox').show();
        $('#submit').show();
        for (var i = 0; i < question.length - 1; i++)
            $('.questionbox').append('<p>' + question[i].writeQuestion + '</p> <br>' + '<p>' + question[i].answers + '</p> <br>');
        startgame();

    });
    $('#submit').on('click', function () {
        $('.gamebox').hide();
        $('#submit').hide();
        gameover();
        console.log(question[2].answer[2]);
    });
});