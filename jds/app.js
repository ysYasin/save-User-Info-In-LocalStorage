const nameTic = document.querySelector('.saveName');
const deletName = document.querySelector('.deletName');

// function to add in local storage
function saveToLocalStorage(IdName, LocalName) {
    const nameId = document.getElementById(IdName);
    const name = nameId.value;
    localStorage.setItem(LocalName, name)
}
document.querySelector('.saveName').addEventListener('click', function () {
    saveToLocalStorage('NameId', 'name')
    // togle button
    nameTic.classList.add('cover');
    deletName.classList.remove('cover');
})
document.querySelector('.deletName').addEventListener('click', function () {
    localStorage.removeItem("name");

    document.getElementById('NameId').value = ' ';

    nameTic.classList.remove('cover');
    deletName.classList.add('cover');
})

// email Box
const EmailTic = document.querySelector('.saveEmail');
const deletEmail = document.querySelector('.deletEmail');
EmailTic.addEventListener('click', function () {
    saveToLocalStorage('mailId', 'email');

    EmailTic.classList.add('cover');
    deletEmail.classList.remove('cover');
})
deletEmail.addEventListener('click', function () {
    localStorage.removeItem("email")

    document.getElementById('mailId').value = ' ';


    EmailTic.classList.remove('cover');
    deletEmail.classList.add('cover');
})

/// aboutme section
const commentTic = document.querySelector('.saveComment');
const deletComment = document.querySelector('.deletComment');
commentTic.addEventListener('click', function (e) {
    saveToLocalStorage('aboutMe', 'comment');


    commentTic.classList.add('cover');
    deletComment.classList.remove('cover');
});
deletComment.addEventListener('click', function () {
    localStorage.removeItem("comment")

    document.getElementById('aboutMe').value = ' ';

    commentTic.classList.remove('cover');
    deletComment.classList.add('cover');
})

//
document.getElementById('reset').addEventListener('click', function () {
    localStorage.clear();
    //
    document.getElementById('aboutMe').value = ' ';
    document.getElementById('mailId').value = ' ';
    document.getElementById('NameId').value = ' ';

    //
    commentTic.classList.remove('cover');
    deletComment.classList.add('cover');
    //
    EmailTic.classList.remove('cover');
    deletEmail.classList.add('cover');
    //
    nameTic.classList.remove('cover');
    deletName.classList.add('cover');
})

// save all data in localStorage In Object
// chackeTada in local storage
const getDataFromLocalStorage = () => {
    let delteals = {}
    const getDeteals = localStorage.getItem('ditials');
    if (getDeteals) {
        delteals = JSON.parse(getDeteals);
    }
    return delteals;
}
// set data in local storage
const Gname = document.getElementById('NameId');
const Gemail = document.getElementById('mailId')
const aboutMe = document.getElementById('aboutMe')
const setDataInLocalStorage = () => {
    const name = Gname.value;
    const Email = Gemail.value;
    const about = aboutMe.value;

    const dtlsobj = {
        name: name,
        mail: Email,
        about: about
    }
    const detielsStringify = JSON.stringify(dtlsobj)
    localStorage.setItem('ditials', detielsStringify);

}
document.getElementById('save').addEventListener('click', function () {

    setDataInLocalStorage()

    //
    document.getElementById('aboutMe').value = ' ';
    document.getElementById('mailId').value = ' ';
    document.getElementById('NameId').value = ' ';
})

const setDataFromLocalStorage = () => {
    const Data = getDataFromLocalStorage();
    Gname.value = Data.name;
    Gemail.value = Data.mail;
    aboutMe.value = Data.about;

    commentTic.classList.add('cover');
    deletComment.classList.remove('cover');
    //
    EmailTic.classList.add('cover');
    deletEmail.classList.remove('cover');
    //
    nameTic.classList.add('cover');
    deletName.classList.remove('cover');


}
setDataFromLocalStorage()