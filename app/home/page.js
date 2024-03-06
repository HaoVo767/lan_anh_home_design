import { doc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore";
import db from "../../firebase";
import MediaCard from "../card";

export default async function Home() {
  const getData = async () => {
    let data = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });
    return data;
  };
  const data = await getData();

  return (
    <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 md:gap-y-10">
      {console.log("render")}
      {data.map((item) => (
        <MediaCard props={item.data} key={item.id} />
      ))}
    </div>
  );
}
