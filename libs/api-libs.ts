export const getAnimeResponse = async ({ endpoint, keyword }: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}${keyword}${process.env.API_KEY}`
  );
  const anime = await response.json();
  return anime;
};
