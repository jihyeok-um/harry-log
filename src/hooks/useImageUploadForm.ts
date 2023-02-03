import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useImageUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [thumbnailSource, setThumbnailSource] = useState<string | null>(null);
  const [thumbnailSize, setThumbnailSize] = useState<number>(0);

  const handleDragImage = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmitImageUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (thumbnailSource) redirectThumbnailResultPage(thumbnailSource);
  };

  const handleDropImageContainer = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inputRef.current) return;

    const files = e.dataTransfer.files;
    const thumbnailSource = getThumbnailURL();

    inputRef.current.files = files;
    getThumbnailSize();
    if (thumbnailSource) setThumbnailSource(thumbnailSource);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const thumbnailSource = getThumbnailURL();

    getThumbnailSize();
    if (thumbnailSource) setThumbnailSource(thumbnailSource);
  };

  const handleClickCancelButton = (e: React.MouseEvent) => {
    setThumbnailSource(null);
    setThumbnailSize(0);
  };

  const getThumbnailURL = () => {
    if (!inputRef.current) return;

    return URL.createObjectURL(inputRef.current.files![0]);
  };

  const getThumbnailSize = () => {
    if (!inputRef.current) return;

    setThumbnailSize(inputRef.current.files![0].size);
  };

  const redirectThumbnailResultPage = (imageUrl: string | undefined) => {
    navigate(`thumbnail-result?imageUrl=${imageUrl}`);
  };

  return {
    inputRef,
    thumbnailSource,
    thumbnailSize,
    handleDragImage,
    handleDropImageContainer,
    handleChangeInput,
    handleClickCancelButton,
    handleSubmitImageUploadForm,
  };
};
