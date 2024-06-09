import { LitElement, html, css } from 'lit';
import './memory-tile.js';

export class MemoryGame extends LitElement {

    static get properties() {
        return {

            pictures: {
                type: String,
            },

            _order: {
                type: Array,
                state: true
            }
        }
    }

    static get styles() {
        return css`

            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                width: calc(100vw - 78px);
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 3/2;
                container-type: inline-size;
                container-name: game;
            }

            div {
                display: grid;
                grid-template-columns: repeat(var(--cols), 1fr);
                gap: 3cqw;
            }

            memory-tile {
                --font-size: 10cqw;
            }

            [hidden] {
                display: none!important;
            }
        `;
    }

    constructor() {
        super();
        this.addEventListener('memory-tile-click', this.#handleTileClick.bind(this));
    }

    render() {
        return html`
            <div>
                ${this.icons.map((icon, i) => html`
                <memory-tile .icon="${icon}" style="order:${this._order?.[i]}"></memory-tile>
            `)}
            </div>

            <audio id="yes" src="/yes.m4a" preload="auto"></audio>
            <audio id="no" src="/no.m4a" preload="auto"></audio>
        `;
    }

    updated(props) {
        if(props.has('pictures')) {
            this.reset();
            this.style.setProperty('--items', this.icons.length);
            this.style.setProperty('--cols', Math.ceil(Math.sqrt(this.icons.length)));
            this.style.setProperty('--rows', Math.floor(Math.sqrt(this.icons.length)));
        }
    }

    get icons() {
        const icons = this.pictures.split(',').map(icon => Array(2).fill(icon)).flat();
        return icons || [];
    }

    get #tiles() {
        return this.shadowRoot?.querySelectorAll?.('memory-tile');
    }

    get #selectedTiles() {
        return [...this.#tiles].filter(item => item.selected === true && item.inert !== true);
    }

    get #matchedTiles() {
        return [...this.#tiles].filter(item => item.inert === true);
    }

    reset() {
        this.#shuffle();
        this.inert = true;

        this.#tiles.forEach(item => {
            const timeout = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
            window.setTimeout(() => item.select(), timeout);
        });

        window.setTimeout(() => {
            this.#tiles.forEach(item => {
                const timeout = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
                window.setTimeout(() => item.unselect(), timeout);
            });
        }, 3000);

        window.setTimeout(() => {
            this.inert = false;
        }, 4000);

    }

    #shuffle() {
        const list = Array.from(Array(this.#tiles?.length || 0).keys());
        let shuffled = list
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        this._order = shuffled;
    }

    #handleTileClick(e) {
        if(this.#selectedTiles.length < 2) return;
        this.inert = true;
        const [tileA, tileB] = this.#selectedTiles;
        if(tileA.icon === tileB.icon) {
            this.shadowRoot.querySelector('#yes').play();
            tileA.inert = true;
            tileB.inert = true;
            this.inert = false;
            if(this.#tiles.length === this.#matchedTiles.length) {
                window.setTimeout(() => this.reset(), 2000);                
            }
        } else {
            this.shadowRoot.querySelector('#no').play();
            window.setTimeout(() => {
                tileA.unselect();
                tileB.unselect();
                this.inert = false;
            }, 1000);
        }
}

}

window,customElements.define('memory-game', MemoryGame);