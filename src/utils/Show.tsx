import React, {Children, ReactElement, ReactNode} from 'react';

interface ShowProps {
  children: ReactNode;
}

interface ShowWhenProps {
  isTrue: boolean;
  children: ReactNode;
}

interface ShowElseProps {
  render: ReactNode;
  children: ReactNode;
}

const Show: React.FC<ShowProps> & {
  When: React.FC<ShowWhenProps>;
  Else: React.FC<ShowElseProps>;
} = (props) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(props.children, (child) => {
    if ((child as ReactElement).props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && (child as ReactElement).props.isTrue === true) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);

Show.Else = ({ render, children }) => render || children;

export {Show}