import {useState} from "react";
import styled from "styled-components";
import {
  CancelButton,
  CommentCard,
  CommentRow,
  TextInput,
} from "../commentCard/CommentCard";

const ReactionStyled = styled.div`
  position: absolute;
  background-color: #334155;
  text-align: left;
  border-radius: 0px 20px 20px 20px;
  padding: 10px;
  cursor: pointer;
`;

const EmojiStyle = styled.div`
  padding: 5px;
  font-size: 25px;
`;

export const Reaction = ({reaction, onAddComment}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingComment, setIsAddingComment] = useState(false);

  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setText("");
    setIsOpen(false);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    onAddComment(text);
    setText("");
    setIsAddingComment(false);
  };

  return (
    <ReactionStyled
      style={{top: reaction.y, left: reaction.x}}
      onClick={(e) => {
        console.log("click reaction");
        e.preventDefault();

        if (isOpen) {
          return;
        }
        setIsOpen(true);
      }}
    >
      <EmojiStyle>{reaction.value}</EmojiStyle>

      {isOpen && (
        <CommentCard>
          <div>
            {reaction.comments.map((comment) => (
              <CommentRow>{comment}</CommentRow>
            ))}
          </div>
          {isAddingComment && (
            <>
              <TextInput onChange={handleTextChange} />
              <button onClick={handleAddComment}>Validate</button>
            </>
          )}
          {!isAddingComment && (
            <button onClick={() => setIsAddingComment(true)}>
              Add comment
            </button>
          )}
          <CancelButton onClick={handleClose} />
        </CommentCard>
      )}
    </ReactionStyled>
  );
};
