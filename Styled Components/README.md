![image](https://user-images.githubusercontent.com/79238676/198945567-4b8dc546-3eb5-4269-8796-07da960ab93a.png)

styled-components는 기본적으로 css-in-js 방식을 사용하고 있다.

# ✨ styled-components : CSS-in-JS
> CSS-in-JS는 스타일 정의를 css나 scss 파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법이다. 

기존 웹사이트는 HTML, CSS, JavaScript를 각자 별도의 파일로 두었는데
React나 Vue, Angluar와 같은 모던 자바스크립트 라이브러리가 인기를 끌고 컴포넌트 기반 개발 방법이 추세가 되고 있기에 styled-componets는 많이 사용되고 있다.

### 기존 방식(css, scss 등)의 단점
1. 전역 관리</br>
👉 css 파일은 전역적으로 관리해야 한다.</br>
👉 다른 디렉토리에서 작업을 하더라도 해당 파일이 또 다른 디렉토리에 영향을 미칠 수 있다.

2. 유지보수</br>
👉 전역적으로 관리한다는 것은 모듈화가 미흡하다는 의미이기 때문에, 작업이 크고 고도화 될수록 유지 보수에 더 많은 시간과 비용을 발생시킨다.

## CSS-in-JS의 장점
1. CSS의 컴포넌트화로 스타일시트의 파일을 유지보수 할 필요가 없다.</br>
👉 CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화한다.</br>
👉 즉, 모듈성이 높다.

2. CSS-in-JS는 Javascript 환경을 최대한 활용 할 수 있다.

3. JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유 할 수 있다. 예를 들어, React에서는 props를 활용한 조건부 스타일링이 가능하다.

4. 현재 사용중인 스타일만 DOM에 포함한다.

5. CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화의 장점이 있다.

## CSS-in-JS의 ❗️ 단점 ❗️
1. 학습 곡선이 더 커진다.</br>
👉 JS 내에서 CSS까지 모두 다뤄야 한다.

2. 별도의 라이브러리를 설치해야 하므로 번들 크기가 커진다.

3. 인터랙션한 페이지일 경우 CSS 파일을 따로 관리하는 방법에 비해 느린 성능을 보여줄 수 있다.

---
# ✨ styled-components vs emotion
styled-components를 대체할 라이브러리로는 CSS-in-JS의 방식을 사용하고 있는 **emotion**이 있다.

[npm-trends](https://npmtrends.com/emotion-vs-styled-components)를 보면 styled-components 보다 emotion이 더 인기있다.
![image](https://user-images.githubusercontent.com/79238676/198945454-e27f975e-8df3-4ca4-aa94-fbdfc86cd4bb.png)

그리고 용량도 emotion < styled-components 이기에 emotion이 더 가볍다. 
하지만, 성능에 있어서 둘은 유의미한 차이를 가지고 있지는 않다.

---

# 그렇다면 나는 어떤 스타일링을 선호하는가?
✅ 서버 사이드 렌더링 설정 시, emotion에서는 ```별도의 설정 없이``` 작동되는 반면, styled-components는 설정이 필요하는 번거로움이 있기에 emotion을 더 선호한다.

✅ ```컴포넌트 별 관리```가 용이한 스타일링을 선호한다.</br>
➡️ 웹 서비스를 개발할때, 기능별로, 컴포넌트 단위별로 개발을 진행하고 있기에, CSS도 같은 방식으로 개발되어야 내가 스스로 혼란이 생기지 않는 것같다.</br>
➡️ 협업을 할 때도 서로의 코드를 알아보고 수정하는 것ㅇ 수월하다.







