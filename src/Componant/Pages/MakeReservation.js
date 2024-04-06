import React from 'react';
import p1 from '../../img/p9.jpg'
import { useState } from 'react';

import Thankyoumodal from '../Pages/Thankyoumodal';
import ErrorModal from '../Pages/ErrorModal';

const MakeReservation = () => {
  const [open,setOpen]=useState(false);
  const [openError,setOpenError]=useState(false);
  const handleClick=()=>{
    setOpen(false);
  }
  const handleClickError=()=>{
    setOpenError(false);
  }
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const email =form.email.value;
    const number=form.number.value;
    const people =form.people.value;
    const date =form.date.value;
    const request =form.request.value;

    const emaildata={
      name,
      email,
      number,
      people,
      date,
      request
    }
    
    console.log(emaildata);
    fetch('https://wapparels-server.vercel.app/makereservation',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(emaildata)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.status===201){
        console.log('mail sent');
        setOpen(!open);
      }
      else{
        console.log('error');
        setOpenError(!openError);
      }
      
    })
    form.reset();
  }
  return (
    <div style={{
      backgroundImage:` url(${p1})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg font-Nunito">  
      <div className='bg-black/50'>
          <div className='pb-10 lg:pb-20 pt-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Order your table</h1></div>
          
      </div>
      <form onSubmit={handleSubmit} className='rounded-xl'>
          <div className='bg-gray-200 '>
          <div className=" bg-base-200 px-10 lg:px-20 pt-20">
            <div className='text-center'>
              <h1 className="lg:text-4xl text-3xl font-bold">Make a reservation</h1>
            </div>
      <div class="border-b border-gray-900/10 pb-12 ">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input type="text" name="name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input type="email" name="email" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
          <div class="mt-2">
            <input type="text" name="number" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Number of People</label>
          <div class="mt-2">
            <input type="email" name="people" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
          </div>
        </div>

        

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Date and Time</label>
          <div class="mt-2">
            <input type="text" name="date" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Special Request</label>
          <div class="mt-2">
            <input type="text" name="request" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
      </div>
    </div>
      <div class="py-10 flex items-center justify-end gap-x-6">
        <input type="button" class="text-sm font-semibold leading-6 text-gray-900" value='Cancel'/>
        <input type="submit" class="cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm" value='Send'/>
      </div>
            
          </div>
          </div>
      </form>
      <Thankyoumodal open={open} handleClick={handleClick}/>
      <ErrorModal openError={openError} handleClickError={handleClickError}/>
    </div>
  );
};

export default MakeReservation;