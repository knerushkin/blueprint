import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';

const OVERLAY_ID = 'overlay';

export default class OverlayRenderer extends React.Component<any, any> {
  overlayElement: HTMLElement | Element | null = document.getElementById(OVERLAY_ID);
  element: HTMLElement | Element | null = document.createElement('div');

  componentDidMount() {
    if (this.overlayElement && this.element) {
      this.overlayElement.appendChild(this.element);
    }
  }

  componentWillUnmount() {
    if (this.overlayElement && this.element) {
      this.overlayElement.removeChild(this.element);
    }
  }

  render() {
    const { children } = this.props;
    if (this.element) {
      return ReactDOM.createPortal(<Overlay>{children}</Overlay>, this.element);
    }
    return null;
  }
}
