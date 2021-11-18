import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function MerchantForm(props) {
    const [form, setForm] = useState({});

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        if (name === "name") {props.setName(updateData)}
    }

    function saveFormMerchant(event) {
        event.preventDefault();
        props.setName(form.name);
        const merchRegister = {
            personaName: form.name
        }
        axiosWithAuth().post("/persona", merchRegister)
            .then(resp => {
                //console.log(resp.data);
            }).catch((err) => {
                console.log({err});
                alert(err.response.data.message);
            });
    }

    return (
        <div id="merchant-form" onSubmit={saveFormMerchant}>
            {form && <label>Merchant Name
                <input name="name" type="text" value={form.name} onChange={handleChange} />
            </label>}
        </div> 
    )
}

export {
    MerchantForm
}
