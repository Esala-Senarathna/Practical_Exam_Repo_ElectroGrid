$(document).ready(function()
{ 
	if ($("#alertSuccess").text().trim() == "") 
 	{ 
 		$("#alertSuccess").hide(); 
 	} 
 	$("#alertError").hide(); 
});


$(document).on("click", "#btnSave", function(event)
{ 
	// Clear alerts---------------------
	$("#alertSuccess").text(""); 
	$("#alertSuccess").hide(); 
	$("#alertError").text(""); 
	$("#alertError").hide(); 
	// Form validation-------------------
	var status = validateSupplyConnectionForm(); 
	if (status != true) 
	{ 
	 	$("#alertError").text(status); 
	 	$("#alertError").show(); 
	 	return; 
 	}
 	// If valid------------------------
	var type = ($("#hidFundIdSave").val() == "") ? "POST" : "PUT"; 
 	$.ajax( 
 	{ 
	 	url : "SupplyConnectionsAPI", 
		type : type, 
	 	data : $("#supplyConnectionData").serialize(), 
	 	dataType : "text", 
	 	complete : function(response, status) 
	 	{ 
	 		onSupplyConnectionSaveComplete(response.responseText, status); 
	 	} 
 	}); 
}); 

/*
function onSupplyConnectionSaveComplete(response, status)
{ 
	if (status == "success") 
 	{ 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") 
 		{ 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divAllConnectionsTable").html(resultSet.data); 
 		} 
 		else if (resultSet.status.trim() == "error") 
 		{ 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	} 
 	else if (status == "error") 
 	{ 
 		$("#alertError").text("Error while saving."); 
 		$("#alertError").show(); 
 	} 
 	else
 	{ 
 		$("#alertError").text("Unknown error while saving.."); 
 		$("#alertError").show(); 
 	} 
 	$("#hidItemIDSave").val(""); 
 	$("#supplyConnectionData")[0].reset(); 
}
*/

function onSupplyConnectionSaveComplete(response, status)
{ 
	if (status == "success") 
 	{ 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") 
 		{ 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divAllConnectionsTable").html(resultSet.data); 
 		} 
 		else if (resultSet.status.trim() == "error") 
 		{ 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	} 
 	else if (status == "error") 
 	{ 
 		$("#alertError").text("Error while saving."); 
 		$("#alertError").show(); 
 	} 
 	else
 	{ 
 		$("#alertError").text("Unknown error while saving.."); 
 		$("#alertError").show(); 
 	} 
 	$("#hidItemIDSave").val(""); 
 	$("#supplyConnectionData")[0].reset(); 
}



function validateSupplyConnectionForm() 
{ 

	if ($("#accNo").val().trim() == "") 
 	{ 
 		return "Insert Account No."; 
 	} 

	if ($("#name").val().trim() == "") 
 	{ 
 		return "Insert name."; 
 	}

	if ($("#address").val().trim() == "") 
 	{ 
 		return "Insert address."; 
 	} 
 	
 	if ($("#type").val().trim() == "0") 
 	{ 
 		return "Please add a valid value to type."; 
 	} 

	if ($("#connection_type").val().trim() == "0") 
 	{ 
 		return "Please add a valid value to Connection type."; 
 	} 
	 
	return true; 
}


$(document).on("click", ".btnRemove", function(event)
{
	 $.ajax(
	 {
		 url : "SupplyConnectionsAPI",
		 type : "DELETE",
		 data : "accNo=" + $(this).data("accnoi"),
		 dataType : "text",
		 complete : function(response, status)
	 	 {
	 		onSupplyConnectionDeleteComplete(response.responseText, status);
	 	 }
	 });
});


function onSupplyConnectionDeleteComplete(response, status)
{
	if (status == "success")
	{
		 var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divAllConnectionsTable").html(resultSet.data);
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
		 } else if (status == "error")
		 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
		 } else
		 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
	}
}



$(document).on("click", ".btnUpdate", function(event)
{ 
	$("#hidFundIdSave").val($(this).data("accnoi")); 
	$("#accNo").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#name").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#address").val($(this).closest("tr").find('td:eq(2)').text()); 
	$("#area").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#type").val($(this).closest("tr").find('td:eq(4)').text()); 
	$("#connection_type").val($(this).closest("tr").find('td:eq(5)').text()); 
});