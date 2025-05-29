export interface BuildTools {
  data: string[];
  message: string;
}

export async function readBuildToolsList( filepath : string): Promise<BuildTools> {
  const parsedData: BuildTools = {
    data: [],
    message: '',
  };

  try {
    const response = await fetch(filepath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    parsedData.data = data;
    parsedData.message = 'Build tools loaded successfully';
  } catch (err) {
    parsedData.data = [];
    parsedData.message = err instanceof Error && err.message ? err.message : 'An error occurred while loading build tools';
  }

  return parsedData;
}
