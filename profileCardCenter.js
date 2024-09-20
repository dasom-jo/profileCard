document.addEventListener("DOMContentLoaded", function () {
  // 컨테이너 역할을 하는 요소와 슬라이드를 통제하는 버튼
  const container = document.querySelector("#body1");
  const buttons = document.querySelectorAll(".other > button");

  // 버튼 클릭 시 동작 정의하기
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section-id");
      const section = document.getElementById(sectionId);
      if (section && container) {
        container.appendChild(section);
      }
    });
  });

  const confettiContainer = document.querySelector(".confetti-container");
  const numConfetti = 10; // 총 폭죽의 개수

  // 화면 중앙의 X 좌표와 Y 좌표
  const centerXOffset = -40; // 중앙의 X 좌표 오프셋 (좌우 조정)
  const centerYOffset = -100; // 중앙의 Y 좌표 오프셋 (상하 조정)
  const centerX = window.innerWidth / 2 + centerXOffset;
  const centerY = window.innerHeight / 2 + centerYOffset;

  const radius = 100; // 도넛의 외부 반지름
  const holeRadius = 200; // 도넛의 내부 반지름 (구멍의 반지름)

  function getRandomPositionOnDonut() {
    const angle = Math.random() * 2 * Math.PI; // 0에서 2π까지의 랜덤 각도
    const r = holeRadius + Math.random() * (radius - holeRadius); // 구멍을 제외한 도넛의 반지름 범위 내 랜덤 값
    const x = centerX + r * Math.cos(angle); // X 좌표 계산
    const y = centerY + r * Math.sin(angle); // Y 좌표 계산
    return { x, y };
  }

  function createConfetti() {
    // 폭죽 생성
    for (let i = 0; i < numConfetti; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti"; // 폭죽 스타일 클래스
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

      const { x, y } = getRandomPositionOnDonut();
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;

      // 애니메이션 시간 설정
      confetti.style.animationDuration = `${Math.random() * 3}s`; // 3초에서 6초 동안 애니메이션

      confettiContainer.appendChild(confetti);

      // 일정 시간 후 제거
      setTimeout(() => {
        confetti.remove();
      }, 3000); // 애니메이션 시간 후 삭제 (여기서는 최대 애니메이션 시간보다 약간 길게 설정)
    }
  }

  // 모든 이미지에 대해 클릭 이벤트 추가
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    let isConfettiActive = false;
    img.addEventListener("click", () => {
      if (isConfettiActive) {
        // 폭죽 애니메이션 중지
        clearInterval(confettiInterval);
        isConfettiActive = false;
        // 이미지 스타일 초기화
        img.style.transform = "scale(1)";
        img.style.border = "none";
      } else {
        // 이미지 스타일 변경
        img.style.transform = "scale(1.5)";
        img.style.border = "10px solid yellow";

        // F폭죽 애니메이션 시작
        createConfetti();
        confettiInterval = setInterval(createConfetti, 200); // 200ms마다 새로운 폭죽 생성
        isConfettiActive = true;
      }
    });
  });
});
