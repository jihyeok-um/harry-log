import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useImageUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitImageUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const imageUrl = URL.createObjectURL(inputRef.current.files![0]);

    navigate(`thumbnail-result?imageUrl=${imageUrl}`);
  };

  const handleDropImageDiv = (e: React.DragEvent<HTMLDivElement | HTMLInputElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const files = e.dataTransfer.files;
    inputRef.current.files = files;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return {
    inputRef,
    handleSubmitImageUploadForm,
    handleDropImageDiv,
    handleChangeInput,
  };
};
