import React, { useRef } from "react";
import styled from "styled-components";

const SearchImage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitKeywordForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    //console.log(requestGetKeywordSearchResult());
  };

  return (
    <S.Container>
      <S.KeywordForm onSubmit={handleSubmitKeywordForm}>
        <S.KeywordInput ref={inputRef} />
        <S.SubmitButton type="submit">검색</S.SubmitButton>
      </S.KeywordForm>
    </S.Container>
  );
};

const S = {
  Container: styled.section``,

  KeywordForm: styled.form``,

  KeywordInput: styled.input``,

  SubmitButton: styled.button`
    margin-left: 5px;
    padding: 3px;
    border: 1px solid #333333;
    :hover {
      background-color: #666666;
    }
  `,
};

export default SearchImage;
