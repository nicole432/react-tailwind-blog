import { useEffect } from "react";
export function Home() {
    //disparar um codigo quando o compoentne for carregado
    useEffect(() => {
        console.log("Componente Home carregado");
    }, []);

    return (
        <div>
            <h2>Página Home</h2>
        </div>
    );
}