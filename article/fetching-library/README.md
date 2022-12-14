## ✨ 패칭 라이브러리에는 무엇이 있나? (react-query, swr, …)

React 자체가 데이터를 패칭해오거나 업데이트 하는 옵션을 제공하지 않기 때문에 원래 React 개발자들은 각자의 방식으로 http 통신 로직을 짜야 했다.
때문에 리액트에서 패칭 라이브러리를 사용하면 편리하게 데이터를 주고 받을 수 있다. 

내가 관심있어하는 패칭 라이브러리는 react-query, swr이다. 지난 앱잼때는 swr을 적용해보기도 했다.


## ✨  각각의 장점은 무엇인가? 어떻게 결정하는가?

### 🌈 React-query
> React Query는 서버에서 주기적으로 fetch하기에 이 데이터를 전역에서 사용하도록 만들어주고, Optimistic Update (데이터 변경을 요청 후 실제로 요청이 성공하기 전 미리 UI만 변경한 뒤, 서버의
응답에 따라 다시 롤백하거나 업데이트 된 상태로 UI를 놔두는 것) 기능도 제공한다.



### ❤️‍🔥 SWR
> Stale-While-Revaildate : React Hooks library for data fetching으로 데이터를 얻는 GET에 특화된 훅이다.

useSWR은 한 번의 fetch한 원격 상태의 데이터를 내부적으로 캐시한다.
즉, 다른 component에서 동일한 상태를 사용하고자 하는 경우에 서버로 재요청을 하는 것이 아니라 이전에 캐시했던 상태를 그대로 사용한다.



# 🤔 두 라이브러리는 어떤 차이가 있을까?

🌈 ```React Query```
리액트 애플리케이션에 서버 상태를 가져오고, 캐싱 / 동기화 / 업데이트를 쉽게 하도록 한다.

🔥 ```SWR```
먼저 캐시에서 데이터를 반환한후, 서버에서 데이터를 가져오는 요청을 수행하고, 마지막에 최신 데이터를 제공한다.


# ✨  패칭 라이브러리를 사용해야 하는 기준은?
우선, 패칭 라이브러리는
1. 수많은 전역상태가 API 통신과 엮여있어 비대해진 Store를 고민하고 있을 떄
2. API 통신 관련 코드를 보다 간단히 구현하고 싶을 때
3. Front-End에서 데이터 Caching 전략을 고민하고 있을 때

사용하는 것이 좋다


