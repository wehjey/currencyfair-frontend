import React from "react";
import "./modal.css"

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.limitInput = this.limitInput.bind(this);

    // Dismiss modal on outside click
    window.onclick = (event) => {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  /**
   * Limit sms code text box to 1 element
   */
  limitInput(data) {
    if (data.target.value.length > 1) {
      data.target.value = data.target.value.slice(0, 1);
    }
  }

  /**
   * Dismiss modal
   */
  closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  render() {
    return (
      <div id="modal" className="modal" style={{ display: this.props.display }}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="mh-title">
              <i className="fa fa-lock"></i>
              <span className="mh-text">Identity verification required</span>
            </div>
            <div className="mh-info">
              For your security, we ocassionally require you to verify your
              identity by entering a code sent to your mobile device.
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <div className="sms-box">
                <div className="sms-text float-left">
                  Enter the code sent via SMS to
                </div>
                <div className="phone-box float-left">
                  <div className="ctry-code float-left">+353</div>
                  <div className="ctry-phone float-left">872251177</div>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="otc-box">
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
                <input type="number" className="otc-text-input" max="1" onInput={this.limitInput} name="" id="" />
              </div>

              <div className="otc-code-help">
                <a href="/" className="help float-left">
                  <i className="fa fa-rotate-right"></i>
                  <span className="">Receive a new code</span>
                </a>
                <a href="/" className="help float-right">
                  <i className="fa fa-phone"></i>
                  <span className="">Receive code via call instead</span>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="float-left">
              <button className="btn btn-primary v-btn" disabled>
                Verify Identity
              </button>
              <button
                className="btn btn-outline close"
                onClick={this.closeModal}
              >
                Back
              </button>
            </div>
            <div className="float-right">
              <a href="/" className="t-primary phone-text">
                I can’t access this mobile device
              </a>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
