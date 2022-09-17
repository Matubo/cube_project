import './App.css';
import C2D from './components/2d/2D';
import C3D from './components/3d/3D';

export default function App() {
  return (
    <div className="React-App">
      {/* <C2D></C2D> */}
      <C3D></C3D>
      <button onClick={() => console.log('test')}>GDE BLIAT</button>
    </div>
  );
}
