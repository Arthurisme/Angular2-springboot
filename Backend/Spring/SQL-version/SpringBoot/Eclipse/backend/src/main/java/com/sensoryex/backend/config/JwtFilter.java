package com.sensoryex.backend.config;
 
 
import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;




public class JwtFilter extends GenericFilterBean{
	
	private static final Logger log = LoggerFactory.getLogger(JwtFilter.class);

	
    public void doFilter(final ServletRequest req,
                         final ServletResponse res,
                         final FilterChain chain) throws IOException, ServletException {

        final HttpServletRequest request = (HttpServletRequest) req;
        final HttpServletResponse response = (HttpServletResponse) res;
        final String authHeader = request.getHeader("Authorization");

        if ("OPTIONS".equals(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);

            chain.doFilter(req, res);
        } else {
        	
        	if (authHeader == null || !authHeader.startsWith("Bearer ")) {
        		log.error("test authHeader 201607251312: "+authHeader);

        		throw new ServletException ("Missing or invalid Authorization header");
        	}
        	
        	final String token = authHeader.substring(7);
        	
        	try {
        		final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
        		request.setAttribute("claims", claims);
        	} catch (final SignatureException e) {
        		throw new ServletException ("Invalid token");
        	}
        	
        	
        	chain.doFilter(req, res);
        }
}
}
