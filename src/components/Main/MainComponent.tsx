import React from 'react';
import './MainComponent.scss';

interface CanvasComponentProps { }
 
const CanvasComponent: React.FC<CanvasComponentProps> = () => {
  return ( 
    <section className="canvas">
      canvas
    </section>
   );
}
 
export default CanvasComponent;