$(document).ready(function() {
	console.log('Check Ajax')
	$("#edit-form").submit(function(e){
		e.preventDefault();
		var url = $(this).attr("action");
		var data = $(this).serialize();
		console.log(url);
		console.log(data);

		$.ajax({
			method: "PUT",
			url: url,
			data: data,
		}).done(function(data){
			console.log(data);
			window.location = url;
		}).fail(function(err){
			console.log(err)
		}) //this is the end of editing from ajax
	}); //this is the end of form editing

	$("#delete-btn").click(function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		console.log(url);

		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			console.log(data);
			window.location = "./"
		}).fail(function(err){
			console.log(err)
		}); //this is the end of deleting from ajax
	}); //this is the end of deleting button
});
