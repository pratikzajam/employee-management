import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



export let EmployeeContext = createContext();


export const EmployeeProvider = ({ children }) => {
    const API_URL = import.meta.env.VITE_API_URL;

   
    const [loading, setloading] = useState(false)
    const [employee, setEmployee] = useState(false)
    const [error, setError] = useState(null)
    const [Modal, setModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [Edit, setEdit] = useState({ id: "", name: "", email: "", position: "", phone: "" })



    let fetchEmployeeData = async () => {
        try {
            setloading(true);    //loader will get displayed

            let response = await axios.get(`${API_URL}/api/employee/v1/employees`);   //api call



            if (response.data.status == 404) {          //if no data found then will set employee state to []
                setEmployee([])
            }



            setEmployee(response.data.data)       //setting employee state to value which we are getting from backend
            console.log(response.data.data)
            setloading(false)

        } catch (error) {
            setError(error.message)          //setting error state
            setEmployee([])
            console.log(error)
        } finally {

            setloading(false)          //setting loader state to false , so loader stop spinning
        }
    }


    let addEmployee = async (name, email, position, phone) => {
        try {



            let response = await axios.post(`${API_URL}/api/employee/v1/employees`, {
                name: name,
                email: email,
                position: position,
                phone: phone
            });


            toast(response.data.message)    //employee added sucessfully notfication will get displayed in frontend

            console.log(response.data.message)

            setModal(false)    //add employee modal close after submitting the form
            fetchEmployeeData()  //running fetch employee function to get updated employee list

        } catch (error) {
            console.log(error.response?.data.message)

            toast.error(error.response?.data.message); //error notification will get display

        }
    }


    let updateEmployee = async (id, name, email, position, phone) => {
        try {
            let response = await axios.patch(
                `${API_URL}/api/employee/v1/employees/${id}`,
                { name, email, position, phone }
            );


            toast.success(response.data.message); ///if employee get updated then notification will get dispalyed


            await fetchEmployeeData();   //fetching latest employee list from backend


            setEditModal(false);     // edit employee form will get closed

        } catch (error) {
            toast.error(error.response?.data.message);   // error will get displayed

        }
    };


    let getEmployeeById = async (id) => {
        try {


            let response = await axios.get(`${API_URL}/api/employee/v1/employees/${id}`);


            let name = response.data.data.name      //fetching employee values from api
            let email = response.data.data.email
            let position = response.data.data.position
            let phone = response.data.data.phone



            setEdit({ id: id, name: name, email: email, position: position, phone: phone })  // setting employee values edit state so we can populate this values in the edit form
            console.log(Edit);
            setEditModal(true)


        } catch (error) {
            setError(error.message)    // setting error values
            setEmployee([])
            console.log(error)
        } finally {

            setloading(false)    //loader will stop
        }
    }




    let deleteEmployee = async (id) => {
        try {

            let response = await axios.delete(`${API_URL}/api/employee/v1/employees/${id}`);

            toast.success(response.data.message)
            fetchEmployeeData()


        } catch (error) {
            setError(error.message)
            console.log(error)
        }
    }








    useEffect(() => {
        fetchEmployeeData()
    }, [])


    return (
        <EmployeeContext.Provider value={{ loading, employee, error, deleteEmployee, addEmployee, Modal, setModal, EditModal, setEditModal, getEmployeeById, Edit, setEdit, updateEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};