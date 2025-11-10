import { useState } from 'react';

export default function FormTextarea() {
  const [form, setForm] = useState({
    comment: `ここに記入してください。`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`コメント：${form.comment}`);
  };

  return (
    <form>
      <label htmlFor="comment" className="modalItem_title">
        What kind of special features or topics would you like to read on BAMOS
        DESIGN in the future?
      </label>
      <br />
      <textarea
        className="commentArea"
        name="comment"
        id="comment"
        cols="52"
        rows="2.5"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
      <br />
    </form>
  );
}
