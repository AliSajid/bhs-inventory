import { h, FunctionalComponent } from "preact";
import { db } from "../../utils/firebase";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  where,
  getDoc,
} from "firebase/firestore";

export const getInventory = async () => {
  const allData = await getDocs(collection(db, "items"));
  allData.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

const Inventory: FunctionalComponent = () => {
  getInventory();
  return <div>This is Inventory Page.</div>;
};

export default Inventory;
