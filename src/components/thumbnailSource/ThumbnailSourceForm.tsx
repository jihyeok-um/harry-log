import styled from "styled-components";
import { useThumbnailSourceForm } from "../../hooks/useThumbnailSourceForm";
import { Styles } from "../../styles/Styles";
import { ThumbnailSourceConfirm } from "./ThumbnailSourceConfirm";
import { ThumbnailSourceInput } from "./ThumbnailSourceInput";

export const ThumbnailSourceForm = () => {
  const {
    thumbnailSourceInputRef,
    thumbnailSource,
    handleDragThumbnailSourceInput,
    handleDropThumbnailSourceInput,
    handleChangeThumbnailSourceInput,
    handleClickCancelButton,
    handleSubmitThumbnailSourceForm,
  } = useThumbnailSourceForm();

  return (
    <S.PolaroidContainer>
      <S.Form onSubmit={handleSubmitThumbnailSourceForm}>
        {!thumbnailSource && (
          <ThumbnailSourceInput
            thumbnailSourceInputRef={thumbnailSourceInputRef}
            handleChangeThumbnailSourceInput={handleChangeThumbnailSourceInput}
            handleDragThumbnailSourceInput={handleDragThumbnailSourceInput}
            handleDropThumbnailSourceInput={handleDropThumbnailSourceInput}
          />
        )}
        {thumbnailSource && (
          <ThumbnailSourceConfirm
            thumbnailSource={thumbnailSource}
            handleClickCancelButton={handleClickCancelButton}
          />
        )}
      </S.Form>
    </S.PolaroidContainer>
  );
};

const S = {
  PolaroidContainer: styled.div`
    position: relative;
    flex-direction: column;
    ${Styles.FlexCenter}
    width: fit-content;
    height: fit-content;
    border: 10px solid #fff;
    border-bottom: 100px solid #fff;
    box-shadow: 3px 3px 3px 3px black;
  `,

  Form: styled.form`
    ${Styles.FlexCenter}
    flex-direction: column;
  `,
};
