export interface Author {
  name: string;
  lastname: string;
}

export const getAuthor = (): Author => {
  return {
    name: "Ezequiel",
    lastname: "Villa",
  };
};
