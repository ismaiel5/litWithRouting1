import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {pages} from '../modules/pages';

@customElement('app-page')
export class appPage extends LitElement{

    @property()
    selectedPage : string;


   connectedCallback(): void {
       super.connectedCallback();
       this.getSelectedPage();
   }


   // Gets the page name and if not valid return error page. 
   getSelectedPage(){
    // get the page name/key from the url
    const pageKey  = document.location.pathname.split('/')[1];

    this.selectedPage = pageKey in pages ? pageKey : 'error';
   }

    render(){
        return html`
        <!-- render the page from the pages based on the page property passed -->
        ${pages[this.selectedPage]}
        `
    }


}