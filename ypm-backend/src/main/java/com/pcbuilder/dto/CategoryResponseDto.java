package com.pcbuilder.dto;

import java.util.ArrayList;
import java.util.List;

import com.pcbuilder.entity.Category;

import lombok.Data;

@Data
public class CategoryResponseDto extends CommonApiResponse {
	
	private List<Category> categories = new ArrayList<>(); 

}
