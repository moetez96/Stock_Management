package com.example.order.order.Entities;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.Date;

@Entity
public class MvtStock implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Temporal(TemporalType.DATE)
    private Date dateMvt;
    private int quantite;

   @Enumerated(EnumType.STRING)
    private TypeOrder TypeOrder;

    private int item;
    private int client;

    public MvtStock(Date dateMvt, int quantite, TypeOrder typeOrder, int item, int client) {
        this.dateMvt = dateMvt;
        this.quantite = quantite;
        TypeOrder = typeOrder;
        this.item = item;
        this.client = client;
    }

    public MvtStock() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDateMvt() {
        return dateMvt;
    }

    public void setDateMvt(Date dateMvt) {
        this.dateMvt = dateMvt;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public com.example.order.order.Entities.TypeOrder getTypeOrder() {
        return TypeOrder;
    }

    public void setTypeOrder(com.example.order.order.Entities.TypeOrder typeOrder) {
        TypeOrder = typeOrder;
    }

    public int getItem() {
        return item;
    }

    public void setItem(int item) {
        this.item = item;
    }

    public int getClient() {
        return client;
    }

    public void setClient(int client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "MvtStock{" +
                "id=" + id +
                ", dateMvt=" + dateMvt +
                ", quantite=" + quantite +
                ", TypeOrder=" + TypeOrder +
                ", item=" + item +
                ", client=" + client +
                '}';
    }
}
