import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
      const itemsCollectionRef = collection(db, 'users', userId, 'items');
  
      const snapshot = await getDocs(itemsCollectionRef);
  
      const items = [];
  
      snapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      return items;
    } catch (error) {
      console.error('Error retrieving items:', error);
      throw error;
    }
  }
  export async function addItem(userId, newItem) {
    try {
        // Firestore reference to the items collection for the specified user
        const itemsCollectionRef = collection(db, 'users', userId, 'items');
    
        // Add the new item to the items subcollection
        const newItemRef = await addDoc(itemsCollectionRef, newItem);
    
        // Return the ID of the newly created document
        return newItemRef.id;
      } catch (error) {
        console.error('Error adding item:', error);
        throw error;
      }
  }


