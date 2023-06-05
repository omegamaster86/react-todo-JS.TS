 import { NavigationLink } from "../../atoms/NavigationLink/index";
 import { NAVIGATION_PATH } from "../../../navigations";
 import styles from "./styles.module.css";
 
 export const Navigation = () => (
   <nav>
     <ul className={styles.ul}>
       <NavigationLink title={"Top"} linkPath={NAVIGATION_PATH.TOP} />
       <NavigationLink title={"Create"} linkPath={NAVIGATION_PATH.CREATE} />
     </ul>
   </nav>
 );