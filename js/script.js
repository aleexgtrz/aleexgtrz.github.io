
// Changes the selected link on menu
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.row');
const initialSelected = document.querySelector('.selected');
let selectedCategory = initialSelected.innerText;



// Projects
const projects = [
	{
		url:'./images/memory.jpg',
		category: 'Javascript',
        git: 'https://github.com/aleexgtrz/pokemon_memory_game',
        name: 'Pokémon Memory Game'
	},
	{
		url:'./images/puzzle.png',
		category: 'Javascript',
        git: '',
        name: 'Puzzle Maker'
	},
	{
		url:'./images/brick.jpg',
		category: 'Javascript',
        git: 'https://github.com/aleexgtrz/brick_pong',
        name: 'Brick Pong'
	},
];

const renderProjects = category => {
	projects.forEach(project => {
		if (project.category === category) {
            $(".row").append(`
				<div class='col-sm project' 
				style = "background-image: url(${project.url});" 
				onclick = 'window.open("${project.git}")'>
				${project.name}
				</div>
			`)
		}
	});
};

// Initial render
renderProjects(selectedCategory);

// Menu & Filter
categories.forEach(category => {
	category.addEventListener('click', () => {
		// Update selected category and add 'selected' class
		selectedCategory = category.innerText;
		category.classList.add('selected');

		// Re-render pictures
		grid.innerHTML = '';
		renderProjects(selectedCategory);

		// Remove 'selected' class from the others
		categories.forEach(categ => {
			if (categ.innerText !== selectedCategory) {
				categ.classList.remove('selected');
			}
		});
	});
});
