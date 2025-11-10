import StateButton01 from './StateButton01';
import StateButton02 from './StateButton02';

export default function BamosList({ src }) {
  return (
    <>
      <section className="LatestBlogPosts">
        <ul className="blogList">
          {src.map((elem) => (
            <li className="listItem">
              <img src={elem.image} className="ImageItem" /> <br />
              <div className="listItem_Wrap_SC">
                <div className="listItem_Wrap">
                  <div className="listItem_Title">
                    [{elem.category}] {elem.title}
                  </div>
                  <div className="listHand">
                    <StateButton01 init={elem.thumbsUp} />
                    <StateButton02 init={elem.thumbsDown} />
                  </div>
                </div>
                <br />
                <div className="listName">{elem.author}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
