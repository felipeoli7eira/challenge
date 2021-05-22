export default class App
{
    constructor()
    {
        console.log('running...')

        this.app = {
            api_url: "https://api.github.com",

            user: {},
            users: []
        }
    }

    async getUserDataFromGithub(userName)
    {
        return await $.get(
            `${this.app.api_url}/users/${userName}`,
            (response) => response
        )
    }

    setUserPreview(user)
    {
        this.app.user = user

        const boxUserPreview = $('.user-card-preview')
        let photo = $('.user-photo')
        let name = $('.user-name')
        let bio = $('.user-bio')
        let location = $('.user-location')

        if (boxUserPreview.hasClass('d-none')) {
            boxUserPreview.removeClass('d-none')
        }

        photo.attr('src', user.avatar_url)
        name.html(user.name)
        bio.html(user.bio)
        location.html(user.location)
    }

    registerUser()
    {
        this.app.users.push(
            {
                id: this.app.user.id,
                photo: this.app.user.avatar_url,
                name: this.app.user.name,
                bio: this.app.user.bio,
                location: this.app.user.location
            }
        )

        if (! $('.user-card-preview').hasClass('d-none')) {
            $('.user-card-preview').addClass('d-none')
        }

        this.app.user = {}
    }

    updateTableItens()
    {
        const table = $('.users-table tbody')

        table.html('')

        this.app.users.forEach (user => {
            let row = `<tr data-row="${user.id}">
                <td>${user.name}</td>
                <td>${user.bio}</td>
                <td>${user.location}</td>
                <td>
                    <button class="show-user-info btn btn-primary btn-sm" data-id="${user.id}">info</button>
                </td>
            </tr>`

            table.append(row)
        })

        Array.from($('button.show-user-info')).forEach( button => {

            button.onclick = (event) => this.showUserInfo(event)
        } )
    }

    showUserInfo({target})
    {
        let user = Array.from(this.app.users).filter(
            user => user.id === parseInt(target.dataset.id)
        ) [ 0 ]

        if ($('.box-user-action').hasClass('d-none')) {
            $('.box-user-action').removeClass('d-none')
        }

        $('img.edit_user_photo').attr('src', user.photo)
        $('input[name=edit_user_name]').val(user.name)
        $('input[name=edit_user_bio]').val(user.bio)
        $('input[name=edit_user_location]').val(user.location)
    }

    test()
    {
        console.log('test')
    }
}