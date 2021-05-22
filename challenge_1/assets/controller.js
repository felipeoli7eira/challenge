import App from './app.js'

let app = new App()

$('#search-form button').click(async () => {
    let userName = $('input[name=user_name]').val()
    let userData = await app.getUserDataFromGithub(userName)

    app.setUserPreview(userData)
})

$('button.register-user').click(() => {
    app.registerUser()
    app.updateTableItens()
})

$('button.show-user-info').click(element => {
    console.log(element)
})

$('button.btn-delete-user').click(({target}) => {
    app.deleteUser(target.dataset.userid)
})

// CassiaSotolani
// Ryan-Maia
