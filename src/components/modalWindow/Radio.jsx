import { useState } from 'react';

export default function FormRadio() {
  const [form, setForm] = useState({
    age: `010`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`年齢：${form.age}`);
  };

  return (
    <form>
      <label htmlFor="age_0_10" className="modalItem_title">
        Age
      </label>
      <br />

      <div className="radio_sc">
        <input
          type="radio"
          name="age"
          id="age_0_10"
          value="010"
          checked={form.age === '010'}
          onChange={handleForm}
        />
        <label htmlFor="age_0_10">0 - 10</label>
        <br />

        <input
          type="radio"
          name="age"
          id="age_10_20"
          value="1020"
          checked={form.age === '1020'}
          onChange={handleForm}
        />
        <label htmlFor="age_10_20">10 - 20</label>
        <br />

        <input
          type="radio"
          name="age"
          id="age_20_30"
          value="2030"
          checked={form.age === '2030'}
          onChange={handleForm}
        />
        <label htmlFor="age_20_30">20 - 30</label>

        <br />

        <input
          type="radio"
          name="age"
          id="age_30_40"
          value="3040"
          checked={form.age === '3040'}
          onChange={handleForm}
        />
        <label htmlFor="age_30_40">30 - 40</label>
        <br />

        <input
          type="radio"
          name="age"
          id="age_40_50"
          value="4050"
          checked={form.age === '4050'}
          onChange={handleForm}
        />
        <label htmlFor="age_40_50">40 - 50</label>
        <br />

        <input
          type="radio"
          name="age"
          id="age_50_over"
          value="50"
          checked={form.age === '50'}
          onChange={handleForm}
        />
        <label htmlFor="age_50_over">50 and above</label>
      </div>
      <br />
    </form>
  );
}
