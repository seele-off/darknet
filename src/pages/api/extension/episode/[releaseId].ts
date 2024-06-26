import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface EpisodeResponse {
  code: number;
  types?: Array<{
    '@id': number;
    id: number;
    name: string;
    icon: string | null;
    workers: string | null;
    is_sub: boolean;
    episodes_count: number;
    view_count: number;
    pinned: boolean;
  }>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { releaseId } = req.query;
  const anixartAPI = `https://api.anixart.tv/episode/${releaseId}`;
  const seeleAPI = `https://seele-off.github.io/anixart/extension/api/episode/${releaseId}.json`;

  try {
    const anixartRes = await axios.get<EpisodeResponse>(anixartAPI);
    const anixartResData = anixartRes.data;
    const modifyedData = modifyData(anixartRes.data);

    if (!modifyedData.types || modifyedData.types.length === 0) {
      const seeleRes = await axios.get(seeleAPI);

      res.json({ is_blocked: true, ...modifyData(seeleRes.data) });
    } else {
      res.json(anixartResData);
    }
  } catch (error) {
    console.error('Error fetching data from Anixart API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function modifyData(data: EpisodeResponse): EpisodeResponse {
  if (data.types && data.types.length) {
    data.types = data.types.map(type => {
      return {
        ...type,
        workers: 'Отображается благодаря расширению «MD Seele»' // Изменение значения workers на 'MD Sele'
      }
    });
  }

  return data;
}