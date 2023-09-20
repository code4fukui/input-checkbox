export class InputCheckbox extends HTMLElement {
  constructor(s, checked) {
    super();
    if (s !== undefined) {
      this.textContent = s;
    }
    this._replace(checked);
  }
  _replace(chked) {
    this.opts = [];

    const checked = chked !== undefined ? chked : this.getAttribute("checked");
    
    const c = document.createElement("span");
    const label = document.createElement("label");
    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.checked = checked;
    chk.id = Math.random();
    this.chk = chk;
    const span = document.createElement("span");
    label.appendChild(span);
    label.setAttribute("for", chk.id);
    this.childNodes.forEach(c => {
      span.appendChild(c);
    });
    
    c.appendChild(chk);
    c.appendChild(label);
    this.innerHTML = "";
    this.appendChild(c);

    //radio.onchange = () => this.changed(); // 勝手にやってくれる様子

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mlist, observer) => {
      //console.log(mlist);
      /*
      // Use traditional 'for loops' for IE 11
      for (const mutation of mlist) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
          console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
      }
      */
      // Later, you can stop observing
      observer.disconnect();
      this._replace();
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(this, config);
  }
  /*
  changed() { // 勝手にやってくれたので不要
    if (this.onchange != null) {
      const v = this.value;
      console.log(v, this.lastvalue)
      if (v != this.lastvalue) {
        console.log("ch")
        this.lastvalue = v;
        //this.onchange();
      }
    }
  }
  */
  get checked() {
    return this.chk.checked;
  }
  set checked(v) {
    this.chk.checked = v;
  }
}

customElements.define("input-checkbox", InputCheckbox);
