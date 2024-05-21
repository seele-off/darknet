import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface ProfileResponse {
  code: number;
  profile?: {
    id: number;
    is_sponsor: boolean;
    is_sponsor_transferred: boolean;
    sponsorshipExpires: number;
    // and other types
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const anixartAPI = `https://api.anixart.tv/profile/${userId}`;

  try {
    const anixartRes = await axios.get<ProfileResponse>(anixartAPI);

    const modifiedProfile = anixartRes.data.profile
    ? {
       ...anixartRes.data.profile,
        is_sponsor: true,
        is_sponsor_transferred: true,
        sponsorshipExpires: Number.MAX_SAFE_INTEGER, // Устанавливаем бессрочную дату
       }
    : {};

    res.json({ ...anixartRes.data, profile: modifiedProfile });
  } catch (error) {
    console.error('Error fetching data from Anixart API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}