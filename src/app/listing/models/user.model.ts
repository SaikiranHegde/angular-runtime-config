export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  companyName: string;
  website: string;
}

export const toUser = (userRes: any): User => ({
  id: userRes?.id,
  name: userRes?.name,
  email: userRes?.email,
  city: userRes?.address?.city,
  companyName: userRes?.company?.name,
  website: userRes?.website
});

export const toUsers = (res: any[]): User[] => res.map(toUser);
