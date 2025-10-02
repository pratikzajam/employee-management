import { X } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import validator from "validator";
import { useContext, useEffect } from 'react'
import { EmployeeContext } from '../Context/EmployeeContext'


export default function EditEmployeeModal({ isOpen, onClose }) {

    const { addEmployee, Modal, setModal, EditModal, setEditModal, Edit, updateEmployee } = useContext(EmployeeContext)

    if (!EditModal) return null;



    const [Form, setFormData] = useState({ name: "", email: "", position: "", phone: "" })


    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...Form, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        if (Edit) {
            setFormData(Edit);
        }
    }, [Edit]);


    let handleSubmit = (e) => {
        e.preventDefault()

        let id = Edit.id;
        let name = Form.name;
        let email = Form.email;
        let position = Form.position;
        let phone = Form.phone;

        updateEmployee(id, name, email, position, phone)  //calling update employee fn

    }



    return (
        <>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">Edit Employee</h2>
                        <button onClick={() => { setEditModal(false) }}


                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-6">


                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Pratik Zajam"
                                        onChange={handleChange}
                                        value={Form.name}


                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        disabled
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="zajampratik@gmail.com"
                                        onChange={handleChange}
                                        value={Form.email}


                                    />
                                </div>

                                <div>
                                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        name="position"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Software Engineer"
                                        onChange={handleChange}
                                        value={Form.position}


                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="9082684754"
                                        onChange={handleChange}
                                        value={Form.phone}

                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => { setEditModal(false) }}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Update Employee
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}