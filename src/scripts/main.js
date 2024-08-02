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
                        // console.log(slider.offsetWidth)
                        const width = slider.offsetWidth;
                        const maxWidth = carousel.scrollWidth;
                        const scrollLeft = maxWidth - width;
                        // const result = scrollLeft - 1;
                        // console.log(maxWidth- slider.clientWidth)
                        // console.log( maxWidth-width)
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
                                <rect class="left-rect-02" x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#8EC15B" />
                                <path class="left-path-02" d="M22.7353 15.2201C22.8813 15.3611 22.9634 15.5523 22.9634 15.7516C22.9634 15.951 22.8813 16.1422 22.7353 16.2832L18.88 20.0045L22.7353 23.7259C22.8772 23.8677 22.9557 24.0576 22.9539 24.2547C22.9521 24.4519 22.8702 24.6404 22.7258 24.7798C22.5814 24.9192 22.3861 24.9983 22.1819 25C21.9777 25.0017 21.7809 24.9259 21.634 24.789L17.228 20.5361C17.082 20.3951 17 20.2039 17 20.0045C17 19.8052 17.082 19.614 17.228 19.473L21.634 15.2201C21.7801 15.0792 21.9781 15 22.1847 15C22.3912 15 22.5893 15.0792 22.7353 15.2201Z" fill="#ACAFAE" />
                                </svg>
                              </button>
                              <button class="right-btn-02">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect class="right-rect-02" x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="#8EC15B" stroke="#8EC15B" />
                                <path class="right-path-02" d="M17.228 15.2201C17.082 15.3611 17 15.5523 17 15.7516C17 15.951 17.082 16.1422 17.228 16.2832L21.0834 20.0045L17.228 23.7259C17.0862 23.8677 17.0077 24.0576 17.0094 24.2547C17.0112 24.4519 17.0931 24.6404 17.2375 24.7798C17.3819 24.9192 17.5773 24.9983 17.7815 25C17.9857 25.0017 18.1824 24.9259 18.3293 24.789L22.7353 20.5361C22.8813 20.3951 22.9634 20.2039 22.9634 20.0045C22.9634 19.8052 22.8813 19.614 22.7353 19.473L18.3293 15.2201C18.1833 15.0792 17.9852 15 17.7787 15C17.5722 15 17.3741 15.0792 17.228 15.2201Z" fill="white" />
                                </svg>
                              </button>
                              <button>view more</button>
                        </div>
                    </div>
                    `
                    const slider = document.getElementById('section02Left');
                    const element = document.getElementById('card');
                    const maxWidth = slider.scrollWidth;
                    const width = element.offsetWidth;
                    const scrollLeft = maxWidth - width;
                    document.querySelector('.left-btn-02').addEventListener('click',()=>{
                        // alert('hello')
                         slider.scrollBy(-width,0);
                         if(slider.scrollLeft <= 0){
                               document.querySelector('.left-rect-02').style.fill = "transparent";
                               document.querySelector('.right-rect-02').style.fill = "#8EC15B";
                               document.querySelector('.right-path-02').style.fill = "#ffffff";
                               document.querySelector('.left-path-02').style.fill = "#ACAFAE";
                            //    document.querySelector('.left-rect').style.fill = "transparent";
                            //    document.querySelector('.right-rect').style.fill = "#8EC15B";
                                // document.querySelector('.right-rect').style.stroke = "#8EC15B";
                            //    document.querySelector('.right-path').style.fill = "#ffffff";
                            //    document.querySelector('.left-path').style.fill = "#ACAFAE";
                            // alert('helo')
                         }
                     })
                     document.querySelector('.right-btn-02').addEventListener('click',()=>{
                        // alert('hello')
                        slider.scrollBy(width,0)
                        if(slider.scrollLeft > (scrollLeft-543)){
                            document.querySelector('.left-rect-02').style.fill = "#8EC15B";
                            document.querySelector('.right-rect-02').style.fill = "transparent";
                            document.querySelector('.left-path-02').style.fill = "#ffffff";
                            document.querySelector('.right-path-02').style.fill = "#ACAFAE";
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
            innerHTML:`
            <div class="back-img">
            <svg width="300" height="481" viewBox="0 0 300 481" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M287.535 400.774L217.729 259.825C210.873 246.03 205.263 222.463 205.263 207.447C205.263 192.43 215.921 180.144 228.947 180.144C241.974 180.144 252.632 170.912 252.632 159.667C252.632 148.423 238.421 139.19 221.053 139.19H78.9474C61.5789 139.19 47.3684 148.387 47.3684 159.667C47.3684 170.947 58.0263 180.144 71.0526 180.144C84.0789 180.144 94.7369 192.43 94.7369 207.447C94.7369 222.463 89.1274 246.03 82.2715 259.842L12.4654 400.81C5.60943 414.605 0 432.064 0 439.555C0 447.045 7.10527 459.367 15.7895 466.857C24.4737 474.347 45.7895 480.508 63.1579 480.508H236.842C254.19 480.508 275.485 474.401 284.211 466.857C292.936 459.313 300 447.063 300 439.555C300 432.046 294.391 414.587 287.535 400.81V400.774ZM172.5 98.7752C172.5 103.934 174.871 108.882 179.09 112.531C183.31 116.179 189.033 118.228 195 118.228C200.967 118.228 206.69 116.179 210.91 112.531C215.13 108.882 217.5 103.934 217.5 98.7752C217.497 93.6159 215.124 88.6689 210.903 85.0224C206.681 81.3759 200.957 79.3287 194.99 79.3311C189.022 79.3335 183.3 81.3853 179.083 85.0351C174.865 88.685 172.497 93.6159 172.5 98.7752ZM111.939 101.775C114.694 101.775 117.336 100.829 119.284 99.1444C121.232 97.4601 122.327 95.1757 122.327 92.7938C122.327 90.4118 121.232 88.1274 119.284 86.4432C117.336 84.7589 114.694 83.8127 111.939 83.8127C109.184 83.8127 106.542 84.7589 104.594 86.4432C102.646 88.1274 101.551 90.4118 101.551 92.7938C101.551 95.1757 102.646 97.4601 104.594 99.1444C106.542 100.829 109.184 101.775 111.939 101.775ZM151.766 56.8693C156.221 57.0606 160.675 56.4668 164.857 55.1239C169.038 53.781 172.861 51.7171 176.091 49.0576C179.322 46.3981 181.893 43.1985 183.649 39.6532C185.406 36.1079 186.31 32.2909 186.307 28.4342C186.304 24.5774 185.394 20.7615 183.633 17.2181C181.872 13.6747 179.296 10.4779 176.061 7.82195C172.827 5.16597 169.001 3.10625 164.818 1.76794C160.634 0.429628 156.179 -0.159337 151.724 0.0368295C143.363 0.486944 135.515 3.67711 129.78 8.957C124.046 14.2369 120.856 21.209 120.861 28.452C120.866 35.695 124.066 42.6636 129.809 47.9372C135.551 53.2108 143.404 56.3924 151.766 56.8334V56.8693Z" fill="#353D4B" fill-opacity="0.5" />
            </svg>
            </div>
            <div class="container">
                <div class="content">
                    
                </div>
            </div>
            `,
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