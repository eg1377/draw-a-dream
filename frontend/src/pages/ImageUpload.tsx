import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// styled-components 정의
const Box = styled.div`
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-items: center;

  .Img {
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: white;

    .img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 6px;
    }
  }

  .InputButton {
    padding: 5%;
    font-size: 15px;
  }

  .modal, .password-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content, .password-modal-content {
      background: white;
      padding: 20px;
      border-radius: 6px;
    }
  }
`;

// 환경 변수 또는 상수로 지정된 비밀번호
const UPLOAD_PASSWORD = '5056';

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      // 파일 선택이 취소되었거나 파일이 없는 경우
      setSelectedFile(null);
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }
    // 비밀번호 확인 모달을 열어 비밀번호 입력 요청
    setIsPasswordModalOpen(true);
  };

  const verifyAndUpload = async () => {
    if (password !== UPLOAD_PASSWORD) {
      alert('관리자 외 업로드 불가합니다.');
      setIsPasswordModalOpen(false);
      setPassword('');
      return;
    }

    console.log("Sending upload request");

    if (selectedFile) { // selectedFile이 null이 아닌 경우에만 실행
      console.log("Sending upload request");
  
      const formData = new FormData();
      formData.append('image', selectedFile); // 여기서 selectedFile은 null이 아닙니다.
  
      try {
        // 환경 변수를 사용하거나 직접 업로드 URL을 지정하세요.
        const uploadURL = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/upload`;
        const response = await axios.post(uploadURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('API URL:', process.env.REACT_APP_API_URL);
        console.log("Received response:", response.data.message);
  
        setIsModalOpen(true);
        setIsPasswordModalOpen(false);
        setPassword(''); // 성공 후 비밀번호 상태 초기화
  
        // 이미지 선택 및 미리보기 초기화
        setSelectedFile(null);
        setPreview(null);
  
        // 파일 입력 필드 초기화
        document.querySelector<HTMLInputElement>('input[type="file"]')!.value = '';
      } catch (error) {
        console.error('Error uploading image:', error);
        setIsModalOpen(true);
        setIsPasswordModalOpen(false);
        setPassword(''); // 에러 발생 시 비밀번호 상태 초기화
      }
    } else {
      alert("파일을 선택해주세요.");
      setIsPasswordModalOpen(false); // 파일이 선택되지 않았을 때 비밀번호 모달 닫기
      setPassword(''); // 파일이 선택되지 않았을 때 비밀번호 상태 초기화
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  return (
    <Box>
      <div className='Img'>{preview && <img className='img' src={preview} alt="Selected" />}</div>

      <div className='InputButton'>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>업로드가 완료되었습니다.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}

      {isPasswordModalOpen && (
        <div className="password-modal">
          <div className="password-modal-content">
            <p>비밀번호를 입력하세요.</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={verifyAndUpload}>확인</button>
            <button onClick={closePasswordModal}>취소</button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default ImageUpload;
