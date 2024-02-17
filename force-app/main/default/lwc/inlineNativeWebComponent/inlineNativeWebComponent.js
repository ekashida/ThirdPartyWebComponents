import { LightningElement } from 'lwc';

class FooBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        const p = document.createElement('p');
        p.textContent = 'FOO BAR BAZ!';
        this._shadowRoot.appendChild(p);
    }
}

export default class InlineNativeWebComponent extends LightningElement {
    handleClick() {
        if (!customElements.get('foo-bar')) {
            customElements.define('foo-bar', FooBar);
        }
    }
}
