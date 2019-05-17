package com.sdk_itau.Repository;

import android.util.Log;

import com.sdk_itau.Service.ServiceGenerator;
import com.sdk_itau.model.LoginModel;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static com.facebook.react.views.textinput.ReactTextInputManager.TAG;

/**
 * Created by sontbv on 3/7/18.
 */

public class LoginRepositoryImp {

    private void login(){
        LoginRepository loginRepository = ServiceGenerator.createService(LoginRepository.class);
        Call<LoginModel> call = loginRepository.getMovies();
        call.enqueue(new Callback<LoginModel>() {
            @Override
            public void onResponse(Call<LoginModel> call, Response<LoginModel> response) {
                if(response.isSuccessful()) {
                    Log.i(TAG, response.body().toString());
                }else{
                    Log.e(TAG, response.message());
                }
            }
            @Override
            public void onFailure(Call<LoginModel> call, Throwable t) {
                Log.e(TAG, t.getMessage());
            }
        });
    }
}
