import {LitElement, html, css} from 'lit';
import { customElement} from 'lit/decorators.js';

@customElement('app-about-us')
export class appAboutUs  extends LitElement {

    render(){
        return  html`
        <h2>About us page</h2>
        `;
    }   
}