

export default Api = {
    loginUser,
    signUp,
    forgotPassword,
    updateProfile,
    changePassword
}

function loginUser(email, password) {
    const url = 'http://www.pickmycloth.com/api/login';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => response.json());
}

function signUp(name, email, password) {
    const url = 'http://www.pickmycloth.com/api/signup';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    }).then(response => response.json());
}

function forgotPassword(email) {
    const url = 'http://www.pickmycloth.com/api/forgotpassword';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    }).then(response => response.json());
}

function updateProfile(data) {
    const url = 'http://www.pickmycloth.com/api/updateprofile';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    }).then(response => response.json());
}

function changePassword(data) {
    const url = 'http://www.pickmycloth.com/api/changepassword';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    }).then(response => response.json());
}