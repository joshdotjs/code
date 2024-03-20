import { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { 
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';

// ==============================================
// ==============================================
// ==============================================
// ==============================================

const firebase_config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// init Firebase app
const app = initializeApp(firebase_config);

// init services
const db = getFirestore();

// collection ref
const collection_ref = collection(db, 'images');

// set collection data
getDocs(collection_ref).then((snapshot) => {
  // here we have access to the documents

  let images = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });

  console.log('images:', images);
  
}).catch((error) => {
  console.log('Error getting documents:', error);
});

// ==============================================
// ==============================================
// ==============================================
// ==============================================

export default function App() {

  // ============================================
  
  const [selectedFile, setSelectedFile] = useState(null);

  // ============================================

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => console.log('Selected file:', selectedFile), [selectedFile]);

  // ============================================

  const handleUpload = () => {
    
  };

  // ============================================

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {/* <div>
        <code>{JSON.stringify(import.meta.env)}</code>
      </div> */}

      <div>
        <code>{import.meta.env.VITE_TEST}</code>
      </div>
    </div>
  );

  // ============================================
}
