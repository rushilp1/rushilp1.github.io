import React from 'react';
import PropTypes from 'prop-types';
import {
  IconCodepen,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconReplit,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'CodePen':
      return <IconCodepen />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Replit':
      return <IconReplit />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
