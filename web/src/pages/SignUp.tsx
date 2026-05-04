import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    


    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log(name, email, password, passwordConfirmation);
    }
    return (
        <form action="" className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
            <Input 
                required 
                legend="Nome"  
                placeholder="Seu nome " 
                onChange={(e) => setName(e.target.value)} 
            />
            <Input 
                required 
                legend="Email" 
                type="email" 
                placeholder="seu@email.com" 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <Input 
                required 
                legend="Senha" 
                type="password" 
                placeholder="Digite sua senha" 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <Input 
                required 
                legend="Confirmação de senha" 
                type="password" 
                placeholder="Digite sua senha novamente" 
                onChange={(e) => setPasswordConfirmation(e.target.value)} 
            />
            <Button type="submit" isLoading={isLoading}>
                Cadastrar
            </Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}