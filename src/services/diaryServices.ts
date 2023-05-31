import { DiaryEntry, NewDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max( ... diaries.map(d => d.id)) + 1,
... newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
};
