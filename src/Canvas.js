import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Text, Rect } from 'react-konva';

class Canva extends Component {
  constructor(props){
    super(props);
    this.state = {
        isDragging: false,
        x: 50,
        y: 50,
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>clicked the figure: {this.state.isDragging?"true":"false"}</p>
          <p>current x position is: {this.state.x}</p>
          <p>current y position is: {this.state.y}</p>
        </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
          draggable='true'
          onDragStart={() => {
            this.setState({
              isDragging: true,
            });
          }}
          onDragEnd={(e) => {
            this.setState({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
        />
        </Layer>
      </Stage>
      </div>
    );
  }
}

 
export default Canva;