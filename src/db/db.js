const urlApi = "http://localhost:3008/api/v1";
export const create = async (endpoint, data) => {
    const url = `${urlApi}/${endpoint}`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const dataResponse = await response.json();

    if (dataResponse.code >= 400) {
        mostrarError(dataResponse);
        return false;
    }else{
        return true;
    }
}

export const findAll = async (endpoint) => {
    const url = `${urlApi}/${endpoint}`;
    const response = await fetch(url);
    const {data} =  await response.json();
    return data || [];
}

export const update = async (endpoint, data, uuid) => {
    const url = `${urlApi}/${endpoint}/${uuid}`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const dataResponse = await response.json();

    if (dataResponse.code >= 400) {
        mostrarError(dataResponse);
        return false;
    }else{
        return true;
    }
}

const mostrarError = (dataResponse) => {
    console.log(dataResponse);
    // Verifico si el error es un string o un array
    if (typeof dataResponse.message !== 'string') {
        if (dataResponse.message.length > 1) {
            for (let i = 0; i < dataResponse.message.length; i++) {
                let error =  dataResponse.message[i];
                if (error){
                    console.log('Error ', error)
                    alert(error);
                }
                else if (error.message){
                    error = error.message;
                }else{
                    error = dataResponse.message[i].message
                    alert(error);
                }
            }
        } else{
            alert(dataResponse.message[0]);
        }
    }else{
        alert(dataResponse.message)
    }
}

export const findOne = async (endpoint, uuid) => {
    const url = `${urlApi}/${endpoint}/${uuid}`;
    const response = await fetch(url);
    const {data} =  await response.json();
    return data;
}

export const findBy = async (endpoint, uuid) => {
    const url = `${urlApi}/${endpoint}/${uuid}`;
    const response = await fetch(url);
    const {data} =  await response.json();
    return data;
}
