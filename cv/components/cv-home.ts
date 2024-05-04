import { html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('cv-home')
export class cvHome extends LitElement{

    render(){
        // get the page name/key from the url
        const pageKey : string = document.location.pathname.split('/')[1];

        return html`
        <!-- passing the page to the page component -->
        <cv-page page=${pageKey || 'home'}><cv-page>
        <div>Home page
        </div>`
    }


}