import {useState} from "react";
import styled from "styled-components";
import {
  CommentCard,
  CommentAddButton,
  CancelButton,
} from "../commentCard/CommentCard";
import {Reaction} from "./Reaction";

const ReactionsStyled = styled.div`
  padding: 20px;
  color: #334155;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const CommentWrapper = styled.div`
  position: absolute;
`;

export const Reactions = () => {
  const [reactionPos, setReactionPos] = useState({x: 0, y: 0});

  const [isCreating, setIsCreating] = useState(false);

  const [reactions, setReactions] = useState<{
    x: string;
    y: string;
    value: string;
    id: string;
  }>([]);

  const handleReact = (e: any) => {
    if (e.defaultPrevented) {
      return;
    }
    if (!isCreating) {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;

      setReactionPos({x: xPercent + "%", y: yPercent + "%"});
      setIsCreating(true);
      return;
    }
  };

  const handleAddReaction = (value: string) => {
    setReactions([
      ...reactions,
      {...reactionPos, value, id: crypto.randomUUID(), comments: []},
    ]);
    setIsCreating(false);
  };

  const handleAddComment = (id: string, comment: string) => {
    const reactionIndex = reactions.findIndex((reaction) => reaction.id === id);
    if (reactionIndex === -1) {
      return;
    }
    const reaction = reactions[reactionIndex];
    const newReaction = {
      ...reaction,
      comments: [...reaction.comments, comment],
    };
    const newReactions = [...reactions];
    newReactions[reactionIndex] = newReaction;
    setReactions(newReactions);
  };

  return (
    <ReactionsStyled onClick={handleReact}>
      {reactions.map((reaction) => (
        <Reaction
          key={reaction.id}
          style={{top: reaction.y, left: reaction.x}}
          reaction={reaction}
          onAddComment={(comment) => handleAddComment(reaction.id, comment)}
        >
          {reaction.value}
        </Reaction>
      ))}
      {isCreating && (
        <CommentWrapper style={{top: reactionPos.y, left: reactionPos.x}}>
          <CommentCard>
            <CommentAddButton onClick={() => handleAddReaction("😀")}>
              😀
            </CommentAddButton>
            <CommentAddButton onClick={() => handleAddReaction("🥲")}>
              🥲
            </CommentAddButton>
            <CommentAddButton onClick={() => handleAddReaction("🔥")}>
              🔥
            </CommentAddButton>
            <CancelButton onClick={() => setIsCreating(false)} />
          </CommentCard>
        </CommentWrapper>
      )}
    </ReactionsStyled>
  );
};
