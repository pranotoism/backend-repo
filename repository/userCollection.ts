// repository/userCollection.ts
import { db } from '../config/firebaseConfig';

export const updateUser = async (userId: string, userData: any) => {
  await db.collection('USERS').doc(userId).set(userData, { merge: true });
};

export const fetchUser = async (userId: string) => {
  const doc = await db.collection('USERS').doc('KeP0RmmaWJYQic8SJZhR').get();

  if (!doc.exists) {
    throw new Error('User not found');
  }
  return doc.data();
};
