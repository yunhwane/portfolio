// 전용 인쇄 레이아웃(/print)을 새 창에서 열고 브라우저 네이티브 인쇄로 출력한다.
// 사용자는 인쇄 대화상자에서 "PDF로 저장"을 고르면 된다.
// ponytail: 기존 html2pdf(html2canvas 래스터) 방식은 페이지 경계에서 글자가 잘리고
//           이미지 기반이라 흐릿했음 — 네이티브 인쇄가 @media print를 따라 벡터로 정확히 분할.
function printResume() {
  const w = window.open("print.html", "_blank");
  if (!w) return; // 팝업 차단 시
  w.addEventListener("load", () => {
    w.focus();
    w.print();
    w.addEventListener("afterprint", () => w.close());
  });
}
