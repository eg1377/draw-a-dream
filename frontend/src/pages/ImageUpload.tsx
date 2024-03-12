import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState<string[]>([]); // 업로드된 이미지의 URL을 저장할 상태

  // 이미지 파일을 읽고, 상태에 추가하는 함수
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result as string]);
      };

      reader.readAsDataURL(file); // 파일을 읽어서 Data URL로 변환
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: '100px', height: '100px' }}>
            <img src={image} alt={`uploaded-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
