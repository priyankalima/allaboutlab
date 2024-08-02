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
                <rect class="left-rect" width="39" height="39" x="1" y=".5" stroke="#8EC15B" rx="9.5"/>
                <path class="left-path" fill="#ACAFAE" d="M26.118 10.44c.245.282.382.665.382 1.063 0 .399-.137.781-.382 1.063l-6.465 7.443 6.465 7.443c.238.283.37.663.366 1.057-.003.395-.14.772-.382 1.05-.242.28-.57.438-.913.44a1.22 1.22 0 0 1-.918-.421l-7.389-8.506a1.626 1.626 0 0 1-.382-1.063c0-.399.137-.781.382-1.063l7.389-8.506c.245-.282.577-.44.923-.44.347 0 .679.158.924.44Z"/>
                </svg>                                   
            </button>
            <button class="rightBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" fill="none" viewBox="0 0 41 40">
                <rect class="right-rect"  width="39" height="39" x="1" y=".5" fill="#8EC15B"  stroke="#8EC15B" rx="9.5"/>
                <path class="right-path" fill="#fff" d="M16.882 10.44a1.626 1.626 0 0 0-.382 1.063c0 .399.137.781.382 1.063l6.465 7.443-6.465 7.443c-.238.283-.37.663-.366 1.057.003.395.14.772.382 1.05.242.28.57.438.913.44a1.22 1.22 0 0 0 .918-.421l7.389-8.506c.245-.282.382-.664.382-1.063 0-.399-.137-.781-.382-1.063l-7.389-8.506a1.226 1.226 0 0 0-.923-.44c-.347 0-.679.158-.924.44Z"/>
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
                        const maxWidth = carousel.scrollWidth;
                        const scrollLeft = maxWidth - width;
                        // const result = scrollLeft - 1;
                        // console.log(maxWidth- slider.clientWidth)
                        console.log( maxWidth-width)
                        // console.log(carousel.scrollLeft)
                        document.querySelector('.leftBtn').addEventListener('click',()=>{
                            carousel.scrollBy(-width,0)
                            console.log(carousel.scrollLeft)
                            if(carousel.scrollLeft <= 0) {
                                document.querySelector('.left-rect').style.fill = "transparent";
                                document.querySelector('.right-rect').style.fill = "#8EC15B";
                                 document.querySelector('.right-rect').style.stroke = "#8EC15B";
                                document.querySelector('.right-path').style.fill = "#ffffff";
                                document.querySelector('.left-path').style.fill = "#ACAFAE";
                            }
                            
                        })
                        document.querySelector('.rightBtn').addEventListener('click',()=>{
                            carousel.scrollBy(width,0)
                            // console.log(maxWidth)
                            console.log(carousel.scrollLeft)
                            if(carousel.scrollLeft >= (scrollLeft-1)) {
                                document.querySelector('.right-rect').style.fill = "transparent";
                                document.querySelector('.left-rect').style.fill = "#8EC15B";
                                document.querySelector('.left-rect').style.stroke = "#8EC15B";
                                document.querySelector('.right-path').style.fill = "#ACAFAE";
                                document.querySelector('.left-path').style.fill = "#fff";
                            }
                           
                        })
                        
                    })
            })
        }
    ),
    // section two
    Object.assign(
        document.createElement('section'),
        {
            className:"d-flex",
            innerHTML:`
            <div class="section-02-left" id="section02Left"></div>
            <div class="section-02-right" id="section02Right"></div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main.packages;
                    item.forEach(item=>{
                        section02Left.innerHTML += `
                        <div class="card d-col" id="card">
                             <img src=${item.img}>
                             <div class="content">
                                <span class="title">${item.title}</span>
                                <span class="price">&#8377; ${item.price} 
                                   <span class="custome">&#8377; 300</span>
                                </span>
                             </div>
                             <div class="cto-btn">
                               <button>Book Now</button>
                               <button>Know More</button>
                             </div>
                        </div>
                        `
                    })
                    section02Right.innerHTML = `
                    <div class="container d-col">
                        <div class="content">
                            <span class="title">Popular Healthcare Packages</span>
                            <span class="para">Choose from our wide range of Packages and Health Check-ups</span>
                        </div>
                        <div class="slider-control">
                              <button class="left-btn-02">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect class="left-rect" x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#ACAFAE" />
                                <path d="M22.7353 15.2201C22.8813 15.3611 22.9634 15.5523 22.9634 15.7516C22.9634 15.951 22.8813 16.1422 22.7353 16.2832L18.88 20.0045L22.7353 23.7259C22.8772 23.8677 22.9557 24.0576 22.9539 24.2547C22.9521 24.4519 22.8702 24.6404 22.7258 24.7798C22.5814 24.9192 22.3861 24.9983 22.1819 25C21.9777 25.0017 21.7809 24.9259 21.634 24.789L17.228 20.5361C17.082 20.3951 17 20.2039 17 20.0045C17 19.8052 17.082 19.614 17.228 19.473L21.634 15.2201C21.7801 15.0792 21.9781 15 22.1847 15C22.3912 15 22.5893 15.0792 22.7353 15.2201Z" fill="#ACAFAE" />
                                </svg>
                              </button>
                              <button class="right-btn-02">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect class="right-rect" x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="#8EC15B" stroke="#8EC15B" />
                                <path d="M17.228 15.2201C17.082 15.3611 17 15.5523 17 15.7516C17 15.951 17.082 16.1422 17.228 16.2832L21.0834 20.0045L17.228 23.7259C17.0862 23.8677 17.0077 24.0576 17.0094 24.2547C17.0112 24.4519 17.0931 24.6404 17.2375 24.7798C17.3819 24.9192 17.5773 24.9983 17.7815 25C17.9857 25.0017 18.1824 24.9259 18.3293 24.789L22.7353 20.5361C22.8813 20.3951 22.9634 20.2039 22.9634 20.0045C22.9634 19.8052 22.8813 19.614 22.7353 19.473L18.3293 15.2201C18.1833 15.0792 17.9852 15 17.7787 15C17.5722 15 17.3741 15.0792 17.228 15.2201Z" fill="white" />
                                </svg>
                              </button>
                              <button>view more</button>
                        </div>
                    </div>
                    `
                    const slider = document.getElementById('section02Left');
                    const element = document.getElementById('card');
                    const maxWidth = slider.scrollWidth - element.offsetWidth;
                    const width = element.offsetWidth;
                    document.querySelector('.left-btn-02').addEventListener('click',()=>{
                        // alert('hello')
                         slider.scrollBy(-width,0);
                         if(slider.scrollLeft <= 0){
                               document.querySelector('.left-rect').style.fill = "green"
                         }
                         else{
                            document.querySelector('.left-rect').style.fill = "green"
                         }
                     })
                     document.querySelector('.right-btn-02').addEventListener('click',()=>{
                        // alert('hello')
                        slider.scrollBy(width,0)
                        if(slider.scrollLeft >= (maxWidth)){
                            alert('resched')
                            console.log(maxWidth)
                      }
                      else{
                         alert('not yet')
                      }
                     })
                })
                 
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