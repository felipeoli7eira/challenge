export default class App
{
    constructor()
    {
        this.state = {
            api: "https://api.github.com",

            currentUser: {},
            users: []
        }
    }

    async getUserDataFromGithubAPI(userName)
    {
        return await $.get(`${this.state.api}/users/${userName}`, (response) => response)
    }

    userPreview(user)
    {
        this.state.currentUser = user

        let componentUserPreview = $('.user-preview')
        let componentUserSearch  = $('.user-search')


        let photo    = $('.preview--user-avatar-info')
        let name     = $('.preview--user-name-info')
        let bio      = $('.preview--user-bio-info')
        let location = $('.preview--user-location-info')

        photo.attr('src', user.avatar_url)
        name.html(user.name)
        bio.html(user.bio)
        location.html(user.location)

        if (componentUserPreview.hasClass('d-none')) {
            componentUserPreview.removeClass('d-none')
        }

        if (!componentUserSearch.hasClass('d-none')) {
            componentUserSearch.addClass('d-none')
        }
    }

    cancelSearchResult()
    {
        let componentUserPreview = $('.user-preview')
        let componentUserSearch  = $('.user-search')

        if (!componentUserPreview.hasClass('d-none')) {
            componentUserPreview.addClass('d-none')
        }

        if (componentUserSearch.hasClass('d-none')) {
            componentUserSearch.removeClass('d-none')
        }

        this.state.currentUser = {}
    }

    save()
    {
        let componentUserPreview =$('.user-preview')
        let componentUserSearch = $('.user-search')

        this.state.users.push(
            {
                id: this.state.currentUser.id,
                photo: this.state.currentUser.avatar_url,
                name: this.state.currentUser.name,
                bio: this.state.currentUser.bio,
                location: this.state.currentUser.location
            }
        )

        if (!componentUserPreview.hasClass('d-none')) {
            componentUserPreview.addClass('d-none')
        }

        if (componentUserSearch.hasClass('d-none')) {
            componentUserSearch.removeClass('d-none')
        }

        this.state.currentUser = {}
    }

    updateTableList()
    {
        let table = $('.users-table tbody')

        table.html('')

        this.state.users.forEach (user => {
            let row = `<tr data-row="${user.id}">
                <td>${user.name}</td>
                <td>${user.bio}</td>
                <td>${user.location}</td>
                <td>
                    <button class="show-user-info btn btn-primary btn-sm" data-id="${user.id}">visualizar</button>
                </td>
            </tr>`

            table.append(row)
        })

        Array.from($('button.show-user-info')).forEach(button => {
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
        $('button.btn-delete-user').attr('data-userid', user.id)
        $('button.btn-save-user').attr('data-userid', user.id)
    }

    deleteUser(userID)
    {
        $(`table.users-table tbody tr[data-row=${userID}]`).remove()

        if (!$('.box-user-action').hasClass('d-none')) {
            $('.box-user-action').addClass('d-none')
        }

        $('img.edit_user_photo').attr('src', '')
        $('input[name=edit_user_name]').val('')
        $('input[name=edit_user_bio]').val('')
        $('input[name=edit_user_location]').val('')
        $('button.btn-delete-user').attr('data-userid', '')
    }

    update(userID)
    {
        let userRow = $(`table.users-table tbody tr[data-row=${userID}]`)[0]

        userRow.cells[ 0 ].innerHTML = $('input[name=edit_user_name]').val()
        userRow.cells[ 1 ].innerHTML = $('input[name=edit_user_bio]').val()
        userRow.cells[ 2 ].innerHTML = $('input[name=edit_user_location]').val()

        if (!$('.box-user-action').hasClass('d-none')) {
            $('.box-user-action').addClass('d-none')
        }

        // atualizar em this.app.users.----user---
    }

    test()
    {
        console.log('test')
    }
}