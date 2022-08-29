/* eslint-disable no-unused-vars */
import React from 'react';
import { OBJModel, DirectionLight } from 'react-3d-viewer';
import Cypher from '../assets/cypher.obj';

function DisplayModels() {
  return (
    <div>
      <div style={{ margin: 'auto' }}>
        <OBJModel
          width="1000"
          height="1000"
          position={{ x: 0, y: 0, z: 0 }}
          src={{ Cypher }}
          onLoad={() => {
            console.log('Loading'); // eslint-disable-line no-console
          }}
          onProgress={(xhr) => {
            console.log('Loaded'); // eslint-disable-line no-console
          }}
        >
          <DirectionLight color={0xffffff} />
          <DirectionLight
            position={{ x: 180, y: 100, z: 100 }}
            color={0xffffff}
          />

        </OBJModel>
      </div>
    </div>
  );
}

export default DisplayModels;
