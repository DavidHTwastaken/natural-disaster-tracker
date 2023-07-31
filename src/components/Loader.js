import Image from "next/image";
import styles from "@/styles/Loader.module.css";
import spinner from "/public/loading.gif";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <h1>Fetching data...</h1>
      <Image src={spinner} alt="Loading" width={250} height={250} />
    </div>
  );
};

export default Loader;
