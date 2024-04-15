package com.example.oblig1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate bookingSystem;

    public void saveTicket(Ticket ticket) {
        String sql = "INSERT INTO Ticket (film, antall, fornavn, etternavn, telefonnr, epost) VALUES (?, ?, ?, ?, ?, ?)";
        bookingSystem.update(sql, ticket.getFilm(), ticket.getAntall(), ticket.getFornavn(), ticket.getEtternavn(), ticket.getTelefonnr(), ticket.getEpost());
    }


    public List<Ticket> showAllTickets() {
        String sql = "SELECT * FROM Ticket ORDER BY etternavn";
        List<Ticket> allTickets = bookingSystem.query(sql, new BeanPropertyRowMapper(Ticket.class));
        return allTickets;
    }

    public void deleteAllTickets() {
        String sql = "DELETE FROM Ticket";
        bookingSystem.update(sql);
    }

    public void deleteTicket(int id){
        String sql = "DELETE FROM Ticket WHERE id = ?";
        bookingSystem.update(sql,id);
    }

}
