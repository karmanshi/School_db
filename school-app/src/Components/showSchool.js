import React, {useState, useEffect } from 'react';
import './SchoolRegistrationForm.css';
import axios from 'axios';

const ShowSchool = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/get_schools');
            setData(response.data.schools);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs once after the initial render
    
    console.log("Data is",data)


    return (
        <div className="registration-summary">
            <h2>Registration Summary</h2>
            <div className="registration-summary-body">

            {
                data.map((elements, index)=>{
                    let photo_path = "http://localhost:5000/"+elements.photo
                    return <>
                        <div class="school_card">
                            {/* <img src={URL.createObjectURL(data[0].image[0])} alt="Avatar" style={{width:"100%"}} /> */}
                            <img src={photo_path} alt="Avatar" style={{width:"100%"}} />
                            <div class="school_card_container">
                                <h4><b>{elements.name}</b></h4> 
                                <ul>
                                    <li>{elements.city}</li> 
                                    <li>{elements.address}</li> 
                                </ul>
                            </div>
                        </div>
                    </>
                })
            }
            </div>
        </div>
    );
};

export default ShowSchool;
