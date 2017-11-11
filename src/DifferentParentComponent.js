import React from 'react';

let DifferentParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'a'} className='fgh'></div>
    <div key={'b'} className='asd'></div>
  </div>
);

let DifferentArrayParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'a'} className='fgh'></div>
    {[<div key={'b'} className='asd'></div>]}
  </div>
);

let SingleDifferentParentComponent = () => (

  <div className='parent-component-class'>
    <div key={'b'} className='fgh'></div>
  </div>
);

let SingleDifferentArrayParentComponent = () => (

  <div className='parent-component-class'>
    {[<div key={'b'} className='fgh'></div>]}
  </div>
);

export {DifferentParentComponent, DifferentArrayParentComponent, SingleDifferentParentComponent, SingleDifferentArrayParentComponent};