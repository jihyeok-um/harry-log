export const debounce = ({ callback, delay }: debounceParams) => {
  let debounce: NodeJS.Timeout | null = null;

  if (debounce) {
    clearTimeout(debounce);
  }

  debounce = setTimeout(() => {
    callback();
  }, delay);
};

interface debounceParams {
  callback: () => void;
  delay: number;
}
