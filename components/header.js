const headerEl = document.createElement( "template" );

headerEl.innerHTML = `
    <style>
        div {
            background-color: #666666;
            padding: 1rem;
            text-align: center;
            color: #efefef;
            width: 100%;
        }
    </style>
    <div>Hello, world!!! This is a reusable web component</div>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });

        shadowRoot.appendChild( headerEl.content );
    }
}

customElements.define( "header-component", Header );