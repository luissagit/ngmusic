export async function getResultData(searchParams: any) {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${searchParams?.query ?? ''}`);
    return response.json();
  } catch (err) {
    return [];
  }
}