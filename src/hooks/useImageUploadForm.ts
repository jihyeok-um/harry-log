import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useImageUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [thumbnailSource, setThumbnailSource] = useState<string | null>(null);

  const handleSubmitImageUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (thumbnailSource) redirectThumbnailResultPage(thumbnailSource);
  };

  const handleDragImage = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropImageContainer = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inputRef.current) return;

    const files = e.dataTransfer.files;
    const thumbnailSource = createThumbnailURL();

    inputRef.current.files = files;
    if (thumbnailSource) setThumbnailSource(thumbnailSource);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const thumbnailSource = createThumbnailURL();
    if (thumbnailSource) setThumbnailSource(thumbnailSource);
  };

  const handleClickCancelButton = (e: React.MouseEvent) => {
    setThumbnailSource(null);
  };

  const createThumbnailURL = () => {
    if (!inputRef.current) return;

    return URL.createObjectURL(inputRef.current.files![0]);
  };

  const redirectThumbnailResultPage = (imageUrl: string | undefined) => {
    navigate(`thumbnail-result?imageUrl=${imageUrl}`);
  };

  return {
    inputRef,
    thumbnailSource,
    handleSubmitImageUploadForm,
    handleDragImage,
    handleDropImageContainer,
    handleChangeInput,
    handleClickCancelButton,
  };
};
