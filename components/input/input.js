
class NodecgInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let container = document.createElement('div');
        let input = document.createElement('input');
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
        
        input {
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #3F495D;
            border: none;
            padding: 16px 12px 0 12px;
            transition-duration: 0.2s;
            color: #FFFFFF;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 15px;
        }
        
        input:hover {
            background-color: #505A6B;
        }
        
        input:focus {
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
        
        input:focus+label, input:not(:placeholder-shown)+label {
            font-size: 12px;
            color: #C5C8CE;
            transform: translateY(7px);
        }
        
        input:focus+label {
            color: #2196F3;
        }
        
        input ~ div {
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
        
        input:focus~div {
            height: 2px;
            background-size: 100% 100%;
        }
        
        input:disabled:hover {
            background-color: #3F495D;
            opacity: 0.4;
        }
        
        input[type]:invalid+label {
            transition-duration: 0;
            color: #FF5252;
        }
        
        input[type]:invalid~div {
            background-color: #FF5252;
            background-image: linear-gradient(#FF5252, #FF5252);
        }
        
        input:disabled, input:disabled:hover {
            opacity: 0.4;
            background-color: #3F495D;
            cursor: not-allowed;
        }
        
        input:disabled+label, input:disabled~div div {
            opacity: 0.5;
        }
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        /* Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }
        `

        input.setAttribute('placeholder', ' ');
        input.setAttribute('autocomplete', 'off');
        input.type = this.getAttribute('type');
        if (this.getAttribute('min')) input.min = this.getAttribute('min');
        if (this.getAttribute('max')) input.max = this.getAttribute('max');
        if (this.getAttribute('step')) input.step = this.getAttribute('step');
        if (this.getAttribute('minLength')) input.minLength = this.getAttribute('minlength');
        if (this.getAttribute('maxLength')) input.maxLength = this.getAttribute('maxlength');
        if (this.getAttribute('pattern')) input.pattern = this.getAttribute('pattern');
        if (this.getAttribute('onChange')) input.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onchange')) input.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onInput')) input.setAttribute('onInput', this.getAttribute('onInput')); 
        if (this.getAttribute('oninput')) input.setAttribute('onInput', this.getAttribute('onInput'));
        if (this.hasAttribute('value')) input.value = this.getAttribute('value');

        input.disabled = (this.hasAttribute('disabled')) ? true : false;

        label.innerHTML = this.getAttribute('label');

        container.append(input, label, bar, style)
        this.shadowRoot.append(container)

    }

    get value() {
        return this.shadowRoot.querySelector('input').value;
    }

    set value(val) {
        this.shadowRoot.querySelector('input').value = val;
    }

    get invalid() {
        return this.shadowRoot.querySelector('input').invalid;
    }

    set invalid(val) {
        this.shadowRoot.querySelector('input').invalid = val;
    }

    get disabled() {
        if (this.shadowRoot.querySelector('input').hasAttribute('disabled')) return true;
        return false;
    }

    set disabled(val) {
        switch (val) {
            case true: this.shadowRoot.querySelector('input').setAttribute('disabled', 'true'); break;
            case false: this.shadowRoot.querySelector('input').removeAttribute('disabled'); break;
        }
    }
}

customElements.define('nodecg-input', NodecgInput);
