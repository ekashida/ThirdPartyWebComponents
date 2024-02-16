import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import litBundle from '@salesforce/resourceUrl/litbundle';

export default class LitHelloWorld extends LightningElement {
    renderedCallback() {
        loadScript(this, litBundle)
            .then(() => {
                console.info('successfully loaded litbundle');
            })
            .catch((error) => {
                console.error('failed to load litbundle', error);
            });
    }
}
