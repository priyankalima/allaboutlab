footer.append(
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container d-flex" id="container"></div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.footer; 
                    container.innerHTML = `
                       <div class="about d-col">
                            <span>About</span>
                            <span class="para">${item.about}</span>
                       </div>
                       <div class="quicklink d-col">
                            <span>Quick Links</span>
                            ${
                                item.quicklink.map(e=>{
                                    return `
                                    <li class="para">
                                        ${e}
                                    </li>
                                    `
                                }).join("")
                            }
                       </div>
                       <div class="promot d-col">
                            <span>Presenting the new All About Lab App</span>
                            <span class="para">${item.para}</span>
                            <div style="margin-top:10px; gap:20px;" class="d-flex">
                                <svg width="101" height="41" viewBox="0 0 101 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="100.5" height="41" rx="10" fill="#2B2929" />
                                <path d="M40.75 11.7273V29.2718C40.7501 29.3098 40.7624 29.347 40.7851 29.3786C40.8079 29.4103 40.8403 29.435 40.8781 29.4496C40.916 29.4642 40.9576 29.4682 40.9979 29.4609C41.0381 29.4537 41.0751 29.4355 41.1043 29.4088L50.9424 20.5L41.1043 11.5903C41.0751 11.5636 41.0381 11.5454 40.9979 11.5382C40.9576 11.5309 40.916 11.5349 40.8781 11.5495C40.8403 11.5641 40.8079 11.5888 40.7851 11.6205C40.7624 11.6521 40.7501 11.6893 40.75 11.7273ZM55.0674 16.8393L42.7317 10.5287L42.7241 10.5247C42.5115 10.4175 42.3096 10.6845 42.4837 10.8399L52.1534 19.4255L55.0674 16.8393ZM42.4846 30.1601C42.3096 30.3155 42.5115 30.5825 42.725 30.4753L42.7327 30.4713L55.0674 24.1607L52.1534 21.5736L42.4846 30.1601ZM60.0472 19.3839L56.6025 17.6224L53.3635 20.5L56.6025 23.3763L60.0472 21.6161C60.9843 21.1353 60.9843 19.8647 60.0472 19.3839Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="41" fill="none" viewBox="0 0 101 41">
                                <rect width="100.5" height="41" fill="#2B2929" rx="10"/>
                                <g clip-path="url(#a)">
                                    <path fill="#fff" fill-rule="evenodd" d="M50.25 10.083c5.753 0 10.417 4.664 10.417 10.417S56.003 30.917 50.25 30.917 39.833 26.253 39.833 20.5s4.664-10.417 10.417-10.417Zm.52 11.459h-6.458a1.042 1.042 0 0 0 0 2.083h.536l-.299.532a1.043 1.043 0 0 0 1.819 1.02l.867-1.552h3.536a1.041 1.041 0 1 0 0-2.083Zm1.973-3.114a1.041 1.041 0 0 0-1.872.91l.054.109 3.208 5.73a1.042 1.042 0 0 0 1.871-.91l-.054-.11-.298-.53h.535a1.042 1.042 0 0 0 .122-2.078l-.121-.007h-1.703l-1.742-3.114Zm-2.625-4.687a1.041 1.041 0 0 0-1.872.909l.053.11.757 1.35-1.882 3.36a1.042 1.042 0 0 0 1.753 1.12l.066-.101 3.208-5.73a1.042 1.042 0 0 0-1.753-1.12l-.066.102-.132.238-.132-.236v-.002Z" clip-rule="evenodd"/>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                    <path fill="#fff" d="M37.75 8h25v25h-25z"/>
                                    </clipPath>
                                </defs>
                                </svg>

                            </div>

                       </div>
                     `
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
              <div class="container>
                <span class="copyright">Copyright 2023</span> 
              </div>
            `
        }
    )
)