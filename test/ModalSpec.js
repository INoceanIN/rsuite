import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { getDOMNode, getInstance } from './TestWrapper';

import Modal from '../src/Modal';

describe('Modal', () => {
  it('Should render the modal content', () => {
    const instance = getInstance(
      <Modal show>
        <p>message</p>
      </Modal>
    );
    assert.equal(instance.modal.getDialogElement().querySelectorAll('p').length, 1);
  });

  it('Should close the modal when the modal dialog is clicked', done => {
    const doneOp = () => {
      done();
    };

    const instance = getInstance(<Modal show onHide={doneOp} />);
    const dialog = instance.modal.getDialogElement();

    ReactTestUtils.Simulate.click(dialog);
  });

  it('Should not close the modal when the "static" dialog is clicked', () => {
    const onHideSpy = sinon.spy();
    const instance = getInstance(<Modal show onHide={onHideSpy} backdrop="static" />);
    const dialog = instance.modal.getDialogElement();
    ReactTestUtils.Simulate.click(dialog);

    assert.ok(!onHideSpy.calledOnce);
  });

  it('Should be automatic height', () => {
    const instance = getInstance(
      <Modal className="custom" overflow show>
        <Modal.Body style={{ height: 2000 }} />
      </Modal>
    );
    assert.ok(findDOMNode(instance.dialog).querySelector('.rs-modal-body').style.overflow, 'auto');
  });

  it('Should call onHide callback', done => {
    const doneOp = () => {
      done();
    };
    const instance = getInstance(
      <Modal className="custom" show onHide={doneOp}>
        <Modal.Header />
      </Modal>
    );
    const closeButton = findDOMNode(instance.dialog).querySelector('.rs-modal-header-close');
    ReactTestUtils.Simulate.click(closeButton);
  });

  it('Should call onExited callback', done => {
    const doneOp = () => {
      done();
    };

    class Demo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          show: true
        };
        this.handleClose = this.handleClose.bind(this);
      }
      handleClose() {
        this.setState({
          show: false
        });
      }
      render() {
        return (
          <Modal
            className="custom"
            ref={ref => {
              this.demo = ref;
            }}
            show={this.state.show}
            onHide={this.handleClose}
            onExited={doneOp}
          >
            <Modal.Header />
          </Modal>
        );
      }
    }
    const instance = getInstance(<Demo />);
    const closeButton = findDOMNode(instance.demo.dialog).querySelector('.rs-modal-header-close');
    ReactTestUtils.Simulate.click(closeButton);
  });

  it('Should have a custom className', () => {
    const instance = getInstance(<Modal className="custom" show />);
    assert.ok(findDOMNode(instance.dialog).className.match(/\bcustom\b/));
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = getInstance(<Modal style={{ fontSize }} show />);
    assert.equal(findDOMNode(instance.dialog).style.fontSize, fontSize);
  });

  it('Should have a custom className prefix', () => {
    const instance = getInstance(<Modal classPrefix="custom-prefix" show />);
    assert.ok(findDOMNode(instance.dialog).className.match(/\bcustom-prefix\b/));
  });
});
