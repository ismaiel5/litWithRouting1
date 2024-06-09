import { html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-main')
export class appMain extends LitElement{

    render(){
        return html`
        <h2>Main page</h2>`
    }
}


