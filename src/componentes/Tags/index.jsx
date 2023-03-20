import React from "react";
import styles from "./Tags.module.scss";
import fotos from "../Galeria/fotos.json";

export default function Tags({ tags, filtrafotos, setitens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
       {tags.map((tag) => {
        return <li key={tag} onClick={filtrafotos(tag)}>{tag}</li>

    })}
      <li onClick={() => setitens(fotos)}>Todas</li>

         {/* <li>Estrelas</li>
        <li>Galaxia</li>
        <li>Lua</li>
        <li>Planetas</li>  */}
      </ul>
    </div>
    

    )
  }