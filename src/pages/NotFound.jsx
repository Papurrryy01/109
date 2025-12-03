import { Link } from 'react-router-dom';
import './NotFound.css';
import { IconMoodPuzzled } from '@tabler/icons-react';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <IconMoodPuzzled size={100} color="#888" />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="notfound-home-link">Go Home</Link>
    </div>
  );
}

export default NotFound;
