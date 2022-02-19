# 박스풀 메인페이지 구현
패키지관리 yarn 사용
<code>yarn install</code>후에 <code>yarn start</code>로 실행

## 사용 라이브러리
프레임워크: React(hook type)
타입 관련: TypeScript
스타일 관련: styled-component
캐로셀 관련: slick-carousel
기타: eslint, prettier

## 작업과정
- 프론트엔드 프레임워크로 NextJS와 ReactJS중에 고민을 했으나, 결국 손에 더 익은 ReactJS를 선택하여 구현.

- 컴포넌트 구조는 아토믹디자인으로 구현. storybookJS로 랜더링 테스트를 하며 진행하려했으나 시간이 걸리기도 하고, 협업 과정이 없기 때문에 생략하였다. page와 component로 나누어서 진행했고, components는 atom, molcule, organism으로 나누었다. 아직 정확히 어떤 기준으로 나누어야할지 명확하지 않아 내 생각대로 나누었다.

- 타입관련은 proptypes와 typescript를 고민했지만, typescript에 좀더 익숙해지고 싶어 사용하였다.

- 스타일은 styled-component와 emotionJS중에서 고민했고, styled-component를 선택했지만, typescript지원과 용량이 더 작은 emotionJS를 앞으로 사용할 것 같다.

- 캐로셀 관련 라이브러리는 react-slick을 사용했다. 가장 유명한 라이브러리이고 반응형에 따른 아이템 갯수를 지정할 수 있어 선택하였다.

- 장소, 박스와 같은 고정된 값은 constants를 만들어 따로 관리하였다.

- input, 미디어쿼리 관련한 hook을 따로 만들어 관리하였다.

- 로그인에 관한 부분은 SQL이 능숙하지 않아 사용자의 아이디, 비밀번호를 세션스토리지에 저장하고, 로그인 여부를 로컬스토리지에서 boolean값으로 확인하였다. api를 통해 통신하는 것에 익숙해져있어서 어디에 저장해야할지 고민을 한 부분이였다.

- 페이지로 되어있던 로그인페이지를 모달을 이용하여 로그인 하게끔 하였다.
