import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = (props) => {
  function extractExternal(props) {
    if (props.to.startsWith('/')) {
      return (
        <Link
          id={props.id}
          className={props.className}
          target={props.target}
          to={props.to}>
          {props.children}
        </Link>
      );
    } else if (props.to.includes('https://')) {
      return (
        <a
          id={props.id}
          className={props.className}
          target={props.target}
          href={props.to}>
          {props.children}
        </a>
      );
    }
  }

  return extractExternal(props);
};

export default ExternalLink;
