// src/types/image.ts
export interface ImageData {
    src: string;
    title: string;
    description: string;
  }
  
  // src/data/sampleImages.ts
  import img1 from '../assets/img/Utopia2.jpg';
  // 나머지 이미지 import 생략
  
  import { ImageData } from '../assets';
  
  export const sampleImages: ImageData[] = [
    {
      src: img1,
      title: "나원\n(Paradise or Disaster)", 
      description: "72.7x90.9cm_장지에 채색_2022"
    },
    // 나머지 이미지 데이터 생략
  ];
  