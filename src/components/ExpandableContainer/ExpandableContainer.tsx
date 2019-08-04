import React from 'react';

const defaultExpandValue: IExpandableContainerProps = { expanded: false };
const ExpandContext = React.createContext(defaultExpandValue);

export interface IExpandableContainerProps {
  children?: React.ReactNode;
  onExpand?: () => void;
  expanded: boolean;
}

class ExpandableContainer extends React.Component<IExpandableContainerProps> {
  static Expanded: React.ReactNode;
  static Collapsed: React.ReactNode;
  static ExpandElement: React.ReactNode;

  render() {
    const { children, onExpand, expanded } = this.props;
    return (
      <ExpandContext.Provider value={{ onExpand, expanded }}>{children}</ExpandContext.Provider>
    );
  }
}

const Expanded = ({ children }: any) => {
  return (
    <ExpandContext.Consumer>
      {({ expanded }) => {
        return expanded ? children : '';
      }}
    </ExpandContext.Consumer>
  );
};
export { Expanded };

const Collapsed = ({ children }: any) => {
  return (
    <ExpandContext.Consumer>
      {({ expanded }) => {
        return !expanded ? children : '';
      }}
    </ExpandContext.Consumer>
  );
};
export { Collapsed };

const ExpandElement = (element: any) => {
  return () => (
    <ExpandContext.Consumer>
      {({ expanded, onExpand }) => {
        const Element = () => element({ expanded });
        return (
          <div onClick={onExpand}>
            <Element />
          </div>
        );
      }}
    </ExpandContext.Consumer>
  );
};
export { ExpandElement };

export default ExpandableContainer;
