package com.example.oblig1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    public final List<Ticket> ticketPurchase = new ArrayList<>();

    @PostMapping("/receiveTicket")
    public void receiveTicket(Ticket ticket) {
        ticketPurchase.add(ticket);
        System.out.println("Received ticket: " + ticket);
    }

    @GetMapping("/fetchAll")
    public List<Ticket> fetchAll(){
        return ticketPurchase;
    }

    @GetMapping("/deleteAll")
    public void deleteAll(){
        ticketPurchase.clear();
    }
}
