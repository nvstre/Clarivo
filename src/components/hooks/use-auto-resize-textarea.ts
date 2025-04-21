import { useEffect, useRef } from 'react';

export interface UseAutoResizeTextareaProps {
  minHeight?: number;
  maxHeight?: number;
}

export const useAutoResizeTextarea = ({
  minHeight = 0,
  maxHeight = Infinity,
}: UseAutoResizeTextareaProps = {}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight
    );
    textarea.style.height = `${newHeight}px`;
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    adjustHeight();
    textarea.addEventListener('input', adjustHeight);
    return () => textarea.removeEventListener('input', adjustHeight);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}; 