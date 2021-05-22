import App from './app.js'

let app = new App()

$('#search-form button').click(async () => {
    let userName = $('input[name=user_name]').val()

    let userData = await app.getUserDataFromGithub(userName)

    app.setUserPreview(userData)
})

$('button.register-user').click(() => {
    app.registerUser()
})