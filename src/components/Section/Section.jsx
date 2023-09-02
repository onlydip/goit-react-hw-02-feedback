import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';
export default function Section({ title, children }) {
  return (
    <div>
      <SectionStyle>{title}</SectionStyle>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
