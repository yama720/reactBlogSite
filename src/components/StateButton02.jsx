import { useState } from 'react';
import badhand01 from './../assets/images/bad01.svg';
import badhand02 from './../assets/images/bad02.svg';

export default function StateButton02({ init = 0 }) {
  // バッドしたかどうか(true/false)
  const [bad, setBad] = useState(false);

  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setBad(!bad); //状態を反転
    setCount(bad ? count - 1 : count + 1); //badがtrueなら減らす、falseなら増やす
  };

  return (
    <>
      <button onClick={handleClick}>
        <span className="badhand">
          {bad ? <img src={badhand02} /> : <img src={badhand01} />}
        </span>
        <span className="count">{count}</span>
      </button>
    </>
  );
}
