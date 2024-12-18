const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./dynamic-web-lab-firebase-adminsdk-xdvza-8198e779e8.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db };
