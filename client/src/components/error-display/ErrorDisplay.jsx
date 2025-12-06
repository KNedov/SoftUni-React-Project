// components/ErrorDisplay.jsx
import './ErrorDisplay.css';

export default function ErrorDisplay({ error, onRetry }) {
  return (
    <div className="error-display">
      <p className="error-message-display">{error}</p>
    
    </div>
  );
}