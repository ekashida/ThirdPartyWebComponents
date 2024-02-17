class ImportRegistration extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        const p = document.createElement('p');
        p.textContent = 'Import registration upgraded successfully!';
        this._shadowRoot.appendChild(p);
    }
}

export { ImportRegistration };
