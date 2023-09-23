document.addEventListener("DOMContentLoaded", () => {
    const endpoint = `https://api.github.com/users/ogiansouza`;

    const profileAvatar = document.getElementById("profileAvatar");
    const profileName = document.getElementById("profileName");
    const profileUsername = document.getElementById("profileUsername");
    const profileRepositories = document.getElementById("profileRepositories");
    const profileFollowers = document.getElementById("profileFollowers");
    const profileFollowing = document.getElementById("profileFollowing");
    const profileLink = document.getElementById("profileLink");

    fetch(endpoint)
        .then((result) => {
            if (result.ok) {
                return result.json();
            }
            throw new Error("Invalid url from the endpoint!");
        })
        .then((json) => {
            profileAvatar.src = json.avatar_url;
            profileName.innerHTML = json.name;
            profileUsername.innerHTML = `@${json.login}`;
            profileRepositories.innerHTML = json.public_repos;
            profileFollowers.innerHTML = json.followers;
            profileFollowing.innerHTML = json.following;
            profileLink.href = json.html_url;
        })
        .catch((error) => {
            console.log(error);
        });
});
