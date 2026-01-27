import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_ANALYTIC,
  authDomain: 'endocorado.firebaseapp.com',
  projectId: 'endocorado',
  storageBucket: 'endocorado.appspot.com',
  messagingSenderId: '1071754826508',
  appId: import.meta.env.VITE_API_ID_ANALYTIC,
  measurementId: 'G-M577PQ2JEJ'
};

// Evita inicializar más de una vez
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics solo en cliente (navegador)
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (err) {
    // Ignora si analytics no está disponible (por ejemplo, en SSR)
    console.warn('Analytics no disponible:', err?.message);
  }
}

export { app, db, analytics };
