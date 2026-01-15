import Swal from "sweetalert2";
import type { ICustomer } from "../../interfaces/ICustomer";
import { api } from "../api";

export const onPostSendNewCustomer = (customer: ICustomer, onCallback: () => void) => {
    api.post<boolean>('Customer', customer, async () => {
        await Swal.fire({
            title: 'Formulário enviado com sucesso!',
            html: `
                <div style="text-align: left; font-family: 'Comic Sans MS', cursive;">
                <p style="margin-bottom: 15px;">Obrigado pelo seu interesse em se associar à CoopFácil!</p>
                <p style="margin-bottom: 10px;"><strong>Entraremos em contato em breve através de:</strong></p>
                <p style="color: #0066cc; font-weight: bold;">${customer.smartphone}</p>
                </div>
                `,
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#0066cc',
            customClass: {
                popup: 'font-comic',
                title: 'font-comic',
                htmlContainer: 'font-comic',
                confirmButton: 'font-comic'
            }
        })
        onCallback()
    })
}