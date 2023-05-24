import Image from "next/image";
import styles from "@/styles/Loader.module.css";
import spinner from "/public/loading.gif";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image src={spinner} alt="Loading" width={250} height={150} />
      <h1>Fetching data...</h1>
    </div>
  );
};

export default Loader;
