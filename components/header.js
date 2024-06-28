// const headerEl = document.createElement( "template" );

// headerEl.innerHTML = `
//     <style>
//         div {
//             background-color: #666666;
//             padding: 1rem;
//             text-align: center;
//             color: #efefef;
//             width: 100%;
//         }
//     </style>
//     <div>Hello, world!!! This is a reusable web component</div>
// `;

class Header extends HTMLElement {
    constructor() {
        super();
        this.navItems = "";
    }

    static get observedAttributes() {
        return [ "data" ];
    }

    attributeChangedCallback( attr, oldValue, newValue ) {
        this.dataArray = JSON.parse( newValue );
        this.dataArray.forEach( el => {
            this.navItems += `<a href="${ el.link }" class="nav-item ${ el.active ? "active" : ""}">${ el.label }</a>`;
        });
    }

    connectedCallback() {
        // const shadowRoot = this.attachShadow({ mode: "closed" });

        // shadowRoot.appendChild( headerEl.content );
        this.innerHTML = `
            <nav class="nav">
                <div class="nav-items">
                    ${ this.navItems }
                </div>
            </nav>
        `;
    }
}

customElements.define( "header-component", Header );