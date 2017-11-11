import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai';
import {ParentComponent, SingleParentComponent, ArrayParentComponent, SingleArrayParentComponent} from './ParentComponent';
import {DifferentParentComponent, SingleDifferentParentComponent, DifferentArrayParentComponent, SingleDifferentArrayParentComponent} from './DifferentParentComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Two-child testee', () => {
  it('same as same two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<ParentComponent />).getElement())).to.equal(true);
  });
  it('same as same two-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<ArrayParentComponent />).getElement())).to.equal(true);
  });
  it('different from similar one-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleParentComponent />).getElement())).to.equal(false);
  });
  it('different from similar one-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<DifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<ParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getElement())).to.equal(false);
  });
});

describe('Two-child array testee', () => {
  it('same as same two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<ParentComponent />).getElement())).to.equal(true);
  });
  it('same as same two-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<ArrayParentComponent />).getElement())).to.equal(true);
  });
  it('different from similar one-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleParentComponent />).getElement())).to.equal(false);
  });
  it('different from similar one-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<DifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<ArrayParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getElement())).to.equal(false);
  });
});

describe('Single-child testee', () => {
  it('different from similar two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<ParentComponent />).getElement())).to.equal(false);
  });
  it('different from similar two-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<ArrayParentComponent />).getElement())).to.equal(false);
  });
  it('same as same single-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleParentComponent />).getElement())).to.equal(true);
  });
  it('same as same single-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleArrayParentComponent />).getElement())).to.equal(true);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<DifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<SingleParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getElement())).to.equal(false);
  });
});

describe('Single-child array testee', () => {
  it('different from similar two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<ParentComponent />).getElement())).to.equal(false);
  });
  it('different from similar two-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<ArrayParentComponent />).getElement())).to.equal(false);
  });
  it('same as same single-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleParentComponent />).getElement())).to.equal(true);
  });
  it('same as same single-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleArrayParentComponent />).getElement())).to.equal(true);
  });
  it('different from different two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<DifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different array two-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<DifferentArrayParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleDifferentParentComponent />).getElement())).to.equal(false);
  });
  it('different from different single-child array tester', () => {
    expect(shallow(<SingleArrayParentComponent />).equals(shallow(<SingleDifferentArrayParentComponent />).getElement())).to.equal(false);
  });
});