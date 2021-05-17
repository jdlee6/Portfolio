import React from 'react';
import Type from '../components/home/type';

export default function Home() {
  return (
    <div className="home-section" id="home">
      <Type />
      <div className="arrow">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}