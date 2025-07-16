// src/components/TestNavBar.jsx
import React from "react";

export default function TestNavBar() {
  return (
    <nav style={{
      width: '100vw',
      background: '#f5f5f5',
      padding: '1rem 0',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2vw'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#222',
          margin: 0,
          letterSpacing: '2px'
        }}>
          María Emilia
        </h1>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#sobre-mi" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>Sobre Mi</a></li>
          <li><a href="#formacion" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>Formación</a></li>
          <li><a href="#trayectoria" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>Trayectoria</a></li>
          <li><a href="#contacto" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
