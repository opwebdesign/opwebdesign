class Navbar extends HTMLElement {
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
        this.innerHTML = `
            <nav class="nav">
                <img class="nav-logo" src="/images/logo.svg" alt="logo" />
                <div class="nav-items">
                    ${ this.navItems }
                </div>
            </nav>
        `;

        const nav = document.querySelector( ".nav" );
        nav.addEventListener( "click", () => {
            console.log( "click!!!" );
        })
    }
}

customElements.define( "nav-bar", Navbar );