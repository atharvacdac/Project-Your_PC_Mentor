package com.pcbuilder.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcbuilder.entity.ServiceNegotiation;

@Repository
public interface ServiceNegotiationDao extends JpaRepository<ServiceNegotiation, Integer> {

}
