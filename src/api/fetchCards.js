export const fetchCards = (query) => {
  const data = fetch(`./db/${query}.json`).then((res) => {
    return res.json();
  });
  return data;
};
