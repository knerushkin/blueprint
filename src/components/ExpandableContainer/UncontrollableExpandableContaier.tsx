import React from 'react';
import ExpandableContainer, {
  Expanded,
  Collapsed,
  ExpandElement,
  IExpandableContainerProps,
} from './ExpandableContainer';

interface IUncontrolleExpandableContainerState {
  expanded: boolean;
}

class UncontrollableExpandableContaier extends React.Component<
  Partial<IExpandableContainerProps>,
  IUncontrolleExpandableContainerState
> {
  constructor(props: IExpandableContainerProps) {
    super(props);
    this.state = { expanded: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    return (
      <ExpandableContainer onExpand={this.toggle} expanded={expanded}>
        {children}
      </ExpandableContainer>
    );
  }
}
export { Expanded, Collapsed, ExpandElement };
export default UncontrollableExpandableContaier;
