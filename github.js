var github;
var repoHTML = "<input type='text' name='user' value='afernandezb92' " +
    "id='user' size='10' />" +
    "<input type='text' name='repo' value='X-Nav-APIs-GitHub-Fichero' " +
    "id='repo' size='10' />" +
    "<button id='repobutton' type='button'>Grab repo data</button>" +
    "<div id='repodata'/>";
var repoHTML2 = "<input type='text' name='file' value='file' " +
    "id='file' size='10' />" +
    "<input type='text' name='texto' value='Prueba' " +
    "id='texto' size='10' />" +
    "<button id='textbutton' type='button'>Write file</button>" +
    "<div id='filedata'/>";    
function getToken(){
	var token = $('#token').val();
	console.log(token);
	github = new Github({
	  token: token,
	  auth: "oauth"
	});
	$("#repoform").html(repoHTML + repoHTML2);
    $("div#form button").click(getRepo);
    $("#textbutton").click(writeFile);
}

function getRepo(){
	var name = $('#user').val();
	var repouser = $('#repo').val();
	console.log(name);
	console.log(repo);
	repo = github.getRepo(name, repouser);
	repo.show(function(error, repo) {
		var repodata = $("#repodata");
	    if (error) {
		repodata.html("<p>Error code: " + error.error + "</p>");
	    } else {
		repodata.html("<p>Repo data:</p>" +
			      "<ul><li>Full name: " + repo.full_name + "</li>" +
			      "<li>Description: " + repo.description + "</li>" +
			      "<li>Created at: " + repo.created_at + "</li>" +
			      "</ul>")
		console.log (repo);
		console.log (repo.full_name, repo.description, repo.created_at);
	    }
	});
}

function writeFile(){
	var file = $('#file').val();
	var text = $('#texto').val();
	console.log(name);
	console.log(repo);
	repo.write('master', file, text, 'YOUR_COMMIT_MESSAGE', function(err) {});
}


$(document).ready(function() {
    $("div#form button").click(getToken);
});
