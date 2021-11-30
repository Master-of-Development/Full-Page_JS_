const ele = document.getElementsByName('check');
const elbtn = document.querySelector(".checkBox > ul");
let page = document.querySelectorAll(".page");
let curIdx = 0;

// 버튼 클릭시 이벤트
elbtn.addEventListener("click", function(e){
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    if (e.target == btn1) {
        doScroll(0);
    } else if (e.target == btn2) {
        doScroll(1);
    } else if (e.target == btn3) {
        doScroll(2);
    } else if (e.target == btn4) {
        doScroll(3);
    } else if (e.target == btn5) {
        doScroll(4);
    }
})
// 스크롤시 방향 판단
window.addEventListener("wheel", function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
        curIdx++;
    }else {
        curIdx--;
    }
    doScroll(curIdx);
}, { passive: false });
// 호출시 스크롤 실행
function doScroll(sidx) {
    sidx = sidx < 0 ? 0 : sidx;
    // sidx < 0 일때 참이면 0, 거짓이면 sidx

    sidx = sidx > page.length - 1 ? page.length - 1 : sidx;
    // sidx > page.length - 1 일때 참이면 page.length - 1, 거짓이면 sidx

    curIdx = sidx;
    ele[curIdx].checked = true;

    page[curIdx].scrollIntoView({
        behavior: "smooth" // 전환애니메이션을 정의.
        // scrollIntoView()가 호출 된 요소가 사용자에게 표시되도록
        // 요소의 상위 컨테이너를 스크롤한다.
        // -> page 클래스의 상위 요소 pageBox가 스크롤 된다.
    });
}