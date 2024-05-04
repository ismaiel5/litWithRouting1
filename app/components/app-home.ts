import { html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-home')
export class appHome extends LitElement{

    render(){
        // get the page name/key from the url
        const pageKey : string = document.location.pathname.split('/')[1];

        return html`
        <!-- passing the page to the page component -->
        <app-page page=${pageKey || 'home'}><app-page>
        `
    }


}