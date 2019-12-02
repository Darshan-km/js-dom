var data = [];
var i, item;

function myFormValidation(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var form = document.getElementById('email-validation');
    form.reset();

    var userObject = {
        email
    };
    data.push(userObject);

    document.getElementById("sample").innerHTML = '';
    for(var i=0; i< data.length; i++) {
        var theDiv;
        var container;
        var button;
        var index;

        theDiv = document.createElement("div");
        button = document.createElement("button");
        index = document.createElement("input");
        index.setAttribute('hidden', 'true');
        button.setAttribute('id', 'remove');
        button.setAttribute('onclick', 'removeItem(this)');

        for(item in data[i]){
            var x = item + '' + data[i][item] + "</br>";
            theDiv.innerHTML += item + ":" + data[i][item] + "</br>";
            index.value += i;
        }

        button.innerHTML += "Remove";

        container = document.getElementById('sample');
        container.appendChild(theDiv);
        theDiv.appendChild(button);
        theDiv.appendChild(index);

    }

}

function removeItem(event) {
    let el = event;
    let index = el.parentNode.lastElementChild.value;
    el.parentElement.remove();
    data.splice(index, 1);
}

function searchEmail() {
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let x = document.getElementById('sample');

    for(i = 0; i< x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = 'none';
        } else {
            x[i].style.display = 'list-item';
        }
    }
}