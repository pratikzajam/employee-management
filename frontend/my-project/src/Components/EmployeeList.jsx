import React, { useState, useEffect, useContext } from 'react';
import { Edit2, Trash2, Users, Search, Plus, Phone, Mail, Briefcase } from 'lucide-react';
import { EmployeeContext } from '../Context/EmployeeContext'
import { ToastContainer, toast } from 'react-toastify';

const EmployeeList = () => {

  const { loading, employee, error, deleteEmployee, Modal, setModal, setEditModal, getEmployeeById } = useContext(EmployeeContext)
  const [searchedList, setSearchedList] = useState(employee)

  // Add pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Show 5 items per page

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedList ? searchedList.slice(indexOfFirstItem, indexOfLastItem) : [];
  const totalPages = searchedList ? Math.ceil(searchedList.length / itemsPerPage) : 0;

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Previous and Next page handlers
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  useEffect(() => {
    setSearchedList(employee);  // Keep searchedList in sync with employee data
  }, [employee]);


  useEffect(() => {
    setCurrentPage(1); // Reset to first page when search results change
  }, [searchedList]);



  let handleDelete = (id) => {

    if (window.confirm("Do you really want to delete this employee?")) {   //if user accpeted prompt then only user will get deteletd

      deleteEmployee(id)

    }

  }

  let handleEdit = (id) => {
    getEmployeeById(id)
  }




  let handleSearch = (e) => {
    let keyword = e.target.value.toLowerCase();    //fetched data from searchbar
    let searchedList = employee.filter((emp) =>
      emp.name.toLowerCase().includes(keyword)
    );                                              //filtered data that mached with namae
    setSearchedList(searchedList);                  //setting searchlist to state
  }







  return (
    <>

      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-full lg:max-w-[80%] mx-auto px-4 md:px-6 py-4 md:py-6">




          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 md:px-8 py-4 md:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">Employee Management</h1>
                  <p className="text-blue-100 mt-1 text-base md:text-lg">Manage your team members efficiently</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Users className="w-8 h-8" />
                </div>
              </div>
            </div>


            <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input onChange={(e) => handleSearch(e)}
                      type="text"
                      placeholder="Search by name"
                      className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button onClick={() => { setModal(true) }} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2 shadow-md w-full md:w-auto justify-center">
                  <Plus className="w-5 h-5" />
                  Add Employee
                </button>
              </div>



            </div>


            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-200">
                    <th className="px-4 md:px-8 py-4 text-left text-sm md:text-base font-semibold text-gray-700">Employee</th>
                    <th className="px-4 md:px-8 py-4 text-left text-sm md:text-base font-semibold text-gray-700 hidden md:table-cell">Contact</th>
                    <th className="px-4 md:px-8 py-4 text-left text-sm md:text-base font-semibold text-gray-700">Position</th>

                    <th className="px-4 md:px-8 py-4 text-center text-sm md:text-base font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="px-4 md:px-8 py-12">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                          <p className="text-gray-500 text-sm md:text-base">Loading employees...</p>
                        </div>
                      </td>
                    </tr>
                  ) : employee && employee.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-4 md:px-8 py-12">
                        <div className="flex flex-col items-center justify-center gap-3">
                          
                          <p className="text-gray-500 text-sm md:text-base">No employees found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentItems.map((emp, index) => (
                      <tr
                        key={emp.id || index}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 md:px-8 py-5">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base">
                              {emp.name[0]}
                            </div>
                            <div>
                              <div className="text-sm md:text-base font-semibold text-gray-900">
                                {emp.name}
                              </div>
                             
                            </div>
                          </div>
                        </td>
                        <td className="px-4 md:px-8 py-5 hidden md:table-cell">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-sm md:text-base text-gray-900">
                              <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              {emp.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                              <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              {emp.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 md:px-8 py-5">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm md:text-base font-medium text-gray-900">
                              {emp.position}
                            </span>
                           
                          </div>
                        </td>
                        <td className="px-4 md:px-8 py-5">
                          <div className="flex items-center justify-center gap-2">
                            <button onClick={() => handleEdit(emp._id)} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(emp._id)}
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>


            <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, searchedList?.length || 0)}</span> of{' '}
                  <span className="font-semibold">{searchedList?.length || 0}</span> employees
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium 
                      ${currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'} 
                      transition-colors`}
                  >
                    Previous
                  </button>

                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                        ${currentPage === number
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium 
                      ${currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'} 
                      transition-colors`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default EmployeeList;