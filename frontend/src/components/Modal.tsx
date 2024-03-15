interface ModalProps {
    message: string;
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
      <div style={{
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: 'white', 
        padding: '20px', 
        zIndex: 1000
      }}>
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    );
  };
  
  export default Modal;