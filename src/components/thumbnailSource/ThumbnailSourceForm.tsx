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
    ${Styles.FlexCenter}
    position: relative;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    border: 10px solid ${(props) => props.theme.WHITE};
    border-bottom: 100px solid ${(props) => props.theme.WHITE};
    box-shadow: 2px 2px 2px 2px ${(props) => props.theme.GRAY_900};
  `,

  Form: styled.form`
    ${Styles.FlexCenter}
    flex-direction: column;
  `,
};
