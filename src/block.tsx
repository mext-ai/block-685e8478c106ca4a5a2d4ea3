import React from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

const Block: React.FC<BlockProps> = ({ title, description }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      OHOHOOH
    </div>
  );
};

export default Block;