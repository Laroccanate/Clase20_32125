import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const firestoreKey = JSON.parse(fs.readFileSync(__dirname + '/firebase-key.json', 'utf-8'));
const mongoConectionStr = JSON.parse(fs.readFileSync(__dirname + '/mongodb.json', 'utf-8'));

const config = {
  dbPath: __dirname + '/public/db',
  firestore: firestoreKey,
  mongodb: mongoConectionStr,
  env: process.argv[2],
  isAdmin: true,
};

export default config;