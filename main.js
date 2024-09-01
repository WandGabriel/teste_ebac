document.addEventListener('DOMContentLoaded', function(e) {

    const loginDoUsario = 'wandgabriel';

    const nome = document.querySelector('#name');
    const avatar = document.querySelector('#avatar');
    const username = document.querySelector('#username');
    const numberRepositories = document.querySelector('#repositories');
    const numberFollowers = document.querySelector('#followers');
    const numberFollowing = document.querySelector('#following');
    const userLink = document.querySelector('#link');


    const endpointGithub = `https://api.github.com/users/${loginDoUsario}/`;
    
    fetch(endpointGithub)
        .then(function(respostaEndpoint){
            if(!respostaEndpoint.ok){
                return statusError;
            } else {
                return respostaEndpoint.json();
            }
        })
        .then(function(json){
            nome.innerText = json.name;
            avatar.src = json.avatar_url;
            username.innerText = `@${json.login}`;
            numberRepositories.innerText = json.public_repos;
            numberFollowers.innerText = json.followers;
            numberFollowing.innerText = json.following;
            userLink.href = json.html_url;
            
        })
        .catch(error => {
            alert ('Requisição não encontrado.');
            console.log ('404 (Not Found!)');
        })
});