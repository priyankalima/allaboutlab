main.append(
    Object.assign(
        document.createElement('section'),
        {
            id:'updates-list',
            className:'section',
            innerHTML:`
            <div class="div-one"></div>
            <div class="div-two"></div>
            <div class="div-three"></div>
            `
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            id:'sectionTwo',
            className:'section-two active',
            innerHTML:'hello this section two'
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            id:'sectionThree',
            className:'section-three',
            innerHTML:'hello this is section threee'
        }
    )
)