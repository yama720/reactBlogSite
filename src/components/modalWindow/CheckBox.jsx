import { useState } from 'react';

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    favorite: [''],
  });

  const handleFormMulti = (e) => {
    const fa = form.favorite;

    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  const show = () => {
    console.log(`好きな分野：${form.favorite}`);
  };

  return (
    <form>
      <label htmlFor="Favorite_music" className="modalItem_title">
        What is your favorite field or area of interest?
      </label>
      <br />

      <div className="check_sc">
        <input
          id="Favorite_music"
          name="Favorite"
          type="checkbox"
          value="music"
          checked={form.favorite.includes('music')}
          onChange={handleFormMulti}
        />
        <label htmlFor="Favorite_music">音楽</label>
        <br />

        <input
          id="Favorite_art"
          name="Favorite"
          type="checkbox"
          value="art"
          checked={form.favorite.includes('art')}
          onChange={handleFormMulti}
        />
        <label htmlFor="Favorite_art">芸術</label>
        <br />

        <input
          id="Favorite_design"
          name="Favorite"
          type="checkbox"
          value="design"
          checked={form.favorite.includes('design')}
          onChange={handleFormMulti}
        />
        <label htmlFor="Favorite_design">デザイン</label>
        <br />

        <input
          id="Favorite_programming"
          name="Favorite"
          type="checkbox"
          value="programming"
          checked={form.favorite.includes('programming')}
          onChange={handleFormMulti}
        />
        <label htmlFor="Favorite_programming">プログラミング</label>
      </div>
      <br />
    </form>
  );
}
