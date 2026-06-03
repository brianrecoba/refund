import { useActionState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
    const [state, formAction, isLoading] = useActionState(signIn, null)


    async function signIn(prevState: any,formData: FormData) {
       const email = formData.get("email")
       const password = formData.get("password")

         await new Promise((resolve) => setTimeout(resolve, 2000))

        
    }
    return (
        <form action={formAction} className="w-full flex flex-col gap-4" >
            <Input name="email" required legend="Email" type="email" placeholder="seu@email.com" />

            <Input name="password" required legend="Senha" type="password" placeholder="Digite sua senha"  />

            <Button type="submit" isLoading={isLoading}>
                Entrar
            </Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}