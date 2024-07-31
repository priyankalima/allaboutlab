header.appendChild(
    Object.assign(
        document.createElement('nav'),
        {
            className:'navbar',
            innerHTML :`
            <a href="#updates-list" >Home</a>
             <a href="#sectionOne" >About</a>
             <a href="#sectionTwo">Contact</a>
             <a href="#sectionThree">Blog</a>
            `,
            function:addEventListener('load',()=>{
                
            })
        }
    )
)
// if need to create page then us js for tabs and add