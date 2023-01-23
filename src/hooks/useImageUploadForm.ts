import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useImageUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitImageUploadForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const imageUrl = URL.createObjectURL(inputRef.current.files![0]);

    navigate(`thumbnail-result`, { state: imageUrl });
  };

  return {
    inputRef,
    handleSubmitImageUploadForm,
  };
};
