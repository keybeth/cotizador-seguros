export function getDiferenciaAnio(anio) {
    return new Date().getFullYear() - anio;
}

export function getIncrementoMarca(marca) {
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default: 
            break;
    }
    return incremento;
}

export function getIncrementoPlan(plan) {
    return plan === 'basico' ? 1.20 : 1.50 ;
}

export function getCotizacion(marca, anio, plan) {
    const anios = getDiferenciaAnio(anio);
    let resultado = 2000 * (1 - 3 * anios /100);
    resultado *= getIncrementoMarca(marca);
    resultado *= getIncrementoPlan(plan);
    return resultado;
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}