function select(element) {

    const playerName = element.parentNode.children[0].innerText;

    const list = document.getElementById('list');

    const li = document.createElement("li");

    li.innerText = playerName;
    // li.classList.add('player');
    // li.classList.add('mb-6')
    // li.classList.add('font-bold');

    list.appendChild(li);

    const btn = document.getElementById('tamim-add').addEventListener('click', function () {

    })

    // document.querySelectorAll('.all-list li');

    // const button = document.getElementById('tamim-add');

    // button.setAttribute('disabled', true);

    // document.button.style.backgroundColor = 'blue';

}