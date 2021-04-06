$("#add_show").submit(function(e){
    alert("Show added successfully")
})

$("#update_show").submit(function(e){
    e.preventDefault()

    let unindexed_array = $(this).serializeArray();
    let data = {}
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data);
    let request = {
        "url":`http://localhost:3000/api/shows/${data.id}`,
        "method": "PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Show updated successfully")
    })
})

if(window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id")
        let request = {
            "url":`http://localhost:3000/api/shows/${id}`,
            "method": "DELETE"
        } 
        if(confirm("Are you sure you want to delete this entry?")){
            $.ajax(request).done(function(response){
                alert("Show successfully deleted!");
                location.reload()
            })
        }
    })
}