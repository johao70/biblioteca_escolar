/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API_URL = "http://localhost:8001/server/library?tabla=persona";

class Admin extends Component {
    handleOpenModal () { this.setState({ showModal: true }) }      
    handleCloseModal () { this.setState({ showModal: false }) }

    constructor(props) {
        super(props);
      
        this.state = {
            table_header: {
                persona_identificacion: 'Identificación',
                persona_nombre: 'Nombre',
                persona_email:'Correo Electrónico'
            },
            admins: []
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(response => {
                this.setState({admins: response.data.datos})
                console.log(response.data.datos)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { admins } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center">Bienvenido a la sección para visualizar, modificar y eliminar a los administradores.</p>

                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_identificacion }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_nombre }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.persona_email }</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={element.id}> {element.persona_identificacion} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={element.id}> {element.persona_nombre} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5" key={element.id}> {element.persona_email} </p>) }
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button></p> )}
                                        </td>
                                        <td>
                                            { admins.map(element => <p className="p-2 px-5"><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></p> )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>

                    {/* MODAL */}
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <button onClick={ this.handleOpenModal } type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Nuevo Administrador</button>
                        <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                        className="bg-teal-200 flex-1 text-white text-center bg-gray-400 px-24 py-0 my-10 mr-40 ml-64">

<form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p className="text-gray-800 font-medium">Nuevo Registro</p>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" for="cus_email">Cédula de Identidad</label>
      <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Ej: 175148795" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" for="cus_email">Nombre y Apellido</label>
      <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Ej: Joel Simbaña" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" for="cus_email">Correo Electronico</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="@yavirac.edu.ec" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" for="cus_email">Direccion</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="@yavirac.edu.ec" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 w-1/2 pr-1">
      <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
    </div>
    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
    </div>
    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
    </div>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
    </div>
  </form>
                        </ReactModal>
                    </div>
                    {/* MODAL */}
                </div>
            </div>
        )
    }
}

export default Admin;