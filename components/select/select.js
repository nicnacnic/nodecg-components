class NodecgSelect extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let container = document.createElement('div');
        let select = document.createElement('select');
        let label = document.createElement('label');
        let bar = document.createElement('div');
        let style = document.createElement('style')

        style.innerHTML = `
            :host {
                display: inline-block;
            width: 100%;
            height: 48px;
            }

        @font-face {
            font-family: 'Roboto';
            src: url('/components/fonts/Roboto-Flex.ttf');
        }
        
        div {
            display: inline-block;
            position: relative;
            width: 100%;
            height: 48px;
            font-family: 'Roboto', sans-serif;
            letter-spacing: .044em;
        }
        
        select {
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #3F495D;
            border: none;
            padding: 16px 10px 0 10px;
            transition-duration: 0.2s;
            color: #FFFFFF;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 15px;
        }
        
        select:hover {
            background-color: #505A6B;
        }
        
        select:focus {
            background-color: #505A6B;
            outline: none;
            caret-color: #2196F3;
        }
        
        label {
            position: absolute;
            width: 100%;
            height: 100%;
            top: -1.5px;
            left: 0;
            transform: translateY(16px);
            padding: 0 12px;
            font-size: 16px;
            color: #C5C8CE;
            transition-duration: 0.2s;
            pointer-events: none;
        }
        
        select:focus+label, select:not(:placeholder-shown)+label {
            font-size: 12px;
            color: #C5C8CE;
            transform: translateY(7px);
        }
        
        select:focus+label {
            color: #2196F3;
        }
        
        select ~ div {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #C1C4CB;
            background-image: linear-gradient(#2196F3, #2196F3);
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: 0% 100%;
            transition-duration: 0.4s;
        }
        
        select:focus~div {
            height: 2px;
            background-size: 100% 100%;
        }
        
        select:disabled:hover {
            background-color: #3F495D;
            opacity: 0.4;
        }
        
        select[type]:invalid+label {
            transition-duration: 0;
            color: #FF5252;
        }
        
        select[type]:invalid~div {
            background-color: #FF5252;
            background-image: linear-gradient(#FF5252, #FF5252);
        }
        
        select:disabled, select:disabled:hover {
            opacity: 0.4;
            background-color: #3F495D;
            cursor: not-allowed;
        }
        
        select:disabled+label, select:disabled~div div {
            opacity: 0.5;
        }
        
        select::-webkit-outer-spin-button,
        select::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        /* Firefox */
        select[type=number] {
          -moz-appearance: textfield;
        }
        `

        select.setAttribute('placeholder', ' ');
        select.setAttribute('autocomplete', 'off');
        select.innerHTML = this.innerHTML;
        select.multiple = (this.hasAttribute('multiple')) ? true : false;
        select.size = this.getAttribute('max');
        select.disabled = (this.hasAttribute('disabled')) ? true : false;
        if (this.getAttribute('onChange')) select.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onchange')) select.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onInput')) select.setAttribute('onInput', this.getAttribute('onInput')); 
        if (this.getAttribute('oninput')) select.setAttribute('onInput', this.getAttribute('onInput'));

        label.innerHTML = this.getAttribute('label');

        container.append(select, label, bar, style)
        this.shadowRoot.append(container)

    }

    get value() {
        return this.shadowRoot.querySelector('select').value;
    }

    set value(val) {
        this.shadowRoot.querySelector('select').value = val;
    }

    get invalid() {
        return this.shadowRoot.querySelector('select').invalid;
    }

    set invalid(val) {
        this.shadowRoot.querySelector('select').invalid = val;
    }

    get options() {
        return this.shadowRoot.querySelector('select').options;
    }

    set options(val) {
        this.shadowRoot.querySelector('select').innerHTML = val;
    }

    get disabled() {
        if (this.shadowRoot.querySelector('select').hasAttribute('disabled')) return true;
        return false;
    }

    set disabled(val) {
        switch (val) {
            case true: this.shadowRoot.querySelector('select').setAttribute('disabled', 'true'); break;
            case false: this.shadowRoot.querySelector('select').removeAttribute('disabled'); break;
        }
    }
}

customElements.define('nodecg-select', NodecgSelect);
