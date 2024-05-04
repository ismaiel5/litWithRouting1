import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {pages} from '../modules/pages';

@customElement('cv-page')
export class cvPage extends LitElement{

    @property()
    page : string = "home";


    render(){
        return html`
        <!-- render the page from the pages based on the page property passed -->
        ${pages[this.page]}
        `
    }


}