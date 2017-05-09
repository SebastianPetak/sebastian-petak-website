$(document).foundation();

$(document).ready(function() {
	/* Object contains each projects information */
	const projectsObject = {
		fccLeaderboard: {
			link: 'https://camper-leaderboard-sp.herokuapp.com/',
			imgSrc: 'fccLeaderboard.jpg',
			title: 'FreeCodeCamp Leaderboard',
			builtWith: 'Node.js / Express / React / Foundation'
		},
		urlShortenerMicroservice: {
			link: 'https://shurl-sp.herokuapp.com/',
			imgSrc: 'url-shortener.png',
			title: 'URL Shortener Microservice',
			builtWith: 'Node.js / MongoDB / Heroku'
		},
		randomQuoteMachine: {
			link: 'http://codepen.io/sebastianpetak/full/NAXrNx/',
			imgSrc: 'random-quote-machine.png',
			title: 'Random Quote Machine',
			builtWith: 'Bootstrap / forismatic API / jQuery'
		},
		fileMetadataMicroservice: {
			link: 'https://file-metadata-ms-sp.herokuapp.com',
			imgSrc: 'file-metadata-microservice.png',
			title: 'File Metadata Microservice',
			builtWith: 'Node.js / Multer / Heroku'
		},
		ticTacToe: {
			link: 'https://codepen.io/sebastianpetak/full/zKBOkE/',
			imgSrc: 'tic-tac-toe.png',
			title: 'Tic Tac Toe',
			builtWith: 'jQuery / Bootstrap'
		},
		markdownViewer: {
			link: 'https://markdown-viewer-sp.herokuapp.com/',
			imgSrc: 'markdown-previewer-sp.jpg',
			title: 'Markdown Previewer',
			builtWith: 'Node.js / React / Marked / Foundation'
		},
		wikipediaViewer: {
			link: 'https://codepen.io/sebastianpetak/full/rLvVaw/',
			imgSrc: 'wikipedia.png',
			title: 'Wikipedia Viewer',
			builtWith: 'Wikipedia API / Bootstrap'
		},
		timestampMicroservice: {
			link: 'https://timestamp-microservice-fcc-sp.herokuapp.com/',
			imgSrc: 'timestamp-microservice.png',
			title: 'Timestamp Microservice',
			builtWith: 'Node.js / Express'
		},
		requestHeaderParserMicroservice: {
			link: 'https://req-header-parser-ms-fcc-sp.herokuapp.com/',
			imgSrc: 'request-header-parser-microservice.png',
			title: 'Request Header Parser Microservice',
			builtWith: 'Node.js / Heroku'
		},
		pomodoroTimer: {
			link: 'https://codepen.io/sebastianpetak/full/bwEmYw/',
			imgSrc: 'pomodoro.png',
			title: 'Pomodoro Timer',
			builtWith: 'jQuery / Bootstrap'
		},
		imageSearchAbstractionLayer: {
			link: 'https://imgs-sp.herokuapp.com/',
			imgSrc: 'image-search-abstraction-layer.png',
			title: 'Image Search Abstraction Layer',
			builtWith: 'Node.js / MongoDB / Heroku'
		},
		javaScriptCalculator: {
			link: 'https://codepen.io/sebastianpetak/full/WGvLGv/',
			imgSrc: 'calculator.png',
			title: 'Simple JavaScript Calculator',
			builtWith: 'jQuery / Bootstrap'
		},
		simonSaysGame: {
			link: 'https://codepen.io/sebastianpetak/full/ozYbmz/',
			imgSrc: 'simon-game.png',
			title: 'Simon Says Game',
			builtWith: 'jQuery / Bootstrap'
		},
		localWeather: {
			link: 'http://codepen.io/sebastianpetak/full/bZvpqq/',
			imgSrc: 'weatherapp.png',
			title: 'Local Weather',
			builtWith: 'jQuery / openweathermap API (http only) / Bootstrap'
		}
	};
/* Projects will display in the order depicted in the following arrays
	 From top to bottom */
	const firstColumnProjects = [
		projectsObject.urlShortenerMicroservice,
		projectsObject.imageSearchAbstractionLayer,
		projectsObject.fileMetadataMicroservice,
		projectsObject.timestampMicroservice,
		projectsObject.requestHeaderParserMicroservice
	];
	const secondColumnProjects = [
		projectsObject.fccLeaderboard,
		projectsObject.randomQuoteMachine,
		projectsObject.wikipediaViewer,
		projectsObject.ticTacToe,
		projectsObject.pomodoroTimer
	];
	const thirdColumnProjects = [
		projectsObject.markdownViewer,
		projectsObject.javaScriptCalculator,
		projectsObject.simonSaysGame,
		projectsObject.localWeather
	];
// Template for adding projects to a column
	const projectTemplate = (projects, divClass) => {
		$(divClass).html(function() {
			let columnDisplay;
			return columnDisplay = projects.map( (project) => {
				return ('<a href="' + project.link + '" target="_blank">\n ' +
					'<div class="image-wrapper overlay-fade-in">\n' +
					'<img src="' + project.imgSrc + '" alt="' + project.title + '" />\n' +
					'<div class="image-overlay-content">\n' +
					'<div class="image-overlay-text">\n' +
					'<p class="project-title">' + project.title + '</p>\n' +
					'<p>' + project.builtWith + '</p>\n' +
					'</div>\n</div>\n</div>\n</a>\n'
				);
			});
		});
	};
// Use the template to add projects to their respective column
	projectTemplate(firstColumnProjects, 'div.firstProjectsColumn');
	projectTemplate(secondColumnProjects, 'div.secondProjectsColumn');
	projectTemplate(thirdColumnProjects, 'div.thirdProjectsColumn');
});
