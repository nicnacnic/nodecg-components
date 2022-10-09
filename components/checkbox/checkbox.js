class NodecgCheckbox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let input = document.createElement('input');
        let style = document.createElement('style');

        style.innerHTML = `
            :host {
                --nodecg-checkbox-color: #2F3A4F;
                --nodecg-checkbox-checked-color: #2196F3;
                display: inline-block;
                width: 20px;
                height: 20px;
            }
    
            input[type=checkbox] {
                appearance: none;
                width: 100%;
                height: 100%;
                border: 2.5px solid white;
                border-radius: 2px;
                display: grid;
                place-content: center;
                transition: 0.1s ease;
              }
              input[type=checkbox]::before {
                content: "";
                width: 1.4em;
                height: 1.4em;
                background-color: var(--nodecg-checkbox-color);
                opacity: 0;
                clip-path: polygon(10% 50%, 18% 42%, 40% 64%, 82% 22%, 90% 30%, 40% 80%);
              }
              input[type=checkbox]:checked {
              
                background-color: var(--nodecg-checkbox-checked-color);
                border-color: var(--nodecg-checkbox-checked-color);
              }
              
              input[type=checkbox]:checked::before {
                opacity: 100;
              }  

              input[type=checkbox]:disabled {
                opacity: 0.4;
              }
            `

        input.type = 'checkbox'
        input.checked = (this.hasAttribute('checked')) ? true : false;
        input.disabled = (this.hasAttribute('disabled')) ? true : false;
        input.title = this.title;

        this.shadowRoot.append(input, style)
    }

    get checked() {
        return this.shadowRoot.querySelector('input').checked;
    }

    set checked(val) {
        this.shadowRoot.querySelector('input').checked = val;
    }

    get disabled() {
        if (this.shadowRoot.querySelector('input').hasAttribute('disabled')) return true;
        return false;
    }

    set disabled(val) {
        this.shadowRoot.querySelector('input').disabled = val;
    }

    set color(val) {
        this.style.setProperty('--nodecg-checkbox-color', val)
    }

    set checkedColor(val) {
        this.style.setProperty('--nodecg-checkbox-checked-color', val)
    }
}

customElements.define('nodecg-checkbox', NodecgCheckbox);