function checkText() {
    var hamSays = document.getElementsByClassName("hamSays");
    var image = document.getElementById("image");
    var value = document.getElementById("console").value;
    console.log(value);

    if (value.includes("디저트") && value.includes("?")) {
        hamSays[0].innerHTML = "저는 팬케이크를 제일 좋아합니다!";
        image.src = "./static/images/쮝슨.png"
    }
    else if (value=="지금 뭐해?") {
        hamSays[0].innerHTML = "팬케이크를 먹고 있습니다..!!";
        image.src = "./static/images/쮝슨_맛있다.png"
    }
    else if (value.includes("안녕")) {
        if (value.includes("쮝슨")) {
            hamSays[0].innerHTML = "안녕하세요! 쮝슨입니다.";
        }
        else {
            alert("저는 쮝슨입니다..!!");
        }
    }
    else if (value=="") {
        alert("쮝슨에게 말을 걸어주세요!");
    }
    else if (value.includes("불") && value.includes("꺼")) {
        hamSays[0].innerHTML = "불을 껐습니다!";
        document.getElementById("body").style.backgroundColor = "#414141";
        image.src = "./static/images/쮝슨.png"
    }
    else if (value.includes("불") && value.includes("켜")) {
        hamSays[0].innerHTML = "불을 켰습니다!";
        document.getElementById("body").style.backgroundColor = "#ffeef6";
        image.src = "./static/images/쮝슨.png"
    }
}

function onClick() {
    checkText();
}

document.getElementById("button").addEventListener("click", onClick)