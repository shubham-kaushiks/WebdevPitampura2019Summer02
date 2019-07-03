let contacts = [];

function paint(){
    document.getElementById('id2').innerHTML = render(contacts);
}
document.getElementById('id2').addEventListener('click', e => {
    //const {index, action} = e.target.dataset;
    const index = e.target.dataset.index;
    const action = e.target.dataset.action;

    if(!action) return;

    if(action === 'delete')
    {
        contacts.splice(index, 1);
    }
    else if(action === 'edit')
    {
        contact[index].edit = true;
    }
    else if(action === 'save')
    {
        contacts
    }


})