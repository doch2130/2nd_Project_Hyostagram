// 초기 상태 설정
const initState = {
  list: [],
};

// 액션 타입 정의하기
const POSTINIT = 'post/init';
const POSTADD = 'post/add';

// 액션 생성 함수 설정
// Payload = 컴포넌트에서 보내준 데이터를 전달하는 역할을 한다.
export function postInit(payload) {
  return {
    type: POSTINIT,
    payload,
  };
}

export function postAdd(payload) {
  return {
    type: POSTADD,
    payload,
  };
}

// reducer
export default function postData(state = initState, action) {
  // 리듀서에서는 state를 반환해줘야 하는데 현재 console.log()를 반환해서 경고창이 나온것이다.
  // console.log(action.payload);
  switch (action.type) {
    case POSTINIT:
      return {
        ...state,
        list: state.list.concat({
          number: action.payload.number,
          id: action.payload.id,
          content: action.payload.content,
          // filename: '/post/images/' + action.payload.filename,
          filename: `${process.env.REACT_APP_BACK_AXIOS}/static/${action.payload.filename}`,
          date: action.payload.date,
          category: action.payload.category,
        }),
      };
    case POSTADD:
      return {
        ...state,
        list: state.list.concat({
          // list: state.list.unshift({
          number: action.payload.number,
          id: action.payload.id,
          content: action.payload.content,
          // filename: '/post/images/' + action.payload.filename,
          filename: `${process.env.REACT_APP_BACK_AXIOS}/static/${action.payload.filename}`,
          date: action.payload.date,
          category: action.payload.category,
        }),
      };
    default:
      return state;
  }
}
