package com.sensoryex.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sensoryex.backend.dao.CommentDao;


import com.sensoryex.backend.model.Comment;


 
import com.sensoryex.backend.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
	
	
	
 
	
	@Autowired
	private CommentDao commentDao;

 
	public Comment save(Comment comment) {
 		return commentDao.save(comment);
	}

	
	public	 Comment findOne( Long commentId){
 		return commentDao.findOne(commentId);

	}
 
	
	public	List<Comment> findByPhotoId( Long photoId){
 		return commentDao.findByPhotoId(   photoId);

	}




	
	 

}
