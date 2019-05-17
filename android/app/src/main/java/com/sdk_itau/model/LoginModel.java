package com.sdk_itau.model;

import com.google.gson.annotations.SerializedName;

public class LoginModel {

    @SerializedName("Credencial")
    private CredentialDTO credential;


    public LoginModel(CredentialDTO credential) {
        this.credential = credential;
    }
}
