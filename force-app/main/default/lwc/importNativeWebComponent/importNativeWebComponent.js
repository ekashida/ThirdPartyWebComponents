import { LightningElement } from 'lwc';
import { BarBaz } from './barBaz';

export default class InlineNativeWebComponent extends LightningElement {
    handleClick() {
        if (!customElements.get('bar-baz')) {
            customElements.define('bar-baz', BarBaz);
        }
    }
}
