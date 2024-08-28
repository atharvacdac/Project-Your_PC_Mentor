package com.pcbuilder.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcbuilder.entity.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
