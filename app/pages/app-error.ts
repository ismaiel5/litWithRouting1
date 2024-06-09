import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-error')
export class appError extends LitElement{

    render(){
        return html`
        <h2> Error page</h2>
        <p>This page does not exit </p>
        `
    }
}