import { v4 as uuidv4 } from 'uuid';
import { Party } from './types';

const partyNames = ['Poppin Thursdays', 'Poppin Fridays', 'Poppin Saturdays'];
const imageUrls = ['https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

export const generateRandomParty = (): Party => {
  const startDate = new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000);
  return {
    id: uuidv4(),
    name: partyNames[Math.floor(Math.random() * partyNames.length)],
    bannerImage: imageUrls[Math.floor(Math.random() * imageUrls.length)],
    price: Math.floor(Math.random() * 100) + 10,
    startDate,
    endDate: Math.random() > 0.5 ? new Date(startDate.getTime() + Math.random() * 24 * 60 * 60 * 1000) : undefined,
    amountGoing: Math.floor(Math.random() * 100) + 20,
  };
};