import { useState } from 'react';
import goodhand01 from './../assets/images/good01.svg';
import goodhand02 from './../assets/images/good02.svg';
// BamosList.jsx;

export default function StateButton01({ init = 0 }) {
  // いいねしたかどうか(true/false)
  const [good, setGood] = useState(false);

  // カウント数
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setGood(!good); //状態を反転
    setCount(good ? count - 1 : count + 1); //goodがtrueなら減らす、falseなら増やす
  };

  return (
    <>
      <button onClick={handleClick}>
        <span className="goodhand">
          {good ? <img src={goodhand02} /> : <img src={goodhand01} />}
        </span>
        <span className="count">{count}</span>
      </button>
    </>
  );
}
