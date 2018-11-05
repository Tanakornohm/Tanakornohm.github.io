$(window).scroll(function() {scrollFunction()})
function scrollFunction() {
  let windscroll = $(window).scrollTop()
  if (windscroll >= 100) {
    $("nav").css("top", "0")
  } else {
    $("nav").css("top", "-50px")
  }
}
calculate()
function calculate(){
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

    $(".bmi h2").text(bmi.toFixed(3))
    $(".bmi p").text(bestforu(bmi))
    $(".bmr h2").text(bmr.toFixed(3))
    $(".tdee h2").text(tdee.toFixed(3))
}
function bestforu(bmi){
    if(bmi >= 40){
        return "โรคอ้วนขั้นสูงสุด"
    }else if(bmi >= 35){
        return "โรคอ้วนระดับ2 คุณเสี่ยงต่อการเกิดโรคที่มากับความอ้วน หากคุณมีเส้นรอบเอวมากกว่าเกณฑ์ปกติคุณจะเสี่ยงต่อการเกิดโรคสูง คุณต้องควบคุมอาหาร และออกกำลังกายอย่างจริงจัง"
    }else if(bmi >= 28.5){
        return "โรคอ้วนระดับ1 และหากคุณมีเส้นรอบเอวมากกว่า 90 ซม.(ชาย) 80 ซม.(หญิง) คุณจะมีโอกาศเกิดโรคความดัน เบาหวานสูง จำเป็นต้องควบคุมอาหาร และออกกำลังกาย"
    }else if(bmi >= 23.5){
        return "น้ำหนักเกิน หากคุณมีกรรมพันธ์เป็นโรคเบาหวานหรือไขมันในเลือดสูงต้องพยายามลดน้ำหนักให้ดัชนีมวลกายต่ำกว่า 23"
    }else if(bmi >= 18.5){
        return "น้ำหนักปกติ และมีปริมาณไขมันอยู่ในเกณฑ์ปกติ มักจะไม่ค่อยมีโรคร้าย อุบัติการณ์ของโรคเบาหวาน ความดันโลหิตสูงต่ำกว่าผู้ที่อ้วนกว่านี้"
    }else{
        return "น้ำหนักน้อยเกินไป ซึ่งอาจจะเกิดจากนักกีฬาที่ออกกำลังกายมาก และได้รับสารอาหารไม่เพียงพอ วิธีแก้ไขต้องรับประทานอาหารที่มีคุณภาพ และมีปริมาณพลังงานเพียงพอ และออกกำลังกายอย่างเหมาะสม"
    }
}