import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: false });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (value) => {
  console.log('PUT into the db');
  const jateDB = await openDB('jate', 1);
  const ts = jateDB.transaction('jate', 'readwrite');
  const store = ts.objectStore('jate');
  const request = store.put({ value });
  const result = await request;
  console.log(`PUT result: ${result}`);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from db');
  const jateDB = await openDB('jate', 1);
  const ts = jateDB.transaction('jate', 'readonly');
  const store = ts.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log(result);
  return result;
};

initdb();
