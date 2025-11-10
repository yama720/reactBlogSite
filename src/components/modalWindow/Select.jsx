import { useState } from 'react';

export default function FormSelect() {
  const [form, setForm] = useState({
    introduction: `down`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`紹介：${form.introduction}`);
  };

  return (
    <form>
      <label htmlFor="introduction" className="modalItem_title">
        How did you hear about BAMOS DESIGN?
      </label>
      <select
        className="selectArea"
        name="introduction"
        id="introduction"
        value={form.introduction}
        onChange={handleForm}
      >
        <option value="down">-- 1つ選択してください --</option>
        <option value="z">z</option>
        <option value="friend">友人の紹介</option>
        <option value="sns">SNS</option>
        <option value="banner">Webバナー</option>
        <option value="delivery">動画配信サイト</option>
        <option value="advertisement">広告・ポスター</option>
        <option value="others">その他</option>
      </select>
    </form>
  );
}
