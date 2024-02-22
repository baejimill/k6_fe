/* 함수 작성1
function handleClick(n) {//js는 함수를 직접 만들수 있다.
    //메시지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요" ;

     //메시지 영역 가져오기 2
    //  document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>` ;

}
*/
/*
함수선언 2 : 화살표 함수
상수는 const 변수는 let
*/
const handleClick = (n) => {
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>` ;

}