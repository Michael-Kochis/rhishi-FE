import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import '../styles/login.css'
import { useHistory } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import  { MerchantForm }  from './MerchantForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function NewGameButton(props) {
    const [modalOpen, setModalOpen] = useState();
    const [name, setName] = useState("");
    let history = useHistory();

    function closeModal() {
        setName("");
        setModalOpen(false);
        history.push("/dashboard");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const merchRegister = {
            personaName: name
        }
        axiosWithAuth().post("/persona", merchRegister)
            .then(resp => {
                console.log(resp.data[0]);
                let {personaID} = resp.data[0];
                console.log(personaID);
                axiosWithAuth().post(`/persona-trait/repairMerchant/${personaID}`, resp.data[0])
                    .then (resp => {
                        console.log(resp.data);
                        closeModal();
                    }).catch((err) => {
                    console.log({err});
                    alert(err.response.data.message);
                })
            }).catch((err) => {
                console.log({err});
                alert(err.response.data.message);
            });
    }

    function openModal() {
        setModalOpen(true);
    }

    return (
        <div>
            <Modal show={modalOpen} onHide={closeModal} className="modal-top">
                <Form onSubmit={handleSubmit} className="w-40 d-flex justify-content-center align-items-center">
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <MerchantForm setName={setName}></MerchantForm>
                    </Modal.Body>
                    <Modal.Footer className="d-flex">
                        <Button variant="secondary" onClick={closeModal} >Close</Button>
                        <Button variant="success" type="submit" >New Repair Merchant</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <FontAwesomeIcon icon={faPlusSquare} size="3x" color="lime" onClick={openModal}/>
        </div>
    )
}

export {
    NewGameButton
}
