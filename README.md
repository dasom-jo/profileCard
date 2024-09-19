<img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2745FF395267592212" alt="이미지 설명" height="500" />


# 파워퍼프걸 이미지카드

## 1. 프로젝트 설명

파워퍼프걸을 주제로 이미지카드를 만들었습니다. html과css, js을 학습하기 위해 진행하였습니다.

## 2. 주요 기능

### [기본]
- 이미지
- 이름 및 인사말
- 카드 이동 버튼

<table>
  <tr>
    <td>기본</td>
    <td><img src="https://github.com/user-attachments/assets/bd785555-56e8-44cd-bfcd-3dffd1d331b4" width="500" height="300" style="object-fit: cover;" /></td>
  </tr>
</table>

### [이동]
- 이동시 커진 이미지와 글씨가 작아지면서 제자리를 찾아감
<table>
  <tr>
    <td>이동</td>
    <td><img src="https://github.com/user-attachments/assets/3462ee69-0a9f-4ba0-9831-9725eace3146" width="500" height="300" style="object-fit: cover;" /></td>
  </tr>
</table>

### [이미지클릭이벤트]
- 이미지 클릭시 이미지가 커지며 폭죽이 터짐
<table>
  <tr>
    <td>이미지클릭릭</td>
    <td><img src="https://github.com/user-attachments/assets/59f638f5-456d-4340-91d1-a5a3bd1658a5" height="300" style="object-fit: cover;" /></td>
  </tr>
</table>


## 3. 개발 환경
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" /> <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A" alt="JavaScript Badge" /> 


## 4. 구조

```
C:.
├─img
└─profile
```

## 5. 트러블 슈팅
#### - 버튼이동
#### - 문제
버튼을 눌러 특정 카드를 이동시키려 했으나, 모든 버튼이 동일한 index 순서로 동작함. 즉, 어떤 버튼을 눌러도 동일한 결과를 출력하는 문제가 발생함.

#### - 원인
wrapper[index]를 사용하여 고정된 index 값을 참조하였기 때문에, 각 버튼이 개별적으로 구분되지 않고 동일한 동작을 수행하게 됨. 이로 인해 각 버튼이 고유의 카드를 이동시키지 않고 순서대로 동일한 카드를 제어하게 된 것.

#### - 해결
데이터 속성인 data-section-id를 활용하여 각 버튼과 카드에 고유의 아이디를 부여한 후, 버튼을 눌렀을 때 해당 버튼에 대응하는 카드를 이동시키도록 수정.


## 6. 개발 후기
지금까지 기술능력 향상을 위해 react 나 next.js등에 열중하다보니 오히려 프론트엔드의 가장 기본인 html과 css,js에대해 소홀함을 느꼈습니다. 그래서 이미지 카드를 만들면서 DOM을 이해하고 이벤트 핸들러를
다시금 써보면서  html과 css,js에대한 학습 능력을 향상시킬수있는 좋은 기회였습니다. 
