$(document).ready(function(){
  $("button.btn").click(function(event){
    var studentName=$("input#studentName").val();
    var registration=$("input#registration").val();
$(".studentName").append(studentName);
    $(".registration").append(registration);


    $("#sentence").show();

    event.preventDefault();
  });

$("button.test").click(function(){
  $(".container").show()
  event.preventDefault()
});

$("form#questions").submit(function(event){
  event.preventDefault();
  var question1 =parseInt($("input:radio[name=question1]:checked").val());
  var question2 =parseInt($("input:radio[name=question2]:checked").val());
  var question3 =parseInt($("input:radio[name=question3]:checked").val());
  var question4 =parseInt($("input:radio[name=question4]:checked").val());
  var question5 =parseInt($("input:radio[name=question5]:checked").val());
  var question6 =parseInt($("input:radio[name=question6]:checked").val());
  var question7 =parseInt($("input:radio[name=question7]:checked").val());
  var question8 =parseInt($("input:radio[name=question8]:checked").val());
  var question9 =parseInt($("input:radio[name=question9]:checked").val());
  var question10 =parseInt($("input:radio[name=question10]:checked").val());
     var total=(question1+question2+question3+question4+question5+question6+question7+question8+question9+question10);
     var percent=((total/50)*100);
       $("#percentage").text("You score is:" +percent+"%");
  });
});
