class NodecgButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        let button = document.createElement('button');
        let span = document.createElement('span');
        let style = document.createElement('style');

        style.innerHTML = `
            :host {
             --nodecg-button-foreground-color: #FFFFFF;
            --nodecg-button-background-color: #272727;
            --nodecg-button-hover-foreground-color: #FFFFFF;
            --nodecg-button-hover-background-color: #383838;
            --nodecg-button-click-background-color: rgba(164, 164, 164, 0.5);
            --nodecg-button-box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
            display: inline-block;
            width: 100%;
            height: 40px;
            pointer-events: none;
            }
    
            @font-face {
                font-family: 'Roboto';
                src: url('/components/fonts/Roboto-Flex.ttf');
              }

              div {
                  width: 100%;
                  height: 40px;
              }
              
              button {
                  position: relative;
                  display: inline-block;
                  font-family: 'Roboto', sans-serif;
                  text-transform: uppercase;
                  letter-spacing: .11em;
                  font-size: 14px;
                  font-variation-settings: 'wght' 600;
                  width: 100%;
                  height: 40px;
                  margin: 0;
                  text-align: center;
                  color: var(--nodecg-button-foreground-color);
                  background-color: var(--nodecg-button-background-color);
                  border: none;
                  border-radius: 4px;
                  overflow: hidden;
                  box-shadow: var(--nodecg-button-box-shadow);
                  /* box-shadow: 0px 2px 2px 0 #1E2533; */
                  transition: background-color 0.28s;
                  background-position: center;
                  padding-top: 1px;
                  pointer-events: auto;
                }
              
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                
                button:hover {
                  color: var(--nodecg-button-hover-foreground-color);
                  background-color: var(--nodecg-button-hover-background-color);
                  /* background: var(--nodecg-button-hover-background-color) radial-gradient(circle, transparent 1%, var(--nodecg-button-hover-background-color) 1%) center/15000%;
                  */
                  cursor: pointer;
                } 
                
                button:disabled, button:disabled:hover {
                  opacity: 0.6;
                  cursor: not-allowed;
                  pointer-events: none;   
                }
              
                span.ripple {
                    position: absolute;
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 500ms linear;
                    background-color: var(--nodecg-button-click-background-color);
                  }
                  
                  @keyframes ripple {
                    to {
                      transform: scale(4);
                      opacity: 0;
                    }
                  }
                    
            `

        span.innerHTML = this.innerHTML;
        let ripple = !this.hasAttribute('noRipple')
        button.setAttribute('onClick', `createRipple(this, ${ripple})`);
        button.append(span);

        this.shadowRoot.append(button, style)
    }

    get value() {
        return this.shadowRoot.querySelector('span').innerHTML;
    }

    set value(val) {
        this.shadowRoot.querySelector('span').innerHTML = val;
    }

    get buttonText() {
        return this.shadowRoot.querySelector('span').innerHTML;
    }

    set buttonText(val) {
        this.shadowRoot.querySelector('span').innerHTML = val;
    }

    get disabled() {
        return this.shadowRoot.querySelector('button').disabled;
    }

    set disabled(val) {
        this.shadowRoot.querySelector('button').disabled = val;
    }

    get title() {
        return this.shadowRoot.querySelector('button').getAttribute('title');
    }

    set title(val) {
        this.shadowRoot.querySelector('button').setAttribute('title', val);
    }

    set foregroundColor(val) {
        this.style.setProperty('--nodecg-button-foreground-color', val)
    }

    set backgroundColor(val) {
        this.style.setProperty('--nodecg-button-background-color', val)
    }

    set foregroundColorHover(val) {
        this.style.setProperty('--nodecg-button-hover-foreground-color', val)
    }

    set backgroundColorHover(val) {
        this.style.setProperty('--nodecg-button-hover-background-color', val)
    }
}

customElements.define('nodecg-button', NodecgButton);

function createRipple(button, ripple) {
    if (!ripple) return;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${0}px`;
    circle.style.top = `-${button.clientHeight * 10}px`;
    circle.style.pointerEvents = 'none';
    circle.classList.add("ripple");
    const rippleSpan = button.getElementsByClassName("ripple")[0];
    if (rippleSpan)
    rippleSpan.remove();
    button.appendChild(circle);
}