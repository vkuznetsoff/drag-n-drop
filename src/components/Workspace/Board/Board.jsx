import "./Board.css";
import remove from "../../../assets/images/remove.svg";
import remove2 from "../../../assets/images/remove2.svg";
import { useState } from "react";

const Board = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleAddBtn, setVisibleAddBtn] = useState(true);
  const [editText, setEditText] = useState();

  const style = {
    visibility: visibleAddBtn ? "visible" : "hidden",
  };

  const removeHandle = () => {
    return;
  };

  const openFormHandle = () => {
    setVisibleForm(!visibleForm);
   
  };

  const closeEditForm = () => {
    setVisibleForm(false);
    setEditText("");
  };

const changeEditForm = (e) => {
    setEditText(e.target.value);
    
    // if (editText === "" | editText == undefined) {
        debugger
        setVisibleAddBtn( (editText) => {
            false}
            ) 
    } else {
        debugger
        setVisibleAddBtn(true)
    }

    
}

  const cancelHandle = () => {
    closeEditForm();
  };

  return (
    <div className="workspace">
      <div className="content">
        <div className="board">
          <div className="board__content">
            <div className="board__title" contentEditable="true">
              Заголовок
            </div>
            <div className="board__card" draggable="true">
              <div className="board__card__text">Card_1</div>
              <div className="board__card__removebtn" onClick={removeHandle}>
                <img src={remove2} />
              </div>
            </div>

            {visibleForm && (
              <div className="board__form">
                <textarea
                  placeholder="Enter content"
                  value={editText}
                  onChange={(e) => changeEditForm(e)}
                ></textarea>
                <div class="board__form__bottom">
                  <button className="board__form__addbtn" style={style}>
                    Add card
                  </button>
                  <button
                    className="board__form__canlelbtn"
                    onClick={cancelHandle}
                  >
                    X
                  </button>
                </div>
              </div>
            )}

            {!visibleForm && (
              <button className="board__btn__add" onClick={openFormHandle}>
                + Добавить карточку
              </button>
            )}
          </div>
        </div>
      </div>

      <div class="bottom">
        <button className="bottom__addboard">+ Add board</button>
      </div>
    </div>
  );
};

export default Board;
