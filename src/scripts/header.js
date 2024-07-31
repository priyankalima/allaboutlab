header.appendChild(
    // navbar
    Object.assign(
        document.createElement('nav'),
        {
            innerHTML: `
            <div class="container d-flex">
                <div class="logo" id="logo"></div>
                <div class="menu" id="menu"></div>
            </div>
            <div class="rspn-menu" id="rspnMenu"></div>
            `,
            function: addEventListener('load', () => {
                fetch("./content.json").then(res => res.json()).then(data => {
                    const item = data.header;
                    logo.innerHTML = `
                    <img src=${item.logo}>
                    <div class="toggle-btn" id="toggleBtn" onclick="toggle(this)">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    `
                    // menu
                    menu.innerHTML += `
                    <div class="cto-btn">
                        <button>Book For Home Sampling</button>
                        <button><img src=${data.phone}> 080 457 74444</button>
                    </div>
                    <div class="menu-list">
                    ${item.menu.map(elmnt => {
                        return `<a href="">${elmnt}</a>`
                    }).join("")
                        }
                    </div>
                    `
                    // rspn menu
                    rspnMenu.innerHTML += `
                    <div class="cto-btn">
                        <button>Book For Home Sampling</button>
                        <button><img src=${data.phone}> 080 457 74444</button>
                    </div>
                    <div class="menu-list">
                    ${item.menu.map(elmnt => {
                        return `<a href="">${elmnt}</a>`
                    }).join("")
                        }
                    </div>
                    `
                    // toggle menu
                    document.getElementById("rspnMenu").style.display = "none";
                    toggleBtn.addEventListener('click', () => {
                        var x = document.getElementById("rspnMenu");
                        // x.classList.remove('rspn-menu')
                        if (x.style.display === "block") {
                            x.style.display = "none";
                        } else {
                            x.style.display = "block";
                        }
                    })
                })
            })
        }
    )
)
// if need to create page then us js for tabs and add