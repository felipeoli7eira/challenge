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
        this.user = user

        const boxUserPreview = $('.user-card-preview')
        const userPhoto = $('.user-photo')
        const userName = $('.user-name')
        const userBio = $('.user-bio')
        const userLocation = $('.user-location')

        if (boxUserPreview.hasClass('d-none')) {
            boxUserPreview.removeClass('d-none')
        }

        userPhoto.attr('src', user.avatar_url)
        userName.html(user.name)
        userBio.html(user.bio)
        userLocation.html(user.location)
    }

    registerUser()
    {
        this.app.users.push(
            {
                photo: this.user.avatar_url,
                name: this.user.name,
                bio: this.user.bio,
                location: this.user.location
            }
        )

        if (! $('.user-card-preview').hasClass('d-none')) {
            $('.user-card-preview').addClass('d-none')
        }

        this.app.user = {}

        console.log(this.app.users)
    }
}