$(window).scroll(function() {scrollFunction()})
function scrollFunction() {
  let windscroll = $(window).scrollTop()
  if (windscroll >= 100) {
    $("nav").css("top", "0")
  } else {
    $("nav").css("top", "-50px")
  }
}
function calculate(){
    let age = parseInt($("#age").val())
    let height = parseInt($("#height").val())
    let weight = parseInt($("#weight").val())
    let activity = parseFloat($("#activity option:selected").attr('data-val'))
    let gender = $('input[name=gender]:checked').val()
    console.log("gender : "+gender);
    console.log("age : "+age);
    console.log("height : "+height);
    console.log("weight : "+weight);
    console.log("activity : "+activity);

    // calculate for bmr
    let bmr
    if(gender == "male"){
        bmr = 66 + (13.7*weight) + (5*height) - (6.8*age)
    }else{
        bmr = 665 + (9.6 * weight) + (1.8*height) - (4.7*age)
    }

    // calculate for bmi
    let bmi = weight / ((height/100)**2)

    // calculate for tdee
    let tdee = bmr * activity

    $(".bmi h2").text(bmi)
    $(".bmr h2").text(bmr)
    $(".tdee h2").text(tdee)
}