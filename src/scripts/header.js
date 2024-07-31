header.appendChild(
    // navbar
    Object.assign(
        document.createElement('nav'),
        {
            innerHTML :`
            <div class="container">
                <div class="logo" id="logo"></div>
                </div class="menu" id="menu"></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch("./content.json").then(res=>res.json()).then(data=>{
                    const item = data.header;
                    logo.innerHTML = `
                    <img src=${item.logo}>
                    <div class="toggle-btn" id="toggleBtn" onclick="toggle(this)">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    `
                })
            })
        }
    )
)
// if need to create page then us js for tabs and add