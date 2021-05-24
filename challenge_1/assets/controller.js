import App from './app.js'

let app = new App()

$('form.search button').click(async () => {
    let userName = $('input[name=search_user_name]').val()
    let userData = await app.getUserDataFromGithubAPI(userName)

    app.userPreview(userData)
})

$('button.preview--user-save-btn').click(() => {
    app.save()
    app.updateTableList()
})

$('button.preview--user-cancel-btn').click(() => {

    app.cancelSearchResult()
})


$('button.show-user-info').click(element => {
    console.log(element)
})

$('button.btn-delete-user').click(({target}) => {
    app.delete(target.dataset.userid)
})

$('button.btn-save-user').click(({target}) => {
    app.update(target.dataset.userid)
})


// CassiaSotolani
// Ryan-Maia


// lembrar de remover o usuário do array de usuários