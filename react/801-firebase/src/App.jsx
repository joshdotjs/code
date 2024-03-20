import { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { 
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc, 
  doc, // reference to doc, used to delete or update
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
  
  const [selectedFile, setSelectedFile] = useState('');
  const [input, setInput] = useState('');
  useEffect(() => console.log('Input:', input), [input]);

  const [id, setId] = useState('');
  useEffect(() => console.log('ID:', id), [id]);

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
    <>
      <div style={{ marginBottom: '1rem' }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Name: 
          <input 
            type="text"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
        </label>
        <button 
          onClick={() => {
            addDoc(collection_ref, {
              name: input
            }) // addDoc()
            .then(() => {
              setInput('');
            }); // .then()
          }}
        >
          Upload text to Firebase
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
      <label>
          id: 
          <input 
            type="text"
            onChange={(event) => setId(event.target.value)}
            value={id}
          />
        </label>
        <button 
          onClick={async () => {
            if (!id) return;

            const doc_ref = doc(db, 'images', id);

            await deleteDoc(doc_ref)
            setId('');

          }}
        >
          Delete document from Firebase
        </button>
      </div>
    </>
  );

  // ============================================
}
