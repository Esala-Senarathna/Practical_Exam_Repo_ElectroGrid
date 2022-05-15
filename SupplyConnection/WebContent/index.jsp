<%@page import="com.electrogrid.supplyconnection.model.SupplyConnection"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Supply Connections Dash-board</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/supplycon.js"></script>


</head>
<body>

<!-- Navigation bar start -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Electrogrid Power Information System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<!-- Navigation bar end -->

<center><h1>Supply Connetion service</h1></center>

<!-- form start -->

<div style="padding:20px;">
	<form id="supplyConnectionData" name="supplyConnectionData">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="accNo" name="accNo" class="form-control" />
        <label class="form-label" for="form6Example1">Account No.</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="name" name="name" class="form-control" />
        <label class="form-label" for="form6Example2">Full Name</label>
      </div>
    </div>
  </div>
  
    <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="address" name="address" class="form-control" />
        <label class="form-label" for="form6Example1">Address</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="area" name="area" class="form-control" />
        <label class="form-label" for="form6Example2">Area</label>
      </div>
    </div>
  </div>


	  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Type &nbsp;</span>
			</div>
			<select id="type" name="type">
			 <option value="0">--Select Type--</option>
			 <option value="STD">STD</option>
			 <option value="AVD">AVD</option>
			 <option value="LSC">LSC</option>
			</select>
			</div>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Connection Type &nbsp;</span>
			</div>
			<select id="connection_type" name="connection_type">
			 <option value="0">--Select Connection Type--</option>
			 <option value="UP">UP</option>
			 <option value="DOWN">DOWN</option>
			</select>
			</div>

      </div>
    </div>
  </div>

	<!-- Message display -->
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>


  <!-- Submit button -->
  <input type="button" id="btnSave" name="btnSave" class="btn btn-primary btn-block mb-4" value="Save">
  <input type="hidden" id="hidFundIdSave" name="hidFundIdSave" value="">
</form>

</div>

<!-- form end -->




<div id="divAllConnectionsTable">
	<%
 		SupplyConnection fundObj = new SupplyConnection(); 
 		out.print(fundObj.viewAllConnections()); 
 	%>
</div>

<!-- Footer start-->
<footer class="bg-dark text-center text-white">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="">Electrogrid.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer end -->
</body>
</html>