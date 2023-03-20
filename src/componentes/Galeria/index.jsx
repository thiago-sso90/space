import Tags from "componentes/Tags";
import React from "react";
import Cards from "./Cards";
import fotos from './fotos.json'
import styles from "./Galeria.module.scss"
import { useState } from "react";
 



export default function Galeria(){
  const [itens, setitens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))]
  const filtrafotos = (tag) => {
    const novasfotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })
    setitens(novasfotos)
  }
 
  return(
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrafotos={filtrafotos} setitens={setitens}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  )
}