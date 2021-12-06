import { h, FunctionalComponent } from "preact";
import { db } from "src/utils/firebase-config";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";

const getInventory: Function = () => {
  console.log("Hello, world");
};

const Inventory: FunctionalComponent = () => {
  return <div>This is Inventory Page.</div>;
};

export default Inventory;
