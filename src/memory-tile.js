import { LitElement, html, css } from 'lit';

export class MemoryTile extends LitElement {

    #internals;

    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }

    static get styles() {
        return css`
                :host {
                    display: block;
                    transition: 500ms ease all;
                }

                :host([inert]) {
                    opacity: 0.5;
                    transform: scale(0) rotate(180deg);
                    transition-delay: 1200ms;
                }

            * {
                box-sizing: border-box;
            }

            [hidden] {
                display: none!important;
            }

            section {
                aspect-ratio: 1/1;
                perspective: 1000px;
                user-select: none;
            }

            .inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 500ms;
                transform-style: preserve-3d;
                border: 12px solid white;
                box-shadow: 0 0 5px #ccc;
                border-radius: 12px;
              }
              
              /* Do an horizontal flip when you move the mouse over the flip box container */
              :host(:state(selected)) section .inner,
              :host(:state(matched)) section .inner {
                    transform: rotateY(180deg);
              }

              section:hover .inner {
                transform: scale(1.02);
              }
              
              /* Position the front and back side */
              .front, .back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;
                border-radius: 8px;
              }
              
              /* Style the front side (fallback if image is missing) */
              .front {
                background-color: #bbb;
              }
              
              /* Style the back side */
              .back {
                background-color: dodgerblue;
                transform: rotateY(180deg);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 8vmax;
              }
        `;
    }

    constructor() {
        super();
        this.#internals = this.attachInternals();
    }

    render() {
        return html`
            <section @click="${this.#handleClick}">
                <div class="inner">
                    <div class="front"></div>
                    <div class="back">${this.icon}</div>
                </div>
            </section>
        `;
    }

    get selected() {
        return this.#internals.states.has('selected');
    }

    unselect() {
        this.#internals.states.delete('selected');
    }

    #handleClick() {
        const stateName = 'selected';
        this.#internals.states.add(stateName);
        this.dispatchEvent(new CustomEvent('memory-tile-click', {composed: true}));
    }

}

window,customElements.define('memory-tile', MemoryTile);