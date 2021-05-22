export default class App
{
    constructor()
    {
        console.log('running...')

        this.app = {
            api_url: "https://api.github.com",

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
}