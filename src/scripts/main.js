main.append(
    // section one
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="d-flex banner-container" id="bannerContainer"></div>
            <div class="slider-btn" id="sliderControl">
            <button class="leftBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" fill="none" viewBox="0 0 41 40">
                <path fill="#ACAFAE" d="M26.118 10.44c.245.282.382.665.382 1.063 0 .399-.137.781-.382 1.063l-6.465 7.443 6.465 7.443c.238.283.37.663.366 1.057-.003.395-.14.772-.382 1.05-.242.28-.57.438-.913.44a1.22 1.22 0 0 1-.918-.421l-7.389-8.506a1.626 1.626 0 0 1-.382-1.063c0-.399.137-.781.382-1.063l7.389-8.506c.245-.282.577-.44.923-.44.347 0 .679.158.924.44Z"/>
                <rect width="39" height="39" x="1" y=".5" stroke="#ACAFAE" rx="9.5"/>
                </svg>                                   
            </button>
            <button class="rightBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" fill="none" viewBox="0 0 41 40">
                <rect width="39" height="39" x="1" y=".5"  stroke="#ACAFAE" rx="9.5"/>
                <path fill="#fff" d="M16.882 10.44a1.626 1.626 0 0 0-.382 1.063c0 .399.137.781.382 1.063l6.465 7.443-6.465 7.443c-.238.283-.37.663-.366 1.057.003.395.14.772.382 1.05.242.28.57.438.913.44a1.22 1.22 0 0 0 .918-.421l7.389-8.506c.245-.282.382-.664.382-1.063 0-.399-.137-.781-.382-1.063l-7.389-8.506a1.226 1.226 0 0 0-.923-.44c-.347 0-.679.158-.924.44Z"/>
                </svg>                                   
            </button>
            </div>
            `,
            function:addEventListener('load',()=>{
                    fetch('./content.json').then(res=>res.json()).then(data=>{
                        const item = data.main;
                        item.banner.forEach(item=>{
                            bannerContainer.innerHTML += `
                            <div class="slider" id="slider">
                                <div class="section-01-left" id="section01Left">
                                    <div class="title-container">
                                        <span class="title"><span class="customize">${item.custome}</span><br>${item.title}</span>
                                     </div>
                                </div>
                                <div class="section-01-right" id="section01Right">
                                    <img src=${item.img} class="img">
                                    <img src=${item.rspnImg} class="rspn-img">
                                </div>
                            </div>
                            `
                        })
                        const slider = document.getElementById('slider');
                        const carousel = document.getElementById('bannerContainer');
                        console.log(slider.offsetWidth)
                        const width = slider.offsetWidth;
                        const maxWidth = slider.scrollLeft - slider.clientWidth;
                        console.log(maxWidth)
                        console.log(width)
                        document.querySelector('.leftBtn').addEventListener('click',()=>{
                            carousel.scrollBy(-width,0)
                           
                        })
                        document.querySelector('.rightBtn').addEventListener('click',()=>{
                            carousel.scrollBy(width,0)
                           
                        })
                        
                    })
            })
        }
    ),
    // section two
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section three
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section four
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section five
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section six
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section seven
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section eight
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    ),
    // section nine
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:``,
            function:addEventListener('load',()=>{
                
            })
        }
    )
)