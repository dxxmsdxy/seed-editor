import React from 'react';
import styles from '@/assets/css/previewloader.module.css';

interface PreviewLoaderProps {
  loading: boolean;
  size?: 'small' | 'medium' | 'large';
  customClass?: string;
}

const PreviewLoader: React.FC<PreviewLoaderProps> = ({ loading, size = 'medium', customClass = '' }) => {
  return (
    <div 
      className={`
        ${styles.previewLoader}
        ${loading ? styles.loading : ''}
        ${styles[size]}
        ${customClass}
      `.trim()}
    >
      {[...Array(15)].map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default React.memo(PreviewLoader);