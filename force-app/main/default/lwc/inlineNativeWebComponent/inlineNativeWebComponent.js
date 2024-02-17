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

export default class InlineNativeWebComponent extends LightningElement {}
