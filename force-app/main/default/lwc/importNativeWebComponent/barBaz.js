class BarBaz extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        const p = document.createElement('p');
        p.textContent = 'BAR BAZ!';
        this._shadowRoot.appendChild(p);
    }
}

export { BarBaz };
