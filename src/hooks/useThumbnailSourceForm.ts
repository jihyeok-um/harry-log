import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useThumbnailSourceForm = () => {
  const thumbnailSourceInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [thumbnailSource, setThumbnailSource] = useState<string | null>(null);

  const handleDragThumbnailSourceInput = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmitThumbnailSourceForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`thumbnail-result?thumbnail-source=${thumbnailSource}`);
  };

  const handleDropThumbnailSourceInput = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (thumbnailSourceInputRef.current) {
      const files = e.dataTransfer.files;
      thumbnailSourceInputRef.current.files = files;
      getThumbnailSourceURL();
    }
  };

  const handleChangeThumbnailSourceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    getThumbnailSourceURL();
  };

  const handleClickCancelButton = () => {
    setThumbnailSource(null);
  };

  const getThumbnailSourceURL = () => {
    if (thumbnailSourceInputRef.current && thumbnailSourceInputRef.current.files) {
      const thumbnailSource = URL.createObjectURL(thumbnailSourceInputRef.current.files![0]);
      setThumbnailSource(thumbnailSource);
    }
  };

  return {
    thumbnailSourceInputRef,
    thumbnailSource,
    handleDragThumbnailSourceInput,
    handleDropThumbnailSourceInput,
    handleChangeThumbnailSourceInput,
    handleClickCancelButton,
    handleSubmitThumbnailSourceForm,
  };
};
