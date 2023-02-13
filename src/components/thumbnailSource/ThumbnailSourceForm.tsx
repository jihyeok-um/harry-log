import styled, { css } from "styled-components";
import { motion } from "framer-motion";
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
    <S.PolaroidContainer thumbnailSource={thumbnailSource}>
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
  PolaroidContainer: styled.div<{ thumbnailSource: string | null }>`
    ${Styles.FlexCenter}
    position: relative;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    border: 10px solid ${(props) => props.theme.WHITE};
    border-bottom: 100px solid ${(props) => props.theme.WHITE};
    box-shadow: 2px 2px 2px 2px ${(props) => props.theme.GRAY_900};

    ${(props) =>
      props.thumbnailSource &&
      css`
        animation: scaleUp 0.1s ease-in-out;
      `}

    @keyframes scaleUp {
      0% {
        transform: scale(1);
      }
      5% {
        transform: scale(0.7);
      }
      100% {
        transform: scale(1);
      }
    }
  `,

  Form: styled.form`
    ${Styles.FlexCenter}
    flex-direction: column;
  `,
};
