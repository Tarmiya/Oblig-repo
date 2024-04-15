package com.example.oblig1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketRepository rep;

    @PostMapping("/receiveTicket")
    public void receiveTicket(Ticket inputTicket) {
        rep.saveTicket(inputTicket);
        System.out.println("Received ticket: " + inputTicket);
    }

    @GetMapping("/fetchAll")
    public List<Ticket> fetchAll(){
        return rep.showAllTickets();
    }

    @GetMapping("/deleteAll")
    public void deleteAll(){
        rep.deleteAllTickets();
    }

   @GetMapping("/deleteTicket")
    public void deleteTicket(int id){
        rep.deleteTicket(id);
    }
}
