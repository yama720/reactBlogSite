import { useState } from 'react';
import FormRadio from './modalWindow/Radio';
import FormSelect from './modalWindow/Select';
import FormCheckMulti from './modalWindow/CheckBox';
import FormTextarea from './modalWindow/Textarea';
import modalTopImage from './../assets/images/dog.jpg';
import closeButtonImage from './../assets/images/close.svg';
import SubmitButton from './modalWindow/SubmitButton';

export default function StateModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="modalWrapper">
        <div className="modalButtonWrapper">
          <button className="modalButton" onClick={openModal}>
            Feedback
          </button>
        </div>

        {/* ボタンが押された(isOpenがtrueだった)時 */}
        {isOpen && (
          // modalOverlayはモーダルが出た時の背景(画面全体を覆うような背景)↓
          <div className="modalOverlay" onClick={closeModal}>
            {/* モーダルの表示される画面 かつ バブリング(連鎖)を止める記述 ↓ */}
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              {/* モーダルとして表示したい内容 ↓ */}
              <div className="modalTop" onClick={closeModal}>
                <img src={modalTopImage} />
              </div>

              <h2 className="modalTitle">FEEDBACK</h2>

              <div>
                <p className="modalParagraph">
                  Thank you for visiting BAMOS DESIGN. <br />
                  Please take a moment to complete our survey to help us <br />
                  improve our services. <br />
                </p>
              </div>

              <div
                style={{
                  textAlign: 'left',
                  paddingInlineStart: 16,
                }}
              >
                <FormRadio />
                <FormSelect />
                <FormCheckMulti />
                <FormTextarea />
              </div>

              <SubmitButton />

              <button className="closeButton" onClick={closeModal}>
                <img src={closeButtonImage} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
