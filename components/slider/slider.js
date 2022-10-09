class NodecgSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let input = document.createElement('input');
        let style = document.createElement('style');    

        style.innerHTML = `
            :host {
             --nodecg-slider-foreground-color: #3367D6;
            --nodecg-slider-background-color: #BDBDBD;
            --nodecg-slider-value: 50%;
            display: flex;
            width: 100%;
            height: 22px;
            align-items: center;
            }
    
            @font-face {
                font-family: 'Roboto';
                src: url('/components/fonts/Roboto-Flex.ttf');
              }
              
              input[type=range] {
                width: 100%;
                height: 4px;
                outline: none;
                -webkit-appearance: none;
              }

              input[type=range]:hover {
                cursor: pointer;
              }
              
              input[type=range]:focus {
                background-color: inherit;
                outline: none;
              }
              
              input[type=range]::-webkit-slider-runnable-track {
                outline: none;
                height: 4px;
                border-radius: 1000px;
                background: linear-gradient(to right, var(--nodecg-slider-foreground-color) 0%, var(--nodecg-slider-foreground-color) var(--nodecg-slider-value), var(--nodecg-slider-background-color) var(--nodecg-slider-value), var(--nodecg-slider-background-color) 100%);
                border: none;
                box-shadow: none;
              }
              
              input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                margin-top: calc(4px * 0.5 - 14px * 0.5);
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50px;
                border: none;
                background: #3367D6;
                cursor: pointer;
              }
              
              input[type=range]::-moz-range-track {
                outline: none;
                height: 4px;
                border-radius: 1000px;
                background: linear-gradient(to right, var(--nodecg-slider-foreground-color) 0%, var(--nodecg-slider-foreground-color) var(--nodecg-slider-value), var(--nodecg-slider-background-color) var(--nodecg-slider-value), var(--nodecg-slider-background-color) 100%);
                border: none;
                box-shadow: none;
              }
              
              input[type=range]::-moz-range-thumb {
                width: 14px;
                height: 14px;
                border-radius: 50px;
                border: none;
                background: #3367D6;
                cursor: pointer;
              }         
            `

        input.setAttribute('type', `range`);
        input.setAttribute('oninput', 'this.style.setProperty("--nodecg-slider-value", `${this.value}%`)')
        if (this.getAttribute('min')) input.min = this.getAttribute('min');
        if (this.getAttribute('max')) input.max = this.getAttribute('max');
        if (this.getAttribute('step')) input.step = this.getAttribute('step');
        if (this.getAttribute('onChange')) input.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onchange')) input.setAttribute('onChange', this.getAttribute('onChange')); 
        if (this.getAttribute('onInput')) input.setAttribute('onInput', 'this.style.setProperty("--nodecg-slider-value", `${this.value}%`); ' + this.getAttribute('onInput')); 
        if (this.getAttribute('oninput')) input.setAttribute('onInput', 'this.style.setProperty("--nodecg-slider-value", `${this.value}%`); ' + this.getAttribute('onInput')); 

        if (this.hasAttribute('value')) {
            input.value = this.getAttribute('value');
            this.style.setProperty('--nodecg-slider-value', `${this.getAttribute('value')}%`)
        }

        this.shadowRoot.append(input, style)
    }

    get value() {
        return this.shadowRoot.querySelector('input').value;
    }

    set value(val) {
        this.shadowRoot.querySelector('input').value = val;
        this.style.setProperty('--nodecg-slider-value', `${val}%`)
    }

    get disabled() {
        return this.shadowRoot.querySelector('input').disabled;
    }

    set disabled(val) {
        this.shadowRoot.querySelector('input').disabled = val;
    }

    set foregroundColor(val) {
        this.style.setProperty('--nodecg-slider-foreground-color', val)
    }

    set backgroundColor(val) {
        this.style.setProperty('--nodecg-slider-background-color', val)
    }
}

customElements.define('nodecg-slider', NodecgSlider);