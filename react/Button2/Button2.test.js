import React from 'react';
import { shallow } from 'enzyme';
import Button2 from './Button2';

describe('Button:', () => {
  describe('color variants:', () => {
    it('should render blue button', () => {
      const wrapper = shallow(<Button2 color="blue">SEEK</Button2>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render pink button', () => {
      const wrapper = shallow(<Button2 color="pink">SEEK</Button2>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render gray button', () => {
      const wrapper = shallow(<Button2 color="gray">SEEK</Button2>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render white button', () => {
      const wrapper = shallow(<Button2 color="white">SEEK</Button2>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render transparent button', () => {
      const wrapper = shallow(<Button2 color="transparent">SEEK</Button2>);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render white ghost button', () => {
      const wrapper = shallow(
        <Button2 color="white" ghost>
          SEEK
        </Button2>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with node', () => {
    const wrapper = shallow(
      <Button2 color="blue">
        <h5>SEEK</h5>
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with array of nodes', () => {
    const wrapper = shallow(
      <Button2 color="blue">
        <span>SEEK</span>
        <span>AU</span>
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an anchor with href="https://www.seek.com.au"', () => {
    const wrapper = shallow(
      <Button2 color="pink" component="a" href="https://www.seek.com.au">
        SEEK
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(
      <Button2 color="gray" className="foo">
        SEEK
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fullwidth button', () => {
    const wrapper = shallow(
      <Button2 color="transparent" fullWidth>
        SEEK
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as loading', () => {
    const wrapper = shallow(
      <Button2 color="blue" loading>
        SEEK
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom component based on it’s reference', () => {
    const CustomComponent = props => <a {...props} someProp="kraken" />;
    const wrapper = shallow(
      <Button2 color="pink" component={CustomComponent}>
        SEEK
      </Button2>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
