import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        padding: '50px 20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #0056b3, #ffcc00)',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#0056b3', fontSize: '28px', marginBottom: '10px' }}>Bienvenue</h2>
        <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          Vous n'avez pas encore de compte ?{' '}
          <Link to="/register" style={{ color: '#0056b3', fontWeight: 'bold' }}>Inscrivez-vous ici</Link>
        </p>

        <form style={{ maxWidth: '100%' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Email *</label>
          <input
            type="email"
            placeholder="Entrez votre email"
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />

          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Mot de passe</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Entrez votre mot de passe"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: '10px',
                cursor: 'pointer',
                color: '#0056b3',
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '14px',
              marginTop: '10px',
            }}
          >
            <label>
              <input type="checkbox" /> Se souvenir de moi
            </label>
            <Link to="/forgot-password" style={{ color: '#0056b3' }}>Mot de passe oublié ?</Link>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#ffcc00',
              color: '#0056b3',
              fontWeight: 'bold',
              padding: '12px',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '18px',
              marginTop: '20px',
            }}
          >
            Connexion
          </button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <p>Connectez-vous avec votre réseau social.</p>
          <button
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              cursor: 'pointer',
              background: '#4285F4',
              color: 'white',
              marginTop: '10px',
            }}
          >
            <FaGoogle style={{ marginRight: '8px' }} /> Continuer avec Google
          </button>
          <button
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              cursor: 'pointer',
              background: '#3b5998',
              color: 'white',
              marginTop: '10px',
            }}
          >
            <FaFacebook style={{ marginRight: '8px' }} /> Continuer avec Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
