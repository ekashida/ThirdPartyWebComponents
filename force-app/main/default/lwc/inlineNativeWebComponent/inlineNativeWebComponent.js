import { LightningElement } from 'lwc';

customElements.define('inline-registration', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        const p = document.createElement('p');
        p.textContent = 'Inline registration upgraded successfully!';
        this._shadowRoot.appendChild(p);
    }
});

export default class InlineNativeWebComponent extends LightningElement {
    constructor() {
        super();
        if (!customElements.get('constructor-registration')) {
            customElements.define('constructor-registration', class extends HTMLElement {
                constructor() {
                    super();
                    this._shadowRoot = this.attachShadow({ mode: 'closed' });
                    const p = document.createElement('p');
                    p.textContent = 'Constructor registration upgraded successfully!';
                    this._shadowRoot.appendChild(p);
                }
            });
        }
    }
    connectedCallback() {
        if (!customElements.get('connected-registration')) {
            customElements.define('connected-registration', class extends HTMLElement {
                constructor() {
                    super();
                    this._shadowRoot = this.attachShadow({ mode: 'closed' });
                    const p = document.createElement('p');
                    p.textContent = 'Connected registration upgraded successfully!';
                    this._shadowRoot.appendChild(p);
                }
            });
        }
    }
    renderedCallback() {
        if (!customElements.get('rendered-registration')) {
            customElements.define('rendered-registration', class extends HTMLElement {
                constructor() {
                    super();
                    this._shadowRoot = this.attachShadow({ mode: 'closed' });
                    const p = document.createElement('p');
                    p.textContent = 'Rendered registration upgraded successfully!';
                    this._shadowRoot.appendChild(p);
                }
            });
        }
    }
}
