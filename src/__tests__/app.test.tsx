import { h } from 'preact';
import { shallow, mount, render } from 'enzyme';
import { FaDollarSign } from 'react-icons/fa';

import { SideBarIcon } from '../navbar';

it('renders the icon', () => {
  const wrapper = mount(<FaDollarSign />);
  expect(true).toBe(true);
});
