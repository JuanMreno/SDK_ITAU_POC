package com.sdk_itau.model;

import com.google.gson.annotations.SerializedName;

class CredentialDTO {

    @SerializedName("usuario")
    private String username;

    @SerializedName("sehna")
    private String password;

    @SerializedName("pais_origem")
    private String country;


}
