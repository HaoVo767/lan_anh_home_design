import { doc, getDocs, collection, query, where } from "firebase/firestore";
import db from "../../../firebase";
import Content from "./content";

export default async function Post({ params }) {
  let content = "";
  // const docRef = doc(db, "postContent", params.slug);
  const q = query(collection(db, "postContent"), where("tagName", "==", params.slug));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    content += doc.data().content;
  });
  return <Content data={content} />;
}
