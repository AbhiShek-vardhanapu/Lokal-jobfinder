// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@bookmarked_jobs';

export const loadBookmarks = async () => {
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveBookmarks = async (bookmarks) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
};
