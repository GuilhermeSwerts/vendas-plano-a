import { FaCalendar, FaPhone, FaUser } from "react-icons/fa"
import { Header } from "../components/Header"
import { InputIcon } from "../components/ui/Input"
import { MdAlternateEmail } from "react-icons/md"
import { HiIdentification } from "react-icons/hi"
import { useRegister } from "../hook/useRegister"
import { maskPhone } from "../util/mask"

const Register = () => {

    const {
        errors,
        form,
        handleChange,
        handleSubmit
    } = useRegister();

    return (
        <div className="h-screen">
            <Header />
            <main className="flex items-center justify-center h-full">
                <div className="glass mt-0 md:mt-15 p-10 rounded-3xl space-y-8 text-left border-accent/20">
                    <div>
                        <h3 className="text-center text-1xl md:text-2xl">Comece agora a economizar no dia a dia com a Kompleto.</h3>
                        <h4 className="text-center">Você já concorre a <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#FF6B00]">R$5000,00 ainda esse mês</span></h4>
                    </div>
                    <>
                        {errors["full_name"] && <span className="text-red-500">{errors["full_name"]}</span>}
                        <InputIcon
                            required
                            label="Nome Completo"
                            Icon={FaUser}
                            value={form.full_name}
                            onChange={handleChange}
                            name="full_name"
                            placeholder="xxxxxxxx xxxxx xxxx"
                        />
                    </>
                    <>
                        {errors["cpf"] && <span className="text-red-500">{errors["cpf"]}</span>}
                        <InputIcon
                            required
                            label="CPF"
                            Icon={HiIdentification}
                            value={form.cpf}
                            onChange={handleChange}
                            name="cpf"
                            placeholder="xxx.xxx.xxx-xx"
                            maxLength={14}
                        />
                    </>
                    <>
                        {errors["date_of_birth"] && <span className="text-red-500">{errors["date_of_birth"]}</span>}
                        <InputIcon
                            required
                            label="Data de Nascimento"
                            type="date"
                            Icon={FaCalendar}
                            value={form.date_of_birth}
                            onChange={handleChange}
                            name="date_of_birth"
                        />
                    </>
                    <>
                        {errors["smartphone"] && <span className="text-red-500">{errors["smartphone"]}</span>}
                        <InputIcon
                            required
                            label="Celular"
                            Icon={FaPhone}
                            value={maskPhone(form.smartphone)}
                            onChange={handleChange}
                            name="smartphone"
                            placeholder="(xx) 9xxxx-xxxx"
                        />
                    </>
                    <>
                        {errors["email"] && <span className="text-red-500">{errors["email"]}</span>}
                        <InputIcon
                            required
                            label="Email"
                            Icon={MdAlternateEmail}
                            value={form.email}
                            onChange={handleChange}
                            name="email"
                            placeholder="xxxx@xxxx.com"
                        />
                    </>
                    <div className="flex items-center justify-center">
                        <button onClick={handleSubmit} className="w-full max-w-md py-6 bg-cta-primary hover:bg-cta-hover text-background-dark font-bold text-2xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-tighter">
                            Continuar
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register