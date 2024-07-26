//1chi vazifa

// import React, { useState } from 'react';

// function CreateAccountForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     username: '',
//     password: '',
//     biography: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.email || !formData.username || !formData.password) {
//       alert('Iltimos, barcha maydonlarni to‘ldiring!');
//       return;
//     }
//     console.log(formData);
//   };

//   return (
//     <form className="create-account-form" onSubmit={handleSubmit}>
//       <h2>Create An Account</h2>
//       <p>Kindly fill the following details to create your account.</p>
//       <input
//         type="text"
//         name="fullName"
//         placeholder="Enter your full name"
//         value={formData.fullName}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter your email address"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="Enter your username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <textarea
//         name="biography"
//         placeholder="Your Biography"
//         value={formData.biography}
//         onChange={handleChange}
//       ></textarea>
//       <button type="submit">CREATE ACCOUNT</button>
//       <p>You will receive an email after setting up your account.</p>
//     </form>
//   );
// }

// export default CreateAccountForm;




// 2chi vazifa

// import React, { useRef } from 'react';

// function OnlineRegistrationForm() {
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const companyRef = useRef(null);
//   const addressRef = useRef(null);
//   const monthRef = useRef(null);
//   const dayRef = useRef(null);
//   const yearRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       firstName: firstNameRef.current.value,
//       lastName: lastNameRef.current.value,
//       email: emailRef.current.value,
//       company: companyRef.current.value,
//       address: addressRef.current.value,
//       birthDate: {
//         month: monthRef.current.value,
//         day: dayRef.current.value,
//         year: yearRef.current.value,
//       }
//     };


//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.birthDate.month || !formData.birthDate.day || !formData.birthDate.year) {
//       alert('Iltimos, barcha majburiy maydonlarni to‘ldiring!');
//       return;
//     }

//     console.log(formData);

//   };

//   return (
//     <form className="online-registration-form" onSubmit={handleSubmit}>
//       <div className="header">
//         <h1>YourEvent</h1>
//         <h2>Online Registration</h2>
//       </div>
//       <div className="form-group">
//         <label>First Name</label>
//         <input type="text" placeholder="First Name" ref={firstNameRef} />
//       </div>
//       <div className="form-group">
//         <label>Last Name</label>
//         <input type="text" placeholder="Last Name" ref={lastNameRef} />
//       </div>
//       <div className="form-group">
//         <label>Email Address</label>
//         <input type="email" placeholder="Email Address" ref={emailRef} />
//       </div>
//       <div className="form-group">
//         <label>Company (if applicable)</label>
//         <input type="text" placeholder="Company" ref={companyRef} />
//       </div>
//       <div className="form-group">
//         <label>Physical Address</label>
//         <input type="text" placeholder="Physical Address" ref={addressRef} />
//       </div>
//       <div className="form-group">
//         <label>Date of Birth</label>
//         <div className="date-of-birth">
//           <select ref={monthRef}>
//             <option value="">Month</option>
//             <option value="01">January</option>
//             <option value="02">February</option>
//             <option value="03">March</option>
//             <option value="04">Aprel</option>
//             <option value="05">May</option>
//             <option value="06">June</option>
//             <option value="07">Jule</option>
//             <option value="08">Avgust</option>
//             <option value="09">September</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">Decamber</option>
//           </select>
//           <select ref={dayRef}>
//             <option value="">Day</option>
//             <option value="01">1</option>
//             <option value="02">2</option>
//             <option value="03">3</option>
//             <option value="04">4</option>
//             <option value="05">5</option>
//             <option value="06">6</option>
//             <option value="07">7</option>
//             <option value="08">8</option>
//             <option value="09">9</option>
//             <option value="10">10</option>
//             <option value="11">11</option>
//             <option value="12">12</option>
//             <option value="13">13</option>
//             <option value="14">14</option>
//             <option value="15">15</option>
//             <option value="16">16</option>
//             <option value="17">17</option>
//             <option value="18">18</option>
//             <option value="19">19</option>
//             <option value="20">20</option>
//             <option value="21">21</option>
//             <option value="22">22</option>
//             <option value="23">23</option>
//             <option value="24">24</option>
//             <option value="25">25</option>
//             <option value="26">26</option>
//             <option value="27">27</option>
//             <option value="28">28</option>
//             <option value="29">29</option>
//             <option value="30">30</option>
//             <option value="31">31</option>
//           </select>
//           <select ref={yearRef}>
//             <option value="">Year</option>
//             <option value="2000">2000</option>
//             <option value="2001">2001</option>
//             <option value="2002">2002</option>
//             <option value="2003">2003</option>
//             <option value="2004">2004</option>
//             <option value="2005">2005</option>
//             <option value="2006">2006</option>
//             <option value="2007">2007</option>
//             <option value="2008">2008</option>
//             <option value="2009">2009</option>
//             <option value="2010">2010</option>
//             <option value="2011">2011</option>
//             <option value="2012">2012</option>
//             <option value="2013">2013</option>
//             <option value="2014">2014</option>
//             <option value="2015">2015</option>
//             <option value="2016">2016</option>
//             <option value="2017">2017</option>
//             <option value="2018">2018</option>
//             <option value="2019">2019</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//             <option value="2022">2022</option>
//             <option value="2023">2023</option>
//             <option value="2024">2024</option>
//           </select>
//         </div>
//       </div>
//       <button type="submit">REGISTER</button>
//     </form>
//   );
// }

// export default OnlineRegistrationForm;


// 3chi vazifa

import React, { useState, useEffect } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setFilteredPhotos(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilter = () => {
    const start = parseInt(startId);
    const end = parseInt(endId);
    if (isNaN(start) || isNaN(end)) {
      alert('Iltimos, ID kiriting!');
      return;
    }
    const filtered = photos.filter(photo => photo.id >= start && photo.id <= end);
    setFilteredPhotos(filtered);
  };

  return (
    <div className="App">
      <div className="filter-container">
        <input type="number" placeholder="Boshlang'ich ID"  value={startId} onChange={(e) => setStartId(e.target.value)} />
        <input type="number"placeholder="Oxirgi ID"value={endId}onChange={(e) => setEndId(e.target.value)}/>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="cards-container">
        {filteredPhotos.map(photo => (
          <div className="card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="card-content">
              <h3>{photo.title}</h3>
              <p>ID: {photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
