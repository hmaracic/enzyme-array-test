import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { expect } from 'chai';
import {ParentComponent, SingleParentComponent, ArrayParentComponent, SingleArrayParentComponent} from './ParentComponent';
import {DifferentParentComponent, SingleDifferentParentComponent, DifferentArrayParentComponent, SingleDifferentArrayParentComponent} from './DifferentParentComponent';



describe('Two-child testee', () => {
  it('same as same two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<ParentComponent />).getNode())).to.equal(true);
  });
  it('same as same two-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<ArrayParentComponent />).getNode())).to.equal(true);
  });
  it('different from similar one-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleParentComponent />).getNode())).to.equal(false);
  });
  it('different from similar one-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<DifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getNode())).to.equal(false);
  });
});

describe('Two-child array testee', () => {
  it('same as same two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<ParentComponent />).getNode())).to.equal(true);
  });
  it('same as same two-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<ArrayParentComponent />).getNode())).to.equal(true);
  });
  it('different from similar one-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleParentComponent />).getNode())).to.equal(false);
  });
  it('different from similar one-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<DifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getNode())).to.equal(false);
  });
});

describe('Single-child testee', () => {
  it('different from similar two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<ParentComponent />).getNode())).to.equal(false);
  });
  it('different from similar two-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<ArrayParentComponent />).getNode())).to.equal(false);
  });
  it('same as same single-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleParentComponent />).getNode())).to.equal(true);
  });
  it('same as same single-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleArrayParentComponent />).getNode())).to.equal(true);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<DifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getNode())).to.equal(false);
  });
});

describe('Single-child array testee', () => {
  it('different from similar two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<ParentComponent />).getNode())).to.equal(false);
  });
  it('different from similar two-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<ArrayParentComponent />).getNode())).to.equal(false);
  });
  it('same as same single-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleParentComponent />).getNode())).to.equal(true);
  });
  it('same as same single-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleArrayParentComponent />).getNode())).to.equal(true);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<DifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getNode())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getNode())).to.equal(false);
  });
});