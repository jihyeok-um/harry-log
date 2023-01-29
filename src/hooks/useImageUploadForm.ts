import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useImageUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitImageUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirectThumbnailResultPage(createThumbnailURL());
  };

  const handleDragImage = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const createThumbnailURL = () => {
    if (!inputRef.current) return;

    return URL.createObjectURL(inputRef.current.files![0]);
  };

  const redirectThumbnailResultPage = (imageUrl: string | undefined) => {
    navigate(`thumbnail-result?imageUrl=${imageUrl}`);
  };

  const handleDropImageDiv = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inputRef.current) return;

    const files = e.dataTransfer.files;
    inputRef.current.files = files;
    redirectThumbnailResultPage(createThumbnailURL());
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    redirectThumbnailResultPage(createThumbnailURL());
  };

  return {
    inputRef,
    handleSubmitImageUploadForm,
    handleDragImage,
    handleDropImageDiv,
    handleChangeInput,
  };
};
