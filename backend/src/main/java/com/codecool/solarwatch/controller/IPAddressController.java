package com.codecool.solarwatch.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ip")
public class IPAddressController {

  @GetMapping
  public ResponseEntity<String> getIPAddress(HttpServletRequest request) {
    String ipAddress = request.getRemoteAddr();
    //System.out.println("HttpServletRequest headers: " + request.getHeaderNames());
    System.out.println("ipAddress: " + ipAddress);
    return ResponseEntity.ok().body(ipAddress);
  }
}
