
class NodecgTextarea extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let container = document.createElement('div');
        let textarea = document.createElement('textarea');
        let label = document.createElement('label');
        let bar = document.createElement('div');
        let style = document.createElement('style')

        style.innerHTML = `
            :host {
                display: inline-block;
                width: 100%;
                height: 100%;
                min-height: 48px;
            }

        @font-face {
            font-family: 'Roboto';
            src: url('/components/fonts/Roboto-Flex.ttf');
        }
        
        div {
            display: inline-block;
            position: relative;
            width: 100%;
            min-height: 48px;
            font-family: 'Roboto', sans-serif;
            letter-spacing: .044em;
        }
        
        textarea {
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #3F495D;
            border: none;
            padding: 24px 12px 6px 12px;
            transition-duration: 0.2s;
            color: #FFFFFF;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 15px;
            resize: none;
        }
        
        textarea:hover {
            background-color: #505A6B;
        }
        
        textarea:focus {
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
        
        textarea:focus+label, textarea:not(:placeholder-shown)+label {
            font-size: 12px;
            color: #C5C8CE;
            transform: translateY(7px);
        }
        
        textarea:focus+label {
            color: #2196F3;
        }
        
        textarea ~ div {
            position: absolute;
            bottom: 3px;
            left: 0;
            width: 100%;
            min-height: 1px;
            height: 1px;
            background-color: #C1C4CB;
            background-image: linear-gradient(#2196F3, #2196F3);
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: 0% 100%;
            transition-duration: 0.4s;
        }
        
        textarea:focus~div {
            height: 2px;
            background-size: 100% 100%;
        }
        
        textarea:disabled:hover {
            background-color: #3F495D;
            opacity: 0.4;
        }
        
        textarea[type]:invalid+label {
            transition-duration: 0;
            color: #FF5252;
        }
        
        textarea[type]:invalid~div {
            background-color: #FF5252;
            background-image: linear-gradient(#FF5252, #FF5252);
        }
        
        textarea:disabled, textarea:disabled:hover {
            opacity: 0.4;
            background-color: #3F495D;
            cursor: not-allowed;
        }
        
        textarea:disabled+label, textarea:disabled~div div {
            opacity: 0.5;
        }
        
        textarea::-webkit-outer-spin-button,
        textarea::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        /* Firefox */
        textarea[type=number] {
          -moz-appearance: textfield;
        }
        `

        textarea.setAttribute('placeholder', ' ');
        textarea.setAttribute('autocomplete', 'off');
        if (this.getAttribute('cols')) textarea.cols = this.getAttribute('cols');
        if (this.getAttribute('rows')) textarea.rows = this.getAttribute('rows');
        if (this.getAttribute('maxLength')) textarea.maxLength = this.getAttribute('maxlength');
        if (this.getAttribute('wrap')) textarea.wrap = this.getAttribute('wrap');
        if (this.getAttribute('onChange')) textarea.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onchange')) textarea.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onInput')) textarea.setAttribute('onInput', this.getAttribute('onInput')); 
        if (this.getAttribute('oninput')) textarea.setAttribute('onInput', this.getAttribute('onInput'));
        if (this.hasAttribute('value')) textarea.value = this.getAttribute('value');

        textarea.disabled = (this.hasAttribute('disabled')) ? true : false;

        label.innerHTML = this.getAttribute('label');

        container.append(textarea, label, bar, style)
        this.shadowRoot.append(container)

    }

    get value() {
        return this.shadowRoot.querySelector('textarea').value;
    }

    set value(val) {
        this.shadowRoot.querySelector('textarea').value = val;
    }

    get invalid() {
        return this.shadowRoot.querySelector('textarea').invalid;
    }

    set invalid(val) {
        this.shadowRoot.querySelector('textarea').invalid = val;
    }

    get disabled() {
        if (this.shadowRoot.querySelector('textarea').hasAttribute('disabled')) return true;
        return false;
    }

    set disabled(val) {
        switch (val) {
            case true: this.shadowRoot.querySelector('textarea').setAttribute('disabled', 'true'); break;
            case false: this.shadowRoot.querySelector('textarea').removeAttribute('disabled'); break;
        }
    }
}

customElements.define('nodecg-textarea', NodecgTextarea);
