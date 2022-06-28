import img1 from '../home/96520.jpg';

class SlideShowObject {
    constructor(img, altImg) {
        this.img = img;
        this.altImg = altImg;
    }
  }

  const image1 = new SlideShowObject(img1, 'NIKE BABY0');
  const image2 = new SlideShowObject(img1, 'NIKE BABY1');
  const image3 = new SlideShowObject(img1, 'NIKE BABY2');
  const image4 = new SlideShowObject(img1, 'NIKE BABY3');
  const image5 = new SlideShowObject(img1, 'NIKE BABY4');
  const image6 = new SlideShowObject(img1, 'NIKE BABY5');



  const slideshowArray = [image1, image2, image3, image4, image5, image6 ];

  export default slideshowArray;