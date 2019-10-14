import React from 'react';
import { Consumer } from './Context';
import GalleryCard from './GalleryCard';

const Gallery = () => {
  return (
    <Consumer>
      { context => {
        return (
        <article className = "New-item">
          {context.items.map((item, index) => 
            <GalleryCard 
              {...item}
              key = {item.id.toString()}
              index = { index }
            />
          )}
    </article>
        );
      }}
    </Consumer>
  );
}


export default Gallery;