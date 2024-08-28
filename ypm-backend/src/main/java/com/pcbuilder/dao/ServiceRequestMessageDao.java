package com.pcbuilder.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcbuilder.entity.ServiceRequestMessage;

@Repository
public interface ServiceRequestMessageDao extends JpaRepository<ServiceRequestMessage, Integer> {

}
