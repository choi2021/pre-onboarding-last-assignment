const maskWord = (word: string) => {
  return word.replace(/\S/gi, '*');
};

export { maskWord };
