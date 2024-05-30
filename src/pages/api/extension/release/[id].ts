import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface AnimeResponse {
  code: number;
  release: {
    title_original: string;
    grade: number;
  };
  // other types
}

interface ShikiResponse {
  score: string;
  // other types
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const anixartAPI = `https://api.anixart.tv/release/${id}`;
  const shikimoriAPI = `https://shikimori.one/api/animes`;

  try {
    const { data } = await axios.get<AnimeResponse>(anixartAPI);
    const shikiAnime = await axios.get<ShikiResponse[]>(
      `${shikimoriAPI}?search=${encodeURIComponent(data.release.title_original)}`
    );
    const shikiData = shikiAnime.data;

    if (shikiData.length) {
      const shikiScore = shikiData[0].score;
      const anixartScore = data.release.grade.toFixed(2);
      const combinedScore = `Anixart: ${anixartScore} • Shiki: ${shikiScore}`;

      res.status(200).json({
        ...data,
        release: {
          ...data.release,
          grade: combinedScore,
        },
      });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error('Error fetching data from Anixart or Shikimori API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
