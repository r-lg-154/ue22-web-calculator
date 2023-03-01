// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
let nombres = []  
let operateurs = []
let nombre_v = 0
let keys = (document.getElementsByClassName("calculator__keys"))[0]
let display = document.getElementsByClassName("calculator__display")[0]
    for (let clickkey of keys.children)
    {
        let content = clickkey.textContent
        clickkey.addEventListener("click",
        (event)=>
        {
            console.log(content)

            if (display.textContent == 0 &&  !event.target.classList.contains("key--operator"))
            {
                display.textContent = content
                nombre_v = content 
            }
            if (event.target.classList.contains("key--operator"))
            {   
                nombres.push(nombre_v)
                operateurs.push(content)
            }
            if (event.target.classList.contains("key--equals"))
            {
                let res = 0
            }

            else
            {   
                nombre_v = nombre_v *10 + content
                display.textContent += content
            }
        })
    }

