class Modal extends HTMLElement {
    constructor(){
        super()
        this.style.display = 'none'
        this.build()
    }

    build() {
        const style = this.styles()
        const icon = this.Iconclose()

        const buttonClose = document.createElement('button')
        buttonClose.innerHTML= icon
        Object.assign(buttonClose.style, style.btClose)

        buttonClose.addEventListener('click', this.close.bind(this))

        const boxHeader = document.createElement('header')
        Object.assign(boxHeader.style, style.boxHeader)
        boxHeader.appendChild(buttonClose)
        
        const slot = document.createElement('slot')
        
        const box = document.createElement('section')
        Object.assign(box.style, style.box)
        box.appendChild(boxHeader)
        box.appendChild(slot)

        const wrap = document.createElement('section')
        Object.assign(wrap.style, style.wrap)
        wrap.appendChild(box)

        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(wrap)        
    }
    
    styles() {
        const wrap = {
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "transparent",
            zIndex: 100,
        }
        const box = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.5rem',
            borderRadius: '5px',
            width: this.width ? this.width : '25rem',
            height: this.height ? this.height : '15rem',
            border: this.border ? this.border : '1px solid black',
            boxShadow: this.boxShadow ? this.boxShadow : '0px 0px 12px 4px',
            backgroundColor: this.color ? this.color : 'rgb(255, 255, 255)',
            overflow: 'hidden',
        }
        const boxHeader = {
            position: 'absolute',
            top: 0,
            boxSizing: 'border-box',
            width: '100%',
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            backgroundColor: this.color ? this.color : 'rgb(255, 255, 255)',
            filter: `brightness(0.9)`
        }
        const btClose = {
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent'
        }

        return {
            wrap,
            box,
            boxHeader,
            btClose
        }
    }

    Iconclose(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - 
        https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 
            29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 
            45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 
            4.1-45.1L233.7 256 376.6 84.5z"
        />
        </svg>
        `
    }

    close(){
        this.style.display = 'none'
    }
}

customElements.define('custom-modal', Modal)