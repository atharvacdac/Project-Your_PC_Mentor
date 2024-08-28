package com.pcbuilder.dto;

import com.pcbuilder.pg.RazorPayPaymentRequest;

public class OrderRazorPayResponse extends CommonApiResponse {

	private RazorPayPaymentRequest razorPayRequest;

	public RazorPayPaymentRequest getRazorPayRequest() {
		return razorPayRequest;
	}

	public void setRazorPayRequest(RazorPayPaymentRequest razorPayRequest) {
		this.razorPayRequest = razorPayRequest;
	}

}
