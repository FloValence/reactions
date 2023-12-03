import styled from "styled-components";

const CommentCardStyle = styled.div`
  background-color: #e2e8f0;
  padding: 20px;
  color: #0f172a;
  border-radius: 10px;
  display: grid;
  row-gap: 10px;
`;

export const CommentRow = styled.div`
  border-bottom: 2px #94a3b8 solid;
  padding: 5px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const CommentAddButtonStyle = styled.button``;

export const CommentAddButton = ({children, onClick}) => {
  return (
    <CommentAddButtonStyle onClick={onClick}>{children}</CommentAddButtonStyle>
  );
};

const CancelButtonStyle = styled.button``;

export const CancelButton = ({onClick}) => {
  return <CancelButtonStyle onClick={onClick}>Cancel</CancelButtonStyle>;
};

const TextInputStyle = styled.input`
  border: 2px #94a3b8 solid;
  padding: 5px;
  border-radius: 5px;
`;

export const TextInput = ({onChange}) => {
  return <TextInputStyle onChange={onChange} />;
};

export const CommentCard = ({children}) => {
  return <CommentCardStyle>{children}</CommentCardStyle>;
};
