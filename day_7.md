1. 클래스 제어 : DOM 요소의 클래스 목록에 접근할 수 있는 읽기 전용 속성
   classList.add() : 클래스 추가
   classList.remove() : 클래스 제거
   classList.contain() : 클래스 존재여부 확인 (반환값 : Boolean), 여러개의 클래스를 확인하는 경우 하나라도 일치하지 않으면 false 반환
   classList.toggle() : 클래스 토글, 클래스가 존재하면 제거하고 존재하지 않으면 추가

2. 요소의 크기/위치
   getBoundingClientRect() : 요소의 위치와 크기를 뷰포트(브라우저 창)를 기준으로 객체 형태로 반환 (top, bottom, left, right, x, y, width, height)
   => document.querySelector("").getBoundingClientRect()
   offsetLeft : 현재 요소의 왼쪽 위 모서리가 왼쪽으로 오프셋된 HTMLElement픽셀 수를 반환
   => document.getElementById("id이름").offsetLeft
   offsetTop : 현재 요소의 바깥쪽 테두리(여백 포함)부터 가장 가까운 위치에 있는 상위 요소 HTMLElement의 위쪽 패딩 가장자리까지의 거리를 픽셀(px)단위로 반환
   => document.getElementById("id이름").offsetTop

3. 속성 제어
   getAttribute : 요소 Element의 지정된 속성 값을 문자열로 반환 , 주어진 속성이 존재하지 않으면 null 반환
   => getAttribute(attributeName)
   setAttribute : 지정된 Element요소의 속성 값을 설정 , 속성이 이미 존재하면 값이 업데이트되고, 그렇지 않으면 지정된 이름과 값으로 새 속성이 추가됨
   => setAttribute(name, value)

4. dataset 으로 접근하기

-   HTML 태그에 "data-"로 시작하는 속성 지정하기 (사용자 지정 속성)
    => <p id="blog" data-name="mine-it-record" data-columns="3" data-index-number="123"></p>
-   Javascript에서 dom을 선택 후 dataset 속성을 이용해 접근하기
    속성에서 대시(-)로 표현된 것들은 amelCase 변환하여 가져와야 함
    => const blog = document.getElementById('blog');
    blog.dataset // {name: 'mine-it-record', columns: '3', indexNumber: '123'} 객체 형식으로 가져와짐
    blog.dataset.indexNumber // '123'
-   CSS에서 접근하기
    => p[data-colums= '3'] { width : 200px; }
