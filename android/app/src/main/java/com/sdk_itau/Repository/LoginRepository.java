package com.sdk_itau.Repository;

import com.sdk_itau.model.LoginModel;

import retrofit2.Call;
import retrofit2.http.GET;

public interface LoginRepository {

    @GET("films")
    Call<LoginModel> getMovies();
}
