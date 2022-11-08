## 💚 Mocks Service Worker 
> MSW는 Mock Service Worker로 서비스 워커를 이용하여 API를 모킹하는 라이브러리이다.
네트워크 요청을 가로채도록 설계된 Service Worker API를 활용하기 때문에 목 사용 여부 관계 없이 동일한 애플리케이션 동작을 보장한다.
또한, 모킹을 위해 애플리케이션 코드를 변경할 필요가 없다는 것이 가장 큰 장점이다❗️

![image](https://user-images.githubusercontent.com/79238676/178445229-3830993e-877f-400a-8a49-af5d22056081.png)
Next.js + TypeScript + [MSW](https://mswjs.io/docs/getting-started/mocks/rest-api)

서버 API가 만들어지기 전에 테스트를 위한 API 라이브러리를 사용하였습니다 ✨

## ✅ 폴더 및 파일 설명 
<img width="409" alt="image" src="https://user-images.githubusercontent.com/79238676/178443838-9e4022a4-b62c-4ff9-a37f-afcf5d8b2701.png">

- types  👉  커뮤니티, 장난감, 유저 별로 필요한 타입들을 정의해놓은 폴더  , mocks에서 사용됩니다!
- mocks 👉 데이터, API 통신 핸들러 , browers에 제공, server 핸들러 를 모아둔 폴더

### 📁 mocks/data
- mocking 할 데이터 만들어 놓은 폴더 입니다.

### 📁 mocks/handlers
- 가짜 API를 구현하려면 요청이 들어왔을 때 임의의 응답을 해주는 `핸들러(handler)` 코드를 작성한 폴더입니다

### 📄 mocks/browsers.ts (브라우저 환경) or server.ts (노드 환경)
- `setupWorker() `함수를 사용해서 서비스 워커를 생성한다. 
- handlers에서 작성한 요청 핸들러 코드를 불러와서 그대로 setupWorker() 함수의 인자로 넘겨준다.


### ✨ MSW 실행하기
_app.tsx에 하단의 코드를 실행하여 mocking을 활성화한다.

```typescript
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}
```
👇 yarn dev 로 실행하면 Devtools > Console에 Mocking enabled가 나타난다.
<img width="416" alt="image" src="https://user-images.githubusercontent.com/79238676/178445662-f0a6ac15-153d-4cc0-8838-715dc7c14dd1.png">

---

## ✅ 사용법

👇 사용법은 아래와 같습니다
```typescript 
 const handler = () => {
    fetch('/auth/login/naver/happhee')
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

<Image
        src={ImgNaverLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={() => handler()}
      />
```
<img width="731" alt="image" src="https://user-images.githubusercontent.com/79238676/178446423-aaa54a33-7472-4da9-bb8f-8477b9caf480.png">

