package com.electrogrid.supplyconnection.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.electrogrid.supplyconnection.model.SupplyConnection;

/**
 * Servlet implementation class SupplyConnectionsAPI
 */
@WebServlet("/SupplyConnectionsAPI")
public class SupplyConnectionsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SupplyConnectionsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		final java.util.Date today = new java.util.Date();
	   	final java.sql.Timestamp todaySQL = new java.sql.Timestamp(today.getTime());
	   	
	   	System.out.println(request.getParameter("accNo"));
	   	System.out.println(request.getParameter("name"));
		SupplyConnection supcon = new SupplyConnection(Integer.parseInt(request.getParameter("accNo")),
				 request.getParameter("name"),
				request.getParameter("address"),
				request.getParameter("area"),
				request.getParameter("type"),
				request.getParameter("connection_type"),
				todaySQL
				);
		String output = supcon.createConnection();
		response.getWriter().write(output); 
		

		
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
					scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params)
			{ 
				 String[] p = param.split("=");
				 map.put(p[0], p[1]);
			}
		}
		catch (Exception e){
		}
		return map;
	}


	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		SupplyConnection supcon = new SupplyConnection();
		String output = supcon.updateConnection(Integer.parseInt(paras.get("accNo").toString()),
				paras.get("name").toString(),
				paras.get("address").toString(),
				paras.get("area").toString(),
				paras.get("type").toString(),
				paras.get("connection_type").toString());
		response.getWriter().write(output);
		
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		SupplyConnection supconnection = new SupplyConnection();
		Map paras = getParasMap(request);
		
		System.out.println(paras);
		System.out.println(paras.get("accNo"));
		String output = supconnection.deleteConnection(Integer.parseInt(paras.get("accNo").toString()));
		response.getWriter().write(output);
		
	}

}
