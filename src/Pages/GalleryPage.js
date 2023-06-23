import React, {useState} from 'react';
import Card from '../Components/Cards';
import Joker from '../Components/3DModels/Joker';

import BeautyInBloom from '../Components/3DModels/BeautyInBloom';
import Beetle from '../Components/3DModels/Beetle';
import Simpson from '../Components/3DModels/Simpson';
import BlueFlower from '../Components/3DModels/BlueFlower';
import Fox from '../Components/3DModels/Fox';
import ThreeWomen from '../Components/3DModels/ThreeWomen';
import Dali from '../Components/3DModels/Dali';
import SanjayDutt from '../Components/3DModels/SanjayDutt';
import Norman from '../Components/3DModels/Norman';
import GoldenLeaf from '../Components/3DModels/GoldenLeaf';
import BlueGalaxy from '../Components/3DModels/BlueGalaxy';
import Flower from '../Components/3DModels/Flower';
import PinkSky from '../Components/3DModels/PinkSky';
import './GalleryPage.css'; // We will create this file for styling.

const GalleryPage = () => {

  const [activeButton, setActiveButton] = useState("medium");

  return (
  <div className="Gallery">
    <div className="header">
      <span className="background-title">MY ARTWORK</span>
      <span className="overlay-title">Gallery</span>
    </div>

    <div className="label-container">
      <button className={`label-button ${activeButton === 'medium' ? 'active' : ''}`} id="medium" onClick={() => setActiveButton('medium')}>Medium</button>
      <button className={`label-button ${activeButton === 'size' ? 'active' : ''}`} id="size" onClick={() => setActiveButton('size')}>Size</button>
      <button className={`label-button ${activeButton === 'subject-matter' ? 'active' : ''}`} id="subject-matter" onClick={() => setActiveButton('subject-matter')}>Subject Matter</button>
      <button className={`label-button ${activeButton === 'type' ? 'active' : ''}`} id="type" onClick={() => setActiveButton('type')}>Type</button>
    </div>


    <div className='main-button-container'>
      {activeButton === "medium" && (
        <div className="medium-button-container">
          <a href="#acrylic-canvas" className="scroll-button">Acrylic </a>
          <a href="#portraits" className="scroll-button">Poster Colors</a>
          <a href="#mini-canvases" className="scroll-button">Water Colors</a>
          <a href="#water-colors" className="scroll-button">Charcoal</a>
        </div>
      )}
      {activeButton === "type" && (
        <div className="type-button-container">
          <a href="#acrylic-canvas" className="scroll-button">Abstract</a>
          <a href="#portraits" className="scroll-button">Realistic</a>
          <a href="#mini-canvases" className="scroll-button">Surrealistic</a>
          <a href="#water-colors" className="scroll-button">Minimalistic</a>
        </div>
      )}
      {activeButton === "size" && (
      <div className="size-button-container">
        <a href="#acrylic-canvas" className="scroll-button">Small</a>
        <a href="#portraits" className="scroll-button">Medium</a>
        <a href="#mini-canvases" className="scroll-button">Large</a>
        <a href="#water-colors" className="scroll-button">Extra Large</a>
      </div>
      )}
      {activeButton === "subject-matter" && (
        <div className="subject-matter-button-container">
          <a href="#acrylic-canvas" className="scroll-button">Portraits</a>
          <a href="#portraits" className="scroll-button">Nature</a>
          <a href="#mini-canvases" className="scroll-button">Abstract</a>
        </div>
      )}
    </div>

    <h3 id="acrylic-canvas">Acrylic Canvas</h3>
    
    <Card
      name="BEAUTY IN BLOOM"
      description="This piece of art exists within its true bohemian element by integrating an eclectic fusion of textures, patterns and colours. The painting parallels the beauty of an elegant woman with that of a flower. The eccentric outline of the facial structure and the wide array of colours add an unconventional layer to this graceful portrait."
      imageUrl="./Images/BeautyInBloom.jpg"
      size="19 X 16 inches"
      medium="acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={BeautyInBloom}
    />
    <Card
      name="EVERY SISTERHOOD HAS RULES"
      description="This piece of modern art showcases the subtle strength of feminine companionship. A single white outline runs throughout the positive space to form three separate female structures, exhibiting an underlying connection amongst the females. It embodies three clear and stimulating colours to highlight the strength in femininity."
      imageUrl="./Images/3Women.jpg"
      size="5.3 x 8.3 inches"
      medium="acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={ThreeWomen}
    />
    <Card
      name="THE BEETLE"
      description="This particular piece seeks to capture the sprightly spirit of an all-time favourite vehicle. It embodies a detailed reflection of the Beetle and utilises a wide array of vibrant colours. A geometrical/ structured outline of the car is positioned upon a free-flowing backdrop to highlight each component of the subject matter."
      imageUrl="./Images/Beetle.jpg"
      size="16 x 16 inches"
      medium="acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Beetle}
    />
    <Card
      name="THE HUNGRY SIMPSON"
      description="By utilising an array of vibrant colours, the Hungry Simpson is a joyful portrait of a beloved fictional character. This contemporary piece effectively utilises its positive space to create an energetic and lively aesthetic. This detailed three dimensional artwork reflects a natural sense of depth and space. "
      imageUrl="./Images/Simpson.jpg"
      size="12 x 10 inches"
      medium="acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Simpson}
    />

    <h3 id="portraits">Portraits</h3>
    <Card
      name="SANJAY DUTT"
      description="This particular piece is a visual representation of an Indian actor Sanjay Dutt in his antagonistic role of Adheera in KGF: Chapter 2. The expression of sitter here also captures the fearless, powerful and ruthless character of Adheera."
      imageUrl="./Images/SanjayDutt.jpg"
      size="24 x 16 inches"
      medium="Charcoal on paper"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={SanjayDutt}
    />
    <Card
      name="NORMAN REEDUS"
      description="This is a realistic portrait of an American actor and model Norman Reedus in his role of Daryl Dixon from the show Walking Dead. The sitter's expression here tells us about the character he plays, who despite his hardened personality, is not without a soft, emotional side."
      imageUrl="./Images/Norman.jpg"
      size="24 x 16 inches"
      medium="Charcoal on paper"
      Model3D={Norman}
    />

    <h3 id="mini-canvases">Mini Canvases</h3>
    <Card
      name="CELESTIAL TIDE"
      description="An asterism of stars spills across the night sky as a young man, sitting on the edge, attempts to absorb this celestial tide."
      imageUrl="./Images/BlueGalaxy.jpg"
      size="4 x 4 inches"
      medium="Acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={BlueGalaxy}
    />
    <Card
      name="FALLEN ANGELS"
      description="This piece of art captures the beauty of a peaceful pink sky on a cold Christmas day. The pink notes in the sky envelope in shadow the snow- covered Christmas tress, watching over the fallen angel."
      imageUrl="./Images/PinkSky.jpg"
      size="4 x 4 inches"
      medium="Acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={PinkSky}
    />
    <Card
      name="SHADES OF SPRING"
      description="This artwork captures the various blazing colors of springtime into one flower to represent the essence of the season. A cool blue combines with brilliant shades of yellow and green to create a unique chromatic piece."
      imageUrl="./Images/Flower.jpg"
      size="4 x 4 inches"
      medium="Acrylic on canvas"
      Model3D={Flower}
    />
    <Card
      name="UNNATURAL BEAUTY"
      description="This painting embodies an overlap between natural and man-made as it showcases an artistic pattern of leaves in a rather unnatural combination of silver and gold."
      imageUrl="./Images/GoldenLeaf.jpg"
      size="4 x 4 inches"
      medium="Acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={GoldenLeaf}
    />

    <h3 id="water-colors">Water Colors</h3>
    <Card
      name="SAPPHIRE SYMPHONY"
      description="The sapphire flowers in this piece have a little transparency which allows for a freshness and luminosity in its washes and makes it alluring. These flowers capture an essence of peace, serenity, openness and relaxation that help bring focus and calm the mind."
      imageUrl="./Images/BlueFlower.jpg"
      size="5.3 x 8.3 inches"
      medium="Watercolors on paper"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={BlueFlower}
    />
    <Card
      name="TWO OF A KIND"
      description="TThis artwork showcases two foxes trying to to hold onto each other as their souls slowly fade into the oblivion. The same hues of orange, red and yellow are used in the composition of both subjects to reflect how identical they are at their core."
      imageUrl="./Images/Fox.jpg"
      size="5.3 x 8.3 inches"
      medium="Watercolors on paper"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Fox}
    />

    <h3 id="poster-colors">Poster Colors</h3>
    <Card
      name="A HAPPY FACE"
      description="This artwork seeks to capture the essence of a troubled character by utilising various colour schemes in a low poly portrait. It incorporates a set of provocative colours to set a sharp and stimulating mood. The portrait is set against a black backdrop and aims to reflect the multifaceted character of the joker"
      imageUrl="./Images/Joker.png"
      size="5.3 x 8.3 inches"
      medium="poster colors on paper"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Joker}
    />
    <Card
      name="DALÍ"
      description="This abstracted piece of art captures the sharp-eyed expression of the infamous Spanish artist Salvador Dali. To seize the essence of his look and pay tribute to Dali’s bizarre artistry, this artwork incorporates a range of distinctive colours within his portrait. These vivid colours are placed in hard- edged geometrical fragments across his face as a homage to Dali’s technicality and precise craftsmanship."
      imageUrl="./Images/Dali.jpg"
      size="18 x 18 inches"
      medium="poster colors on paper"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Dali}
    />
    <h3 id="3d-models">3D Models</h3>
    <Card
      name="THE HUNGRY SIMPSON"
      description="By utilising an array of vibrant colours, the Hungry Simpson is a joyful portrait of a beloved fictional character. This contemporary piece effectively utilises its positive space to create an energetic and lively aesthetic. This detailed three dimensional artwork reflects a natural sense of depth and space. "
      imageUrl="./Images/Simpson.jpg"
      size="12 x 10 inches"
      medium="acrylic on canvas"
      style='' 
      sizeRange='' 
      subjectMatter=''
      Model3D={Joker}
    />
    </div>
  );
}

export default GalleryPage;
