import React from 'react';

let ParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'a'} className='asd'></div>
    <div key={'b'} className='fgh'></div>
  </div>
);

let ArrayParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'a'} className='asd'></div>
    {[<div key={'b'} className='fgh'></div>]}
  </div>
);

let SingleParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'b'} className='asd'></div>
  </div>
);

let SingleArrayParentComponent = () => (

  <div className='parent-component-class'>
    {[<div key={'b'} className='asd'></div>]}
  </div>
);

export {ParentComponent, ArrayParentComponent, SingleParentComponent, SingleArrayParentComponent};
