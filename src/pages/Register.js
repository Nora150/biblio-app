import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <h2 style={{ color: '#0056b3', fontSize: '28px', marginBottom: '10px' }}>Créer un compte</h2>
        <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          Inscrivez-vous maintenant et obtenez un compte gratuitement.
        </p>

        <form style={{ maxWidth: '100%' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Nom complet</label>
          <input
            type="text"
            placeholder="Entrez votre nom complet"
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

          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>
            Confirmez votre mot de passe
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirmez votre mot de passe"
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              marginTop: '10px',
            }}
          >
            <input type="checkbox" id="terms" style={{ marginRight: '5px' }} />
            <label htmlFor="terms">
              J'accepte les <Link to="/terms" style={{ color: '#0056b3' }}>termes & conditions</Link>
            </label>
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
            S'inscrire
          </button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <p>Ou inscrivez-vous avec votre réseau social :</p>
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

        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          Vous avez déjà un compte ? <Link to="/login" style={{ color: '#0056b3' }}>Connectez-vous ici</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
