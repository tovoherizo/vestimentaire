<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


class LoguserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email'=>'required|email|exists:users,email',
            'password '=> 'required'
        ];
    }
    public function failedValidator(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'error' => true,
            'message' => 'Erreur de validation',
            'errorsList' => $validator->errors()


        ]));
    }
    public function messages()
    {
        return [
            'email.required'=>'email non fourni',
            'email.email'=>'adresse email non valide',
            'email.exists'=>'email n n\'existe pas',
           'password.required' => 'titre obligatoire'
        ];
    }
}

