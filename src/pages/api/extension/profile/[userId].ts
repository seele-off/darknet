import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Role = {
  id: number;
  name: string;
  color: string;
}

type ProfileResponse = {
  code: number;
  profile?: {
    id: number;
    is_verified: boolean;
    is_sponsor: boolean;
    is_sponsor_transferred: boolean;
    sponsorshipExpires: number;
    roles: Array<Role>,
    // and other types
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const anixartAPI = `https://api.anixart.tv/profile/${userId}`;

  try {
    const anixartRes = await axios.get<ProfileResponse>(anixartAPI);

    const currentProfile = anixartRes.data.profile && userId === '790852'
    ? {
       ...anixartRes.data.profile,
        is_verified: true,
        is_sponsor: true,
        is_sponsor_transferred: true,
        sponsorshipExpires: Number.MAX_SAFE_INTEGER,
        roles: [
            {
              id: 1,
              name: "Разработчик",
              color: "B656E5"
            },
            {
              id: 8,
              name: "Редактор",
              color: "5660E5"
            },
            {
              id: 44,
              name: "Anixart",
              color: "F55E5E"
            },
            {
              id: 5,
              name: "Jam Club",
              color: "E57A56"
            }
        ],
       }
    : anixartRes.data.profile;

    res.json({ ...anixartRes.data, profile: currentProfile });
  } catch (error) {
    console.error('Error fetching data from Anixart API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
