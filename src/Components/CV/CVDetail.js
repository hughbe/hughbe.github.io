import React from 'react';
import './css/CVDetail.css';

const CVDetail = ({ title, children }) => (
  <div className="cv-detail">
    <h3 className="cv-detail-title">{title}</h3>
    {children}
  </div>
);
export default CVDetail;