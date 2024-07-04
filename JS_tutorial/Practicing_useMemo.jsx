/* useMemo를 사용해서
showNumber, showText 를 메모이제이션하기*/

import React, { useMemo } from "react";
import "./styles.css";

const getNumber = (number) => {
  console.log("숫자가 변경되었습니다");
  return number;
};

const getText = (text) => {
  console.log("글자가 변동되었습니다");
  return text;
};

const ShowState = ({ number, text }) => {
  const showNumber = useMemo(() => getNumber(number), [number]);
  const showText = useMemo(() => getText(text), [text]);

  return (
    <div className="info-wrapper">
      {showNumber} <br />
      {showText}
    </div>
  );
};

export default ShowState;

/* 자 이렇게 하면 숫자가 바뀔 때는 숫자만 변동되고, 글자가 바뀔 때는 글자만 바뀜
이 파일 자체가 하나의 컴포넌트라서 부모에게서 받는 props( number이나 text 같은)가 변경되면 원래 이 모든 컴포넌트가 리렌더링 되어야 하는데, 이번에는 각각의 prop에 해당하는 값만 리렌더링한 것.
useCallback 이라는 함수도 있음. useMemo가 함수의 값만을 메모이제이션해서 반환한다면, useCallback은 전체 함수 자체를 메모이제이션하고 반환한다.
자식 컴포넌트에서 prop값들의 변화를 최적화시킬 때는 useMemo를, 부모 컴포넌트에서 prop 함수를 넘겨줘야 할 때는 useCallback을 사용하는 게 좋음.
animation이 작동하는 자식컴포넌트에 대해서는 필수적으로 최적화를 시켜주어야 한다 생각합니다. user interface 관점에서 최적화가 되어있지 않다면 animation의 끊김 현상이 발생할 수 있기 때문 */
