package com.example.client.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String firstname;
    private String name;
    @Temporal(TemporalType.DATE)
    private Date dateReg;
    private int tel;
    private int card;


    public Client(String firstname, String name, Date dateReg, int tel, int card) {
        this.firstname = firstname;
        this.name = name;
        this.dateReg = dateReg;
        this.tel = tel;
        this.card = card;
    }

    public Client() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateReg() {
        return dateReg;
    }

    public void setDateReg(Date dateReg) {
        this.dateReg = dateReg;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public int getCard() {
        return card;
    }

    public void setCard(int card) {
        this.card = card;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", name='" + name + '\'' +
                ", dateReg=" + dateReg +
                ", tel=" + tel +
                ", card=" + card +
                '}';
    }
}
