import "./home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Characters from "../../components/Character/Character";

const Home = () => {
  return (
    <>
      <Navbar />
      <header></header>
      <main>
        <div className="main-game">
          <div className="main-game_description">
            <p>
              The Legend of Dragoon est un jeu vidéo de rôle développé et édité
              par Sony Computer Entertainment en 1999 sur PlayStation. Le jeu se
              déroule dans un univers d'heroic fantasy où dragons, humains et
              magie se côtoient. Les « dragoons », transformations partielles de
              certains hommes, sont faits pour contrôler les dragons et se
              battre à leur côtés. Le jeu, qui tient sur 4 CD-ROM1, possède une
              durée de vie importante.
            </p>
            <p>
              L'histoire débute lorsque Shana, l'amie d'enfance de Dart, le
              héros du jeu, se fait enlever par l'armée de l'empire totalitaire
              du Sandor. Personne ne sait pourquoi elle est la seule à avoir été
              capturée après l'incendie de son village. Dart a en sa possession
              un artéfact ayant appartenu à son père, et dont il ne se sépare
              jamais. Cet artéfact se révèle être l'âme de dragoon du dragon aux
              yeux rouges, ayant existé il y a plus de 11 000 ans. Dart décide
              donc de voler au secours de Shana dans une aventure qui oppose en
              toile de fond deux royaumes. Il devra retrouver les six autres
              âmes de Dragoon (comme cela s'est produit lors de la Campagne du
              Dragon 11 000 ans auparavant) et les six personnes qui pourront
              les utiliser dans le but de faire revivre la Légende du Dragon.
              Seuls les dragons et la magie permettront aux personnages
              d'influer sur la destinée du monde.
            </p>
          </div>
        </div>
        <Characters />
      </main>
    </>
  );
};

export default Home;
