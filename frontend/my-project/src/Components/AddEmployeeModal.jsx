import { X } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import validator from "validator";
import { useContext } from 'react'
import { EmployeeContext } from '../Context/EmployeeContext'


export default function AddEmployeeModal({ isOpen, onClose }) {


    const { addEmployee, Modal, setModal } = useContext(EmployeeContext)

    console.log(Modal)


    if (!Modal) return null;



    const [Form, setFormData] = useState({ name: "", email: "", position: "", phone: "" })


    let handleSubmit = (e) => {
        e.preventDefault()

        let name = e.target.name.value.trim();   //getting data from form
        let email = e.target.email.value.trim();
        let position = e.target.position.value.trim();
        let phone = e.target.phone.value.trim();


        if (!name || !email || !position || !phone) {    //checking all fields exists or not
            return toast("All Fields Are Required")
        }

        if (!validator.isEmail(email)) {                 //validiting email address
            return toast("Enter A Valid Email Address")
        }

        if (phone.length != 10) {
            return toast("Phone Number Must Be Of 10 Digits")        //mobile number must be of 10 digits
        }

        addEmployee(name, email, position, phone)   // calling the add employee fn
        // setModal(false)

    }



    return (
        <>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">Add New Employee</h2>
                        <button onClick={() => { setModal(false) }}


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



                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="zajampratik@gmail.com"


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

                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => { setModal(false) }}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Add Employee
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}